// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Profiler } from 'react';
import { createComponent } from '../src/model/catalog';
import { COLORS, componentTypes } from '../src/model/types';
import type { CircuitDocument, Wire } from '../src/model/types';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import { resolveEndpoint } from '../src/utils/geometry';
import App from '../src/App';
import { emptyDocument } from '../src/model/demo';
import { useEditorStore } from '../src/store/editorStore';

let clipboardText = '';
beforeEach(() => {
  clipboardText = '';
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
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: {
      writeText: async (text: string) => {
        clipboardText = text;
      },
      readText: async () => clipboardText,
    },
  });
  useEditorStore.setState({
    document: emptyDocument(),
    selection: [],
    tool: 'select',
    past: [],
    future: [],
    gestureStart: null,
    notice: '',
    grid: true,
    placementRotation: 0,
    arrowType: 'straight',
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});
function canvas() {
  return screen.getByTestId('circuit-canvas');
}
function client(x: number, y: number) {
  const transform = canvas().querySelector(':scope > g')!.getAttribute('transform')!;
  const n = transform.match(/-?\d+(?:\.\d+)?/g)!.map(Number);
  return { clientX: 200 + n[0] + x * n[2], clientY: n[1] + y * n[2], pointerId: 1, button: 0 };
}
function click(x: number, y: number) {
  const p = client(x, y);
  fireEvent.pointerDown(canvas(), p);
  fireEvent.pointerUp(canvas(), p);
}
function key(key: string, extra: Record<string, boolean> = {}) {
  fireEvent.keyDown(canvas(), { key, ...extra });
}
function selectedComponent() {
  return useEditorStore
    .getState()
    .document.objects.find((o) => o.id === useEditorStore.getState().selection[0])!;
}
function placeResistor(x = 0, y = 0) {
  fireEvent.click(screen.getByRole('button', { name: 'Inserisci resistenza' }));
  click(x, y);
  key('Escape');
  const o = useEditorStore.getState().document.objects.at(-1)!;
  fireEvent.pointerDown(
    canvas().querySelector(`[data-object="${o.id}"] .object-hit`)!,
    client(x, y),
  );
  fireEvent.pointerUp(canvas(), client(x, y));
  return o;
}
function stressDocument(): CircuitDocument {
  const components = Array.from({ length: 100 }, (_, i) => ({
    ...createComponent('resistor', { x: (i % 10) * 140, y: Math.floor(i / 10) * 140 }),
    id: `c${i}`,
  }));
  const wires: Wire[] = Array.from({ length: 200 }, (_, i) => ({
    kind: 'wire',
    id: `w${i}`,
    startEndpoint: { kind: 'terminal', componentId: `c${i % 100}`, terminalId: 'b' },
    endEndpoint: { kind: 'terminal', componentId: `c${(i + 1) % 100}`, terminalId: 'a' },
    vertices: i < 100 ? [] : [{ x: components[i % 100].x + 60, y: components[i % 100].y + 60 }],
    color: COLORS.ink,
    width: 2,
  }));
  return {
    version: 1,
    title: 'Audit 400 objects',
    objects: [
      ...components,
      ...wires,
      ...components.map((c, i) => ({
        kind: 'text' as const,
        id: `t${i}`,
        x: c.x,
        y: c.y + 40,
        text: 'i_1',
        color: COLORS.red,
        fontSize: 20,
        align: 'middle' as const,
        rotation: 0 as const,
      })),
    ],
  };
}

describe('audit UX/input evidence', () => {
  it('records the rendered interface before production source inspection', () => {
    render(<App />);
    const controls = Array.from(document.querySelectorAll('button,input,select,textarea')).map(
      (el) => ({
        tag: el.tagName,
        text: el.textContent?.trim(),
        label: el.getAttribute('aria-label'),
        title: el.getAttribute('title'),
      }),
    );
    expect(controls.filter((c) => c.label?.startsWith('Inserisci '))).toHaveLength(
      componentTypes.length,
    );
    expect(
      screen.getByRole('button', { name: 'Inserisci batteria a cella singola' }),
    ).toBeDefined();
    expect(screen.getByRole('button', { name: /Esporta TikZ/ })).toBeDefined();
    expect(document.body.textContent).toContain('Scegli un componente dalla palette.');
  });
  it('attempts the student circuit using the rendered UI before production source inspection', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Inserisci batteria a cella singola' }));
    click(-200, 0);
    fireEvent.click(screen.getByRole('button', { name: 'Inserisci resistenza' }));
    click(0, -100);
    click(200, 0);
    click(0, 100);
    fireEvent.click(screen.getByRole('button', { name: 'Selezione (V)' }));
    fireEvent.click(screen.getByRole('button', { name: 'Ruota 90° (R)' }));
    expect(useEditorStore.getState().document.objects.at(-1)).toMatchObject({ rotation: 90 });
    fireEvent.click(screen.getByRole('button', { name: 'Nodo (N)' }));
    click(-100, -100);
    expect(useEditorStore.getState().tool).toBe('select');
    for (const [x, y] of [
      [100, -100],
      [100, 100],
      [-100, 100],
    ]) {
      fireEvent.click(screen.getByRole('button', { name: 'Nodo (N)' }));
      click(x, y);
    }
    const name = screen.getByLabelText('Nome nodo');
    fireEvent.change(name, { target: { value: 'D' } });
    fireEvent.blur(name);
    fireEvent.click(screen.getByRole('button', { name: 'Maglia (L)' }));
    fireEvent.pointerDown(canvas(), client(-80, -80));
    fireEvent.pointerMove(canvas(), client(80, 80));
    fireEvent.pointerUp(canvas(), client(80, 80));
    expect(
      useEditorStore.getState().document.objects.filter((o) => o.kind === 'component'),
    ).toHaveLength(4);
    expect(
      useEditorStore.getState().document.objects.filter((o) => o.kind === 'junction'),
    ).toHaveLength(4);
    expect(
      useEditorStore.getState().document.objects.filter((o) => o.kind === 'loop-arrow'),
    ).toHaveLength(1);
    fireEvent.click(screen.getByRole('button', { name: 'Filo (W)' }));
    click(-100, -100);
    click(-100, 100);
    expect(
      useEditorStore.getState().document.objects.filter((o) => o.kind === 'wire'),
    ).toHaveLength(1);
    fireEvent.click(screen.getByRole('button', { name: 'Guida e scorciatoie' }));
    expect(screen.getByRole('dialog').textContent).toContain('Enter');
  });

  for (const modifier of ['metaKey', 'ctrlKey']) {
    it(`supports create/rotate/copy/paste/duplicate/delete/undo/redo using ${modifier}`, async () => {
      render(<App />);
      const original = placeResistor();
      key('r');
      expect(selectedComponent()).toMatchObject({ rotation: 90 });
      key('a', { [modifier]: true });
      key('c', { [modifier]: true });
      await waitFor(() => expect(clipboardText).toContain(original.id));
      key('v', { [modifier]: true });
      await waitFor(() => expect(useEditorStore.getState().document.objects).toHaveLength(2));
      key('d', { [modifier]: true });
      expect(useEditorStore.getState().document.objects).toHaveLength(3);
      const beforeDelete = serializeDocument(useEditorStore.getState().document);
      key('Delete');
      expect(useEditorStore.getState().document.objects).toHaveLength(2);
      key('z', { [modifier]: true });
      expect(serializeDocument(useEditorStore.getState().document)).toBe(beforeDelete);
      key('z', { [modifier]: true, shiftKey: true });
      expect(useEditorStore.getState().document.objects).toHaveLength(2);
      key('z', { [modifier]: true });
      const beforeBackspace = serializeDocument(useEditorStore.getState().document);
      const restored = useEditorStore.getState().document.objects.at(-1)!;
      if (restored.kind !== 'component') throw new Error('Expected a restored component');
      fireEvent.pointerDown(
        canvas().querySelector(`[data-object="${restored.id}"] .object-hit`)!,
        client(restored.x, restored.y),
      );
      fireEvent.pointerUp(canvas(), client(restored.x, restored.y));
      const backspace = new KeyboardEvent('keydown', {
        key: 'Backspace',
        bubbles: true,
        cancelable: true,
      });
      act(() => canvas().dispatchEvent(backspace));
      expect(backspace.defaultPrevented).toBe(true);
      expect(useEditorStore.getState().document.objects).toHaveLength(2);
      key('z', { [modifier]: true });
      expect(serializeDocument(useEditorStore.getState().document)).toBe(beforeBackspace);
      expect(() => deserializeDocument(beforeBackspace)).not.toThrow();
    });
  }

  it('keeps editing r_{AB} safe from rotation and global shortcuts in text inputs', () => {
    render(<App />);
    const original = placeResistor();
    key('Enter');
    const input = screen.getByLabelText('Modifica testo sul foglio');
    const before = serializeDocument(useEditorStore.getState().document);
    for (const shortcut of ['r', 'R', 'w', 'n', 'a', 'g', 'Delete', 'Backspace'])
      fireEvent.keyDown(input, { key: shortcut });
    for (const modifier of ['metaKey', 'ctrlKey'])
      for (const shortcut of ['z', 'd', 'a', 'c', 'v'])
        fireEvent.keyDown(input, { key: shortcut, [modifier]: true });
    expect(serializeDocument(useEditorStore.getState().document)).toBe(before);
    fireEvent.change(input, { target: { value: 'r_{AB}' } });
    fireEvent.submit(input.closest('form')!);
    expect(
      useEditorStore.getState().document.objects.find((o) => o.id === original.id),
    ).toMatchObject({ rotation: 0, label: { text: 'r_{AB}' } });
    const label = screen.getByLabelText('Label componente');
    fireEvent.change(label, { target: { value: 'canceled' } });
    fireEvent.keyDown(label, { key: 'Escape' });
    fireEvent.blur(label);
    expect(selectedComponent()).toMatchObject({ label: { text: 'r_{AB}' } });
    const title = screen.getByLabelText('Titolo circuito');
    fireEvent.focus(title);
    fireEvent.change(title, { target: { value: 'canceled title' } });
    fireEvent.keyDown(title, { key: 'Escape' });
    fireEvent.blur(title);
    expect(useEditorStore.getState().document.title).toBe('Circuito senza titolo');
    const search = screen.getByLabelText('Cerca componenti');
    fireEvent.keyDown(search, { key: 'R' });
    expect(selectedComponent()).toMatchObject({ rotation: 0 });
  });

  it('cancels draft wires and pointer gestures with Escape or pointer cancellation', () => {
    render(<App />);
    const original = placeResistor();
    const before = serializeDocument(useEditorStore.getState().document);
    key('w');
    click(40, 0);
    click(80, 80);
    key('Escape');
    expect(serializeDocument(useEditorStore.getState().document)).toBe(before);
    expect(useEditorStore.getState().gestureStart).toBeNull();
    fireEvent.pointerDown(
      canvas().querySelector(`[data-object="${original.id}"] .object-hit`)!,
      client(0, 0),
    );
    fireEvent.pointerMove(canvas(), client(80, 80));
    fireEvent.pointerCancel(canvas(), client(80, 80));
    expect(serializeDocument(useEditorStore.getState().document)).toBe(before);
    expect(useEditorStore.getState().gestureStart).toBeNull();
  });

  it('anchors wheel zoom at the cursor and clamps extreme zoom', () => {
    render(<App />);
    placeResistor();
    const values = () =>
      canvas()
        .querySelector(':scope > g')!
        .getAttribute('transform')!
        .match(/-?\d+(?:\.\d+)?/g)!
        .map(Number);
    const before = values(),
      cursor = { x: 730, y: 260 };
    const worldBefore = {
      x: (cursor.x - before[0]) / before[2],
      y: (cursor.y - before[1]) / before[2],
    };
    const wheel = new WheelEvent('wheel', {
      deltaY: -80,
      clientX: 200 + cursor.x,
      clientY: cursor.y,
      bubbles: true,
      cancelable: true,
    });
    act(() => canvas().dispatchEvent(wheel));
    expect(wheel.defaultPrevented).toBe(true);
    const after = values();
    expect((cursor.x - after[0]) / after[2]).toBeCloseTo(worldBefore.x);
    expect((cursor.y - after[1]) / after[2]).toBeCloseTo(worldBefore.y);
    fireEvent.wheel(canvas(), { deltaY: -100000, ctrlKey: true });
    expect(values()[2]).toBe(4);
    fireEvent.wheel(canvas(), { deltaY: 100000, ctrlKey: true });
    expect(values()[2]).toBe(0.15);
    expect(values().every(Number.isFinite)).toBe(true);
    key('g');
    expect(useEditorStore.getState().grid).toBe(false);
  });

  it('AUDIT P2: Escape dismisses the replace-circuit confirmation without changing the document', () => {
    render(<App />);
    placeResistor();
    const before = serializeDocument(useEditorStore.getState().document);
    fireEvent.click(screen.getByRole('button', { name: 'Menu file' }));
    fireEvent.click(screen.getByRole('button', { name: 'Nuovo circuito' }));
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(serializeDocument(useEditorStore.getState().document)).toBe(before);
  });

  for (const label of ['Guida e scorciatoie', 'Esporta TikZ']) {
    it(`AUDIT P2: ${label} contains Tab/Shift Tab and restores keyboard focus on close`, () => {
      render(<App />);
      const trigger = screen.getByRole('button', { name: new RegExp(label) });
      trigger.focus();
      fireEvent.click(trigger);
      const first = screen.getByRole('button', {
        name: label === 'Guida e scorciatoie' ? 'Chiudi guida' : 'Chiudi export',
      });
      const last =
        label === 'Guida e scorciatoie'
          ? first
          : screen.getByRole('button', { name: 'Download .tex' });
      expect(document.activeElement).toBe(first);
      const reverseTab = new KeyboardEvent('keydown', {
        key: 'Tab',
        shiftKey: true,
        bubbles: true,
        cancelable: true,
      });
      act(() => first.dispatchEvent(reverseTab));
      expect(reverseTab.defaultPrevented).toBe(true);
      expect(document.activeElement).toBe(last);
      const tab = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
      act(() => last.dispatchEvent(tab));
      expect(tab.defaultPrevented).toBe(true);
      expect(document.activeElement).toBe(first);
      fireEvent.keyDown(first, { key: 'Escape' });
      expect(screen.queryByRole('dialog')).toBeNull();
      expect(document.activeElement).toBe(trigger);
    });
  }

  it('AUDIT P3: Escape closes the File menu', () => {
    render(<App />);
    placeResistor();
    const selected = useEditorStore.getState().selection;
    fireEvent.click(screen.getByRole('button', { name: 'Menu file' }));
    key('Escape');
    expect(screen.queryByRole('button', { name: 'Salva JSON' })).toBeNull();
    expect(useEditorStore.getState().selection).toEqual(selected);
  });

  it('keeps global editing shortcuts inactive while the export dialog is open', () => {
    render(<App />);
    placeResistor();
    const before = serializeDocument(useEditorStore.getState().document);
    fireEvent.click(screen.getByRole('button', { name: /Esporta TikZ/ }));
    for (const shortcut of ['R', 'Delete', 'Backspace', 'g', 'n'])
      fireEvent.keyDown(screen.getByRole('dialog'), { key: shortcut });
    expect(serializeDocument(useEditorStore.getState().document)).toBe(before);
    fireEvent.keyDown(screen.getByLabelText('Codice TikZ generato'), { key: 'Escape' });
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('measures 400-object DOM render and pan/zoom/select/drag/wire/group/undo/redo without claiming browser FPS', async () => {
    useEditorStore.setState({ document: stressDocument() });
    const commits: { phase: string; duration: number }[] = [];
    const started = performance.now();
    render(
      <Profiler id="audit" onRender={(_id, phase, duration) => commits.push({ phase, duration })}>
        <App />
      </Profiler>,
    );
    const initialRenderMs = performance.now() - started;
    const timings: Record<string, number> = {};
    const measure = (name: string, run: () => void) => {
      const start = performance.now();
      run();
      timings[name] = performance.now() - start;
    };
    expect(
      new Set(
        Array.from(canvas().querySelectorAll('[data-object]')).map((el) =>
          el.getAttribute('data-object'),
        ),
      ).size,
    ).toBe(400);
    const beforePan = canvas().querySelector(':scope > g')!.getAttribute('transform');
    measure('pan_25_moves', () => {
      fireEvent.keyDown(canvas(), { key: ' ', code: 'Space' });
      fireEvent.pointerDown(canvas(), { clientX: 800, clientY: 500, button: 0, pointerId: 1 });
      for (let i = 1; i <= 25; i++)
        fireEvent.pointerMove(canvas(), { clientX: 800 + i * 2, clientY: 500 + i, pointerId: 1 });
      fireEvent.pointerUp(canvas(), { clientX: 850, clientY: 525, pointerId: 1 });
      fireEvent.keyUp(canvas(), { key: ' ', code: 'Space' });
    });
    expect(canvas().querySelector(':scope > g')!.getAttribute('transform')).not.toBe(beforePan);
    measure('zoom_20_events', () => {
      for (let i = 0; i < 20; i++)
        fireEvent.wheel(canvas(), { deltaY: i % 2 ? 40 : -40, clientX: 800, clientY: 500 });
    });
    const beforeDrag = serializeDocument(useEditorStore.getState().document);
    measure('select_drag_20_moves', () => {
      fireEvent.pointerDown(
        canvas().querySelector('[data-object="c0"] .object-hit')!,
        client(0, 0),
      );
      for (let i = 1; i <= 20; i++) fireEvent.pointerMove(canvas(), client(i * 2, i * 2));
      fireEvent.pointerUp(canvas(), client(40, 40));
    });
    expect(
      resolveEndpoint(
        { kind: 'terminal', componentId: 'c0', terminalId: 'b' },
        useEditorStore.getState().document,
      ),
    ).toEqual({ x: 80, y: 40 });
    const afterDrag = serializeDocument(useEditorStore.getState().document);
    measure('undo_redo_20_cycles', () => {
      for (let i = 0; i < 20; i++) {
        key('z', { metaKey: true });
        expect(serializeDocument(useEditorStore.getState().document)).toBe(beforeDrag);
        key('z', { metaKey: true, shiftKey: true });
        expect(serializeDocument(useEditorStore.getState().document)).toBe(afterDrag);
      }
    });
    measure('wire_creation', () => {
      key('w');
      click(80, 40);
      click(100, 0);
      key('Escape');
    });
    expect(
      useEditorStore.getState().document.objects.filter((o) => o.kind === 'wire'),
    ).toHaveLength(201);
    measure('multi_select_group_drag', () => {
      fireEvent.pointerDown(canvas().querySelector('[data-object="c2"] .object-hit')!, {
        ...client(280, 0),
        shiftKey: true,
      });
      fireEvent.pointerUp(canvas(), client(280, 0));
      fireEvent.pointerDown(canvas().querySelector('[data-object="c3"] .object-hit')!, {
        ...client(420, 0),
        shiftKey: true,
      });
      fireEvent.pointerUp(canvas(), client(420, 0));
      expect(useEditorStore.getState().selection).toEqual(['c2', 'c3']);
      fireEvent.pointerDown(
        canvas().querySelector('[data-object="c2"] .object-hit')!,
        client(280, 0),
      );
      for (let i = 1; i <= 10; i++) fireEvent.pointerMove(canvas(), client(280 + i * 2, i * 2));
      fireEvent.pointerUp(canvas(), client(300, 20));
    });
    const groupAfter = serializeDocument(useEditorStore.getState().document);
    key('z', { ctrlKey: true });
    key('z', { ctrlKey: true, shiftKey: true });
    expect(serializeDocument(useEditorStore.getState().document)).toBe(groupAfter);
    measure('marquee_select', () => {
      fireEvent.pointerDown(canvas(), client(-100, -100));
      fireEvent.pointerMove(canvas(), client(650, 400));
      fireEvent.pointerUp(canvas(), client(650, 400));
    });
    expect(useEditorStore.getState().selection.length).toBeGreaterThan(1);
    expect(() => deserializeDocument(groupAfter)).not.toThrow();
    const evidence = {
      initialRenderMs,
      timings,
      reactCommits: commits.length,
      reactActualDurationSumMs: commits.reduce((s, c) => s + c.duration, 0),
      domElements: document.querySelectorAll('*').length,
      objects: useEditorStore.getState().document.objects.length,
      environment: 'jsdom; synchronous event dispatch; not browser frames/input latency/memory',
    };
    console.log('AUDIT_STRESS_DOM', JSON.stringify(evidence));
    const fs = await vi.importActual<{ writeFileSync: (path: string, data: string) => void }>(
      'node:fs',
    );
    fs.writeFileSync(
      '/private/tmp/drawcircuit-audit-stress-dom.json',
      JSON.stringify(evidence, null, 2),
    );
    fs.writeFileSync(
      '/private/tmp/drawcircuit-audit-stress-100-200-100.json',
      serializeDocument(stressDocument()),
    );
  });

  it('balances native window/wheel listeners through repeated mount/unmount', () => {
    const addWindow = vi.spyOn(window, 'addEventListener'),
      removeWindow = vi.spyOn(window, 'removeEventListener');
    const addElement = vi.spyOn(Element.prototype, 'addEventListener'),
      removeElement = vi.spyOn(Element.prototype, 'removeEventListener');
    for (let i = 0; i < 8; i++) {
      const view = render(<App />);
      view.unmount();
    }
    for (const type of [
      'keydown',
      'keyup',
      'blur',
      'drawcircuit:fit',
      'drawcircuit:zoom-in',
      'drawcircuit:zoom-out',
    ]) {
      const added = addWindow.mock.calls.filter(([t]) => t === type);
      const removed = removeWindow.mock.calls.filter(([t]) => t === type);
      expect(added).toHaveLength(8);
      expect(removed).toHaveLength(8);
      expect(added.map((call) => call[1])).toEqual(removed.map((call) => call[1]));
    }
    const addedWheel = addElement.mock.calls.filter(
      ([type, , options]) =>
        type === 'wheel' && typeof options === 'object' && options.passive === false,
    );
    const removedWheel = removeElement.mock.calls.filter(([type]) => type === 'wheel');
    expect(addedWheel).toHaveLength(8);
    expect(removedWheel).toHaveLength(8);
    expect(addedWheel.map((call) => call[1])).toEqual(removedWheel.map((call) => call[1]));
  });
});
