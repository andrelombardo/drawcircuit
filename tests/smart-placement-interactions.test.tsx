// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';
import { createComponent } from '../src/model/catalog';
import { emptyDocument } from '../src/model/demo';
import { serializeDocument } from '../src/model/serialization';
import type { CircuitComponent, Wire } from '../src/model/types';
import { useEditorStore } from '../src/store/editorStore';
import { resolveEndpoint } from '../src/utils/geometry';

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
  vi.stubGlobal(
    'DragEvent',
    class extends MouseEvent {
      dataTransfer: DataTransfer | null;
      constructor(type: string, init: MouseEventInit & { dataTransfer?: DataTransfer } = {}) {
        super(type, init);
        this.dataTransfer = init.dataTransfer ?? null;
      }
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
    x: 200,
    y: 0,
    left: 200,
    top: 0,
    right: 1200,
    bottom: 700,
    width: 1000,
    height: 700,
    toJSON: () => ({}),
  });
  useEditorStore.setState({
    document: emptyDocument(),
    selection: [],
    tool: 'select',
    past: [],
    future: [],
    gestureStart: null,
    placementRotation: 0,
    storageError: false,
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
const canvas = () => screen.getByTestId('circuit-canvas');
function client(x: number, y: number, extra = {}) {
  const n = canvas()
    .querySelector(':scope > g')!
    .getAttribute('transform')!
    .match(/-?\d+(?:\.\d+)?/g)!
    .map(Number);
  return {
    clientX: 200 + n[0] + x * n[2],
    clientY: n[1] + y * n[2],
    pointerId: 1,
    button: 0,
    ...extra,
  };
}
function move(x: number, y: number, extra = {}) {
  fireEvent.pointerMove(canvas(), client(x, y, extra));
}
function click(x: number, y: number, extra = {}) {
  fireEvent.pointerDown(canvas(), client(x, y, extra));
  fireEvent.pointerUp(canvas(), client(x, y, extra));
}
function key(key: string, extra = {}) {
  fireEvent.keyDown(canvas(), { key, ...extra });
}
const components = () =>
  useEditorStore
    .getState()
    .document.objects.filter((o): o is CircuitComponent => o.kind === 'component');
const wires = () =>
  useEditorStore.getState().document.objects.filter((o): o is Wire => o.kind === 'wire');
function start() {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: 'Inserisci resistenza' }));
}
function first() {
  start();
  move(0, 0);
  click(0, 0);
  return components()[0];
}
function seedWire(vertical = false) {
  const doc = {
    ...emptyDocument(),
    objects: [
      {
        kind: 'wire' as const,
        id: 'manual-wire',
        startEndpoint: {
          kind: 'free' as const,
          point: vertical ? { x: 0, y: -200 } : { x: -200, y: 0 },
        },
        endEndpoint: {
          kind: 'free' as const,
          point: vertical ? { x: 0, y: 200 } : { x: 200, y: 0 },
        },
        vertices: [],
        color: '#171a20',
        width: 2,
      },
    ],
  };
  useEditorStore.setState({ document: doc });
  return doc;
}
describe('Smart Placement through palette and canvas', () => {
  it('clears an anchor when its source is deleted through the existing Delete shortcut', () => {
    first();
    click(40, 0);
    key('Delete');
    expect(components()).toHaveLength(0);
    move(200, 100);
    click(200, 100);
    expect(components()).toHaveLength(1);
    expect(wires()).toHaveLength(0);
  });
  it('starts a clean session when the same palette item is selected again', () => {
    first();
    click(40, 0);
    move(120, 0);
    fireEvent.click(screen.getByRole('button', { name: 'Inserisci resistenza' }));
    move(300, 200);
    click(300, 200);
    expect(wires()).toHaveLength(0);
  });
  it.each([0.15, 0.5, 1, 2, 4])(
    'keeps magnetic placement distinguishable from anchor at zoom %s',
    (zoom) => {
      first();
      const matrix = canvas()
        .querySelector(':scope > g')!
        .getAttribute('transform')!
        .match(/-?\d+(?:\.\d+)?/g)!
        .map(Number);
      fireEvent.wheel(canvas(), {
        deltaY: -Math.log(zoom / matrix[2]) / 0.002,
        clientX: 700,
        clientY: 350,
      });
      move(80, 0);
      expect(canvas().querySelector('[data-placement-phase="snapped"]')).not.toBeNull();
      fireEvent.pointerLeave(canvas());
      move(80, 15 / zoom);
      expect(canvas().querySelector('[data-placement-phase="snapped"]')).not.toBeNull();
      click(80, 15 / zoom);
      expect(components()[1]).toMatchObject({ x: 80, y: 0 });
      expect(wires()).toHaveLength(1);
    },
  );
  it('keeps free placement, grid, repeated clicks, and the R/Esc shortcuts unchanged', () => {
    start();
    move(107, 93);
    expect(components()).toHaveLength(0);
    expect(
      canvas().querySelector('[data-placement-phase="free"] > g')?.getAttribute('transform'),
    ).toBe('translate(100 100) rotate(0)');
    expect(canvas().querySelectorAll('[data-preview-terminal]')).toHaveLength(2);
    key('r');
    click(107, 93);
    click(307, 93);
    expect(components()).toHaveLength(2);
    expect(components()[0]).toMatchObject({ x: 100, y: 100, rotation: 90 });
    expect(wires()).toHaveLength(0);
    expect(useEditorStore.getState().tool).toBe('resistor');
    key('Escape');
    expect(useEditorStore.getState().tool).toBe('select');
    expect(canvas().querySelector('[data-placement-phase]')).toBeNull();
    expect(canvas().querySelector('[data-connection-target]')).toBeNull();
  });
  it('shows targets only during construction, snaps a terminal, commits once, and continues a chain', () => {
    const a = first();
    move(86, 4);
    expect(canvas().querySelectorAll('[data-connection-target]')).toHaveLength(2);
    expect(canvas().querySelector('[data-placement-phase="snapped"]')).not.toBeNull();
    expect(canvas().querySelector('[data-smart-snap]')).not.toBeNull();
    click(86, 4);
    expect(components()[1]).toMatchObject({ x: 80, y: 0 });
    expect(wires()[0].startEndpoint).toEqual({
      kind: 'terminal',
      componentId: a.id,
      terminalId: 'b',
    });
    expect(useEditorStore.getState().past).toHaveLength(2);
    expect(canvas().querySelector('[data-quick-continue]')).not.toBeNull();
    click(120, 0);
    move(160, 0);
    click(160, 0);
    expect(components()).toHaveLength(3);
    expect(wires()).toHaveLength(2);
    expect(components()[2]).toMatchObject({ x: 160, y: 0 });
  });
  it('anchors without mutating history, orients vertically, and confirms on the second click', () => {
    const a = first(),
      before = serializeDocument(useEditorStore.getState().document);
    click(40, 0);
    expect(serializeDocument(useEditorStore.getState().document)).toBe(before);
    expect(useEditorStore.getState().past).toHaveLength(1);
    move(40, 120);
    expect(
      canvas().querySelector('[data-placement-phase="anchored"] > g')?.getAttribute('transform'),
    ).toContain('rotate(90)');
    expect(canvas().querySelector('[data-connection-preview]')).not.toBeNull();
    click(40, 120);
    expect(components()[1]).toMatchObject({ x: 40, y: 120, rotation: 90 });
    expect(wires()[0].startEndpoint).toEqual({
      kind: 'terminal',
      componentId: a.id,
      terminalId: 'b',
    });
    expect(resolveEndpoint(wires()[0].endEndpoint, useEditorStore.getState().document)).toEqual({
      x: 40,
      y: 80,
    });
    expect(useEditorStore.getState().past).toHaveLength(2);
  });
  it('gives manual rotation priority over anchored auto-orientation', () => {
    first();
    click(40, 0);
    move(40, 120);
    key('r');
    // R turns the assisted ghost by 90 degrees, then manual orientation stays locked.
    move(160, 0);
    click(160, 0);
    expect(components()[1].rotation).toBe(180);
  });
  it('cancels anchor state cleanly with Escape, a tool change, and pointer cancellation', () => {
    first();
    click(40, 0);
    move(100, 0);
    key('Escape');
    expect(components()).toHaveLength(1);
    expect(wires()).toHaveLength(0);
    expect(canvas().querySelector('[data-smart-snap]')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Inserisci resistenza' }));
    click(40, 0);
    key('w');
    expect(canvas().querySelector('[data-placement-phase]')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: 'Inserisci resistenza' }));
    click(40, 0);
    fireEvent.pointerCancel(canvas());
    move(400, 200);
    click(400, 200);
    expect(wires()).toHaveLength(0);
  });
  it('disables smart connection while holding Alt/Option and restores it on release without movement', () => {
    first();
    move(80, 0);
    expect(canvas().querySelector('[data-placement-phase="snapped"]')).not.toBeNull();
    key('Alt');
    expect(canvas().querySelector('[data-placement-phase="free"]')).not.toBeNull();
    fireEvent.keyUp(canvas(), { key: 'Alt' });
    expect(canvas().querySelector('[data-placement-phase="snapped"]')).not.toBeNull();
    move(80, 0, { altKey: true });
    click(80, 0, { altKey: true });
    expect(components()).toHaveLength(2);
    expect(wires()).toHaveLength(0);
  });
  it('does not connect an unseen candidate detected only on pointerDown', () => {
    first();
    click(80, 0);
    expect(components()).toHaveLength(2);
    expect(wires()).toHaveLength(0);
  });
  it('leaves a semantic connection active when the inserted component is dragged', () => {
    first();
    move(80, 0);
    click(80, 0);
    key('Escape');
    const c = components()[1],
      hit = canvas().querySelector(`[data-object="${c.id}"] .object-hit`)!;
    fireEvent.pointerDown(hit, client(80, 0));
    move(140, 60);
    fireEvent.pointerUp(canvas(), client(140, 60));
    expect(resolveEndpoint(wires()[0].endEndpoint, useEditorStore.getState().document)).toEqual({
      x: 100,
      y: 60,
    });
  });
  it('uses an explicit multi-terminal pin, keeps its semantic ID, and never chooses one silently', () => {
    first();
    fireEvent.click(screen.getByRole('button', { name: 'Inserisci transistor npn' }));
    move(80, 0);
    expect(canvas().querySelector('[data-smart-snap]')).toBeNull();
    expect(canvas().querySelectorAll('[data-preview-terminal]')).toHaveLength(3);
    fireEvent.click(screen.getByRole('button', { name: 'Collega terminale base' }));
    move(80, 0);
    expect(canvas().querySelector('[data-placement-phase="snapped"]')).not.toBeNull();
    click(80, 0);
    expect(wires()[0].endEndpoint).toMatchObject({ terminalId: 'base' });
  });
  it('splits a wire with an automatic Junction in one Undo operation', () => {
    const doc = seedWire();
    start();
    key('r');
    move(0, 40);
    click(0, 40);
    expect(components()).toHaveLength(1);
    expect(wires()).toHaveLength(3);
    expect(
      useEditorStore.getState().document.objects.filter((o) => o.kind === 'junction'),
    ).toHaveLength(1);
    key('z', { ctrlKey: true });
    expect(useEditorStore.getState().document).toEqual(doc);
  });
  it.each([false, true])(
    'requires explicit inline intent and undoes/redoes the complete cut (vertical=%s)',
    (vertical) => {
      const before = seedWire(vertical);
      start();
      fireEvent.click(screen.getByRole('button', { name: 'Inserisci in filo' }));
      move(0, 0);
      expect(canvas().querySelector('[data-inline-preview]')).not.toBeNull();
      click(0, 0);
      expect(components()).toHaveLength(1);
      expect(components()[0].rotation).toBe(vertical ? 90 : 0);
      expect(wires()).toHaveLength(2);
      const after = serializeDocument(useEditorStore.getState().document);
      expect(useEditorStore.getState().past).toHaveLength(1);
      key('z', { ctrlKey: true });
      expect(useEditorStore.getState().document).toEqual(before);
      key('z', { ctrlKey: true, shiftKey: true });
      expect(serializeDocument(useEditorStore.getState().document)).toBe(after);
    },
  );
  it('falls back to the original placement if inline intent is geometrically ambiguous', () => {
    seedWire();
    start();
    fireEvent.click(screen.getByRole('button', { name: 'Inserisci in filo' }));
    move(180, 0);
    expect(canvas().querySelector('[data-inline-preview]')).toBeNull();
    click(180, 0);
    expect(components()).toHaveLength(1);
    expect(wires()).toHaveLength(1);
  });
  it('supports palette drag preview and drop while keeping the active tool unchanged', () => {
    const a = createComponent('resistor', { x: 0, y: 0 }, 1);
    useEditorStore.setState({ document: { ...emptyDocument(), objects: [a] } });
    render(<App />);
    const dataTransfer = {
      getData: () => 'resistor',
      setData: vi.fn(),
      dropEffect: '',
      effectAllowed: '',
    };
    fireEvent.dragStart(screen.getByRole('button', { name: 'Inserisci resistenza' }), {
      dataTransfer,
    });
    fireEvent.dragOver(canvas(), { ...client(80, 0), dataTransfer });
    expect(canvas().querySelector('[data-placement-phase="snapped"]')).not.toBeNull();
    fireEvent.drop(canvas(), { ...client(80, 0), dataTransfer });
    expect(components()).toHaveLength(2);
    expect(wires()).toHaveLength(1);
    expect(useEditorStore.getState().tool).toBe('select');
    fireEvent.dragEnd(screen.getByRole('button', { name: 'Inserisci resistenza' }));
    expect(canvas().querySelector('[data-placement-phase]')).toBeNull();
  });
  it('reloads smart connections from JSON and exports through the original dialog', async () => {
    first();
    move(80, 0);
    click(80, 0);
    key('Escape');
    const saved = serializeDocument(useEditorStore.getState().document);
    act(() => useEditorStore.getState().replace(emptyDocument()));
    const file = new File([saved], 'smart.json', { type: 'application/json' });
    Object.defineProperty(file, 'text', { value: async () => saved });
    fireEvent.change(screen.getByLabelText('Apri file JSON'), { target: { files: [file] } });
    await waitFor(() => expect(serializeDocument(useEditorStore.getState().document)).toBe(saved));
    fireEvent.click(screen.getByRole('button', { name: /Esporta circuito/ }));
    expect(
      (screen.getByLabelText('Codice TikZ generato') as HTMLTextAreaElement).value,
    ).not.toMatch(/NaN|undefined/);
  });
});
