import { italian } from './it';

/** Translate complete messages; keep interpolation independent of word order. */
export function t(message: string, values: Record<string, string | number> = {}): string {
  const text = italian[message] ?? message;
  return text.replace(/\{(\w+)\}/g, (match, name: string) =>
    Object.hasOwn(values, name) ? String(values[name]) : match,
  );
}

const normalizeSearch = (text: string) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

/** Catalog metadata and translations are fixed; normalize each item only once. */
export function createSearchMatcher<T extends object>(messages: (item: T) => string[]) {
  const index = new WeakMap<T, string>();
  return (item: T, search: string): boolean => {
    const query = normalizeSearch(search.trim());
    if (!query) return true;
    let text = index.get(item);
    if (text === undefined) {
      text = normalizeSearch(messages(item).flatMap((message) => [message, italian[message] ?? '']).join(' '));
      index.set(item, text);
    }
    return text.includes(query);
  };
}
