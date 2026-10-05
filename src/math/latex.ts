import katex from 'katex';

const primeCharacter = /['‘’′]/u;
const barePrimeSource = /^[A-Za-z\u0370-\u03ff]['‘’′]+$/u;
export const isMathSource = (source: string): boolean =>
  /[_^\\$\u0370-\u03ff]/u.test(source) || barePrimeSource.test(source.trim());

/** Return the end of a TeX group without interpreting or rewriting its contents. */
function groupEnd(source: string, start: number): number {
  let depth = 0;
  for (let i = start; i < source.length; i++) {
    if (source[i] === '\\') i++;
    else if (source[i] === '{') depth++;
    else if (source[i] === '}' && --depth === 0) return i + 1;
  }
  return source.length;
}

const textCommands = new Set([
  'text',
  'textrm',
  'textnormal',
  'textbf',
  'textit',
  'textsf',
  'texttt',
  'textsc',
  'textup',
  'textmd',
  'textsl',
  'mbox',
  'operatorname',
  'url',
  'href',
]);

/** Only math primes change: TeX prose arguments and all other script sizes stay intact. */
function normalizePrimes(source: string): string {
  let result = '';
  for (let i = 0; i < source.length;) {
    if (source[i] === '\\') {
      const command = /^\\([a-zA-Z]+|.)/u.exec(source.slice(i));
      if (command) {
        let end = i + command[0].length;
        if (textCommands.has(command[1])) {
          if (source[end] === '*') end++;
          const argumentsCount = command[1] === 'href' ? 2 : 1;
          for (let argument = 0; argument < argumentsCount; argument++) {
            while (/\s/u.test(source[end] ?? '') && end < source.length) end++;
            end = source[end] === '{' ? groupEnd(source, end) : Math.min(end + 1, source.length);
          }
        } else if (command[1] === 'verb') {
          if (source[end] === '*') end++;
          const close = source.indexOf(source[end], end + 1);
          end = close < 0 ? source.length : close + 1;
        }
        result += source.slice(i, end);
        i = end;
        continue;
      }
    }
    if (source[i] === '^' || source[i] === '_') {
      let start = i + 1;
      while (/\s/u.test(source[start] ?? '') && start < source.length) start++;
      let end = start;
      let primes = '';
      if (source[start] === '{') {
        end = groupEnd(source, start);
        const argument = source.slice(start + 1, end - 1);
        if (source[end - 1] === '}' && /^(?:['‘’′]|\\prime(?![a-zA-Z])|\s)+$/u.test(argument))
          primes = argument;
      } else {
        while (primeCharacter.test(source[end] ?? '') && end < source.length) end++;
        primes = source.slice(start, end);
      }
      if (primeCharacter.test(primes)) {
        const normalized = primes.replace(/['‘’′]/gu, '\\prime');
        result += `${source.slice(i, start)}{${normalized}}`;
        i = end;
        continue;
      }
    }
    // Outside a prime-only script, keep native TeX shorthand so combined scripts
    // such as A'_1 and A'^{2} retain KaTeX's own parsing and positioning.
    result += /[‘’′]/u.test(source[i]) ? "'" : source[i];
    i++;
  }
  return result;
}

/** Rendering/export normalization never changes the stored user source. */
export const normalizeLatex = (source: string, forceMath = false): string => {
  const aliases = source.replace(/\\ohm(?![a-zA-Z])/g, '\\Omega');
  return primeCharacter.test(aliases) && (forceMath || isMathSource(source))
    ? normalizePrimes(aliases)
    : aliases;
};
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
      html: katex.renderToString(mathContent(normalizeLatex(source, forceMath)), {
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
