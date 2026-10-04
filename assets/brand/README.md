# Official DrawCircuit logo

`drawcircuit-logo.svg` is the single editable master: a faithful vector reconstruction of the supplied downward XNOR, with two top inputs, the double XOR input curve, an OR body, the output negation bubble and a downward output. Its strokes are black, with round caps and joins, and its background and bubble interior are transparent.

The 192×192 master viewBox centres the symmetry axis at x=96. Its visible geometry spans approximately x=38–154 and y=18–183. The short lower output is visually lighter than the gate body; the placement allows slightly more space above than below to balance that weight. The master and brand PNG remain transparent, with no shadow or badge. Installation artwork has its own compact framing described below.

Run `node scripts/create-pwa-icons.mjs` to regenerate the transparent brand PNGs and the installation artwork. App icons use an opaque white background, shorter input/output leads and a larger gate body with 7-unit strokes (9 at 16–24 px, 8 at 32 px). The main 192/512 px icon occupies approximately 77% of the square's width and 88% of its height. The maskable version keeps every stroke inside the standard central safe circle, also on white. The SVG favicon stays transparent: black strokes in light browser themes and white strokes under `prefers-color-scheme: dark`.

The README uses the master SVG. The browser title and manifest names remain `DrawCircuit`. The editor has no branding header, logo or app name.

The manifest uses `xnor-large-192.png`, `xnor-large-512.png` and `maskable-xnor-large-512.png`; Apple uses `apple-touch-icon-large.png`. Distinct URLs expose the larger artwork to installations as well as new ones. A browser or operating system may still defer refreshing an already installed desktop icon.
