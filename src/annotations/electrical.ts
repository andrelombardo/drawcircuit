import { makeId } from '../model/catalog';
import { COLORS } from '../model/types';
import type {
  CircuitComponent,
  CircuitDocument,
  ElectricalAnnotation,
  Point,
  Wire,
} from '../model/types';
import {
  add,
  distance,
  localToWorld,
  midpoint,
  projectOnSegment,
  wirePoints,
} from '../utils/geometry';
import { chevron } from '../tikz/arrowheads';

function currentBranch(o: ElectricalAnnotation, doc: CircuitDocument) {
  const wire = o.wireId ? doc.objects.find((item) => item.id === o.wireId) : undefined;
  if (wire?.kind !== 'wire') return null;
  const points = wirePoints(wire, doc);
  const lengths = points.slice(1).map((p, i) => distance(points[i], p));
  let remaining = o.ratio * lengths.reduce((a, b) => a + b, 0),
    segment = 0;
  while (segment < lengths.length - 1 && remaining > lengths[segment])
    remaining -= lengths[segment++];
  if (o.wireSegment) {
    segment = Math.min(o.wireSegment.index, Math.max(0, lengths.length - 1));
    remaining = o.wireSegment.ratio * (lengths[segment] || 0);
  }
  const a = points[segment] ?? o.start,
    b = points[segment + 1] ?? o.end,
    length = lengths[segment] || 1;
  return { a, b, length, remaining, width: wire.width };
}

export function electricalGeometry(o: ElectricalAnnotation, doc: CircuitDocument) {
  let start = o.start,
    end = o.end;
  const inline = o.mode === 'current' && o.currentPlacement === 'inline';
  let constrainedOffset = false;
  if (o.wireId) {
    const branch = currentBranch(o, doc);
    if (branch) {
      const { a, b, length, remaining } = branch;
      const tangent = { x: (b.x - a.x) / length, y: (b.y - a.y) / length };
      const half = Math.min(30, length / 2);
      // An integrated annotation can slide along its branch but cannot leave it.
      const along = Math.max(
        half,
        Math.min(
          length - half,
          remaining + (inline ? o.offset.x * tangent.x + o.offset.y * tangent.y : 0),
        ),
      );
      const separation = inline ? 0 : 16;
      const center = {
        x: a.x + tangent.x * along + tangent.y * separation,
        y: a.y + tangent.y * along - tangent.x * separation,
      };
      start = { x: center.x - tangent.x * half, y: center.y - tangent.y * half };
      end = { x: center.x + tangent.x * half, y: center.y + tangent.y * half };
      constrainedOffset = inline;
    }
  } else if (o.componentId) {
    const c = doc.objects.find((o2) => o2.id === o.componentId);
    if (c?.kind === 'component' && c.terminals.length === 2) {
      const [a, b] = c.terminals.map((t) => localToWorld(c, { x: t.localX, y: t.localY }));
      const length = distance(a, b) || 1;
      const shift = { x: ((b.y - a.y) / length) * 20, y: (-(b.x - a.x) / length) * 20 };
      start = add(a, shift);
      end = add(b, shift);
    }
  }
  if (!constrainedOffset) {
    start = add(start, o.offset);
    end = add(end, o.offset);
  }
  const length = distance(start, end) || 1;
  const normal = { x: (end.y - start.y) / length, y: -(end.x - start.x) / length };
  const middle = midpoint(start, end);
  const labelDistance = o.mode === 'polarity' ? -48 : inline ? -24 : 24;
  const labelPoint = add(
    { x: middle.x + normal.x * labelDistance, y: middle.y + normal.y * labelDistance },
    o.label.offset,
  );
  return {
    start,
    end,
    labelPoint,
    inline,
    arrowStart: o.reversed ? end : start,
    arrowEnd: inline ? middle : o.reversed ? start : end,
  };
}

export const INLINE_CURRENT_LENGTH_PX = 36;
export const INLINE_CURRENT_MIN_LENGTH_PX = 28;
export const INLINE_CURRENT_GAP_PX = 4;
const INLINE_CURRENT_ENDPOINT_CLEARANCE_PX = 6;

/** Visual geometry only. The wire, stored branch anchor and label offsets stay intact.
 * Canvas dimensions use screen pixels; exports use the same geometry at zoom 1. */
export function electricalDrawingGeometry(o: ElectricalAnnotation, doc: CircuitDocument, zoom = 1) {
  const g = electricalGeometry(o, doc);
  const z = Number.isFinite(zoom) && zoom > 0 ? zoom : 1;
  const originalHead = chevron(g.arrowEnd, {
    x: g.arrowEnd.x - g.arrowStart.x,
    y: g.arrowEnd.y - g.arrowStart.y,
  });
  if (!g.inline)
    return { ...g, head: originalHead, strokeWidth: o.width, mask: null, fallback: false };
  const branch = currentBranch(o, doc);
  const length = distance(g.start, g.end);
  const tangent = length
    ? { x: (g.end.x - g.start.x) / length, y: (g.end.y - g.start.y) / length }
    : { x: 1, y: 0 };
  const normal = { x: tangent.y, y: -tangent.x };
  const gap = INLINE_CURRENT_GAP_PX / z;
  const clearance = INLINE_CURRENT_ENDPOINT_CLEARANCE_PX / z;
  const available = branch ? distance(branch.a, branch.b) : length;
  const fallback =
    available * z <
    INLINE_CURRENT_MIN_LENGTH_PX +
      2 * INLINE_CURRENT_GAP_PX +
      (branch ? 2 * INLINE_CURRENT_ENDPOINT_CLEARANCE_PX : 0);
  const visualLength = fallback
    ? INLINE_CURRENT_LENGTH_PX / z
    : Math.min(INLINE_CURRENT_LENGTH_PX / z, available - 2 * gap - (branch ? 2 * clearance : 0));
  let center = midpoint(g.start, g.end);
  if (fallback) center = add(center, { x: (normal.x * 16) / z, y: (normal.y * 16) / z });
  else if (branch) {
    const margin = visualLength / 2 + gap + clearance;
    const along = Math.max(
      margin,
      Math.min(
        available - margin,
        branch.remaining + o.offset.x * tangent.x + o.offset.y * tangent.y,
      ),
    );
    center = add(branch.a, { x: tangent.x * along, y: tangent.y * along });
  }
  const at = (along: number) => add(center, { x: tangent.x * along, y: tangent.y * along });
  const start = at(-visualLength / 2),
    end = at(visualLength / 2);
  const arrowStart = o.reversed ? end : start,
    arrowEnd = o.reversed ? start : end;
  const sign = o.reversed ? -1 : 1;
  const head = [-1, 0, 1].map((side) =>
    side === 0
      ? arrowEnd
      : {
          x: arrowEnd.x - (sign * tangent.x * 10) / z + (normal.x * side * 4.5) / z,
          y: arrowEnd.y - (sign * tangent.y * 10) / z + (normal.y * side * 4.5) / z,
        },
  );
  const strokeWidth = Math.max(o.width, 2.2 / z);
  const mask = fallback
    ? null
    : {
        start: at(-visualLength / 2 - gap),
        end: at(visualLength / 2 + gap),
        width: Math.max(branch?.width ?? 0, strokeWidth) + 4 / z,
      };
  return { ...g, start, end, arrowStart, arrowEnd, head, strokeWidth, mask, fallback };
}

/** The selected branch position, before the external display separation or drag offset. */
export function currentWireAnchor(o: ElectricalAnnotation, doc: CircuitDocument): Point {
  const g = electricalGeometry({ ...o, offset: { x: 0, y: 0 } }, doc);
  const center = midpoint(g.start, g.end);
  if (g.inline || !o.wireId) return center;
  const length = distance(g.start, g.end) || 1;
  return {
    x: center.x - ((g.end.y - g.start.y) / length) * 16,
    y: center.y + ((g.end.x - g.start.x) / length) * 16,
  };
}
export function createElectrical(
  mode: ElectricalAnnotation['mode'],
  start: Point,
  end: Point,
  label: string,
): ElectricalAnnotation {
  return {
    kind: 'electrical',
    id: makeId(),
    mode,
    start,
    end,
    ratio: 0.5,
    offset: { x: 0, y: 0 },
    reversed: false,
    color: COLORS.red,
    width: 2,
    label: { text: label, color: COLORS.blue, fontSize: 22, rotation: 0, offset: { x: 0, y: 0 } },
  };
}
export function createCurrent(
  wire: Wire,
  point: Point,
  doc: CircuitDocument,
  placement: NonNullable<ElectricalAnnotation['currentPlacement']> = 'external',
): ElectricalAnnotation {
  const attachment = currentAttachment(wire, point, doc);
  const used = new Set(doc.objects.filter((o) => o.kind === 'electrical').map((o) => o.label.text));
  let n = 1;
  while (used.has(`i_${n}`)) n++;
  const o = {
    ...createElectrical('current', point, point, `i_${n}`),
    wireId: wire.id,
    currentPlacement: placement,
    ...attachment,
  };
  const g = electricalGeometry(o, doc);
  o.start = g.start;
  o.end = g.end;
  return o;
}

function currentAttachment(
  wire: Wire,
  point: Point,
  doc: CircuitDocument,
  preferredSegment?: number,
) {
  const points = wirePoints(wire, doc);
  let best = Infinity,
    along = 0,
    cumulative = 0,
    segment = 0,
    segmentRatio = 0.5;
  const total = points.slice(1).reduce((sum, p, i) => sum + distance(points[i], p), 0);
  for (let i = 0; i < points.length - 1; i++) {
    const p = projectOnSegment(point, points[i], points[i + 1]);
    if ((preferredSegment === undefined || i === preferredSegment) && distance(point, p) < best) {
      best = distance(point, p);
      along = cumulative + distance(points[i], p);
      segment = i;
      const length = distance(points[i], points[i + 1]);
      segmentRatio = length ? distance(points[i], p) / length : 0.5;
    }
    cumulative += distance(points[i], points[i + 1]);
  }
  return {
    wireSegment: { index: segment, ratio: segmentRatio },
    ratio: total ? along / total : 0.5,
  };
}

/** Apply a rigid move/rotation encoded by an object's stored baseline. */
function transformAnchor(
  anchor: Point,
  fromStart: Point,
  fromEnd: Point,
  toStart: Point,
  toEnd: Point,
) {
  const from = { x: fromEnd.x - fromStart.x, y: fromEnd.y - fromStart.y },
    to = { x: toEnd.x - toStart.x, y: toEnd.y - toStart.y };
  const denominator = distance(fromStart, fromEnd) * distance(toStart, toEnd);
  if (!denominator) return add(anchor, { x: toStart.x - fromStart.x, y: toStart.y - fromStart.y });
  const cos = (from.x * to.x + from.y * to.y) / denominator,
    sin = (from.x * to.y - from.y * to.x) / denominator;
  const oldCenter = midpoint(fromStart, fromEnd),
    newCenter = midpoint(toStart, toEnd);
  const relative = { x: anchor.x - oldCenter.x, y: anchor.y - oldCenter.y };
  return {
    x: newCenter.x + relative.x * cos - relative.y * sin,
    y: newCenter.y + relative.x * sin + relative.y * cos,
  };
}

/** A routed endpoint or waypoint edit can add segments before the chosen one.
 * Keep its surviving physical branch; ordinary segment resizing keeps its ratio. */
export function reconcileCurrentSegments(previous: CircuitDocument, next: CircuitDocument) {
  if (previous === next) return next;
  let previousObjects: Map<string, CircuitDocument['objects'][number]> | undefined;
  let nextObjects: Map<string, CircuitDocument['objects'][number]> | undefined;
  let changed = false;
  const objects = next.objects.map((o) => {
    if (o.kind !== 'electrical' || !o.wireId || !o.wireSegment) return o;
    previousObjects ??= new Map(previous.objects.map((item) => [item.id, item]));
    const prior = previousObjects.get(o.id);
    if (prior?.kind !== 'electrical' || prior.wireId !== o.wireId || !prior.wireSegment) return o;
    // Explicit reassociation, including the existing wire split path, wins.
    if (
      prior.wireSegment.index !== o.wireSegment.index ||
      prior.wireSegment.ratio !== o.wireSegment.ratio
    )
      return o;
    nextObjects ??= new Map(next.objects.map((item) => [item.id, item]));
    const before = previousObjects.get(o.wireId),
      after = nextObjects.get(o.wireId);
    if (before?.kind !== 'wire' || after?.kind !== 'wire') return o;
    const oldRoute = wirePoints(before, previous),
      newRoute = wirePoints(after, next);
    if (oldRoute.length === newRoute.length) return o;
    const index = Math.min(prior.wireSegment.index, Math.max(0, oldRoute.length - 2));
    const a = oldRoute[index],
      b = oldRoute[index + 1];
    if (!a || !b) return o;
    let anchor = {
      x: a.x + (b.x - a.x) * prior.wireSegment.ratio,
      y: a.y + (b.y - a.y) * prior.wireSegment.ratio,
    };
    if (distance(prior.start, o.start) > 0.001 || distance(prior.end, o.end) > 0.001) {
      // A selected current has already received the group's rigid transform.
      // Reproject its transformed branch anchor, rather than its old world position.
      anchor = transformAnchor(anchor, prior.start, prior.end, o.start, o.end);
    } else {
      const oldStart = oldRoute[0],
        oldEnd = oldRoute.at(-1)!,
        newStart = newRoute[0],
        newEnd = newRoute.at(-1)!;
      const movedEndpoints =
        distance(oldStart, newStart) > 0.001 && distance(oldEnd, newEnd) > 0.001;
      const rigidWire =
        movedEndpoints &&
        Math.abs(distance(oldStart, oldEnd) - distance(newStart, newEnd)) < 0.001 &&
        before.vertices.length === after.vertices.length &&
        before.vertices.every(
          (point, i) =>
            distance(
              transformAnchor(point, oldStart, oldEnd, newStart, newEnd),
              after.vertices[i],
            ) < 0.001,
        );
      // An attached current follows a rigidly transformed wire even when the
      // annotation itself is absent from the group selection.
      if (rigidWire) anchor = transformAnchor(anchor, oldStart, oldEnd, newStart, newEnd);
    }
    const surviving = newRoute.findIndex(
      (point, i) =>
        i < newRoute.length - 1 &&
        distance(point, a) < 0.001 &&
        distance(newRoute[i + 1], b) < 0.001,
    );
    const attachment = currentAttachment(
      after,
      anchor,
      next,
      surviving >= 0 ? surviving : undefined,
    );
    if (
      attachment.wireSegment.index === o.wireSegment.index &&
      attachment.wireSegment.ratio === o.wireSegment.ratio
    )
      return o;
    changed = true;
    return { ...o, ...attachment };
  });
  return changed ? { ...next, objects } : next;
}
export function createPolarity(c: CircuitComponent): ElectricalAnnotation | null {
  if (c.terminals.length !== 2) return null;
  const [start, end] = c.terminals.map((t) => localToWorld(c, { x: t.localX, y: t.localY }));
  return { ...createElectrical('polarity', start, end, 'V_R'), componentId: c.id };
}
export function detachElectrical(
  o: ElectricalAnnotation,
  doc: CircuitDocument,
): ElectricalAnnotation {
  const g = electricalGeometry(o, doc);
  return {
    ...o,
    wireId: undefined,
    wireSegment: undefined,
    componentId: undefined,
    start: g.start,
    end: g.end,
    offset: { x: 0, y: 0 },
  };
}
