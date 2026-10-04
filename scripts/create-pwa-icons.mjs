import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { Resvg } from '@resvg/resvg-js';

// All branding derives from this one transparent vector. Only small-icon stroke changes.
const masterUrl = new URL('../assets/brand/drawcircuit-logo.svg', import.meta.url);
const master = await readFile(masterUrl, 'utf8');
await mkdir(new URL('../public/icons/', import.meta.url), { recursive: true });
const render = (svg, size) =>
  new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
const logo = render(master, 1024);
await writeFile(new URL('../assets/brand/drawcircuit-logo.png', import.meta.url), logo);
await writeFile(new URL('../public/logo.png', import.meta.url), logo);
await writeFile(new URL('../public/favicon.svg', import.meta.url), master);
for (const size of [16, 20, 24, 32, 48, 64, 128, 180, 192, 512]) {
  // Increase coverage at subpixel sizes without moving or replacing any geometry.
  const svg = master.replace(
    'stroke-width="4"',
    `stroke-width="${size <= 24 ? 6 : size === 32 ? 5 : 4}"`,
  );
  const file = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`;
  await writeFile(new URL(`../public/icons/${file}`, import.meta.url), render(svg, size));
}
// The complete vector stays inside the central safe circle, including inputs and output.
// Keep alpha here too: a platform may supply its own app-icon background.
const inner = master.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const mask = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><svg x="46.08" y="46.08" width="419.84" height="419.84" viewBox="0 0 192 192" fill="none">${inner}</svg></svg>`;
await writeFile(new URL('../public/icons/maskable-512.png', import.meta.url), render(mask, 512));
