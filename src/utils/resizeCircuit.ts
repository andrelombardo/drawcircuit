import type { CircuitDocument, CircuitObject, Endpoint, Point } from '../model/types';
import { currentAttachment, electricalDrawingGeometry } from '../annotations/electrical';
import { canvasArrowHead } from '../tikz/arrowheads';
import { canvasTextLayout } from '../tikz/canvasText';
import { angleGeometry } from '../annotations/angle';
import { braceGeometry } from '../annotations/brace';
import { connectionWires, lineCurveGeometry, linePoints, midpoint, moveObject, objectBounds, resolveEndpoint, rotatePoint, wirePoints } from './geometry';
import { unionBounds, visualBounds } from './visualBounds';
import type { Bounds } from './visualBounds';

export type CircuitCorner = 'NW' | 'NE' | 'SW' | 'SE';
const CLEARANCE = 8;
const ROUTE_CLEARANCE = 4;
const owner = (ep: Endpoint) => ep.kind === 'terminal' ? ep.componentId :
  ep.kind === 'junction' ? ep.junctionId : ep.kind === 'shape' ? ep.shapeId : null;

/** Never move only one side of a connection or a hosted annotation. */
export function canResizeCircuit(doc: CircuitDocument, ids: string[]): boolean {
  const selected = new Set(ids);
  const objects = doc.objects.filter((o) => selected.has(o.id));
  if (objects.length < 2 || !objects.some((o) => o.kind === 'component') ||
      !objects.some((o) => o.kind === 'wire') ||
      objects.some((o) => o.kind === 'rectangle' && o.frame)) return false;
  for (const o of doc.objects) {
    if (o.kind === 'rectangle' && o.frame && o.frame.children.some((id) => selected.has(id))) return false;
    if (selected.has(o.id)) {
      if (o.kind === 'electrical' && ((o.wireId && !selected.has(o.wireId)) ||
          (o.componentId && !selected.has(o.componentId)))) return false;
      if (o.kind === 'highlight' && (o.mode === 'component' ? !selected.has(o.componentId) :
          o.mode === 'smart' && o.spans.some((s) => !selected.has('wireId' in s ? s.wireId : s.componentId)))) return false;
    }
    if (o.kind !== 'wire' && o.kind !== 'line') continue;
    const endpoints = o.kind === 'wire' ? [o.startEndpoint, o.endEndpoint] :
      [o.startEndpoint, o.endEndpoint].filter((ep): ep is Endpoint => !!ep);
    for (const ep of endpoints) {
      const id = owner(ep);
      if (id && selected.has(id) !== selected.has(o.id)) return false;
      if (o.kind === 'wire' && ep.kind === 'free' && ep.connectionId &&
          [...connectionWires(ep, doc)].some((id) => selected.has(id) !== selected.has(o.id))) return false;
    }
  }
  return true;
}

function pointsBounds(points: Point[]): Bounds {
  return unionBounds(points.map((p) => ({ ...p, width: 0, height: 0 })));
}
const textMeasurements = new Map<string, { bounds: Bounds; alignWidth: number }>();
function textBounds(center: Point, text: string, fontSize: number, rotation: number, align = 'middle'): Bounds {
  const lines = text.split('\n');
  const width = Math.max(fontSize, ...lines.map((line) => line.length * fontSize * 0.65));
  const height = fontSize * Math.max(1.6, lines.length * 1.4);
  const key = `${fontSize}:${text}`;
  let measured = textMeasurements.get(key);
  if (!measured) {
    const layout = canvasTextLayout(text, fontSize);
    if (layout) {
      measured = { bounds: layout.bounds, alignWidth: layout.alignWidth };
      if (document.fonts?.status === 'loaded') {
        if (textMeasurements.size >= 256) textMeasurements.delete(textMeasurements.keys().next().value!);
        textMeasurements.set(key, measured);
      }
    }
  }
  const b = measured?.bounds ?? { x: -width / 2, y: -height / 2, width, height };
  const alignWidth = measured?.alignWidth ?? width;
  const offset = align === 'start' ? alignWidth / 2 : align === 'end' ? -alignWidth / 2 : 0;
  return pointsBounds([-1, 1].flatMap((x) => [-1, 1].map((y) => {
    const p = rotatePoint({ x: b.x + (x + 1) * b.width / 2 + offset, y: b.y + (y + 1) * b.height / 2 }, rotation);
    return { x: center.x + p.x, y: center.y + p.y };
  })));
}
/** Include heads, strokes, node radii and rotated labels in the space we protect. */
function resizeBounds(o: CircuitObject, doc: CircuitDocument): Bounds {
  let b = visualBounds(o, doc);
  if ((o.kind === 'component' || o.kind === 'junction' || o.kind === 'brace' || o.kind === 'angle') && o.label.text) {
    const center = o.kind === 'angle' ? angleGeometry(o).labelPoint : o.kind === 'brace' ? braceGeometry(o).labelPoint :
      { x: o.x + o.label.offset.x, y: o.y + o.label.offset.y };
    b = unionBounds([b, textBounds(center, o.label.text, o.label.fontSize, o.label.rotation)]);
  }
  if (o.kind === 'junction') b = unionBounds([b, objectBounds(o, doc)]);
  if (o.kind === 'arrow' || o.kind === 'loop-arrow') b = unionBounds([b, pointsBounds(canvasArrowHead(o))]);
  if (o.kind === 'line' && o.controlPoints) {
    const g = lineCurveGeometry(o, doc);
    b = unionBounds([b, pointsBounds([g.start, g.end, ...g.controls])]);
  }
  if (o.kind === 'text') {
    b = textBounds(o, o.text, o.fontSize, o.rotation, o.align);
  }
  if (o.kind === 'electrical') {
    const g = electricalDrawingGeometry(o, doc);
    b = pointsBounds([g.start, g.end, ...g.head]);
    if (o.label.text) b = unionBounds([b, textBounds(g.labelPoint, o.label.text, g.labelFontSize, o.label.rotation)]);
  }
  const stroke = 'strokeWidth' in o ? o.strokeWidth : 'width' in o ? o.width : 0;
  return { x: b.x - stroke / 2, y: b.y - stroke / 2, width: b.width + stroke, height: b.height + stroke };
}

export function circuitSelectionBounds(doc: CircuitDocument, ids: string[]): Bounds {
  const selected = new Set(ids);
  return unionBounds(doc.objects.filter((o) => selected.has(o.id)).map((o) => resizeBounds(o, doc)));
}

type Interval = [number, number];
interface AxisPlan { start: number; length: number; intervals: Interval[]; prefix: number[]; fixed: number }
function axisPlan(start: number, length: number, intervals: Interval[]): AxisPlan {
  const merged: Interval[] = [];
  // Do not clip rigid intervals to the selection box: an attached label may extend
  // outside it and still has to receive the same translation as its owner.
  for (const [a, b] of intervals.filter(([a, b]) => b > a).sort((a, b) => a[0] - b[0])) {
    const last = merged.at(-1);
    if (last && a <= last[1]) last[1] = Math.max(last[1], b);
    else merged.push([a, b]);
  }
  const prefix = [0];
  for (const [a, b] of merged) prefix.push(prefix.at(-1)! + b - a);
  const plan = { start, length, intervals: merged, prefix, fixed: 0 };
  plan.fixed = rigidDistance(plan, start + length) - rigidDistance(plan, start);
  return plan;
}
function rigidDistance(plan: AxisPlan, value: number) {
  let lo = 0, hi = plan.intervals.length;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (plan.intervals[mid][0] < value) lo = mid + 1;
    else hi = mid;
  }
  if (!lo) return 0;
  const [a, b] = plan.intervals[lo - 1];
  return plan.prefix[lo - 1] + Math.min(value - a, b - a);
}
function axisMap(plan: AxisPlan, displacement: number, fromEnd: boolean) {
  const { start, length, fixed } = plan;
  const flexible = Math.max(0, length - fixed);
  const desired = length + (fromEnd ? displacement : -displacement);
  // A fully packed projection must still be expandable. Its objects retain
  // their own size; incident wire bends are reconciled with their actual pins.
  if (flexible <= 1e-6 && desired > length && length > 1e-6) {
    const factor = desired / length, anchor = fromEnd ? start : start + length;
    return { identity: false, affine: true, map: (value: number) => anchor + (value - anchor) * factor };
  }
  const factor = flexible > 1e-6 ? Math.max(0.0001, (desired - fixed) / flexible) : 1;
  const origin = fromEnd ? start : start + length - fixed - flexible * factor;
  const initialRigid = rigidDistance(plan, start);
  return { identity: Math.abs(factor - 1) < 1e-12, affine: false, map: (value: number) => {
    const rigid = rigidDistance(plan, value) - initialRigid;
    return origin + rigid + (value - start - rigid) * factor;
  } };
}

export interface CircuitResizeContext {
  doc: CircuitDocument;
  selected: Set<string>;
  bounds: Bounds;
  x: AxisPlan;
  y: AxisPlan;
  routes: Map<string, Point[]>;
  dependents: Set<string>;
  expansionX: AxisPlan;
  expansionY: AxisPlan;
  obstacles: { id: string; bounds: Bounds; anchor: Point }[];
}
/** Precompute constraints and resolved routes once per gesture, not per pointer event. */
export function createCircuitResizeContext(doc: CircuitDocument, ids: string[]): CircuitResizeContext | null {
  if (!canResizeCircuit(doc, ids)) return null;
  const selected = new Set(ids), bounds = circuitSelectionBounds(doc, ids);
  const xs: Interval[] = [], ys: Interval[] = [], expansionXs: Interval[] = [], expansionYs: Interval[] = [];
  const routes = new Map<string, Point[]>(), dependents = new Set<string>();
  const obstacles: CircuitResizeContext['obstacles'] = [];
  const index = new Map(doc.objects.map((o) => [o.id, o]));
  const protect = (b: Bounds, padding: number) => {
    xs.push([b.x - padding, b.x + b.width + padding]);
    ys.push([b.y - padding, b.y + b.height + padding]);
    expansionXs.push([b.x, b.x + b.width]);
    expansionYs.push([b.y, b.y + b.height]);
  };
  for (const o of doc.objects) {
    const attached = o.kind === 'electrical' && ((o.wireId && selected.has(o.wireId)) ||
      (o.componentId && selected.has(o.componentId)));
    if (attached) dependents.add(o.id);
    if (!selected.has(o.id) && !attached) continue;
    if (o.kind === 'highlight' && o.mode !== 'free') continue;
    if (o.kind !== 'wire' && (o.kind !== 'line' || o.controlPoints || o.arrowhead)) {
      const host = o.kind === 'electrical' && o.componentId ? index.get(o.componentId) : undefined;
      obstacles.push({ id: o.id, bounds: resizeBounds(o, doc), anchor: resizeAnchor(host ?? o, doc) });
    }
    if (o.kind === 'wire' || o.kind === 'line') {
      const route = o.kind === 'wire' ? wirePoints(o, doc) : linePoints(o, doc);
      routes.set(o.id, route);
      if (o.kind === 'line' && (o.controlPoints || o.arrowhead)) {
        protect(resizeBounds(o, doc), CLEARANCE);
      } else {
        for (const p of route) protect({ ...p, width: 0, height: 0 }, ROUTE_CLEARANCE);
        for (let i = 1; i < route.length; i++) {
          const a = route[i - 1], b = route[i];
          // A diagonal cannot undergo independent horizontal and vertical gap
          // compression without changing its slope (or crossing a symbol).
          if (Math.abs(a.x - b.x) > 1e-7 && Math.abs(a.y - b.y) > 1e-7)
            protect(pointsBounds([a, b]), ROUTE_CLEARANCE);
        }
      }
    } else {
      // Labels remain rigid with their owner, but their projection across an
      // entire axis must not lock unrelated rows/branches. Check their actual
      // two-dimensional clearance separately below.
      const geometry = o.kind === 'component' ? visualBounds(o, doc) : o.kind === 'junction' ? objectBounds(o, doc) :
        o.kind === 'electrical' ? (() => {
          const g = electricalDrawingGeometry(o, doc);
          return pointsBounds([g.start, g.end, ...g.head]);
        })() : resizeBounds(o, doc);
      protect(geometry, CLEARANCE);
    }
  }
  // Outer label/stroke margins are not spaces between circuit elements. Allocating
  // expansion to those margins would translate the whole diagram without growing it.
  const expansionPlan = (start: number, length: number, intervals: Interval[]) => {
    const first = Math.min(...intervals.map(([a]) => a)), last = Math.max(...intervals.map(([, b]) => b));
    return axisPlan(start, length, [...intervals, [start, first], [last, start + length]]);
  };
  return { doc, selected, bounds, x: axisPlan(bounds.x, bounds.width, xs),
    y: axisPlan(bounds.y, bounds.height, ys), routes, dependents, obstacles,
    expansionX: expansionPlan(bounds.x, bounds.width, expansionXs), expansionY: expansionPlan(bounds.y, bounds.height, expansionYs) };
}

export function resizeCircuit(context: CircuitResizeContext, corner: CircuitCorner, delta: Point): CircuitDocument {
  const { doc, selected, routes, dependents } = context;
  if (!Number.isFinite(delta.x) || !Number.isFinite(delta.y)) return doc;
  const fromEndX = corner.endsWith('E'), fromEndY = corner.startsWith('S');
  const expandingX = delta.x * (fromEndX ? 1 : -1) > 0;
  const expandingY = delta.y * (fromEndY ? 1 : -1) > 0;
  const maps = (ratioX: number, ratioY: number) => ({
    x: axisMap(expandingX ? context.expansionX : context.x, delta.x * ratioX, fromEndX),
    y: axisMap(expandingY ? context.expansionY : context.y, delta.y * ratioY, fromEndY),
  });
  let { x, y } = maps(1, 1);
  if ((!expandingX || !expandingY) && introducesOverlap(context.obstacles, x.map, y.map)) {
    const safeRatio = (candidateAt: (ratio: number) => ReturnType<typeof maps>) => {
      let lo = 0, hi = 1;
      const full = candidateAt(1);
      if (!introducesOverlap(context.obstacles, full.x.map, full.y.map)) return 1;
      for (let i = 0; i < 18; i++) {
        const mid = (lo + hi) / 2, candidate = candidateAt(mid);
        if (introducesOverlap(context.obstacles, candidate.x.map, candidate.y.map)) hi = mid;
        else lo = mid;
      }
      return lo;
    };
    // A blocked horizontal contraction must not block vertical resizing too.
    const ratioX = expandingX ? 1 : safeRatio((ratio) => maps(ratio, expandingY ? 1 : 0));
    const ratioY = expandingY ? 1 : safeRatio((ratio) => maps(ratioX, ratio));
    ({ x, y } = maps(ratioX, ratioY));
  }
  if (x.identity && y.identity) return doc;
  const map = (p: Point): Point => ({ x: x.map(p.x), y: y.map(p.y) });
  const endpoint = (ep: Endpoint): Endpoint => ep.kind === 'free' ? { ...ep, point: map(ep.point) } : ep;
  let resized: CircuitDocument = { ...doc, objects: doc.objects.map((o) => {
    if (!selected.has(o.id)) return o;
    if (o.kind === 'wire') return { ...o, startEndpoint: endpoint(o.startEndpoint), endEndpoint: endpoint(o.endEndpoint),
      vertices: routes.get(o.id)!.slice(1, -1).map(map) };
    if (o.kind === 'line' && !o.controlPoints && !o.arrowhead) return { ...o,
      start: map(routes.get(o.id)![0]), end: map(routes.get(o.id)!.at(-1)!),
      ...(o.startEndpoint ? { startEndpoint: endpoint(o.startEndpoint) } : {}),
      ...(o.endEndpoint ? { endEndpoint: endpoint(o.endEndpoint) } : {}),
      vertices: routes.get(o.id)!.slice(1, -1).map(map) };
    if (o.kind === 'electrical' && (o.wireId || o.componentId)) return o;
    if (o.kind === 'highlight' && o.mode !== 'free') return o;
    // Every visible annotation, including short current arrows, is rigid. Only
    // wires and unadorned line routes change length; heads/curves/text never scale.
    const anchor = resizeAnchor(o, doc), moved = map(anchor);
    return moveObject(o, { x: moved.x - anchor.x, y: moved.y - anchor.y }, selected);
  }) };
  if (x.affine || y.affine) resized = reconcileExpandedRoutes(context, resized, map);
  const index = new Map(resized.objects.map((o) => [o.id, o]));
  resized = { ...resized, objects: resized.objects.map((o) => {
    if (!dependents.has(o.id) || o.kind !== 'electrical' || !o.wireId || o.mode !== 'current') return o;
    const wire = index.get(o.wireId);
    if (wire?.kind !== 'wire') return o;
    const g = electricalDrawingGeometry(o, doc), center = map(midpoint(g.start, g.end));
    // Ratios alone do not survive nonuniform gap compression. Reattach the
    // original visible center on the transformed route and bake its slide offset
    // into that attachment, so it cannot drift into a node or shrink at an end.
    const attachment = currentAttachment(wire, center, resized);
    const half = { x: (g.end.x - g.start.x) / 2, y: (g.end.y - g.start.y) / 2 };
    return { ...o, ...attachment, offset: { x: 0, y: 0 },
      start: { x: center.x - half.x, y: center.y - half.y },
      end: { x: center.x + half.x, y: center.y + half.y } };
  }) };
  // Fixed-size labels can extend past an affinely expanded anchor. Keep the
  // opposite visible corner stationary, including in fully packed circuits.
  const nextBounds = circuitSelectionBounds(resized, [...selected]);
  const before = context.bounds;
  const correction = {
    x: (fromEndX ? before.x : before.x + before.width) - (fromEndX ? nextBounds.x : nextBounds.x + nextBounds.width),
    y: (fromEndY ? before.y : before.y + before.height) - (fromEndY ? nextBounds.y : nextBounds.y + nextBounds.height),
  };
  if (Math.abs(correction.x) + Math.abs(correction.y) > 1e-7)
    resized = { ...resized, objects: resized.objects.map((o) => selected.has(o.id) ? moveObject(o, correction, selected) : o) };
  return resized;
}

/** Transform the semantic anchor, never an off-centre label's bounding-box centre. */
function resizeAnchor(o: CircuitObject, doc: CircuitDocument): Point {
  if (o.kind === 'component' || o.kind === 'junction' || o.kind === 'text' || o.kind === 'angle') return o;
  if (o.kind === 'arrow' || o.kind === 'brace' || o.kind === 'line') return midpoint(o.start, o.end);
  if (o.kind === 'electrical') {
    const g = electricalDrawingGeometry(o, doc);
    return midpoint(g.start, g.end);
  }
  const b = visualBounds(o, doc);
  return { x: b.x + b.width / 2, y: b.y + b.height / 2 };
}

function overlaps(a: Bounds, b: Bounds) {
  const margin = 2;
  return a.x < b.x + b.width + margin - 1e-6 && b.x < a.x + a.width + margin - 1e-6 &&
    a.y < b.y + b.height + margin - 1e-6 && b.y < a.y + a.height + margin - 1e-6;
}
/** A sweep checks only nearby boxes; existing overlaps never freeze the gesture. */
function introducesOverlap(obstacles: CircuitResizeContext['obstacles'], x: (v: number) => number, y: (v: number) => number) {
  const boxes = obstacles.map((o) => ({ source: o.bounds, bounds: { ...o.bounds,
    x: o.bounds.x + x(o.anchor.x) - o.anchor.x, y: o.bounds.y + y(o.anchor.y) - o.anchor.y } }))
    .sort((a, b) => a.bounds.x - b.bounds.x);
  for (let i = 0; i < boxes.length; i++) {
    const a = boxes[i];
    for (let j = i + 1; j < boxes.length && boxes[j].bounds.x < a.bounds.x + a.bounds.width + 2; j++) {
      const b = boxes[j];
      if (overlaps(a.bounds, b.bounds) && !overlaps(a.source, b.source)) return true;
    }
  }
  return false;
}

/** When overlapping projections leave no elastic interval, expanding symbol
 * centres still works. Preserve real pin references and align the incident bends. */
function reconcileExpandedRoutes(context: CircuitResizeContext, next: CircuitDocument, map: (p: Point) => Point): CircuitDocument {
  return { ...next, objects: next.objects.map((o) => {
    if (!context.selected.has(o.id) || (o.kind !== 'wire' && o.kind !== 'line') || (o.kind === 'line' && o.controlPoints)) return o;
    const original = context.routes.get(o.id)!;
    const route = original.map(map);
    const start = o.kind === 'wire' || o.startEndpoint ? resolveEndpoint(o.startEndpoint!, next) : o.start;
    const end = o.kind === 'wire' || o.endEndpoint ? resolveEndpoint(o.endEndpoint!, next) : o.end;
    const vertices = route.slice(1, -1);
    if (vertices.length) {
      if (Math.abs(original[0].x - original[1].x) < 1e-7) vertices[0].x = start.x;
      if (Math.abs(original[0].y - original[1].y) < 1e-7) vertices[0].y = start.y;
      if (Math.abs(original.at(-1)!.x - original.at(-2)!.x) < 1e-7) vertices.at(-1)!.x = end.x;
      if (Math.abs(original.at(-1)!.y - original.at(-2)!.y) < 1e-7) vertices.at(-1)!.y = end.y;
    }
    return o.kind === 'wire' ? { ...o, vertices } : { ...o, start, end, vertices };
  }) };
}
