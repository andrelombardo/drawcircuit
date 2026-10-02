// @vitest-environment jsdom
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { PwaStatus } from '../src/pwa/PwaStatus';
import { useEditorStore } from '../src/store/editorStore';
import { emptyDocument } from '../src/model/demo';
import { createComponent } from '../src/model/catalog';
import { deserializeDocument } from '../src/model/serialization';
const mocks = vi.hoisted(() => ({
  update: vi.fn().mockResolvedValue(undefined),
  register: vi.fn(),
}));
vi.mock('virtual:pwa-register', () => ({ registerSW: mocks.register }));
let needRefresh: () => void;
beforeEach(() => {
  vi.stubEnv('PROD', true);
  Object.defineProperty(navigator, 'serviceWorker', { configurable: true, value: {} });
  useEditorStore.setState({
    document: { ...emptyDocument(), objects: [createComponent('resistor', { x: 0, y: 0 }, 1)] },
    gestureStart: null,
    notice: '',
    past: [],
    future: [],
  });
  mocks.update.mockClear();
  mocks.register.mockImplementation((options: { onNeedRefresh: () => void }) => {
    needRefresh = options.onNeedRefresh;
    return mocks.update;
  });
  vi.stubGlobal('localStorage', { getItem: () => null, setItem: vi.fn() });
});
afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});
async function offer() {
  render(<PwaStatus />);
  await waitFor(() => expect(mocks.register).toHaveBeenCalled());
  act(() => needRefresh());
}
it('registers the production worker and waits for explicit approval instead of reloading', async () => {
  await offer();
  expect(screen.getByText('È disponibile una nuova versione.')).toBeTruthy();
  expect(mocks.update).not.toHaveBeenCalled();
  fireEvent.click(screen.getByRole('button', { name: 'Più tardi' }));
  expect(screen.queryByRole('button', { name: 'Salva e aggiorna' })).toBeNull();
  expect(mocks.update).not.toHaveBeenCalled();
});
it('saves the exact document before activating the waiting worker', async () => {
  const saved = vi.fn();
  vi.stubGlobal('localStorage', { getItem: () => null, setItem: saved });
  await offer();
  await act(async () => fireEvent.click(screen.getByRole('button', { name: 'Salva e aggiorna' })));
  expect(deserializeDocument(saved.mock.calls[0][1])).toEqual(useEditorStore.getState().document);
  expect(mocks.update).toHaveBeenCalledWith(true);
  expect(saved.mock.invocationCallOrder[0]).toBeLessThan(mocks.update.mock.invocationCallOrder[0]);
});
it('refuses updates during gestures or inline editing', async () => {
  await offer();
  act(() => useEditorStore.getState().beginGesture());
  fireEvent.click(screen.getByRole('button', { name: 'Salva e aggiorna' }));
  expect(mocks.update).not.toHaveBeenCalled();
  act(() => useEditorStore.getState().cancelGesture());
  const editor = document.createElement('form');
  editor.className = 'inline-editor';
  document.body.append(editor);
  fireEvent.click(screen.getByRole('button', { name: 'Salva e aggiorna' }));
  expect(mocks.update).not.toHaveBeenCalled();
  editor.remove();
});
it('keeps the app open and asks for JSON when local saving fails', async () => {
  vi.stubGlobal('localStorage', {
    getItem: () => null,
    setItem: () => {
      throw Error('quota');
    },
  });
  await offer();
  fireEvent.click(screen.getByRole('button', { name: 'Salva e aggiorna' }));
  expect(mocks.update).not.toHaveBeenCalled();
  expect(useEditorStore.getState().notice).toContain('JSON');
});
