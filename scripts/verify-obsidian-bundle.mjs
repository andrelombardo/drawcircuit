import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { dirname, resolve } from 'node:path';
import { createHash } from 'node:crypto';

// Run the installed plugin's exact bundled compiler in an isolated Node process.
// No font/engine assets are copied into the repository or downloaded.
const [bundlePath, ...files] = process.argv.slice(2);
if (!bundlePath || !files.length)
  throw new Error(
    'Usage: node scripts/verify-obsidian-bundle.mjs /vault/.obsidian/plugins/inline-tikz/main.js diagram.md [...]',
  );
const bundle = resolve(bundlePath);
const vendorRequire = createRequire(bundle);
const source = await readFile(bundle, 'utf8');
const manifest = JSON.parse(await readFile(resolve(dirname(bundle), 'manifest.json'), 'utf8'));
const vendorModule = { exports: {} };
const require = (name) =>
  name === 'obsidian'
    ? { Plugin: class {}, PluginSettingTab: class {}, normalizePath: (path) => path }
    : vendorRequire(name);
const engine = new Function(
  'require',
  'module',
  'exports',
  '__dirname',
  '__filename',
  source + '\nreturn {init, compile};',
)(require, vendorModule, vendorModule.exports, dirname(bundle), bundle);
if (!engine.init()) throw new Error('Installed Inline TikZ compiler unavailable');
for (const file of files) {
  const input = resolve(file);
  const markdown = await readFile(input, 'utf8');
  const tex = markdown.match(/^```tikz\n([\s\S]*)\n```$/)?.[1];
  if (tex === undefined) throw new Error(`Expected one complete tikz block: ${file}`);
  const svg = await engine.compile(tex);
  if (svg.includes('##')) throw new Error('Corrupted SVG entities');
  const output = input.replace(/\.md$/, '.svg');
  await writeFile(output, svg);
  await writeFile(
    output + '.result.json',
    JSON.stringify({
      ok: true,
      plugin: manifest.name,
      version: manifest.version,
      compilerSha256: createHash('sha256').update(source).digest('hex'),
      execution: 'installed bundle, isolated process',
      bytes: svg.length,
      sha256: createHash('sha256').update(tex).digest('hex'),
    }),
  );
  console.log(`${file}: installed Inline TikZ bundle, SVG ${svg.length} bytes`);
}
