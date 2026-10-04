// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';
import { catalog } from '../src/model/catalog';
import { emptyDocument } from '../src/model/demo';
import type { CircuitComponent, Point, Rotation, Wire } from '../src/model/types';
import { useEditorStore } from '../src/store/editorStore';
import { localToWorld, resolveEndpoint, wirePoints } from '../src/utils/geometry';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import { exportStandalone } from '../src/tikz/exporter';

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
  vi.stubGlobal('localStorage', { getItem: () => null, setItem: vi.fn() });
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

const canvas = () => screen.getByTestId('circuit-canvas');
function client(point: Point) {
  const values = canvas()
    .querySelector(':scope > g')!
    .getAttribute('transform')!
    .match(/-?\d+(?:\.\d+)?/g)!
    .map(Number);
  return {
    clientX: 200 + values[0] + point.x * values[2],
    clientY: values[1] + point.y * values[2],
    pointerId: 1,
    button: 0,
  };
}
function click(point: Point, target: Element = canvas()) {
  fireEvent.pointerDown(target, client(point));
  fireEvent.pointerUp(canvas(), client(point));
}
function key(value: string, extra = {}) {
  fireEvent.keyDown(canvas(), { key: value, ...extra });
}
function component(id: string): CircuitComponent {
  const value = useEditorStore.getState().document.objects.find((o) => o.id === id);
  if (value?.kind !== 'component') throw new Error('Missing audited component');
  return value;
}

describe('user interaction audit of the complete component library', () => {
  it.each(catalog)(
    '$type: place, select, move, connect every pin, rotate all angles, edit, duplicate/delete, undo/redo',
    (definition) => {
      render(<App />);
      fireEvent.change(screen.getByRole('textbox', { name: 'Cerca componenti' }), {
        target: { value: definition.name },
      });
      fireEvent.click(
        screen.getByRole('button', { name: `Inserisci ${definition.name.toLowerCase()}` }),
      );
      click({ x: 0, y: 0 });
      const placed = useEditorStore.getState().document.objects[0];
      if (placed.kind !== 'component') throw new Error('Palette failed to insert');
      expect(placed.type).toBe(definition.type);
      key('v');
      const hit = canvas().querySelector(`[data-object="${placed.id}"] .object-hit`)!;
      fireEvent.pointerDown(hit, client({ x: 0, y: 0 }));
      fireEvent.pointerMove(canvas(), client({ x: 80, y: 60 }));
      fireEvent.pointerUp(canvas(), client({ x: 80, y: 60 }));
      expect(component(placed.id)).toMatchObject({ x: 80, y: 60 });
      expect(useEditorStore.getState().selection).toEqual([placed.id]);

      key('w');
      for (const terminal of component(placed.id).terminals) {
        const current = component(placed.id);
        const point = localToWorld(current, { x: terminal.localX, y: terminal.localY });
        click(point);
        fireEvent.pointerMove(
          canvas(),
          client({
            x: point.x < current.x ? -200 : 320,
            y: point.y < current.y ? -180 : 300,
          }),
        );
        key('Enter');
        const wire = useEditorStore.getState().document.objects.at(-1);
        expect(wire).toMatchObject({
          kind: 'wire',
          startEndpoint: {
            kind: 'terminal',
            componentId: placed.id,
            terminalId: terminal.id,
          },
        });
      }
      const wires = useEditorStore
        .getState()
        .document.objects.filter((o): o is Wire => o.kind === 'wire');
      expect(wires).toHaveLength(definition.terminals.length);
      key('v');
      click({ x: 80, y: 60 }, canvas().querySelector(`[data-object="${placed.id}"] .object-hit`)!);
      for (const rotation of [0, 90, 180, 270] as Rotation[]) {
        const current = component(placed.id);
        expect(current.rotation).toBe(rotation);
        for (const terminal of current.terminals) {
          const expected = localToWorld(current, { x: terminal.localX, y: terminal.localY });
          const pin = canvas().querySelector(
            `[data-object="${placed.id}"] [data-terminal="${terminal.id}"] circle`,
          )!;
          expect(Number(pin.getAttribute('cx'))).toBe(expected.x);
          expect(Number(pin.getAttribute('cy'))).toBe(expected.y);
          const wire = wires.find(
            (w) =>
              w.startEndpoint.kind === 'terminal' && w.startEndpoint.terminalId === terminal.id,
          )!;
          expect(resolveEndpoint(wire.startEndpoint, useEditorStore.getState().document)).toEqual(
            expected,
          );
          expect(wirePoints(wire, useEditorStore.getState().document)[0]).toEqual(expected);
        }
        key('r');
      }
      expect(component(placed.id).rotation).toBe(0);
      const label = screen.getByRole('textbox', { name: 'Etichetta componente' });
      fireEvent.change(label, { target: { value: 'q_{audit}' } });
      fireEvent.blur(label);
      expect(component(placed.id).label.text).toBe('q_{audit}');
      expect(
        canvas().querySelector(`[data-object="${placed.id}"] .katex-mathml msub > mrow`)!
          .textContent,
      ).toBe('audit');
      expect(screen.queryByRole('combobox', { name: /^Font$/ })).toBeNull();
      const beforeDuplicate = useEditorStore.getState().document;
      key('d', { metaKey: true });
      const duplicateId = useEditorStore.getState().selection[0];
      expect(component(duplicateId)).toMatchObject({
        type: definition.type,
        label: {
          text: 'q_{audit}',
        },
      });
      const duplicated = useEditorStore.getState().document;
      expect(duplicated.objects).toHaveLength(beforeDuplicate.objects.length + 1);
      key('Delete');
      const deleted = useEditorStore.getState().document;
      expect(deleted.objects).toHaveLength(beforeDuplicate.objects.length);
      key('z', { metaKey: true });
      expect(useEditorStore.getState().document).toEqual(duplicated);
      key('z', { metaKey: true, shiftKey: true });
      expect(useEditorStore.getState().document).toEqual(deleted);
      expect(deserializeDocument(serializeDocument(deleted))).toEqual(deleted);
      const code = exportStandalone(deleted);
      expect(code).toContain(`% Component: ${definition.type}`);
      expect(code).toContain('$q_{audit}$');
      expect(code).not.toMatch(/NaN|undefined/);
    },
  );
});
