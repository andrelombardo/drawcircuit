import { beforeEach, describe, expect, it } from 'vitest';
import { circuitPresets, matchesPreset, presetRegistry } from '../src/presets/registry';
import { instantiatePreset } from '../src/presets/instantiate';
import { presetCategories } from '../src/presets/types';
import { createComponent } from '../src/model/catalog';
import { createJunction, createTextAnnotation } from '../src/model/factories';
import { emptyDocument } from '../src/model/demo';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import { GRID } from '../src/model/types';
import type { CircuitComponent, CircuitDocument, Endpoint, Rotation } from '../src/model/types';
import { exportStandalone } from '../src/tikz/exporter';
import { useEditorStore } from '../src/store/editorStore';
import {
  localToWorld,
  moveObject,
  resolveEndpoint,
  rotatePoint,
  wirePoints,
} from '../src/utils/geometry';
import { extractSelection, cloneObjects, removeObjects } from '../src/utils/operations';
import { findSnapCandidate } from '../src/smartPlacement/findCandidates';
import { insertJunction } from '../src/utils/wires';

const docFor = (id: string): CircuitDocument => ({
  ...emptyDocument(),
  objects: instantiatePreset(presetRegistry[id], { x: 0, y: 0 }, 0, emptyDocument()),
});
const key = (ep: Endpoint) =>
  ep.kind === 'terminal'
    ? `${ep.componentId}.${ep.terminalId}`
    : ep.kind === 'junction'
      ? ep.junctionId
      : JSON.stringify(ep.point);
function nets(doc: CircuitDocument) {
  const parents = new Map<string, string>();
  const find = (name: string): string => {
    const parent = parents.get(name);
    if (!parent) {
      parents.set(name, name);
      return name;
    }
    if (parent === name) return name;
    const root = find(parent);
    parents.set(name, root);
    return root;
  };
  for (const o of doc.objects)
    if (o.kind === 'wire') parents.set(find(key(o.startEndpoint)), find(key(o.endEndpoint)));
  const node = (label: string) => {
    const object = doc.objects.find((o) => o.kind === 'junction' && o.label.text === label)!;
    return find(object.id);
  };
  const branch = (label: string) => {
    const component = doc.objects.find(
      (o): o is CircuitComponent => o.kind === 'component' && o.label.text === label,
    )!;
    return new Set(component.terminals.map((t) => find(`${component.id}.${t.id}`)));
  };
  return { node, branch, find };
}
beforeEach(() =>
  useEditorStore.setState({
    document: emptyDocument(),
    selection: [],
    tool: 'select',
    pendingPresetId: null,
    placementRotation: 0,
    past: [],
    future: [],
    gestureStart: null,
  }),
);

describe('quick block registry and native factories', () => {
  it('contains exactly the 23 requested blocks in four categories, with stable unique keys', () => {
    expect(circuitPresets).toHaveLength(23);
    expect(new Set(circuitPresets.map((p) => p.id)).size).toBe(23);
    expect(
      presetCategories.map(
        (category) => circuitPresets.filter((p) => p.category === category).length,
      ),
    ).toEqual([6, 7, 6, 4]);
    for (const preset of circuitPresets) {
      const keys = [...preset.components, ...preset.junctions].map((o) => o.key);
      expect(new Set(keys).size).toBe(keys.length);
      expect(preset.name.length).toBeGreaterThan(3);
    }
  });
  it.each(['stella', 'star', 'wye'])('finds the star using %s', (search) =>
    expect(matchesPreset(presetRegistry['resistor-star'], search)).toBe(true),
  );
  it.each(['delta', 'triangle', 'triangolo'])('finds the delta using %s', (search) =>
    expect(matchesPreset(presetRegistry['resistor-delta'], search)).toBe(true),
  );
  it.each(['thevenin', 'thévenin', 'ThEvEnIn'])('normalizes the Thévenin alias %s', (search) =>
    expect(matchesPreset(presetRegistry.thevenin, search)).toBe(true),
  );
  it.each(['ponte', 'wheatstone'])('finds the bridge using %s', (search) =>
    expect(matchesPreset(presetRegistry['wheatstone-bridge'], search)).toBe(true),
  );
  it.each(circuitPresets)('creates valid ordinary objects and connections for $id', (preset) => {
    const doc = docFor(preset.id);
    expect(doc.objects.filter((o) => o.kind === 'component')).toHaveLength(
      preset.components.length,
    );
    expect(doc.objects.filter((o) => o.kind === 'junction')).toHaveLength(preset.junctions.length);
    expect(doc.objects.filter((o) => o.kind === 'wire')).toHaveLength(preset.wires.length);
    expect(new Set(doc.objects.map((o) => o.id)).size).toBe(doc.objects.length);
    const usedTerminals = new Set<string>();
    for (const object of doc.objects) {
      expect(object).not.toHaveProperty('preset');
      expect(object).not.toHaveProperty('value');
      expect(object).not.toHaveProperty('fontFamily');
      if (object.kind === 'component' || object.kind === 'junction') {
        expect(Math.abs(object.x % GRID)).toBe(0);
        expect(Math.abs(object.y % GRID)).toBe(0);
        expect(object.label).not.toHaveProperty('fontFamily');
      }
      if (object.kind === 'wire') {
        for (const ep of [object.startEndpoint, object.endEndpoint]) {
          expect(ep.kind).not.toBe('free');
          const point = resolveEndpoint(ep, doc);
          expect(Math.abs(point.x % GRID)).toBe(0);
          expect(Math.abs(point.y % GRID)).toBe(0);
          usedTerminals.add(key(ep));
        }
        const points = wirePoints(object, doc);
        expect(points.length).toBeGreaterThan(1);
        for (let i = 1; i < points.length; i++)
          expect(points[i].x === points[i - 1].x || points[i].y === points[i - 1].y).toBe(true);
      }
    }
    for (const o of doc.objects)
      if (o.kind === 'component')
        for (const t of o.terminals) expect(usedTerminals.has(`${o.id}.${t.id}`)).toBe(true);
    expect(deserializeDocument(serializeDocument(doc))).toEqual(doc);
    const tex = exportStandalone(doc);
    expect(tex).toContain('\\begin{circuitikz}');
    expect(tex).not.toMatch(/undefined|NaN/);
    expect(tex).toContain('\\end{document}');
  });
  it.each(circuitPresets)('offsets and rotates all native geometry for $id', (preset) => {
    const base = docFor(preset.id);
    for (const rotation of [0, 90, 180, 270] as Rotation[]) {
      const moved = instantiatePreset(preset, { x: 213, y: -87 }, rotation, emptyDocument());
      for (let i = 0; i < base.objects.length; i++) {
        const a = base.objects[i],
          b = moved[i];
        if (
          (a.kind === 'component' || a.kind === 'junction' || a.kind === 'text') &&
          (b.kind === 'component' || b.kind === 'junction' || b.kind === 'text')
        ) {
          const point = rotatePoint(a, rotation);
          expect({ x: b.x, y: b.y }).toEqual({ x: point.x + 220, y: point.y - 80 });
        }
        if (a.kind === 'component' && b.kind === 'component') {
          expect(b.rotation).toBe((a.rotation + rotation) % 360);
          for (let n = 0; n < a.terminals.length; n++) {
            const point = rotatePoint(
              localToWorld(a, { x: a.terminals[n].localX, y: a.terminals[n].localY }),
              rotation,
            );
            expect(localToWorld(b, { x: b.terminals[n].localX, y: b.terminals[n].localY })).toEqual(
              { x: point.x + 220, y: point.y - 80 },
            );
          }
          expect(b.label.offset).toEqual(rotatePoint(a.label.offset, rotation));
        }
        if (a.kind === 'wire' && b.kind === 'wire')
          expect(b.vertices).toEqual(
            a.vertices.map((p) => {
              const q = rotatePoint(p, rotation);
              return { x: q.x + 220, y: q.y - 80 };
            }),
          );
      }
      expect(() =>
        deserializeDocument(serializeDocument({ ...emptyDocument(), objects: moved })),
      ).not.toThrow();
    }
  });
  it('reserves numeric names across legacy spelling, components, junctions and annotations', () => {
    const existing = emptyDocument();
    existing.objects = [
      createComponent('resistor', { x: 0, y: 0 }),
      createComponent('resistor', { x: 80, y: 0 }),
      createJunction({ x: 0, y: 80 }, 'R_3'),
      createTextAnnotation({ x: 0, y: 100 }, 'R_4 = 50 \\ohm'),
    ];
    if (existing.objects[0].kind === 'component') existing.objects[0].label.text = 'R1';
    if (existing.objects[1].kind === 'component') existing.objects[1].label.text = 'R_{2}';
    const before = structuredClone(existing);
    const objects = instantiatePreset(
      presetRegistry['resistors-series-3'],
      { x: 400, y: 200 },
      0,
      existing,
    );
    expect(objects.flatMap((o) => (o.kind === 'component' ? [o.label.text] : []))).toEqual([
      'R_5',
      'R_6',
      'R_7',
    ]);
    expect(existing).toEqual(before);
  });
  it('creates optional annotations with the shared factory, placement offset and rotation', () => {
    const preset = { ...presetRegistry['rc-series'], annotations: [{ x: 20, y: 40, text: 'I_1' }] };
    const objects = instantiatePreset(preset, { x: 100, y: 200 }, 90, emptyDocument());
    expect(objects.at(-1)).toMatchObject({
      kind: 'text',
      x: 60,
      y: 220,
      text: 'I_1',
      rotation: 90,
    });
    expect(() =>
      deserializeDocument(serializeDocument({ ...emptyDocument(), objects })),
    ).not.toThrow();
  });
  it('allocates C/L/V/I names and retains semantic names with an editable suffix', () => {
    const first = docFor('rlc-series');
    first.objects.push(
      ...instantiatePreset(presetRegistry['two-meshes'], { x: 600, y: 0 }, 0, first),
    );
    first.objects.push(createComponent('currentSource', { x: 0, y: 400 }));
    const second = instantiatePreset(presetRegistry['rlc-series'], { x: 0, y: 500 }, 0, first);
    expect(second.flatMap((o) => (o.kind === 'component' ? [o.label.text] : []))).toEqual([
      'R_5',
      'L_2',
      'C_2',
    ]);
    const mesh = instantiatePreset(presetRegistry['two-meshes'], { x: 0, y: 0 }, 0, first);
    expect(
      mesh.flatMap((o) =>
        o.kind === 'component' && o.type === 'voltageSource' ? [o.label.text] : [],
      ),
    ).toEqual(['V_3', 'V_4']);
    const numericCurrent = {
      ...presetRegistry.norton,
      components: presetRegistry.norton.components.map((c) => ({
        ...c,
        label: c.type === 'currentSource' ? 'I_1' : c.label,
      })),
    };
    expect(
      instantiatePreset(numericCurrent, { x: 0, y: 0 }, 0, first).find(
        (o) => o.kind === 'component' && o.type === 'currentSource',
      ),
    ).toMatchObject({ label: { text: 'I_2' } });
    const delta = docFor('resistor-delta');
    const delta2 = instantiatePreset(presetRegistry['resistor-delta'], { x: 500, y: 0 }, 0, delta);
    expect(delta2.flatMap((o) => (o.kind === 'component' ? [o.label.text] : []))).toEqual([
      'R_{AB}^{(2)}',
      'R_{BC}^{(2)}',
      'R_{CA}^{(2)}',
    ]);
    expect(delta2.flatMap((o) => (o.kind === 'junction' ? [o.label.text] : []))).toEqual([
      'A_2',
      'B_2',
      'C_2',
    ]);
  });
});

describe('electrical topology through native endpoint references', () => {
  it('joins exactly three resistors at N, with three distinct external star nodes', () => {
    const doc = docFor('resistor-star'),
      graph = nets(doc);
    expect(doc.objects.filter((o) => o.kind === 'component' && o.type === 'resistor')).toHaveLength(
      3,
    );
    expect(doc.objects.filter((o) => o.kind === 'junction')).toHaveLength(4);
    const nodes = ['A', 'B', 'C', 'N'].map(graph.node);
    expect(new Set(nodes).size).toBe(4);
    ['R_1', 'R_2', 'R_3'].forEach((r, i) =>
      expect(graph.branch(r)).toEqual(new Set([nodes[i], nodes[3]])),
    );
  });
  it('closes the delta with AB, BC and CA connected to exactly their named nodes', () => {
    const doc = docFor('resistor-delta'),
      graph = nets(doc);
    expect(doc.objects.filter((o) => o.kind === 'junction')).toHaveLength(3);
    expect(new Set(['A', 'B', 'C'].map(graph.node)).size).toBe(3);
    for (const [r, a, b] of [
      ['R_{AB}', 'A', 'B'],
      ['R_{BC}', 'B', 'C'],
      ['R_{CA}', 'C', 'A'],
    ])
      expect(graph.branch(r)).toEqual(new Set([graph.node(a), graph.node(b)]));
  });
  it('builds the Wheatstone four arms and BC bridge, without merging distinct nets', () => {
    const graph = nets(docFor('wheatstone-bridge'));
    expect(new Set(['A', 'B', 'C', 'D'].map(graph.node)).size).toBe(4);
    for (const [r, a, b] of [
      ['R_1', 'A', 'B'],
      ['R_2', 'A', 'C'],
      ['R_3', 'B', 'D'],
      ['R_4', 'C', 'D'],
      ['R_5', 'B', 'C'],
    ])
      expect(graph.branch(r)).toEqual(new Set([graph.node(a), graph.node(b)]));
  });
  it('updates attached routes when a junction moves, and detaches endpoints safely on deletion', () => {
    const doc = docFor('resistor-star'),
      center = doc.objects.find((o) => o.kind === 'junction' && o.label.text === 'N')!;
    const moved = {
      ...doc,
      objects: doc.objects.map((o) =>
        o.id === center.id ? moveObject(o, { x: 40, y: 20 }, new Set([center.id])) : o,
      ),
    };
    for (const o of moved.objects)
      if (o.kind === 'wire') {
        for (const ep of [o.startEndpoint, o.endEndpoint])
          if (ep.kind === 'junction' && ep.junctionId === center.id)
            expect(resolveEndpoint(ep, moved)).toEqual({ x: 40, y: 20 });
        expect(() => wirePoints(o, moved)).not.toThrow();
      }
    const resistor = moved.objects.find((o) => o.kind === 'component')!;
    expect(() =>
      deserializeDocument(serializeDocument(removeObjects(moved, [resistor.id]))),
    ).not.toThrow();
  });
  it('exposes ordinary terminals to magnetic snap and supports Quick Junction on a preset wire', () => {
    const doc = docFor('resistor-delta');
    const component = doc.objects.find((o): o is CircuitComponent => o.kind === 'component')!;
    const terminal = localToWorld(component, {
      x: component.terminals[0].localX,
      y: component.terminals[0].localY,
    });
    expect(
      findSnapCandidate(doc, 'resistor', { x: terminal.x + 40, y: terminal.y }, 0, 1, null),
    ).not.toBeNull();
    const result = insertJunction(doc, { x: -160, y: -100 });
    expect(result.doc.objects.length).toBeGreaterThan(doc.objects.length);
    expect(() => deserializeDocument(serializeDocument(result.doc))).not.toThrow();
  });
});

describe('store history and native multi-selection', () => {
  it('inserts the entire bridge with one Undo, Redo and all new objects selected', () => {
    const s = useEditorStore.getState();
    s.selectPreset('wheatstone-bridge');
    s.rotatePlacement();
    s.insertPreset({ x: 400, y: 300 });
    const placed = useEditorStore.getState();
    expect(placed.tool).toBe('select');
    expect(placed.pendingPresetId).toBeNull();
    expect(placed.selection).toEqual(placed.document.objects.map((o) => o.id));
    expect(placed.past).toHaveLength(1);
    const document = placed.document;
    placed.undo();
    expect(useEditorStore.getState().document.objects).toHaveLength(0);
    useEditorStore.getState().redo();
    expect(useEditorStore.getState().document).toEqual(document);
  });
  it('inserts a star twice with entirely fresh IDs, labels and endpoint references', () => {
    for (let i = 0; i < 2; i++) {
      useEditorStore.getState().selectPreset('resistor-star');
      useEditorStore.getState().insertPreset({ x: i * 500, y: 0 });
    }
    const s = useEditorStore.getState();
    expect(s.past).toHaveLength(2);
    expect(s.document.objects).toHaveLength(26);
    expect(new Set(s.document.objects.map((o) => o.id)).size).toBe(26);
    expect(
      s.document.objects.flatMap((o) => (o.kind === 'component' ? [o.label.text] : [])),
    ).toEqual(['R_1', 'R_2', 'R_3', 'R_4', 'R_5', 'R_6']);
    expect(() => deserializeDocument(serializeDocument(s.document))).not.toThrow();
    s.undo();
    expect(useEditorStore.getState().document.objects).toHaveLength(13);
  });
  it('uses standard duplicate, rotation, extract and clone without a permanent group', () => {
    const s = useEditorStore.getState();
    s.selectPreset('resistor-delta');
    s.insertPreset({ x: 0, y: 0 });
    const original = useEditorStore.getState().document;
    useEditorStore.getState().duplicate();
    useEditorStore.getState().rotate();
    const duplicated = useEditorStore.getState();
    expect(duplicated.document.objects).toHaveLength(original.objects.length * 2);
    expect(() => deserializeDocument(serializeDocument(duplicated.document))).not.toThrow();
    const copy = cloneObjects(extractSelection(duplicated.document, duplicated.selection), {
      x: 40,
      y: 40,
    });
    expect(() =>
      deserializeDocument(serializeDocument({ ...emptyDocument(), objects: copy })),
    ).not.toThrow();
    duplicated.select([]);
    expect(useEditorStore.getState().document.objects).toHaveLength(24);
  });
  it('cancels pending presets on tool change and never serializes placement state', () => {
    const s = useEditorStore.getState();
    s.selectPreset('resistor-star');
    s.rotatePlacement();
    s.setTool('wire');
    expect(useEditorStore.getState().pendingPresetId).toBeNull();
    expect(useEditorStore.getState().placementRotation).toBe(0);
    expect(serializeDocument(s.document)).not.toMatch(/preset|group/);
    s.selectPreset('missing');
    expect(useEditorStore.getState().tool).toBe('wire');
    s.selectPreset('toString');
    expect(useEditorStore.getState().tool).toBe('wire');
  });
});
