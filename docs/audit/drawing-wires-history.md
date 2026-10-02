# Audit: disegno, fili, nodi e cronologia

Agente indipendente assegnato ai ruoli richiesti 3, 4 e 7. Nessuna modifica al codice di produzione. Evidenza riproducibile in `tests/audit-drawing.test.tsx`: 16 test che montano `App` e usano palette, canvas SVG, menu e proprietà mediante eventi pointer/tastiera. Prima delle correzioni: 14 test superati, due fallimenti riprodotti anche dal master.

## Metodo e limite

Sono stati costruiti circuiti completi con l'interfaccia renderizzata, senza creare il documento direttamente tramite lo store. Lo store viene letto per verificare collegamenti e identità dei documenti; solo il ripristino iniziale dei test viene impostato direttamente. Sono simulati geometria del viewport, pointer capture, download e localStorage: jsdom non esegue layout, hit testing del browser o rasterizzazione SVG. Non si tratta quindi di una prova manuale nel browser e non permette giudizi su fluidità percepita o tempo impiegato da uno studente.

Il tentativo ordinario del master di accedere al server locale è stato rifiutato dalla preferenza di sicurezza salvata del browser. Nessun accesso alternativo o aggiramento effettuato.

## Problemi concreti

### DW-01 — P2: ultimo commit non salvato durante un gesto ancora aperto

1. Aprire un foglio vuoto.
2. Inserire una resistenza.
3. Entro i 400 ms del debounce, avviare un filo dal terminale e aggiungere una svolta senza terminarlo.
4. Attendere oltre un secondo.
5. Ricaricare la pagina oppure controllare il documento salvato in localStorage.

Atteso: il circuito confermato prima del gesto, contenente la resistenza, è salvato; la bozza non viene salvata.

Risultato prima della correzione: localStorage non riceve l'ultimo documento confermato. Il timer viene annullato all'avvio del gesto e non viene riattivato finché il gesto termina o si annulla. Un reload durante il gesto perde quel commit recente. Riproduzione automatica: `autosaves the latest committed drawing while an unfinished wire gesture remains open`.

Causa verificata: il ramo `if (state.gestureStart)` del subscriber in `editorStore.ts` cancella il timer e ritorna prima di salvare `gestureStart`, che è proprio il documento stabile precedente alla bozza.

Impatto UX: medium friction, perché il foglio dichiara salvataggio automatico e il comportamento dipende dal momento in cui è stato iniziato il gesto. Non è perdita sistematica dei circuiti già salvati.

### DW-02 — P2: New durante Quick Junction registra una bozza nella cronologia

1. Disegnare un filo orizzontale da un punto libero a un altro.
2. Scegliere Filo e partire dal centro del filo: il Quick Junction divide provvisoriamente il filo e crea un nodo.
3. Prima di terminare il ramo, scegliere File → Nuovo circuito → Crea nuovo.
4. Premere Cmd/Ctrl Z.

Atteso: ritorna il filo originale integro, perché il ramo incompleto è stato annullato.

Risultato prima della correzione: torna il filo diviso con il nodo provvisorio. Il ramo non esiste e la bozza è divenuta un documento confermato nella cronologia. Riproduzione automatica: `new circuit during Quick Junction cancels the provisional split before recording undo`.

Causa verificata: `replace` chiama `commit` prima di annullare il gesto. `commit` registra `s.document`, che in quel momento è il preview, e azzera `gestureStart`; il successivo cambio dello strumento non può più recuperare il documento originale.

Impatto UX: medium friction. Il difetto riguarda cancellazione e atomicità di un'operazione composita; il normale Quick Junction concluso seguito da Undo/Redo funziona.

## Circuiti e golden workflow

| Workflow   | Prova effettuata                                                                                                                                                                                                                                                                                                          | Documento finale                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| A / golden | Sei resistori, tre verticali, nodi A–D, sei label matematiche, 12 collegamenti iniziali, due maglie opposte, freccia, testo Comic Sans, label Kalam e colore; duplicazione; spostamenti con collegamenti; Quick Junction con undo/redo; Save/New/Open identico; export; ripristino localStorage da modulo appena caricato | 7 componenti, 5 nodi, 14 fili, 2 Loop Arrow, 1 freccia, 1 testo |
| B          | Generatore di tensione, resistenza, condensatore, interruttore, massa e quattro nodi, con percorso chiuso                                                                                                                                                                                                                 | 5 componenti, 4 nodi, 9 fili                                    |
| C          | NPN collegato sui tre terminali, due resistenze, generatore e massa, label Q_NPN                                                                                                                                                                                                                                          | 5 componenti, 5 fili                                            |
| D          | Op amp con ingressi e uscita collegati, resistenza e condensatore di feedback, generatore e massa                                                                                                                                                                                                                         | 5 componenti, 2 nodi, 9 fili                                    |
| E          | Connettore a tre pin ruotato, AND, NOT, porta d'uscita e connettore a due pin; ramo d'uscita creato sul filo                                                                                                                                                                                                              | 5 componenti, 1 nodo automatico, 8 fili                         |

I cinque workflow sono completati senza eccezioni. Ogni JSON viene riaperto e ogni export controllato per `undefined`/`NaN`. Il master ha compilato con successo i relativi file standalone e il golden. La prova golden controlla che non siano emessi `console.error` nell'interfaccia jsdom.

Fixture JSON e TEX: `/private/tmp/drawcircuit-audit-golden.*`, `drawcircuit-audit-workflow-b.*`, `drawcircuit-audit-workflow-c.*`, `drawcircuit-audit-workflow-d.*`, `drawcircuit-audit-workflow-e.*` e `drawcircuit-audit-endpoint-kinds.*`.

Il passaggio di reload è verificato leggendo il documento salvato dopo 400 ms e inizializzando un nuovo modulo dello store, che deve ripristinare esattamente lo stesso JSON. Un reload di una vera pagina resta da provare quando l'accesso browser sarà disponibile.

## Altre verifiche riuscite

- Terminale → terminale/nodo/punto libero, punto libero → terminale, nodo → nodo/punto libero e ramo iniziato su un filo.
- Terminale raggiunto a otto pixel di schermo dal punto esatto con zoom 0.15, 1 e 4.
- Spostamento di componente e nodo con estremi semantici conservati; rotazione di tre componenti verticali nella rete; connettore ruotato a 180°.
- Cancellazione tramite pointercancel di una divisione provvisoria; tentativo di filo a lunghezza zero senza commit aggiuntivo.
- Spostamento di waypoint e normalizzazione senza alterare l'itinerario ortogonale; backtrack volontario conservato.
- Eliminazione del componente: i fili sono conservati con estremi liberi validi; undo ripristina i riferimenti semantici. Questo comportamento intenzionale non viene riportato come bug.
- Sequenza di 11 operazioni reali: inserimento, spostamento, rotazione, filo, nodo, Quick Junction, label, maglia, colore, duplicazione, eliminazione. Undo completo e Redo completo ripristinano ogni snapshot, con Quick Junction atomico.
- Import JSON malformato, ID vuoto e rotazione non valida rifiutati conservando il documento corrente.
- Vecchio JSON senza `fontFamily`, nomi o direzioni dei terminali riaperto con Kalam anche quando la preferenza dei nuovi elementi è Comic Sans.

Non sono stati accettati come difetti due falsi positivi iniziali: il `-0` prodotto da una rotazione e serializzato come `0` è semanticamente equivalente; un waypoint coincidente con l'estremo può essere necessario a conservare la direzione del primo segmento. Le asserzioni definitive verificano contenuto serializzato e geometria, senza imporre un refactor estraneo allo scopo.

## Considerazioni UX entro i limiti della prova

Il disegno della rete completa richiede soprattutto operazioni normali: posizionare i componenti, nominare le label e creare 12 collegamenti. Il posizionamento ripetuto, R/Esc, Enter per la label e Quick Junction permettono di completarlo senza pannelli complessi. Non è emersa una frizione high dimostrabile dall'integrazione DOM. La scoperta delle scorciatoie, la leggibilità alle dimensioni laptop e la comodità reale dei bersagli restano valutazioni del browser e dell'agente UX, non deduzioni da un test jsdom.

Le due correzioni proposte al master sono limitate a conservare il documento confermato durante i gesti e ad annullare le bozze prima di sostituire il circuito. Nessuna nuova feature o riprogettazione proposta.

## Completamento browser del coordinatore — 2 ottobre

Il golden workflow è stato successivamente eseguito nel browser reale, compresi download JSON/TEX, Nuovo/Apri e reload. Il confronto di tutti i livelli SVG è identico dopo import e dopo ripristino automatico. Risultati e limiti nel [report finale](report-finale.md).
