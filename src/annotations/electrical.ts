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

export function electricalGeometry(o: ElectricalAnnotation, doc: CircuitDocument) {
  let start = o.start,
    end = o.end;
  if (o.wireId) {
    const wire = doc.objects.find((o2) => o2.id === o.wireId);
    if (wire?.kind === 'wire') {
      const points = wirePoints(wire, doc);
      const lengths = points.slice(1).map((p, i) => distance(points[i], p));
      const total = lengths.reduce((a, b) => a + b, 0);
      let remaining = o.ratio * total,
        segment = 0;
      while (segment < lengths.length - 1 && remaining > lengths[segment])
        remaining -= lengths[segment++];
      const a = points[segment] ?? start,
        b = points[segment + 1] ?? end;
      const length = lengths[segment] || 1;
      const tangent = { x: (b.x - a.x) / length, y: (b.y - a.y) / length };
      const half = Math.min(30, length / 2);
      const along = Math.max(half, Math.min(length - half, remaining));
      const center = {
        x: a.x + tangent.x * along + tangent.y * 16,
        y: a.y + tangent.y * along - tangent.x * 16,
      };
      start = { x: center.x - tangent.x * half, y: center.y - tangent.y * half };
      end = { x: center.x + tangent.x * half, y: center.y + tangent.y * half };
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
  start = add(start, o.offset);
  end = add(end, o.offset);
  const length = distance(start, end) || 1;
  const normal = { x: (end.y - start.y) / length, y: -(end.x - start.x) / length };
  const middle = midpoint(start, end);
  const labelDistance = o.mode === 'polarity' ? -48 : 24;
  const labelPoint = add(
    { x: middle.x + normal.x * labelDistance, y: middle.y + normal.y * labelDistance },
    o.label.offset,
  );
  return {
    start,
    end,
    labelPoint,
    arrowStart: o.reversed ? end : start,
    arrowEnd: o.reversed ? start : end,
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
export function createCurrent(wire: Wire, point: Point, doc: CircuitDocument) {
  const points = wirePoints(wire, doc);
  let best = Infinity,
    along = 0,
    cumulative = 0;
  const total = points.slice(1).reduce((sum, p, i) => sum + distance(points[i], p), 0);
  for (let i = 0; i < points.length - 1; i++) {
    const p = projectOnSegment(point, points[i], points[i + 1]);
    if (distance(point, p) < best) {
      best = distance(point, p);
      along = cumulative + distance(points[i], p);
    }
    cumulative += distance(points[i], points[i + 1]);
  }
  const used = new Set(doc.objects.filter((o) => o.kind === 'electrical').map((o) => o.label.text));
  let n = 1;
  while (used.has(`i_${n}`)) n++;
  const o = {
    ...createElectrical('current', point, point, `i_${n}`),
    wireId: wire.id,
    ratio: total ? along / total : 0.5,
  };
  const g = electricalGeometry(o, doc);
  o.start = g.start;
  o.end = g.end;
  return o;
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
    componentId: undefined,
    start: g.start,
    end: g.end,
    offset: { x: 0, y: 0 },
  };
}
