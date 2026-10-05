import type { SymbolShape } from './symbolGeometry';
import type { Point } from './types';

export interface SymbolBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

/** Exact extents of the authored path subset. Curves use their extrema, not
 * control-point boxes (which would make coils/gates measure invisible space). */
function pathPoints(
  d: string,
  ranges?: [number, number][],
  transform: (point: Point) => Point = (point) => point,
): Point[] {
  const tokens = d.match(/[MLHVCQZ]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/gi) ?? [];
  if (d.replace(/[MLHVCQZ]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?|[\s,]/gi, ''))
    throw new Error('Unsupported measurement path.');
  const points: Point[] = [];
  let i = 0,
    segment = 0,
    command = '',
    current: Point = { x: 0, y: 0 },
    start = current;
  const number = () => {
    const value = Number(tokens[i++]);
    if (!Number.isFinite(value)) throw new Error('Invalid measurement coordinate.');
    return value;
  };
  const point = (): Point => ({ x: number(), y: number() });
  const selected = () => !ranges || ranges.some(([from, to]) => segment >= from && segment <= to);
  const line = (end: Point) => {
    if (selected()) points.push(transform(current), transform(end));
    segment++;
    current = end;
  };
  const cubic = (a: Point, b: Point, end: Point) => {
    const origin = transform(current),
      controlA = transform(a),
      controlB = transform(b),
      target = transform(end);
    const include = selected();
    segment++;
    if (!include) {
      current = end;
      return;
    }
    points.push(origin, target);
    const at = (t: number): Point => {
      const u = 1 - t;
      return {
        x:
          u ** 3 * origin.x +
          3 * u * u * t * controlA.x +
          3 * u * t * t * controlB.x +
          t ** 3 * target.x,
        y:
          u ** 3 * origin.y +
          3 * u * u * t * controlA.y +
          3 * u * t * t * controlB.y +
          t ** 3 * target.y,
      };
    };
    for (const axis of ['x', 'y'] as const) {
      const aa = -origin[axis] + 3 * controlA[axis] - 3 * controlB[axis] + target[axis];
      const bb = 2 * (origin[axis] - 2 * controlA[axis] + controlB[axis]);
      const cc = controlA[axis] - origin[axis];
      const roots: number[] = [];
      if (Math.abs(aa) < 1e-10) {
        if (Math.abs(bb) > 1e-10) roots.push(-cc / bb);
      } else {
        const discriminant = bb * bb - 4 * aa * cc;
        if (discriminant >= 0) {
          const square = Math.sqrt(discriminant);
          roots.push((-bb + square) / (2 * aa), (-bb - square) / (2 * aa));
        }
      }
      for (const t of roots) if (t > 0 && t < 1) points.push(at(t));
    }
    current = end;
  };
  while (i < tokens.length) {
    if (/^[MLHVCQZ]$/.test(tokens[i])) command = tokens[i++];
    if (command === 'M') {
      current = point();
      start = current;
      command = 'L';
    } else if (command === 'L') line(point());
    else if (command === 'H') line({ ...current, x: number() });
    else if (command === 'V') line({ ...current, y: number() });
    else if (command === 'C') cubic(point(), point(), point());
    else if (command === 'Q') {
      const q = point(),
        end = point();
      cubic(
        { x: current.x + (2 * (q.x - current.x)) / 3, y: current.y + (2 * (q.y - current.y)) / 3 },
        { x: end.x + (2 * (q.x - end.x)) / 3, y: end.y + (2 * (q.y - end.y)) / 3 },
        end,
      );
    } else if (command === 'Z') {
      line(start);
      command = '';
    } else throw new Error('Unsupported measurement command.');
  }
  return points;
}

/** Body geometry belongs to the rendered symbol definition. Lead/auxiliary
 * shapes are explicitly excluded; no component-type cases in interactions. */
export function symbolMeasurementBounds(
  shapes: SymbolShape[],
  transform: (point: Point) => Point = (point) => point,
): SymbolBounds {
  const points = shapes.flatMap((shape): Point[] => {
    if (shape.measurement === false || shape.kind === 'text') return [];
    if (shape.kind === 'path') return pathPoints(shape.d, shape.measurement?.segments, transform);
    if (shape.kind === 'circle') {
      // The transform is rigid: a rotated circle keeps its radius rather than
      // inheriting the oversized corners of its unrotated bounding rectangle.
      const center = transform(shape);
      return [
        { x: center.x - shape.r, y: center.y - shape.r },
        { x: center.x + shape.r, y: center.y + shape.r },
      ];
    }
    return [
      shape,
      { x: shape.x + shape.width, y: shape.y },
      { x: shape.x, y: shape.y + shape.height },
      { x: shape.x + shape.width, y: shape.y + shape.height },
    ].map(transform);
  });
  if (!points.length) throw new Error('Every component needs measurement body geometry.');
  const x = Math.min(...points.map((p) => p.x)),
    y = Math.min(...points.map((p) => p.y));
  return {
    x,
    y,
    width: Math.max(...points.map((p) => p.x)) - x,
    height: Math.max(...points.map((p) => p.y)) - y,
  };
}
