# Audit QA funzionale, UX, input e stress

Data: 1 ottobre 2026. Agent indipendente `qa_ux_input`. Nessuna modifica al codice di produzione.

Aggiornamento Browser: l'utente ha successivamente esposto l'app tramite un URL pubblico autorizzato. Il master può controllare quel Browser; il runtime del presente subagent non vede browser disponibili (`browsers.list()` restituisce `[]`). Il master svolgerà le azioni reali e questo agent può revisionare in modo indipendente gli screenshot prodotti. I risultati originali DOM riportati sotto rimangono distinti; le verifiche reali saranno aggiunte dopo la loro esecuzione.

## Metodo e limiti

Nel primo passaggio il Browser dell'app è stato tentato dal master attraverso il plugin autorizzato, ma la navigazione a `http://127.0.0.1:5174` era negata dalla preferenza di sicurezza salvata. Non sono stati usati browser alternativi o aggiramenti. Le prove iniziali usano il vero albero React dell'app e interazioni DOM in jsdom, con bounding box e API browser mockate secondo il test harness già presente. Il successivo URL pubblico, esposto e autorizzato dall'utente, ha consentito le prove Browser del master e la revisione indipendente delle immagini descritta in fondo.

La prima prova della UI di questo agent è avvenuta **prima di leggere il codice di produzione**, ma dopo la lettura del test harness. È quindi una prova simulata della discoverability, non un test manuale indipendente di uno studente, né un vero E2E browser. Il master ha poi coordinato un diverso agent che ha deciso le azioni del primo utilizzo in Browser senza leggere il codice. I risultati di quel test e le prove dinamiche Browser del master sono distinti dalle prove DOM di questo report. I viewport 1440×900, 1280×800 e 1024×768 sono stati successivamente verificati mediante screenshot reali e geometria DOM.

Evidenza riproducibile: `tests/audit-ux-input.test.tsx`. Comando: `npx vitest run tests/audit-ux-input.test.tsx`. Esito del passaggio iniziale 23:26:56: **10 pass, 4 expected fail**. I quattro `it.fails` erano tre problemi consolidati (focus conta una volta per entrambi i dialoghi). Dopo le correzioni del master sono stati convertiti in `it`: passaggio finale 23:48:46 **14 pass, 0 expected fail**. Anche lint isolato passa. Log finale: `docs/audit/evidence/qa-ux-input-vitest-after.log`.

## Risultato della prima prova della UI

Task: batteria, tre resistenze, quattro nodi, una freccia di maglia.

- Batteria trovata con i nomi visibili “Batteria multicella” e “Batteria a cella singola”; tre resistenze inserite con lo stesso strumento attivo. Il tentativo iniziale con selettore “Inserisci batteria” era un errore del test, non un bug prodotto.
- Toolbar: gli strumenti hanno `aria-label`, `title` e `aria-pressed`; inserimento, selezione, Nodo, Filo e Maglia sono richiamabili con nomi espliciti nel DOM. Esporta TikZ ha testo visibile dedicato. La chiarezza delle icone richiede ancora prova visiva.
- Rotazione trovata nella toolbar contestuale “Ruota 90° (R)”. Inserimento ripetuto dei componenti ha hint “R ruota · Esc termina”.
- Rinominare il nodo è possibile nel campo “Nome nodo” dopo inserimento/selezione. Il testo `r_{AB}` è rappresentato come pedice nell'app e non attiva rotazioni durante l'editing.
- Maglia trovata col controllo “Maglia (L)” e creata con trascinamento. La guida spiega il gesto.
- Collegamento nodo → nodo completato automaticamente al nodo finale. Il draft del filo ha hint “Enter per terminare”; la guida indica anche doppio clic per il punto libero. Nessun difetto di discoverability dimostrato qui.
- Sorpresa concreta: tre clic successivi dopo avere scelto Nodo creano **un solo nodo**, perché lo strumento torna a Selezione. Riattivando Nodo quattro volte il task è completato. La ripetizione mediante Shift è presente nel codice ma assente da guida e hint del Nodo; vedere UX-04.

## Problemi riprodotti

### INPUT-01 — P2, Medium friction: Escape non chiude la conferma di sostituzione

Steps:

1. Inserire una resistenza.
2. File → Nuovo circuito, oppure File → Apri circuito di esempio.
3. Premere Escape nel dialogo “Sostituisci circuito”.

Expected: annullamento della richiesta e ritorno al disegno, mantenendo il documento.

Actual: il dialogo rimane aperto. La scorciatoia globale ritorna immediatamente quando esiste un dialogo; la conferma, a differenza di Help/Export, non ha un proprio gestore Escape. Il pulsante Annulla funziona come workaround.

Evidenza: expected failure `AUDIT P2: Escape dismisses the replace-circuit confirmation without changing the document`. Origine: `Toolbar.tsx` conferma, `useCanvasInteractions.ts` guardia dialogo. Suggerimento circoscritto: gestire Escape nella conferma senza modificare il circuito.

### INPUT-02 — P2, Medium friction: focus resta fuori dai dialoghi

Steps:

1. Portare il focus sul pulsante Guida e scorciatoie, oppure Esporta TikZ.
2. Attivare il pulsante.
3. Controllare `document.activeElement` e il suo contenimento nel dialogo.

Expected: il focus entra nel dialogo, viene contenuto nelle sue azioni e torna all'invocante quando chiuso.

Actual verificato: il focus resta sul pulsante sottostante esterno al dialogo appena aperto. Il markup dichiara `aria-modal=true`, ma nessun codice trasferisce il focus. È presente lo stesso schema nella conferma. La navigazione Tab reale non è stata provata; l'assenza di trasferimento iniziale è riprodotta nel DOM, mentre l'assenza di contenimento/ripristino è corroborata dalla lettura dei gestori.

Evidenza: due expected failures `AUDIT P2: Guida e scorciatoie moves keyboard focus inside its modal` e `AUDIT P2: Esporta TikZ moves keyboard focus inside its modal`. Suggerimento circoscritto: gestione condivisa del focus per i tre dialoghi, senza nuove funzionalità di disegno.

### INPUT-03 — P3, Low friction: Escape non chiude il menu File

Steps:

1. Aprire File.
2. Premere Escape.

Expected: chiusura del menu.

Actual: il menu e Salva JSON rimangono disponibili; Escape agisce sullo stato del disegno, senza cambiare lo stato locale del menu. Workaround: ricliccare File o la chiusura esterna.

Evidenza: expected failure `AUDIT P3: Escape closes the File menu`. Suggerimento: gestire Escape nel menu, consumando il tasto quando il menu è aperto.

### UX-04 — P3, Low friction: ripetizione dei nodi poco scopribile

Steps:

1. Inserire tre resistenze mediante tre clic successivi: lo strumento rimane attivo.
2. Scegliere Nodo e cliccare quattro posizioni.

Expected UX: indicazione chiara se il Nodo è un inserimento singolo e del gesto già disponibile per ripeterlo.

Actual: nasce solo il primo nodo; gli altri clic selezionano/deselezionano. `Shift + clic` mantiene Nodo attivo, ma il suggerimento Nodo non lo menziona e la guida parla di Shift solo per selezione multipla.

Evidenza: primo tentativo del task piccolo aveva 1 nodo al posto dei 4 attesi; il workflow corretto riattiva Nodo prima di ogni inserimento. Non è un bug nel modello. Suggerimento a basso costo: spiegare l'esistente Shift per ripetere Nodo nell'hint/guida; nessun redesign o nuovo strumento.

**Totale consolidato di questa area: 0 P0, 0 P1, 2 P2, 2 P3. Frizione: 0 High verificata, 2 Medium, 2 Low.** Nessun problema aggiunto sulla base di sola ipotesi.

## Verifiche funzionali riuscite

- Cmd e Ctrl: seleziona tutto, copia, incolla, duplica, Delete, Backspace, undo e redo (`Shift Z`), con preservazione del documento serializzato.
- Backspace sul canvas cancella gli oggetti selezionati e usa `preventDefault`; la navigazione indietro reale del browser resta da verificare.
- Undo/redo deselezionano per scelta attuale dello store: i test iniziali di Backspace dopo redo non avevano riselezionato l'oggetto. Corretto il harness; non classificato come bug.
- Il nome `r_{AB}` può essere modificato senza attivare R/rotazione, tool switch, Delete/Backspace o Cmd/Ctrl D/Z/A/C/V globali. Test su editor inline, campo label, titolo e ricerca.
- Escape annulla modifiche alla label e al titolo; conferma inline salva il testo.
- Escape annulla draft filo, e pointer cancellation ripristina il documento prima del drag.
- Zoom con ruota rimane ancorato al cursore e consuma l'evento; pinch-like `ctrlKey` e delta estremi mantengono numeri finiti con clamp 0,15×…4×. Mostra/nascondi griglia funziona.
- I dialoghi Help/Export consumano Escape. Durante Export i shortcut globali non modificano il documento.
- Attraverso otto mount/unmount, tutti i sei tipi di listener nativi window del canvas e i listener wheel non passivi hanno rimozioni bilanciate con identica funzione: nessuna crescita dimostrata in questa superficie.

## Stress: 100 componenti + 200 fili + 100 annotazioni

Dataset deterministico: 100 resistenze su griglia 10×10, 200 fili con riferimenti a terminali (100 con routing esplicito), 100 annotazioni. Il test usa le interazioni del componente App, senza chiamare le mutazioni dello store per il workflow misurato.

Sono riusciti: pan con 25 pointermove, zoom con 20 eventi, selezione e drag con 20 pointermove, 20 cicli undo/redo del drag con uguaglianza del documento, nuova connessione, multiselezione di due componenti e drag di gruppo con 10 pointermove, undo/redo di gruppo e marquee. Dopo il filo aggiuntivo risultano 401 oggetti e il documento passa deserializzazione/validazione. Gli endpoint seguono il componente mosso.

Misura locale jsdom del passaggio 23:26:56, millisecondi di esecuzione sincrona **inclusi dispatch React/test/assert dove presenti**:

| Operazione                   |    ms |
| ---------------------------- | ----: |
| Render iniziale              |  57,0 |
| Pan, 25 movimenti            |  68,3 |
| Zoom, 20 eventi              |  97,3 |
| Selezione/drag, 20 movimenti | 159,6 |
| Undo/redo, 20 cicli          | 387,4 |
| Connessione nuova            |  73,5 |
| Multiselezione/drag gruppo   |  98,8 |
| Marquee                      |  26,2 |

Profiler React: 135 commit, somma `actualDuration` 346,3 ms. DOM finale: 3.555 elementi. Nessuna soglia browser o giudizio di lag è dedotto da questi numeri. Non sono misure di FPS, input latency, heap del browser o frame drops; serve il browser per farle. Nessun nuovo bug prestazionale è dimostrato da queste prove. Metriche grezze in `docs/audit/evidence/qa-ux-input-stress-dom.json` e log in `docs/audit/evidence/qa-ux-input-vitest.log`.

La fixture originale di 400 oggetti per importazione attraverso File → Apri JSON è `docs/audit/evidence/qa-stress-100-200-100.json` (170.359 byte). È stata prodotta e validata nello stesso test, senza esporre o modificare lo store attraverso il Browser.

## Stato dopo le correzioni

Il master ha corretto INPUT-01, INPUT-02 e INPUT-03: conferma e menu si chiudono con Escape; il focus dei dialoghi viene spostato al primo controllo, contenuto al bordo con Tab/Shift Tab e ripristinato sul trigger alla chiusura. Le due prove focus già presenti sono state rafforzate per verificare proprio questi comportamenti osservabili, senza duplicare la logica dell'helper. Le 14 prove di questa area passano. Anche UX-04 è stato risolto spiegando Shift per inserimenti ripetuti del Nodo in hint e guida. Nessuna nuova funzione di disegno è stata aggiunta da questo agent.

Il master ha inoltre riprodotto e corretto il footer dell'export parzialmente tagliato a 1280×720. Le immagini `master-export-before.png` e `master-export-after.png` dimostrano che Copy TikZ e Download .tex ora sono interamente visibili; la misura Browser del footer inferiore 637,9 px rimane dentro il dialogo inferiore 668,9 px. Questa verifica visuale è indipendente dalla prova DOM. Il problema è da consolidare nel conteggio del master, non da conteggiare una seconda volta qui.

Rimangono da rendicontare nel report del master le prove dinamiche Browser (clipboard/download, console/resources, stress nativo e golden workflow). Le mie misure jsdom continuano a non certificare FPS, heap o input latency. Il criterio finale di prodotto dipende dalla raccolta di tali prove del master.

## Revisione indipendente di screenshot Browser reali

Screenshot esaminati dopo lo sblocco: `docs/audit/evidence/student-01-start.jpg` e `student-02-components-nodes.jpg`, entrambi 1280×720. Operatore Browser: master; valutazione visiva indipendente: questo agent. Il primo mostra l'editor vuoto e il secondo il task batteria/tre resistenze/nodi in corso.

In queste due immagini la topbar, il menu File e Esporta TikZ sono presenti e leggibili senza collisioni; la palette mostra ricerca, card componenti e preferenza font utilizzabili; canvas, zoom e footer non risultano tagliati. La toolbar contestuale Nodo è visibile interamente. La ricerca batteria mostra le due varianti con nomi chiari. Non è stato rilevato un bug di layout in queste immagini. La misura 1280×720 è distinta dal viewport richiesto 1280×800; manca ancora la serie dei tre viewport specifici e il controllo dinamico delle interazioni.

### Responsive finale, screenshot Browser reali

Sono stati successivamente esaminati con `view_image` i seguenti screenshot del master, dopo le correzioni:

| Viewport CSS                        | Evidenza                | Revisione visiva indipendente                                                                                                                                                                                                                      |
| ----------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1440×900                            | `viewport-1440x900.png` | Topbar, File, Export, palette, proprietà della resistenza selezionata, zoom, footer e circuito completo visibili; nessuna collisione osservata.                                                                                                    |
| 1280×800                            | `viewport-1280x800.png` | Stessi controlli leggibili e circuito completo contenuto nel foglio; nessuna collisione osservata.                                                                                                                                                 |
| 1024×768                            | `viewport-1024x768.png` | Badge decorativo omesso, toolbar/File/Export disponibili; palette e toolbar contestuale leggibili; circuito completo contenuto.                                                                                                                    |
| 800×700, finestra stretta opzionale | `viewport-800x700.png`  | Toolbar/File/Export e proprietà accessibili; il circuito a destra è fuori dal foglio nella vista catturata, mentre Fit e pan restano disponibili. È necessaria una prova di Fit/stabilità prima di classificare questo comportamento come difetto. |

`docs/audit/evidence/viewport-layout.json` conferma assenza di overflow orizzontale e controlli della toolbar entro i limiti per tutte e quattro le dimensioni CSS. La conclusione sui tre viewport richiesti deriva anche dalla lettura delle immagini, non dalle sole misure. L'immagine opzionale 800×700 è un raster fisico 800×600 con il contenuto ridotto: non uso le sue coordinate pixel come misura esatta della geometria CSS. I tre screenshot richiesti hanno invece le dimensioni corrispondenti.

**Esito responsive richiesto: pass visivo a 1440×900, 1280×800 e 1024×768.** Nessun nuovo bug responsive dimostrato sui normali viewport laptop testati. La finestra stretta opzionale richiede pan/Fit nella vista catturata; non è stata trasformata in una richiesta di redesign mobile.

## Completamento del coordinatore — 2 ottobre

Rafforzata la chiusura File con Escape: ora l’evento viene consumato prima del canvas e conserva la selezione, verificata nel browser. Le 14 prove dell’area passano nella suite finale da 281 test. La finestra stretta 800×700 è stata riprovata con Fit: circuito interamente visibile in `evidence/viewport-800x700-fit.jpg`, questa volta con raster 800×700. Golden, stress e download reali sono rendicontati nel [report finale](report-finale.md); il percorso keyboard clipboard rimane non certificato dal browser controllato.
