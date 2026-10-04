import type { CircuitDocument, CircuitObject, Point } from '../model/types';
import { localToWorld, snap } from './geometry';
import { visualBounds, unionBounds } from './visualBounds';
import type { Bounds } from './visualBounds';

export interface GuideItem {
  id: string;
  family: 'node' | 'annotation';
  spacingFamily: 'component' | 'junction' | 'annotation';
  bounds: Bounds;
  anchor: Point;
  pins: Point[];
  baseline?: number;
}
export interface DistanceGuide {
  axis: 'x' | 'y';
  from: number;
  to: number;
  at: number;
  value: number;
  equal: boolean;
  neighborId: string;
}
export interface MoveGuides {
  delta: Point;
  alignment: { x?: number; y?: number };
  distances: DistanceGuide[];
  target: Point | null;
}
const CELL = 160,
  RANGE = 800;
function pins(o: CircuitObject): Point[] {
  return o.kind === 'component'
    ? o.terminals.map((t) => localToWorld(o, { x: t.localX, y: t.localY }))
    : o.kind === 'junction'
      ? [{ x: o.x, y: o.y }]
      : [];
}
function item(o: CircuitObject, doc: CircuitDocument): GuideItem {
  const bounds = visualBounds(o, doc);
  return {
    id: o.id,
    family: o.kind === 'component' || o.kind === 'junction' ? 'node' : 'annotation',
    spacingFamily:
      o.kind === 'component' ? 'component' : o.kind === 'junction' ? 'junction' : 'annotation',
    bounds,
    anchor:
      o.kind === 'component' || o.kind === 'junction'
        ? { x: o.x, y: o.y }
        : { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 },
    pins: pins(o),
    ...(o.kind === 'text' ? { baseline: o.y } : {}),
  };
}
/** Built once against the gesture's immutable source. Very large objects use a
 * bounded fallback list instead of allocating unlimited spatial buckets. */
export class GuideIndex {
  private cells = new Map<string, GuideItem[]>();
  private large: GuideItem[] = [];
  constructor(doc: CircuitDocument, excluded: Set<string>) {
    for (const o of doc.objects) {
      if (excluded.has(o.id) || o.kind === 'wire') continue;
      const entry = item(o, doc),
        b = entry.bounds;
      if ((b.width / CELL + 2) * (b.height / CELL + 2) > 256) {
        this.large.push(entry);
        continue;
      }
      for (let x = Math.floor(b.x / CELL); x <= Math.floor((b.x + b.width) / CELL); x++)
        for (let y = Math.floor(b.y / CELL); y <= Math.floor((b.y + b.height) / CELL); y++) {
          const key = `${x}:${y}`,
            list = this.cells.get(key);
          if (list) list.push(entry);
          else this.cells.set(key, [entry]);
        }
    }
  }
  nearby(b: Bounds): GuideItem[] {
    const found = new Set<GuideItem>();
    // Query around edges too, without walking all cells inside a large group.
    const query = (x0: number, y0: number, x1: number, y1: number) => {
      for (let x = Math.floor(x0 / CELL); x <= Math.floor(x1 / CELL); x++)
        for (let y = Math.floor(y0 / CELL); y <= Math.floor(y1 / CELL); y++)
          for (const e of this.cells.get(`${x}:${y}`) ?? []) found.add(e);
    };
    const cx = b.x + b.width / 2,
      cy = b.y + b.height / 2;
    query(b.x - RANGE, cy - CELL, b.x + CELL, cy + CELL);
    query(b.x + b.width - CELL, cy - CELL, b.x + b.width + RANGE, cy + CELL);
    query(cx - CELL, b.y - RANGE, cx + CELL, b.y + CELL);
    query(cx - CELL, b.y + b.height - CELL, cx + CELL, b.y + b.height + RANGE);
    for (const e of this.large) {
      const a = e.bounds;
      if (
        a.x <= b.x + b.width + RANGE &&
        a.x + a.width >= b.x - RANGE &&
        a.y <= b.y + b.height + RANGE &&
        a.y + a.height >= b.y - RANGE
      )
        found.add(e);
    }
    return [...found].sort((a, b) => a.id.localeCompare(b.id));
  }
}
export interface MoveContext {
  index: GuideIndex;
  moving: GuideItem;
}
export function createMoveContext(doc: CircuitDocument, ids: string[]): MoveContext {
  const selected = new Set(ids),
    objects = doc.objects.filter((o) => selected.has(o.id));
  const entries = objects.map((o) => item(o, doc)),
    bounds = unionBounds(entries.map((e) => e.bounds));
  return {
    index: new GuideIndex(doc, selected),
    moving:
      entries.length === 1
        ? entries[0]
        : {
            id: 'selection',
            family: entries.some((e) => e.family === 'node') ? 'node' : 'annotation',
            spacingFamily: entries.some((e) => e.spacingFamily === 'component')
              ? 'component'
              : entries.some((e) => e.spacingFamily === 'junction')
                ? 'junction'
                : 'annotation',
            bounds,
            anchor: { x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 },
            pins: [],
          },
  };
}
const center = (b: Bounds, axis: 'x' | 'y') =>
  axis === 'x' ? b.x + b.width / 2 : b.y + b.height / 2;
const size = (b: Bounds, axis: 'x' | 'y') => (axis === 'x' ? b.width : b.height);
const end = (b: Bounds, axis: 'x' | 'y') => b[axis] + size(b, axis);
const translate = (b: Bounds, d: Point): Bounds => ({ ...b, x: b.x + d.x, y: b.y + d.y });
/** Strictly local, aligned neighbors on either side; ignores overlaps. */
export function nearestNeighbors(
  b: Bounds,
  candidates: GuideItem[],
  axis: 'x' | 'y',
  tolerance: number,
  alignedAt?: number,
) {
  const cross = axis === 'x' ? 'y' : 'x';
  let before: GuideItem | undefined, after: GuideItem | undefined;
  for (const c of candidates) {
    if (Math.abs(c.anchor[cross] - (alignedAt ?? center(b, cross))) > tolerance) continue;
    if (
      end(c.bounds, axis) <= b[axis] + 0.001 &&
      b[axis] - end(c.bounds, axis) <= RANGE &&
      (!before || end(c.bounds, axis) > end(before.bounds, axis))
    )
      before = c;
    if (
      c.bounds[axis] >= end(b, axis) - 0.001 &&
      c.bounds[axis] - end(b, axis) <= RANGE &&
      (!after || c.bounds[axis] < after.bounds[axis])
    )
      after = c;
  }
  return { before, after };
}
export function freeGap(a: Bounds, b: Bounds, axis: 'x' | 'y') {
  return b[axis] - end(a, axis);
}
function anchors(e: GuideItem, axis: 'x' | 'y'): number[] {
  return [
    e.anchor[axis],
    e.bounds[axis],
    end(e.bounds, axis),
    ...e.pins.map((p) => p[axis]),
    ...(axis === 'y' && e.baseline !== undefined ? [e.baseline] : []),
  ];
}
export function computeMoveGuides(
  context: MoveContext,
  raw: Point,
  zoom: number,
  disabled = false,
): MoveGuides {
  const delta = { x: snap(raw.x), y: snap(raw.y) },
    alignment: MoveGuides['alignment'] = {};
  if (disabled) return { delta, alignment, distances: [], target: null };
  const moving = context.moving,
    original = moving.bounds,
    threshold = 7 / zoom;
  const rawBounds = translate(original, raw),
    candidates = context.index.nearby(rawBounds).filter((e) => e.family === moving.family),
    // Components and Junctions share geometric neighbors; annotations remain separate.
    spacingCandidates = candidates;
  // Terminal/Junction proximity wins; this changes geometry only, never endpoint references.
  let target: Point | null = null,
    best = threshold;
  for (const pin of moving.pins)
    for (const c of candidates)
      for (const p of c.pins) {
        const d = Math.hypot(pin.x + raw.x - p.x, pin.y + raw.y - p.y);
        if (d < best) {
          best = d;
          delta.x = p.x - pin.x;
          delta.y = p.y - pin.y;
          target = p;
        }
      }
  if (!target) {
    for (const axis of ['x', 'y'] as const) {
      let best = threshold;
      const own = anchors(moving, axis);
      for (const c of candidates) {
        // Match corresponding features, avoiding arbitrary edge-to-center snaps.
        const theirs = anchors(c, axis);
        for (let i = 0; i < 3; i++) {
          const d = Math.abs(own[i] + raw[axis] - theirs[i]);
          if (d < best) {
            best = d;
            delta[axis] = theirs[i] - own[i];
            alignment[axis] = theirs[i];
          }
        }
        for (const a of moving.pins)
          for (const b of c.pins) {
            const d = Math.abs(a[axis] + raw[axis] - b[axis]);
            if (d < best) {
              best = d;
              delta[axis] = b[axis] - a[axis];
              alignment[axis] = b[axis];
            }
          }
        if (axis === 'y' && moving.baseline !== undefined && c.baseline !== undefined) {
          const d = Math.abs(moving.baseline + raw.y - c.baseline);
          if (d < best) {
            best = d;
            delta.y = c.baseline - moving.baseline;
            alignment.y = c.baseline;
          }
        }
      }
    }
    // Equal spacing takes precedence on its axis, but keeps cross-axis alignment.
    for (const axis of ['x', 'y'] as const) {
      const b = translate(original, { ...delta, [axis]: raw[axis] });
      const { before, after } = nearestNeighbors(
        b,
        spacingCandidates,
        axis,
        threshold,
        moving.anchor[axis === 'x' ? 'y' : 'x'] + delta[axis === 'x' ? 'y' : 'x'],
      );
      let desired: number | undefined;
      if (before && after)
        desired = (end(before.bounds, axis) + after.bounds[axis] - size(b, axis)) / 2;
      else if (before || after) {
        const neighbor = (before ?? after)!;
        const adjacent = nearestNeighbors(
          neighbor.bounds,
          spacingCandidates.filter((c) => c.id !== neighbor.id),
          axis,
          threshold,
          neighbor.anchor[axis === 'x' ? 'y' : 'x'],
        );
        const reference = before ? adjacent.before : adjacent.after;
        if (reference) {
          const gap = before
            ? freeGap(reference.bounds, neighbor.bounds, axis)
            : freeGap(neighbor.bounds, reference.bounds, axis);
          if (gap >= 0)
            desired = before
              ? end(neighbor.bounds, axis) + gap
              : neighbor.bounds[axis] - gap - size(b, axis);
        }
      }
      if (desired !== undefined && Math.abs(desired - b[axis]) <= threshold) {
        delta[axis] = desired - original[axis];
        delete alignment[axis];
      }
    }
  }
  const b = translate(original, delta),
    distances: DistanceGuide[] = [];
  for (const axis of ['x', 'y'] as const) {
    const { before, after } = nearestNeighbors(
      b,
      spacingCandidates,
      axis,
      threshold,
      moving.anchor[axis === 'x' ? 'y' : 'x'] + delta[axis === 'x' ? 'y' : 'x'],
    );
    const gaps = [
      before ? freeGap(before.bounds, b, axis) : undefined,
      after ? freeGap(b, after.bounds, axis) : undefined,
    ];
    const equal =
      gaps[0] !== undefined && gaps[1] !== undefined && Math.abs(gaps[0] - gaps[1]) < 0.01;
    const at = moving.anchor[axis === 'x' ? 'y' : 'x'] + delta[axis === 'x' ? 'y' : 'x'];
    if (before)
      distances.push({
        axis,
        from: end(before.bounds, axis),
        to: b[axis],
        at,
        value: gaps[0]!,
        equal,
        neighborId: before.id,
      });
    if (after)
      distances.push({
        axis,
        from: end(b, axis),
        to: after.bounds[axis],
        at,
        value: gaps[1]!,
        equal,
        neighborId: after.id,
      });
    // Matching a neighboring gap displays that reference too (local distribution).
    if (!equal && (before || after)) {
      const neighbor = (before ?? after)!;
      const adjacent = nearestNeighbors(
        neighbor.bounds,
        spacingCandidates.filter((c) => c.id !== neighbor.id),
        axis,
        threshold,
        neighbor.anchor[axis === 'x' ? 'y' : 'x'],
      );
      const reference = before ? adjacent.before : adjacent.after;
      if (reference) {
        const a = before ? reference : neighbor,
          c = before ? neighbor : reference,
          gap = freeGap(a.bounds, c.bounds, axis);
        const current = before ? gaps[0] : gaps[1];
        if (gap >= 0 && current !== undefined && Math.abs(gap - current) < 0.01) {
          distances
            .filter((d) => d.axis === axis)
            .forEach((d) => {
              d.equal = true;
            });
          distances.push({
            axis,
            from: end(a.bounds, axis),
            to: c.bounds[axis],
            at,
            value: gap,
            equal: true,
            neighborId: reference.id,
          });
        }
      }
    }
  }
  // One useful axis, at most two measurements; terminal feedback has priority.
  const preferred =
    distances.find((d) => d.equal)?.axis ??
    (distances.filter((d) => d.axis === 'x').length >=
    distances.filter((d) => d.axis === 'y').length
      ? 'x'
      : 'y');
  return {
    delta,
    alignment,
    target,
    distances: target ? [] : distances.filter((d) => d.axis === preferred).slice(0, 2),
  };
}
