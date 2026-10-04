import { describe, expect, it } from 'vitest';
import { createComponent } from '../src/model/catalog';
import { emptyDocument } from '../src/model/demo';
import { createJunction, createTextAnnotation, createWire } from '../src/model/factories';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import type { CircuitDocument, Endpoint, Point, Rotation, Wire } from '../src/model/types';
import {
  distance,
  projectOnSegment,
  resolveEndpoint,
  rotatePoint,
  wirePoints,
} from '../src/utils/geometry';
import { moveSelection } from '../src/utils/operations';
import { beginWire, commitWire, wireCandidate, wirePreview } from '../src/utils/wires';
import { wireCrossings } from '../src/utils/crossings';
import { getMeasurementBounds } from '../src/utils/measurementGeometry';
const document = (objects: CircuitDocument['objects']): CircuitDocument => ({
  ...emptyDocument(),
  objects,
});
const terminal = (componentId: string, terminalId: string): Endpoint => ({
  kind: 'terminal',
  componentId,
  terminalId,
});
const free = (x: number, y: number): Endpoint => ({ kind: 'free', point: { x, y } });
const getWire = (doc: CircuitDocument, id: string) => doc.objects.find((o) => o.id === id) as Wire;
function newWire(start: Endpoint, end: Endpoint, doc: CircuitDocument, vertices: Point[] = []) {
  const draft = { start, vertices };
  const kind = end.kind === 'free' ? 'grid' : end.kind;
  const result = commitWire(doc, draft, { kind, endpoint: end, point: resolveEndpoint(end, doc) })!;
  return getWire(result.doc, result.wireId);
}
function expectOrthogonal(points: Point[]) {
  expect(points.length).toBeGreaterThan(1);
  for (let i = 1; i < points.length; i++) {
    expect(points[i]).not.toEqual(points[i - 1]);
    expect(points[i].x === points[i - 1].x || points[i].y === points[i - 1].y).toBe(true);
  }
}
function expectExit(points: Point[], direction: Point) {
  const first = { x: points[1].x - points[0].x, y: points[1].y - points[0].y };
  expect(first.x * direction.x + first.y * direction.y).toBeGreaterThan(0);
  expect(direction.x ? first.y : first.x).toBe(0);
}

describe('shared wire engine and signed routing', () => {
  it.each([0, 90, 180, 270] as Rotation[])(
    'leaves both terminals outward at rotation %s, including a target behind the source',
    (rotation) => {
      const a = { ...createComponent('resistor', { x: 0, y: 0 }), rotation },
        b = { ...createComponent('resistor', rotatePoint({ x: -200, y: 0 }, rotation)), rotation },
        doc = document([a, b]),
        start = terminal(a.id, 'b'),
        end = terminal(b.id, 'b');
      const wire = newWire(start, end, doc),
        points = wirePoints(wire, doc),
        direction = rotatePoint({ x: 1, y: 0 }, rotation);
      expectOrthogonal(points);
      expectExit(points, direction);
      expectExit([...points].reverse(), direction);
      for (const c of [a, b]) {
        const body = getMeasurementBounds(c);
        for (let i = 1; i < points.length; i++) {
          const p = points[i - 1],
            q = points[i];
          const crosses =
            p.x === q.x
              ? p.x > body.x &&
                p.x < body.x + body.width &&
                Math.max(p.y, q.y) > body.y &&
                Math.min(p.y, q.y) < body.y + body.height
              : p.y > body.y &&
                p.y < body.y + body.height &&
                Math.max(p.x, q.x) > body.x &&
                Math.min(p.x, q.x) < body.x + body.width;
          expect(crosses).toBe(false);
        }
      }
    },
  );
  it.each([0, 90, 180, 270] as Rotation[])(
    'preserves a deliberate waypoint while escaping an inward route at rotation %s',
    (rotation) => {
      const c = { ...createComponent('resistor', { x: 0, y: 0 }), rotation },
        doc = document([c]);
      const waypoint = rotatePoint({ x: -140, y: -100 }, rotation),
        end = rotatePoint({ x: -240, y: 0 }, rotation);
      const wire = newWire(terminal(c.id, 'b'), { kind: 'free', point: end }, doc, [waypoint]),
        points = wirePoints(wire, doc);
      expectOrthogonal(points);
      expect(
        points
          .slice(1)
          .some(
            (point, i) => distance(projectOnSegment(waypoint, points[i], point), waypoint) < 0.001,
          ),
      ).toBe(true);
      expectExit(points, rotatePoint({ x: 1, y: 0 }, rotation));
    },
  );
  it('keeps historical automatic wire geometry stable while materializing safe bends for newly created wires', () => {
    const a = createComponent('resistor', { x: 0, y: 0 }),
      b = createComponent('resistor', { x: -200, y: 0 }),
      doc = document([a, b]);
    const start = terminal(a.id, 'b'),
      end = terminal(b.id, 'b'),
      legacy = createWire(start, end);
    expect(wirePoints(legacy, doc)).toEqual([
      { x: 40, y: 0 },
      { x: -160, y: 0 },
    ]);
    const fresh = newWire(start, end, doc);
    expect(fresh.vertices.length).toBeGreaterThan(0);
    expectExit(wirePoints(fresh, doc), { x: 1, y: 0 });
    expect(legacy.vertices).toEqual([]);
  });
  it('keeps a normal forward orthogonal connection identical to the established route', () => {
    const a = createComponent('resistor', { x: 0, y: 0 }),
      b = createComponent('resistor', { x: 240, y: 120 }),
      doc = document([a, b]);
    expect(wirePoints(createWire(terminal(a.id, 'b'), terminal(b.id, 'a')), doc)).toEqual([
      { x: 40, y: 0 },
      { x: 120, y: 0 },
      { x: 120, y: 120 },
      { x: 200, y: 120 },
    ]);
  });
  it.each([
    'terminal-junction',
    'junction-terminal',
    'junction-junction',
    'wire-terminal',
    'wire-wire',
    'free-free',
  ])('resolves %s semantic targets using the same begin/commit engine', (mode) => {
    const c = createComponent('resistor', { x: 0, y: 0 }),
      a = createJunction({ x: 160, y: 0 }, 'A'),
      b = createJunction({ x: 160, y: 200 }, 'B');
    const top = createWire(free(300, 0), free(500, 0)),
      bottom = createWire(free(300, 200), free(500, 200));
    const doc = document([c, a, b, top, bottom]);
    const locations: Record<string, [Point, Point]> = {
      'terminal-junction': [{ x: 40, y: 0 }, a],
      'junction-terminal': [a, { x: 40, y: 0 }],
      'junction-junction': [a, b],
      'wire-terminal': [
        { x: 400, y: 0 },
        { x: 40, y: 0 },
      ],
      'wire-wire': [
        { x: 400, y: 0 },
        { x: 400, y: 200 },
      ],
      'free-free': [
        { x: 600, y: 0 },
        { x: 600, y: 200 },
      ],
    };
    const [start, end] = locations[mode],
      started = beginWire(doc, wireCandidate(start, doc, 1));
    const candidate = wireCandidate(end, started.doc, 1),
      result = commitWire(started.doc, started.draft, candidate)!;
    const wire = getWire(result.doc, result.wireId);
    expect(resolveEndpoint(wire.startEndpoint, result.doc)).toEqual({ x: start.x, y: start.y });
    expect(resolveEndpoint(wire.endEndpoint, result.doc)).toEqual({ x: end.x, y: end.y });
    if (mode.includes('wire')) expect(wire.startEndpoint.kind).toBe('junction');
    if (mode === 'wire-wire') expect(wire.endEndpoint.kind).toBe('junction');
    expect(deserializeDocument(serializeDocument(result.doc))).toEqual(result.doc);
    expectOrthogonal(wirePoints(wire, result.doc));
  });
  it('rejects a zero-length route without exposing a new junction/split document', () => {
    const wire = createWire(free(0, 0), free(200, 0)),
      doc = document([wire]);
    const started = beginWire(doc, wireCandidate({ x: 100, y: 0 }, doc, 1));
    expect(started.doc.objects).toHaveLength(3);
    expect(
      commitWire(started.doc, started.draft, wireCandidate({ x: 100, y: 0 }, started.doc, 1)),
    ).toBeNull();
    expect(doc.objects).toEqual([wire]);
  });
  it.each([false, true])(
    'rejects an existing identical connection, including reversed direction %s',
    (reversed) => {
      const a = createComponent('resistor', { x: 0, y: 0 }),
        b = createComponent('resistor', { x: 240, y: 120 });
      const start = terminal(a.id, 'b'),
        end = terminal(b.id, 'a'),
        wire = createWire(start, end),
        doc = document([a, b, wire]);
      const first = reversed ? end : start,
        last = reversed ? start : end;
      const started = beginWire(doc, {
        kind: 'terminal',
        point: resolveEndpoint(first, doc),
        endpoint: first,
      });
      expect(
        commitWire(started.doc, started.draft, {
          kind: 'terminal',
          point: resolveEndpoint(last, doc),
          endpoint: last,
        }),
      ).toBeNull();
      expect(doc.objects).toEqual([a, b, wire]);
    },
  );
  it.each([0.5, 1, 2])(
    'snaps a terminal and wire using screen-pixel hit tolerance at zoom %s',
    (zoom) => {
      const c = createComponent('resistor', { x: 0, y: 0 }),
        wire = createWire(free(200, 0), free(400, 0)),
        doc = document([c, wire]);
      expect(wireCandidate({ x: 40 + 8 / zoom, y: 0 }, doc, zoom).kind).toBe('terminal');
      expect(wireCandidate({ x: 300, y: 10 / zoom }, doc, zoom).kind).toBe('wire');
      expect(wireCandidate({ x: 300, y: 20 / zoom }, doc, zoom).kind).toBe('grid');
    },
  );
  it('stress-routes 24 rotated components, junctions, crossing and user waypoints with round-trip stable endpoint references', () => {
    const components = Array.from({ length: 24 }, (_, i) => ({
      ...createComponent(i % 3 ? 'resistor' : 'capacitor', {
        x: (i % 6) * 180,
        y: Math.floor(i / 6) * 180,
      }),
      rotation: (i % 2 ? 90 : 0) as Rotation,
    }));
    const junction = createJunction({ x: 1100, y: 540 }, 'A');
    const crossA = createWire(free(-160, -120), free(0, -120)),
      crossB = createWire(free(-80, -200), free(-80, -40));
    let doc = document([...components, junction, crossA, crossB]);
    const crossingCount = wireCrossings(doc).length;
    for (let i = 0; i < components.length - 1; i++) {
      const start = terminal(components[i].id, 'b'),
        end = terminal(components[i + 1].id, 'a');
      const started = beginWire(doc, {
        kind: 'terminal',
        point: resolveEndpoint(start, doc),
        endpoint: start,
      });
      if (i % 3 === 0)
        started.draft.vertices.push({ x: (i % 6) * 180 + 100, y: Math.floor(i / 6) * 180 - 80 });
      const target = { kind: 'terminal' as const, point: resolveEndpoint(end, doc), endpoint: end };
      const preview = wirePoints(wirePreview(started.draft, target, started.doc), started.doc),
        result = commitWire(started.doc, started.draft, target)!;
      doc = result.doc;
      expect(wirePoints(getWire(doc, result.wireId), doc)).toEqual(preview);
    }
    const last = terminal(components.at(-1)!.id, 'b'),
      started = beginWire(doc, {
        kind: 'terminal',
        point: resolveEndpoint(last, doc),
        endpoint: last,
      });
    const result = commitWire(started.doc, started.draft, wireCandidate(junction, started.doc, 1))!;
    doc = result.doc;
    const allWires = doc.objects.filter((o): o is Wire => o.kind === 'wire');
    expect(allWires).toHaveLength(26);
    expect(wireCrossings(doc).length).toBeGreaterThanOrEqual(crossingCount);
    allWires.forEach((wire) => expectOrthogonal(wirePoints(wire, doc)));
    expect(deserializeDocument(serializeDocument(doc))).toEqual(doc);
    expect(doc.objects.filter((o) => o.kind === 'junction')).toHaveLength(1);
  });
});

describe('only explicitly selected geometry translates', () => {
  it('moves standalone Text independently of every connected object and redundant waypoint', () => {
    const c = createComponent('resistor', { x: 0, y: 0 }),
      text = createTextAnnotation({ x: 30, y: 90 });
    const wire = createWire(terminal(c.id, 'b'), free(300, 0), [{ x: 100, y: 0 }]),
      doc = document([c, text, wire]);
    const moved = moveSelection(doc, [text.id], { x: 1, y: -10 });
    expect(moved.objects[0]).toBe(c);
    expect(moved.objects[2]).toBe(wire);
    expect(moved.objects[1]).toMatchObject({ x: 31, y: 80 });
  });
  it('moves a component with its relative label and freezes automatic distant bends', () => {
    const c = createComponent('resistor', { x: 0, y: 0 }),
      wire = createWire(terminal(c.id, 'b'), free(300, 200)),
      doc = document([c, wire]);
    const bends = wirePoints(wire, doc).slice(1, -1),
      moved = moveSelection(doc, [c.id], { x: 1, y: 1 }),
      updated = getWire(moved, wire.id);
    expect(moved.objects[0]).toMatchObject({ x: 1, y: 1, label: c.label });
    expect(updated.vertices).toEqual([{ ...bends[0], y: bends[0].y + 1 }, ...bends.slice(1)]);
    expect(resolveEndpoint(updated.startEndpoint, moved)).toEqual({ x: 41, y: 1 });
    expect(resolveEndpoint(updated.endEndpoint, moved)).toEqual({ x: 300, y: 200 });
    expect(wirePoints(updated, moved)).toContainEqual(bends.at(-1));
    expect(wirePoints(updated, moved)).not.toContainEqual(bends[0]);
  });
  it('moves a junction without translating manual waypoints or the remote endpoint', () => {
    const j = createJunction({ x: 0, y: 0 }, 'A'),
      wire = createWire({ kind: 'junction', junctionId: j.id }, free(300, 200), [
        { x: 0, y: 100 },
        { x: 300, y: 100 },
      ]),
      doc = document([j, wire]);
    const moved = moveSelection(doc, [j.id], { x: 10, y: 0 }),
      updated = getWire(moved, wire.id);
    expect(updated).toBe(wire);
    expect(resolveEndpoint(updated.startEndpoint, moved)).toEqual({ x: 10, y: 0 });
    expect(resolveEndpoint(updated.endEndpoint, moved)).toEqual({ x: 300, y: 200 });
    expect(updated.vertices).toEqual([
      { x: 0, y: 100 },
      { x: 300, y: 100 },
    ]);
  });
  it('anchors a formerly straight vertical path when its real junction moves sideways', () => {
    const j = createJunction({ x: 0, y: 0 }, 'A'),
      wire = createWire({ kind: 'junction', junctionId: j.id }, free(0, 300)),
      doc = document([j, wire]);
    const moved = moveSelection(doc, [j.id], { x: 10, y: 0 }),
      updated = getWire(moved, wire.id);
    expect(updated.vertices).toEqual([{ x: 0, y: 150 }]);
    expect(wirePoints(updated, moved).at(-1)).toEqual({ x: 0, y: 300 });
  });
  it('translates component + wire + node only when the entire group is explicitly selected', () => {
    const c = createComponent('resistor', { x: 0, y: 0 }),
      j = createJunction({ x: 300, y: 200 }, 'A'),
      wire = createWire(terminal(c.id, 'b'), { kind: 'junction', junctionId: j.id }, [
        { x: 80, y: 0 },
        { x: 80, y: 200 },
      ]),
      doc = document([c, j, wire]);
    const delta = { x: 10, y: 10 },
      moved = moveSelection(doc, [c.id, j.id, wire.id], delta),
      updated = getWire(moved, wire.id);
    expect(updated.vertices).toEqual(wire.vertices.map((p) => ({ x: p.x + 10, y: p.y + 10 })));
    expect(wirePoints(updated, moved)).toEqual(
      wirePoints(wire, doc).map((p) => ({ x: p.x + 10, y: p.y + 10 })),
    );
  });
});
