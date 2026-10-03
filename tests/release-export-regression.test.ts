// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { canvasTextLayout } from '../src/tikz/canvasText';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ExportDialog } from '../src/components/toolbar/ExportDialog';
import { useEditorStore } from '../src/store/editorStore';
import { emptyDocument } from '../src/model/demo';
import { createElement } from 'react';

const rect = {
  x: 0,
  y: 0,
  left: 0,
  top: 0,
  right: 80,
  bottom: 32,
  width: 80,
  height: 32,
  toJSON: () => ({}),
};
beforeEach(() => {
  Object.defineProperty(SVGGraphicsElement.prototype, 'getBBox', {
    configurable: true,
    value: () => rect,
  });
  Object.defineProperty(Range.prototype, 'getBoundingClientRect', {
    configurable: true,
    value: () => rect,
  });
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue(rect);
  vi.spyOn(HTMLElement.prototype, 'offsetWidth', 'get').mockReturnValue(80);
  vi.spyOn(HTMLElement.prototype, 'offsetHeight', 'get').mockReturnValue(32);
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
    measureText: () => ({ fontBoundingBoxDescent: 4 }),
  } as unknown as CanvasRenderingContext2D);
  const css = document.createElement('style');
  css.id = 'export-regression-css';
  css.textContent =
    '.katex * { font-size: 22px; color: inherit; } .frac-line { border-bottom: 1px solid; }';
  document.head.append(css);
});
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  Reflect.deleteProperty(SVGGraphicsElement.prototype, 'getBBox');
  Reflect.deleteProperty(Range.prototype, 'getBoundingClientRect');
  document.getElementById('export-regression-css')?.remove();
});

describe('release export fidelity regressions', () => {
  it('selects SVG source for manual copying when the clipboard rejects access', async () => {
    useEditorStore.setState({ document: emptyDocument(), selection: [] });
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error('Permission denied')) },
    });
    render(createElement(ExportDialog, { onClose: () => {} }));
    fireEvent.click(screen.getByRole('button', { name: 'SVG' }));
    fireEvent.click(screen.getByRole('button', { name: 'Copia codice SVG' }));
    await waitFor(() => expect(screen.getByText(/Codice selezionato/)).toBeTruthy());
    const textarea = screen.getByRole('textbox', {
      name: 'Codice SVG generato',
    }) as HTMLTextAreaElement;
    expect(textarea.value).toContain('<svg');
    expect(textarea.selectionStart).toBe(0);
    expect(textarea.selectionEnd).toBe(textarea.value.length);
    expect(screen.queryByRole('button', { name: 'SVG copiato' })).toBeNull();
  });
  it.each(['red', '#171a20', '#00ff00'])('preserves explicit LaTeX glyph color %s', (color) => {
    const result = canvasTextLayout(`\\color{${color}}{R_1}`, 22);
    expect(result).not.toBeNull();
    const svg = new DOMParser().parseFromString(`<svg>${result!.svg}</svg>`, 'image/svg+xml');
    const glyphs = [...svg.querySelectorAll('text')];
    expect(glyphs.map((text) => text.textContent)).toEqual(['R', '1']);
    expect(glyphs.every((text) => text.getAttribute('fill')?.startsWith('rgb('))).toBe(true);
    expect(glyphs[0].getAttribute('fill')).toBe(glyphs[1].getAttribute('fill'));
  });
  it('keeps uncolored glyphs inheriting the user-selected label color', () => {
    expect(canvasTextLayout('R_1', 22)?.svg).not.toContain(' fill=');
  });
  it('preserves color on fractions and radical SVG geometry', () => {
    const result = canvasTextLayout('\\color{red}{\\frac{R_1}{R_2}+\\sqrt{R_1}}', 22);
    const svg = new DOMParser().parseFromString(`<svg>${result!.svg}</svg>`, 'image/svg+xml');
    expect(svg.querySelector('rect')?.getAttribute('fill')).toBe('rgb(255, 0, 0)');
    expect(svg.querySelector('path')?.getAttribute('fill')).toBe('rgb(255, 0, 0)');
  });
});
