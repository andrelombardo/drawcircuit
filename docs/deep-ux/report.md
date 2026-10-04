# DrawCircuit — verifica UX, 4 ottobre 2026

## Risultato

Quote basate sui corpi dei simboli, riferimenti sui rami collegati, editing inline condiviso, movimento indipendente delle label, creazione diretta dei fili dai terminali, PNG a 4× e icone installate più leggibili. Le modifiche riutilizzano catalogo, indice delle guide, routing e transazioni esistenti. Quattro filoni di lavoro sono stati implementati e revisionati con agenti, poi integrati e provati nel browser.

## Smart Measurements

- Il catalogo espone `measurementBounds`, ricavato dalla geometria dei simboli. I lead e i segni ausiliari hanno metadati separati; i path originali restano identici per SVG, TikZ e Obsidian. Le curve usano gli estremi effettivi dei Bézier.
- `getMeasurementBounds` trasforma il corpo in coordinate del documento per tutte le quattro rotazioni. Resistenza europea: bordi del rettangolo; americana: zig-zag; condensatore: piastre; induttore: bobina; sorgenti: corpo circolare; diodi, transistor e porte: corpo del simbolo.
- All'inizio del gesto si risolvono endpoint semantici e primo tratto rettilineo dei fili collegati. Il primo bend ferma la misura; un componente usa il bordo del corpo, una Junction il punto del nodo, un endpoint libero il suo punto. L'indice spaziale individua anche corpi o nodi intermedi di documenti importati non ancora suddivisi.
- Un riferimento vicino prevale su uno remoto. Il tratto superiore con due angoli mostra le due distanze agli angoli; aggiungere R2 fa terminare la quota sul suo corpo.
- Il drag offre due quote simultanee e snap di equidistanza entro 7 pixel dello schermo. Le quote uguali assumono il colore di accento. Le assistenze rispettano Alt/Option.
- I componenti collegati usano per spacing e quote gli assi dei propri rami: una riga scollegata perpendicolare non li trascina lateralmente.
- I chip usano testo UI a 11 pixel, fondo del canvas, eventi disabilitati e una guida comune. La posizione evita i contenuti vicini e sfalsa i chip nei gap troppo brevi.
- Le guide sono stato temporaneo dell'interazione: vengono eliminate al rilascio/cancel e non entrano in JSON, SVG, PNG, TikZ o Obsidian.
- Nudge: stesso motore geometrico, quote mentre il tasto è premuto, rimozione all'ultimo keyup o alla perdita del focus. Il nudge conserva la precisione di 1 unità, oppure 10 con Shift; lo snap magnetico resta sul drag.
- Performance: indice costruito una volta sul documento immutabile del gesto; topologia e primi segmenti risolti una volta; durante il movimento si interrogano bucket locali. Nessuna scansione componente × filo × segmento per frame.

## Movimento e editing

| Selezione                                    | Risultato                                                                  |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| Text                                         | Si muove solo il testo                                                     |
| Label componente                             | Cambia solo `label.offset`                                                 |
| Label Junction                               | Cambia solo `label.offset`; punto e fili fermi                             |
| Label Current/Voltage/polarità/graffa/staffa | Cambia solo l'offset della label                                           |
| Corpo componente                             | Corpo e label insieme; solo gli endpoint collegati si adattano             |
| Corpo Junction                               | Punto e label insieme; adattamento locale dei fili collegati               |
| Componente/nodo con routing automatico       | Si conservano i bend lontani; il bend adiacente si adatta alla connessione |
| Waypoint espliciti                           | Restano fissi salvo modifica esplicita                                     |
| Multi-selection esplicita                    | Gli oggetti selezionati, inclusi i fili selezionati, traslano insieme      |

La selezione della label è ora stato transitorio condiviso: pointer drag e tastiera possono distinguere label e corpo. Lo spostamento di un testo non normalizza né modifica fili estranei.

`InlineTextEditor` e `inlineTextTarget` sono condivisi da Text, label dei componenti, Junction, Current, Voltage, polarità, graffa e staffa. Doppio clic apre l'input leggero; Enter o perdita del focus salvano; Escape annulla. Nessun popover con pulsante di conferma. Un edit invariato non aggiunge una voce Undo. Font, colore, ancoraggio e rotazione sono conservati.

Il campo **Etichetta** della toolbar contestuale rimane disponibile. Freccia e Loop Arrow non possiedono un campo label nel modello: i testi che le accompagnano sono Text indipendenti e usano lo stesso editor. Non è stata introdotta una nuova relazione implicita fra freccia e testo.

## Filo e terminal drag

Cause corrette:

- Enter terminava sempre su un endpoint libero, anche sopra un target semantico.
- La preview usava un endpoint libero e poteva differire dal routing finale del terminale.
- Una chiusura sul punto iniziale poteva lasciare il draft attivo.
- Blur, cambio tool o caricamento documento potevano lasciare draft, split provvisori o terminali obsoleti.
- La direzione del terminale considerava l'asse ma non il verso: una connessione poteva attraversare il proprio simbolo.
- Muovere un solo oggetto poteva ricalcolare i bend automatici lontani.

`beginWire`, `wirePreview`, `commitWire` e la risoluzione dei candidati sono condivisi dalle due interazioni. Le connessioni nuove escono nel verso del terminale e aggirano il corpo dei propri simboli; i bend necessari sono materializzati. La geometria dei documenti storici e degli export precedenti rimane stabile.

In Select, un pointerdown sul terminale e un movimento oltre **5 pixel dello schermo** iniziano il filo. Un click o un drag sotto soglia non lo creano. Corpo, terminale e label mantengono hit testing separato. Gli eventi restano Pointer Events.

| Target di rilascio | Semantica                        |
| ------------------ | -------------------------------- |
| Terminale          | Riferimento componente/terminale |
| Junction           | Riferimento al nodo esistente    |
| Filo               | Junction e split coerenti        |
| Canvas             | Endpoint libero                  |

Le hit area e le tolleranze dipendono dai pixel dello schermo. Il crossing resta distinto dalla Junction. Creazione e Junction/split automatici sono una singola transazione Undo/Redo. Fili a lunghezza zero e copie identiche dello stesso percorso vengono scartati; percorsi differenti con waypoint restano possibili.

Escape, pointercancel, blur, cambio tool, Undo e sostituzione del documento eliminano le operazioni provvisorie. Il tool Filo mantiene creazione multi-step, waypoint, Enter e doppio clic; zoom e pan non richiedono un secondo motore.

## PNG e icone

- Risoluzione precedente: **2×**. Nuova risoluzione: **4×** interna, senza nuove impostazioni.
- Pipeline: documento → SVG condiviso → SVG con font incorporati e dimensioni fisiche finali → rasterizzazione → PNG.
- Limiti: lato massimo 16384 pixel e 32 milioni di pixel. Si riduce uniformemente la scala per documenti grandi; quelli che non rientrano nemmeno a 1× richiedono una selezione più piccola.
- Il limite è verificato sulle dimensioni intere finali: una regressione copre il rounding che prima poteva superare il budget.
- I font vengono caricati prima di misurare il testo. Si usa lo stesso riconoscimento matematico del canvas, incluse lettere greche, pedici e formule; le facce KaTeX necessarie all'immagine SVG isolata vengono incorporate.
- Antialiasing ad alta qualità, fondo bianco e crop/padding SVG condivisi. La bitmap non viene ingrandita dopo una rasterizzazione piccola. Canvas e object URL vengono liberati anche in caso di errore.
- Il confronto reale nel browser della fixture ha prodotto SVG circa 1038 × 928 e PNG **4154 × 3712**, con label, frazione, arrowhead, maglia, Junction, graffa e staffa corrispondenti.
- Icone installate: sfondo bianco opaco, corpo ingrandito, lead più corti e tratto più marcato; controllo visivo a 16, 24, 32, 48, 64 e 128 pixel. Test raster anche a 180, 192 e 512 pixel e verifica del safe circle maskable.
- Favicon: nera nel tema chiaro, bianca nel tema scuro tramite `prefers-color-scheme`. L'SVG adattivo ha URL nuovo, `sizes="any"` ed è dopo i fallback raster. Manifest e Apple touch icon hanno URL nuovi per esporre l'aggiornamento alle installazioni.

## Verifiche

**Lint, 46 suite / 1368 test e build di produzione superati su Node 26.5.0.** Gli export storici dei componenti e le prove di geometria Obsidian sono conservati.

Regressioni aggiunte:

- 103 casi per measurement body, endpoint, bend, Junction, vicino più prossimo, rotazioni, assi, simmetria e zoom; feedback del nudge e sua pulizia.
- 22 casi inline/label: tutti gli oggetti rinominabili, Enter/blur/Escape, indipendenza di mouse e tastiera, Text e selezione di gruppo.
- 50 casi filo/topologia: quattro target del terminal drag, soglia a 50/100/200%, cancel, Undo/Redo, split, endpoint semantici, waypoint, routing, document replacement e stress con 24 componenti.
- PNG: header valido e dimensioni 4×, budget adattivo, caricamento font, margini bianchi e selezione.
- Icone: 10 casi su visibilità, bianco opaco, safe circle, manifest e preferenza favicon.
- Listener: montaggi/smontaggi e zoom verificano identità/capture dei callback, senza listener rimasti attivi.

Prove effettive nel browser, prima su sviluppo e poi sulla build di produzione:

- Resistenza fra endpoint liberi: spostamento e ritorno al centro.
- rAC fra due angoli: centratura sul primo segmento rettilineo.
- Rnear davanti a Rnext: centro di equidistanza determinato dal corpo vicino, non dall'endpoint remoto.
- Condensatore fra A e B: nodi fermi; tutte le sei famiglie richieste anche verticali.
- Stessa attrazione con jitter di 6 pixel a zoom 50%, 100% e 200%; nudge e rimozione delle guide al keyup.
- Editing inline reale di Text, componente, Junction, corrente, tensione, graffa e staffa; nudge della label con corpo e fili invariati.
- Nudge del componente: corpo e label seguono; cambiano due fili collegati. Nudge del vero nodo: cambia un solo filo collegato. Text: nodi, componenti e fili restano identici.
- Otto combinazioni del tool Filo: terminale↔terminale/nodo/filo, nodo↔nodo, filo↔filo e libero↔libero. Split previsti e Undo verificati.
- Terminal drag verso terminale/nodo/filo/libero, soglia, Undo/Redo ed Escape.
- Waypoint e doppio clic: un solo filo; zoom durante il draft e successivo cancel senza preview residua.
- Fixture con 20 componenti, Junction, crossing, rotazioni, waypoint, formule e annotazioni; confronto SVG/PNG e icone.
- Console senza errori nelle prove registrate.

Le suite complete verificano inoltre placement, Smart Placement, Inline Insertion, snapping, selezione, multiselect, annotazioni, graffe/staffe, Undo/Redo, blocchi rapidi/personali, SVG/PNG/TikZ/Obsidian, serializzazione, persistenza e PWA.

La fixture riutilizzabile è [golden-stress-blocks.json](golden-stress-blocks.json): importarla con **Importa blocchi**, inserirla e adattare la vista.

## Limiti delle verifiche

- Il controllo browser esegue i drag come gesti atomici: quote/chip durante il pointerdown mantenuto e durante il tasto mantenuto sono verificati dagli automated test; nel browser sono stati verificati centratura, comportamento e pulizia al termine. Il pan con Space durante il filo è coperto dai test degli eventi nativi.
- La cattura dell'evento download PNG non è stata restituita dal browser di controllo. La rasterizzazione reale è stata aperta e confrontata con SVG tramite una pagina QA temporanea che chiamava lo stesso `exportPNG`; la pagina non fa parte della pubblicazione.
- Il refresh di un'icona PWA già installata dipende dal browser/sistema operativo. Gli asset e gli URL nuovi sono pubblicati; l'aggiornamento effettivo del launcher del dispositivo dell'utente non è stato ispezionato.

## Pubblicazione

Destinazione: [DrawCircuit pubblico](https://andrelombardo.github.io/drawcircuit/). Build e deployment sono gestiti dal workflow `deploy-pages.yml`; il controllo del sito pubblico viene eseguito sul commit completato dal workflow, dopo push su main.
