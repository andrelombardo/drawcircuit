// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';
import { emptyDocument } from '../src/model/demo';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import { useEditorStore } from '../src/store/editorStore';
import { circuitPresets, presetRegistry } from '../src/presets/registry';
import { CIRCUIT_FONT } from '../src/model/fonts';
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
function choose(id: string) {
  fireEvent.change(screen.getByRole('textbox', { name: 'Cerca componenti' }), {
    target: { value: presetRegistry[id].name },
  });
  fireEvent.click(
    screen.getByRole('button', { name: `Inserisci blocco: ${presetRegistry[id].name}` }),
  );
}

describe('additive quick block palette and placement', () => {
  it('starts compact, opens separate categories with 23 real schematic thumbnails, and retains the component library', () => {
    render(<App />);
    expect(screen.queryAllByRole('button', { name: /Inserisci blocco:/ })).toHaveLength(0);
    expect(screen.getByRole('button', { name: 'Inserisci resistenza' })).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /Blocchi rapidi 23/ }));
    expect(screen.getAllByRole('button', { name: /Inserisci blocco:/ })).toHaveLength(23);
    expect(document.querySelectorAll('.preset-thumbnail')).toHaveLength(23);
    for (const svg of document.querySelectorAll('.preset-thumbnail'))
      expect(svg.querySelectorAll('path').length).toBeGreaterThan(1);
    fireEvent.click(screen.getByRole('button', { name: 'RLC' }));
    expect(screen.getAllByRole('button', { name: /Inserisci blocco:/ })).toHaveLength(17);
    fireEvent.click(screen.getByRole('button', { name: /Blocchi rapidi 23/ }));
    expect(screen.queryAllByRole('button', { name: /Inserisci blocco:/ })).toHaveLength(0);
  });
  it('searches aliases even with the block section and category collapsed', () => {
    render(<App />);
    for (const [search, id] of [
      ['star', 'resistor-star'],
      ['triangle', 'resistor-delta'],
      ['ponte', 'wheatstone-bridge'],
      ['thevenin', 'thevenin'],
    ]) {
      fireEvent.change(screen.getByRole('textbox', { name: 'Cerca componenti' }), {
        target: { value: search },
      });
      expect(
        screen.getByRole('button', { name: `Inserisci blocco: ${presetRegistry[id].name}` }),
      ).toBeTruthy();
    }
    fireEvent.change(screen.getByRole('textbox', { name: 'Cerca componenti' }), {
      target: { value: 'nonesuch' },
    });
    expect(screen.getByText('Nessun componente o blocco trovato.')).toBeTruthy();
  });
  it('previews the whole star, rotates with R, places on-grid and creates one atomic Undo step', () => {
    render(<App />);
    choose('resistor-star');
    expect(useEditorStore.getState().document.objects).toHaveLength(0);
    move(213, -87);
    const ghost = () => canvas().querySelector('[data-preset-preview="resistor-star"]')!;
    expect(ghost().getAttribute('transform')).toBe('translate(220 -80)');
    expect(ghost().querySelectorAll('[data-layer="components"] > g')).toHaveLength(3);
    expect(ghost().querySelectorAll('[data-layer="junctions"] > g')).toHaveLength(4);
    expect(ghost().querySelectorAll('.katex')).toHaveLength(3);
    key('r');
    expect(ghost().getAttribute('data-preset-rotation')).toBe('90');
    click(213, -87);
    const s = useEditorStore.getState();
    expect(s.document.objects).toHaveLength(13);
    expect(s.selection).toHaveLength(13);
    expect(s.past).toHaveLength(1);
    expect(s.tool).toBe('select');
    expect(ghost()).toBeNull();
    expect(s.document.objects[0]).toMatchObject({ x: 340, y: -80, rotation: 180 });
    expect((canvas().querySelector('text[data-font]') as SVGElement)?.style.fontFamily).toBe(
      CIRCUIT_FONT,
    );
    key('z', { ctrlKey: true });
    expect(useEditorStore.getState().document.objects).toHaveLength(0);
    key('z', { ctrlKey: true, shiftKey: true });
    expect(useEditorStore.getState().document).toEqual(s.document);
  });
  it('cancels with Escape and removes the ghost on leave without changing the document', () => {
    render(<App />);
    choose('resistor-star');
    move(0, 0);
    fireEvent.pointerLeave(canvas());
    expect(canvas().querySelector('[data-preset-preview]')).toBeNull();
    move(0, 0);
    expect(canvas().querySelector('[data-preset-preview]')).not.toBeNull();
    key('Escape');
    expect(canvas().querySelector('[data-preset-preview]')).toBeNull();
    expect(useEditorStore.getState().pendingPresetId).toBeNull();
    expect(useEditorStore.getState().past).toHaveLength(0);
    expect(useEditorStore.getState().document.objects).toHaveLength(0);
  });
  it('moves the initial multi-selection together, then edits and deletes single ordinary objects', () => {
    render(<App />);
    choose('resistor-star');
    move(0, 0);
    click(0, 0);
    const original = useEditorStore.getState().document;
    const first = original.objects[0];
    expect(first.kind).toBe('component');
    const hit = canvas().querySelector(
      `[data-layer="components"] [data-object="${first.id}"] .object-hit`,
    )!;
    fireEvent.pointerDown(hit, client(0, -120));
    move(40, -100);
    fireEvent.pointerUp(canvas(), client(40, -100));
    const moved = useEditorStore.getState().document;
    for (const object of moved.objects)
      if (object.kind === 'component' || object.kind === 'junction') {
        const before = original.objects.find((o) => o.id === object.id)!;
        expect(before).toHaveProperty('x', object.x - 40);
        expect(before).toHaveProperty('y', object.y - 20);
      }
    click(700, 400);
    fireEvent.doubleClick(canvas().querySelector(`[data-object="${first.id}"] [data-label]`)!);
    fireEvent.change(screen.getByRole('textbox', { name: 'Modifica testo sul foglio' }), {
      target: { value: 'R_1 = 50 \\ohm' },
    });
    expect(screen.getByLabelText('Anteprima etichetta').textContent).toContain('Ω');
    fireEvent.click(screen.getByRole('button', { name: 'Conferma testo' }));
    expect(
      canvas().querySelector(`[data-object="${first.id}"] .katex-html`)?.textContent,
    ).toContain('Ω');
    const after = useEditorStore.getState().document;
    for (const wire of after.objects)
      if (wire.kind === 'wire')
        expect(() => resolveEndpoint(wire.startEndpoint, after)).not.toThrow();
    fireEvent.pointerDown(hit, client(40, -100));
    fireEvent.pointerUp(canvas(), client(40, -100));
    key('Delete');
    expect(
      useEditorStore.getState().document.objects.filter((o) => o.kind === 'component'),
    ).toHaveLength(2);
    expect(() =>
      deserializeDocument(serializeDocument(useEditorStore.getState().document)),
    ).not.toThrow();
  });
  it('continues Smart Placement, Quick Junction and Loop Arrow after a delta insertion', () => {
    render(<App />);
    choose('resistor-delta');
    move(0, 0);
    click(0, 0);
    const before = useEditorStore.getState().document.objects.length;
    fireEvent.change(screen.getByRole('textbox', { name: 'Cerca componenti' }), {
      target: { value: '' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Inserisci resistenza' }));
    move(-200, 160);
    move(-200, 160);
    click(-200, 160);
    expect(useEditorStore.getState().document.objects).toHaveLength(before + 2);
    expect(useEditorStore.getState().document.objects.at(-1)).toMatchObject({
      kind: 'wire',
      startEndpoint: { kind: 'junction' },
      endEndpoint: { kind: 'terminal' },
    });
    key('n');
    click(-160, -100);
    expect(
      useEditorStore.getState().document.objects.filter((o) => o.kind === 'junction'),
    ).toHaveLength(4);
    key('l');
    fireEvent.pointerDown(canvas(), client(-100, -80));
    move(100, 100);
    fireEvent.pointerUp(canvas(), client(100, 100));
    expect(useEditorStore.getState().document.objects.at(-1)?.kind).toBe('loop-arrow');
    expect(() =>
      deserializeDocument(serializeDocument(useEditorStore.getState().document)),
    ).not.toThrow();
  });
  it('inserts every registry entry from its card as independent native elements', () => {
    render(<App />);
    for (const preset of circuitPresets) {
      const count = useEditorStore.getState().document.objects.length;
      choose(preset.id);
      move(0, 0);
      click(0, 0);
      expect(useEditorStore.getState().document.objects.length - count).toBe(
        preset.components.length + preset.junctions.length + preset.wires.length,
      );
      key('z', { ctrlKey: true });
      expect(useEditorStore.getState().document.objects).toHaveLength(count);
    }
  }, 15000);
});
