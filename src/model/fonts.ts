export const CIRCUIT_FONT =
  '"Comic Relief", "DrawCircuit Symbols", "DrawCircuit Blackboard", "DrawCircuit Script", "DrawCircuit Fraktur", cursive';

/** Load the complete local handwriting stack before any canvas/export measurement. */
export async function prepareCircuitFonts(fonts = document.fonts): Promise<void> {
  if (!fonts) return;
  await Promise.all([
    // Request each primary face directly. A fallback list may resolve to another
    // family for the probe text without loading the primary face.
    fonts.load('400 22px "Comic Relief"'),
    fonts.load('700 22px "Comic Relief"'),
    fonts.load('400 22px "DrawCircuit Symbols"'),
    fonts.load('700 22px "DrawCircuit Symbols"'),
    ...[1, 2, 3, 4].map((size) => fonts.load(`400 22px "DrawCircuit Size${size}"`)),
    ...['Blackboard', 'Script', 'Fraktur'].flatMap((style) =>
      [400, 700].map((weight) => fonts.load(`${weight} 22px "DrawCircuit ${style}"`)),
    ),
  ]);
}
