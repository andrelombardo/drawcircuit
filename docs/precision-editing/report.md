# Precision editing, PNG e Brace / Bracket

## Keyboard nudge

Le frecce spostano la selezione di **1 unità canvas**; Shift usa **10 unità**. I valori sono centralizzati in `useKeyboardNudge.ts`. La geometria è indipendente dallo zoom e non passa attraverso Smart Placement o snapping.

Il movimento del drag è stato estratto in `moveSelection`: mouse e tastiera usano la stessa operazione, compresa la preparazione del percorso di un filo selezionato con un terminale esterno fisso. I terminali e i Junction restano riferimenti semantici, risolti nella nuova posizione. Componenti multi-terminal, testo, frecce, maglie, annotazioni I/V indipendenti e Brace/Bracket seguono le primitive esistenti.

Il primo keydown apre `beginGesture`, i repeat aggiornano una preview dalla geometria iniziale, e il rilascio dell’ultima freccia chiude `endGesture`. Le diagonali e il cambio di Shift durante la pressione mantengono un solo Undo. Blur, cambio di focus, pointerdown e altre azioni chiudono la transazione. Undo/Redo conservano esattamente documento iniziale e finale. Non vengono serializzati documenti a ogni repeat; la persistenza continua a salvare lo stato commesso.

Input, textarea, select, contenteditable, editor delle label, controlli interattivi, menu/popover e dialog consumano normalmente le frecce. Il nudge non prende il controllo di un drag già aperto.

## PNG

Pipeline: **documento → `getExportSelection` quando richiesto → `exportSVG` → SVG Image → Canvas → `toBlob('image/png')`**. Nessun renderer elettrico aggiuntivo. I font KaTeX locali eventualmente usati vengono incorporati nel contesto isolato dell’immagine SVG; Comic Sans usa il normale font di sistema dell’editor.

Il PNG usa **2×**, dimensioni arrotondate per eccesso al pixel, **sfondo bianco**, bounding box e padding da **12 unità** dell’export SVG. Griglia, UI, selection, handle, hover e guide sono esclusi dalla pipeline vettoriale.

Il pannello PNG è una scheda del dialog Export, con **Copia PNG** e **Scarica PNG**. La copia usa `ClipboardItem` con MIME **`image/png`** e passa subito la promise dell’immagine a `navigator.clipboard.write`, conservando l’attivazione dell’utente. Un browser che nega o non supporta la copia mostra il feedback dell’app e mantiene il download disponibile. Il nome segue il titolo del documento, come SVG e LaTeX.

## Brace / Bracket

È stato aggiunto un oggetto `kind: 'brace'` con `type: 'brace' | 'bracket'`, `start`, `end`, `side`, `color`, `width` e la normale `Label` del progetto. L’orientamento deriva dagli endpoint, senza uno stato duplicato. Non possiede terminali e non partecipa alla topologia.

L’inserimento è nel menu I/V già esistente: **Brace · Graffa** o **Bracket · Staffa**, poi click-drag. L’asse dominante del gesto determina orizzontale/verticale. La label iniziale è vuota. **Inverti lato** è contestuale; i due handle ridimensionano lungo l’asse conservando l’altro endpoint e il lato. Drag del corpo, drag della label e nudge usano le operazioni comuni.

Label, Comic Sans, LaTeX, pedici, colore, dimensione, doppio clic, Enter/Esc e stile usano `MathText` e i controlli esistenti. Creazione, movimento, resize, flip, label, stile e cancellazione seguono la history ordinaria.

JSON e localStorage restano alla **versione 1**, con validazione del nuovo oggetto e compatibilità dei documenti precedenti. Copia/incolla, duplicazione, subset di export e Blocchi Personali usano estrazione, coordinate relative e rimappatura ID già presenti, comprese le rotazioni dei blocchi.

## Export

**SVG, PNG, TikZ standard e Obsidian** includono entrambi gli stili e le label. Canvas, SVG e TikZ usano la stessa geometria vettoriale di `braceGeometry`. La graffa è una sequenza di curve Bézier; la staffa è una polilinea. TikZ usa questa stessa geometria invece di una decoration con una forma diversa: non è necessaria la libreria `decorations.pathreplacing`, quindi non viene importata.

Il golden test completo è stato compilato con il compilatore LaTeX dell’editor desktop. Il codice Obsidian completo e quello della sola selezione sono stati compilati con il bundle **Inline TikZ 0.2.1** installato, in un processo isolato senza modificare note o plugin.

Il [confronto visivo](evidence/comparison.png) mostra SVG, PNG scaricato e SVG compilato da Obsidian alla stessa scala. Coincidono lunghezza, lato, colore, stroke, label, font e posizione. [Pagina di confronto](evidence/comparison.html), [SVG](evidence/golden.svg), [PNG](evidence/golden.png), [LaTeX](evidence/golden.tex), [Obsidian](evidence/golden-obsidian.md).

## Quality

- **56 nuovi test** in quattro suite: nudge/focus/history, modello Brace/Bracket, PNG e workflow UI.
- **1.077 test passati** in 40 file; `npm run lint` e `npm run build` passati con **Node 26.5.0**.
- Copertura di step/Shift/zoom, multi-selection, Junction, terminali e fili collegati, key repeat, Undo/Redo e isolamento degli input; geometria su entrambi gli assi, flip/resize/offset, stile, serializzazione, persistenza, clone e blocchi; rasterizzazione, firma PNG, dimensioni, fondo, subset, clipboard e fallback.
- La suite completa conserva i controlli esistenti su placement, Smart Placement, inline insertion, fili/Junction/crossing, annotations, guide, selection, presets, blocchi, persistenza, export e PWA.
- Nel browser locale: tre resistori collegati; nudge e Shift; fili, Undo/Redo, gruppo e caret; golden Brace con `R_eq` → `R_{eq}`, drag, resize, flip, colore/spessore, nudge; duplicazione; reload; blocco salvato e reinserito a 90° con nuovi ID; export completo e della sola Brace.
- PNG completo **1.150 × 844**, selezione **774 × 192**, entrambi validi e con dimensioni 2× del rispettivo SVG. [Verifica](evidence/png-verification.json).
- Incolla reale in un target contenteditable: il paste event ha ricevuto un file **`image/png`**. [MIME registrato](evidence/clipboard-mime.json). È stato verificato anche il rifiuto della clipboard con download ancora disponibile.
- Nessun errore uncaught o warning React nella console delle prove locali; nessuna geometria NaN/undefined. I documenti e le rimappature dei riferimenti sono validati dai test.

La pubblicazione segue il workflow GitHub Actions `deploy-pages.yml`; build e deployment devono riferirsi allo stesso commit prima dello smoke test pubblico.

## Limiti mantenuti intenzionalmente

PNG a 2× su bianco, senza controlli aggiuntivi per trasparenza o scala. Le immagini oltre 64 milioni di pixel o 32.767 pixel per lato ricevono un errore leggibile. La copia dipende dai permessi del browser; il download resta disponibile. Su dispositivi senza Comic Sans resta il fallback del font già previsto dal progetto.
