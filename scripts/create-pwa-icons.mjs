import { readFile, writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';
const svg = await readFile(new URL('../public/favicon.svg', import.meta.url), 'utf8');
for (const size of [192, 512]) {
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
  await writeFile(new URL(`../public/icons/icon-${size}.png`, import.meta.url), png);
}
const mask = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><rect width="512" height="512" fill="#2361e7"/><svg x="102.4" y="102.4" width="307.2" height="307.2" viewBox="0 0 40 40">${svg.replace(/<svg[^>]*>|<\/svg>/g, '')}</svg></svg>`;
await writeFile(
  new URL('../public/icons/maskable-512.png', import.meta.url),
  new Resvg(mask).render().asPng(),
);
