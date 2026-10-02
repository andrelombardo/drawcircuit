/** TikZJax expresses SVG dimensions in TeX points, then uses 4/3 CSS px per point. */
export const CANVAS_PT_PER_UNIT = 3 / 4;
export const TEX_PT_PER_CM = 72.27 / 2.54;
export const NATIVE_UNITS_PER_CM = 40;
export const CANVAS_UNITS_PER_CM = TEX_PT_PER_CM / CANVAS_PT_PER_UNIT;
export const formatNumber = (value: number) => String(Number(value.toFixed(4)));
export const editorToCm = (value: number, unitsPerCm = CANVAS_UNITS_PER_CM) => value / unitsPerCm;
export const editorToPt = (value: number, unitsPerCm = CANVAS_UNITS_PER_CM) =>
  editorToCm(value, unitsPerCm) * TEX_PT_PER_CM;
export const editorFontSizeToTikz = editorToPt;
