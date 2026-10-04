import { componentRegistry } from '../model/catalog';
import type { CircuitComponent, CircuitDocument, CircuitObject } from '../model/types';
import { localToWorld } from './geometry';
import { visualBounds } from './visualBounds';
import type { Bounds } from './visualBounds';

/** Rotated world bounds of the symbol body; independent of leads, hit padding,
 * label offsets and document/export bounds. */
export function getMeasurementBounds(component: CircuitComponent): Bounds {
  const b = componentRegistry[component.type].measurementBounds;
  const corners = [
    { x: b.x, y: b.y },
    { x: b.x + b.width, y: b.y },
    { x: b.x, y: b.y + b.height },
    { x: b.x + b.width, y: b.y + b.height },
  ].map((p) => localToWorld(component, p));
  const x = Math.min(...corners.map((p) => p.x)),
    y = Math.min(...corners.map((p) => p.y));
  return {
    x,
    y,
    width: Math.max(...corners.map((p) => p.x)) - x,
    height: Math.max(...corners.map((p) => p.y)) - y,
  };
}

export function measurementBounds(object: CircuitObject, document: CircuitDocument): Bounds {
  return object.kind === 'component'
    ? getMeasurementBounds(object)
    : visualBounds(object, document);
}
