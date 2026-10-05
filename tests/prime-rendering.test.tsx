// @vitest-environment jsdom
import katex from 'katex';
import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MathText } from '../src/circuit/annotations/MathText';
import { isMathSource, normalizeLatex, renderLatex } from '../src/math/latex';
import { createComponent } from '../src/model/catalog';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import { exportObsidian, exportTikz, texText } from '../src/tikz/exporter';

function mathHTML(source: string) {
  const result = renderLatex(source);
  expect(result.kind).toBe('math');
  const host = document.createElement('div');
  host.innerHTML = result.html!;
  return host.querySelector('.katex-html')!;
}

describe('semantic math primes without changes to other typography', () => {
  const primes = [
    ["A'", 'A^{\\prime}'],
    ["A''", 'A^{\\prime\\prime}'],
    ["A'''", 'A^{\\prime\\prime\\prime}'],
    ["A^{'}", 'A^{\\prime}'],
    ["A^{''}", 'A^{\\prime\\prime}'],
    ["A^{'''}", 'A^{\\prime\\prime\\prime}'],
    ['A^{’}', 'A^{\\prime}'],
    ['A^{‘}', 'A^{\\prime}'],
    ['A^{′}', 'A^{\\prime}'],
    ['A^`', 'A^{\\prime}'],
    ['A^{`}', 'A^{\\prime}'],
    ['A^{``}', 'A^{\\prime\\prime}'],
    ['A^{```}', 'A^{\\prime\\prime\\prime}'],
    ['A^``', 'A^{\\prime\\prime}'],
    ['A’', 'A^{\\prime}'],
    ['A‘', 'A^{\\prime}'],
    ['A′', 'A^{\\prime}'],
    ['A’’', 'A^{\\prime\\prime}'],
    ['A^{\\prime}', 'A^{\\prime}'],
    ["A^'", 'A^{\\prime}'],
    ["A_{'}", 'A_{\\prime}'],
  ];

  it.each(primes)(
    '%s has the exact glyph layout of %s, preserving the source',
    (source, canonical) => {
      const result = renderLatex(source);
      expect(result.source).toBe(source);
      expect(mathHTML(source).innerHTML).toBe(mathHTML(canonical).innerHTML);
      expect(mathHTML(source).querySelectorAll('.katex-sizing')).toHaveLength(1);
      expect(result.html).not.toContain('reset-size3 size1');
      const markup = document.createElement('div');
      markup.innerHTML = renderToStaticMarkup(<MathText text={source} color="#171a20" />);
      expect(markup.querySelector('[data-source]')?.getAttribute('data-source')).toBe(source);
    },
  );

  it.each([
    'A_1',
    'A^2',
    'A^{10}',
    'A^n',
    'A^{AB}',
    'x^{10}',
    'V_{AB}',
    'r_{AC}',
    '\\Delta V',
    '50\\,\\Omega',
  ])('%s keeps byte-identical KaTeX layout to the previous renderer', (source) => {
    expect(normalizeLatex(source)).toBe(source);
    expect(renderLatex(source).html).toBe(
      katex.renderToString(source, {
        output: 'htmlAndMathml',
        throwOnError: true,
        trust: false,
        strict: 'ignore',
        maxExpand: 1000,
        maxSize: 20,
      }),
    );
  });

  it.each([
    'A',
    'usa `questo`',
    'A`',
    "l'amico",
    'l’amico',
    "Don't alter A' in prose",
    'L’unità',
    '‘A’',
  ])('%s remains plain text with its original apostrophes', (source) => {
    expect(isMathSource(source)).toBe(false);
    expect(normalizeLatex(source)).toBe(source);
    expect(renderLatex(source)).toEqual({ kind: 'plain', source });
  });

  it.each([
    "\\text{l’amico e A^{'}} + x^2",
    "\\textbf{{Don't} say ‘A’}_1",
    '\\operatorname{d’Alembert}_1',
    "\\verb|A^{'}|",
    '\\text{usa `questo` e A^{`}} + x^2',
    '\\verb|A^{`}|',
  ])('preserves text-command and literal arguments: %s', (source) => {
    expect(normalizeLatex(source)).toBe(source);
  });

  it('limits grave normalization to prime-only superscripts, including mixed prime variants', () => {
    expect(normalizeLatex('A^{`’\\prime}')).toBe('A^{\\prime\\prime\\prime}');
    for (const source of ['A_{`}', 'A^{2`}', 'A + `', 'A^{\\`}', 'A^{`'])
      expect(normalizeLatex(source)).toBe(source);
  });

  it('retains native shorthand parsing when a prime is combined with other scripts', () => {
    expect(normalizeLatex('A’_1 + A′^{2}')).toBe("A'_1 + A'^{2}");
    expect(renderLatex('A’_1 + A′^{2}').html).toBe(renderLatex("A'_1 + A'^{2}").html);
  });

  it('does not repair malformed prime scripts or change the source on failure', () => {
    for (const source of ["A^{''", "A_{'"]) {
      expect(normalizeLatex(source)).toBe(source);
      expect(renderLatex(source)).toEqual({ kind: 'invalid', source });
    }
  });

  it('uses the same semantic primes in TikZ/Obsidian and preserves stored document text', () => {
    const component = createComponent('resistor', { x: 0, y: 0 });
    component.label.text = 'A^{`}';
    const doc = { version: 1 as const, title: 'Prime', objects: [component] };
    const stored = serializeDocument(doc);
    expect(texText(component.label.text)).toBe('$A^{\\prime}$');
    expect(exportTikz(doc)).toContain('$A^{\\prime}$');
    expect(exportObsidian(doc)).toContain('$A^{\\prime}$');
    expect(texText('AB’', true)).toBe("$AB'$");
    expect(serializeDocument(doc)).toBe(stored);
    expect(deserializeDocument(stored).objects[0]).toMatchObject({ label: { text: 'A^{`}' } });
  });
});
