import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFile, writeFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';

// Uses the user's enabled Inline TikZ compiler, without opening or modifying notes.
const cli = process.env.OBSIDIAN_CLI ?? '/Applications/Obsidian.app/Contents/MacOS/Obsidian';
const files = process.argv.slice(2);
if (!files.length) throw new Error('Usage: node scripts/verify-obsidian.mjs diagram.md [...]');
for (const file of files) {
  const input = resolve(file);
  const output = input.replace(/\.md$/, '.svg');
  const resultFile = output + '.result.json';
  const markdown = await readFile(input, 'utf8');
  const source = markdown.match(/^```tikz\n([\s\S]*)\n```$/)?.[1];
  if (source === undefined) throw new Error(`Expected one complete tikz block: ${file}`);
  const hash = createHash('sha256').update(source).digest('hex');
  const code = `void (async()=>{const fs=require('fs');try{const p=app.plugins.plugins['inline-tikz'];if(!p?.compilerReady)throw new Error('Enable Inline TikZ in the open desktop vault');const svg=await p.enqueueCompilation(${JSON.stringify(source)},${JSON.stringify(hash)});if(svg.includes('##'))throw new Error('Corrupted SVG entities');fs.writeFileSync(${JSON.stringify(output)},svg);fs.writeFileSync(${JSON.stringify(resultFile)},JSON.stringify({ok:true,plugin:p.manifest.name,version:p.manifest.version,bytes:svg.length,sha256:${JSON.stringify(hash)}}));}catch(e){fs.writeFileSync(${JSON.stringify(resultFile)},JSON.stringify({ok:false,error:String(e)}));}})()`;
  await writeFile(resultFile, JSON.stringify({ pending: true }));
  const request = spawnSync(cli, ['eval', 'code=' + code], { encoding: 'utf8', timeout: 30000 });
  if (request.error || request.status)
    throw request.error ?? new Error(request.stderr || request.stdout);
  const deadline = Date.now() + 30000;
  let result;
  while (Date.now() < deadline) {
    result = JSON.parse(await readFile(resultFile, 'utf8'));
    if (!result.pending) break;
    await new Promise((done) => setTimeout(done, 100));
  }
  if (!result?.ok) throw new Error(`${file}: ${result?.error ?? 'Compilation timed out'}`);
  await access(output);
  console.log(`${file}: ${result.plugin} ${result.version}, SVG ${result.bytes} bytes`);
}
