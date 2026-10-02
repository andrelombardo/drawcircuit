# Estensione della libreria e font

## 1. Inventario iniziale

Prima delle modifiche: **21 componenti**. Analizzati catalogo, geometrie SVG, terminali, serializzazione, proprietà e mapping CircuitikZ.

## 2. Componenti mantenuti

Tutti i 21 `type` iniziali rimangono disponibili con gli stessi terminali e coordinate:

`resistor`, `capacitor`, `polarizedCapacitor`, `inductor`, `variableResistor`, `potentiometer`, `voltageSource`, `currentSource`, `battery`, `dependentVoltage`, `dependentCurrent`, `diode`, `led`, `zener`, `openSwitch`, `closedSwitch`, `ground`, `ammeter`, `voltmeter`, `transformer`, `blackBox`.

La batteria iniziale aveva già due celle: mantiene `type: battery` e il simbolo originale, con nome più preciso “Batteria multicella”. Aggiunta solo la cella singola. Il blocco rettangolare già esistente ora supporta testo interno, modificabile in **••• → Testo interno**. Nessun componente preesistente è stato duplicato per migliorarlo.

## 3. Aggiunte e 5. Categorie

| Categoria     | Mantenuti | Aggiunti | Totale | Nuovi simboli                                                                                                                   |
| ------------- | --------: | -------: | -----: | ------------------------------------------------------------------------------------------------------------------------------- |
| Passivi       |         6 |        4 |     10 | Termistore, fotoresistenza/LDR, condensatore variabile, induttore variabile                                                     |
| Generatori    |         5 |        5 |     10 | Tensione AC, corrente AC, tensione generica, corrente generica, batteria a cella singola                                        |
| Diodi         |         3 |        3 |      6 | Fotodiodo, Schottky, varicap/varactor                                                                                           |
| Transistor    |         0 |        6 |      6 | NPN, PNP, NMOS, PMOS, JFET canale N, JFET canale P                                                                              |
| Interruttori  |         2 |        5 |      7 | SPDT, pulsante NO, pulsante NC, DPST, DPDT                                                                                      |
| Misura        |         2 |        2 |      4 | Ohmmetro, galvanometro                                                                                                          |
| Riferimenti   |         1 |        2 |      3 | Massa segnale, massa telaio                                                                                                     |
| Trasformatori |         1 |        2 |      3 | Presa centrale, induttori accoppiati                                                                                            |
| Analogici     |         0 |        2 |      2 | Amplificatore operazionale, comparatore                                                                                         |
| Digitali      |         0 |        8 |      8 | AND, OR, NOT, NAND, NOR, XOR, XNOR, buffer                                                                                      |
| Utilità       |         0 |       10 |     10 | Terminale, punto di test, connettore 2 pin, connettore 3 pin, porta generica, fusibile, lampadina, motore, altoparlante, buzzer |
| Blocchi       |         1 |        1 |      2 | Blocco circolare con testo interno                                                                                              |
| **Totale**    |    **21** |   **50** | **71** |                                                                                                                                 |

Le precedenti categorie Semiconduttori e Altri vengono sostituite da queste 12 categorie. Palette a righe compatte, ricerca immediata per nomi e alias italiani/inglesi, categorie collassabili, tooltip e vere anteprime SVG. Il catalogo completo è [libreria-componenti.svg](libreria-componenti.svg).

## 4. Numero finale

**71 simboli**, per coprire tutte le famiglie richieste, inclusi DPST e DPDT. Il superamento di 60 deriva dalla lista dei simboli richiesta, senza aggiungere modelli commerciali o varianti MOS ridondanti.

## 6. Registry e terminali

`src/model/catalog.ts` è l’unica definizione di nomi, categorie, alias, prefissi, terminali, assi di uscita dei fili, bounds, offset label, forme SVG e strategia TikZ. Le primitive geometriche sono riutilizzate da palette, canvas e fallback TikZ; il renderer non costruisce l’intera libreria a ogni render. I mapping di compatibilità sono derivati dal registry.

- BJT: `base`, `collector`, `emitter`.
- MOS/JFET: `gate`, `drain`, `source`.
- Analogici: `inverting`, `nonInverting`, `output`.
- Digitali: `input1`, `input2`, `output`; NOT/buffer: `input`, `output`.
- SPDT/DPDT, connettori e presa centrale hanno terminali distinti e stabili.

Rotazioni 0/90/180/270 trasformano simbolo, terminali e hitbox. Un singolo componente ruota attorno alla propria origine anche quando il bounds è asimmetrico. Gli endpoint dei fili mantengono riferimenti semantici, senza aggiornare coordinate assolute copiate. Le label restano orizzontali secondo il comportamento esistente.

JSON v1 conservato. Campi font, testo interno e metadata terminali sono opzionali; i vecchi dati non vengono migrati o riscritti durante l’apertura. La validazione respinge font non supportati, coordinate e nomi di pin incoerenti e testo interno su componenti che non lo supportano.

## 7. Font

Selettore nella toolbar delle label di componenti/nodi e dei testi: **Default / Sans, Kalam, Comic Sans MS, Inter**. Vale anche per l’editor inline e il testo interno dei blocchi. Ogni elemento mantiene `fontFamily` nel JSON e nel salvataggio automatico. La preferenza separata **Font predefinito annotazioni** vale solo per nuovi oggetti; cambiare preferenza non modifica il documento né la cronologia.

Comic Sans usa esattamente lo stack CSS:

```css
font-family: 'Comic Sans MS', 'Comic Sans', cursive;
```

Non vengono distribuiti file TTF/OTF proprietari. La disponibilità del font dipende dal sistema; in assenza viene usato il fallback. I documenti senza `fontFamily` mantengono Kalam indipendentemente dalla nuova preferenza.

## 8. TikZ

**62 simboli nativi CircuitikZ**, verificati con la [documentazione ufficiale](https://rmano.github.io/circuitikz/node-The-components-list.html) e la compilazione del catalogo completo. Transistor, analogici, logica, SPDT e induttori accoppiati usano nodi e connessioni ai rispettivi anchor nativi. I blocchi riutilizzano `generic`/`esource` con testo interno separato. Il motore usa il nodo documentato `elmech` con lettera M.

**9 fallback in TikZ puro**, con motivazione nel registry e nell’export: trasformatore originale a quattro terminali, trasformatore con presa centrale, DPST, DPDT, galvanometro, connettori 2/3 pin, porta generica, buzzer. I fallback condividono le primitive SVG, inclusi curve Bézier/quadratiche, geometria ruotata e collegamento meccanico tratteggiato. Il buzzer nativo non è disponibile nella distribuzione usata dal compilatore integrato, quindi si esporta senza dipendere da quella versione recente.

L’export standard usa font LaTeX normale e non richiede Comic Sans. L’opzione esplicita handwritten può scegliere Kalam, Comic Sans MS o Inter nel file standalone tramite `fontspec`/`setmainfont`; richiede LuaLaTeX/XeLaTeX e font installato. Non seleziona automaticamente il font del JSON e resta disattivata inizialmente. Questa è una scelta del font principale del documento, non una preservazione automatica di tutti i font misti dell’editor.

## 9. Verifiche

**163 test superati**: 82 precedenti, aggiornando la verifica export alle strategie del registry, e 81 nuovi. Build, lint e controlli di formattazione superati.

- Unicità ed esaustività del registry, renderer e terminali per ogni `type`.
- JSON completo, pin semantici, quattro rotazioni effettive, coordinate terminali, snapping, assi di uscita e hitbox per tutti i 71 simboli.
- Riferimenti dei fili dopo spostamento; compatibilità dei 21 tipi e dei pin originari.
- Nomi/alias italiani e inglesi, ricerca che mostra risultati anche in categorie collassate.
- Font per componenti, nodi e testo; fallback Kalam, preferenza persistita separatamente, selezione Comic Sans nell’interfaccia, editor inline, import/export e blocchi.
- Schema completo creato attraverso palette/canvas: resistenza, condensatore, induttore, tensione, corrente, diodo, LED, Zener, NPN, PMOS, interruttore, terra, trasformatore, op amp, AND, NOT, voltmetro. Collegati tutti i terminali e aggiunti sette collegamenti diretti fra componenti; ruotati e spostati cinque componenti; verificati endpoint e percorsi SVG, salvataggio e riapertura JSON, export e download. Nessun errore runtime nel workflow DOM.
- Circuito A—R—B con A/B/`r_{AB}` provati prima in Kalam e poi Comic Sans; riapertura JSON e export portabile, più scelta Comic Sans esplicita nel dialogo export.
- Compilazione effettiva riuscita per il catalogo **71 × 4 = 284 simboli**, [schema misto](../examples/schema-libreria-mista.tex), [label A/B/r_AB](../examples/label-kalam-comic.tex).
- Ispezione visuale del foglio di simboli statico, prodotto dal renderer effettivo.

**Limite della prova manuale:** la navigazione nel browser a `http://127.0.0.1:5174` è stata rifiutata da una preferenza di sicurezza salvata, anche dopo l’autorizzazione in chat. Non sono state tentate altre superfici browser o aggiramenti. La prova di questa versione è automatica nel DOM: non dichiara una verifica manuale nel browser, del frame rate o del font Comic Sans realmente installato. La modalità `fontspec` non è stata compilata perché il compilatore di verifica non garantisce quei font di sistema.

Esempi riapribili: [schema misto JSON](../examples/schema-libreria-mista.json), [label JSON](../examples/label-kalam-comic.json). L’esempio legacy con maglie ellittiche resta disponibile.

## 10. Omissioni intenzionali

Nessun simbolo obbligatorio dell’elenco è stato omesso. Non aggiunte varianti enhancement/depletion separate dei MOS, per evitare ridondanza; pin di alimentazione opzionali dell’op amp, per mantenere semplice il modello; input configurabili 3+ delle porte o componenti commerciali. Non aggiunta la sezione Recent, opzionale, per mantenere la palette compatta. Nessuna simulazione, SPICE, footprint o modello elettrico.

## Aggiornamento del 2 ottobre 2026

La richiesta successiva ha aggiunto la resistenza statunitense a zig zag. Il catalogo corrente comprende 72 simboli; i numeri di questo documento descrivono il terzo passaggio originale. L’audit e le verifiche attuali sono nel [report finale](audit/report-finale.md).
