// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Canvas } from '../src/components/editor/Canvas';
import { nearbyTerminalComponents } from '../src/components/editor/useTerminalProximity';
import { componentRegistry, createComponent } from '../src/model/catalog';
import { createJunction, createWire } from '../src/model/factories';
import type { CircuitDocument, ComponentType } from '../src/model/types';
import { useEditorStore } from '../src/store/editorStore';
import { getExportSelection } from '../src/tikz/selection';
import { copyPNG } from '../src/png/exporter';
import { exportSVG } from '../src/svg/exporter';
import { createCurrent, electricalGeometry } from '../src/annotations/electrical';
vi.mock('../src/png/exporter', () => ({ copyPNG: vi.fn().mockResolvedValue(undefined) }));
const types: ComponentType[] = [
  'resistor',
  'capacitor',
  'voltageSource',
  'xnorGate',
  'opAmp',
  'npn',
];
const circuit = (): CircuitDocument => ({
  version: 1,
  title: 'Contextual UX',
  objects: types.map((type, i) => ({
    ...createComponent(type, { x: i * 200, y: 0 }),
    id: type,
  })),
});
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
  for (const name of ['setPointerCapture', 'releasePointerCapture'])
    Object.defineProperty(SVGElement.prototype, name, { configurable: true, value: vi.fn() });
  Object.defineProperty(SVGElement.prototype, 'hasPointerCapture', {
    configurable: true,
    value: () => false,
  });
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    right: 1600,
    bottom: 800,
    width: 1600,
    height: 800,
    toJSON: () => ({}),
  });
  useEditorStore.setState({
    document: circuit(),
    selection: [],
    activeLabel: null,
    tool: 'select',
    past: [],
    future: [],
    gestureStart: null,
    notice: '',
    currentPlacement: 'external',
  });
  vi.mocked(copyPNG).mockClear();
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.useRealTimers();
});
const canvas = () => screen.getByTestId('circuit-canvas');
const handles = (id: string) => canvas().querySelector(`[data-object="${id}"] .terminal-handles`)!;
function client(x: number, y: number) {
  const values = canvas()
    .querySelector(':scope > g')!
    .getAttribute('transform')!
    .match(/-?\d+(?:\.\d+)?/g)!
    .map(Number);
  return { clientX: values[0] + x * values[2], clientY: values[1] + y * values[2], pointerId: 1 };
}
describe('contextual terminal handles', () => {
  it.each(types)(
    '%s uses a 24px threshold at 50, 100 and 200 percent with 32px release hysteresis',
    (type) => {
      const component = { ...createComponent(type, { x: 0, y: 0 }), id: type };
      const doc: CircuitDocument = { version: 1, title: type, objects: [component] };
      const b = componentRegistry[type].bounds;
      for (const zoom of [0.5, 1, 2]) {
        const point = (gap: number) => ({ x: b.x + b.width + gap / zoom, y: b.y + b.height / 2 });
        expect(nearbyTerminalComponents(doc, point(23), zoom)).toEqual([type]);
        expect(nearbyTerminalComponents(doc, point(25), zoom)).toEqual([]);
        expect(nearbyTerminalComponents(doc, point(31), zoom, [type])).toEqual([type]);
        expect(nearbyTerminalComponents(doc, point(33), zoom, [type])).toEqual([]);
      }
    },
  );
  it('hides idle handles, reveals proximity/selection/tools, and holds through a brief departure', () => {
    render(<Canvas />);
    for (const type of types) expect(handles(type).getAttribute('data-visible')).toBe('false');
    fireEvent.pointerMove(canvas(), client(0, 0));
    expect(handles('resistor').getAttribute('data-visible')).toBe('true');
    vi.useFakeTimers();
    fireEvent.pointerMove(canvas(), client(0, 300));
    act(() => vi.advanceTimersByTime(60));
    expect(handles('resistor').getAttribute('data-visible')).toBe('true');
    fireEvent.pointerMove(canvas(), client(60, 0));
    act(() => vi.advanceTimersByTime(100));
    expect(handles('resistor').getAttribute('data-visible')).toBe('true');
    fireEvent.pointerLeave(canvas());
    act(() => vi.advanceTimersByTime(100));
    expect(handles('resistor').getAttribute('data-visible')).toBe('false');
    act(() => useEditorStore.getState().select(['capacitor']));
    expect(handles('capacitor').getAttribute('data-visible')).toBe('true');
    act(() => useEditorStore.getState().setTool('wire'));
    for (const type of types) expect(handles(type).getAttribute('data-visible')).toBe('true');
    expect(exportSVG(useEditorStore.getState().document)).not.toMatch(
      /terminal-handles|data-terminal|object-hit/,
    );
  });
});
describe('selection PNG shortcut', () => {
  it.each([false, true])(
    'reuses the normal export subset and copy pipeline (multiselect=%s)',
    async (multi) => {
      const r1 = { ...createComponent('resistor', { x: 0, y: 0 }), id: 'r1' };
      const r2 = { ...createComponent('resistor', { x: 200, y: 0 }), id: 'r2' };
      const j = { ...createJunction({ x: 100, y: 0 }, 'A'), id: 'j' };
      const w = createWire(
        { kind: 'terminal', componentId: r1.id, terminalId: 'b' },
        { kind: 'junction', junctionId: j.id },
      );
      const doc: CircuitDocument = { version: 1, title: 'PNG subset', objects: [r1, r2, j, w] };
      const selection = multi ? [r1.id, r2.id, j.id, w.id] : [r1.id];
      useEditorStore.setState({ document: doc, selection });
      render(<Canvas />);
      fireEvent.click(screen.getByRole('button', { name: 'Altre proprietà' }));
      fireEvent.click(screen.getByRole('button', { name: 'Copia PNG' }));
      await waitFor(() => expect(useEditorStore.getState().notice).toBe('PNG copiato'));
      expect(copyPNG).toHaveBeenCalledExactlyOnceWith(getExportSelection(doc, selection));
      expect(screen.queryByRole('dialog')).toBeNull();
    },
  );
});
describe('current mode controls', () => {
  it('chooses inline insertion and switches an existing annotation with undo/redo', () => {
    const wire = createWire(
      { kind: 'free', point: { x: 0, y: 0 } },
      { kind: 'free', point: { x: 240, y: 0 } },
    );
    const doc: CircuitDocument = { version: 1, title: 'Modes', objects: [wire] };
    useEditorStore.setState({ document: doc });
    render(<Canvas />);
    fireEvent.click(screen.getByRole('button', { name: 'Annotazioni elettriche' }));
    fireEvent.click(screen.getByRole('button', { name: 'Integrata' }));
    fireEvent.pointerDown(canvas(), client(120, 0));
    const created = useEditorStore
      .getState()
      .document.objects.find((o) => o.kind === 'electrical')!;
    expect(created).toMatchObject({ currentPlacement: 'inline', wireId: wire.id });
    fireEvent.click(screen.getByRole('button', { name: 'Altre proprietà' }));
    fireEvent.change(screen.getByLabelText('Posizione corrente'), {
      target: { value: 'external' },
    });
    expect(useEditorStore.getState().document.objects.at(-1)).toMatchObject({
      currentPlacement: 'external',
    });
    act(() => useEditorStore.getState().undo());
    expect(useEditorStore.getState().document.objects.at(-1)).toMatchObject({
      currentPlacement: 'inline',
    });
    act(() => useEditorStore.getState().redo());
    expect(useEditorStore.getState().document.objects.at(-1)).toMatchObject({
      currentPlacement: 'external',
    });
    // Geometry shares exactly the same object and wire association for both modes.
    const inline = createCurrent(wire, { x: 120, y: 0 }, doc, 'inline');
    expect(electricalGeometry(inline, doc).arrowEnd.y).toBe(0);
  });
});
