import { writeFileSync } from 'node:fs';
import { createComponent } from '../../src/model/catalog';
import { createJunction, createTextAnnotation, createWire } from '../../src/model/factories';
import type { CircuitDocument, CircuitObject } from '../../src/model/types';
import { deserializeDocument, serializeDocument } from '../../src/model/serialization';
import { wireCrossings } from '../../src/utils/crossings';
import { exportObsidian, exportStandalone } from '../../src/tikz/exporter';
import { exportSVG } from '../../src/svg/exporter';

const objects: CircuitObject[] = [];
const components = Array.from({ length: 200 }, (_, i) =>
  createComponent(
    ['resistor', 'capacitor', 'inductor', 'voltageSource'][i % 4] as 'resistor',
    { x: (i % 20) * 180, y: Math.floor(i / 20) * 180 },
    i + 1,
  ),
);
const junctions = Array.from({ length: 50 }, (_, i) =>
  createJunction({ x: (i % 10) * 340 + 80, y: Math.floor(i / 10) * 340 + 80 }, `N${i}`),
);
objects.push(...components, ...junctions);
components.forEach((component, i) => {
  for (const [index, terminal] of component.terminals.entries())
    objects.push(
      createWire(
        { kind: 'terminal', componentId: component.id, terminalId: terminal.id },
        { kind: 'junction', junctionId: junctions[(i + index * 7) % junctions.length].id },
      ),
    );
});
for (let i = 0; i < 150; i++)
  objects.push(
    createTextAnnotation(
      { x: (i % 20) * 180, y: Math.floor(i / 20) * 180 + 65 },
      i % 5 ? `Nota ${i}` : `V_{${i}}`,
    ),
  );
for (let i = 0; i < 20; i++)
  objects.push({
    kind: 'loop-arrow',
    id: `stress-loop-${i}`,
    x: (i % 10) * 340,
    y: Math.floor(i / 10) * 700 + 200,
    width: 180,
    height: 160,
    direction: 'clockwise',
    arrowPosition: 0.25,
    color: '#df4949',
    strokeWidth: 2,
  });
const doc: CircuitDocument = { version: 1, title: 'RC stress 200C 400W 150T 50J 20L', objects };
const raw = serializeDocument(doc);
const roundtrip = deserializeDocument(raw);
if (JSON.stringify(roundtrip) !== JSON.stringify(doc)) throw Error('Stress roundtrip changed data');
const measure = (fn: () => unknown) => {
  const start = performance.now();
  fn();
  return performance.now() - start;
};
const timings = {
  parseMs: measure(() => deserializeDocument(raw)),
  crossingsFirstMs: measure(() => wireCrossings(doc)),
  crossingsCached1000Ms: measure(() => {
    for (let i = 0; i < 1000; i++) wireCrossings(doc);
  }),
  crossingsNewDocument100Ms: measure(() => {
    for (let i = 0; i < 100; i++) wireCrossings({ ...doc });
  }),
  svgMs: measure(() => exportSVG(doc)),
  standaloneMs: measure(() => exportStandalone(doc)),
  obsidianMs: measure(() => exportObsidian(doc)),
};
writeFileSync('/private/tmp/drawcircuit-rc-stress.json', raw);
writeFileSync(
  'docs/release-candidate/evidence/performance-model.json',
  JSON.stringify(
    {
      environment:
        'Node 26.5.0, model/export benchmark; these are not browser FPS or input latency',
      counts: {
        components: 200,
        wires: 400,
        annotations: 150,
        junctions: 50,
        loops: 20,
        total: objects.length,
      },
      bytes: raw.length,
      crossings: wireCrossings(doc).length,
      timings,
    },
    null,
    2,
  ),
);
