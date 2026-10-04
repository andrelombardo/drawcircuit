import { braceGeometry } from '../annotations/brace';
import { electricalGeometry } from '../annotations/electrical';
import { componentRegistry } from '../model/catalog';
import { GRID } from '../model/types';
import type {
  ArrowAnnotation,
  CircuitComponent,
  CircuitDocument,
  CircuitObject,
  Endpoint,
  Point,
  Rotation,
  Wire,
} from '../model/types';
export const snap = (n: number) => Math.round(n / GRID) * GRID;
export const snapPoint = (p: Point): Point => ({ x: snap(p.x), y: snap(p.y) });
export const distance = (a: Point, b: Point) => Math.hypot(a.x - b.x, a.y - b.y);
export function rotatePoint(p: Point, rotation: Rotation): Point {
  switch (rotation) {
    case 90:
      return { x: -p.y, y: p.x };
    case 180:
      return { x: -p.x, y: -p.y };
    case 270:
      return { x: p.y, y: -p.x };
    default:
      return { ...p };
  }
}
export function localToWorld(component: CircuitComponent, p: Point): Point {
  const r = rotatePoint(p, component.rotation);
  return { x: component.x + r.x, y: component.y + r.y };
}
const indices = new WeakMap<CircuitDocument, Map<string, CircuitObject>>();
function objectIndex(doc: CircuitDocument) {
  let index = indices.get(doc);
  if (!index) {
    index = new Map(doc.objects.map((o) => [o.id, o]));
    indices.set(doc, index);
  }
  return index;
}
export function resolveEndpoint(endpoint: Endpoint, doc: CircuitDocument): Point {
  if (endpoint.kind === 'free') return endpoint.point;
  if (endpoint.kind === 'junction') {
    const j = objectIndex(doc).get(endpoint.junctionId);
    if (j?.kind === 'junction') return { x: j.x, y: j.y };
  } else {
    const c = objectIndex(doc).get(endpoint.componentId);
    if (c?.kind === 'component') {
      const t = c.terminals.find((t) => t.id === endpoint.terminalId);
      if (t) return localToWorld(c, { x: t.localX, y: t.localY });
    }
  }
  throw new Error('Collegamento a un terminale o nodo inesistente.');
}
export function endpointDirection(ep: Endpoint, doc: CircuitDocument): 'x' | 'y' {
  if (ep.kind !== 'terminal') return 'x';
  const c = objectIndex(doc).get(ep.componentId);
  if (c?.kind !== 'component') return 'x';
  const t = c.terminals.find((t) => t.id === ep.terminalId);
  if (!t) return 'x';
  const axis =
    t.direction ?? componentRegistry[c.type].terminals.find((pin) => pin.id === t.id)?.direction;
  const direction =
    axis === 'x' ? { x: 1, y: 0 } : axis === 'y' ? { x: 0, y: 1 } : { x: t.localX, y: t.localY };
  const d = rotatePoint(direction, c.rotation);
  return Math.abs(d.x) > Math.abs(d.y) ? 'x' : 'y';
}
function orthogonal(a: Point, b: Point, direction: 'x' | 'y', both = false): Point[] {
  if (a.x === b.x || a.y === b.y) return [a, b];
  if (both) {
    if (direction === 'x') {
      const x = snap((a.x + b.x) / 2);
      return [a, { x, y: a.y }, { x, y: b.y }, b];
    }
    const y = snap((a.y + b.y) / 2);
    return [a, { x: a.x, y }, { x: b.x, y }, b];
  }
  return [a, direction === 'x' ? { x: b.x, y: a.y } : { x: a.x, y: b.y }, b];
}
export function wirePoints(wire: Wire, doc: CircuitDocument): Point[] {
  const start = resolveEndpoint(wire.startEndpoint, doc),
    end = resolveEndpoint(wire.endEndpoint, doc);
  const sd = endpointDirection(wire.startEndpoint, doc),
    ed = endpointDirection(wire.endEndpoint, doc);
  if (!wire.vertices.length)
    return orthogonal(start, end, sd, sd === ed).filter(
      (p, i, arr) => i === 0 || distance(p, arr[i - 1]) > 0.001,
    );
  const result: Point[] = [start];
  wire.vertices.forEach((p, i) =>
    result.push(...orthogonal(result[result.length - 1], p, i === 0 ? sd : 'x').slice(1)),
  );
  result.push(
    ...orthogonal(end, result[result.length - 1], ed)
      .reverse()
      .slice(1),
  );
  return result.filter((p, i, arr) => i === 0 || distance(p, arr[i - 1]) > 0.001);
}
export const pointsPath = (points: Point[]) =>
  points.map((p, i) => `${i ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ');
export interface SnapTarget {
  point: Point;
  endpoint: Endpoint;
}
export function nearestTarget(
  p: Point,
  doc: CircuitDocument,
  threshold: number,
  excluded = new Set<string>(),
): SnapTarget | null {
  let best: SnapTarget | null = null,
    closest = threshold;
  for (const o of doc.objects) {
    if (excluded.has(o.id)) continue;
    if (o.kind === 'junction') {
      const d = distance(p, o);
      if (d < closest) {
        closest = d;
        best = { point: { x: o.x, y: o.y }, endpoint: { kind: 'junction', junctionId: o.id } };
      }
    }
    if (o.kind === 'component')
      for (const t of o.terminals) {
        const point = localToWorld(o, { x: t.localX, y: t.localY }),
          d = distance(p, point);
        if (d < closest) {
          closest = d;
          best = { point, endpoint: { kind: 'terminal', componentId: o.id, terminalId: t.id } };
        }
      }
  }
  return best;
}
export function projectOnSegment(p: Point, a: Point, b: Point): Point {
  const dx = b.x - a.x,
    dy = b.y - a.y,
    den = dx * dx + dy * dy;
  const t = den === 0 ? 0 : Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / den));
  return { x: a.x + t * dx, y: a.y + t * dy };
}
const wireRoutes = new WeakMap<CircuitDocument, { wire: Wire; points: Point[] }[]>();
export function nearestWire(
  p: Point,
  doc: CircuitDocument,
  threshold: number,
  excluded = new Set<string>(),
): { wire: Wire; point: Point; segment: number; points: Point[] } | null {
  let result: ReturnType<typeof nearestWire> = null,
    min = threshold;
  let routes = wireRoutes.get(doc);
  if (!routes) {
    routes = doc.objects.flatMap((o) =>
      o.kind === 'wire' ? [{ wire: o, points: wirePoints(o, doc) }] : [],
    );
    wireRoutes.set(doc, routes);
  }
  for (const { wire: o, points } of routes) {
    if (excluded.has(o.id)) continue;
    for (let i = 0; i < points.length - 1; i++) {
      const projection = projectOnSegment(p, points[i], points[i + 1]),
        gridPoint = projectOnSegment(snapPoint(projection), points[i], points[i + 1]);
      const d = distance(p, projection);
      const q = distance(p, gridPoint) < threshold ? gridPoint : projection;
      if (d < min) {
        min = d;
        result = { wire: o, point: q, segment: i, points };
      }
    }
  }
  return result;
}
export function moveObject(o: CircuitObject, delta: Point, moved: Set<string>): CircuitObject {
  if (
    o.kind === 'component' ||
    o.kind === 'junction' ||
    o.kind === 'text' ||
    o.kind === 'loop-arrow'
  )
    return { ...o, x: o.x + delta.x, y: o.y + delta.y };
  if (o.kind === 'electrical') {
    const attached =
      (o.wireId && !moved.has(o.wireId)) || (o.componentId && !moved.has(o.componentId));
    return attached
      ? { ...o, offset: add(o.offset, delta) }
      : { ...o, start: add(o.start, delta), end: add(o.end, delta) };
  }
  if (o.kind === 'brace') return { ...o, start: add(o.start, delta), end: add(o.end, delta) };
  if (o.kind === 'arrow')
    return {
      ...o,
      start: add(o.start, delta),
      end: add(o.end, delta),
      controlPoints: [add(o.controlPoints[0], delta), add(o.controlPoints[1], delta)],
    };
  const moveEp = (ep: Endpoint): Endpoint =>
    ep.kind === 'free' ? { kind: 'free', point: add(ep.point, delta) } : ep;
  const attached = (ep: Endpoint) =>
    ep.kind === 'terminal'
      ? moved.has(ep.componentId)
      : ep.kind === 'junction'
        ? moved.has(ep.junctionId)
        : false;
  // Connected endpoints remain references. Moving a selected wire changes its route only.
  return {
    ...o,
    startEndpoint: moveEp(o.startEndpoint),
    endEndpoint: moveEp(o.endEndpoint),
    vertices: o.vertices.map((p) => add(p, delta)),
    ...(!o.vertices.length &&
    !attached(o.startEndpoint) &&
    !attached(o.endEndpoint) &&
    o.startEndpoint.kind !== 'free' &&
    o.endEndpoint.kind !== 'free'
      ? { vertices: [] }
      : {}),
  };
}
export const add = (a: Point, b: Point): Point => ({ x: a.x + b.x || 0, y: a.y + b.y || 0 });
export const midpoint = (a: Point, b: Point): Point => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
export function arrowPath(a: ArrowAnnotation): string {
  if (a.type === 'straight') return pointsPath([a.start, a.end]);
  if (a.type === 'curve')
    return `M ${a.start.x} ${a.start.y} C ${a.controlPoints[0].x} ${a.controlPoints[0].y} ${a.controlPoints[1].x} ${a.controlPoints[1].y} ${a.end.x} ${a.end.y}`;
  const cx = (a.start.x + a.end.x) / 2,
    cy = (a.start.y + a.end.y) / 2,
    r = Math.max(20, distance(a.start, a.end) / 2);
  // A 310-degree loop with a clear gap and an arrowhead; the diameter handles size the circle.
  const s = { x: cx + r * Math.cos(-Math.PI / 3), y: cy + r * Math.sin(-Math.PI / 3) };
  const e = {
    x: cx + r * Math.cos(-Math.PI / 3 + (310 * Math.PI) / 180),
    y: cy + r * Math.sin(-Math.PI / 3 + (310 * Math.PI) / 180),
  };
  return `M ${s.x} ${s.y} A ${r} ${r} 0 1 1 ${e.x} ${e.y}`;
}
export function objectBounds(
  o: CircuitObject,
  doc: CircuitDocument,
): { x: number; y: number; width: number; height: number } {
  let points: Point[];
  if (o.kind === 'brace') {
    const g = braceGeometry(o);
    points = g.points.flatMap((p) => [
      { x: p.x - o.width / 2, y: p.y - o.width / 2 },
      { x: p.x + o.width / 2, y: p.y + o.width / 2 },
    ]);
  } else if (o.kind === 'electrical') {
    const g = electricalGeometry(o, doc);
    const w = Math.max(24, o.label.text.length * o.label.fontSize * 0.6);
    points = [
      g.start,
      g.end,
      { x: g.labelPoint.x - w / 2, y: g.labelPoint.y - o.label.fontSize },
      { x: g.labelPoint.x + w / 2, y: g.labelPoint.y + o.label.fontSize },
    ];
  } else if (o.kind === 'wire') points = wirePoints(o, doc);
  else if (o.kind === 'loop-arrow') return { x: o.x, y: o.y, width: o.width, height: o.height };
  else if (o.kind === 'arrow') {
    if (o.type === 'arc') {
      const r = Math.max(20, distance(o.start, o.end) / 2),
        c = midpoint(o.start, o.end);
      points = [
        { x: c.x - r, y: c.y - r },
        { x: c.x + r, y: c.y + r },
      ];
    } else points = o.type === 'straight' ? [o.start, o.end] : [o.start, o.end, ...o.controlPoints];
  } else if (o.kind === 'component') {
    const b = componentRegistry[o.type].bounds;
    points = [
      { x: b.x, y: b.y },
      { x: b.x + b.width, y: b.y },
      { x: b.x, y: b.y + b.height },
      { x: b.x + b.width, y: b.y + b.height },
    ].map((p) => localToWorld(o, p));
  } else if (o.kind === 'junction')
    points = [
      { x: o.x - 8, y: o.y - 8 },
      { x: o.x + 8, y: o.y + 8 },
    ];
  else {
    const w = Math.max(30, o.text.length * o.fontSize * 0.55),
      offset = o.align === 'start' ? 0 : o.align === 'middle' ? -w / 2 : -w;
    points = [
      { x: o.x + offset, y: o.y - o.fontSize },
      { x: o.x + offset + w, y: o.y + o.fontSize },
    ];
  }
  const xs = points.map((p) => p.x),
    ys = points.map((p) => p.y),
    x = Math.min(...xs),
    y = Math.min(...ys);
  return {
    x,
    y,
    width: Math.max(1, Math.max(...xs) - x),
    height: Math.max(1, Math.max(...ys) - y),
  };
}
export function documentBounds(doc: CircuitDocument) {
  const boxes = doc.objects.map((o) => objectBounds(o, doc));
  if (!boxes.length) return { x: -200, y: -150, width: 400, height: 300 };
  const x = Math.min(...boxes.map((b) => b.x)) - 60,
    y = Math.min(...boxes.map((b) => b.y)) - 60;
  return {
    x,
    y,
    width: Math.max(...boxes.map((b) => b.x + b.width)) - x + 60,
    height: Math.max(...boxes.map((b) => b.y + b.height)) - y + 60,
  };
}
