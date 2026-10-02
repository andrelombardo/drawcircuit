import { createRequire } from 'node:module';
import { build } from 'esbuild';
import { writeFileSync } from 'node:fs';
const result = await build({
  stdin: {
    contents: `
import {createElement} from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {catalog,categories} from './src/model/catalog';
import {Symbol} from './src/circuit/components/Symbol';
export const entries=catalog.map(d=>({...d,svg:renderToStaticMarkup(createElement(Symbol,{type:d.type,bodyText:d.internalText}))}));
export {categories};`,
    resolveDir: process.cwd(),
    loader: 'ts',
  },
  bundle: true,
  jsx: 'automatic',
  platform: 'node',
  format: 'cjs',
  write: false,
});
const compiled = { exports: {} };
new Function('require', 'module', 'exports', result.outputFiles[0].text)(
  createRequire(import.meta.url),
  compiled,
  compiled.exports,
);
const { entries, categories } = compiled.exports;
const escape = (s) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
let y = 70;
const pieces = [];
for (const category of categories) {
  const items = entries.filter((d) => d.group === category);
  pieces.push(
    `<text x="24" y="${y}" fill="#2463cb" font-size="17" font-weight="bold">${escape(category)} · ${items.length}</text>`,
  );
  y += 20;
  items.forEach((d, i) => {
    const x = 24 + (i % 5) * 210,
      row = y + Math.floor(i / 5) * 126;
    pieces.push(
      `<rect x="${x}" y="${row}" width="198" height="112" rx="6" fill="white" stroke="#e1e5eb"/>`,
    );
    pieces.push(`<g transform="translate(${x + 99} ${row + 49}) scale(.8)">${d.svg}</g>`);
    pieces.push(
      `<text x="${x + 99}" y="${row + 97}" text-anchor="middle" font-size="10.5" fill="#515d6b">${escape(d.name)}</text>`,
    );
  });
  y += Math.ceil(items.length / 5) * 126 + 20;
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1090" height="${y + 5}" viewBox="0 0 1090 ${y + 5}" font-family="sans-serif"><rect width="100%" height="100%" fill="#f7f9fc"/><text x="24" y="32" font-size="22" font-weight="bold" fill="#171a20">DrawCircuit · ${entries.length} simboli didattici</text>${pieces.join('')}</svg>`;
writeFileSync('docs/libreria-componenti.svg', svg);
console.log('Created docs/libreria-componenti.svg from the actual component renderer.');
