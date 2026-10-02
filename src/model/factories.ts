import { makeId } from './catalog';
import { COLORS } from './types';
import type { Endpoint, Junction, Point, TextAnnotation, Wire } from './types';

export function createJunction(point: Point, text: string): Junction {
  return {
    kind: 'junction',
    id: makeId(),
    ...point,
    color: COLORS.ink,
    label: { text, offset: { x: 0, y: -24 }, color: COLORS.red, fontSize: 24, rotation: 0 },
  };
}

export function createWire(start: Endpoint, end: Endpoint, vertices: Point[] = []): Wire {
  return {
    kind: 'wire',
    id: makeId(),
    startEndpoint: start,
    endEndpoint: end,
    vertices,
    color: COLORS.ink,
    width: 2,
  };
}

export function createTextAnnotation(point: Point, text = 'Testo'): TextAnnotation {
  return {
    kind: 'text',
    id: makeId(),
    ...point,
    text,
    color: COLORS.red,
    fontSize: 24,
    align: 'start',
    rotation: 0,
  };
}
