// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Canvas } from '../src/components/editor/Canvas';
import { ExportDialog } from '../src/components/toolbar/ExportDialog';
import { createComponent } from '../src/model/catalog';
import { createJunction, createWire } from '../src/model/factories';
import type { CircuitDocument, CircuitObject } from '../src/model/types';
import { useEditorStore } from '../src/store/editorStore';
import { serializeDocument } from '../src/model/serialization';
import { exportTikz } from '../src/tikz/exporter';
let clipboard = '';
const r = (id: string, x: number, y = 0) => ({ ...createComponent('resistor', { x, y }), id });
const documentWith = (objects: CircuitObject[]): CircuitDocument => ({
  version: 1,
  title: 'Golden UX',
  objects,
});
const row = () => documentWith([r('R2', 0), r('R3', 200), r('R4', 500)]);
beforeEach(() => {
  clipboard = '';
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
    right: 1200,
    bottom: 800,
    width: 1200,
    height: 800,
    toJSON: () => ({}),
  });
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: {
      writeText: async (text: string) => {
        clipboard = text;
      },
    },
  });
  useEditorStore.setState({
    document: row(),
    tool: 'select',
    selection: [],
    past: [],
    future: [],
    gestureStart: null,
    notice: '',
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
const canvas = () => screen.getByTestId('circuit-canvas');
function client(x: number, y: number, extra: Record<string, boolean> = {}) {
  const n = canvas()
    .querySelector(':scope > g')!
    .getAttribute('transform')!
    .match(/-?\d+(?:\.\d+)?/g)!
    .map(Number);
  return { clientX: n[0] + x * n[2], clientY: n[1] + y * n[2], pointerId: 1, button: 0, ...extra };
}
const body = (id: string) =>
  canvas().querySelector(`[data-layer="components"] [data-object="${id}"] .object-hit`)!;
function select(id: string, x: number, y = 0) {
  fireEvent.pointerDown(body(id), client(x, y));
  fireEvent.pointerUp(canvas(), client(x, y));
}
describe('polished selection and independent label interaction', () => {
  it('highlights the single symbol with terminals and no legacy selection rectangle or resize handles', () => {
    render(<Canvas />);
    select('R3', 200);
    expect(canvas().querySelector('[data-layer="selection"] .selection-box')).toBeNull();
    expect(canvas().querySelector('[data-object="R3"] [data-selected]')).not.toBeNull();
    expect(canvas().querySelectorAll('[data-object="R3"] [data-terminal]')).toHaveLength(2);
    expect(canvas().querySelectorAll('[data-handle]')).toHaveLength(0);
  });
  it('activates a label directly, moves only its offset, leaves wires fixed, and edits LaTeX on double click', () => {
    const wire = createWire(
      { kind: 'terminal', componentId: 'R2', terminalId: 'b' },
      { kind: 'terminal', componentId: 'R3', terminalId: 'a' },
    );
    useEditorStore.setState({
      document: documentWith([r('R2', 0), r('R3', 200), wire]),
      selection: ['R3'],
    });
    render(<Canvas />);
    const label = canvas().querySelector('[data-label="R3"]')!,
      before = useEditorStore.getState().document,
      component = before.objects[1];
    fireEvent.pointerDown(label, client(200, -30));
    expect(canvas().querySelector('[data-label="R3"][data-active-label]')).not.toBeNull();
    fireEvent.pointerMove(canvas(), client(231, -47));
    expect(canvas().classList.contains('dragging-move')).toBe(true);
    fireEvent.pointerUp(canvas(), client(231, -47));
    const after = useEditorStore.getState().document;
    expect(after.objects[1]).toMatchObject({ x: 200, y: 0, label: { offset: { x: 31, y: -47 } } });
    expect(after.objects[0]).toBe(before.objects[0]);
    expect(after.objects[2]).toBe(wire);
    expect(component).toMatchObject({ label: { offset: { x: 0, y: -30 } } });
    expect(useEditorStore.getState().past).toHaveLength(1);
    fireEvent.doubleClick(canvas().querySelector('[data-label="R3"]')!, client(231, -47));
    fireEvent.change(screen.getByLabelText('Modifica testo sul foglio'), {
      target: { value: 'R_{test}' },
    });
    fireEvent.click(screen.getByLabelText('Conferma testo'));
    expect(after.objects[1]).not.toBe(useEditorStore.getState().document.objects[1]);
    select('R3', 200);
    expect(canvas().querySelector('[data-active-label]')).toBeNull();
  });
  it('label interactions take priority inside a multiple selection and cannot move the group', () => {
    useEditorStore.setState({ selection: ['R2', 'R3'] });
    render(<Canvas />);
    expect(canvas().querySelectorAll('[data-selection="group"]')).toHaveLength(1);
    const label = canvas().querySelector('[data-label="R3"]')!;
    fireEvent.pointerDown(label, client(200, -30));
    fireEvent.pointerMove(canvas(), client(220, -22));
    fireEvent.pointerUp(canvas(), client(220, -22));
    expect(useEditorStore.getState().selection).toEqual(['R3']);
    expect(useEditorStore.getState().document.objects[0]).toMatchObject({ x: 0, y: 0 });
    expect(useEditorStore.getState().document.objects[1]).toMatchObject({
      x: 200,
      y: 0,
      label: { offset: { x: 20, y: -22 } },
    });
  });
  it('distinguishes Space pan from element dragging without moving circuit objects', () => {
    render(<Canvas />);
    const before = serializeDocument(useEditorStore.getState().document);
    fireEvent.keyDown(canvas(), { key: ' ', code: 'Space' });
    fireEvent.pointerDown(body('R3'), client(200, 0));
    expect(canvas().classList.contains('dragging-pan')).toBe(true);
    fireEvent.pointerMove(canvas(), { clientX: 700, clientY: 450, pointerId: 1 });
    fireEvent.pointerUp(canvas(), { clientX: 700, clientY: 450, pointerId: 1 });
    fireEvent.keyUp(canvas(), { key: ' ', code: 'Space' });
    expect(serializeDocument(useEditorStore.getState().document)).toBe(before);
    expect(canvas().classList.contains('dragging-pan')).toBe(false);
  });
});
describe('Golden spacing and group workflow in the canvas', () => {
  for (const vertical of [false, true])
    it(`shows and clears ${vertical ? 'vertical' : 'horizontal'} guides, snaps and undoes in one gesture`, () => {
      const d = row();
      if (vertical)
        for (const o of d.objects)
          if (o.kind === 'component') {
            o.y = o.x;
            o.x = 0;
            o.rotation = 90;
          }
      useEditorStore.setState({ document: d });
      render(<Canvas />);
      const from = vertical ? client(0, 200) : client(200, 0),
        to = vertical ? client(0, 246) : client(246, 0);
      fireEvent.pointerDown(body('R3'), from);
      fireEvent.pointerMove(canvas(), to);
      const guides = canvas().querySelectorAll('[data-layer="distance-guides"] [data-distance]');
      expect(guides).toHaveLength(2);
      expect([...guides].map((el) => el.getAttribute('data-distance'))).toEqual(['170', '170']);
      expect([...guides].every((el) => el.hasAttribute('data-equal'))).toBe(true);
      expect(useEditorStore.getState().past).toHaveLength(0);
      expect(serializeDocument(useEditorStore.getState().document)).not.toContain('guides');
      expect(exportTikz(useEditorStore.getState().document)).not.toContain('170 =');
      fireEvent.pointerUp(canvas(), to);
      expect(canvas().querySelectorAll('[data-distance]')).toHaveLength(0);
      expect(useEditorStore.getState().document.objects[1]).toMatchObject(
        vertical ? { x: 0, y: 250 } : { x: 250, y: 0 },
      );
      expect(useEditorStore.getState().past).toHaveLength(1);
      act(() => useEditorStore.getState().undo());
      expect(useEditorStore.getState().document).toBe(d);
      act(() => useEditorStore.getState().redo());
      expect(useEditorStore.getState().document.objects[1]).toMatchObject(
        vertical ? { y: 250 } : { x: 250 },
      );
    });
  it('disables smart feedback with Alt and cancels a drag cleanly', () => {
    render(<Canvas />);
    fireEvent.pointerDown(body('R3'), client(200, 0));
    fireEvent.pointerMove(canvas(), client(246, 4, { altKey: true }));
    expect(useEditorStore.getState().document.objects[1]).toMatchObject({ x: 240, y: 0 });
    expect(canvas().querySelectorAll('[data-distance]')).toHaveLength(0);
    fireEvent.pointerCancel(canvas(), client(246, 4));
    expect(useEditorStore.getState().document.objects[1]).toMatchObject({ x: 200, y: 0 });
    expect(useEditorStore.getState().past).toHaveLength(0);
    expect(canvas().classList.contains('dragging-move')).toBe(false);
  });
  it('moves a group without exposing internal quotes or changing relative geometry', () => {
    useEditorStore.setState({ selection: ['R2', 'R3'] });
    render(<Canvas />);
    fireEvent.pointerDown(body('R2'), client(0, 0));
    fireEvent.pointerMove(canvas(), client(40, 40));
    fireEvent.pointerUp(canvas(), client(40, 40));
    expect(useEditorStore.getState().document.objects.slice(0, 2)).toMatchObject([
      { x: 40, y: 40 },
      { x: 240, y: 40 },
    ]);
    expect(canvas().querySelectorAll('[data-selection="group"]')).toHaveLength(1);
    expect(useEditorStore.getState().past).toHaveLength(1);
  });
});
describe('adaptive accessible toolbar', () => {
  it('shows labeled frequent properties and keeps only secondary controls in More', () => {
    render(<Canvas />);
    select('R3', 200);
    expect(screen.getByLabelText('Dimensione testo')).toBeDefined();
    expect(screen.getByLabelText('Spessore componente')).toBeDefined();
    for (const name of ['Duplica (⌘/Ctrl D)', 'Ruota 90° (R)', 'Elimina (Delete)']) {
      const button = screen.getByRole('button', { name });
      expect(button.title).toBe(name);
      expect(button.getAttribute('data-tooltip')).toBe(name);
    }
    fireEvent.click(screen.getByLabelText('Altre proprietà'));
    expect(screen.getByLabelText('Ruota solo label').textContent).toContain('Ruota label');
    expect(screen.queryByLabelText('Ruota selezione')).toBeNull();
    fireEvent.keyDown(canvas(), { key: 'Escape' });
    expect(useEditorStore.getState().selection).toEqual(['R3']);
    expect(document.querySelector('.context-more')?.hasAttribute('open')).toBe(false);
    fireEvent.keyDown(canvas(), { key: 'Escape' });
    expect(useEditorStore.getState().selection).toEqual([]);
  });
  it('closes properties on outside click while preserving selection and reopens on component click', () => {
    render(<Canvas />);
    select('R3', 200);
    fireEvent.click(screen.getByLabelText('Altre proprietà'));
    fireEvent.pointerDown(screen.getByLabelText('Titolo circuito'));
    expect(useEditorStore.getState().selection).toEqual(['R3']);
    expect(document.querySelector('.context-more')?.hasAttribute('open')).toBe(false);
    expect((document.querySelector('.context-toolbar') as HTMLElement).style.visibility).toBe(
      'hidden',
    );
    select('R3', 200);
    expect((document.querySelector('.context-toolbar') as HTMLElement).style.visibility).toBe(
      'visible',
    );
  });
  for (const loop of [false, true])
    it(`keeps functional handles and the right actions for ${loop ? 'Loop Arrow' : 'Arrow'}`, () => {
      const o: CircuitObject = loop
        ? {
            kind: 'loop-arrow',
            id: 'a',
            x: 0,
            y: 0,
            width: 100,
            height: 80,
            direction: 'clockwise',
            arrowPosition: 0.125,
            color: '#171a20',
            strokeWidth: 2,
          }
        : {
            kind: 'arrow',
            id: 'a',
            type: 'curve',
            start: { x: 0, y: 0 },
            end: { x: 100, y: 0 },
            controlPoints: [
              { x: 25, y: 50 },
              { x: 75, y: 50 },
            ],
            color: '#171a20',
            width: 2,
            reversed: false,
          };
      useEditorStore.setState({ document: documentWith([o]), selection: ['a'] });
      render(<Canvas />);
      expect(canvas().querySelectorAll('[data-handle]').length).toBe(loop ? 3 : 4);
      expect(screen.getByLabelText('Inverti freccia')).toBeDefined();
      expect(screen.queryByLabelText('Dimensione testo')).toBeNull();
      if (loop) expect(screen.queryByLabelText('Altre proprietà')).toBeNull();
    });
  it('wire exposes stroke and color without a useless More menu or rotation', () => {
    const w = createWire(
      { kind: 'free', point: { x: 0, y: 0 } },
      { kind: 'free', point: { x: 100, y: 0 } },
    );
    useEditorStore.setState({ document: documentWith([w]), selection: [w.id] });
    render(<Canvas />);
    expect(screen.getByLabelText('Spessore')).toBeDefined();
    expect(screen.queryByLabelText('Altre proprietà')).toBeNull();
    expect(screen.queryByLabelText('Ruota 90° (R)')).toBeNull();
  });
  it('Junction exposes node color and text properties without stroke or rotation controls', () => {
    const j = createJunction({ x: 0, y: 0 }, 'A');
    useEditorStore.setState({ document: documentWith([j]), selection: [j.id] });
    render(<Canvas />);
    expect(screen.getByLabelText('Nome nodo')).toBeDefined();
    expect(screen.queryByLabelText('Spessore')).toBeNull();
    expect(screen.queryByLabelText('Ruota 90° (R)')).toBeNull();
    fireEvent.click(screen.getByLabelText('Altre proprietà'));
    expect(screen.getByLabelText('Colore label')).toBeDefined();
  });
});
describe('selection export scope in the existing dialog', () => {
  it('exports only components and internal wires in both formats with clipboard verification', async () => {
    const a = r('R2', 1800, 900),
      b = r('R3', 2100, 900),
      outside = r('R4', 2500, 900);
    a.label.text = 'R_2';
    b.label.text = 'R_3';
    outside.label.text = 'R_4';
    const w = createWire(
      { kind: 'terminal', componentId: a.id, terminalId: 'b' },
      { kind: 'terminal', componentId: b.id, terminalId: 'a' },
    );
    const external = createWire(
      { kind: 'terminal', componentId: b.id, terminalId: 'b' },
      { kind: 'terminal', componentId: outside.id, terminalId: 'a' },
    );
    useEditorStore.setState({
      document: documentWith([a, b, outside, w, external]),
      selection: [a.id, b.id],
    });
    render(<ExportDialog onClose={() => {}} />);
    fireEvent.click(screen.getByRole('button', { name: 'Solo selezione' }));
    expect(
      (screen.getByLabelText('Codice TikZ generato') as HTMLTextAreaElement).value,
    ).not.toContain('R_4');
    fireEvent.click(screen.getByRole('button', { name: 'Copia TikZ selezione' }));
    await waitFor(() => expect(clipboard).toContain('R_2'));
    expect(clipboard).toContain('R_3');
    expect(clipboard).not.toContain('R_4');
    fireEvent.click(screen.getByRole('button', { name: 'Copia selezione per Obsidian' }));
    await waitFor(() => expect(clipboard).toMatch(/^```tikz/));
    expect(clipboard).not.toContain('R_4');
    expect(screen.getByText('3 oggetti vettoriali')).toBeDefined();
    fireEvent.click(screen.getByRole('button', { name: 'Tutto il circuito' }));
    expect(screen.getByRole('button', { name: 'Copy TikZ' })).toBeDefined();
  });
  it('disables empty selection export with a clear explanation', () => {
    render(<ExportDialog onClose={() => {}} />);
    const button = screen.getByRole('button', { name: 'Solo selezione' }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    expect(button.title).toContain('Seleziona almeno');
  });
});
