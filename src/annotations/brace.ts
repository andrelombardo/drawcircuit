import { makeId } from '../model/catalog';
import { COLORS } from '../model/types';
import type { BraceAnnotation, Point } from '../model/types';

/** Infer the dominant axis from the gesture; no duplicated orientation state. */
export function braceEndpoints(a: Point, b: Point) {
  return Math.abs(b.x - a.x) >= Math.abs(b.y - a.y)
    ? { start: { x: Math.min(a.x, b.x), y: a.y }, end: { x: Math.max(a.x, b.x), y: a.y } }
    : { start: { x: a.x, y: Math.min(a.y, b.y) }, end: { x: a.x, y: Math.max(a.y, b.y) } };
}
export function createBrace(type: BraceAnnotation['type'], a: Point, b: Point): BraceAnnotation {
  return {
    kind: 'brace',
    id: makeId(),
    type,
    ...braceEndpoints(a, b),
    side: 1,
    color: COLORS.red,
    width: 2,
    label: { text: '', offset: { x: 0, y: 0 }, color: COLORS.red, fontSize: 24, rotation: 0 },
  };
}

/** Resize along the existing baseline, preserving the fixed endpoint and visual side. */
export function resizeBrace(
  o: BraceAnnotation,
  handle: 'start' | 'end',
  p: Point,
): BraceAnnotation {
  const horizontal = o.start.y === o.end.y;
  const axis = horizontal ? 'x' : 'y';
  const direction = o.end[axis] >= o.start[axis] ? 1 : -1;
  const fixed = handle === 'start' ? o.end : o.start;
  const limit = fixed[axis] + (handle === 'start' ? -direction : direction) * 20;
  const increasing = (handle === 'end' ? direction : -direction) > 0;
  const value = increasing ? Math.max(limit, p[axis]) : Math.min(limit, p[axis]);
  return { ...o, [handle]: { ...fixed, [axis]: value } };
}

/** Canvas, SVG and TikZ use this exact vector path and label anchor. */
export function braceGeometry(o: BraceAnnotation) {
  const length = Math.hypot(o.end.x - o.start.x, o.end.y - o.start.y);
  const ux = length ? (o.end.x - o.start.x) / length : 1;
  const uy = length ? (o.end.y - o.start.y) / length : 0;
  const depth = Math.min(14, length / 10);
  const p = (x: number, y: number): Point => ({
    x: o.start.x + ux * x - uy * y * o.side,
    y: o.start.y + uy * x + ux * y * o.side,
  });
  const xy = (q: Point) => `${q.x} ${q.y}`;
  const points = [p(0, 0), p(0, depth), p(length, depth), p(length, 0)];
  const cusp = p(length / 2, depth * 2);
  const d =
    o.type === 'bracket'
      ? `M ${xy(points[0])} L ${xy(points[1])} L ${xy(points[2])} L ${xy(points[3])}`
      : `M ${xy(p(0, 0))} C ${xy(p(0, depth))} ${xy(p(depth, depth))} ${xy(p(depth * 2, depth))} L ${xy(p(length / 2 - depth * 2, depth))} C ${xy(p(length / 2 - depth, depth))} ${xy(p(length / 2, depth))} ${xy(cusp)} C ${xy(p(length / 2, depth))} ${xy(p(length / 2 + depth, depth))} ${xy(p(length / 2 + depth * 2, depth))} L ${xy(p(length - depth * 2, depth))} C ${xy(p(length - depth, depth))} ${xy(p(length, depth))} ${xy(p(length, 0))}`;
  const anchor = p(length / 2, (o.type === 'brace' ? depth * 2 : depth) + o.label.fontSize * 0.8);
  return {
    d,
    points: o.type === 'brace' ? [...points, cusp] : points,
    labelPoint: { x: anchor.x + o.label.offset.x, y: anchor.y + o.label.offset.y },
  };
}
