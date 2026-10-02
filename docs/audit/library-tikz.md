# Audit libreria ed export TikZ — rilevazioni prima delle correzioni

Agente: `library_tikz`, ruoli libreria componenti e TikZ/CircuitikZ. Questa fase non ha modificato codice di produzione. Le due rilevazioni sono state successivamente riprodotte dal master prima delle correzioni.

## Prove effettuate

- **71/71 componenti** provati tramite l'interfaccia React effettivamente montata nel DOM: ricerca e inserimento dalla palette, selezione, drag, collegamento di ogni pin, quattro rotazioni con confronto dei pin visibili e dei percorsi dei fili, modifica label e Comic Sans MS, duplicazione, cancellazione, Undo e Redo, JSON e generazione `.tex`. Il test `tests/audit-library-export.test.tsx` ha completato **71 prove, tutte riuscite**, in 6,8 secondi. Non è un test browser e non misura frame rate o hit testing visivo del browser.
- Compilazione reale del catalogo completo: **71 × 4 = 284 simboli**, compresi i nove fallback, riuscita con il compilatore integrato. Fixture: `/private/tmp/drawcircuit-audit-library-allTex.tex`.
- Verifica numerica degli anchor nativi tramite `\pgfpointanchor` nel motore CircuitikZ reale. Il dump diagnostico termina intenzionalmente con `AUDIT_ANCHOR_DUMP_COMPLETE` per ottenere il log: questa terminazione intenzionale non è un errore dell'export del prodotto.
- Cinque label matematiche malformate esportate e compilate realmente, con errori documentati sotto.
- Ispezione del foglio SVG della libreria prodotto dal renderer effettivo. Questa prova non equivale all'ispezione visuale del PDF esportato.

Durante questa fase il browser sul server locale era bloccato dalla preferenza salvata. Il master ha successivamente aperto l'app reale attraverso il tunnel HTTPS esposto volontariamente dall'utente; le prove browser sono documentate nel report del master.

`pdflatex`, `xelatex` e `lualatex` non erano nel PATH. Il compilatore integrato usa Tectonic/XeTeX: la compilazione con **pdflatex non è stata verificata**. L'assenza di un errore in XeTeX non è una prova della portabilità di qualunque Unicode in pdfLaTeX.

## 1. P2 — Label malformata rende il file `.tex` non compilabile

**Passi:** inserire un resistore, impostare la label a `R__1`, esportare standalone `.tex` e compilare.

**Atteso:** un input testuale accettato dall'editor deve conservare un export compilabile; quando la formula esce dal subset supportato, può essere esportata come testo letterale.

**Effettivo:** l'export contiene `$R__1$`. Compilazione fallita alla riga 13 con `Missing { inserted`; nessun PDF.

Altri casi effettivamente compilati:

| Input    | Errore reale              |
| -------- | ------------------------- |
| `R_1_2`  | `Double subscript`        |
| `R_{a_}` | `Missing { inserted`      |
| `R_\{`   | `Extra }, or forgotten $` |
| `R_\]`   | `Missing { inserted`      |

**Causa:** `texText` bilancia le parentesi e ripara un `_`/`^` a fine stringa o davanti a uno spazio, ma non valida gli script ripetuti sulla stessa base, gli atomi mancanti dentro i gruppi o i comandi TeX a simbolo singolo. Il conteggio delle parentesi considera anche `\{` una parentesi di gruppo.

**Proposta:** mantenere il subset matematico documentato e la riparazione delle parentesi incompiute; validarlo con uno scanner piccolo. Un atomo può essere un carattere, gruppo o comando Greek supportato; una base può avere al massimo un pedice e un apice. Per sintassi non valida usare testo letterale tramite `escapeTex(raw)`. Una sola regexp per operatori consecutivi non risolve `R_1_2` e `R_{a_}`.

**Evidenza:** `/private/tmp/drawcircuit-audit-library-malformedTex.tex`, `doubleSubscript.tex`, `scriptInGroup.tex`, `escapedBrace.tex`, `mathDelimiter.tex`, con il medesimo prefisso `drawcircuit-audit-library-`.

## 2. P2 — PNP, PMOS e PJFET nativi hanno orientamento verticale opposto al canvas

**Passi:** inserire PNP/PMOS/PJFET con rotazione 0, collegare il pin superiore collector/drain e quello inferiore emitter/source, esportare `.tex`; confrontare gli anchor nativi con il simbolo del canvas. Ripetere a 90/180/270 gradi.

**Atteso:** i pin superiori/inferiori del canvas corrispondono alle rispettive metà del simbolo CircuitikZ, senza incrocio delle estensioni dei fili.

**Effettivo:** il canvas definisce collector/drain con `localY=-40`, quindi sopra il componente; a rotazione 0 l'anchor nativo C/D dei tre tipi P si trova a `y=-15.33597pt`, sotto il centro TikZ. E/S si trova a `y=+15.33597pt`. I fili semanticamente corretti attraversano quindi il componente per raggiungere la metà opposta. NPN, NMOS e NJFET non presentano l'inversione. È un unico problema nei tre mapping, non tre bug indipendenti.

**Causa:** CircuitikZ orienta verticalmente i tipi P in modo diverso dal renderer; il mapping aggiunge solo la rotazione e la scala, senza la riflessione locale necessaria.

**Proposta verificata nel compilatore reale:** aggiungere `yscale=-1` alle opzioni dei tre nodi **dopo** `rotate=-rotation` e la scala. Non cambiare i terminal ID o scambiare gli anchor semantici.

| Rotazione SVG | C/D atteso e verificato con la riflessione corretta |
| ------------: | --------------------------------------------------- |
|            0° | `(0, +15.33597pt)`                                  |
|           90° | `(+15.33597pt, 0)`                                  |
|          180° | `(0, -15.33597pt)`                                  |
|          270° | `(-15.33597pt, 0)`                                  |

Inserire `yscale=-1` **prima** di `rotate` è stato provato e mantiene il verso errato a 90° e 270°. La verifica quindi copre anche l'ordine effettivo delle trasformazioni PGF.

**Evidenza:** `/private/tmp/drawcircuit-audit-library-anchor-diagnostics.tex` e le fixture `original-rotations.tex`, `mirrorAfterRotate-rotations.tex`, `mirrorBeforeRotate-rotations.tex`, con prefisso `drawcircuit-audit-library-`. Queste fixture di diagnosi falliscono soltanto alla terminazione intenzionale, dopo aver stampato gli anchor.

## Esito pre-fix e limiti

Due problemi distinti P2, nessun P0/P1/P3 aggiuntivo dichiarato da questo agente. Nessun bug di inserimento, drag, pin, rotazione SVG o duplicazione è stato rilevato nella matrice di interazione dei 71 tipi. I test DOM non dimostrano ergonomia o performance del browser; la revisione del PDF e pdflatex rimangono limiti espliciti di questa fase. La validazione finale dopo le correzioni verrà aggiunta separatamente, senza trasformare un report pre-fix in una dichiarazione di verifiche non ancora eseguite.

## Regressione dopo le correzioni del master

Entrambi i problemi sono corretti e sono stati verificati di nuovo indipendentemente sui sorgenti di produzione aggiornati. Questo agente non ha modificato produzione.

- **71/71 prove UI riuscite nuovamente**, in 6,65 secondi, con la matrice completa di componenti, pin, quattro rotazioni e operazioni di editing. Corretto anche un argomento non supportato dalla tipizzazione di Testing Library nel nuovo test: il selettore Font usa una regex ancorata.
- Rigenerato dall'export effettivo il catalogo **284 simboli**, compilazione riuscita: [library-all-symbols.tex](evidence/library-all-symbols.tex). Disponibile anche il [JSON del catalogo](evidence/library-all-symbols.json).
- Rigenerati e compilati con successo **tutti e cinque** i `.tex` che fallivano prima: [doppio underscore](evidence/library-label-double-underscore.tex), [doppio pedice](evidence/library-label-double-subscript.tex), [script incompleto nel gruppo](evidence/library-label-incomplete-group-script.tex), [parentesi escaped](evidence/library-label-escaped-brace.tex), [delimitatore matematico](evidence/library-label-math-delimiter.tex). Il fallback preserva il testo letterale senza introdurre sintassi TeX non valida.
- Verificati **24 anchor** sui PNP/PMOS/PJFET reali, C/E oppure D/S nelle quattro rotazioni. La [fixture di asserzione](evidence/library-native-anchor-assertions.tex) controlla numericamente con `\ifdim` che il pin si trovi nel semiasse corretto e che l'altra coordinata sia zero entro `0.0001pt`. Le stringhe dei nodi provengono dal nuovo export di produzione, senza inserire manualmente la riflessione. Il file ora termina normalmente e **compila con successo**; nessuna terminazione diagnostica intenzionale in questa regressione.

Totale: **sette compilazioni riuscite**, registrate in [library-compilation-results.json](evidence/library-compilation-results.json). Nessun altro problema rilevato nella regressione di questa area. Rimane esplicito che il motore verificato è Tectonic/XeTeX, non pdflatex; questo test non dichiara una revisione visuale dei PDF o dei font di sistema opzionali.

## Aggiunta richiesta e verifica del coordinatore — 2 ottobre

Aggiunta la resistenza US a zig zag su richiesta esplicita dell’utente. La matrice UI dinamica ora passa su 72/72 tipi e la nuova matrice 72×4=288 simboli compila. Verificati nel browser inserimento, collegamento, rotazioni, duplicazione, cancellazione e Undo/Redo del nuovo simbolo. Il golden TEX scaricato e il TEX realmente scaricato dallo studente compilano. Le sette compilazioni storiche restano distinte dalle verifiche aggiunte nel file dei risultati.
