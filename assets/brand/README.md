# Official DrawCircuit logo

`drawcircuit-logo.svg` is the single editable master: a faithful vector reconstruction of the supplied downward XNOR, with two top inputs, the double XOR input curve, an OR body, the output negation bubble and a downward output. Its strokes are black, with round caps and joins, and its background and bubble interior are transparent.

The 192×192 viewBox centres the symmetry axis at x=96. The visible geometry spans approximately x=38–154 and y=18–183. The short lower output is visually lighter than the gate body; the placement allows slightly more space above than below to balance that weight. Square app assets retain the symbol's tall aspect ratio rather than stretching it. No background, shadow or badge is added.

Run `node scripts/create-pwa-icons.mjs` to regenerate the 1024×1024 transparent `drawcircuit-logo.png`, `public/logo.png`, the vector favicon, PNG icons at 16, 20, 24, 32, 48, 64, 128, 192 and 512 px, the 180 px Apple touch icon and the 512 px maskable icon. At 16–24 px the stroke is 6 master units, at 32 px it is 5, and all larger sizes retain 4. The shape is identical at every size. The transparent maskable asset fits the entire symbol inside the standard central safe circle; the installation platform may supply its own background.

The README uses the master SVG. The browser title and manifest names remain `DrawCircuit`. The editor has no branding header, logo or app name.
