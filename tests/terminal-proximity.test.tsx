// @vitest-environment jsdom
import { useRef } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Canvas } from '../src/components/editor/Canvas';
import {
  useTerminalProximity,
  TERMINAL_RELEASE_MS,
} from '../src/components/editor/useTerminalProximity';
import { componentRegistry, createComponent } from '../src/model/catalog';
import type { CircuitDocument, Viewport } from '../src/model/types';
import { PlacementIndex } from '../src/smartPlacement/spatialIndex';
import { useEditorStore } from '../src/store/editorStore';

const initialViewport: Viewport = { x: 200, y: 200, zoom: 1 };
const component = { ...createComponent('resistor', { x: 0, y: 0 }), id: 'resistor' };
const doc: CircuitDocument = { version: 1, title: 'Terminal proximity', objects: [component] };
const bounds = componentRegistry.resistor.bounds;
const pointer = { clientX: 200 + bounds.x + bounds.width + 20, clientY: 200 };
function Harness({
  document = doc,
  viewport = initialViewport,
  enabled = true,
}: {
  document?: CircuitDocument;
  viewport?: Viewport;
  enabled?: boolean;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const proximity = useTerminalProximity(ref, document, viewport, enabled);
  return (
    <svg
      ref={ref}
      data-testid="proximity"
      onPointerMove={proximity.move}
      onPointerLeave={proximity.leave}
    >
      <text data-testid="nearby">{proximity.ids.join(',')}</text>
    </svg>
  );
}
const nearby = () => screen.getByTestId('nearby').textContent;
const release = () => act(() => vi.advanceTimersByTime(TERMINAL_RELEASE_MS));
beforeEach(() => {
  vi.useFakeTimers();
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
  useEditorStore.setState({
    document: doc,
    selection: [],
    activeLabel: null,
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
  vi.useRealTimers();
});

describe('terminal proximity after geometry changes beneath a stationary pointer', () => {
  it('recalculates on zoom and pan without a pointer event', () => {
    const view = render(<Harness />);
    fireEvent.pointerMove(screen.getByTestId('proximity'), pointer);
    expect(nearby()).toBe('resistor');
    view.rerender(<Harness viewport={{ ...initialViewport, zoom: 0.5 }} />);
    release();
    expect(nearby()).toBe('');
    view.rerender(<Harness viewport={{ ...initialViewport, zoom: 2 }} />);
    expect(nearby()).toBe('resistor');
    view.rerender(<Harness viewport={{ ...initialViewport, x: 900 }} />);
    release();
    expect(nearby()).toBe('');
  });

  it('recalculates when a body moves or undo restores the document', () => {
    const view = render(<Harness />);
    fireEvent.pointerMove(screen.getByTestId('proximity'), pointer);
    expect(nearby()).toBe('resistor');
    const moved = { ...doc, objects: [{ ...component, x: 900 }] };
    view.rerender(<Harness document={moved} />);
    release();
    expect(nearby()).toBe('');
    view.rerender(<Harness document={doc} />);
    expect(nearby()).toBe('resistor');
  });

  it.each(['leave', 'blur'])(
    'forgets the pointer after %s instead of restoring stale hover on zoom',
    (event) => {
      const view = render(<Harness />);
      fireEvent.pointerMove(screen.getByTestId('proximity'), pointer);
      if (event === 'leave') fireEvent.pointerLeave(screen.getByTestId('proximity'));
      else fireEvent.blur(window);
      release();
      expect(nearby()).toBe('');
      view.rerender(<Harness viewport={{ ...initialViewport, zoom: 2 }} />);
      expect(nearby()).toBe('');
    },
  );

  it('skips spatial queries during gestures and uses the latest pointer after re-enabling', () => {
    const query = vi.spyOn(PlacementIndex.prototype, 'nearbyComponents');
    const view = render(<Harness enabled={false} />);
    fireEvent.pointerMove(screen.getByTestId('proximity'), { clientX: 1100, clientY: 200 });
    for (let i = 0; i < 10; i++)
      view.rerender(<Harness document={{ ...doc, title: `${i}` }} enabled={false} />);
    expect(query).not.toHaveBeenCalled();
    fireEvent.pointerMove(screen.getByTestId('proximity'), pointer);
    view.rerender(<Harness />);
    expect(query).toHaveBeenCalledTimes(1);
    expect(nearby()).toBe('resistor');
  });
});

describe('canvas proximity work is suspended when existing handles suffice', () => {
  it.each(['wire', 'junction', 'voltage', 'capacitor'] as const)(
    'skips hover queries during %s and recalculates when returning to select',
    (tool) => {
      const query = vi.spyOn(PlacementIndex.prototype, 'nearbyComponents');
      render(<Canvas />);
      act(() => useEditorStore.getState().setTool(tool));
      fireEvent.pointerMove(screen.getByTestId('circuit-canvas'), { clientX: 20, clientY: 20 });
      expect(query).not.toHaveBeenCalled();
      act(() => useEditorStore.getState().setTool('select'));
      expect(query).toHaveBeenCalledTimes(1);
    },
  );

  it('skips index rebuilding for document previews until a drag/nudge gesture ends', () => {
    const query = vi.spyOn(PlacementIndex.prototype, 'nearbyComponents');
    render(<Canvas />);
    fireEvent.pointerMove(screen.getByTestId('circuit-canvas'), { clientX: 20, clientY: 20 });
    query.mockClear();
    act(() => useEditorStore.getState().beginGesture());
    for (let i = 0; i < 10; i++)
      act(() =>
        useEditorStore.getState().preview({
          ...doc,
          objects: [{ ...component, x: i * 10 }],
        }),
      );
    fireEvent.pointerMove(screen.getByTestId('circuit-canvas'), { clientX: 30, clientY: 20 });
    expect(query).not.toHaveBeenCalled();
    act(() => useEditorStore.getState().endGesture());
    expect(query).toHaveBeenCalledTimes(1);
  });
});
