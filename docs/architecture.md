# Web architecture

DrawCircuit uses React, TypeScript, Vite, and Zustand. `index.html` loads `src/main.tsx`, which mounts `App` after loading both circuit font faces. Any static host can serve `dist/`, including under `/drawcircuit/`. No backend, account, or native runtime is required.

| Module                                                       | Responsibility                                                          |
| ------------------------------------------------------------ | ----------------------------------------------------------------------- |
| `src/model/`                                                 | Types, symbol catalog, geometry, and local JSON document serialization  |
| `src/store/editorStore.ts`                                   | Current document, selection, gestures, undo/redo, and automatic saving  |
| `src/components/`                                            | Editor, library, properties, menus, and dialogs                         |
| `src/circuit/`                                               | SVG layers, symbols, annotations, and canvas KaTeX rendering            |
| `src/math/`                                                  | Math normalization, KaTeX rendering, and glyphs                         |
| `src/i18n/`                                                  | English message keys and fixed Italian interface translations     |
| `src/smartPlacement/`, `src/presets/`, `src/personalBlocks/` | Snapping, preset blocks, and personal library                           |
| `src/svg/`, `src/png/`, `src/tikz/`                          | Internal SVG-to-PNG copying, shared geometry, validation, and selection |
| `src/utils/`                                                 | Shared geometry, browser clipboard, and local persistence               |
| `public/`                                                    | Static manifest, visual identity, and legacy worker retirement          |

## Documents and persistence

Documents remain at JSON version 1. Neither their structure nor their storage keys are migrated by localization. `localPersistence` keeps a recoverable copy of unreadable data before overwriting it. Deferred document saving preserves committed state during gestures and flushes on exit. The personal library uses a separate key; preferences and viewport remain local. The clipboard keeps a session fallback when native clipboard permissions are unavailable.

Shared limits in `src/model/limits.ts` apply to fields and JSON parsing. The store validates a serialized copy before committing an edit or ending a gesture. An invalid change restores the previous state without adding history. `localPersistence` also verifies that serialized data can be read before writing it or creating a recovery copy. The library remembers only the most recently deleted block and its position, allowing restoration during the session.

`ProjectMenu` offers a separate editable `.drawcircuit` download and validated JSON import, without changing image copying. `utils/projectFile.ts` bounds file bytes before reading, uses the existing v1 parser, and validates UTF-8 download size. Project replacement is atomic and records the previous committed document as one Undo step, without reconciling unrelated frame IDs.

## Workspace and rendering

`App` coordinates panels. At widths up to 800 px they start closed and open one at a time without changing desktop preferences. Choosing a tool or block closes the mobile library. A hidden inspector does not mount property controls. Selection uses ID sets and computes compatible replacements once per component. Groups retain a shared outline; editing handles and selection terminals belong to single selections. Tool and pointer-proximity terminals remain available. Selected junctions show a contrasting ring with a constant screen width. A click on a junction's visible center takes precedence over the wires meeting there. The ring ignores pointer input and never enters image exports.

Highlights are independent `highlight` objects in the document union, handled by `src/annotations/highlight.ts`. Smart strokes store normalized directed ranges on wires and component terminal/body paths, without duplicating routing or changing topology. Preview and commit use only the dragged portion, including partial endpoints inside a component body; a click or very short gesture does not highlight an entire element.

`src/annotations/smartHighlight.ts` builds a path network from explicit references and geometrically coincident endpoints. Shared junctions connect wires; symbol bodies allow a graphical continuation between pins without altering electrical topology. The pointer chooses the local branch, can retrace and shorten a stroke, and resolves forks after overlapping segments. Interpolated samples cross multiple objects in one input event. A spatial index joins coincident endpoints within 10⁻⁶ document units only for highlighter traversal; disconnected crossings and separated endpoints stay separate.

Legacy component highlights remain readable and follow the symbol’s local body axis, translation, and rotation at the chosen width. Hit testing distinguishes the body from nearby wires. Selection copying and personal blocks remap or freeze references. Wire splitting remaps ranges while keeping one highlight object; deleting a host freezes the path as a free stroke. All segments retain uniform width after detachment or deletion. One opacity group prevents dark overlap joints. Legacy `widthOffsets` remain readable for body-patch handles but no longer increase stroke width.

Freehand strokes use Ramer–Douglas–Peucker simplified anchors and cubic Bézier interpolation; separate subpaths remain distinct. Bounds and image copying include Bézier controls and half the stroke width. Editor and PNG copying share the vector path, painted before the circuit. Preview stays outside the document until release, so one stroke is one undo step. Next-stroke settings stay in the store separately from selected objects and electrical properties.

## Highlight erasure

The Highlight eraser shares the pencil menu and existing Properties sidebar. Its diameter is session-only editor state. `HighlightEraserGesture` delays deletion until a 4 screen-pixel drag threshold is crossed. A click removes only the topmost hit highlight; a drag intersects a swept disk with all highlight paths, including coalesced pointer samples. Components, wires, labels, and electrical annotations are never candidates.

`src/annotations/eraseHighlight.ts` uses capsule intersection and adaptive Bezier subdivision with bounded screen-space tolerance. It rejects disjoint convex hulls before refining near intersections. De Casteljau splitting preserves exact surviving curves; partial fragments become independent free highlights. The optional JSON v1 `curves` field stores their explicit control pairs. A shared `paintGroup` preserves opacity at untouched self-overlaps while fragments remain independently editable; duplication remaps that paint group. Rendering, bounds, endpoint editing, move/rotation, copying, personal blocks, validation, and SVG/PNG output share these controls. Legacy points, smoothing, breaks, and smart/component highlights remain readable. Gesture preview uses the existing committed-state persistence and one-action undo/redo; cancellation restores the original document.

## Image copying and fonts

**Copy as image**, in the selection context menu, is the drawing output. `SelectionActions` captures components, internal connections, and associated annotations through `src/tikz/selection.ts`. `src/svg/exporter.tsx` generates an internal SVG representation; `src/png/exporter.ts` produces a transparent PNG; `src/png/clipboard.ts` immediately gives the clipboard a promise, then loads the exporter dynamically. This preserves Safari user activation while keeping embedded export fonts out of the editor’s initial chunk. The library retains existing-block import and serialization for local persistence.

KaTeX stays in a dedicated chunk shared by the canvas and image copying. Vector text layout lives in `src/tikz/canvasText.ts`; the canvas retains its own `foreignObject` rendering and metrics. The historical `src/tikz/` directory contains internal rendering helpers only. Bounded math caches, spatial indexes, and memoized layers are memory optimizations, independent of the retired offline cache.

Circuit text uses Comic Relief 1.210, served as regular and bold WOFF2 under SIL OFL 1.1. Missing mathematical characters use the local DrawCircuit Symbols handwriting supplement; large operators and delimiters use matching size variants with TeX-compatible metrics. `src/main.tsx` waits for every face before mounting the editor. `src/model/fonts.ts` and `--circuit-font` define the same stack for the canvas, symbols, formulas, and PNG generation. The UI uses Inter. Sources, coverage, adaptations and notices are documented in `src/fonts/comic-relief/` and `src/fonts/math-symbols/` and published under `public/third-party/`. SVG/PNG embed the same fonts, preserve clipped stretchy drawings and cancellation lines, and export all four edges of mathematical rules/boxes. Mathematical rules have a minimum 0.08em pen weight; non-radical SVG strokes receive rounded reinforcement while radicals already reserve that thickness through KaTeX.

## Localization

English messages and catalog/preset metadata are the source. `t()` resolves Italian entries from `src/i18n/it.ts` and interpolates named placeholders after translation. Missing entries fall back to English. `searchText()` indexes English and Italian together for component and preset searches.

The interface and document `lang` are fixed to Italian. The former language selector and Zustand language store have been removed; an existing language preference is left untouched. User-authored circuit text, personal block names, document data, and undo history keep their original content.

The primary README and technical documentation are English. `README.it.md` and `docs/it/guide.md` contain the Italian documentation.

## Wire interaction contract

Select drags reconnect existing wire endpoints; only W or a deliberate terminal drag creates a new wire. Clicks do not modify topology. Wire snapping shares one candidate between feedback, preview, and commit, with screen-space acquisition/release thresholds, distance-based target choice, stable crossing ties, and hysteresis. The magnet and Alt/Option bypass both magnetic targets and grid quantization; Free routing keeps exact pointer coordinates. All wire routes protect component bodies throughout the document, including existing paths after movement or rotation and Free/45° routing. The shared `wirePoints` path keeps safe bends, skips bends swallowed by a symbol, and detours obstructed legs; rendering, hit testing, annotations, and image copying use that same path. `routeEditedWire` also removes stored bends that no longer belong to the visible route. Resolved paths are cached by immutable document and wire identity. Interior wire targets carry a perpendicular exit axis through the draft, preview, and commit to avoid retracing the host wire. Connection candidates use the shared document spatial index, including exact off-grid wire ends and zero-length links.

Removing a terminal or junction reuses a shared free connection for its incident endpoints. Removing a branch calls `healWireConnections` only for affected connection IDs; it merges degree-two straight continuations with identical style only when their routed geometry is unchanged. Explicit style splits are not globally merged. Currents and directed highlight spans are remapped by physical position, including reversed fragments. Only round endpoint handles are shown; interior bend handles and double-click bend insertion are removed. Endpoint handles show free/connected state only in the editor; they never enter exported artwork.


Decorative `line` objects share wire routing through a geometry adapter (`lineAsWire`, `linePoints`), with optional v1 `vertices`, `routing`, and graphic endpoint references. Missing routing keeps legacy straight lines in Free mode. Line tools reuse candidate ranking, hysteresis, preview, and edit gestures, while committing graphic objects without splitting wires or creating electrical connections. Transformations temporarily adapt lines to the wire geometry operations, then restore their graphic identity. Selection extraction and deletion freeze detached routes; duplication, replacement, personal blocks, validation, and image copying preserve or remap their graphic anchors.

## Shape anchors and mathematical diagrams

Decorative lines can reference circles and rectangles through normalized local anchors. The shared endpoint resolver follows translation, resizing, and rectangle rotation; copying remaps anchors and removing a host freezes the visible endpoint. These references do not join electrical topology.

Native `angle` annotations store a vertex, radius, starting angle and signed counterclockwise sweep. Editor paths, bounds, labels and SVG/PNG copying share `src/annotations/angle.ts`. The Cartesian axes and Gauss plane presets compose ordinary lines, circles, text, junctions and angles with fresh IDs, so every element remains editable.

Component hit regions follow symbol paths and filled bodies. When stroke hit halos overlap, selection compares actual path distances in screen pixels; Alt/Option cycles paint-order ties. Inline component insertion is automatic when a compatible wire segment can accommodate both terminals. Circuit factories use stroke width 2; the inspector exposes stroke thickness in Borders and preserves authored widths and the highlighter brush size. Multiple selections share a full-width relative rotation field with position and pivot explanations above the controls. Angle placement can infer the exact vertex from two intersecting line/wire segments, without drawing duplicate rays; free placement keeps the three-click workflow and starts with the smaller signed sweep.

## Regression checks

`npm test` uses Node’s built-in test runner and Vite’s existing TypeScript SSR loader, with no additional test framework. `tests/editor-core.test.mjs` covers v1 compatibility, malformed documents, import/download byte limits, project replacement and cancellation, Undo/Redo, multi-selection duplication, external reference freezing, component replacement/deletion, wire splitting, snap bypass, smart insertion, SVG/PNG bounds, numeric validation, menu placement, primary font loading and local-storage recovery. `tests/highlight-eraser.test.mjs` covers highlight geometry and gesture history. The Pages workflow runs both files through the existing `npm test` step for every PR and push to main.

Browser checks remain necessary for actual pointer gestures, focus, font metrics, clipboard permissions and responsive layout. Check 1440×900, 1280×800, 768×1024 and 390×844 with production preview; exercise download/reopen, invalid-file rejection, cancellation, drawing, selection, editing, persistence and Copy as image. No headless-browser dependency is required by this test suite.
