/** Exact U+2032 outlines from the bundled KaTeX_Main Regular/Bold fonts, at
 * 1000 font units per em with the baseline at zero. Exporting this one glyph as
 * a path keeps SVG/Obsidian self-contained without installing a math font. */
const regular =
  'M198 -560Q224 -560 243 -542Q262 -524 262 -501Q262 -496 260 -486Q259 -479 172.5 -263Q86 -47 84 -45Q80 -41 56 -48Q30 -57 30 -61Q30 -68 85.5 -293Q141 -518 146 -528Q160 -560 198 -560Z';
const bold =
  'M240 -563Q279 -563 305 -538Q331 -513 331 -480Q331 -470 328 -458Q321 -440 223 -248Q125 -56 123 -50Q113 -33 105 -33Q101 -33 71.5 -45Q42 -57 38 -60Q35 -63 35 -65Q35 -77 101 -293.5Q167 -510 171 -517Q186 -551 228 -562Q232 -563 240 -563Z';

export function primeGlyphPaths(count: number, boldWeight = false): string {
  const advance = boldWeight ? 344 : 275;
  const d = boldWeight ? bold : regular;
  return Array.from(
    { length: count },
    (_, i) => `<path d="${d}"${i ? ` transform="translate(${i * advance} 0)"` : ''}/>`,
  ).join('');
}
