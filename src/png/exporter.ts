import type { CircuitDocument } from '../model/types';
import { exportSVG } from '../svg/exporter';

export const PNG_SCALE = 2;
const fontURLs = import.meta.glob<string>('/node_modules/katex/dist/fonts/*.woff2', {
  eager: true,
  query: '?url',
  import: 'default',
});
const fontData = new Map<string, Promise<string>>();
const dataURL = (blob: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Impossibile leggere il font.'));
    reader.readAsDataURL(blob);
  });

/** SVG images have an isolated font context: embed the same local KaTeX fonts. */
export async function embedSVGFonts(svg: string): Promise<string> {
  const rules = await Promise.all(
    Object.entries(fontURLs).map(async ([path, url]) => {
      const match = /\/(KaTeX_[^-]+)-(Regular|Bold|Italic|BoldItalic)\.woff2$/.exec(path);
      if (!match || !svg.includes(match[1])) return '';
      let data = fontData.get(url);
      if (!data) {
        data = fetch(url)
          .then((response) => {
            if (!response.ok) throw new Error('Impossibile caricare i font per il PNG.');
            return response.blob();
          })
          .then(dataURL);
        fontData.set(url, data);
        data.catch(() => fontData.delete(url));
      }
      return `@font-face{font-family:${match[1]};font-style:${match[2].includes('Italic') ? 'italic' : 'normal'};font-weight:${match[2].includes('Bold') ? '700' : '400'};src:url(${await data}) format('woff2');}`;
    }),
  );
  return svg.replace('</title>', `</title><style>${rules.join('')}</style>`);
}

export function pngDimensions(svg: string, scale = PNG_SCALE) {
  const bounds = /viewBox="[^" ]+ [^" ]+ ([\d.]+) ([\d.]+)"/.exec(svg);
  if (!bounds || !Number.isFinite(scale) || scale <= 0)
    throw new Error('Dimensioni PNG non valide.');
  const width = Math.max(1, Math.ceil(Number(bounds[1]) * scale));
  const height = Math.max(1, Math.ceil(Number(bounds[2]) * scale));
  // Avoid browser allocation failures for malformed or enormous imported documents.
  if (width > 32767 || height > 32767 || width * height > 64_000_000)
    throw new Error('PNG troppo grande: esporta una selezione più piccola.');
  return { width, height };
}

export async function rasterizeSVG(svg: string, scale = PNG_SCALE): Promise<Blob> {
  const { width, height } = pngDimensions(svg, scale);
  const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
  try {
    const image = new Image();
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error('Impossibile rasterizzare il circuito.'));
      image.src = url;
    });
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Canvas PNG non disponibile.');
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.drawImage(image, 0, 0, width, height);
    return await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob(
        (blob) => (blob ? resolve(blob) : reject(new Error('Impossibile creare il PNG.'))),
        'image/png',
      ),
    );
  } finally {
    URL.revokeObjectURL(url);
  }
}

export async function exportPNG(doc: CircuitDocument): Promise<Blob> {
  await document.fonts?.ready;
  return rasterizeSVG(await embedSVGFonts(exportSVG(doc)));
}

/** Pass the promise immediately to preserve clipboard user activation on Safari. */
export async function copyPNG(doc: CircuitDocument) {
  if (
    typeof ClipboardItem === 'undefined' ||
    !navigator.clipboard?.write ||
    (ClipboardItem.supports && !ClipboardItem.supports('image/png'))
  )
    throw new Error('Questo browser non consente la copia immagine. Usa Scarica PNG.');
  const png = exportPNG(doc);
  // A denied clipboard can reject before the image promise settles.
  void png.catch(() => {});
  await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })]);
}
