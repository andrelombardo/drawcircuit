import { componentRegistry } from '../model/catalog';
import type { CircuitObject, Endpoint, Point } from '../model/types';
import { localToWorld } from '../utils/geometry';

/** Export-only validation: never repair or mutate the editor's document. */
export const finitePoint = (p: unknown): p is Point =>
  !!p &&
  typeof p === 'object' &&
  'x' in p &&
  'y' in p &&
  Number.isFinite(p.x) &&
  Number.isFinite(p.y);
const positive = (n: number) => Number.isFinite(n) && n > 0;
const rotation = (n: number) => [0, 90, 180, 270].includes(n);

export function normalizeHex(color: string): string | null {
  if (typeof color !== 'string') return null;
  const hex = color.trim().replace(/^#/, '');
  if (/^[\da-f]{3}$/i.test(hex)) return hex.replace(/./g, (digit) => digit + digit).toUpperCase();
  return /^[\da-f]{6}$/i.test(hex) ? hex.toUpperCase() : null;
}

const endpoint = (e: Endpoint) =>
  e?.kind === 'free'
    ? finitePoint(e.point)
    : e?.kind === 'terminal'
      ? typeof e.componentId === 'string' && typeof e.terminalId === 'string'
      : e?.kind === 'junction' && typeof e.junctionId === 'string';

export function isExportableObject(o: CircuitObject): boolean {
  if (!o || typeof o.id !== 'string' || !o.id || !normalizeHex(o.color)) return false;
  switch (o.kind) {
    case 'component': {
      if (
        !Object.hasOwn(componentRegistry, o.type) ||
        !finitePoint(o) ||
        !rotation(o.rotation) ||
        !positive(o.width) ||
        (o.bodyText !== undefined && typeof o.bodyText !== 'string') ||
        !Array.isArray(o.terminals)
      )
        return false;
      const expected = componentRegistry[o.type].terminals;
      return (
        o.terminals.length === expected.length &&
        expected.every((pin, i) => {
          const t = o.terminals[i];
          return (
            t?.id === pin.id &&
            Number.isFinite(t.localX) &&
            Number.isFinite(t.localY) &&
            finitePoint(localToWorld(o, { x: t.localX, y: t.localY }))
          );
        })
      );
    }
    case 'junction':
      return finitePoint(o);
    case 'text':
      return (
        finitePoint(o) &&
        typeof o.text === 'string' &&
        positive(o.fontSize) &&
        rotation(o.rotation) &&
        ['start', 'middle', 'end'].includes(o.align)
      );
    case 'wire':
      return (
        positive(o.width) &&
        endpoint(o.startEndpoint) &&
        endpoint(o.endEndpoint) &&
        Array.isArray(o.vertices) &&
        o.vertices.every(finitePoint)
      );
    case 'arrow':
      return (
        ['straight', 'curve', 'arc'].includes(o.type) &&
        finitePoint(o.start) &&
        finitePoint(o.end) &&
        positive(o.width) &&
        typeof o.reversed === 'boolean' &&
        (o.type !== 'curve' ||
          (Array.isArray(o.controlPoints) &&
            o.controlPoints.length === 2 &&
            o.controlPoints.every(finitePoint)))
      );
    case 'loop-arrow':
      return (
        finitePoint(o) &&
        positive(o.width) &&
        positive(o.height) &&
        positive(o.strokeWidth) &&
        Number.isFinite(o.arrowPosition) &&
        ['clockwise', 'counterclockwise'].includes(o.direction)
      );
    default:
      return false;
  }
}
