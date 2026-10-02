# Polish UX: selezione, label, guide, export e proprietà

2 ottobre 2026. Implementazione completata nel progetto DrawCircuit.

Il modello elettrico, lo schema JSON v1 e gli exporter del circuito completo sono invariati. Placement, Smart Placement, fili, Quick Junction, Inline Insertion, libreria, preset, font, LaTeX, pan/zoom e history continuano a usare i percorsi precedenti. Nessuna dipendenza aggiunta.

## 1. Selection UI

La selezione singola di componenti e Junction evidenzia direttamente il simbolo con un piccolo alone blu. Nessuna grande bounding box e nessun resize handle generico. I terminali restano visibili sui componenti selezionati. Le annotazioni di testo hanno un feedback leggero.

La selezione multipla mostra una sola cornice comune, senza fill, con stroke discreto. Il rettangolo è `pointer-events: none`: non intercetta label o corpo degli oggetti. Gli handle di wire, Arrow e Loop Arrow mantengono le loro funzioni specifiche. Il rettangolo della Loop Arrow appartiene ai suoi controlli di ridimensionamento, non alla vecchia selezione dei componenti.

## 2. Grab e grabbing

In Select, corpo, Junction, annotazioni, Arrow, Loop Arrow e label collegate usano `grab`; il drag di elementi o label usa `grabbing`. Il drag degli oggetti selezionati mantiene la selezione multipla. Space/H usa `grab` sul foglio e `grabbing` durante il pan. Negli strumenti di disegno il cursore segue lo strumento. Terminali e control point hanno crosshair; gli angoli delle Loop Arrow hanno `nwse-resize`. Input e controlli mantengono i propri cursori.

Lo stato del gesto viene ripulito con pointerup, pointercancel, Escape, undo/redo, cambio strumento e perdita del focus. Tornare al punto iniziale durante il drag ripristina anche l'ultima posizione anziché lasciare la preview precedente.

## 3. Label indipendenti

Il target `data-label` prende priorità sul corpo e sul gruppo selezionato. Il click attiva la label e seleziona il suo proprietario; trascinarla aggiorna esclusivamente `label.offset`, con precisione di una unità. Componenti, terminali e wire rimangono fermi. La label resta semanticamente collegata al componente/Junction. Il doppio clic apre lo stesso editor LaTeX; click sul corpo torna alla selezione del componente.

## 4. Nearest neighbors

Un `GuideIndex` viene costruito una volta all'inizio del drag contro il documento immutabile di partenza. Celle da 160 unità e query intorno ai lati del bounds evitano scansioni complete a ogni pointermove. Oggetti molto grandi usano una lista separata, evitando l'allocazione di migliaia di celle.

I candidati sono locali, entro 800 unità. Si cerca il più vicino a sinistra/destra oppure sopra/sotto, escludendo selezione, wire, sovrapposizioni e oggetti fuori asse. Componenti e Junction costituiscono la stessa famiglia geometrica; le annotazioni costituiscono una famiglia distinta, così un testo vicino non suggerisce distribuzioni ai componenti. Gli assi dei componenti usano la loro origine e i terminali, anche per simboli asimmetrici come l'induttore.

## 5. Distanze

Le quote misurano il gap fra estremità della geometria visibile, senza il padding dei bounds usati per il clic e senza includere le label. Nei bipoli in linea corrispondono allo spazio terminale–terminale, cioè al tratto di wire visibile. Per Junction sono nodo–nodo. Gli estremi Bézier dei simboli sono bounds conservativi comprendenti i control point. Le unità sono quelle del canvas, senza suffisso px.

Il gruppo usa un unico bounds della sua geometria. Le quote interne al gruppo non vengono mostrate. Sono visibili solo durante il drag, su un solo asse, con massimo due misure.

## 6. Equal-spacing detection

Si confrontano i gap sui due lati. Differenze inferiori a 0,01 unità identificano l'equidistanza: entrambe le quote diventano verdi, con un piccolo segno `=`. Per estendere una distribuzione si confronta anche il gap fra il vicino e il suo vicino esterno. Nessun layout automatico o modifica degli altri oggetti.

## 7. Equal-spacing snap

Entro 7 pixel dello schermo dalla posizione equidistante, il movimento scatta a quella posizione, anche quando non coincide con la griglia. La soglia viene convertita attraverso lo zoom. Alt/Option disattiva spacing, allineamenti e prossimità dei terminali, mantenendo il normale movimento sulla griglia.

Priorità: prossimità terminale/Junction, equal spacing, allineamento, distanza del vicino. La prossimità terminale durante il drag corregge solo la posizione: non crea o modifica riferimenti elettrici. Uno snap rimane parte della transazione di movimento e produce una sola operazione Undo.

## 8. Orizzontale e verticale

Lo stesso algoritmo opera su X e Y. Supporta resistor, capacitor, inductor, source, diode, generic block e Junction tramite geometria del registry, senza casi speciali per resistor. Integra allineamento delle origini/centri, top/bottom o left/right edge corrispondenti, terminali e baseline delle annotazioni.

## 9. Export selezione

Il dialogo Export conserva i formati e i pulsanti esistenti e aggiunge il controllo di ambito: **Tutto il circuito / Solo selezione**. I pulsanti diventano **Copia TikZ selezione** e **Copia selezione per Obsidian** nell'ambito selezionato. Funziona anche il download standalone nello stesso ambito. Senza selezione valida, Solo selezione è disabilitato con spiegazione.

Una proiezione separata raccoglie gli oggetti esportati e trasla la loro origine vicino a (0,0), preservando distanze relative e offset. Il bounds considera solo gli oggetti inclusi e le loro label; il normale exporter lascia a TikZ il ritaglio sulla geometria emessa. L'export completo e le regole di copia/incolla dell'editor sono invariati.

## 10. Wire e Junction nell'export

- Include wire esplicitamente selezionati oppure con entrambi gli endpoint appartenenti a componenti/Junction selezionati.
- Esclude automaticamente collegamenti verso componenti esterni; non attraversa l'intera rete per includere altri oggetti.
- Include Junction selezionate e quelle riferite dai wire inclusi. Le altre Junction rimangono escluse.
- Un wire esterno selezionato esplicitamente viene rispettato: i pin dei componenti assenti diventano endpoint liberi, mantenendo il percorso originale. Non restano riferimenti invalidi.
- Include automaticamente label, offset, colori, spessori e testo interno dei componenti selezionati. Le annotazioni autonome richiedono selezione esplicita.

## 11–13. Audit del vecchio popover e azioni mantenute/rimosse

| Controllo precedente                                | Classificazione                                        | Risultato                                                                                    |
| --------------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| Testo interno dei blocchi                           | SECONDARY                                              | Rimane in More, soltanto sui simboli che lo supportano                                       |
| Colore pallino nodo, indicato da `●`                | ESSENTIAL                                              | Colore del nodo nella toolbar Junction; colore della label separato in More                  |
| Dimensione testo senza caption                      | ESSENTIAL per componente/testo; SECONDARY per Junction | Controllo `Type`, etichetta Testo e valore numerico; diretto o in More secondo il tipo       |
| Allineamento del testo                              | SECONDARY                                              | Rimane in More soltanto per annotazioni di testo                                             |
| Tipo freccia                                        | SECONDARY                                              | Rimane in More soltanto per Arrow                                                            |
| Rotazione label, simbolo custom `A↻`                | SECONDARY                                              | Pulsante testuale Ruota label con RotateCw                                                   |
| Duplica                                             | ESSENTIAL                                              | Copy direttamente nella toolbar; shortcut mantenuta                                          |
| Spessore componente senza caption                   | ESSENTIAL                                              | Tratto direttamente nella toolbar dei componenti                                             |
| Ruota selezione, già disponibile come Ruota 90° e R | REDUNDANT nella selezione singola                      | Rimossa la copia nel popover; rotazione diretta per componenti/gruppi e shortcut R mantenute |

Restano anche i precedenti controlli diretti: label/testo, colori, inversione freccia, spessore di wire/frecce e Delete. Il colore del simbolo usa il campo di stile già esistente, distinto dal colore della sua label. Nessuna funzione dell'app è stata rimossa. Gli swatch restano sugli schermi ampi; nei fogli stretti il color picker compatto permette gli stessi colori.

## 14. Icone e accessibilità

Copy per Duplica, RotateCw per rotazioni, Trash2 per Delete, FlipHorizontal per inversione, Type per dimensione testo, MoreHorizontal per altre proprietà. Il vecchio `A↻` è sostituito da un'azione descritta per esteso. Spessore, colore e dimensione hanno caption/titoli, senza icone ambigue.

I pulsanti icon-only hanno aria-label, title e tooltip contestuali con ritardo di 300 ms. Focus visibile e hitbox di 30×32 px per le azioni principali. More ha nome accessibile e focus da tastiera. Escape chiude prima More senza perdere selezione; gli editor cancellano poi l'editing; l'Escape successivo segue la selezione preesistente. Click esterno chiude il popover e nasconde la toolbar; il click sul corpo/label riapre le proprietà. Il normale click sullo sfondo conserva la precedente deselezione.

## 15. More e posizione

More rimane per componenti (rotazione label, colore simbolo, eventuale testo interno), Junction (stile della label), testo (allineamento), Arrow (forma). È eliminato per wire, Loop Arrow e gruppi, che hanno solo azioni dirette applicabili.

La toolbar misura il proprio ingombro e le label SVG/KaTeX renderizzate. Preferisce sopra la selezione, cerca sotto o una posizione vicina quando incontra altri simboli/label, e rimane entro i margini del foglio. Gli ostacoli selezionati hanno priorità. È nascosta durante drag e editing, e su fogli stretti rimane compatta. Nessun calcolo di collisione della toolbar viene eseguito durante le preview di drag.

## 16. Test e performance

Suite iniziale: **740 test**. Suite finale: **788 test in 22 file**, tutti passati, inclusi tutti i test precedenti invariati. **48 test aggiunti** in `tests/ux-guides-export.test.ts` (32) e `tests/ux-refinement-interactions.test.tsx` (16).

Coprono: assenza della vecchia bounding box, attivazione e pointer interaction delle label, drag isolato, doppio clic LaTeX, Space pan, nearest neighbors su entrambi gli assi, gap, detection/snap, zoom e Alt, distribuzione locale, priorità terminali, Junction, cinque altri tipi di componente, gruppo, assenza di dati UI in export/history, Undo/Redo/cancel, export TikZ/Obsidian e clipboard, filtro wire, Junction necessarie, coordinate normalizzate, selezione vuota, mapping adattivo delle azioni, More/Escape/click esterno e handle delle frecce.

**Build, ESLint e formattazione dei file modificati: passati.** Le suite precedenti coprono Smart Placement, Inline Insertion, fili, snapping, Quick Junction, labels/LaTeX/Comic Sans, Arrow/Loop Arrow, sidebar, preset, JSON/localStorage, undo/redo e tutti i formati di export.

Indice verificato con 3.000 componenti: la query locale restituisce meno di 15 candidati. Benchmark geometrico Node su 1.000 movimenti: costruzione indice 11,74 ms; mediana 0,019 ms; p95 0,087 ms; massimo 37,88 ms. Non misura rendering browser né FPS; non implica una garanzia di 60 fps. I simboli continuano a essere memoizzati; il layer delle quote è separato e le guide non vengono persistite né copiate.

## 17. Golden Workflow

Completato nel browser reale, con verifiche automatiche DOM dei feedback temporanei:

1. Creata R1, verificato grab, trascinata da (-120,0) a (-80,40).
2. Trascinata la label indipendentemente: corpo invariato, label attivata e spostata.
3. Doppio clic label: editor LaTeX aperto e conferma funzionante.
4. Creati R2/R3/R4 in linea, A/B e quattro fili usando Wire e Junction normali.
5. R3 spostata da X=-100 a X=-20: i tratti R2–R3 e R3–R4 misurano entrambi **160**. Nessun rettangolo di selezione singola.
6. Tre resistenze verticali a Y=-220/-60/220: la centrale scatta a Y=0; gap entrambi **140**.
7. Multi-select R2/R3 con Shift-click: cornice comune e movimento del gruppo di 40 unità su Y, preservando distanze relative e connessioni.
8. Export selezione: **due componenti, un filo interno, tre oggetti**. Label R2/R3 presenti, R1/R4 e wire esterni assenti, origine normalizzata.
9. TikZ copiato e verificato negli appunti del browser; Obsidian copiato con blocco Markdown completo.
10. Toolbar verificata su resistor, capacitor, Junction, wire, Arrow e Loop Arrow; inversione disponibile sulle frecce, tre handle specifici sulla Loop Arrow, niente More su wire/Loop Arrow.
11. More di R3 ed Escape verificati: chiusura senza deselezione. Tooltip Duplica verificato con ritardo di 300 ms e screenshot.
12. **Zero errori o warning nella console finale.**

Le quote verdi e grabbing durante il gesto sono verificati nei test di interazione, che controllano la preview prima del pointerup; le posizioni simmetriche e i tratti risultanti sono verificati anche nel browser reale. Il browser controllato non ha notificato il download JSON e non ha eseguito la combinazione Cmd+C per il clipboard JSON: quei due percorsi sono coperti dai test esistenti; non viene dichiarata una verifica browser riuscita del download. Nessun nuovo rendering TeX è stato compilato in questo passaggio; gli exporter completi conservano i test precedenti.

## Evidenze

- [Golden Workflow e tooltip](evidence/golden-workflow.png)
- [Dialogo Solo selezione](evidence/export-selection.png)
- [TikZ selezione catturato dal browser](evidence/selection.tex)
- [Obsidian selezione catturato dal browser](evidence/selection.md)
- [Verifiche browser](evidence/browser-verification.json)
- [Suite iniziale](evidence/baseline-tests.log)
- [Suite finale](evidence/tests.log)
- [Build](evidence/build.log), [lint](evidence/lint.log), [format](evidence/format.log)
- [Benchmark geometrico](evidence/performance.json)
