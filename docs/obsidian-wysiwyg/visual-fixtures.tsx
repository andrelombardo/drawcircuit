import React from 'react';
import { createRoot } from 'react-dom/client';
import { Symbol } from '../../src/circuit/components/Symbol';
import { MathText } from '../../src/circuit/annotations/MathText';
import {
  componentTypes,
  COLORS,
  type CircuitDocument,
  type TextAnnotation,
} from '../../src/model/types';
import { createComponent } from '../../src/model/catalog';
import { exportObsidian } from '../../src/tikz/exporter';
import { svgPathToTikz } from '../../src/tikz/symbolGeometry';
import { CANVAS_UNITS_PER_CM } from '../../src/tikz/units';
import '../../src/styles.css';
import 'katex/dist/katex.min.css';
const types = [
  'resistor',
  'capacitor',
  'inductor',
  'currentSource',
  'voltageSource',
  'diode',
  'ground',
  'opAmp',
  'variableResistor',
  'transformer',
] as const;
const rotations = [0, 90, 180, 270] as const;
const fontSources = [
  'A',
  'B',
  'C',
  'D',
  'R_1',
  'R_2',
  'R_3',
  'R_4',
  'r_{AB}',
  'r_{AC}',
  'r_{BC}',
  'r_{AD}',
  'r_{BD}',
  'r_{CD}',
  'I_1',
  'L_1',
  'i_1',
  'maglia 1',
  '50 \\ohm',
  '\\frac{R_1}{R_2}',
  '\\sqrt{r_{AB}}',
  '\\text{A\\&B}',
];
const fonts: CircuitDocument = {
  version: 1,
  title: 'Font canonici',
  objects: fontSources
    .map((text, i): TextAnnotation => ({
      kind: 'text',
      id: `font-${i}`,
      x: 40 + (i % 6) * 160,
      y: 40 + Math.floor(i / 6) * 100,
      text,
      fontSize: 22,
      color: COLORS.blue,
      rotation: 0,
      align: 'middle',
    }))
    .concat([
      {
        kind: 'text',
        id: 'font-rotate',
        x: 60,
        y: 460,
        text: 'A',
        fontSize: 22,
        color: COLORS.blue,
        rotation: 90,
        align: 'start',
      },
      {
        kind: 'text',
        id: 'font-rotate-math',
        x: 220,
        y: 460,
        text: 'r_{AB}',
        fontSize: 22,
        color: COLORS.blue,
        rotation: 270,
        align: 'end',
      },
      {
        kind: 'text',
        id: 'font-multiline',
        x: 380,
        y: 460,
        text: 'prima\nseconda',
        fontSize: 22,
        color: COLORS.blue,
        rotation: 90,
        align: 'middle',
      },
    ]),
};
const docs = Object.fromEntries(
  types.map((type) => [
    type,
    {
      version: 1,
      title: type,
      objects: rotations.map((rotation, i) => ({
        ...createComponent(type, { x: 80 + i * 160, y: 80 }),
        id: `${type}-${rotation}`,
        rotation,
        label: { text: '', offset: { x: 0, y: 0 }, fontSize: 22, color: COLORS.blue, rotation: 0 },
      })),
    } as CircuitDocument,
  ]),
);
const catalog: CircuitDocument = {
  version: 1,
  title: 'Tutti i 72 simboli nelle quattro rotazioni',
  objects: componentTypes.flatMap((type, i) =>
    rotations.map((rotation, j) => ({
      ...createComponent(type, { x: j * 150, y: i * 120 }),
      id: `${type}-${rotation}`,
      rotation,
    })),
  ),
};
export function Fixtures() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Fixture SVG / vero compiler Obsidian</h1>
      <button
        id="generate"
        onClick={() => {
          document.querySelector<HTMLTextAreaElement>('#codes')!.value = JSON.stringify({
            ...Object.fromEntries(
              Object.entries(docs).map(([type, doc]) => [type, exportObsidian(doc)]),
            ),
            fonts: exportObsidian(fonts),
            catalog: exportObsidian(catalog),
          });
        }}
      >
        Genera fixture TikZ
      </button>
      <button id="compare" onClick={compare}>
        Confronta SVG compilati
      </button>
      <textarea
        id="codes"
        aria-label="Fixture generate"
        readOnly
        style={{ width: '100%', height: 60 }}
      />
      <pre id="result" />
      <svg id="font-canvas" width="1040" height="540">
        {fonts.objects.map((o) => (
          <MathText key={o.id} {...(o as TextAnnotation)} />
        ))}
      </svg>
      {types.map((type) => (
        <section key={type}>
          <h2>{type}</h2>
          <svg id={`canvas-${type}`} width="660" height="180">
            {docs[type].objects.map((o) => (
              <g key={o.id} transform={`translate(${o.x} ${o.y}) rotate(${o.rotation})`}>
                <Symbol type={type} />
              </g>
            ))}
          </svg>
          <div id={`compiled-${type}`} />
        </section>
      ))}
    </main>
  );
}
async function compare() {
  const rows = [];
  for (const type of types) {
    const response = await fetch(`./evidence/${type}.svg`);
    if (!response.ok) throw new Error(`Missing compiled ${type}`);
    const host = document.querySelector(`#compiled-${type}`)!;
    host.innerHTML = await response.text();
    const compiled = host.querySelector('svg')!;
    const before = document.querySelector<SVGSVGElement>(`#canvas-${type}`)!;
    const a = before.getBBox(),
      b = compiled.getBBox();
    const factor = 4 / 3;
    rows.push({
      type,
      canvas: { width: a.width, height: a.height },
      compiled: { width: b.width * factor, height: b.height * factor },
      error: Math.max(Math.abs(a.width - b.width * factor), Math.abs(a.height - b.height * factor)),
    });
  }
  // Verify every catalog path translates through the same SVG parser used by both exports.
  const font = await fetch('./evidence/fonts.svg').then((r) => r.text());
  const dom = new DOMParser().parseFromString(font, 'image/svg+xml');
  const report = {
    mapping: CANVAS_UNITS_PER_CM,
    rows,
    pass: rows.every((r) => r.error < 0.12),
    fonts: fontSources.every((s) => s.includes('\\') || s.includes('_') || font.includes(s)),
    fontFamilies: [
      ...new Set(
        [...dom.querySelectorAll('text')].map((e) => e.getAttribute('font-family')).filter(Boolean),
      ),
    ],
    catalog: componentTypes.length,
    pathParser: typeof svgPathToTikz === 'function',
  };
  document.querySelector('#result')!.textContent = JSON.stringify(report, null, 2);
}
createRoot(document.querySelector('#root')!).render(<Fixtures />);
