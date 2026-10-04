import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';

// Keep the full transparent brand master; frame the installation artwork for
// small app launchers, where long leads and hairline strokes hid the gate body.
const masterUrl = new URL('../assets/brand/drawcircuit-logo.svg', import.meta.url);
const master = await readFile(masterUrl, 'utf8');
await mkdir(new URL('../public/icons/', import.meta.url), { recursive: true });
const render = (svg, size) =>
  new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
const logo = render(master, 1024);
await writeFile(new URL('../assets/brand/drawcircuit-logo.png', import.meta.url), logo);
await writeFile(new URL('../public/logo.png', import.meta.url), logo);
const inner = master.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const compact = inner
  .replace('transform="translate(24 0)"', '')
  .replace('M32 20V63 M112 20V63', 'M32 40V63 M112 40V63')
  .replace('M72 164V181', 'M72 164V170')
  .replace('stroke-width="4"', 'stroke-width="7"');
const artwork = (scale, centerY = 105) =>
  `<g fill="none" transform="translate(96 96) scale(${scale}) translate(-72 -${centerY})">${compact}</g>`;
const appSVG = (scale = 1.24, centerY = 105) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"><rect width="192" height="192" fill="white"/>${artwork(scale, centerY)}</svg>`;
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192"><style>.mark{color:#000}@media(prefers-color-scheme:dark){.mark{color:#fff}}</style><g class="mark">${artwork(1.24).replace('stroke="#000"', 'stroke="currentColor"')}</g></svg>`;
await writeFile(new URL('../public/favicon.svg', import.meta.url), favicon);
await writeFile(new URL('../public/favicon-adaptive.svg', import.meta.url), favicon);
for (const size of [16, 20, 24, 32, 48, 64, 128, 180, 192, 512]) {
  // Increase coverage at subpixel sizes without moving or replacing any geometry.
  const svg = appSVG(size <= 24 ? 1.2 : 1.24).replace(
    'stroke-width="7"',
    `stroke-width="${size <= 24 ? 9 : size === 32 ? 8 : 7}"`,
  );
  // A new manifest URL makes the branding change explicit to already installed apps.
  const file =
    size === 180
      ? 'apple-touch-icon-large.png'
      : size === 192 || size === 512
        ? `xnor-large-${size}.png`
        : `icon-${size}.png`;
  await writeFile(new URL(`../public/icons/${file}`, import.meta.url), render(svg, size));
}
// The complete mark fits the central safe circle; its background is always white.
const mask = appSVG(0.9, 100);
await writeFile(
  new URL('../public/icons/maskable-xnor-large-512.png', import.meta.url),
  render(mask, 512),
);
