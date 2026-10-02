import katex from 'katex';

/** Editor aliases only: no parsing or reconstruction of the user's TeX. */
export const normalizeLatex = (source: string): string =>
  source.replace(/\\ohm(?![a-zA-Z])/g, '\\Omega');
export const isMathSource = (source: string): boolean => /[_^\\$\u0370-\u03ff]/u.test(source);
export const mathContent = (source: string): string =>
  source.startsWith('$') && source.endsWith('$') && source.length > 1
    ? source.slice(1, -1)
    : source;
export type LatexResult =
  | { kind: 'plain' | 'invalid'; source: string; html?: undefined }
  | { kind: 'math'; source: string; html: string };
const cache = new Map<string, LatexResult>();
/** KaTeX is the single math engine for canvas, live preview and export validation. */
export function renderLatex(source: string, forceMath = false): LatexResult {
  if (!forceMath && !isMathSource(source)) return { kind: 'plain', source };
  const key = `${forceMath}:${source}`;
  const cached = cache.get(key);
  if (cached) return cached;
  let result: LatexResult;
  try {
    result = {
      kind: 'math',
      source,
      html: katex.renderToString(mathContent(normalizeLatex(source)), {
        output: 'htmlAndMathml',
        throwOnError: true,
        trust: false,
        strict: 'ignore',
        maxExpand: 1000,
        maxSize: 20,
      }),
    };
  } catch {
    result = { kind: 'invalid', source };
  }
  if (cache.size >= 256) cache.delete(cache.keys().next().value!);
  cache.set(key, result);
  return result;
}
