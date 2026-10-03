// @vitest-environment jsdom
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { useEditorStore, STORAGE_KEY } from '../src/store/editorStore';
import { emptyDocument } from '../src/model/demo';
import { deserializeDocument } from '../src/model/serialization';

beforeEach(() => {
  vi.useFakeTimers();
  useEditorStore.setState({
    document: emptyDocument(),
    gestureStart: null,
    storageError: false,
    past: [],
    future: [],
  });
});
afterEach(() => {
  vi.useRealTimers();
  vi.restoreAllMocks();
});
it('warns before closing when the last edit fails to save before the debounce runs', () => {
  vi.stubGlobal('localStorage', {
    getItem: () => null,
    setItem: () => {
      throw new Error('QuotaExceededError');
    },
  });
  useEditorStore.getState().commit({ ...emptyDocument(), title: 'Unsaved final edit' });
  const event = new Event('beforeunload', { cancelable: true });
  window.dispatchEvent(event);
  expect(event.defaultPrevented).toBe(true);
  expect(useEditorStore.getState().storageError).toBe(true);
  expect(useEditorStore.getState().document.title).toBe('Unsaved final edit');
});
it('flushes successful final edits without showing a closing confirmation', () => {
  const save = vi.fn();
  vi.stubGlobal('localStorage', { getItem: () => null, setItem: save });
  useEditorStore.getState().commit({ ...emptyDocument(), title: 'Saved final edit' });
  const event = new Event('beforeunload', { cancelable: true });
  window.dispatchEvent(event);
  expect(event.defaultPrevented).toBe(false);
  expect(save).toHaveBeenCalledWith(STORAGE_KEY, expect.any(String));
  expect(deserializeDocument(save.mock.calls.at(-1)![1]).title).toBe('Saved final edit');
});
it('flushes the committed state when closing during a provisional drag', () => {
  const save = vi.fn();
  vi.stubGlobal('localStorage', { getItem: () => null, setItem: save });
  useEditorStore.getState().beginGesture();
  useEditorStore.getState().preview({ ...emptyDocument(), title: 'Unfinished drag' });
  window.dispatchEvent(new Event('pagehide'));
  expect(deserializeDocument(save.mock.calls.at(-1)![1])).toEqual(emptyDocument());
});
