# Official DrawCircuit logo

`drawcircuit-official.png` is an unchanged copy of the image supplied for the UI refinement pass. Its design and colors are the official identity; it is not a vector tracing or a generated alternative.

`public/logo.png` keeps the original symbol pixels. The only preparation is a technical crop of external whitespace: `(left, top, right, bottom) = (257, 299, 997, 960)` from the 1254×1254 source, giving 740×661 pixels. White square padding (39 pixels above, 40 below) gives a 740×740 master suitable for app icons.

Run `node scripts/create-pwa-icons.mjs` to regenerate the SVG favicon (embedded original raster), PNG sizes 16, 20, 24, 32, 64, 128, 192 and 512, the 180×180 Apple touch icon and the 512×512 maskable icon. The maskable version keeps the whole symbol inside the standard central safe circle, on white; it does not alter the symbol.

The top bar displays the master at 26×26 CSS pixels, with enough source resolution for high-DPI displays. The browser title, manifest name and short name remain `DrawCircuit`.
