import { detachElectrical } from '../annotations/electrical';
import { wrapPosition } from './loops';
import { makeId } from '../model/catalog';
import {
  add,
  moveObject,
  objectBounds,
  resolveEndpoint,
  rotatePoint,
  wirePoints,
  midpoint,
} from './geometry';
import type { CircuitDocument, CircuitObject, Endpoint, Point, Rotation } from '../model/types';
export function extractSelection(doc: CircuitDocument, ids: string[]): CircuitDocument {
  const selected = new Set(ids);
  const ep = (e: Endpoint): Endpoint =>
    (e.kind === 'terminal' && !selected.has(e.componentId)) ||
    (e.kind === 'junction' && !selected.has(e.junctionId))
      ? { kind: 'free', point: resolveEndpoint(e, doc) }
      : e;
  return {
    ...doc,
    objects: doc.objects
      .filter((o) => selected.has(o.id))
      .map((o) =>
        o.kind === 'electrical' &&
        ((o.wireId && !selected.has(o.wireId)) || (o.componentId && !selected.has(o.componentId)))
          ? detachElectrical(o, doc)
          : o.kind === 'wire'
            ? detachWireEndpoints(o, ep, doc)
            : o,
      ),
  };
}
export function cloneObjects(
  doc: CircuitDocument,
  delta: Point,
  existing: CircuitDocument = doc,
): CircuitObject[] {
  const ids = new Map(doc.objects.map((o) => [o.id, makeId()]));
  const remap = (e: Endpoint): Endpoint =>
    e.kind === 'terminal'
      ? { ...e, componentId: ids.get(e.componentId)! }
      : e.kind === 'junction'
        ? { ...e, junctionId: ids.get(e.junctionId)! }
        : e;
  const labels = new Set(
    existing.objects.filter((o) => o.kind === 'component').map((o) => o.label.text),
  );
  return doc.objects.map((o) => {
    const copy = structuredClone(o);
    copy.id = ids.get(o.id)!;
    if (copy.kind === 'component') {
      const auto = /^(.*?)([_]?)(\d+)$/.exec(copy.label.text);
      if (auto) {
        let index = Number(auto[3]) + 1;
        while (labels.has(`${auto[1]}${auto[2]}${index}`)) index++;
        copy.label.text = `${auto[1]}${auto[2]}${index}`;
        labels.add(copy.label.text);
      }
    }
    if (copy.kind === 'electrical') {
      if (copy.wireId) copy.wireId = ids.get(copy.wireId);
      if (copy.componentId) copy.componentId = ids.get(copy.componentId);
    }
    if (copy.kind === 'wire') {
      copy.startEndpoint = remap(copy.startEndpoint);
      copy.endEndpoint = remap(copy.endEndpoint);
    }
    return moveObject(copy, delta, new Set(ids.values()));
  });
}
export function removeObjects(doc: CircuitDocument, ids: string[]): CircuitDocument {
  const removed = new Set(ids);
  const ep = (e: Endpoint): Endpoint =>
    (e.kind === 'terminal' && removed.has(e.componentId)) ||
    (e.kind === 'junction' && removed.has(e.junctionId))
      ? { kind: 'free', point: resolveEndpoint(e, doc) }
      : e;
  return {
    ...doc,
    objects: doc.objects
      .filter((o) => !removed.has(o.id))
      .map((o) =>
        o.kind === 'electrical' &&
        ((o.wireId && removed.has(o.wireId)) || (o.componentId && removed.has(o.componentId)))
          ? detachElectrical(o, doc)
          : o.kind === 'wire'
            ? detachWireEndpoints(o, ep, doc)
            : o,
      ),
  };
}
/** Freeze the visible route before terminal direction is lost on detachment. */
function detachWireEndpoints(
  wire: Extract<CircuitObject, { kind: 'wire' }>,
  detach: (endpoint: Endpoint) => Endpoint,
  doc: CircuitDocument,
) {
  const startEndpoint = detach(wire.startEndpoint),
    endEndpoint = detach(wire.endEndpoint);
  return {
    ...wire,
    startEndpoint,
    endEndpoint,
    vertices:
      startEndpoint !== wire.startEndpoint || endEndpoint !== wire.endEndpoint
        ? wirePoints(wire, doc).slice(1, -1)
        : wire.vertices,
  };
}
/** Shared geometric move used by pointer dragging and keyboard nudging. */
export function moveSelection(doc: CircuitDocument, ids: string[], delta: Point): CircuitDocument {
  const selected = new Set(ids);
  const attachedToSelection = (ep: Endpoint) =>
    ep.kind === 'terminal'
      ? selected.has(ep.componentId)
      : ep.kind === 'junction' && selected.has(ep.junctionId);
  return {
    ...doc,
    objects: doc.objects.map((o) => {
      if (!selected.has(o.id)) {
        if (
          o.kind === 'wire' &&
          !o.vertices.length &&
          (delta.x || delta.y) &&
          (attachedToSelection(o.startEndpoint) || attachedToSelection(o.endEndpoint))
        ) {
          // Auto-routing has no stored bends: freeze the existing path before an
          // attached object moves, so the distant branch stays where it was.
          const points = wirePoints(o, doc);
          if (points.length > 2) {
            const vertices = points.slice(1, -1).map((point) => ({ ...point }));
            if (attachedToSelection(o.startEndpoint)) {
              const axis = points[0].x === points[1].x ? 'x' : 'y';
              vertices[0][axis] += delta[axis];
            }
            if (attachedToSelection(o.endEndpoint)) {
              const axis = points.at(-1)!.x === points.at(-2)!.x ? 'x' : 'y';
              vertices.at(-1)![axis] += delta[axis];
            }
            return { ...o, vertices };
          }
          const first = points[0],
            last = points.at(-1)!;
          if ((first.x === last.x && delta.x !== 0) || (first.y === last.y && delta.y !== 0))
            return { ...o, vertices: [midpoint(first, last)] };
        }
        return o;
      }
      if (o.kind === 'wire' && !o.vertices.length) {
        const fixed = (ep: Endpoint) =>
          ep.kind === 'terminal'
            ? !selected.has(ep.componentId)
            : ep.kind === 'junction'
              ? !selected.has(ep.junctionId)
              : false;
        if (fixed(o.startEndpoint) || fixed(o.endEndpoint)) {
          const pts = wirePoints(o, doc);
          const vertices =
            pts.length > 2 ? pts.slice(1, -1) : [midpoint(pts[0], pts[pts.length - 1])];
          return moveObject({ ...o, vertices }, delta, selected);
        }
      }
      return moveObject(o, delta, selected);
    }),
  };
}
export function rotateObjects(doc: CircuitDocument, ids: string[]): CircuitDocument {
  const selected = new Set(ids),
    objects = doc.objects.filter((o) => selected.has(o.id));
  if (!objects.length) return doc;
  const boxes = objects.map((o) => objectBounds(o, doc));
  const minX = Math.min(...boxes.map((b) => b.x)),
    maxX = Math.max(...boxes.map((b) => b.x + b.width)),
    minY = Math.min(...boxes.map((b) => b.y)),
    maxY = Math.max(...boxes.map((b) => b.y + b.height));
  const center =
    objects.length === 1 && objects[0].kind === 'component'
      ? { x: objects[0].x, y: objects[0].y }
      : objects.length === 1 && objects[0].kind === 'brace'
        ? midpoint(objects[0].start, objects[0].end)
        : { x: Math.round((minX + maxX) / 40) * 20, y: Math.round((minY + maxY) / 40) * 20 };
  const rp = (p: Point) => add(rotatePoint({ x: p.x - center.x, y: p.y - center.y }, 90), center);
  const next = (r: Rotation) => ((r + 90) % 360) as Rotation;
  const ep = (e: Endpoint): Endpoint =>
    e.kind === 'free' ? { kind: 'free', point: rp(e.point) } : e;
  return {
    ...doc,
    objects: doc.objects.map((o) => {
      if (!selected.has(o.id)) return o;
      if (o.kind === 'component')
        return {
          ...o,
          ...rp(o),
          rotation: next(o.rotation),
          label: { ...o.label, offset: rotatePoint(o.label.offset, 90) },
        };
      if (o.kind === 'junction') return { ...o, ...rp(o) };
      if (o.kind === 'text') return { ...o, ...rp(o), rotation: next(o.rotation) };
      if (o.kind === 'loop-arrow') {
        const c = rp({ x: o.x + o.width / 2, y: o.y + o.height / 2 });
        return {
          ...o,
          x: c.x - o.height / 2,
          y: c.y - o.width / 2,
          width: o.height,
          height: o.width,
          arrowPosition: wrapPosition(o.arrowPosition + 0.25),
        };
      }
      if (o.kind === 'electrical') {
        const attached =
          (o.wireId && !selected.has(o.wireId)) || (o.componentId && !selected.has(o.componentId));
        const base = attached ? detachElectrical(o, doc) : o;
        return {
          ...base,
          start: rp(base.start),
          end: rp(base.end),
          offset: rotatePoint(base.offset, 90),
          label: { ...base.label, offset: rotatePoint(base.label.offset, 90) },
        };
      }
      if (o.kind === 'brace')
        return {
          ...o,
          start: rp(o.start),
          end: rp(o.end),
          label: { ...o.label, offset: rotatePoint(o.label.offset, 90) },
        };
      if (o.kind === 'arrow')
        return {
          ...o,
          start: rp(o.start),
          end: rp(o.end),
          controlPoints: [rp(o.controlPoints[0]), rp(o.controlPoints[1])],
        };
      return {
        ...o,
        startEndpoint: ep(o.startEndpoint),
        endEndpoint: ep(o.endEndpoint),
        vertices: o.vertices.map(rp),
      };
    }),
  };
}
