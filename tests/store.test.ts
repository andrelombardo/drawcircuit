import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { STORAGE_KEY, useEditorStore } from '../src/store/editorStore';
import { createComponent } from '../src/model/catalog';
import { emptyDocument } from '../src/model/demo';
beforeEach(() => {
  vi.stubGlobal('localStorage', { getItem: () => null, setItem: () => {} });
  useEditorStore.setState({
    document: emptyDocument(),
    selection: [],
    past: [],
    future: [],
    gestureStart: null,
  });
});
afterEach(() => vi.useRealTimers());
describe('history and gestures', () => {
  it('cancels an unfinished gesture with Undo without undoing the preceding edit', () => {
    const s = useEditorStore.getState();
    s.add([createComponent('resistor', { x: 0, y: 0 })]);
    const before = useEditorStore.getState().document;
    s.beginGesture();
    s.preview({ ...before, title: 'provisional' });
    s.undo();
    expect(useEditorStore.getState().document).toBe(before);
    expect(useEditorStore.getState().past).toHaveLength(1);
  });
  it('does not autosave previews and saves on gesture completion even when document identity is unchanged', () => {
    vi.useFakeTimers();
    const save = vi.fn();
    vi.stubGlobal('localStorage', { getItem: () => null, setItem: save });
    const s = useEditorStore.getState();
    s.beginGesture();
    s.preview({ ...s.document, title: 'final drag' });
    vi.advanceTimersByTime(1000);
    expect(save).not.toHaveBeenCalled();
    s.endGesture();
    vi.advanceTimersByTime(400);
    expect(save).toHaveBeenCalledWith(STORAGE_KEY, expect.stringContaining('final drag'));
  });
  it('autosaves the original topology when provisional insertion is cancelled', () => {
    vi.useFakeTimers();
    const save = vi.fn();
    vi.stubGlobal('localStorage', { getItem: () => null, setItem: save });
    const s = useEditorStore.getState();
    s.beginGesture();
    s.preview({ ...s.document, title: 'do not persist' });
    s.cancelGesture();
    vi.advanceTimersByTime(400);
    expect(save).toHaveBeenCalledWith(STORAGE_KEY, expect.not.stringContaining('do not persist'));
  });
  it('undoes and redoes insertion', () => {
    const s = useEditorStore.getState();
    s.add([createComponent('resistor', { x: 0, y: 0 })]);
    s.undo();
    expect(useEditorStore.getState().document.objects).toHaveLength(0);
    s.redo();
    expect(useEditorStore.getState().document.objects).toHaveLength(1);
  });
  it('records a long drag as one history entry', () => {
    const s = useEditorStore.getState();
    s.add([createComponent('resistor', { x: 0, y: 0 })]);
    const initial = useEditorStore.getState().document;
    s.beginGesture();
    for (let x = 20; x <= 400; x += 20)
      s.preview({
        ...initial,
        objects: initial.objects.map((o) => (o.kind === 'component' ? { ...o, x } : o)),
      });
    s.endGesture();
    expect(useEditorStore.getState().past).toHaveLength(2);
    s.undo();
    expect(useEditorStore.getState().document).toEqual(initial);
  });
  it('cancels a gesture without changing history', () => {
    const s = useEditorStore.getState();
    s.beginGesture();
    s.preview({ ...s.document, title: 'preview' });
    s.cancelGesture();
    expect(useEditorStore.getState().document.title).toBe('Circuito senza titolo');
    expect(useEditorStore.getState().past).toHaveLength(0);
  });
  it('clears redo when a new edit follows undo', () => {
    const s = useEditorStore.getState();
    s.add([createComponent('resistor', { x: 0, y: 0 })]);
    s.undo();
    s.add([createComponent('capacitor', { x: 20, y: 20 })]);
    expect(useEditorStore.getState().future).toHaveLength(0);
  });
});
