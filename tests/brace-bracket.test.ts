import { describe, expect, it } from 'vitest';
import { braceGeometry, createBrace, resizeBrace } from '../src/annotations/brace';
import { createComponent } from '../src/model/catalog';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import {
  cloneObjects,
  extractSelection,
  moveSelection,
  rotateObjects,
} from '../src/utils/operations';
import { exportSVG } from '../src/svg/exporter';
import { exportTikz, exportObsidian, exportStandalone } from '../src/tikz/exporter';
import { getExportSelection } from '../src/tikz/selection';
import {
  createPersonalBlock,
  instantiatePersonalBlock,
  parsePersonalBlocks,
  serializePersonalBlocks,
} from '../src/personalBlocks/library';
import { localPersistence } from '../src/utils/localPersistence';
import { svgPathToTikz } from '../src/tikz/symbolGeometry';
import { CANVAS_UNITS_PER_CM, editorToPt } from '../src/tikz/units';
import { contentBounds } from '../src/utils/visualBounds';
import type { BraceAnnotation, CircuitDocument } from '../src/model/types';

const documentOf = (o: BraceAnnotation): CircuitDocument => ({
  version: 1,
  title: 'Rete A',
  objects: [o],
});
describe('native non-electrical grouping annotations', () => {
  it.each(['brace', 'bracket'] as const)(
    'resizes %s without moving the fixed endpoint or flipping a rotated side',
    (type) => {
      for (const end of [
        { x: 180, y: 1 },
        { x: -180, y: 1 },
        { x: 1, y: 180 },
        { x: 1, y: -180 },
      ]) {
        const o = {
          ...createBrace(type, { x: 1, y: 1 }, { x: 180, y: 1 }),
          end,
          side: -1 as const,
        };
        const resized = resizeBrace(o, 'end', { x: 220, y: 220 });
        expect(resized.start).toEqual(o.start);
        expect(resized.side).toBe(-1);
        expect(resized.label.offset).toEqual(o.label.offset);
        expect(resized.start.x === resized.end.x || resized.start.y === resized.end.y).toBe(true);
        const start = resizeBrace(o, 'start', { x: -220, y: -220 });
        expect(start.end).toEqual(o.end);
        expect(
          Math.hypot(start.end.x - start.start.x, start.end.y - start.start.y),
        ).toBeGreaterThanOrEqual(20);
      }
    },
  );
  it.each(['brace', 'bracket'] as const)(
    'infers horizontal and vertical %s including reverse gestures',
    (type) => {
      const h = createBrace(type, { x: 140, y: 40 }, { x: 20, y: 52 });
      const v = createBrace(type, { x: 30, y: 180 }, { x: 35, y: 0 });
      expect(h).toMatchObject({
        start: { x: 20, y: 40 },
        end: { x: 140, y: 40 },
        side: 1,
        label: { text: '' },
      });
      expect(v).toMatchObject({ start: { x: 30, y: 0 }, end: { x: 30, y: 180 } });
      for (const o of [h, v]) {
        const g = braceGeometry(o);
        expect(g.d).not.toMatch(/NaN|undefined/);
        expect(g.points.every((p) => Number.isFinite(p.x) && Number.isFinite(p.y))).toBe(true);
        expect(svgPathToTikz(g.d, (p) => `(${p.x},${p.y})`)).toContain(
          type === 'brace' ? 'controls' : '--',
        );
      }
    },
  );
  it.each(['brace', 'bracket'] as const)('flips %s geometry and label on either axis', (type) => {
    for (const end of [
      { x: 200, y: 0 },
      { x: 0, y: 200 },
    ]) {
      const o = createBrace(type, { x: 0, y: 0 }, end);
      const g = braceGeometry(o),
        flipped = braceGeometry({ ...o, side: -1 });
      expect(g.labelPoint).toEqual({
        x: -flipped.labelPoint.x + end.x,
        y: -flipped.labelPoint.y + end.y,
      });
      expect(flipped.d).not.toEqual(g.d);
    }
  });
  it.each(['brace', 'bracket'] as const)(
    'moves, rotates, copies and duplicates %s without losing label offsets/style',
    (type) => {
      const o = createBrace(type, { x: 0, y: 60 }, { x: 300, y: 60 });
      o.label = {
        ...o.label,
        text: 'R_{eq}',
        offset: { x: 9, y: -3 },
        color: '#2463cb',
        fontSize: 32,
      };
      o.color = '#8855c2';
      o.width = 4;
      const doc = documentOf(o),
        moved = moveSelection(doc, [o.id], { x: 1, y: 10 });
      expect(moved.objects[0]).toMatchObject({
        start: { x: 1, y: 70 },
        end: { x: 301, y: 70 },
        label: o.label,
      });
      const copy = cloneObjects(extractSelection(doc, [o.id]), {
        x: 40,
        y: 40,
      })[0] as BraceAnnotation;
      expect(copy.id).not.toBe(o.id);
      expect(copy.label).toEqual(o.label);
      expect(braceGeometry(copy).labelPoint).toEqual({
        x: braceGeometry(o).labelPoint.x + 40,
        y: braceGeometry(o).labelPoint.y + 40,
      });
      let rotated = doc;
      for (let i = 0; i < 4; i++) rotated = rotateObjects(rotated, [o.id]);
      expect(rotated.objects).toEqual(doc.objects);
    },
  );
  it.each(['brace', 'bracket'] as const)(
    'round-trips %s through JSON and local persistence without a version change',
    (type) => {
      const o = createBrace(type, { x: 0, y: 0 }, { x: 300, y: 0 });
      o.label.text = 'R_{eq}';
      const doc = documentOf(o);
      expect(deserializeDocument(serializeDocument(doc))).toEqual(doc);
      const storage = new Map<string, string>();
      const original = globalThis.localStorage;
      Object.defineProperty(globalThis, 'localStorage', {
        configurable: true,
        value: {
          getItem: (key: string) => storage.get(key) ?? null,
          setItem: (key: string, value: string) => storage.set(key, value),
        },
      });
      try {
        const persistence = localPersistence(
          'brace-test',
          deserializeDocument,
          serializeDocument,
          () => doc,
        );
        persistence.save(doc);
        expect(persistence.load().value).toEqual(doc);
      } finally {
        Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: original });
      }
    },
  );
  it('rejects malformed annotation geometry and styles on import/export', () => {
    const o = createBrace('brace', { x: 0, y: 0 }, { x: 200, y: 0 });
    for (const bad of [
      { ...o, side: 0 },
      { ...o, start: { x: NaN, y: 0 } },
      { ...o, end: { x: 200, y: 30 } },
      { ...o, width: -2 },
    ]) {
      expect(() =>
        deserializeDocument(JSON.stringify(documentOf(bad as BraceAnnotation))),
      ).toThrow();
      expect(exportSVG(documentOf(bad as BraceAnnotation))).not.toContain('<path');
    }
  });
  it.each(['brace', 'bracket'] as const)(
    'exports %s with the same path, label anchor and stroke in SVG/Obsidian/native TikZ',
    (type) => {
      const o = createBrace(type, { x: 10, y: 40 }, { x: 350, y: 40 });
      o.side = -1;
      o.color = '#8855c2';
      o.width = 3;
      o.label.text = 'R_{eq}';
      o.label.offset = { x: 13, y: -8 };
      const doc = documentOf(o),
        g = braceGeometry(o);
      const svg = exportSVG(doc),
        obsidian = exportObsidian(doc),
        tikz = exportTikz(doc);
      expect(svg).toContain(`d="${g.d}"`);
      expect(svg).toContain('stroke="#8855c2" stroke-width="3"');
      const f = (n: number) => Number(n.toFixed(4)).toString();
      expect(svg).toContain(`translate(${f(g.labelPoint.x)} ${f(g.labelPoint.y)})`);
      const path = svgPathToTikz(
        g.d,
        (p) => `(${f(p.x / CANVAS_UNITS_PER_CM)},${f(-p.y / CANVAS_UNITS_PER_CM)})`,
      );
      expect(obsidian).toContain(path);
      expect(obsidian).toContain(`line width=${editorToPt(o.width)}pt`);
      expect(obsidian).toContain('R_{eq}');
      expect(tikz).toContain('R_{eq}');
      expect(exportStandalone(doc)).not.toContain('decorations.pathreplacing');
      expect(svg).not.toMatch(/foreignObject|data-handle|data-layer|selection-box/);
    },
  );
  it('includes a long offset label in selection bounds and all selection exports', () => {
    const o = createBrace('brace', { x: 50, y: 60 }, { x: 350, y: 60 });
    o.label.text = 'Rete equivalente';
    o.label.offset = { x: 250, y: 70 };
    const doc = {
      ...documentOf(o),
      objects: [createComponent('resistor', { x: -300, y: -300 }), o],
    };
    const bounds = contentBounds(o, doc),
      subset = getExportSelection(doc, [o.id]);
    expect(bounds.x + bounds.width).toBeGreaterThan(450);
    expect(subset.objects).toHaveLength(1);
    expect(subset.objects[0].id).toBe(o.id);
    for (const code of [exportSVG(subset), exportTikz(subset), exportObsidian(subset)])
      expect(code).not.toMatch(/Component: resistor/);
  });
  it('keeps braces in personal blocks with relative coordinates, rotation and fresh IDs', () => {
    const c = createComponent('resistor', { x: 0, y: 0 });
    const o = createBrace('brace', { x: -40, y: 60 }, { x: 300, y: 60 });
    o.label.text = 'R_{eq}';
    const doc: CircuitDocument = { ...documentOf(o), objects: [c, o] };
    const block = createPersonalBlock(doc, [c.id, o.id], 'Rete');
    expect(parsePersonalBlocks(serializePersonalBlocks([block]))).toEqual([block]);
    const inserted = instantiatePersonalBlock(block, { x: 500, y: 300 }, 90, doc);
    const brace = inserted.find((o) => o.kind === 'brace')! as BraceAnnotation;
    expect(brace.id).not.toBe(o.id);
    expect(brace.label.text).toBe('R_{eq}');
    expect(brace.start.x).toBe(brace.end.x);
    expect(() => deserializeDocument(JSON.stringify({ ...doc, objects: inserted }))).not.toThrow();
  });
});
