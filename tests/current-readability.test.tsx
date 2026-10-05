import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { Resvg } from '@resvg/resvg-js';
import {
  createCurrent,
  electricalDrawingGeometry,
  electricalGeometry,
} from '../src/annotations/electrical';
import { ElectricalView } from '../src/circuit/annotations/ElectricalView';
import { createComponent } from '../src/model/catalog';
import { createWire } from '../src/model/factories';
import { emptyDocument } from '../src/model/demo';
import { serializeDocument } from '../src/model/serialization';
import { exportSVG } from '../src/svg/exporter';
import { exportTikz, exportObsidian } from '../src/tikz/exporter';
import { getExportSelection } from '../src/tikz/selection';
import { distance, midpoint, pointsPath, localToWorld, wirePoints } from '../src/utils/geometry';
import type { Point } from '../src/model/types';

function fixture(end: Point = { x: 400, y: 0 }) {
  const wire = createWire({ kind: 'free', point: { x: 0, y: 0 } }, { kind: 'free', point: end });
  const source = { ...emptyDocument(), objects: [wire] };
  const current = createCurrent(wire, { x: end.x / 2, y: end.y / 2 }, source, 'inline');
  current.label.text = '';
  return { wire, current, doc: { ...source, objects: [wire, current] } };
}

describe('legible integrated current without topology changes', () => {
  it.each([
    { x: 400, y: 0 },
    { x: 0, y: 400 },
    { x: -400, y: 0 },
    { x: 0, y: -400 },
  ])('keeps a 36px shaft and 4px gaps at each zoom on %j', (end) => {
    const { wire, current, doc } = fixture(end);
    const original = serializeDocument(doc),
      route = wirePoints(wire, doc);
    for (const zoom of [0.5, 1, 2]) {
      const g = electricalDrawingGeometry(current, doc, zoom);
      expect(g.fallback).toBe(false);
      expect(distance(g.start, g.end) * zoom).toBeCloseTo(36);
      expect(distance(g.mask!.start, g.mask!.end) * zoom).toBeCloseTo(44);
      expect(distance(g.mask!.start, g.start) * zoom).toBeCloseTo(4);
      expect(midpoint(g.start, g.end)).toEqual(midpoint(route[0], route.at(-1)!));
      const reverse = electricalDrawingGeometry({ ...current, reversed: true }, doc, zoom);
      expect(reverse.arrowEnd).toEqual(g.arrowStart);
      expect(reverse.arrowStart).toEqual(g.arrowEnd);
      expect(reverse.mask).toEqual(g.mask);
    }
    expect(serializeDocument(doc)).toBe(original);
    expect(wirePoints(wire, doc)).toEqual(route);
  });

  it('follows an actual diagonal terminal lead and falls back without losing the chosen branch', () => {
    const component = { ...createComponent('resistor', { x: 0, y: 0 }), rotation: 45 as const };
    const point = localToWorld(component, { x: 40, y: 0 });
    const wire = createWire(
      { kind: 'terminal', componentId: component.id, terminalId: 'b' },
      { kind: 'free', point: { x: 160, y: 80 } },
    );
    const source = { ...emptyDocument(), objects: [component, wire] };
    const route = wirePoints(wire, source);
    const current = createCurrent(wire, midpoint(point, route[1]), source, 'inline');
    const doc = { ...source, objects: [...source.objects, current] };
    const original = serializeDocument(doc);
    expect(current.wireSegment?.index).toBe(0);
    for (const zoom of [0.5, 1, 2, 4]) {
      const g = electricalDrawingGeometry(current, doc, zoom);
      expect(g.end.x - g.start.x).toBeCloseTo(g.end.y - g.start.y);
      expect(distance(g.start, g.end) * zoom).toBeCloseTo(36);
      expect(g.fallback).toBe(zoom < 4);
      expect(!!g.mask).toBe(zoom === 4);
    }
    expect(serializeDocument(doc)).toBe(original);
  });

  it('shows white gaps even when the shaft has exactly the wire color', () => {
    const { wire, current, doc } = fixture();
    current.color = wire.color;
    const svg = exportSVG(doc);
    const bounds = /viewBox="([^"]+)"/.exec(svg)![1].split(' ').map(Number);
    const rendered = new Resvg(svg, { fitTo: { mode: 'zoom', value: 4 } }).render();
    const pixel = (x: number, y: number) => {
      const px = Math.round((x - bounds[0]) * 4),
        py = Math.round((y - bounds[1]) * 4);
      const offset = (py * rendered.width + px) * 4;
      return [
        rendered.pixels[offset],
        rendered.pixels[offset + 1],
        rendered.pixels[offset + 2],
      ].map(Number);
    };
    expect(pixel(176, 0).every((v) => v < 80)).toBe(true); // original wire
    expect(pixel(180, 0)).toEqual([255, 255, 255]); // left gap
    expect(pixel(200, 0).every((v) => v < 80)).toBe(true); // visible shaft
    expect(pixel(220, 0)).toEqual([255, 255, 255]); // right gap
    expect(pixel(224, 0).every((v) => v < 80)).toBe(true); // original wire resumes
  });

  it('keeps the full current shape and gaps in both export dialects and selection export', () => {
    const { current, wire, doc } = fixture();
    const drawing = electricalDrawingGeometry(current, doc);
    const svg = exportSVG(doc);
    expect(svg).toContain(`d="${pointsPath([drawing.start, drawing.end])}"`);
    expect(svg).toContain('stroke="white"');
    for (const output of [exportTikz(doc), exportObsidian(doc)]) {
      const annotation = output.split('% Electrical annotation: current')[1];
      expect(annotation).toContain('draw=white');
      expect(annotation).toContain('line cap=butt');
      expect(annotation).toContain('line cap=round,line join=round');
      expect(annotation.match(/\\draw\[/g)).toHaveLength(3);
    }
    const subset = getExportSelection(doc, [wire.id]);
    expect(subset.objects).toHaveLength(2);
    expect(exportSVG(subset).match(/<path /g)).toHaveLength(4);
    const onlyCurrent = getExportSelection(doc, [current.id]);
    expect(onlyCurrent.objects).toHaveLength(1);
    expect(exportSVG(onlyCurrent).match(/<path /g)).toHaveLength(3);
  });

  it('reduces to 28px then uses a readable external fallback on shorter segments', () => {
    for (const length of [48, 40, 16, 1]) {
      const { current, wire, doc } = fixture({ x: length, y: 0 });
      const stored = serializeDocument(doc),
        g = electricalDrawingGeometry(current, doc);
      expect(g.fallback).toBe(length < 48);
      expect(distance(g.start, g.end)).toBeCloseTo(length === 48 ? 28 : 36);
      expect(midpoint(g.start, g.end).y).toBe(length === 48 ? 0 : -16);
      expect(current.currentPlacement).toBe('inline');
      expect(current.wireId).toBe(wire.id);
      expect(serializeDocument(doc)).toBe(stored);
      expect(exportSVG(doc)).not.toContain('NaN');
    }
  });

  it('keeps segment association through resize and restores inline rendering after fallback', () => {
    const { current, wire, doc } = fixture({ x: 200, y: 0 });
    for (const length of [400, 20, 200]) {
      const resized = {
        ...wire,
        endEndpoint: { kind: 'free' as const, point: { x: length, y: 0 } },
      };
      const next = { ...doc, objects: [resized, current] };
      const g = electricalDrawingGeometry(current, next);
      expect(midpoint(g.start, g.end).x).toBe(length / 2);
      expect(g.fallback).toBe(length === 20);
      expect(current.wireSegment).toEqual({ index: 0, ratio: 0.5 });
    }
  });

  it('leaves external arrows unchanged and gives only the annotation a selection highlight', () => {
    const { current, doc } = fixture();
    const external = { ...current, currentPlacement: 'external' as const };
    const logical = electricalGeometry(external, doc),
      drawing = electricalDrawingGeometry(external, doc, 0.5);
    expect(drawing.start).toEqual(logical.start);
    expect(drawing.end).toEqual(logical.end);
    expect(drawing.arrowEnd).toEqual(logical.arrowEnd);
    expect(drawing.strokeWidth).toBe(external.width);
    expect(drawing.mask).toBeNull();
    const markup = renderToStaticMarkup(
      <ElectricalView object={current} doc={doc} selected hideLabel />,
    );
    expect(markup).toContain('selected-symbol');
    expect(markup).toContain('stroke="transparent" stroke-width="20"');
    expect(markup).not.toContain('data-handle');
  });
});
