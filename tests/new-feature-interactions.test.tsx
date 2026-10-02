// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';
import { emptyDocument } from '../src/model/demo';
import { createComponent } from '../src/model/catalog';
import { createWire } from '../src/model/factories';
import { useEditorStore } from '../src/store/editorStore';
import { createPersonalBlock, usePersonalBlocks } from '../src/personalBlocks/library';
import { createCurrent } from '../src/annotations/electrical';
import { wireCrossings } from '../src/utils/crossings';
import { exportSVG } from '../src/svg/exporter';
import type { ElectricalAnnotation } from '../src/model/types';
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
    x: 232,
    y: 0,
    left: 232,
    top: 0,
    right: 1280,
    bottom: 720,
    width: 1048,
    height: 720,
    toJSON: () => ({}),
  });
  usePersonalBlocks.setState({ blocks: [], error: '' });
  useEditorStore.setState({
    document: emptyDocument(),
    tool: 'select',
    pendingPresetId: null,
    selection: [],
    past: [],
    future: [],
    gestureStart: null,
    placementRotation: 0,
    grid: true,
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
const canvas = () => screen.getByTestId('circuit-canvas');
function client(x: number, y: number) {
  const n = canvas()
    .querySelector(':scope > g')!
    .getAttribute('transform')!
    .match(/-?\d+(?:\.\d+)?/g)!
    .map(Number);
  return { clientX: 232 + n[0] + x * n[2], clientY: n[1] + y * n[2], button: 0, pointerId: 1 };
}
const move = (x: number, y: number) => fireEvent.pointerMove(canvas(), client(x, y));
function click(x: number, y: number) {
  const point = client(x, y);
  fireEvent.pointerDown(canvas(), point);
  fireEvent.pointerUp(canvas(), point);
}
const key = (key: string, options = {}) => fireEvent.keyDown(canvas(), { key, ...options });
const doc = () => useEditorStore.getState().document;
function chooseElectrical(name: string) {
  fireEvent.click(screen.getByRole('button', { name: 'Annotazioni elettriche' }));
  fireEvent.click(screen.getByRole('button', { name }));
}
const line = (x1: number, y1: number, x2: number, y2: number) =>
  createWire({ kind: 'free', point: { x: x1, y: y1 } }, { kind: 'free', point: { x: x2, y: y2 } });
describe('new feature UI integrates with the existing editor', () => {
  it('saves a multi-selection, inserts a rotated ghost, renames and removes a personal block', () => {
    const c = createComponent('resistor', { x: 0, y: 0 }, 1),
      d = createComponent('capacitor', { x: 180, y: 0 }, 1);
    useEditorStore.setState({
      document: { ...emptyDocument(), objects: [c, d] },
      selection: [c.id, d.id],
    });
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Salva come blocco' }));
    fireEvent.change(screen.getByLabelText('Nome blocco'), { target: { value: 'R-C personale' } });
    fireEvent.click(screen.getByRole('button', { name: 'Salva blocco' }));
    expect(usePersonalBlocks.getState().blocks).toHaveLength(1);
    fireEvent.change(screen.getByRole('textbox', { name: 'Cerca componenti' }), {
      target: { value: 'R-C personale' },
    });
    expect(screen.queryByText('Nessun componente o blocco trovato.')).toBeNull();
    fireEvent.click(
      screen.getByRole('button', { name: 'Inserisci blocco personale: R-C personale' }),
    );
    move(200, 200);
    key('r');
    expect(canvas().querySelector('[data-preset-rotation="90"]')).toBeTruthy();
    click(200, 200);
    expect(doc().objects).toHaveLength(4);
    key('z', { ctrlKey: true });
    expect(doc().objects).toHaveLength(2);
    key('z', { ctrlKey: true, shiftKey: true });
    expect(doc().objects).toHaveLength(4);
    fireEvent.click(screen.getByRole('button', { name: 'Rinomina blocco R-C personale' }));
    fireEvent.change(screen.getByLabelText('Nome blocco'), { target: { value: 'Nuovo nome' } });
    fireEvent.click(screen.getByRole('button', { name: 'Salva blocco' }));
    fireEvent.change(screen.getByRole('textbox', { name: 'Cerca componenti' }), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Elimina blocco Nuovo nome' }));
    expect(usePersonalBlocks.getState().blocks).toHaveLength(0);
    expect(doc().objects).toHaveLength(4);
  });
  it('highlights wires on hover, attaches current, edits its label, reverses, colors and drags the label', () => {
    const w = line(-200, 0, 200, 0);
    useEditorStore.setState({ document: { ...emptyDocument(), objects: [w] } });
    render(<App />);
    chooseElectrical('Current Arrow · Corrente');
    move(50, 0);
    expect(canvas().querySelector(`[data-current-hover="${w.id}"]`)).toBeTruthy();
    click(50, 0);
    const annotation = doc().objects.at(-1) as ElectricalAnnotation;
    expect(annotation.wireId).toBe(w.id);
    expect(useEditorStore.getState().tool).toBe('select');
    fireEvent.change(screen.getByLabelText('Label annotazione'), { target: { value: 'i_{AB}' } });
    fireEvent.blur(screen.getByLabelText('Label annotazione'));
    fireEvent.click(screen.getByRole('button', { name: 'Inverti freccia' }));
    fireEvent.click(screen.getByRole('button', { name: 'Colore green' }));
    expect(doc().objects.at(-1)).toMatchObject({
      reversed: true,
      color: '#269978',
      label: { text: 'i_{AB}' },
    });
    const label = canvas().querySelector(`[data-label="${annotation.id}"]`)!;
    fireEvent.pointerDown(label, client(50, -40));
    move(80, -60);
    fireEvent.pointerUp(canvas(), client(80, -60));
    expect(doc().objects.at(-1)).toMatchObject({
      wireId: w.id,
      label: { offset: { x: 30, y: -20 } },
    });
  });
  it('places vertical current and free voltage arrows without changing wire topology', () => {
    const w = line(0, -200, 0, 200);
    useEditorStore.setState({ document: { ...emptyDocument(), objects: [w] } });
    render(<App />);
    chooseElectrical('Current Arrow · Corrente');
    click(0, 50);
    expect(doc().objects.at(-1)).toMatchObject({
      kind: 'electrical',
      mode: 'current',
      wireId: w.id,
    });
    chooseElectrical('Voltage Arrow · Tensione');
    fireEvent.pointerDown(canvas(), client(120, -100));
    move(120, 100);
    fireEvent.pointerUp(canvas(), client(120, 100));
    expect(doc().objects.at(-1)).toMatchObject({
      mode: 'voltage',
      start: { x: 120, y: -100 },
      end: { x: 120, y: 100 },
    });
    expect(doc().objects.filter((o) => o.kind === 'wire')).toEqual([w]);
  });
  it('attaches polarity only to two-terminal components and reverses it', () => {
    const c = createComponent('resistor', { x: 0, y: 0 }, 1),
      multi = createComponent('npn', { x: 200, y: 0 }, 1);
    useEditorStore.setState({ document: { ...emptyDocument(), objects: [c, multi] } });
    render(<App />);
    chooseElectrical('Voltage / Polarity · Polarità');
    fireEvent.pointerDown(
      canvas().querySelector(`[data-object="${multi.id}"] .object-hit`)!,
      client(200, 0),
    );
    expect(doc().objects).toHaveLength(2);
    expect(useEditorStore.getState().notice).toContain('due terminali');
    fireEvent.pointerDown(
      canvas().querySelector(`[data-object="${c.id}"] .object-hit`)!,
      client(0, 0),
    );
    expect(doc().objects.at(-1)).toMatchObject({ mode: 'polarity', componentId: c.id });
    fireEvent.click(screen.getByRole('button', { name: 'Inverti freccia' }));
    expect(doc().objects.at(-1)).toMatchObject({ reversed: true });
  });
  it('replaces with a compatible picker and supports atomic undo and redo', () => {
    const c = createComponent('resistor', { x: 0, y: 0 }, 1);
    useEditorStore.setState({ document: { ...emptyDocument(), objects: [c] }, selection: [c.id] });
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Sostituisci…' }));
    expect(screen.queryByRole('button', { name: 'Transistor NPN' })).toBeNull();
    fireEvent.change(screen.getByLabelText('Cerca sostituzione'), {
      target: { value: 'Condensatore' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Condensatore' }));
    expect(doc().objects[0]).toMatchObject({ type: 'capacitor', id: c.id });
    key('z', { ctrlKey: true });
    expect(doc().objects[0]).toMatchObject({ type: 'resistor' });
    key('z', { ctrlKey: true, shiftKey: true });
    expect(doc().objects[0]).toMatchObject({ type: 'capacitor' });
  });
  it('Quick Junction toggles a visual crossing and deletion restores it', () => {
    useEditorStore.setState({
      document: { ...emptyDocument(), objects: [line(-200, 0, 200, 0), line(0, -200, 0, 200)] },
    });
    render(<App />);
    expect(canvas().querySelectorAll('[data-wire-crossing]')).toHaveLength(1);
    fireEvent.click(screen.getByRole('button', { name: 'Nodo (N)' }));
    click(0, 0);
    expect(canvas().querySelectorAll('[data-wire-crossing]')).toHaveLength(0);
    key('Delete');
    expect(wireCrossings(doc())).toHaveLength(1);
    expect(canvas().querySelectorAll('[data-wire-crossing]')).toHaveLength(1);
  });
  it('exports valid pure XML/SVG with LaTeX and switches to selection without UI debris', async () => {
    const c = createComponent('resistor', { x: 0, y: 0 }, 1),
      d = createComponent('inductor', { x: 180, y: 0 }, 1);
    c.label.text = '\\frac{R_1}{R_2}';
    useEditorStore.setState({
      document: { ...emptyDocument(), objects: [c, d] },
      selection: [c.id],
    });
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: /Esporta TikZ$/ }));
    fireEvent.click(screen.getByRole('button', { name: 'SVG' }));
    const full = (screen.getByLabelText('Codice SVG generato') as HTMLTextAreaElement).value;
    const parsed = new DOMParser().parseFromString(full, 'image/svg+xml');
    expect(parsed.querySelector('parsererror')).toBeNull();
    expect(parsed.documentElement.tagName).toBe('svg');
    expect(full).not.toMatch(/foreignObject|data-layer|NaN|undefined/);
    fireEvent.click(screen.getByRole('button', { name: 'Solo selezione' }));
    const subset = (screen.getByLabelText('Codice SVG generato') as HTMLTextAreaElement).value;
    expect(subset.length).toBeLessThan(full.length);
    const copy = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: copy },
      configurable: true,
    });
    await act(async () =>
      fireEvent.click(screen.getByRole('button', { name: 'Copia codice SVG' })),
    );
    expect(copy).toHaveBeenCalledWith(subset);
    expect(screen.getByRole('button', { name: 'SVG copiato' })).toBeTruthy();
  });
  it('preserves annotations in a saved block and permits their independent deletion after insertion', () => {
    const w = line(-200, 0, 200, 0),
      original = { ...emptyDocument(), objects: [w] },
      a = createCurrent(w, { x: 0, y: 0 }, original);
    const block = createPersonalBlock({ ...original, objects: [w, a] }, [w.id, a.id], 'Corrente');
    usePersonalBlocks.getState().add(block);
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Inserisci blocco personale: Corrente' }));
    move(0, 0);
    click(0, 0);
    const inserted = doc().objects.find((o) => o.kind === 'electrical') as ElectricalAnnotation;
    act(() => useEditorStore.getState().select([inserted.id]));
    key('Delete');
    expect(doc().objects.filter((o) => o.kind === 'wire')).toHaveLength(1);
    expect(exportSVG(doc())).not.toContain('NaN');
  });
  it('closes the new electrical menu with Escape without changing existing shortcuts', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Annotazioni elettriche' }));
    key('Escape');
    expect(screen.queryByRole('button', { name: 'Current Arrow · Corrente' })).toBeNull();
    key('a');
    expect(useEditorStore.getState().tool).toBe('arrow');
    key('l');
    expect(useEditorStore.getState().tool).toBe('loop-arrow');
    key('w');
    expect(useEditorStore.getState().tool).toBe('wire');
  });
});
