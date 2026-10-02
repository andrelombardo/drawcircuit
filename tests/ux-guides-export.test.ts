import { describe, expect, it } from 'vitest';
import { createComponent } from '../src/model/catalog';
import { createJunction, createWire } from '../src/model/factories';
import type { CircuitDocument, CircuitObject, Wire } from '../src/model/types';
import {
  computeMoveGuides,
  createMoveContext,
  freeGap,
  GuideIndex,
  nearestNeighbors,
} from '../src/utils/smartGuides';
import { contentBounds, unionBounds, visualBounds } from '../src/utils/visualBounds';
import { resolveEndpoint, wirePoints } from '../src/utils/geometry';
import {
  exportSelectionObsidian,
  exportSelectionTikz,
  selectionDocument,
} from '../src/tikz/selection';
import { exportTikz } from '../src/tikz/exporter';
import { serializeDocument } from '../src/model/serialization';
import { toolbarActions } from '../src/components/properties/toolbarActions';
const doc = (objects: CircuitObject[]): CircuitDocument => ({ version: 1, title: 'UX', objects });
const resistor = (id: string, x: number, y = 0) => ({
  ...createComponent('resistor', { x, y }),
  id,
  label: { ...createComponent('resistor', { x, y }).label, text: id },
});
function row(vertical = false) {
  const objects = [resistor('R2', 0), resistor('R3', 200), resistor('R4', 500)];
  if (vertical)
    for (const o of objects) {
      o.y = o.x;
      o.x = 0;
      o.rotation = 90;
    }
  return doc(objects);
}
const terminal = (id: string, terminalId = 'b') => ({
  kind: 'terminal' as const,
  componentId: id,
  terminalId,
});
describe('contextual distances and spatial search', () => {
  it('uses visible lead extents instead of padded hit boxes', () => {
    const d = row(),
      a = visualBounds(d.objects[0], d),
      b = visualBounds(d.objects[1], d);
    expect(a).toEqual({ x: -40, y: -9, width: 80, height: 18 });
    expect(freeGap(a, b, 'x')).toBe(120);
  });
  for (const vertical of [false, true])
    it(`finds nearest ${vertical ? 'vertical' : 'horizontal'} neighbors and ignores unrelated objects`, () => {
      const d = row(vertical);
      d.objects.push(
        resistor('off', vertical ? 60 : 210, vertical ? 210 : 60),
        resistor('far', 4000),
      );
      const context = createMoveContext(d, ['R3']),
        result = nearestNeighbors(
          context.moving.bounds,
          context.index.nearby(context.moving.bounds),
          vertical ? 'y' : 'x',
          7,
        );
      expect(result.before?.id).toBe('R2');
      expect(result.after?.id).toBe('R4');
    });
  for (const vertical of [false, true])
    it(`shows two changing gaps and detects/snaps equal spacing ${vertical ? 'vertically' : 'horizontally'}`, () => {
      const d = row(vertical),
        context = createMoveContext(d, ['R3']),
        axis = vertical ? 'y' : 'x';
      const initial = computeMoveGuides(context, { x: 0, y: 0 }, 1);
      expect(initial.distances.map((g) => g.value)).toEqual([120, 220]);
      const result = computeMoveGuides(context, vertical ? { x: 0, y: 46 } : { x: 46, y: 0 }, 1);
      expect(result.delta[axis]).toBe(50);
      expect(result.distances.map((g) => g.value)).toEqual([170, 170]);
      expect(result.distances.every((g) => g.equal)).toBe(true);
      expect(result.alignment[vertical ? 'x' : 'y']).toBeDefined();
    });
  it('Alt disables spacing, alignment and terminal assistance while retaining grid movement', () => {
    const result = computeMoveGuides(createMoveContext(row(), ['R3']), { x: 46, y: 4 }, 1, true);
    expect(result).toEqual({ delta: { x: 40, y: 0 }, alignment: {}, distances: [], target: null });
  });
  it('uses screen-pixel snapping thresholds consistently across zoom', () => {
    const c = createMoveContext(row(), ['R3']);
    expect(computeMoveGuides(c, { x: 40, y: 0 }, 0.5).delta.x).toBe(50);
    expect(computeMoveGuides(c, { x: 40, y: 0 }, 2).delta.x).toBe(40);
  });
  it('extends a local distribution using the preceding free gap', () => {
    const d = doc([
      resistor('R1', 0),
      resistor('R2', 200),
      resistor('R3', 400),
      resistor('R4', 660),
    ]);
    const result = computeMoveGuides(createMoveContext(d, ['R4']), { x: -56, y: 0 }, 1);
    expect(result.delta.x).toBe(-60);
    expect(result.distances.map((g) => g.value)).toEqual([120, 120]);
    expect(result.distances.every((g) => g.equal)).toBe(true);
  });
  it('gives terminal snapping priority over measurements', () => {
    const result = computeMoveGuides(createMoveContext(row(), ['R3']), { x: -116, y: 0 }, 1);
    expect(result.target).toEqual({ x: 40, y: 0 });
    expect(result.delta.x).toBe(-120);
    expect(result.distances).toEqual([]);
  });
  it('treats multiple components as one box and excludes their internal distances', () => {
    const d = doc([
        resistor('left', -300),
        resistor('a', 0),
        resistor('b', 200),
        resistor('right', 700),
      ]),
      c = createMoveContext(d, ['a', 'b']);
    expect(c.moving.bounds.width).toBe(280);
    expect(c.moving.pins).toEqual([]);
    const result = computeMoveGuides(c, { x: 2, y: 0 }, 1);
    expect(result.distances.map((g) => g.neighborId)).toEqual(['left', 'right']);
  });
  it('supports Junction distances node-to-node', () => {
    const a = createJunction({ x: 0, y: 0 }, 'A'),
      b = createJunction({ x: 180, y: 0 }, 'B'),
      c = createJunction({ x: 500, y: 0 }, 'C');
    const result = computeMoveGuides(createMoveContext(doc([a, b, c]), [b.id]), { x: 67, y: 0 }, 1);
    expect(result.delta.x).toBe(70);
    expect(result.distances.map((g) => g.value)).toEqual([250, 250]);
  });
  for (const type of ['capacitor', 'inductor', 'voltageSource', 'diode', 'blackBox'] as const)
    it(`supports ${type} geometry`, () => {
      const middle = { ...createComponent(type, { x: 200, y: 0 }), id: 'middle' },
        d = doc([resistor('left', 0), middle, resistor('right', 500)]);
      const result = computeMoveGuides(createMoveContext(d, ['middle']), { x: 46, y: 0 }, 1);
      expect(result.distances).toHaveLength(2);
      expect(result.distances.every((g) => g.equal)).toBe(true);
    });
  it('ignores annotation baselines when distributing circuit components', () => {
    const d = row();
    d.objects.push({
      kind: 'text',
      id: 'annotation',
      x: 0,
      y: 40,
      text: 'i_1',
      fontSize: 20,
      align: 'middle',
      rotation: 0,
      color: '#171a20',
    });
    expect(computeMoveGuides(createMoveContext(d, ['R3']), { x: 40, y: 40 }, 1).delta).toEqual({
      x: 40,
      y: 40,
    });
  });
  it('queries local buckets instead of returning thousands of distant objects', () => {
    const objects = Array.from({ length: 3000 }, (_, i) => resistor(`r${i}`, i * 200));
    const d = doc(objects),
      index = new GuideIndex(d, new Set());
    expect(index.nearby(visualBounds(objects[1500], d)).length).toBeLessThan(15);
  });
});
describe('selection-only export', () => {
  function fixture() {
    const components = [
      resistor('R1', 1400, 900),
      resistor('R2', 1800, 900),
      resistor('R3', 2100, 900),
      resistor('R4', 2500, 900),
    ];
    const wires = [
      createWire(terminal('R1'), terminal('R2', 'a')),
      createWire(terminal('R2'), terminal('R3', 'a')),
      createWire(terminal('R3'), terminal('R4', 'a')),
    ];
    return { d: doc([...components, ...wires]), internal: wires[1], external: wires[0] };
  }
  it('includes labels/styles and only internal wires automatically, without altering the source', () => {
    const { d, internal } = fixture(),
      before = serializeDocument(d),
      subset = selectionDocument(d, ['R2', 'R3']);
    expect(subset.objects.map((o) => o.id)).toEqual(['R2', 'R3', internal.id]);
    expect(subset.objects[0]).toMatchObject({ label: { text: 'R2' }, color: '#171a20', width: 2 });
    expect(serializeDocument(d)).toBe(before);
  });
  it('normalizes only the exported bounds and preserves relative geometry', () => {
    const { d } = fixture(),
      subset = selectionDocument(d, ['R2', 'R3']);
    const b = unionBounds(subset.objects.map((o) => contentBounds(o, subset)));
    expect(b.x).toBeCloseTo(0);
    expect(b.y).toBeCloseTo(0);
    const [a, c] = subset.objects;
    expect('x' in a && 'x' in c && c.x - a.x).toBe(300);
    expect(b.width).toBe(380);
    expect(exportTikz(d)).toContain('(44,');
  });
  for (const mode of ['tikz', 'obsidian'])
    it(`exports selected labels and excludes outside objects in ${mode}`, () => {
      const { d } = fixture(),
        code =
          mode === 'tikz'
            ? exportSelectionTikz(d, ['R2', 'R3'])
            : exportSelectionObsidian(d, ['R2', 'R3']);
      expect(code).toContain('R2');
      expect(code).toContain('R3');
      expect(code).not.toContain('R1');
      expect(code).not.toContain('R4');
      expect(code).not.toContain('distance');
      expect(code).not.toContain('selection');
      if (mode === 'obsidian') expect(code).toMatch(/^```tikz\n/);
    });
  it('includes necessary Junctions for explicit wires, excludes unrelated Junctions', () => {
    const a = createJunction({ x: 100, y: 100 }, 'A'),
      b = createJunction({ x: 300, y: 100 }, 'B'),
      unused = createJunction({ x: 700, y: 100 }, 'C'),
      w = createWire(
        { kind: 'junction', junctionId: a.id },
        { kind: 'junction', junctionId: b.id },
      );
    const subset = selectionDocument(doc([a, b, unused, w]), [w.id]);
    expect(subset.objects.map((o) => o.id)).toEqual([a.id, b.id, w.id]);
    expect(() => wirePoints(subset.objects.at(-1) as Wire, subset)).not.toThrow();
  });
  it('includes a selected Junction and internal wires connected to it', () => {
    const j = createJunction({ x: 100, y: 0 }, 'A'),
      r = resistor('R2', 300),
      w = createWire({ kind: 'junction', junctionId: j.id }, terminal(r.id, 'a'));
    expect(selectionDocument(doc([j, r, w]), [j.id, r.id]).objects).toHaveLength(3);
  });
  it('preserves explicitly selected external wires, detaches missing component references', () => {
    const { d, external } = fixture(),
      subset = selectionDocument(d, ['R2', external.id]),
      w = subset.objects.find((o) => o.kind === 'wire') as Wire;
    expect(w.startEndpoint.kind).toBe('free');
    expect(w.endEndpoint).toMatchObject({ componentId: 'R2' });
    expect(() => resolveEndpoint(w.endEndpoint, subset)).not.toThrow();
  });
  it('does not add standalone text without selecting it and handles empty selections', () => {
    const { d } = fixture();
    d.objects.push({
      kind: 'text',
      id: 'note',
      text: 'NOTE',
      x: 2000,
      y: 500,
      rotation: 0,
      fontSize: 22,
      color: '#171a20',
      align: 'start',
    });
    expect(exportSelectionTikz(d, ['R2'])).not.toContain('NOTE');
    expect(exportSelectionTikz(d, ['R2', 'note'])).toContain('NOTE');
    expect(selectionDocument(d, []).objects).toEqual([]);
  });
});
describe('adaptive property action audit', () => {
  it('keeps component essentials direct and label rotation secondary without duplicate rotation', () => {
    const actions = toolbarActions(resistor('R1', 0));
    expect(actions.primary).toContain('textSize');
    expect(actions.primary).toContain('stroke');
    expect(actions.primary).toContain('duplicate');
    expect(actions.secondary).toContain('rotateLabel');
    expect(actions.secondary).not.toContain('rotate');
  });
  it('offers internal text only for components that have it', () => {
    expect(toolbarActions(createComponent('blackBox', { x: 0, y: 0 })).secondary).toContain(
      'bodyText',
    );
    expect(toolbarActions(resistor('R1', 0)).secondary).not.toContain('bodyText');
  });
  for (const kind of ['wire', 'arrow', 'loop-arrow', 'junction'] as const)
    it(`only offers applicable controls for ${kind}`, () => {
      const o =
        kind === 'wire'
          ? createWire(
              { kind: 'free', point: { x: 0, y: 0 } },
              { kind: 'free', point: { x: 100, y: 0 } },
            )
          : kind === 'junction'
            ? createJunction({ x: 0, y: 0 }, 'A')
            : kind === 'loop-arrow'
              ? {
                  kind,
                  id: 'loop',
                  x: 0,
                  y: 0,
                  width: 100,
                  height: 80,
                  direction: 'clockwise' as const,
                  arrowPosition: 0.125,
                  color: '#171a20',
                  strokeWidth: 2,
                }
              : {
                  kind,
                  id: 'arrow',
                  type: 'straight' as const,
                  start: { x: 0, y: 0 },
                  end: { x: 100, y: 0 },
                  controlPoints: [
                    { x: 0, y: 0 },
                    { x: 100, y: 0 },
                  ] as [{ x: number; y: number }, { x: number; y: number }],
                  color: '#171a20',
                  width: 2,
                  reversed: false,
                };
      const actions = toolbarActions(o);
      expect(actions.primary).not.toContain('rotate');
      expect(actions.primary).toContain('color');
      expect(actions.primary.includes('reverse')).toBe(kind === 'arrow' || kind === 'loop-arrow');
      if (kind === 'wire' || kind === 'loop-arrow') expect(actions.secondary).toEqual([]);
    });
});
