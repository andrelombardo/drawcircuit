import { describe, expect, it } from 'vitest';
import { createComponent } from '../src/model/catalog';
import { emptyDocument } from '../src/model/demo';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import type { CircuitComponent, CircuitDocument, Junction, Point, Wire } from '../src/model/types';
import { useEditorStore } from '../src/store/editorStore';
import { localToWorld, moveObject, resolveEndpoint, wirePoints } from '../src/utils/geometry';
import {
  findAnchorTarget,
  findInlineCandidate,
  findSnapCandidate,
  snappedPosition,
} from '../src/smartPlacement/findCandidates';
import { placementIndex } from '../src/smartPlacement/spatialIndex';
import { smartPlacement } from '../src/smartPlacement/smartConnection';
import type { PlacementPreview } from '../src/smartPlacement/types';
import { exportTikz } from '../src/tikz/exporter';

const component = (x = 0, y = 0) => createComponent('resistor', { x, y }, 1);
function documentWith(...objects: CircuitDocument['objects']): CircuitDocument {
  return { ...emptyDocument(), objects };
}
const wire = (a: Point, b: Point): Wire => ({
  kind: 'wire',
  id: 'wire',
  startEndpoint: { kind: 'free', point: a },
  endEndpoint: { kind: 'free', point: b },
  vertices: [],
  width: 3,
  color: '#2463cb',
});
const junction = (x: number, y: number): Junction => ({
  kind: 'junction',
  id: 'node',
  x,
  y,
  color: '#171a20',
  label: { text: 'A', offset: { x: 0, y: -24 }, color: '#df4949', fontSize: 24, rotation: 0 },
});
function snapped(doc: CircuitDocument, p: Point, rotation: 0 | 90 = 0): PlacementPreview {
  const candidate = findSnapCandidate(doc, 'resistor', p, rotation, 1)!;
  expect(candidate).not.toBeNull();
  return {
    phase: 'snapped',
    candidate,
    position: snappedPosition('resistor', rotation, candidate),
    rotation,
    guides: [],
  };
}
function inline(doc: CircuitDocument, p: Point): PlacementPreview {
  const candidate = findInlineCandidate(doc, 'resistor', p, 0, 1)!;
  expect(candidate).not.toBeNull();
  return {
    phase: 'inline-candidate',
    candidate,
    position: candidate.position,
    rotation: candidate.rotation,
    guides: [],
  };
}
describe('Smart Placement candidate detection', () => {
  it('finds the nearest existing terminal and the facing preview terminal', () => {
    const a = component(),
      b = component(200),
      doc = documentWith(a, b);
    const c = findSnapCandidate(doc, 'resistor', { x: 85, y: 3 }, 0, 1)!;
    expect(c).toMatchObject({
      kind: 'terminal',
      terminalId: 'a',
      target: { endpoint: { componentId: a.id, terminalId: 'b' } },
    });
    expect(snappedPosition('resistor', 0, c)).toEqual({ x: 80, y: 0 });
    expect(findSnapCandidate(doc, 'resistor', { x: -82, y: 0 }, 0, 1)).toMatchObject({
      terminalId: 'b',
    });
  });
  it.each([0.15, 0.5, 1, 2, 4])('keeps a 16 px acquisition radius at zoom %s', (zoom) => {
    const doc = documentWith(component());
    expect(findSnapCandidate(doc, 'resistor', { x: 80, y: 15 / zoom }, 0, zoom)).not.toBeNull();
    expect(findSnapCandidate(doc, 'resistor', { x: 80, y: 17 / zoom }, 0, zoom)).toBeNull();
  });
  it('prefers junctions and preserves a candidate through one-pixel noise', () => {
    const doc = documentWith(component(), junction(42, 0));
    expect(findSnapCandidate(doc, 'resistor', { x: 80, y: 0 }, 0, 1)).toMatchObject({
      kind: 'junction',
    });
    const a = component(),
      b = component(4);
    const adjacent = documentWith(a, b);
    const held = findSnapCandidate(adjacent, 'resistor', { x: 80, y: 0 }, 0, 1)!;
    expect(findSnapCandidate(adjacent, 'resistor', { x: 83, y: 0 }, 0, 1, null, held)?.key).toBe(
      held.key,
    );
    expect(
      findSnapCandidate(adjacent, 'resistor', { x: 102, y: 0 }, 0, 1, null, held)?.key,
    ).not.toBe(held.key);
  });
  it('snaps exactly onto a wire without changing the document', () => {
    const doc = documentWith(wire({ x: -200, y: 0 }, { x: 200, y: 0 })),
      before = serializeDocument(doc);
    const c = findSnapCandidate(doc, 'resistor', { x: 5, y: 48 }, 90, 1)!;
    expect(c.kind).toBe('wire');
    expect(c.point.x).toBeCloseTo(5);
    expect(c.point.y).toBe(0);
    expect(serializeDocument(doc)).toBe(before);
  });
  it('ignores smart candidates while Alt/Option is held', () => {
    expect(
      findSnapCandidate(
        documentWith(component()),
        'resistor',
        { x: 80, y: 0 },
        0,
        1,
        null,
        null,
        true,
      ),
    ).toBeNull();
  });
  it.each([
    'npn',
    'nmos',
    'njfet',
    'opAmp',
    'transformer',
    'andGate',
    'potentiometer',
    'connector2',
    'connector3',
  ] as const)('requires a deliberate pin choice for %s', (type) => {
    const doc = documentWith(junction(0, 0));
    expect(findSnapCandidate(doc, type, { x: 40, y: 0 }, 0, 1)).toBeNull();
    const id = createComponent(type, { x: 0, y: 0 }, 1).terminals[0].id;
    const t = createComponent(type, { x: 0, y: 0 }, 1).terminals[0];
    expect(findSnapCandidate(doc, type, { x: -t.localX, y: -t.localY }, 0, 1, id)).toMatchObject({
      terminalId: id,
      kind: 'junction',
    });
  });
  it('caches the spatial index and marks occupied terminals without disabling them', () => {
    const a = component();
    const connection: Wire = {
      ...wire({ x: 0, y: 0 }, { x: 100, y: 0 }),
      startEndpoint: { kind: 'terminal', componentId: a.id, terminalId: 'b' },
    };
    const doc = documentWith(a, connection),
      index = placementIndex(doc);
    expect(placementIndex(doc)).toBe(index);
    expect(index.nearbyTargets({ x: 40, y: 0 }, 1)[0].connected).toBe(true);
    expect(findSnapCandidate(doc, 'resistor', { x: 80, y: 0 }, 0, 1)?.kind).toBe('terminal');
    expect(index.targetsIn({ x: 500, y: 500, width: 50, height: 50 })).toHaveLength(0);
  });
  it('finds click-to-anchor targets using screen distance', () => {
    const doc = documentWith(component());
    expect(findAnchorTarget(doc, { x: 40, y: 7 }, 2)?.endpoint).toMatchObject({ terminalId: 'b' });
    expect(findAnchorTarget(doc, { x: 40, y: 9 }, 2)).toBeNull();
  });
});
describe('Smart Placement semantic topology', () => {
  it('connects terminals semantically and follows later movement and rotation', () => {
    const a = component(),
      doc = documentWith(a);
    const result = smartPlacement(doc, 'resistor', snapped(doc, { x: 85, y: 3 }));
    const connection = result.doc.objects.find((o): o is Wire => o.kind === 'wire')!;
    expect(connection).toMatchObject({
      startEndpoint: { kind: 'terminal', componentId: a.id, terminalId: 'b' },
      endEndpoint: { kind: 'terminal', componentId: result.component.id, terminalId: 'a' },
    });
    const moved = {
      ...result.doc,
      objects: result.doc.objects.map((o) =>
        o.id === result.component.id
          ? ({
              ...moveObject(o, { x: 60, y: 60 }, new Set([o.id])),
              rotation: 90,
            } as CircuitComponent)
          : o,
      ),
    };
    expect(resolveEndpoint(connection.endEndpoint, moved)).toEqual({ x: 140, y: 20 });
    expect(wirePoints(connection, moved).at(-1)).toEqual({ x: 140, y: 20 });
    expect(result.continueEndpoint).toMatchObject({ terminalId: 'b' });
  });
  it('connects to existing Junction references', () => {
    const doc = documentWith(junction(0, 0)),
      result = smartPlacement(doc, 'resistor', snapped(doc, { x: 40, y: 0 }));
    expect(result.doc.objects.find((o) => o.kind === 'wire')).toMatchObject({
      startEndpoint: { kind: 'junction', junctionId: 'node' },
    });
    expect(result.doc.objects.filter((o) => o.kind === 'junction')).toHaveLength(1);
  });
  it('creates a junction, splits all incident wires, and connects the chosen pin', () => {
    const doc = documentWith(wire({ x: -200, y: 0 }, { x: 200, y: 0 }));
    const result = smartPlacement(doc, 'resistor', snapped(doc, { x: 0, y: 40 }, 90));
    const j = result.doc.objects.find((o): o is Junction => o.kind === 'junction')!;
    expect(j).toMatchObject({ x: 0, y: 0, label: { text: 'A' } });
    expect(result.doc.objects.filter((o) => o.kind === 'wire')).toHaveLength(3);
    const moved = {
      ...result.doc,
      objects: result.doc.objects.map((o) => (o.id === j.id ? { ...j, x: 20, y: 20 } : o)),
    };
    for (const w of moved.objects.filter((o): o is Wire => o.kind === 'wire'))
      expect(wirePoints(w, moved)).toContainEqual({ x: 20, y: 20 });
  });
  it('serializes and reloads smart references and exports finite TikZ', () => {
    const doc = documentWith(component()),
      result = smartPlacement(doc, 'resistor', snapped(doc, { x: 80, y: 0 }));
    const restored = deserializeDocument(serializeDocument(result.doc));
    expect(restored).toEqual(result.doc);
    expect(exportTikz(restored)).not.toMatch(/NaN|undefined/);
  });
  it('does not infer connectivity from free graphical overlap', () => {
    const doc = documentWith(component());
    const result = smartPlacement(doc, 'resistor', {
      phase: 'free',
      position: { x: 80, y: 0 },
      rotation: 0,
      guides: [],
    });
    expect(result.doc.objects.filter((o) => o.kind === 'wire')).toHaveLength(0);
  });
});
describe('intentional inline insertion', () => {
  it.each([
    { a: { x: -200, y: 0 }, b: { x: 200, y: 0 }, rotation: 0 },
    { a: { x: 0, y: -200 }, b: { x: 0, y: 200 }, rotation: 90 },
  ])(
    'cuts a wire, connects both terminals, and preserves style at rotation $rotation',
    ({ a, b, rotation }) => {
      const doc = documentWith(wire(a, b)),
        preview = inline(doc, { x: 0, y: 0 });
      expect(preview.rotation).toBe(rotation);
      const result = smartPlacement(doc, 'resistor', preview);
      expect(result.doc.objects.filter((o) => o.kind === 'junction')).toHaveLength(0);
      const wires = result.doc.objects.filter((o): o is Wire => o.kind === 'wire');
      expect(wires).toHaveLength(2);
      expect(wires[0].startEndpoint).toEqual(
        doc.objects[0].kind === 'wire' ? doc.objects[0].startEndpoint : null,
      );
      expect(wires[0].endEndpoint).toMatchObject({
        kind: 'terminal',
        componentId: result.component.id,
      });
      expect(wires[1].startEndpoint).toMatchObject({
        kind: 'terminal',
        componentId: result.component.id,
      });
      wires.forEach((w) => expect(w).toMatchObject({ color: '#2463cb', width: 3 }));
      expect(wirePoints(wires[0], result.doc).at(-1)).toEqual(
        localToWorld(result.component, { x: -40, y: 0 }),
      );
    },
  );
  it('records the whole insertion in one Undo and restores it with one Redo', () => {
    const doc = documentWith(wire({ x: -200, y: 0 }, { x: 200, y: 0 }));
    useEditorStore.setState({ document: doc, past: [], future: [], gestureStart: null });
    const result = smartPlacement(doc, 'resistor', inline(doc, { x: 0, y: 0 }));
    useEditorStore.getState().commit(result.doc);
    expect(useEditorStore.getState().past).toHaveLength(1);
    useEditorStore.getState().undo();
    expect(useEditorStore.getState().document).toEqual(doc);
    useEditorStore.getState().redo();
    expect(useEditorStore.getState().document).toEqual(result.doc);
  });
  it('preserves original endpoints and bends of a polyline', () => {
    const a = component(-200, -100),
      b = component(200, 100);
    const w: Wire = {
      ...wire({ x: 0, y: 0 }, { x: 0, y: 0 }),
      startEndpoint: { kind: 'terminal', componentId: a.id, terminalId: 'b' },
      endEndpoint: { kind: 'terminal', componentId: b.id, terminalId: 'a' },
      vertices: [
        { x: -100, y: -100 },
        { x: -100, y: 0 },
        { x: 100, y: 0 },
        { x: 100, y: 100 },
      ],
    };
    const doc = documentWith(a, b, w),
      result = smartPlacement(doc, 'resistor', inline(doc, { x: 0, y: 0 }));
    const wires = result.doc.objects.filter((o): o is Wire => o.kind === 'wire');
    expect(wires[0].startEndpoint).toEqual(w.startEndpoint);
    expect(wires[1].endEndpoint).toEqual(w.endEndpoint);
    expect(wirePoints(wires[0], result.doc)).toContainEqual({ x: -100, y: 0 });
    expect(wirePoints(wires[1], result.doc)).toContainEqual({ x: 100, y: 0 });
  });
  it('refuses short segments, branches, crossings and incompatible components', () => {
    expect(
      findInlineCandidate(
        documentWith(wire({ x: -30, y: 0 }, { x: 30, y: 0 })),
        'resistor',
        { x: 0, y: 0 },
        0,
        1,
      ),
    ).toBeNull();
    expect(
      findInlineCandidate(
        documentWith(wire({ x: -200, y: 0 }, { x: 200, y: 0 }), junction(0, 0)),
        'resistor',
        { x: 0, y: 0 },
        0,
        1,
      ),
    ).toBeNull();
    const crossing = { ...wire({ x: 0, y: -100 }, { x: 0, y: 100 }), id: 'crossing' };
    expect(
      findInlineCandidate(
        documentWith(wire({ x: -200, y: 0 }, { x: 200, y: 0 }), crossing),
        'resistor',
        { x: 0, y: 0 },
        0,
        1,
      ),
    ).toBeNull();
    expect(
      findInlineCandidate(
        documentWith(wire({ x: -200, y: 0 }, { x: 200, y: 0 })),
        'npn',
        { x: 0, y: 0 },
        0,
        1,
      ),
    ).toBeNull();
  });
  it('honors manual rotation rather than rotating a component onto an incompatible wire', () => {
    const doc = documentWith(wire({ x: -200, y: 0 }, { x: 200, y: 0 }));
    expect(findInlineCandidate(doc, 'resistor', { x: 0, y: 0 }, 90, 1, true)).toBeNull();
    expect(findInlineCandidate(doc, 'resistor', { x: 0, y: 0 }, 180, 1, true)?.terminalIds).toEqual(
      ['b', 'a'],
    );
  });
});
