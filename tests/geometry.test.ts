import { describe, expect, it } from 'vitest';
import { createComponent } from '../src/model/catalog';
import type { CircuitDocument, Rotation, Wire } from '../src/model/types';
import {
  arrowPath,
  localToWorld,
  nearestTarget,
  resolveEndpoint,
  rotatePoint,
  snapPoint,
  wirePoints,
} from '../src/utils/geometry';
import { demoDocument } from '../src/model/demo';
import { rotateObjects } from '../src/utils/operations';
describe('geometry and persistent connections', () => {
  it.each([
    [0, { x: 20, y: 10 }],
    [90, { x: -10, y: 20 }],
    [180, { x: -20, y: -10 }],
    [270, { x: 10, y: -20 }],
  ] as [Rotation, { x: number; y: number }][])(
    'rotates local coordinates by %s degrees',
    (r, expected) => expect(rotatePoint({ x: 20, y: 10 }, r)).toEqual(expected),
  );
  it('transforms a terminal using position and rotation', () => {
    const c = { ...createComponent('resistor', { x: 100, y: 200 }), rotation: 90 as const };
    expect(localToWorld(c, { x: -40, y: 0 })).toEqual({ x: 100, y: 160 });
  });
  it('snaps negative and positive positions', () =>
    expect(snapPoint({ x: -33, y: 49 })).toEqual({ x: -40, y: 40 }));
  it('resolves a terminal after moving a component, without modifying the wire', () => {
    const doc = demoDocument(),
      wire = doc.objects.find((o): o is Wire => o.kind === 'wire' && o.id === 'w-r-AB-a')!;
    const before = resolveEndpoint(wire.startEndpoint, doc);
    const moved = {
      ...doc,
      objects: doc.objects.map((o) =>
        o.id === 'r-AB' && o.kind === 'component' ? { ...o, x: o.x + 100, y: o.y + 60 } : o,
      ),
    };
    expect(resolveEndpoint(wire.startEndpoint, moved)).toEqual({
      x: before.x + 100,
      y: before.y + 60,
    });
    expect(wire.startEndpoint.kind).toBe('terminal');
  });
  it('resolves a terminal after rotating a component', () => {
    const doc = demoDocument(),
      rotated = rotateObjects(doc, ['r-AB']);
    expect(
      resolveEndpoint({ kind: 'terminal', componentId: 'r-AB', terminalId: 'a' }, rotated),
    ).toEqual({ x: -120, y: -40 });
  });
  it('junction motion updates every incident wire', () => {
    const doc = demoDocument(),
      moved = {
        ...doc,
        objects: doc.objects.map((o) =>
          o.id === 'node-B' && o.kind === 'junction' ? { ...o, x: 60, y: 40 } : o,
        ),
      };
    const connected = moved.objects.filter(
      (o): o is Wire =>
        o.kind === 'wire' &&
        o.endEndpoint.kind === 'junction' &&
        o.endEndpoint.junctionId === 'node-B',
    );
    expect(connected).toHaveLength(3);
    connected.forEach((w) => expect(wirePoints(w, moved).at(-1)).toEqual({ x: 60, y: 40 }));
  });
  it('snaps to real terminals with visual distance threshold', () => {
    const doc = demoDocument();
    expect(nearestTarget({ x: -162, y: 2 }, doc, 10)?.endpoint).toEqual({
      kind: 'terminal',
      componentId: 'r-AB',
      terminalId: 'a',
    });
    expect(nearestTarget({ x: 1000, y: 1000 }, doc, 10)).toBeNull();
  });
  it('keeps manual waypoints and all segments orthogonal after rotations', () => {
    for (const rotation of [0, 90, 180, 270] as const)
      for (const x of [-160, 0, 140]) {
        const c = { ...createComponent('resistor', { x, y: 100 }), rotation },
          wire: Wire = {
            kind: 'wire',
            id: 'w',
            startEndpoint: { kind: 'terminal', componentId: c.id, terminalId: 'a' },
            endEndpoint: { kind: 'free', point: { x: 300, y: 400 } },
            vertices: [
              { x: 40, y: 40 },
              { x: 200, y: 300 },
            ],
            color: '#111111',
            width: 2,
          };
        const doc: CircuitDocument = { version: 1, title: 'Test', objects: [c, wire] },
          pts = wirePoints(wire, doc);
        expect(pts).toContainEqual({ x: 40, y: 40 });
        expect(pts).toContainEqual({ x: 200, y: 300 });
        expect(pts.at(-1)).toEqual({ x: 300, y: 400 });
        pts.slice(1).forEach((p, i) => expect(p.x === pts[i].x || p.y === pts[i].y).toBe(true));
      }
  });
  it('creates a circular SVG arc and a cubic Bézier path', () => {
    const a = demoDocument().objects.find((o) => o.kind === 'arrow')!;
    if (a.kind !== 'arrow') throw Error();
    expect(arrowPath(a)).toContain(' A ');
    expect(arrowPath({ ...a, type: 'curve' })).toContain(' C ');
  });
});
