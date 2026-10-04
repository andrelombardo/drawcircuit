import { braceGeometry, createBrace, resizeBrace } from '../../annotations/brace';
import { useKeyboardNudge } from './useKeyboardNudge';
import {
  createCurrent,
  createElectrical,
  createPolarity,
  electricalGeometry,
} from '../../annotations/electrical';
import type { BraceAnnotation, ElectricalAnnotation } from '../../model/types';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { DragEvent, PointerEvent as ReactPointerEvent, RefObject } from 'react';
import { useEditorStore } from '../../store/editorStore';
import { catalog, createComponent, makeId } from '../../model/catalog';
import { createTextAnnotation, createWire } from '../../model/factories';
import { COLORS, componentTypes } from '../../model/types';
import type {
  ArrowAnnotation,
  CircuitDocument,
  Endpoint,
  LoopArrow,
  Point,
  Viewport,
} from '../../model/types';
import {
  add,
  distance,
  documentBounds,
  nearestWire,
  objectBounds,
  snap,
  snapPoint,
  rotatePoint,
} from '../../utils/geometry';
import { deserializeDocument, serializeDocument } from '../../model/serialization';
import { cloneObjects, extractSelection, moveSelection } from '../../utils/operations';
import { insertJunction, normalizeDocumentWires, wireCandidate } from '../../utils/wires';
import { loopPositionAt } from '../../utils/loops';
import { createMoveContext, computeMoveGuides } from '../../utils/smartGuides';
import type { MoveContext, DistanceGuide } from '../../utils/smartGuides';
import { useSmartPlacement } from '../../smartPlacement/useSmartPlacement';
type Drag =
  | { type: 'pan'; screen: Point; view: Viewport }
  | {
      type: 'move' | 'label' | 'handle';
      origin: Point;
      doc: CircuitDocument;
      ids: string[];
      handle?: string;
      moveContext?: MoveContext;
    }
  | { type: 'marquee'; origin: Point; additive: boolean }
  | { type: 'arrow' | 'loop-arrow' | 'voltage' | 'brace' | 'bracket'; origin: Point };
export interface WireDraft {
  start: Endpoint;
  vertices: Point[];
}
export interface Overlay {
  mouse: Point | null;
  target: Point | null;
  box: { x: number; y: number; width: number; height: number } | null;
  guides: { x?: number; y?: number };
  arrow: ArrowAnnotation | LoopArrow | ElectricalAnnotation | BraceAnnotation | null;
  distances: DistanceGuide[];
  componentTarget: string | null;
  wireTarget: string | null;
}
const blank: Overlay = {
  mouse: null,
  target: null,
  box: null,
  guides: {},
  arrow: null,
  distances: [],
  componentTarget: null,
  wireTarget: null,
};
export function useCanvasInteractions(svgRef: RefObject<SVGSVGElement | null>) {
  useKeyboardNudge();
  const [viewport, setViewport] = useState<Viewport>({ x: 600, y: 340, zoom: 1 });
  const [surfaceSize, setSurfaceSize] = useState({ width: 1200, height: 700 });
  const previousSurface = useRef<{ width: number; height: number } | null>(null);
  const smart = useSmartPlacement(viewport);
  const {
    modifierKey,
    blur: smartBlur,
    rotatePlacement,
    reset: resetSmart,
    leave: leaveSmart,
  } = smart;
  const [paletteDragType, setPaletteDragType] = useState<(typeof componentTypes)[number] | null>(
    null,
  );
  const [overlay, setOverlay] = useState<Overlay>(blank);
  const doc = useEditorStore((s) => s.document);
  const objectMap = useMemo(() => new Map(doc.objects.map((o) => [o.id, o])), [doc]);
  const [voltageStart, setVoltageStart] = useState<Point | null>(null);
  const voltageStartRef = useRef<Point | null>(null);
  const setFirstPoint = (point: Point | null) => {
    voltageStartRef.current = point;
    setVoltageStart(point);
  };
  const polarityTarget = (target: EventTarget) => {
    const id = (target as Element).closest('[data-object]')?.getAttribute('data-object');
    const c = id ? objectMap.get(id) : null;
    return c?.kind === 'component' && c.terminals.length === 2 ? c : null;
  };
  const [draft, setDraft] = useState<WireDraft | null>(null);
  const [space, setSpace] = useState(false);
  const [dragging, setDragging] = useState<'move' | 'pan' | 'handle' | null>(null);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [editing, setEditing] = useState<{ id: string; text: string; point: Point } | null>(null);
  useEffect(() => {
    const start = (e: Event) => {
      const type = (e as CustomEvent).detail;
      if (componentTypes.includes(type)) {
        resetSmart();
        setPaletteDragType(type);
      }
    };
    const end = () => {
      leaveSmart();
      setPaletteDragType(null);
    };
    window.addEventListener('drawcircuit:component-drag-start', start);
    window.addEventListener('drawcircuit:component-drag-end', end);
    return () => {
      window.removeEventListener('drawcircuit:component-drag-start', start);
      window.removeEventListener('drawcircuit:component-drag-end', end);
    };
  }, [resetSmart, leaveSmart]);
  const drag = useRef<Drag | null>(null),
    spaceDown = useRef(false),
    draftRef = useRef<WireDraft | null>(null),
    mouseRef = useRef<Point>({ x: 0, y: 0 }),
    clipboard = useRef<CircuitDocument | null>(null);
  const setWireDraft = (d: WireDraft | null) => {
    draftRef.current = d;
    setDraft(d);
  };
  const world = useCallback(
    (x: number, y: number): Point => {
      const b = svgRef.current!.getBoundingClientRect();
      return {
        x: (x - b.left - viewport.x) / viewport.zoom,
        y: (y - b.top - viewport.y) / viewport.zoom,
      };
    },
    [svgRef, viewport],
  );
  const fit = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const b = svg.getBoundingClientRect(),
      bounds = documentBounds(useEditorStore.getState().document);
    setSurfaceSize((previous) =>
      previous.width === b.width && previous.height === b.height
        ? previous
        : { width: b.width, height: b.height },
    );
    previousSurface.current = { width: b.width, height: b.height };
    const z = Math.max(
      0.2,
      Math.min(1.45, Math.min((b.width - 130) / bounds.width, (b.height - 180) / bounds.height)),
    );
    setViewport({
      zoom: z,
      x: b.width / 2 - (bounds.x + bounds.width / 2) * z,
      y: b.height / 2 - (bounds.y + bounds.height / 2) * z + 15,
    });
  }, [svgRef]);
  const zoomAt = useCallback(
    (factor: number, point?: Point) => {
      const b = svgRef.current?.getBoundingClientRect();
      if (!b) return;
      const p = point ?? { x: b.width / 2, y: b.height / 2 };
      setViewport((v) => {
        const z = Math.max(0.15, Math.min(4, v.zoom * factor));
        return {
          zoom: z,
          x: p.x - ((p.x - v.x) * z) / v.zoom,
          y: p.y - ((p.y - v.y) * z) / v.zoom,
        };
      });
    },
    [svgRef],
  );
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const wheel = (e: WheelEvent) => {
      e.preventDefault();
      const b = svg.getBoundingClientRect();
      zoomAt(Math.exp(-e.deltaY * (e.ctrlKey ? 0.008 : 0.002)), {
        x: e.clientX - b.left,
        y: e.clientY - b.top,
      });
    };
    svg.addEventListener('wheel', wheel, { passive: false });
    return () => svg.removeEventListener('wheel', wheel);
  }, [svgRef, zoomAt]);
  useEffect(() => {
    fit();
    const fitHandler = () => fit(),
      zoomIn = () => zoomAt(1.2),
      zoomOut = () => zoomAt(1 / 1.2);
    let frame = 0;
    const resize = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const b = svgRef.current?.getBoundingClientRect();
        if (!b || !b.width || !b.height) return;
        const previous = previousSurface.current;
        previousSurface.current = { width: b.width, height: b.height };
        setSurfaceSize({ width: b.width, height: b.height });
        if (previous && (previous.width !== b.width || previous.height !== b.height)) {
          // Keep the world point at the canvas centre and the user's zoom level.
          setViewport((v) => ({
            ...v,
            x: v.x + (b.width - previous.width) / 2,
            y: v.y + (b.height - previous.height) / 2,
          }));
        }
      });
    });
    if (svgRef.current) resize.observe(svgRef.current);
    window.addEventListener('drawcircuit:fit', fitHandler);
    window.addEventListener('drawcircuit:zoom-in', zoomIn);
    window.addEventListener('drawcircuit:zoom-out', zoomOut);
    return () => {
      resize.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('drawcircuit:fit', fitHandler);
      window.removeEventListener('drawcircuit:zoom-in', zoomIn);
      window.removeEventListener('drawcircuit:zoom-out', zoomOut);
    };
  }, [fit, zoomAt, svgRef]);
  const finishWire = useCallback((ep: Endpoint) => {
    const d = draftRef.current;
    if (!d) return;
    const s = useEditorStore.getState();
    if (JSON.stringify(d.start) === JSON.stringify(ep) && !d.vertices.length) return;
    const wire = createWire(d.start, ep, d.vertices);
    s.preview(normalizeDocumentWires({ ...s.document, objects: [...s.document.objects, wire] }));
    setWireDraft(null);
    s.endGesture();
    s.select([wire.id]);
  }, []);
  useEffect(() => {
    const keydown = async (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (
        el instanceof HTMLInputElement ||
        el instanceof HTMLTextAreaElement ||
        el instanceof HTMLSelectElement ||
        el.isContentEditable ||
        document.querySelector('[role="dialog"]')
      )
        return;
      if (e.key === 'Escape' && document.querySelector('.context-more[open]')) return;
      modifierKey(e);
      const s = useEditorStore.getState(),
        mod = e.ctrlKey || e.metaKey;
      if (e.code === 'Space') {
        e.preventDefault();
        spaceDown.current = true;
        setSpace(true);
      }
      if (mod && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        drag.current = null;
        setDragging(null);
        setActiveLabel(null);
        setOverlay(blank);
        setWireDraft(null);
        if (e.shiftKey) s.redo();
        else s.undo();
      } else if (mod && e.key.toLowerCase() === 'y') {
        e.preventDefault();
        drag.current = null;
        setDragging(null);
        setActiveLabel(null);
        setOverlay(blank);
        setWireDraft(null);
        s.redo();
      } else if (mod && e.key.toLowerCase() === 'd') {
        e.preventDefault();
        s.duplicate();
      } else if (mod && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        s.select(s.document.objects.map((o) => o.id));
      } else if (mod && e.key.toLowerCase() === 'c' && s.selection.length) {
        e.preventDefault();
        clipboard.current = extractSelection(s.document, s.selection);
        try {
          await navigator.clipboard.writeText(serializeDocument(clipboard.current));
        } catch {
          /* In-memory copy also works without clipboard permission. */
        }
        s.notify('Selezione copiata');
      } else if (mod && e.key.toLowerCase() === 'v') {
        e.preventDefault();
        let copied = clipboard.current;
        try {
          const raw = await navigator.clipboard.readText();
          if (raw.trim().startsWith('{')) copied = deserializeDocument(raw);
        } catch {
          /* Use the in-memory clipboard on restricted browsers. */
        }
        if (copied) {
          const latest = useEditorStore.getState();
          latest.add(cloneObjects(copied, { x: 40, y: 40 }, latest.document));
          s.notify('Selezione incollata');
        }
      } else if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        s.remove();
      } else if (e.key === 'Escape') {
        setFirstPoint(null);
        s.cancelGesture();
        drag.current = null;
        setDragging(null);
        setActiveLabel(null);
        setOverlay(blank);
        setWireDraft(null);
        s.setTool('select');
        s.select([]);
        setEditing(null);
      } else if (e.key === 'Enter' && draftRef.current)
        finishWire({ kind: 'free', point: snapPoint(mouseRef.current) });
      else if (e.key === 'Enter' && s.selection.length === 1) {
        const o = s.document.objects.find((o) => o.id === s.selection[0]);
        if (o?.kind === 'component' || o?.kind === 'junction') {
          e.preventDefault();
          setEditing({ id: o.id, text: o.label.text, point: add(o, o.label.offset) });
        } else if (o?.kind === 'electrical') {
          e.preventDefault();
          setEditing({
            id: o.id,
            text: o.label.text,
            point: electricalGeometry(o, s.document).labelPoint,
          });
        } else if (o?.kind === 'brace') {
          e.preventDefault();
          setEditing({ id: o.id, text: o.label.text, point: braceGeometry(o).labelPoint });
        } else if (o?.kind === 'text') {
          e.preventDefault();
          setEditing({ id: o.id, text: o.text, point: o });
        }
      } else if (!mod && e.key.toLowerCase() === 'r') {
        if (s.tool === 'preset') s.rotatePlacement();
        else if (componentTypes.includes(s.tool as (typeof componentTypes)[number]))
          rotatePlacement();
        else s.rotate();
      } else if (!mod && e.key.toLowerCase() === 'v') s.setTool('select');
      else if (!mod && e.key.toLowerCase() === 'w') s.setTool('wire');
      else if (!mod && e.key.toLowerCase() === 'n') s.setTool('junction');
      else if (!mod && e.key.toLowerCase() === 't') s.setTool('text');
      else if (!mod && e.key.toLowerCase() === 'a') s.setTool('arrow');
      else if (!mod && e.key.toLowerCase() === 'l') s.setTool('loop-arrow');
      else if (!mod && e.key.toLowerCase() === 'h') s.setTool('pan');
      else if (!mod && e.key.toLowerCase() === 'g') s.toggleGrid();
      else if (e.key === '+' || e.key === '=') zoomAt(1.2);
      else if (e.key === '-') zoomAt(1 / 1.2);
      else if (e.key === '1') fit();
    };
    const keyup = (e: KeyboardEvent) => {
      modifierKey(e);
      if (e.code === 'Space') {
        spaceDown.current = false;
        setSpace(false);
      }
    };
    const blur = () => {
      if (drag.current && ['move', 'label', 'handle'].includes(drag.current.type))
        useEditorStore.getState().cancelGesture();
      drag.current = null;
      setDragging(null);
      setOverlay(blank);
      setFirstPoint(null);
      smartBlur();
      spaceDown.current = false;
      setSpace(false);
    };
    window.addEventListener('keydown', keydown);
    window.addEventListener('keyup', keyup);
    window.addEventListener('blur', blur);
    return () => {
      window.removeEventListener('keydown', keydown);
      window.removeEventListener('keyup', keyup);
      window.removeEventListener('blur', blur);
    };
  }, [finishWire, fit, zoomAt, modifierKey, smartBlur, rotatePlacement]);
  // Cancel an unfinished wire when a different tool is chosen.
  useEffect(
    () =>
      useEditorStore.subscribe((s, prev) => {
        if (s.tool !== prev.tool || s.pendingPresetId !== prev.pendingPresetId) {
          const unfinished = draftRef.current;
          setWireDraft(null);
          if (unfinished || drag.current) s.cancelGesture();
          drag.current = null;
          setDragging(null);
          setActiveLabel(null);
          setOverlay(blank);
          setFirstPoint(null);
        }
      }),
    [],
  );
  const placeComponent = (type: (typeof componentTypes)[number], p: Point) => {
    const s = useEditorStore.getState(),
      def = catalog.find((c) => c.type === type)!;
    const used = new Set(
      s.document.objects.filter((o) => o.kind === 'component').map((o) => o.label.text),
    );
    let index = 1;
    while (used.has(`${def.prefix}_${index}`)) index++;
    const o = createComponent(type, snapPoint(p), index);
    o.rotation = s.placementRotation;
    o.label.offset = rotatePoint(o.label.offset, o.rotation);
    s.add([o]);
  };
  const addJunction = (p: Point) => {
    const s = useEditorStore.getState(),
      candidate = wireCandidate(p, s.document, viewport.zoom);
    const result = insertJunction(s.document, candidate.point);
    if (candidate.kind === 'terminal') {
      const ep: Endpoint = { kind: 'junction', junctionId: result.junction.id };
      const same = (a: Endpoint, b: Endpoint) => JSON.stringify(a) === JSON.stringify(b);
      const linked = result.doc.objects.some(
        (o) =>
          o.kind === 'wire' &&
          ((same(o.startEndpoint, candidate.endpoint) && same(o.endEndpoint, ep)) ||
            (same(o.endEndpoint, candidate.endpoint) && same(o.startEndpoint, ep))),
      );
      if (!linked)
        result.doc = {
          ...result.doc,
          objects: [...result.doc.objects, createWire(candidate.endpoint, ep)],
        };
    }
    if (result.doc !== s.document) s.commit(result.doc);
    s.select([result.junction.id]);
  };
  const candidateEndpoint = (p: Point): { endpoint: Endpoint; attached: boolean } => {
    const s = useEditorStore.getState(),
      candidate = wireCandidate(p, s.document, viewport.zoom);
    if (candidate.kind === 'wire') {
      const result = insertJunction(s.document, candidate.point);
      s.preview(result.doc);
      return { endpoint: { kind: 'junction', junctionId: result.junction.id }, attached: true };
    }
    return { endpoint: candidate.endpoint, attached: candidate.kind !== 'grid' };
  };
  const pointerDown = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (e.button !== 0 && e.button !== 1) return;
    e.preventDefault();
    if (editing) saveEdit();
    const focused = document.activeElement;
    if (focused instanceof HTMLElement) focused.blur();
    const svg = svgRef.current!;
    svg.focus();
    const p = world(e.clientX, e.clientY),
      s = useEditorStore.getState();
    mouseRef.current = p;
    if (e.button === 1 || spaceDown.current || s.tool === 'pan') {
      svg.setPointerCapture(e.pointerId);
      setDragging('pan');
      drag.current = { type: 'pan', screen: { x: e.clientX, y: e.clientY }, view: viewport };
      return;
    }
    if (s.tool === 'preset') {
      s.insertPreset(p);
      return;
    }
    if (s.tool === 'wire') {
      const d = draftRef.current;
      if (!d && e.detail >= 2) return;
      if (!d) s.beginGesture();
      const target = candidateEndpoint(p);
      if (!d) setWireDraft({ start: target.endpoint, vertices: [] });
      else if (target.attached || e.detail >= 2) finishWire(target.endpoint);
      else setWireDraft({ ...d, vertices: [...d.vertices, snapPoint(p)] });
      const candidate = wireCandidate(p, useEditorStore.getState().document, viewport.zoom);
      setOverlay({
        ...blank,
        mouse: candidate.point,
        target: candidate.kind === 'grid' ? null : candidate.point,
      });
      return;
    }
    if (s.tool === 'current') {
      const near = nearestWire(p, s.document, 16 / viewport.zoom);
      if (near) {
        s.add([createCurrent(near.wire, near.point, s.document)]);
        s.setTool('select');
      } else s.notify('Clicca un filo per associare la freccia di corrente.');
      return;
    }
    if (s.tool === 'polarity') {
      const c = polarityTarget(e.target);
      const annotation = c?.kind === 'component' ? createPolarity(c) : null;
      if (annotation) {
        s.add([annotation]);
        s.setTool('select');
      } else s.notify('Scegli un componente a due terminali, oppure usa Freccia tensione.');
      return;
    }
    if (s.tool === 'junction') {
      addJunction(p);
      if (!e.shiftKey) s.setTool('select');
      return;
    }
    if (s.tool === 'text') {
      s.add([createTextAnnotation(snapPoint(p))]);
      s.setTool('select');
      return;
    }
    if (s.tool === 'voltage') {
      const point = wireCandidate(p, s.document, viewport.zoom).point;
      if (voltageStartRef.current) {
        if (distance(voltageStartRef.current, point) > 20) {
          s.add([createElectrical('voltage', voltageStartRef.current, point, 'V_{AB}')]);
          setFirstPoint(null);
          s.setTool('select');
        }
      } else {
        svg.setPointerCapture(e.pointerId);
        drag.current = { type: 'voltage', origin: point };
        setFirstPoint(point);
        setOverlay({ ...blank, target: point });
      }
      return;
    }
    if (
      s.tool === 'arrow' ||
      s.tool === 'loop-arrow' ||
      s.tool === 'brace' ||
      s.tool === 'bracket'
    ) {
      svg.setPointerCapture(e.pointerId);
      drag.current = { type: s.tool, origin: snapPoint(p) };
      return;
    }
    if (componentTypes.includes(s.tool as (typeof componentTypes)[number])) {
      const type = s.tool as (typeof componentTypes)[number];
      if (!smart.confirm(type, p, e.altKey)) placeComponent(type, p);
      return;
    }
    const target = e.target as Element,
      el = target.closest('[data-object]'),
      id = el?.getAttribute('data-object'),
      handle = target.closest('[data-handle]')?.getAttribute('data-handle'),
      labelId = target.closest('[data-label]')?.getAttribute('data-label');
    if (id) {
      if (e.altKey && handle?.startsWith('vertex:')) {
        s.update(id, (o) =>
          o.kind === 'wire'
            ? { ...o, vertices: o.vertices.filter((_, i) => i !== Number(handle.split(':')[1])) }
            : o,
        );
        return;
      }
      if (e.shiftKey) {
        s.select(
          s.selection.includes(id) ? s.selection.filter((i) => i !== id) : [...s.selection, id],
        );
        return;
      }
      const ids = labelId ? [id] : s.selection.includes(id) ? s.selection : [id];
      setActiveLabel(labelId ?? null);
      window.dispatchEvent(new Event('drawcircuit:show-properties'));
      s.select(ids);
      s.beginGesture();
      drag.current = {
        type: handle ? 'handle' : labelId ? 'label' : 'move',
        origin: p,
        doc: s.document,
        ids: handle || labelId ? [id] : ids,
        handle: handle ?? undefined,
        moveContext: !handle && !labelId ? createMoveContext(s.document, ids) : undefined,
      };
    } else {
      svg.setPointerCapture(e.pointerId);
      setActiveLabel(null);
      if (!e.shiftKey) s.select([]);
      drag.current = { type: 'marquee', origin: p, additive: e.shiftKey };
    }
  };
  const pointerMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    const p = world(e.clientX, e.clientY),
      s = useEditorStore.getState();
    mouseRef.current = p;
    const d = drag.current;
    if (d?.type === 'pan') {
      setViewport({
        ...d.view,
        x: d.view.x + e.clientX - d.screen.x,
        y: d.view.y + e.clientY - d.screen.y,
      });
      return;
    }
    if (d?.type === 'marquee') {
      const box = {
        x: Math.min(p.x, d.origin.x),
        y: Math.min(p.y, d.origin.y),
        width: Math.abs(p.x - d.origin.x),
        height: Math.abs(p.y - d.origin.y),
      };
      setOverlay({ ...blank, box });
      return;
    }
    if (d?.type === 'voltage') {
      const point = wireCandidate(p, s.document, viewport.zoom).point;
      setOverlay({
        ...blank,
        target: point,
        arrow: { ...createElectrical('voltage', d.origin, point, 'V_{AB}'), id: 'preview' },
      });
      return;
    }
    if (d?.type === 'brace' || d?.type === 'bracket') {
      setOverlay({
        ...blank,
        arrow: { ...createBrace(d.type, d.origin, snapPoint(p)), id: 'preview' },
      });
      return;
    }
    if (d?.type === 'loop-arrow') {
      const end = snapPoint(p);
      setOverlay({
        ...blank,
        arrow: {
          kind: 'loop-arrow',
          id: 'preview',
          x: Math.min(d.origin.x, end.x),
          y: Math.min(d.origin.y, end.y),
          width: Math.max(20, Math.abs(end.x - d.origin.x)),
          height: Math.max(20, Math.abs(end.y - d.origin.y)),
          direction: 'clockwise',
          arrowPosition: 0.125,
          color: COLORS.red,
          strokeWidth: 2,
        },
      });
      return;
    }
    if (d?.type === 'arrow') {
      const start = d.origin,
        end = snapPoint(p),
        dx = end.x - start.x,
        dy = end.y - start.y;
      setOverlay({
        ...blank,
        arrow: {
          kind: 'arrow',
          id: 'preview',
          type: s.arrowType,
          start,
          end,
          controlPoints: [
            { x: start.x + dx / 3 - dy * 0.45, y: start.y + dy / 3 + dx * 0.45 },
            { x: start.x + (dx * 2) / 3 - dy * 0.45, y: start.y + (dy * 2) / 3 + dx * 0.45 },
          ],
          color: COLORS.red,
          width: 2,
          reversed: false,
        },
      });
      return;
    }
    if (d?.type === 'move' || d?.type === 'label' || d?.type === 'handle') {
      if (distance(p, d.origin) < 2 / viewport.zoom && s.document === d.doc) return;
      if (!svgRef.current!.hasPointerCapture(e.pointerId))
        svgRef.current!.setPointerCapture(e.pointerId);
      setDragging(d.type === 'handle' ? 'handle' : 'move');
      const selected = new Set(d.ids);
      const raw = { x: p.x - d.origin.x, y: p.y - d.origin.y };
      const feedback =
        d.type === 'move' && d.moveContext
          ? computeMoveGuides(d.moveContext, raw, viewport.zoom, e.altKey)
          : {
              delta: { x: snap(raw.x), y: snap(raw.y) },
              alignment: {},
              distances: [],
              target: null,
            };
      const { delta, alignment: guides, distances, target } = feedback;
      const objects =
        d.type === 'move'
          ? moveSelection(d.doc, d.ids, delta).objects
          : d.doc.objects.map((o) => {
              if (!selected.has(o.id)) return o;
              if (
                d.type === 'label' &&
                (o.kind === 'component' ||
                  o.kind === 'junction' ||
                  o.kind === 'electrical' ||
                  o.kind === 'brace')
              )
                return {
                  ...o,
                  label: {
                    ...o.label,
                    offset: add(o.label.offset, {
                      x: Math.round(p.x - d.origin.x),
                      y: Math.round(p.y - d.origin.y),
                    }),
                  },
                };
              if (d.type === 'handle') {
                if (o.kind === 'loop-arrow') {
                  if (d.handle === 'loopHead') return { ...o, arrowPosition: loopPositionAt(o, p) };
                  const q = snapPoint(p);
                  if (d.handle === 'loopNW')
                    return {
                      ...o,
                      x: Math.min(q.x, o.x + o.width - 20),
                      y: Math.min(q.y, o.y + o.height - 20),
                      width: Math.max(20, o.x + o.width - q.x),
                      height: Math.max(20, o.y + o.height - q.y),
                    };
                  if (d.handle === 'loopSE')
                    return {
                      ...o,
                      width: Math.max(20, q.x - o.x),
                      height: Math.max(20, q.y - o.y),
                    };
                }
                if (o.kind === 'brace' && (d.handle === 'start' || d.handle === 'end')) {
                  return resizeBrace(o, d.handle, snapPoint(p));
                }
                if (o.kind === 'arrow') {
                  const q = snapPoint(p),
                    handle = d.handle;
                  if (handle === 'start' || handle === 'end') return { ...o, [handle]: q };
                  if (handle?.startsWith('control:')) {
                    const cps: [Point, Point] = [...o.controlPoints];
                    cps[Number(handle.split(':')[1])] = q;
                    return { ...o, controlPoints: cps };
                  }
                }
                if (o.kind === 'wire') {
                  if (d.handle?.startsWith('vertex:'))
                    return {
                      ...o,
                      vertices: o.vertices.map((v, i) =>
                        i === Number(d.handle!.split(':')[1]) ? snapPoint(p) : v,
                      ),
                    };
                  const target = wireCandidate(p, d.doc, viewport.zoom, new Set([o.id])),
                    endpoint: Endpoint =
                      target.kind === 'wire'
                        ? { kind: 'free', point: target.point }
                        : target.endpoint;
                  if (d.handle === 'wireStart') return { ...o, startEndpoint: endpoint };
                  if (d.handle === 'wireEnd') return { ...o, endEndpoint: endpoint };
                }
                return o;
              }
              return o;
            });
      s.preview({ ...d.doc, objects });
      setOverlay({ ...blank, guides, distances, target });
      return;
    }
    if (s.tool === 'polarity') {
      const componentTarget = polarityTarget(e.target)?.id ?? null;
      setOverlay((previous) =>
        previous.componentTarget === componentTarget ? previous : { ...blank, componentTarget },
      );
      return;
    }
    if (s.tool === 'current') {
      const near = nearestWire(p, s.document, 16 / viewport.zoom);
      const wireTarget = near?.wire.id ?? null,
        target = near?.point ?? null;
      setOverlay((previous) =>
        previous.wireTarget === wireTarget &&
        previous.target?.x === target?.x &&
        previous.target?.y === target?.y
          ? previous
          : { ...blank, target, wireTarget },
      );
      return;
    }
    if (s.tool === 'voltage') {
      const point = wireCandidate(p, s.document, viewport.zoom).point;
      setOverlay((previous) =>
        previous.target?.x === point.x && previous.target?.y === point.y
          ? previous
          : {
              ...blank,
              target: point,
              arrow:
                voltageStartRef.current && distance(voltageStartRef.current, point) > 20
                  ? {
                      ...createElectrical('voltage', voltageStartRef.current, point, 'V_{AB}'),
                      id: 'preview',
                    }
                  : null,
            },
      );
      return;
    }
    if (s.tool === 'preset') {
      setOverlay({ ...blank, mouse: snapPoint(p) });
      return;
    }
    if (
      s.tool !== 'wire' &&
      s.tool !== 'junction' &&
      !componentTypes.includes(s.tool as (typeof componentTypes)[number])
    )
      return;
    if (componentTypes.includes(s.tool as (typeof componentTypes)[number])) {
      smart.move(s.tool as (typeof componentTypes)[number], p, e.altKey);
      return;
    }
    const target =
      s.tool === 'wire' || s.tool === 'junction'
        ? wireCandidate(p, s.document, viewport.zoom)
        : null;
    setOverlay({
      ...blank,
      mouse: target?.point ?? snapPoint(p),
      target: target && target.kind !== 'grid' ? target.point : null,
    });
  };
  const pointerUp = (e: ReactPointerEvent<SVGSVGElement>) => {
    const d = drag.current,
      s = useEditorStore.getState();
    drag.current = null;
    setDragging(null);
    if (svgRef.current?.hasPointerCapture(e.pointerId))
      svgRef.current.releasePointerCapture(e.pointerId);
    if (d?.type === 'move' || d?.type === 'label' || d?.type === 'handle') {
      if (
        s.document !== d.doc &&
        d.type === 'handle' &&
        (d.handle === 'wireStart' || d.handle === 'wireEnd')
      ) {
        const doc = useEditorStore.getState().document;
        const wire = doc.objects.find((o) => o.id === d.ids[0]);
        if (wire?.kind === 'wire') {
          const p = world(e.clientX, e.clientY),
            candidate = wireCandidate(p, doc, viewport.zoom, new Set([wire.id]));
          if (candidate.kind === 'wire') {
            const result = insertJunction(doc, candidate.point);
            result.doc.objects = result.doc.objects.map((o) =>
              o.id === wire.id && o.kind === 'wire'
                ? {
                    ...o,
                    [d.handle === 'wireStart' ? 'startEndpoint' : 'endEndpoint']: {
                      kind: 'junction',
                      junctionId: result.junction.id,
                    },
                  }
                : o,
            );
            s.preview(result.doc);
          }
        }
      }
      const doc = useEditorStore.getState().document;
      if (doc !== d.doc) s.preview(normalizeDocumentWires(doc));
      s.endGesture();
    }
    if (d?.type === 'marquee') {
      const p = world(e.clientX, e.clientY),
        x = Math.min(p.x, d.origin.x),
        y = Math.min(p.y, d.origin.y),
        w = Math.abs(p.x - d.origin.x),
        h = Math.abs(p.y - d.origin.y);
      if (w > 4 || h > 4) {
        const ids = s.document.objects
          .filter((o) => {
            const b = objectBounds(o, s.document);
            return b.x >= x && b.y >= y && b.x + b.width <= x + w && b.y + b.height <= y + h;
          })
          .map((o) => o.id);
        s.select(d.additive ? [...new Set([...s.selection, ...ids])] : ids);
      }
    }
    if (d?.type === 'voltage') {
      const point = wireCandidate(world(e.clientX, e.clientY), s.document, viewport.zoom).point;
      if (distance(d.origin, point) > 20) {
        s.add([createElectrical('voltage', d.origin, point, 'V_{AB}')]);
        setFirstPoint(null);
        s.setTool('select');
      }
    }
    if (
      (d?.type === 'arrow' ||
        d?.type === 'loop-arrow' ||
        d?.type === 'brace' ||
        d?.type === 'bracket') &&
      overlay.arrow &&
      (overlay.arrow.kind === 'loop-arrow'
        ? distance(d.origin, world(e.clientX, e.clientY)) > 20
        : distance(overlay.arrow.start, overlay.arrow.end) > 20)
    ) {
      s.add([{ ...overlay.arrow, id: makeId() }]);
      s.setTool('select');
    }
    if (s.tool === 'wire') {
      const candidate = wireCandidate(
        world(e.clientX, e.clientY),
        useEditorStore.getState().document,
        viewport.zoom,
      );
      setOverlay({
        ...blank,
        mouse: candidate.point,
        target: candidate.kind === 'grid' ? null : candidate.point,
      });
    } else setOverlay(blank);
  };
  const doubleClick = (e: ReactPointerEvent<SVGSVGElement>) => {
    const s = useEditorStore.getState();
    if (s.tool === 'wire') {
      if (draftRef.current) finishWire(candidateEndpoint(world(e.clientX, e.clientY)).endpoint);
      return;
    }
    if (s.tool !== 'select') return;
    const id = (e.target as Element).closest('[data-object]')?.getAttribute('data-object'),
      o = s.document.objects.find((o) => o.id === id);
    if (!o) return;
    if (o.kind === 'component' || o.kind === 'junction')
      setEditing({ id: o.id, text: o.label.text, point: add(o, o.label.offset) });
    else if (o.kind === 'electrical')
      setEditing({
        id: o.id,
        text: o.label.text,
        point: electricalGeometry(o, s.document).labelPoint,
      });
    else if (o.kind === 'brace')
      setEditing({ id: o.id, text: o.label.text, point: braceGeometry(o).labelPoint });
    else if (o.kind === 'text') setEditing({ id: o.id, text: o.text, point: { x: o.x, y: o.y } });
    else if (o.kind === 'wire') {
      const p = world(e.clientX, e.clientY),
        near = nearestWire(p, s.document, 14 / viewport.zoom);
      if (!near || near.wire.id !== o.id) return;
      const vertices = [
        ...near.points.slice(1, near.segment + 1),
        near.point,
        ...near.points.slice(near.segment + 1, -1),
      ];
      s.update(o.id, (obj) => (obj.kind === 'wire' ? { ...obj, vertices } : obj));
    }
  };
  const drop = (e: DragEvent<SVGSVGElement>) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('application/drawcircuit-component');
    if (componentTypes.includes(type as (typeof componentTypes)[number])) {
      const componentType = type as (typeof componentTypes)[number],
        p = world(e.clientX, e.clientY);
      if (!smart.confirm(componentType, p, e.altKey, true)) placeComponent(componentType, p);
    }
    setPaletteDragType(null);
  };
  const saveEdit = () => {
    if (!editing) return;
    const original = useEditorStore.getState().document.objects.find((o) => o.id === editing.id);
    if (original?.kind === 'text' && original.text === editing.text) {
      setEditing(null);
      svgRef.current?.focus();
      return;
    }
    useEditorStore
      .getState()
      .update(editing.id, (o) =>
        o.kind === 'text'
          ? { ...o, text: editing.text }
          : o.kind === 'component' ||
              o.kind === 'junction' ||
              o.kind === 'electrical' ||
              o.kind === 'brace'
            ? { ...o, label: { ...o.label, text: editing.text } }
            : o,
      );
    setEditing(null);
    svgRef.current?.focus();
  };
  return {
    viewport,
    voltageStart,
    surfaceSize,
    smart,
    paletteDragType,
    dragOver: (e: DragEvent<SVGSVGElement>) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      if (paletteDragType) smart.move(paletteDragType, world(e.clientX, e.clientY), e.altKey);
    },
    overlay,
    draft,
    space,
    dragging,
    activeLabel,
    editing,
    setEditing,
    saveEdit,
    fit,
    zoomAt,
    pointerDown,
    pointerMove,
    pointerUp,
    leave: () => {
      smart.leave();
      if (!drag.current) setOverlay(blank);
    },
    doubleClick,
    drop,
    cancel: () => {
      useEditorStore.getState().cancelGesture();
      drag.current = null;
      setDragging(null);
      setActiveLabel(null);
      setWireDraft(null);
      setOverlay(blank);
      setFirstPoint(null);
      smart.reset();
    },
  };
}
