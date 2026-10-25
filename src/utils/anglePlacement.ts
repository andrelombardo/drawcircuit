import { createAngle } from '../annotations/angle';
import type { CircuitDocument, Point } from '../model/types';
import { distance, linePoints, projectOnSegment, wirePoints } from './geometry';

export interface AngleRay { id: string; a: Point; b: Point; point: Point }

/** Pick actual strokes, never a component's selection envelope. */
export function angleRayAt(point: Point, doc: CircuitDocument, zoom: number, excluded?: string): AngleRay | null {
  let best: AngleRay | null = null, gap = 10 / zoom;
  for (const o of doc.objects) {
    if (o.id === excluded) continue;
    const points = o.kind === 'line' && !o.controlPoints ? linePoints(o, doc)
      : o.kind === 'wire' ? wirePoints(o, doc) : o.kind === 'arrow' && o.type === 'straight' ? [o.start, o.end] : [];
    for (let i = 1; i < points.length; i++) {
      const a = points[i - 1], b = points[i];
      if (distance(a, b) < 0.001) continue;
      const projected = projectOnSegment(point, a, b), d = distance(point, projected);
      if (d < gap) { best = { id: o.id, a, b, point: projected }; gap = d; }
    }
  }
  return best;
}

/** Both clicks choose a side of the true intersection and the shorter radius. */
export function angleBetweenRays(first: AngleRay, second: AngleRay) {
  const u = { x: first.b.x - first.a.x, y: first.b.y - first.a.y },
    v = { x: second.b.x - second.a.x, y: second.b.y - second.a.y },
    cross = u.x * v.y - u.y * v.x;
  if (Math.abs(cross) < 1e-8 * Math.hypot(u.x, u.y) * Math.hypot(v.x, v.y)) return null;
  const delta = { x: second.a.x - first.a.x, y: second.a.y - first.a.y },
    t = (delta.x * v.y - delta.y * v.x) / cross,
    vertex = { x: first.a.x + t * u.x, y: first.a.y + t * u.y };
  if (distance(vertex, projectOnSegment(vertex, first.a, first.b)) > 0.001 ||
    distance(vertex, projectOnSegment(vertex, second.a, second.b)) > 0.001) return null;
  const radius = Math.min(distance(vertex, first.point), distance(vertex, second.point));
  if (radius < 8) return null;
  const angle = createAngle(vertex, first.point, second.point);
  return { ...angle, radius, showRays: false };
}
