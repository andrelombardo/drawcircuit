// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';
import { createComponent } from '../src/model/catalog';
import { emptyDocument } from '../src/model/demo';
import { serializeDocument } from '../src/model/serialization';
import { useEditorStore } from '../src/store/editorStore';

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
  for (const method of ['setPointerCapture', 'releasePointerCapture'])
    Object.defineProperty(SVGElement.prototype, method, { configurable: true, value: vi.fn() });
  Object.defineProperty(SVGElement.prototype, 'hasPointerCapture', {
    configurable: true,
    value: () => false,
  });
  vi.stubGlobal('localStorage', { getItem: () => null, setItem: vi.fn() });
  useEditorStore.setState({
    document: emptyDocument(),
    selection: [],
    tool: 'select',
    past: [],
    future: [],
    gestureStart: null,
    notice: '',
  });
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
describe('master audit: asynchronous user operations', () => {
  it('stops a cancelled drag after Ctrl Y instead of restoring the preview', () => {
    useEditorStore.setState({
      document: { ...emptyDocument(), objects: [createComponent('resistor', { x: 0, y: 0 }, 1)] },
    });
    render(<App />);
    const canvas = screen.getByTestId('circuit-canvas');
    const view = canvas
      .querySelector(':scope > g')!
      .getAttribute('transform')!
      .match(/-?\d+(?:\.\d+)?/g)!
      .map(Number);
    const point = (x: number) => ({
      clientX: view[0] + x * view[2],
      clientY: view[1],
      button: 0,
      pointerId: 1,
    });
    fireEvent.pointerDown(canvas.querySelector('.object-hit')!, point(0));
    fireEvent.pointerMove(canvas, point(20));
    expect(useEditorStore.getState().gestureStart).not.toBeNull();
    fireEvent.keyDown(canvas, { key: 'y', ctrlKey: true });
    const cancelled = useEditorStore.getState().document;
    expect(useEditorStore.getState().gestureStart).toBeNull();
    fireEvent.pointerMove(canvas, point(40));
    fireEvent.pointerUp(canvas, point(40));
    expect(useEditorStore.getState().document).toEqual(cancelled);
  });
  it('exposes no file import or replacement controls in the workspace', () => {
    render(<App />);
    expect(screen.queryByLabelText('Apri file JSON')).toBeNull();
    expect(screen.queryByRole('button', { name: 'Menu file' })).toBeNull();
    expect(screen.queryByRole('button', { name: 'Nuovo circuito' })).toBeNull();
  });
  it('renumbers rapid repeated pastes using the latest document', async () => {
    const pending: ((raw: string) => void)[] = [];
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        readText: () => new Promise<string>((resolve) => pending.push(resolve)),
      },
    });
    const raw = serializeDocument({
      ...emptyDocument(),
      objects: [createComponent('resistor', { x: 0, y: 0 }, 1)],
    });
    render(<App />);
    const canvas = screen.getByTestId('circuit-canvas');
    fireEvent.keyDown(canvas, { key: 'v', ctrlKey: true });
    fireEvent.keyDown(canvas, { key: 'v', ctrlKey: true });
    expect(pending).toHaveLength(2);
    await act(async () => {
      pending.forEach((resolve) => resolve(raw));
    });
    const objects = useEditorStore.getState().document.objects;
    expect(objects).toHaveLength(2);
    expect(
      new Set(objects.filter((o) => o.kind === 'component').map((o) => o.label.text)).size,
    ).toBe(2);
    expect(new Set(objects.map((o) => o.id)).size).toBe(2);
  });
});
