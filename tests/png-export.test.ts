// @vitest-environment jsdom
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import { Resvg } from '@resvg/resvg-js';
import {
  copyPNG,
  embedSVGFonts,
  exportPNG,
  pngDimensions,
  rasterizeSVG,
} from '../src/png/exporter';
import { exportSVG } from '../src/svg/exporter';
import { createBrace, braceGeometry } from '../src/annotations/brace';
import { createElectrical } from '../src/annotations/electrical';
import { createComponent } from '../src/model/catalog';
import { createJunction, createTextAnnotation, createWire } from '../src/model/factories';
import { getExportSelection } from '../src/tikz/selection';
import type { CircuitDocument } from '../src/model/types';

function fixture(): CircuitDocument {
  const resistor = createComponent('resistor', { x: 100, y: 100 });
  resistor.label.text = 'R_{eq}';
  const brace = createBrace('brace', { x: 30, y: 160 }, { x: 190, y: 160 });
  brace.label.text = 'Rete A';
  const bracket = createBrace('bracket', { x: 250, y: 60 }, { x: 250, y: 200 });
  bracket.color = '#8855c2';
  const line = (a: number[], b: number[]) =>
    createWire(
      { kind: 'free', point: { x: a[0], y: a[1] } },
      { kind: 'free', point: { x: b[0], y: b[1] } },
    );
  return {
    version: 1,
    title: 'PNG completo',
    objects: [
      resistor,
      createJunction({ x: 20, y: 100 }, 'A'),
      brace,
      bracket,
      createTextAnnotation({ x: 300, y: 100 }, 'LaTeX: \\frac{V}{R}'),
      line([20, 100], [20, 250]),
      line([-40, 220], [80, 220]),
      {
        kind: 'arrow',
        id: 'arrow',
        type: 'straight',
        start: { x: 100, y: 250 },
        end: { x: 200, y: 250 },
        controlPoints: [
          { x: 0, y: 0 },
          { x: 0, y: 0 },
        ],
        color: '#2463cb',
        width: 3,
        reversed: false,
      },
      {
        kind: 'loop-arrow',
        id: 'loop',
        x: 310,
        y: 150,
        width: 100,
        height: 80,
        direction: 'clockwise',
        arrowPosition: 0.125,
        color: '#269978',
        strokeWidth: 2,
      },
      createElectrical('current', { x: 80, y: 60 }, { x: 130, y: 60 }, 'i_1'),
      createElectrical('voltage', { x: 350, y: 40 }, { x: 450, y: 40 }, 'V_{AB}'),
    ],
  };
}
let rasterSource = '';
let imageURL = '';
const urls = new Map<string, Blob>();
beforeEach(() => {
  rasterSource = '';
  imageURL = '';
  urls.clear();
  vi.stubGlobal(
    'Image',
    class {
      onload?: () => void;
      set src(url: string) {
        imageURL = url;
        queueMicrotask(() => this.onload?.());
      }
    },
  );
  vi.stubGlobal('URL', {
    createObjectURL: vi.fn((blob: Blob) => {
      const url = `blob:png-${urls.size}`;
      urls.set(url, blob);
      return url;
    }),
    revokeObjectURL: vi.fn(),
  });
  const fillRect = vi.fn(),
    drawImage = vi.fn();
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue({
    fillStyle: '',
    fillRect,
    drawImage,
  } as unknown as CanvasRenderingContext2D);
  vi.spyOn(HTMLCanvasElement.prototype, 'toBlob').mockImplementation(function (
    this: HTMLCanvasElement,
    callback,
  ) {
    const reader = new FileReader();
    reader.onload = () => {
      rasterSource = String(reader.result);
      const png = new Resvg(rasterSource, { fitTo: { mode: 'width', value: this.width } })
        .render()
        .asPng();
      callback(new Blob([new Uint8Array(png)], { type: 'image/png' }));
    };
    reader.readAsText(urls.get(imageURL)!);
  });
});
afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
const bytes = (blob: Blob) =>
  new Promise<Uint8Array>((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer));
    reader.readAsArrayBuffer(blob);
  });

describe('SVG-driven PNG export', () => {
  it('produces a valid PNG at 2× with the exact SVG geometry for every supported kind', async () => {
    const doc = fixture(),
      svg = exportSVG(doc),
      dimensions = pngDimensions(svg);
    const png = await exportPNG(doc),
      data = await bytes(png);
    expect(png.type).toBe('image/png');
    expect([...data.slice(0, 8)]).toEqual([137, 80, 78, 71, 13, 10, 26, 10]);
    const header = new DataView(data.buffer);
    expect(header.getUint32(16)).toBe(dimensions.width);
    expect(header.getUint32(20)).toBe(dimensions.height);
    expect(rasterSource.replace('<style></style>', '')).toBe(svg);
    for (const o of doc.objects.filter((o) => o.kind === 'brace'))
      expect(rasterSource).toContain(braceGeometry(o).d);
    expect(rasterSource).toContain('&#82;&#95;&#123;&#101;&#113;&#125;');
    expect(rasterSource).toContain('&#92;&#102;&#114;&#97;&#99;');
    expect(rasterSource).toContain('Comic Sans');
    expect(rasterSource).toContain('<circle');
    expect(rasterSource).toContain(' C ');
    for (const color of ['#8855c2', '#2463cb', '#269978']) expect(rasterSource).toContain(color);
    expect(rasterSource).not.toMatch(/grid|toolbar|data-handle|guides|selection-box|foreignObject/);
    expect(URL.revokeObjectURL).toHaveBeenCalledWith(imageURL);
  });
  it('keeps the shared export selection and excludes unrelated objects', async () => {
    const doc = fixture(),
      brace = doc.objects.find((o) => o.kind === 'brace')!;
    const subset = getExportSelection(doc, [brace.id]);
    await exportPNG(subset);
    expect(rasterSource.replace('<style></style>', '')).toBe(exportSVG(subset));
    expect(rasterSource).not.toContain('stroke="#269978"');
    expect(pngDimensions(rasterSource).width).toBeLessThan(pngDimensions(exportSVG(doc)).width);
  });
  it('renders a white opaque background and shares 12-unit export padding', () => {
    const svg = exportSVG(fixture()),
      rendered = new Resvg(svg).render();
    expect([...rendered.pixels.slice(0, 4)]).toEqual([255, 255, 255, 255]);
    expect(svg).toContain('fill="white"');
    const svgDoc = new DOMParser().parseFromString(svg, 'image/svg+xml');
    const [, , width, height] = svgDoc.documentElement
      .getAttribute('viewBox')!
      .split(' ')
      .map(Number);
    expect(pngDimensions(svg)).toEqual({
      width: Math.ceil(width * 2),
      height: Math.ceil(height * 2),
    });
    expect(pngDimensions(svg, 1)).toEqual({ width: Math.ceil(width), height: Math.ceil(height) });
  });
  it('cleans up object URLs if image decoding fails', async () => {
    vi.stubGlobal(
      'Image',
      class {
        onerror?: () => void;
        set src(_url: string) {
          queueMicrotask(() => this.onerror?.());
        }
      },
    );
    await expect(rasterizeSVG(exportSVG(fixture()))).rejects.toThrow('rasterizzare');
    expect(URL.revokeObjectURL).toHaveBeenCalledOnce();
  });
  it('rejects impossible allocations and bad scale before creating a canvas', () => {
    for (const scale of [0, -1, Infinity])
      expect(() => pngDimensions(exportSVG(fixture()), scale)).toThrow();
    expect(() => pngDimensions('<svg viewBox="0 0 999999 999999"/>')).toThrow('troppo grande');
  });
  it('copies a real image/png promise immediately to preserve browser user activation', async () => {
    const write = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { write } });
    const items: Record<string, Promise<Blob>>[] = [];
    vi.stubGlobal(
      'ClipboardItem',
      class {
        constructor(data: Record<string, Promise<Blob>>) {
          items.push(data);
        }
        static supports() {
          return true;
        }
      },
    );
    const pending = copyPNG(fixture());
    expect(write).toHaveBeenCalledOnce();
    await pending;
    const png = await items[0]['image/png'];
    expect(png.type).toBe('image/png');
    expect((await bytes(png))[0]).toBe(137);
  });
  it('reports unsupported or denied image clipboard access', async () => {
    vi.stubGlobal('ClipboardItem', undefined);
    await expect(copyPNG(fixture())).rejects.toThrow('Scarica PNG');
    vi.stubGlobal(
      'ClipboardItem',
      class {
        static supports() {
          return false;
        }
      },
    );
    await expect(copyPNG(fixture())).rejects.toThrow('Scarica PNG');
  });
  it('embeds local KaTeX fonts for an isolated SVG image context', async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValue({
        ok: true,
        blob: () => Promise.resolve(new Blob(['font'], { type: 'font/woff2' })),
      });
    vi.stubGlobal('fetch', fetcher);
    const svg = await embedSVGFonts(
      '<svg><title>Math</title><text font-family="KaTeX_Math"/></svg>',
    );
    expect(svg).toContain('@font-face{font-family:KaTeX_Math');
    expect(svg).toContain('data:font/woff2;base64,');
    expect(fetcher).toHaveBeenCalled();
  });
});
