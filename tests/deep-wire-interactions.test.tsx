// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';
import { createComponent } from '../src/model/catalog';
import { emptyDocument } from '../src/model/demo';
import { createJunction, createWire } from '../src/model/factories';
import { serializeDocument, deserializeDocument } from '../src/model/serialization';
import type { CircuitDocument, Point, Wire } from '../src/model/types';
import { useEditorStore } from '../src/store/editorStore';
import { pointsPath, resolveEndpoint, wirePoints } from '../src/utils/geometry';
import { TERMINAL_DRAG_THRESHOLD } from '../src/utils/wires';

const state = () => useEditorStore.getState();
const wires = () => state().document.objects.filter((o): o is Wire => o.kind === 'wire');
const canvas = () => screen.getByTestId('circuit-canvas');
function client(x: number, y: number) {
  const numbers = canvas()
    .querySelector(':scope > g')!
    .getAttribute('transform')!
    .match(/-?\d+(?:\.\d+)?/g)!
    .map(Number);
  return {
    clientX: numbers[0] + x * numbers[2],
    clientY: numbers[1] + y * numbers[2],
    pointerId: 1,
    button: 0,
  };
}
const key = (key: string, options = {}) => fireEvent.keyDown(canvas(), { key, ...options });
function click(p: Point, options = {}) {
  fireEvent.pointerDown(canvas(), { ...client(p.x, p.y), ...options });
  fireEvent.pointerUp(canvas(), client(p.x, p.y));
}
function fixture(zoom = 1) {
  const a = createComponent('resistor', { x: 0, y: 0 });
  const b = { ...createComponent('resistor', { x: 240, y: 120 }), rotation: 90 as const };
  const junction = createJunction({ x: 180, y: 0 }, 'A');
  const existing = createWire(
    { kind: 'free', point: { x: 140, y: 220 } },
    { kind: 'free', point: { x: 340, y: 220 } },
  );
  const doc: CircuitDocument = { ...emptyDocument(), objects: [a, b, junction, existing] };
  useEditorStore.setState({ document: doc });
  render(<App />);
  const transform = canvas()
    .querySelector(':scope > g')!
    .getAttribute('transform')!
    .match(/-?\d+(?:\.\d+)?/g)!
    .map(Number);
  if (transform[2] !== zoom)
    fireEvent.wheel(canvas(), {
      deltaY: -Math.log(zoom / transform[2]) / 0.002,
      clientX: 600,
      clientY: 350,
    });
  const start = resolveEndpoint({ kind: 'terminal', componentId: a.id, terminalId: 'b' }, doc);
  const handle = () =>
    canvas().querySelector(`[data-object="${a.id}"] [data-terminal="b"] circle`)!;
  return { a, b, junction, existing, doc, start, handle };
}

beforeEach(() => {
  vi.stubGlobal(
    'ResizeObserver',
    class {
      observe() {}
      disconnect() {}
    },
  );
  vi.stubGlobal(
    'PointerEvent',
    class extends MouseEvent {
      pointerId = 1;
    },
  );
  Object.defineProperty(SVGElement.prototype, 'setPointerCapture', {
    configurable: true,
    value: vi.fn(),
  });
  Object.defineProperty(SVGElement.prototype, 'releasePointerCapture', {
    configurable: true,
    value: vi.fn(),
  });
  Object.defineProperty(SVGElement.prototype, 'hasPointerCapture', {
    configurable: true,
    value: () => false,
  });
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    right: 1200,
    bottom: 700,
    width: 1200,
    height: 700,
    toJSON: () => ({}),
  });
  vi.stubGlobal('localStorage', { getItem: () => null, setItem: vi.fn() });
  useEditorStore.setState({
    document: emptyDocument(),
    selection: [],
    activeLabel: null,
    tool: 'select',
    past: [],
    future: [],
    gestureStart: null,
    notice: '',
    grid: true,
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe('Select terminal gestures use the normal wire transaction', () => {
  it.each(['terminal', 'junction', 'wire', 'free'] as const)(
    'connects directly to a %s target and undoes/redoes its topology in one step',
    (target) => {
      const f = fixture();
      const end =
        target === 'terminal'
          ? { x: 240, y: 80 }
          : target === 'junction'
            ? f.junction
            : target === 'wire'
              ? { x: 240, y: 220 }
              : { x: 420, y: 80 };
      fireEvent.pointerDown(f.handle(), client(f.start.x, f.start.y));
      fireEvent.pointerMove(canvas(), client(end.x, end.y));
      const preview = canvas().querySelector('path[stroke="#5681d0"]')?.getAttribute('d');
      fireEvent.pointerUp(canvas(), client(end.x, end.y));
      const complete = state().document,
        wire = wires().at(-1)!;
      expect(state().tool).toBe('select');
      expect(wire.startEndpoint).toEqual({
        kind: 'terminal',
        componentId: f.a.id,
        terminalId: 'b',
      });
      if (target === 'terminal')
        expect(wire.endEndpoint).toEqual({
          kind: 'terminal',
          componentId: f.b.id,
          terminalId: 'a',
        });
      else if (target === 'junction')
        expect(wire.endEndpoint).toEqual({ kind: 'junction', junctionId: f.junction.id });
      else if (target === 'free') expect(wire.endEndpoint).toEqual({ kind: 'free', point: end });
      else {
        expect(wire.endEndpoint.kind).toBe('junction');
        expect(wires()).toHaveLength(3);
        expect(complete.objects.filter((o) => o.kind === 'junction')).toHaveLength(2);
      }
      expect(resolveEndpoint(wire.endEndpoint, complete)).toEqual({ x: end.x, y: end.y });
      expect(preview).toBeTruthy();
      if (target !== 'wire') expect(pointsPath(wirePoints(wire, complete))).toBe(preview);
      expect(deserializeDocument(serializeDocument(complete))).toEqual(complete);
      expect(state().gestureStart).toBeNull();
      expect(state().past).toHaveLength(1);
      key('z', { ctrlKey: true });
      expect(state().document).toEqual(f.doc);
      key('z', { ctrlKey: true, shiftKey: true });
      expect(state().document).toEqual(complete);
    },
  );
  it.each([0.5, 1, 2])(
    'requires %s zoom-independent screen-pixel threshold; click and jitter never create a wire',
    (zoom) => {
      const f = fixture(zoom),
        origin = client(f.start.x, f.start.y);
      fireEvent.pointerDown(f.handle(), origin);
      fireEvent.pointerMove(canvas(), {
        ...origin,
        clientX: origin.clientX + TERMINAL_DRAG_THRESHOLD - 1,
      });
      expect(state().gestureStart).toBeNull();
      fireEvent.pointerUp(canvas(), { ...origin, clientX: origin.clientX + 4 });
      expect(state().document).toBe(f.doc);
      expect(state().past).toHaveLength(0);
      expect(state().selection).toEqual([f.a.id]);
      fireEvent.pointerDown(f.handle(), origin);
      fireEvent.pointerMove(canvas(), {
        ...origin,
        clientX: origin.clientX + TERMINAL_DRAG_THRESHOLD + 1,
      });
      expect(state().gestureStart).toBe(f.doc);
      key('Escape');
      expect(state().document).toBe(f.doc);
    },
  );
  it.each(['Escape', 'pointercancel', 'blur', 'tool', 'undo'] as const)(
    'cancels %s without partial wires or stale preview',
    (cancel) => {
      const f = fixture();
      fireEvent.pointerDown(f.handle(), client(f.start.x, f.start.y));
      fireEvent.pointerMove(canvas(), client(240, 220));
      if (cancel === 'Escape') key('Escape');
      if (cancel === 'pointercancel') fireEvent.pointerCancel(canvas(), client(240, 220));
      if (cancel === 'blur') fireEvent.blur(window);
      if (cancel === 'tool') key('a');
      if (cancel === 'undo') key('z', { ctrlKey: true });
      fireEvent.pointerUp(canvas(), client(240, 220));
      expect(state().document).toBe(f.doc);
      expect(state().gestureStart).toBeNull();
      expect(state().past).toHaveLength(0);
      expect(canvas().querySelector('path[stroke="#5681d0"]')).toBeNull();
      act(() => state().setTool('select'));
      fireEvent.pointerDown(f.handle(), client(f.start.x, f.start.y));
      fireEvent.pointerMove(canvas(), client(420, 80));
      fireEvent.pointerUp(canvas(), client(420, 80));
      expect(wires()).toHaveLength(2);
    },
  );
  it.each([false, true])(
    'clears a pending/active terminal draft when a new document is loaded (started %s)',
    (started) => {
      const f = fixture();
      fireEvent.pointerDown(f.handle(), client(f.start.x, f.start.y));
      if (started) fireEvent.pointerMove(canvas(), client(240, 220));
      const next = emptyDocument();
      act(() => state().replace(next));
      fireEvent.pointerMove(canvas(), client(420, 80));
      fireEvent.pointerUp(canvas(), client(420, 80));
      expect(state().document).toBe(next);
      expect(state().gestureStart).toBeNull();
      expect(canvas().querySelector('path[stroke="#5681d0"]')).toBeNull();
    },
  );
  it('keeps component body movement distinct and cancels a drag returning to its source without a zero-length wire', () => {
    const f = fixture();
    const body = canvas().querySelector(`[data-object="${f.a.id}"] .object-hit`)!;
    fireEvent.pointerDown(body, client(0, 0));
    fireEvent.pointerMove(canvas(), { ...client(20, 20), altKey: true });
    fireEvent.pointerUp(canvas(), client(20, 20));
    expect(state().document.objects[0]).toMatchObject({ x: 20, y: 20 });
    expect(wires()).toHaveLength(1);
    const baseline = state().document,
      start = { x: 60, y: 20 };
    fireEvent.pointerDown(f.handle(), client(start.x, start.y));
    fireEvent.pointerMove(canvas(), client(100, 100));
    fireEvent.pointerMove(canvas(), client(start.x, start.y));
    fireEvent.pointerUp(canvas(), client(start.x, start.y));
    expect(state().document).toBe(baseline);
    expect(state().gestureStart).toBeNull();
    expect(wires()).toHaveLength(1);
  });
});

describe('Wire tool target resolution and cancellation', () => {
  it('Enter retains the hovered terminal reference and orientation instead of creating a free endpoint', () => {
    const f = fixture();
    key('w');
    click(f.start);
    fireEvent.pointerMove(canvas(), client(240, 80));
    key('Enter');
    const wire = wires().at(-1)!;
    expect(wire.endEndpoint).toEqual({ kind: 'terminal', componentId: f.b.id, terminalId: 'a' });
    const points = wirePoints(wire, state().document);
    expect(points.at(-2)!.x).toBe(points.at(-1)!.x);
    expect(state().past).toHaveLength(1);
  });
  it('Enter on a wire performs the same junction/split transaction as pointer completion', () => {
    const f = fixture();
    key('w');
    click(f.start);
    fireEvent.pointerMove(canvas(), client(240, 220));
    key('Enter');
    expect(wires()).toHaveLength(3);
    expect(wires().at(-1)!.endEndpoint.kind).toBe('junction');
    key('z', { ctrlKey: true });
    expect(state().document).toEqual(f.doc);
  });
  it.each(['Escape', 'pointercancel', 'blur', 'tool'])(
    'cancels a provisional split on %s, then permits a clean new wire',
    (cancel) => {
      const f = fixture();
      key('w');
      click({ x: 240, y: 220 });
      expect(state().document.objects.filter((o) => o.kind === 'junction')).toHaveLength(2);
      if (cancel === 'Escape') key('Escape');
      if (cancel === 'pointercancel') fireEvent.pointerCancel(canvas());
      if (cancel === 'blur') fireEvent.blur(window);
      if (cancel === 'tool') key('a');
      expect(state().document).toBe(f.doc);
      expect(state().gestureStart).toBeNull();
      key('w');
      click(f.start);
      fireEvent.pointerMove(canvas(), client(420, 80));
      key('Enter');
      expect(wires()).toHaveLength(2);
    },
  );
  it('keeps waypoints, uses double click to finish freely and supports pan/zoom mid-construction', () => {
    const f = fixture();
    key('w');
    click(f.start);
    click({ x: 80, y: -80 });
    key(' ', { code: 'Space' });
    fireEvent.pointerDown(canvas(), client(400, 0));
    fireEvent.pointerMove(canvas(), client(420, 0));
    fireEvent.pointerUp(canvas(), client(420, 0));
    fireEvent.keyUp(canvas(), { key: ' ', code: 'Space' });
    fireEvent.wheel(canvas(), { deltaY: -100, clientX: 600, clientY: 350 });
    click({ x: 420, y: -80 }, { detail: 2 });
    const wire = wires().at(-1)!;
    expect(wire.startEndpoint).toEqual({ kind: 'terminal', componentId: f.a.id, terminalId: 'b' });
    expect(wire.endEndpoint).toEqual({ kind: 'free', point: { x: 420, y: -80 } });
    const points = wirePoints(wire, state().document);
    expect(points).toContainEqual({ x: 80, y: -80 });
    points
      .slice(1)
      .forEach((p, i) => expect(p.x === points[i].x || p.y === points[i].y).toBe(true));
    expect(state().past).toHaveLength(1);
  });
});
