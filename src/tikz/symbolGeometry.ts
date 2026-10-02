import { symbolText } from '../model/symbolGeometry';
import type { CircuitComponent, Point } from '../model/types';
import { componentRegistry } from '../model/catalog';
import { localToWorld } from '../utils/geometry';
/** Only the authored SVG path subset is accepted; unsupported geometry fails visibly. */
export function svgPathToTikz(d: string, coordinate: (p: Point) => string): string {
  const tokens = d.match(/[MLHVCQZ]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/gi) ?? [];
  if (d.replace(/[MLHVCQZ]|[-+]?(?:\d*\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?|[\s,]/gi, '') !== '')
    throw new Error('Unsupported symbol path.');
  let i = 0,
    command = '',
    current = { x: 0, y: 0 },
    start = current;
  const chunks: string[] = [];
  let subpath: string[] = [],
    hasGeometry = false;
  const flush = () => {
    if (hasGeometry) chunks.push(...subpath);
    subpath = [];
    hasGeometry = false;
  };
  const differs = (a: Point, b: Point) => a.x !== b.x || a.y !== b.y;
  const segment = (end: Point) => {
    if (differs(current, end)) {
      subpath.push(`-- ${coordinate(end)}`);
      hasGeometry = true;
    }
    current = end;
  };
  const number = () => {
    const n = Number(tokens[i++]);
    if (!Number.isFinite(n)) throw new Error('Invalid symbol coordinate.');
    return n;
  };
  const point = () => ({ x: number(), y: number() });
  while (i < tokens.length) {
    if (/^[MLHVCQZ]$/.test(tokens[i])) command = tokens[i++];
    if (command === 'Z') {
      if (hasGeometry) subpath.push('-- cycle');
      current = start;
      command = '';
      continue;
    }
    if (command === 'M') {
      flush();
      current = point();
      start = current;
      subpath.push(coordinate(current));
      command = 'L';
    } else if (command === 'L') {
      segment(point());
    } else if (command === 'H') {
      segment({ ...current, x: number() });
    } else if (command === 'V') {
      segment({ ...current, y: number() });
    } else if (command === 'C') {
      const a = point(),
        b = point(),
        end = point();
      if ([a, b, end].some((p) => differs(p, current))) {
        subpath.push(`.. controls ${coordinate(a)} and ${coordinate(b)} .. ${coordinate(end)}`);
        hasGeometry = true;
      }
      current = end;
    } else if (command === 'Q') {
      const q = point(),
        end = point();
      const a = {
        x: current.x + (2 * (q.x - current.x)) / 3,
        y: current.y + (2 * (q.y - current.y)) / 3,
      };
      const b = { x: end.x + (2 * (q.x - end.x)) / 3, y: end.y + (2 * (q.y - end.y)) / 3 };
      if ([q, end].some((p) => differs(p, current))) {
        subpath.push(`.. controls ${coordinate(a)} and ${coordinate(b)} .. ${coordinate(end)}`);
        hasGeometry = true;
      }
      current = end;
    } else throw new Error('Unsupported symbol path command.');
  }
  flush();
  return chunks.join(' ');
}
export function geometryTikz(
  o: CircuitComponent,
  style: string,
  coordinate: (p: Point) => string,
  pixelsToPt: (n: number) => string,
  texText: (text: string) => string,
  options?: { dashed: string; text: (text: string, position: Point, size: number) => string[] },
): string[] {
  const definition = componentRegistry[o.type];
  const p = (point: Point) => coordinate(localToWorld(o, point));
  return [
    `% ${definition.tikz.kind === 'geometry' ? definition.tikz.reason : definition.name}`,
    ...definition.shapes.flatMap((shape) => {
      if (shape.kind === 'text') {
        const { value, size } = symbolText(shape, o.bodyText);
        if (!value.trim()) return [];
        if (options) return options.text(value, localToWorld(o, shape), size);
        return `\\node[rotate=${-o.rotation}, inner sep=0pt, text=${style.match(/draw=([^,]+)/)?.[1]}, font=\\fontsize{${pixelsToPt(size)}}{${pixelsToPt(size * 1.3)}}\\selectfont] at ${p(shape)} {${texText(value)}};`;
      }
      const fill = shape.fill ? ', fill=white' : '';
      if (shape.kind === 'circle') {
        if (shape.r <= 0 || !Number.isFinite(shape.r)) return [];
        return `\\draw[${style}${fill}] ${p(shape)} circle (${pixelsToPt(shape.r)}pt);`;
      }
      if (shape.kind === 'rect') {
        if (shape.width <= 0 || shape.height <= 0) return [];
        return `\\draw[${style}${fill}] ${p(shape)} -- ${p({ x: shape.x + shape.width, y: shape.y })} -- ${p({ x: shape.x + shape.width, y: shape.y + shape.height })} -- ${p({ x: shape.x, y: shape.y + shape.height })} -- cycle;`;
      }
      const path = svgPathToTikz(shape.d, p);
      return path
        ? `\\draw[${style}${fill}${shape.dashed ? `, ${options?.dashed ?? 'densely dashed'}` : ''}] ${path};`
        : [];
    }),
  ];
}
