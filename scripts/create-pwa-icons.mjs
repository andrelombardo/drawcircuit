import { readFile, writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';

// logo.png is a technical crop of the supplied official raster, with square white padding.
// Embed the original pixels: no vector tracing or redesign of the symbol.
const logo = await readFile(new URL('../public/logo.png', import.meta.url));
const data = `data:image/png;base64,${logo.toString('base64')}`;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="740" height="740" viewBox="0 0 740 740"><image width="740" height="740" href="${data}"/></svg>`;
await writeFile(new URL('../public/favicon.svg', import.meta.url), svg);
for (const size of [16, 20, 24, 32, 64, 128, 180, 192, 512]) {
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
  const file = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`;
  await writeFile(new URL(`../public/icons/${file}`, import.meta.url), png);
}
// Fit the entire supplied symbol inside the maskable safe circle (80% diameter).
const mask = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" fill="white"/><image x="115.2" y="115.2" width="281.6" height="281.6" href="${data}"/></svg>`;
await writeFile(
  new URL('../public/icons/maskable-512.png', import.meta.url),
  new Resvg(mask).render().asPng(),
);
