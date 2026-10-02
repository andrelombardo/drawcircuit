import { readFile, writeFile } from 'node:fs/promises';
import { format, resolveConfig } from 'prettier';
const base = new URL('../docs/obsidian-wysiwyg/', import.meta.url);
const formatOptions = {
  ...(await resolveConfig(new URL('comparison.html', base).pathname)),
  parser: 'html',
};
const evidence = (name) => new URL('evidence/' + name, base);
const original = await readFile(evidence('canvas-original.svg'), 'utf8');
const viewport = original.match(/<g transform="translate\([^>]+scale\([^>]+>/)[0];
// Keep original HTML closing tags: XML reserialization corrupts KaTeX empty spans.
const body = original.slice(
  original.indexOf(viewport) + viewport.length,
  original.lastIndexOf('</g></svg>'),
);
const canvas = `<svg xmlns="http://www.w3.org/2000/svg" width="1020" height="540" viewBox="-670 -225 1020 540" id="canvas-reference">${body}</svg>`;
await writeFile(evidence('canvas-reference.svg'), canvas);
const compiled = await readFile(evidence('golden.svg'), 'utf8');
const first = compiled.match(/d="M([-\d.]+)\s+([-\d.]+)/);
// The first golden wire starts at (-160,0); compiler coordinates are 0.75 pt/unit.
const origin = { x: Number(first[1]) + 160 * 0.75, y: Number(first[2]) };
const content = (s) => s.slice(s.indexOf('>') + 1, s.lastIndexOf('</svg>'));
const obsidian = `<svg xmlns="http://www.w3.org/2000/svg" width="1020" height="540" viewBox="-670 -225 1020 540" id="obsidian-reference"><g transform="scale(${4 / 3}) translate(${-origin.x},${-origin.y})">${content(compiled)}</g></svg>`;
const styles = `<link rel="stylesheet" href="/node_modules/katex/dist/katex.min.css"><link rel="stylesheet" href="/src/styles.css"><style>body{margin:0;padding:24px;background:#f0f3f7;color:#171a20;font:14px Inter,Arial,sans-serif}h1{font-size:22px;margin:0 0 8px}.compare{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:18px}.panel{padding:16px;background:white;border-radius:12px;overflow:hidden}.panel h2{font-size:17px;margin:0 0 12px}.panel >svg{display:block;width:100%;height:auto}.legend{color:#53616e;margin-top:6px}pre{white-space:pre-wrap}</style>`;
const page = (title, left, right, extra = '') =>
  `<!doctype html><html lang="it"><head><meta charset="utf-8"><title>${title}</title>${styles}</head><body><h1>${title}</h1><div class="legend">Vettori alla stessa scala. Geometria originale, Comic Sans MS di sistema e pedici matematici.</div><div class="compare"><section class="panel"><h2>DrawCircuit · canvas originale</h2><!-- prettier-ignore -->${left}</section><section class="panel"><h2>Obsidian · compilatore Inline TikZ 0.2.1</h2><!-- prettier-ignore -->${right}</section></div>${extra}</body></html>`;
const doc = JSON.parse(await readFile(evidence('golden.json'), 'utf8'));
const labels = doc.objects.flatMap((o) =>
  o.label
    ? [
        {
          text: o.label.text,
          x: o.x + o.label.offset.x,
          y: o.y + o.label.offset.y,
          size: o.label.fontSize,
        },
      ]
    : o.kind === 'text'
      ? [{ text: o.text, x: o.x, y: o.y, size: o.fontSize }]
      : [],
);
const metrics = `<details><summary>Misure delle 19 label del circuito</summary><pre id="metrics"></pre></details><script>window.addEventListener('load',()=>{const origin=${JSON.stringify(origin)},expected=${JSON.stringify(labels)};const texts=[...document.querySelectorAll('#obsidian-reference text')];const used=new Set();const rows=expected.map(l=>{const first=l.text.includes('_')?l.text[0]:l.text;const matches=texts.filter(t=>t.textContent===first&&Number(t.getAttribute('font-size'))===l.size&&!used.has(t));const values=matches.map(t=>{const m=t.transform.baseVal.consolidate().matrix;const x=(m.e-origin.x)*4/3,y=(m.f-origin.y)*4/3;return{t,x,y,error:Math.hypot(x-l.x,y-l.y)}}).sort((a,b)=>a.error-b.error);const best=values[0];if(!best)return{text:l.text,error:999};used.add(best.t);const css=getComputedStyle(best.t);return{text:l.text,error:best.error,font:css.fontFamily,size:l.size,weight:css.fontWeight,style:css.fontStyle};});document.querySelector('#metrics').textContent=JSON.stringify({labelPositions:rows,maxError:Math.max(...rows.map(r=>r.error)),pass:rows.every(r=>r.error<.02)},null,2);});</script>`;
await writeFile(
  new URL('comparison.html', base),
  await format(
    page('Stesso circuito · canvas e Obsidian', canvas, obsidian, metrics),
    formatOptions,
  ),
);
const fontCanvas = (await readFile(evidence('font-canvas.svg'), 'utf8')).replace(
  '<svg',
  '<svg viewBox="0 0 1040 540"',
);
const fontSvg = await readFile(evidence('fonts.svg'), 'utf8');
const a = fontSvg.match(
  /text-anchor="middle" transform="matrix\([^ ]+ 0 0 [^ ]+ ([-\d.]+) ([-\d.]+)\)"/,
);
const fx = Number(a[1]) - 40 * 0.75,
  fy = Number(a[2]) - 40 * 0.75;
const fontCompiled = `<svg xmlns="http://www.w3.org/2000/svg" width="1040" height="540" viewBox="0 0 1040 540"><g transform="scale(${4 / 3}) translate(${-fx},${-fy})">${content(fontSvg)}</g></svg>`;
await writeFile(
  new URL('font-comparison.html', base),
  await format(
    page('Font, pedici, frazioni, radicali e rotazioni', fontCanvas, fontCompiled),
    formatOptions,
  ),
);
console.log('Confronti golden e font aggiornati.');
