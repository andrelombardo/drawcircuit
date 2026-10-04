# DrawCircuit — verifica del pass UX

Verifiche locali del 4 ottobre 2026, Node 26.5.0. La conferma del commit pubblicato, dei job GitHub Pages e del test nativo sulla PWA aggiornata viene riportata nel messaggio finale di consegna.

## Sidebar e tastiera

- Il listener esistente riceve ⌘T su macOS e Ctrl+T sulle altre piattaforme; usa `toggleSidebar`, lo stesso callback dei pulsanti e la stessa preferenza `drawcircuit.sidebar.v1`.
- Nessuna modifica al documento o alla cronologia. Ripetizione, input, ricerca, textarea, contenteditable, editor testo, dialog, menu e popover proprietà aperti sono esclusi.
- Test nativo in Brave su macOS: ⌘T apre una nuova scheda, prima che l'app possa riceverlo. Non è una scorciatoia affidabile nella normale scheda del browser e non viene mostrata nell'Aiuto.
- L'Aiuto presenta ⌘T solo nella finestra standalone su macOS. La prova con una vera finestra PWA installata viene ripetuta dopo il deploy. Ctrl+T su Windows è coperto dal test del listener, senza dichiarare una verifica nativa Windows.
- Alternative proposte per il browser: **B** oppure **Shift+B**, libere nell'editor attuale e da escludere durante la scrittura. Nessuna alternativa è stata assegnata automaticamente.

## Terminologia e placement

Tutti i testi utente “Label” diventano “Etichetta”, inclusi campi accessibili, placeholder, proprietà e guida. `label`, `label.offset`, schema JSON e serializzazione restano gli stessi. L'audit dei testi visibili non rileva occorrenze utente di “Label”.

La surface flottante del placement è rimossa. “Inserisci in filo” e la scelta del terminale sono nel feedback inferiore esistente, con un solo hint contestuale. Verificati ghost, R, Alt/Option, ancoraggio e inserimento inline; la logica Smart Placement resta quella esistente. [Screenshot placement](evidence/placement.png).

## Zoom

`drawcircuit.zoom.v1` conserva solo il numero dello zoom in localStorage, separato dal circuito. Caricamento con parsing protetto, numero finito positivo e clamp tra 15% e 400%; dati corrotti, NaN, valori negativi o storage inaccessibile usano il comportamento iniziale sicuro. Valori positivi fuori range vengono limitati. Pan non persistito. Fit aggiorna normalmente lo zoom salvato.

- Browser: 50% → reload → 50%; 125% → reload → 125%; 200% → nuova apertura → 200%.
- Test automatici: valori esatti 0.5, 1.25 e 2 dopo remount, wheel/pulsanti/Fit, storage corrotto e indisponibile, limiti e separazione dal documento/pan.
- Build di produzione locale: 120% rimane 120% dopo reload; bundle verificato `index-B2HHtPdB.js`.

## Graffa e Staffa

Un pulsante con icona `{ }`, dopo Maglia e prima di I/V, apre solo **Graffa / Staffa**. I/V contiene corrente, polarità e tensione. Nessuna nuova scorciatoia. R e il comando contestuale riusano la rotazione esistente, con passaggi di 90° e normali operazioni Undo/Redo.

Entrambi gli oggetti tornano esattamente alla geometria iniziale dopo quattro R. Verificati centro, lunghezza, stile, colore, spessore, etichetta e offset, flip, resize, drag, nudge, handle e Undo/Redo. Una Staffa a 90° salvata come Blocco Personale mantiene l'orientamento dopo reload e reinserimento. Il circuito usato per le prove è stato ripristinato esattamente tramite Undo; il blocco temporaneo è stato rimosso.

Otto orientamenti (due forme × 0°, 90°, 180°, 270°) esportati dalla selezione reale nel browser:

- SVG e PNG confrontati visivamente con Obsidian compilato: [confronto](evidence/rotations.html), [screenshot completo](evidence/rotations.png).
- Otto `.tex` compilati con successo dal compilatore LaTeX integrato.
- Otto export Obsidian compilati con il bundle effettivamente installato Inline TikZ 0.2.1 in un processo isolato; risultati e hash in `*-obsidian.svg.result.json`.
- `*-obsidian-normalized.svg` serve solo al confronto: riallinea la scala e l'origine dell'SVG compilato al viewBox originale, senza cambiare il codice esportato dall'app.
- Firma PNG e dimensioni 2× corrette per tutti gli orientamenti: [risultati](evidence/png-verification.json).

## PNG ed export

Eliminate tab, card, descrizione e pagina PNG. **Copia PNG / Scarica PNG** sono pulsanti diretti, con icone e bordo distinti dal selettore dei quattro formati, senza cambiare il pannello attuale. Riutilizzano l'esportatore PNG e `getExportSelection`, con sfondo bianco e fattore 2× interno. [Screenshot della build finale](evidence/production.png).

Provati copia e download sia dell'intero circuito sia della selezione. Entrambi i PNG copiati sono stati incollati realmente in un ricevitore contenteditable: MIME `image/png` ([intero](evidence/clipboard-full.json), [selezione](evidence/clipboard-selection.json)). File scaricati aperti nel confronto; firma e dimensioni controllate. Intero circuito: 850 × 910 px. Selezione non disponibile senza oggetti selezionati; azioni PNG disabilitate per esportazione vuota o in corso.

## Qualità

- 29 nuovi casi: 27 in `ux-cleanup.test.tsx`, due nell'export PNG; test esistenti aggiornati alla nuova UI.
- `npm ci`, lint, 41 file / **1.106 test**, build: tutti riusciti.
- Suite completa comprende placement, Smart Placement, guide, fili, junction/crossing, selezione, pan, nudge, storia, annotazioni, toolbar, sidebar, blocchi personali, persistenza e tutti gli export.
- Console browser locale e produzione locale: nessun errore o warning.
- Nessuna dipendenza, migrazione documento, modifica della pipeline di export, licenza o credenziale aggiunta.
