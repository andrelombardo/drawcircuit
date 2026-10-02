import type { CircuitDocument, Point, Wire } from '../model/types';
import { resolveEndpoint, wirePoints } from './geometry';
export interface WireCrossing extends Point {
  horizontal: Wire;
  vertical: Wire;
  radius: number;
}
type Segment = { wire: Wire; a: Point; b: Point; min: number; max: number };
type Interval = { min: number; max: number };
const cache = new WeakMap<CircuitDocument, WireCrossing[]>();
const epsilon = 0.001;
const quantize = (n: number) => Math.round(n * 1000);
const key = (p: Point) => `${quantize(p.x)},${quantize(p.y)}`;
function rows(segments: Segment[], axis: 'x' | 'y') {
  const map = new Map<number, Interval[]>();
  for (const s of segments) {
    const k = quantize(s.a[axis]),
      list = map.get(k) ?? [];
    list.push({ min: s.min, max: s.max });
    map.set(k, list);
  }
  for (const [k, list] of map) {
    list.sort((a, b) => a.min - b.min);
    const merged: Interval[] = [];
    for (const interval of list) {
      const last = merged.at(-1);
      if (last && interval.min <= last.max + epsilon) last.max = Math.max(last.max, interval.max);
      else merged.push({ ...interval });
    }
    map.set(k, merged);
  }
  return map;
}
function span(list: Interval[], at: number) {
  let lo = 0,
    hi = list.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1,
      v = list[mid];
    if (at < v.min - epsilon) hi = mid - 1;
    else if (at > v.max + epsilon) lo = mid + 1;
    else return v;
  }
}
/** Index orthogonal segments by x strips and merged rows. Pan/zoom reuse the immutable document cache. */
export function wireCrossings(doc: CircuitDocument): WireCrossing[] {
  const cached = cache.get(doc);
  if (cached) return cached;
  const horizontal: Segment[] = [],
    vertical: Segment[] = [];
  let minX = Infinity,
    maxX = -Infinity;
  for (const o of doc.objects)
    if (o.kind === 'wire') {
      let points: Point[];
      try {
        points = wirePoints(o, doc);
      } catch {
        continue;
      }
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1],
          b = points[i];
        minX = Math.min(minX, a.x, b.x);
        maxX = Math.max(maxX, a.x, b.x);
        if (Math.abs(a.y - b.y) < epsilon && Math.abs(a.x - b.x) > epsilon)
          horizontal.push({ wire: o, a, b, min: Math.min(a.x, b.x), max: Math.max(a.x, b.x) });
        else if (Math.abs(a.x - b.x) < epsilon && Math.abs(a.y - b.y) > epsilon)
          vertical.push({ wire: o, a, b, min: Math.min(a.y, b.y), max: Math.max(a.y, b.y) });
      }
    }
  const hRows = rows(horizontal, 'y'),
    vRows = rows(vertical, 'x');
  const cell = Math.max(100, Number.isFinite(minX) ? (maxX - minX) / 128 : 100),
    buckets = new Map<number, Segment[]>();
  for (const s of vertical) {
    const k = Math.floor(s.a.x / cell),
      list = buckets.get(k) ?? [];
    list.push(s);
    buckets.set(k, list);
  }
  const nodes = new Set(doc.objects.filter((o) => o.kind === 'junction').map(key)),
    found = new Map<string, WireCrossing>();
  for (const h of horizontal)
    for (let k = Math.floor(h.min / cell); k <= Math.floor(h.max / cell); k++)
      for (const v of buckets.get(k) ?? []) {
        const p = { x: v.a.x, y: h.a.y },
          id = key(p);
        if (
          h.wire.id === v.wire.id ||
          p.x < h.min - epsilon ||
          p.x > h.max + epsilon ||
          p.y < v.min - epsilon ||
          p.y > v.max + epsilon ||
          nodes.has(id) ||
          found.has(id)
        )
          continue;
        const common = [h.wire.startEndpoint, h.wire.endEndpoint].some(
          (e) =>
            e.kind === 'terminal' &&
            key(resolveEndpoint(e, doc)) === id &&
            [v.wire.startEndpoint, v.wire.endEndpoint].some(
              (f) =>
                f.kind === 'terminal' &&
                e.componentId === f.componentId &&
                e.terminalId === f.terminalId,
            ),
        );
        if (common) continue;
        const hs = span(hRows.get(quantize(p.y)) ?? [], p.x),
          vs = span(vRows.get(quantize(p.x)) ?? [], p.y);
        if (!hs || !vs) continue;
        const room = Math.min(p.x - hs.min, hs.max - p.x, p.y - vs.min, vs.max - p.y);
        if (room > 1)
          found.set(id, {
            ...p,
            horizontal: h.wire,
            vertical: v.wire,
            radius: Math.min(7, room * 0.7),
          });
      }
  const result = [...found.values()].sort((a, b) => a.x - b.x || a.y - b.y);
  cache.set(doc, result);
  return result;
}
export function bridgePaths(c: WireCrossing) {
  const { x, y, radius: r } = c;
  return {
    gap: `M ${x - r} ${y} L ${x + r} ${y}`,
    vertical: `M ${x} ${y - r} L ${x} ${y + r}`,
    arc: `M ${x - r} ${y} C ${x - r * 0.6} ${y - r} ${x + r * 0.6} ${y - r} ${x + r} ${y}`,
  };
}
