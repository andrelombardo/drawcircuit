import { createCurrent, electricalGeometry } from '../annotations/electrical';
import { makeId } from '../model/catalog';
import { createJunction } from '../model/factories';
import type {
  CircuitDocument,
  CircuitObject,
  Endpoint,
  Junction,
  Point,
  Wire,
} from '../model/types';
import {
  distance,
  localToWorld,
  nearestTarget,
  nearestWire,
  projectOnSegment,
  snapPoint,
  wirePoints,
} from './geometry';
export type WireCandidate =
  | { point: Point; endpoint: Endpoint; kind: 'terminal' | 'junction' | 'grid' }
  | { point: Point; kind: 'wire'; wireId: string };
export function wireCandidate(
  p: Point,
  doc: CircuitDocument,
  zoom: number,
  excluded = new Set<string>(),
): WireCandidate {
  // All distances are screen pixels. Close terminals win before junctions, wires and grid.
  let terminal: WireCandidate | null = null,
    closest = 10 / zoom;
  for (const o of doc.objects)
    if (o.kind === 'component' && !excluded.has(o.id))
      for (const t of o.terminals) {
        const q = localToWorld(o, { x: t.localX, y: t.localY }),
          d = distance(p, q);
        if (d < closest) {
          closest = d;
          terminal = {
            kind: 'terminal',
            point: q,
            endpoint: { kind: 'terminal', componentId: o.id, terminalId: t.id },
          };
        }
      }
  if (terminal) return terminal;
  const target = nearestTarget(p, doc, 14 / zoom, excluded);
  if (target)
    return { ...target, kind: target.endpoint.kind === 'terminal' ? 'terminal' : 'junction' };
  const hit = nearestWire(p, doc, 12 / zoom, excluded);
  if (hit) return { kind: 'wire', point: hit.point, wireId: hit.wire.id };
  const point = snapPoint(p);
  return { kind: 'grid', point, endpoint: { kind: 'free', point } };
}
/** Remove only points between their neighbors, never a deliberate backtrack. */
export function simplifyPolyline(points: Point[]): Point[] {
  const out: Point[] = [];
  for (const p of points) {
    if (out.length && distance(p, out[out.length - 1]) < 0.001) continue;
    while (out.length > 1) {
      const a = out[out.length - 2],
        b = out[out.length - 1];
      if (distance(b, projectOnSegment(b, a, p)) >= 0.001) break;
      out.pop();
    }
    out.push(p);
  }
  return out;
}
export function normalizeWire(wire: Wire, doc: CircuitDocument): Wire {
  let result = wire;
  const route = JSON.stringify(simplifyPolyline(wirePoints(wire, doc)));
  // Removing a stored point is safe only if the routed geometry remains identical.
  for (let i = result.vertices.length - 1; i >= 0; i--) {
    const candidate = { ...result, vertices: result.vertices.filter((_, n) => n !== i) };
    if (JSON.stringify(simplifyPolyline(wirePoints(candidate, doc))) === route) result = candidate;
  }
  return result;
}
export function normalizeDocumentWires(doc: CircuitDocument): CircuitDocument {
  let changed = false;
  const objects = doc.objects.map((o) => {
    if (o.kind !== 'wire') return o;
    const next = normalizeWire(o, doc);
    if (next.vertices.length === o.vertices.length) return o;
    changed = true;
    return next;
  });
  return changed ? { ...doc, objects } : doc;
}
/** Quick Junction: split all incident wires, preserving terminal references at endpoints. */
export function insertJunction(
  doc: CircuitDocument,
  point: Point,
): { doc: CircuitDocument; junction: Junction } {
  const existing = doc.objects.find(
    (o): o is Junction => o.kind === 'junction' && distance(o, point) < 0.001,
  );
  if (existing) return { doc, junction: existing };
  const used = new Set(doc.objects.filter((o) => o.kind === 'junction').map((o) => o.label.text));
  let index = 0;
  const name = (n: number) => (n < 26 ? String.fromCharCode(65 + n) : `N${n - 25}`);
  while (used.has(name(index))) index++;
  const junction = createJunction(point, name(index));
  const ep: Endpoint = { kind: 'junction', junctionId: junction.id },
    objects: CircuitObject[] = [];
  const linked = new Set<string>();
  const bridge = (endpoint: Endpoint, wire: Wire) => {
    if (endpoint.kind === 'free') return;
    const key = JSON.stringify(endpoint);
    if (linked.has(key)) return;
    linked.add(key);
    objects.push({ ...wire, id: makeId(), startEndpoint: endpoint, endEndpoint: ep, vertices: [] });
  };
  const splitIds = new Map<string, string[]>();
  for (const o of doc.objects) {
    const before = objects.length;
    if (o.kind !== 'wire') {
      objects.push(o);
      continue;
    }
    const pts = wirePoints(o, doc);
    const segment = pts.findIndex(
      (a, i) =>
        i < pts.length - 1 && distance(point, projectOnSegment(point, a, pts[i + 1])) < 0.001,
    );
    if (segment < 0) {
      objects.push(o);
      continue;
    }
    if (distance(point, pts[0]) < 0.001) {
      bridge(o.startEndpoint, o);
      objects.push({ ...o, startEndpoint: ep });
    } else if (distance(point, pts[pts.length - 1]) < 0.001) {
      bridge(o.endEndpoint, o);
      objects.push({ ...o, endEndpoint: ep });
    } else {
      objects.push({ ...o, endEndpoint: ep, vertices: pts.slice(1, segment + 1) });
      objects.push({ ...o, id: makeId(), startEndpoint: ep, vertices: pts.slice(segment + 1, -1) });
    }
    splitIds.set(
      o.id,
      objects
        .slice(before)
        .filter((x) => x.kind === 'wire')
        .map((x) => x.id),
    );
  }
  const next = normalizeDocumentWires({ ...doc, objects: [...objects, junction] });
  return { doc: remapSplitWireCurrents(doc, next, splitIds), junction };
}

/** Keep current annotations on the corresponding physical branch after a wire is split. */
export function remapSplitWireCurrents(
  doc: CircuitDocument,
  next: CircuitDocument,
  splitIds: Map<string, string[]>,
): CircuitDocument {
  return {
    ...next,
    objects: next.objects.map((o) => {
      if (o.kind !== 'electrical' || !o.wireId || !splitIds.has(o.wireId)) return o;
      const geometry = electricalGeometry(o, doc),
        center = {
          x: (geometry.start.x + geometry.end.x) / 2 - o.offset.x,
          y: (geometry.start.y + geometry.end.y) / 2 - o.offset.y,
        };
      const ids = new Set(splitIds.get(o.wireId));
      const candidate = nearestWire(
        center,
        next,
        Infinity,
        new Set(next.objects.filter((x) => !ids.has(x.id)).map((x) => x.id)),
      );
      if (!candidate) return o;
      const attached = createCurrent(candidate.wire, center, next);
      return {
        ...o,
        wireId: attached.wireId,
        ratio: attached.ratio,
        start: attached.start,
        end: attached.end,
      };
    }),
  };
}
