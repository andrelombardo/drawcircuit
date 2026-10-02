# Export TikZ per Obsidian — 2 ottobre 2026

Il dialogo di export contiene la scheda **Obsidian** e il pulsante **Copia per Obsidian**. Il testo copiato include il blocco Markdown `tikz`, il package `circuitikz`, l'ambiente `document` e il circuito completo. **Copy TikZ** conserva il formato raw e **Download .tex** continua a produrre lo standalone. Il feedback usa gli stessi pulsanti del dialogo; se gli appunti sono bloccati, viene selezionato il codice nel formato richiesto.

Il wrapper segue il [formato documentato da Obsidian TikZJax](https://github.com/artisticat1/obsidian-tikzjax#usage). Obsidian richiede quel plugin, o un renderer compatibile, per renderizzare blocchi `tikz`. Non è necessario aggiungere delimitatori o preambolo dopo la copia.

## File modificati e aggiunti

| File                                      | Modifica                                                                                                                                                                                                             |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/tikz/exporter.ts`                    | Wrapper `exportObsidian` basato su `exportTikz`; package AMS condizionali; registrazione dei colori usati; rimozione dei fili degeneri/duplicati; label sicure; normalizzazione congiunta degli angoli delle maglie. |
| `src/tikz/validation.ts`                  | Controlli limitati all'export per coordinate finite, geometria, terminali, tipi e stili validi; normalizzazione HEX. Nessuna modifica al modello o al JSON.                                                          |
| `src/tikz/symbolGeometry.ts`              | Omissione dei path/subpath vuoti, di segmenti con estremi coincidenti e di primitive senza geometria; preservazione delle curve chiuse, dei cerchi e del testo.                                                      |
| `src/components/toolbar/ExportDialog.tsx` | Scheda e copia Obsidian, feedback, anteprima coerente e fallback di selezione del formato richiesto.                                                                                                                 |
| `tests/exporter.test.ts`                  | Due aspettative colore aggiornate per la normalizzazione HEX maiuscola richiesta. Gli altri test preesistenti restano invariati.                                                                                     |
| `tests/obsidian-exporter.test.ts`         | 134 nuovi casi automatici, inclusa la matrice dinamica dei 72 tipi in tutte le quattro rotazioni.                                                                                                                    |
| `tests/obsidian-export-dialog.test.tsx`   | Sette nuovi casi per preview, copia, appunti negati, retry, formato raw, download standalone e stato dell'editor invariato.                                                                                          |
| `README.md`                               | Istruzioni d'uso Obsidian e collegamenti alle prove.                                                                                                                                                                 |
| `examples/obsidian-resistenza.md`         | Esempio completo prodotto dal generatore effettivo.                                                                                                                                                                  |
| `docs/obsidian-export/`                   | Questo report, sorgenti compilati, log dei controlli e prova browser.                                                                                                                                                |

Non sono stati modificati editor, snapping, endpoint, coordinate memorizzate, rendering SVG, selezione, drag, undo/redo, import o salvataggio. Il formato JSON rimane v1.

## Bug dell'export individuati e corretti

- Un filo coincidente può restituire un solo punto da `wirePoints`: l'export emetteva un `\draw` senza effetto visivo.
- Il parser dei fallback conservava subpath composti solo da `M`, anche senza geometria disegnabile.
- Colori di label vuote venivano definiti inutilmente; HEX equivalenti con maiuscole/minuscole diverse producevano definizioni duplicate.
- KaTeX può accettare `%` come commento e ignorare il resto di una label. Inserire il risultato in `$...$` commentava anche la chiusura del nodo TikZ. L'export ora preserva quei source come testo letterale escapato. Vengono protetti anche `#` e `&` fuori dagli ambienti di allineamento supportati.
- Coordinate non finite, terminali mancanti o endpoint pendenti potevano generare codice invalido o interrompere l'intero export. Ora gli oggetti invalidi vengono omessi; una label invalida non elimina il corpo valido del componente.
- ID ripetuti e percorsi di filo identici potevano essere emessi più volte. La deduplicazione dei fili avviene nel loro livello, preservando l'ordine dei componenti e delle annotazioni.

## Test e regressioni

Baseline: **478/478 test passati** in 17 file. Dopo la modifica: **619/619 passati** in 19 file, con **141 nuovi test**.

Copertura dei casi richiesti: una e più resistenze, fili, colori, formule, testo normale, frecce dritte/curve/inverse, archi circolari/ellittici nei due versi, circuito misto, documento vuoto, coordinate negative e decimali, path vuoti, singolo punto, colori duplicati, caratteri speciali e tutti i componenti CircuitikZ/fallback già supportati. Le verifiche strutturali controllano delimitatori Markdown, package, ambienti unici, definizioni colore precedenti al circuito, terminatori `;`, gruppi TeX bilanciati, opzioni non vuote e assenza di `undefined`, `NaN`, `Infinity` e `name=` vuoti.

I test controllano il contenuto effettivo passato a `navigator.clipboard.writeText`, la selezione completa nel fallback, il ritorno al raw, il download `.tex` e l'identità di documento, selezione e cronologia prima/dopo la copia. Il round trip dei circuiti e del JSON viene verificato insieme alla suite precedente di geometria e interazioni.

Le esecuzioni con la concorrenza predefinita hanno mostrato timeout intermittenti di 5 secondi nei test UI pesanti: una prima esecuzione sovrapposta alle compilazioni ha avuto due timeout; una successiva ha passato tutti i 618 test allora presenti; dopo l'ultimo test aggiunto è riapparso un timeout nella prova con 400 oggetti. La verifica finale usa `npm test -- --maxWorkers=2` per contenere la competizione per le risorse della macchina. Nessun timeout o aspettativa dei test UI è stato modificato. Il [log del timeout](evidence/tests-default-timeout.log) rimane disponibile.

Controlli finali: `npm test -- --maxWorkers=2`, `npm run build`, `npm run lint` e Prettier sui file di questa modifica. `npm run format:check` segnala 14 file di evidenza preesistenti non formattati in altri report; non sono stati modificati per mantenere lo scope dell'intervento.

## Compilazione LaTeX reale

Gli output provengono da `exportObsidian`, senza riscrivere i comandi del circuito. Per compilarli come file autonomi sono stati rimossi solo i delimitatori Markdown e aggiunta la classe `standalone`, che TikZJax fornisce automaticamente. Il compilatore integrato di Codex ha restituito **successo** per tutti e sei i file:

| Fixture                             | Contenuto                                                                                                   |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [single.tex](evidence/single.tex)   | Resistenza senza label, una definizione colore.                                                             |
| [demo.tex](evidence/demo.tex)       | Rete di esempio con fili, resistenze, junction, label, frecce e arco.                                       |
| [all.tex](evidence/all.tex)         | 72 tipi × 4 rotazioni = 288 componenti, inclusi i nove fallback di geometria condivisa.                     |
| [special.tex](evidence/special.tex) | Formule, `\Omega`, testo con caratteri speciali, formula invalida, `\text`, `\mathbb` e ambiente `aligned`. |
| [arcs.tex](evidence/arcs.tex)       | Due archi ellittici di 324°, nei due versi, con angoli normalizzati e raggi preservati.                     |
| [empty.tex](evidence/empty.tex)     | Circuito vuoto senza colori inutilizzati.                                                                   |

Le opzioni esistenti `european resistors`, `american inductors`, `american ports`, `line cap=round` e `line join=round` sono state conservate e compilate. Riferimenti: [manuale ufficiale CircuitikZ](https://circuitikz.github.io/circuitikz/circuitikzmanualgit.pdf) e [sintassi degli archi TikZ](https://tikz.dev/tikz-paths#sec-14.7). La normalizzazione sposta insieme entrambi gli angoli: non riduce ciascuno modulo 360 separatamente, perché questo cambierebbe il verso o l'ampiezza dell'arco.

## Verifica nell'app reale e limiti

Nel browser reale su `http://127.0.0.1:5173/` sono stati verificati preview, pulsante e feedback Obsidian, ritorno al raw e uguaglianza esatta tra appunti e preview. Il circuito presente aveva 27 oggetti; gli appunti contenevano tutti i 4.131 caratteri del blocco. Le porzioni SVG dei livelli circuitali prima e dopo l'export sono identiche. La viewport è stata ridimensionata durante la verifica, quindi il confronto riguarda la geometria dei livelli circuitali, non il pattern della griglia o la trasformazione della vista.

[Risultati browser](evidence/browser-verification.json).

![Dialogo Obsidian con feedback di copia](evidence/dialog-obsidian.jpg)

Il rendering finale dentro un'installazione Obsidian non è stato provato. La compilazione reale usa il compilatore integrato, non `pdflatex` da terminale, che non è disponibile nel PATH. Macro o package custom non presenti nel motore TikZJax rimangono soggetti ai limiti del renderer; i simboli e le formule verificati sono descritti sopra. I componenti nativi conservano le proporzioni già previste dall'export esistente, che possono differire leggermente dai simboli SVG.

## Esempio reale incollabile

La fixture [obsidian-resistenza.md](../../examples/obsidian-resistenza.md) contiene esattamente questo output:

````md
```tikz
\usepackage{circuitikz}
\begin{document}

% DrawCircuit — coordinates in cm; SVG Y axis inverted.
\definecolor{dcColor0}{HTML}{171A20}
\begin{circuitikz}[european resistors, american inductors, american ports, line cap=round, line join=round]
\ctikzset{bipoles/length=1.4cm}
% Component: resistor
\draw[draw=dcColor0, line width=1.4226pt] (0,0) to[R, fill=white, name=dcComponent0] (2,0);
\end{circuitikz}

\end{document}
```
````
