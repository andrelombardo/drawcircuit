import { describe, expect, it, vi } from 'vitest';
import { componentRegistry, createComponent } from '../src/model/catalog';
import { createJunction, createTextAnnotation, createWire } from '../src/model/factories';
import { componentTypes } from '../src/model/types';
import type {
  CircuitComponent,
  CircuitDocument,
  CircuitObject,
  Endpoint,
  Point,
  Rotation,
} from '../src/model/types';
import { getMeasurementBounds } from '../src/utils/measurementGeometry';
import { computeMoveGuides, createMoveContext } from '../src/utils/smartGuides';
import { serializeDocument } from '../src/model/serialization';
import { exportTikz } from '../src/tikz/exporter';
import { visualBounds } from '../src/utils/visualBounds';
const doc = (objects: CircuitObject[]): CircuitDocument => ({
  version: 1,
  title: 'Measurements',
  objects,
});
const free = (x: number, y = 0): Endpoint => ({ kind: 'free', point: { x, y } });
const terminal = (component: CircuitComponent, terminalId: string): Endpoint => ({
  kind: 'terminal',
  componentId: component.id,
  terminalId,
});
function straight(center = 180, vertical = false, rotation: Rotation = vertical ? 90 : 0) {
  const component = createComponent(
    'resistor',
    vertical ? { x: 0, y: center } : { x: center, y: 0 },
  );
  component.rotation = rotation;
  const startPin = rotation === 180 || rotation === 270 ? 'b' : 'a';
  const endPin = startPin === 'a' ? 'b' : 'a';
  return {
    component,
    document: doc([
      component,
      createWire(free(0), terminal(component, startPin)),
      createWire(terminal(component, endPin), vertical ? free(0, 400) : free(400)),
    ]),
  };
}

describe('shared visual body geometry', () => {
  it.each([
    ['resistor', -20, 20],
    ['americanResistor', -24, 24],
    ['capacitor', -6, 6],
    ['polarizedCapacitor', -6, 9],
    ['inductor', -24, 24],
    ['voltageSource', -20, 20],
    ['diode', -14, 12],
    ['andGate', -20, 26.25],
    ['orGate', -24, 24],
    ['notGate', -20, 32],
    ['npn', -12, 20],
    ['blackBox', -24, 24],
  ] as const)('%s excludes terminal stubs and measures the actual body', (type, left, right) => {
    const component = createComponent(type, { x: 100, y: 200 });
    const body = getMeasurementBounds(component);
    expect(body.x).toBeCloseTo(100 + left);
    expect(body.x + body.width).toBeCloseTo(100 + right);
    expect(visualBounds(component, doc([component])).x).toBeLessThan(body.x);
    component.label.offset = { x: -500, y: 900 };
    expect(getMeasurementBounds(component)).toEqual(body);
  });
  it('gets coil height from the Bezier curve rather than control-point extents', () => {
    const body = componentRegistry.inductor.measurementBounds;
    expect(body).toEqual({ x: -24, y: -13.5, width: 48, height: 13.5 });
  });
  it.each(componentTypes)('every %s has authored body geometry through all rotations', (type) => {
    const component = createComponent(type, { x: 0, y: 0 });
    const original = getMeasurementBounds(component);
    for (const rotation of [0, 90, 180, 270] as const) {
      component.rotation = rotation;
      const body = getMeasurementBounds(component);
      expect(Object.values(body).every(Number.isFinite)).toBe(true);
      expect(body.width).toBeCloseTo(rotation % 180 ? original.height : original.width);
      expect(body.height).toBeCloseTo(rotation % 180 ? original.width : original.height);
    }
  });
});

describe('useful spaces on connected branches', () => {
  it.each([0, 90, 180, 270] as const)(
    'shows both free endpoints to body at rotation %s',
    (rotation) => {
      const vertical = rotation % 180 !== 0;
      const { component, document } = straight(180, vertical, rotation);
      const result = computeMoveGuides(
        createMoveContext(document, [component.id]),
        { x: 0, y: 0 },
        1,
      );
      expect(result.distances.map((g) => [g.from, g.to, g.value])).toEqual([
        [0, 160, 160],
        [200, 400, 200],
      ]);
      expect(result.distances.every((g) => g.axis === (vertical ? 'y' : 'x'))).toBe(true);
      expect(result.distances.map((g) => g.referenceKind)).toEqual(['endpoint', 'endpoint']);
    },
  );
  it('stops at the two corners of the top run, before remote nodes', () => {
    const component = createComponent('resistor', { x: 180, y: 0 });
    const a = createJunction({ x: 0, y: 240 }, 'A'),
      b = createJunction({ x: 400, y: 240 }, 'B');
    const document = doc([
      component,
      a,
      b,
      createWire({ kind: 'junction', junctionId: a.id }, terminal(component, 'a'), [
        { x: 0, y: 0 },
      ]),
      createWire(terminal(component, 'b'), { kind: 'junction', junctionId: b.id }, [
        { x: 400, y: 0 },
      ]),
    ]);
    const result = computeMoveGuides(
      createMoveContext(document, [component.id]),
      { x: 17, y: 0 },
      1,
    );
    expect(result.delta).toEqual({ x: 20, y: 0 });
    expect(result.distances.map((g) => [g.from, g.to, g.value, g.referenceKind])).toEqual([
      [0, 180, 180, 'bend'],
      [220, 400, 180, 'bend'],
    ]);
    expect(result.distances.every((g) => g.equal)).toBe(true);
  });
  it('an adjacent component wins before a farther corner or node', () => {
    const component = createComponent('resistor', { x: 100, y: 0 });
    const next = createComponent('resistor', { x: 300, y: 0 });
    const document = doc([
      component,
      next,
      createWire(free(0, 200), terminal(component, 'a'), [{ x: 0, y: 0 }]),
      createWire(terminal(component, 'b'), terminal(next, 'a')),
      createWire(terminal(next, 'b'), free(420, 200), [{ x: 420, y: 0 }]),
    ]);
    const result = computeMoveGuides(
      createMoveContext(document, [component.id]),
      { x: 36, y: 0 },
      1,
    );
    expect(result.delta.x).toBe(40);
    expect(result.distances.map((g) => [g.from, g.to, g.value])).toEqual([
      [0, 120, 120],
      [160, 280, 120],
    ]);
    expect(result.distances[1]).toMatchObject({ neighborId: next.id, referenceKind: 'component' });
  });
  it('an intermediate Junction wins before a farther component even in an unsplit imported route', () => {
    const component = createComponent('resistor', { x: 100, y: 0 });
    const next = createComponent('resistor', { x: 400, y: 0 });
    const junction = createJunction({ x: 240, y: 0 }, 'J');
    const document = doc([
      component,
      next,
      junction,
      createWire(free(0), terminal(component, 'a')),
      createWire(terminal(component, 'b'), terminal(next, 'a')),
    ]);
    const result = computeMoveGuides(
      createMoveContext(document, [component.id]),
      { x: 0, y: 0 },
      1,
    );
    expect(result.distances[1]).toMatchObject({
      from: 120,
      to: 240,
      value: 120,
      neighborId: junction.id,
      referenceKind: 'junction',
    });
  });
  it('stops at named nodes and never continues through their other branches', () => {
    const component = createComponent('resistor', { x: 180, y: 0 });
    const a = createJunction({ x: 0, y: 0 }, 'A'),
      b = createJunction({ x: 400, y: 0 }, 'B');
    const document = doc([
      a,
      component,
      b,
      createWire({ kind: 'junction', junctionId: a.id }, terminal(component, 'a')),
      createWire(terminal(component, 'b'), { kind: 'junction', junctionId: b.id }),
      createWire(free(-600), { kind: 'junction', junctionId: a.id }),
      createWire({ kind: 'junction', junctionId: b.id }, free(1000)),
    ]);
    const result = computeMoveGuides(
      createMoveContext(document, [component.id]),
      { x: 17, y: 0 },
      1,
    );
    expect(result.distances.map((g) => [g.neighborId, g.value, g.referenceKind])).toEqual([
      [a.id, 180, 'junction'],
      [b.id, 180, 'junction'],
    ]);
  });
  it('keeps a crossing distinct from a Junction', () => {
    const { component, document } = straight();
    document.objects.push(createWire(free(300, -200), free(300, 200)));
    const result = computeMoveGuides(
      createMoveContext(document, [component.id]),
      { x: 0, y: 0 },
      1,
    );
    expect(result.distances[1]).toMatchObject({ to: 400, referenceKind: 'endpoint' });
  });
  it('ignores collinear waypoints and measures to the actual bend', () => {
    const component = createComponent('resistor', { x: 180, y: 0 });
    const document = doc([
      component,
      createWire(free(0, 200), terminal(component, 'a'), [
        { x: 0, y: 0 },
        { x: 80, y: 0 },
        { x: 120, y: 0 },
      ]),
      createWire(terminal(component, 'b'), free(400, 200), [
        { x: 280, y: 0 },
        { x: 400, y: 0 },
      ]),
    ]);
    const result = computeMoveGuides(
      createMoveContext(document, [component.id]),
      { x: 0, y: 0 },
      1,
    );
    expect(result.distances.map((g) => [g.from, g.to, g.referenceKind])).toEqual([
      [0, 160, 'bend'],
      [200, 400, 'bend'],
    ]);
  });
  it('measures a long branch without the unrelated-neighbor range limit', () => {
    const component = createComponent('resistor', { x: 2000, y: 0 });
    const document = doc([
      component,
      createWire(free(0), terminal(component, 'a')),
      createWire(terminal(component, 'b'), free(4000)),
    ]);
    const context = createMoveContext(document, [component.id]);
    const result = computeMoveGuides(context, { x: 0, y: 0 }, 1);
    expect(result.distances.map((g) => g.value)).toEqual([1980, 1980]);
    // Route queries belong to preparation. Pointer updates reuse branch refs.
    const scan = vi.spyOn(context.index, 'along');
    for (let i = 0; i < 30; i++) computeMoveGuides(context, { x: i, y: 0 }, 1);
    expect(scan).not.toHaveBeenCalled();
  });
  it.each([0.5, 1, 2])('equal-spacing magnet uses screen pixels at zoom %s', (zoom) => {
    const { component, document } = straight();
    const lastWire = document.objects.at(-1)!;
    if (lastWire.kind === 'wire') lastWire.endEndpoint = free(410);
    const context = createMoveContext(document, [component.id]);
    for (const jitter of [-6, -2, 0, 2, 6]) {
      const result = computeMoveGuides(context, { x: 25 + jitter / zoom, y: 0 }, zoom);
      expect(result.delta.x).toBe(25);
      expect(result.distances.map((g) => g.value)).toEqual([185, 185]);
      expect(result.distances.every((g) => g.equal)).toBe(true);
    }
    const result = computeMoveGuides(context, { x: 25 + 8 / zoom, y: 0 }, zoom);
    expect(result.distances.every((g) => g.equal)).toBe(false);
  });
  it('precision feedback shares body/reference logic while retaining exact keyboard units', () => {
    const { component, document } = straight();
    const result = computeMoveGuides(
      createMoveContext(document, [component.id]),
      { x: 1, y: 0 },
      1,
      false,
      true,
    );
    expect(result.delta).toEqual({ x: 1, y: 0 });
    expect(result.distances.map((g) => g.value)).toEqual([161, 199]);
  });
  it('does not pull a vertically wired body sideways to match a perpendicular distribution', () => {
    const component = createComponent('voltageSource', { x: 0, y: 0 });
    const above = createComponent('resistor', { x: 0, y: -460 });
    const diode = createComponent('diode', { x: 460, y: 0 });
    const gate = createComponent('andGate', { x: 920, y: 0 });
    for (const object of [component, above, diode, gate]) object.rotation = 90;
    const document = doc([
      component,
      above,
      diode,
      gate,
      createWire(free(0, -180), terminal(component, 'a')),
      createWire(terminal(component, 'b'), free(0, 180)),
    ]);
    const result = computeMoveGuides(
      createMoveContext(document, [component.id]),
      { x: 0, y: 32 },
      0.57,
    );
    expect(result.delta.x).toBe(0);
    expect(result.distances.every((guide) => guide.axis === 'y')).toBe(true);
    expect(result.distances.map((guide) => guide.value)).toEqual([200, 120]);
  });
  it('Alt hides transient assistance and does not mutate/persist the source', () => {
    const { component, document } = straight();
    const before = serializeDocument(document);
    const result = computeMoveGuides(
      createMoveContext(document, [component.id]),
      { x: 17, y: 0 },
      1,
      true,
    );
    expect(result.distances).toEqual([]);
    expect(serializeDocument(document)).toBe(before);
    expect(exportTikz(document)).not.toContain('measurement');
  });
  it('positions chips clear of nearby annotation labels in either orientation', () => {
    for (const vertical of [false, true]) {
      const { component, document } = straight(200, vertical);
      const midpoint: Point = vertical ? { x: 22, y: 90 } : { x: 90, y: 22 };
      const label = createTextAnnotation(midpoint, 'annotation label');
      label.align = 'middle';
      document.objects.push(label);
      const result = computeMoveGuides(
        createMoveContext(document, [component.id]),
        { x: 0, y: 0 },
        1,
      );
      expect(result.distances).toHaveLength(2);
      expect(result.distances[0].displayAt).not.toBe(22);
      expect(result.distances[0].displayAt).toBe(result.distances[1].displayAt);
    }
  });
});
