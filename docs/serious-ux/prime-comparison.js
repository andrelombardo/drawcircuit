import React from 'react';
import { createRoot } from 'react-dom/client';
import 'katex/dist/katex.min.css';
import '../../src/styles.css';
import { MathText } from '../../src/circuit/annotations/MathText';
import { renderLatex, normalizeLatex } from '../../src/math/latex';
import { exportSVG } from '../../src/svg/exporter';
import { exportPNG } from '../../src/png/exporter';
import { exportTikz, exportObsidian } from '../../src/tikz/exporter';

const sources = [
  'A',
  "A'",
  "A''",
  "A'''",
  "A^{'}",
  "A^{''}",
  'A^{\\prime}',
  'A`',
  'A’',
  'A′',
  'A^2',
  'A^{10}',
  'A^n',
  'R_1',
  'V_{AB}',
  'r_{AC}',
];
const rows = document.getElementById('rows');
const results = [];
const downloads = [];
for (const [index, source] of sources.entries()) {
  const row = document.createElement('tr');
  row.dataset.source = source;
  const caption = document.createElement('td');
  caption.textContent = source;
  row.append(caption);
  for (const variant of ['legacy-prime', 'corrected']) {
    const cell = document.createElement('td');
    const host = document.createElement('div');
    host.className = variant;
    cell.append(host);
    row.append(cell);
    createRoot(host).render(
      React.createElement(
        'svg',
        { viewBox: '0 0 130 34' },
        React.createElement(MathText, {
          text: source,
          x: 12,
          y: 17,
          color: '#171a20',
          align: 'start',
          fontSize: 22,
        }),
      ),
    );
  }
  const svgCell = document.createElement('td');
  const pngCell = document.createElement('td');
  row.append(svgCell, pngCell);
  rows.append(row);
  results.push({ source, normalized: normalizeLatex(source), row, svgCell, pngCell, index });
}
// Wait for the real React/MathText layout and font requests, before export measurement.
await new Promise(requestAnimationFrame);
await new Promise(requestAnimationFrame);
await document.fonts.ready;
const context = document.createElement('canvas').getContext('2d');
const metrics = [];
for (const { source, row, svgCell, pngCell, index } of results) {
  const doc = {
    version: 1,
    title: `Prime ${index}`,
    objects: [
      {
        kind: 'text',
        id: `text-${index}`,
        x: 0,
        y: 0,
        text: source,
        color: '#171a20',
        fontSize: 22,
        rotation: 0,
        align: 'start',
      },
    ],
  };
  const svg = exportSVG(doc);
  const root = new DOMParser().parseFromString(svg, 'image/svg+xml').documentElement;
  const viewBox = root.getAttribute('viewBox').split(/\s+/).map(Number);
  root.setAttribute('width', String(viewBox[2]));
  root.setAttribute('height', String(viewBox[3]));
  root.style.width = `${viewBox[2]}px`;
  root.style.height = `${viewBox[3]}px`;
  svgCell.append(document.importNode(root, true));
  const png = await exportPNG(doc);
  const image = document.createElement('img');
  image.src = URL.createObjectURL(png);
  image.width = viewBox[2];
  image.height = viewBox[3];
  image.alt = `PNG ${source}`;
  pngCell.append(image);
  const measure = (selector) => {
    const element = row.querySelector(selector);
    if (!element) return null;
    const css = getComputedStyle(element);
    const text = element.textContent;
    context.font = `${css.fontStyle} ${css.fontWeight} ${css.fontSize} ${css.fontFamily}`;
    const ink = context.measureText(text);
    return {
      text,
      font: css.fontFamily,
      size: parseFloat(css.fontSize),
      inkHeight: ink.actualBoundingBoxAscent + ink.actualBoundingBoxDescent,
      ascent: ink.actualBoundingBoxAscent,
      descent: ink.actualBoundingBoxDescent,
      width: ink.width,
      boxHeight: element.getBoundingClientRect().height,
    };
  };
  metrics.push({
    source,
    normalized: normalizeLatex(source),
    previousPrime: measure('.legacy-prime .math-prime'),
    correctedPrime: measure('.corrected .math-prime'),
    previousScript: measure('.legacy-prime .katex-sizing'),
    correctedScript: measure('.corrected .katex-sizing'),
    vectorPrimes: root.querySelectorAll('[data-math-prime]').length,
    html: renderLatex(source).html,
  });
  downloads.push({ source, svg, tikz: exportTikz(doc), obsidian: exportObsidian(doc) });
}
document.getElementById('metrics').textContent = JSON.stringify({ metrics, downloads }, null, 2);
document.body.dataset.ready = 'true';
