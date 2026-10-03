import { afterEach, expect, it, vi } from 'vitest';
import { localPersistence } from '../src/utils/localPersistence';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import { emptyDocument } from '../src/model/demo';

afterEach(() => vi.restoreAllMocks());
const key = 'drawcircuit.document.v1';
const session = () => localPersistence(key, deserializeDocument, serializeDocument, emptyDocument);
function memoryStorage(initial: [string, string][] = []) {
  const values = new Map(initial);
  const setItem = vi.fn((k: string, v: string) => {
    values.set(k, v);
  });
  vi.stubGlobal('localStorage', { getItem: (k: string) => values.get(k) ?? null, setItem });
  return { values, setItem };
}
it('loads valid saved documents without writing or warning', () => {
  const document = { ...emptyDocument(), title: 'Existing work' };
  const { setItem } = memoryStorage([[key, serializeDocument(document)]]);
  expect(session().load()).toEqual({ value: document, error: '' });
  expect(setItem).not.toHaveBeenCalled();
});
it.each(['{broken-json', '', '{"version":99,"title":"recoverable original","objects":[]}'])(
  'reports unreadable data and preserves the exact original before the next write: %s',
  (original) => {
    const { values, setItem } = memoryStorage([[key, original]]);
    const storage = session();
    const loaded = storage.load();
    expect(loaded.value).toEqual(emptyDocument());
    expect(loaded.error).toMatch(/non leggibile/);
    expect(values.get(key)).toBe(original);
    expect(setItem).not.toHaveBeenCalled();
    const next = { ...emptyDocument(), title: 'New work' };
    storage.save(next);
    expect([...values.entries()].filter(([k]) => k.startsWith(`${key}.recovery.`))).toEqual([
      [expect.any(String), original],
    ]);
    expect(deserializeDocument(values.get(key)!)).toEqual(next);
    expect(setItem.mock.calls[0][0]).toContain('.recovery.');
    expect(setItem.mock.calls[1][0]).toBe(key);
  },
);
it('does not overwrite the original when recovery storage is full, then retries safely', () => {
  const original = '{data with recoverable text';
  const { values, setItem } = memoryStorage([[key, original]]);
  const storage = session();
  storage.load();
  setItem.mockImplementationOnce(() => {
    throw new Error('QuotaExceededError');
  });
  expect(() => storage.save(emptyDocument())).toThrow('QuotaExceededError');
  expect(values.get(key)).toBe(original);
  expect(setItem).toHaveBeenCalledTimes(1);
  storage.save(emptyDocument());
  expect([...values.entries()].some(([k, v]) => k.includes('.recovery.') && v === original)).toBe(
    true,
  );
  expect(deserializeDocument(values.get(key)!)).toEqual(emptyDocument());
});
it('does not overwrite an older recovery from the same timestamp', () => {
  vi.spyOn(Date, 'now').mockReturnValue(12345);
  const { values } = memoryStorage([
    [key, '{new damaged work'],
    [`${key}.recovery.12345`, 'older damaged work'],
  ]);
  const storage = session();
  storage.load();
  storage.save(emptyDocument());
  expect(values.get(`${key}.recovery.12345`)).toBe('older damaged work');
  expect(values.get(`${key}.recovery.12345.1`)).toBe('{new damaged work');
});
it('surfaces inaccessible storage without crashing', () => {
  vi.stubGlobal('localStorage', {
    getItem: () => {
      throw new Error('SecurityError');
    },
    setItem: () => {
      throw new Error('SecurityError');
    },
  });
  const storage = session();
  expect(storage.load()).toEqual({
    value: emptyDocument(),
    error: expect.stringContaining('non disponibile'),
  });
  expect(() => storage.save(emptyDocument())).toThrow('SecurityError');
});
it('keeps recovery available when the main save fails after a successful backup', () => {
  const { values, setItem } = memoryStorage([[key, '{original']]);
  const storage = session();
  storage.load();
  setItem.mockImplementation((k, v) => {
    if (k === key) throw new Error('quota');
    values.set(k, v);
  });
  expect(() => storage.save(emptyDocument())).toThrow('quota');
  expect(values.get(key)).toBe('{original');
  expect(
    [...values.entries()].some(([k, v]) => k.includes('.recovery.') && v === '{original'),
  ).toBe(true);
});
