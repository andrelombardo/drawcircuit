import { detachElectrical } from '../annotations/electrical';
import type { CircuitDocument, Endpoint, Wire } from '../model/types';
import { moveObject, resolveEndpoint, wirePoints } from '../utils/geometry';
import { contentBounds, unionBounds } from '../utils/visualBounds';
import { exportTikz, exportObsidian } from './exporter';

/** Export-only projection: clipboard and the editable document keep their rules. */
export function selectionDocument(doc: CircuitDocument, ids: string[]): CircuitDocument {
  const selected = new Set(ids),
    included = new Set(ids);
  const belongs = (ep: Endpoint) =>
    ep.kind === 'terminal'
      ? selected.has(ep.componentId)
      : ep.kind === 'junction'
        ? selected.has(ep.junctionId)
        : false;
  const wires = doc.objects.filter(
    (o): o is Wire =>
      o.kind === 'wire' &&
      (selected.has(o.id) || (belongs(o.startEndpoint) && belongs(o.endEndpoint))),
  );
  for (const wire of wires) {
    included.add(wire.id);
    for (const ep of [wire.startEndpoint, wire.endEndpoint])
      if (ep.kind === 'junction') included.add(ep.junctionId);
  }
  const endpoint = (ep: Endpoint): Endpoint =>
    ep.kind === 'terminal' && !included.has(ep.componentId)
      ? { kind: 'free', point: resolveEndpoint(ep, doc) }
      : ep;
  const objects = doc.objects
    .filter((o) => included.has(o.id))
    .map((o) => {
      if (
        o.kind === 'electrical' &&
        ((o.wireId && !included.has(o.wireId)) || (o.componentId && !included.has(o.componentId)))
      )
        return detachElectrical(o, doc);
      if (o.kind !== 'wire') return o;
      const startEndpoint = endpoint(o.startEndpoint),
        endEndpoint = endpoint(o.endEndpoint);
      // Preserve an explicitly selected wire's route when external pins become free.
      return {
        ...o,
        startEndpoint,
        endEndpoint,
        vertices:
          startEndpoint !== o.startEndpoint || endEndpoint !== o.endEndpoint
            ? wirePoints(o, doc).slice(1, -1)
            : o.vertices,
      };
    });
  if (!objects.length) return { ...doc, objects: [] };
  const subset = { ...doc, objects },
    bounds = unionBounds(objects.map((o) => contentBounds(o, subset)));
  return {
    ...subset,
    objects: objects.map((o) => moveObject(o, { x: -bounds.x, y: -bounds.y }, included)),
  };
}
export const exportSelectionTikz = (doc: CircuitDocument, ids: string[]) =>
  exportTikz(selectionDocument(doc, ids));
export const exportSelectionObsidian = (doc: CircuitDocument, ids: string[]) =>
  exportObsidian(selectionDocument(doc, ids));
