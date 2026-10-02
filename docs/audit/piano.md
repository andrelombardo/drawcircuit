# Piano audit prodotto

## Stato iniziale

DrawCircuit: React/TypeScript/Vite/Zustand, SVG, 71 componenti; baseline 163 test. Server locale già attivo su http://127.0.0.1:5174 (HTTP 200). Nessun AGENTS.md trovato nel progetto. Il precedente accesso browser era stato negato da una preferenza salvata; si verifica l’accesso con gli strumenti browser autorizzati, senza aggiramenti.

## Team e aree

Quattro slot disponibili: tre subagent indipendenti e revisione master.

| Responsabile          | Aree                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------- |
| qa_ux_input           | Functional QA, UX da primo utilizzo, input/accessibilità, stress/performance                 |
| drawing_wires_history | Circuiti reali A–E, fili/nodi/snapping, persistenza e undo/redo, golden workflow             |
| library_tikz          | Tutti i 71 componenti e terminali, export severo e compilazione LaTeX                        |
| root                  | Code quality/bug hunt, de-duplicazione, riproduzione personale, correzioni e regression pass |

## Procedura

1. Comprendere ed eseguire il prodotto; raccogliere evidenze prima delle correzioni.
2. Testare i flussi utente, edge case, tutte le famiglie e tre viewport laptop.
3. Ogni problema deve indicare passi, atteso, osservato e prova concreta, con P0/P1/P2/P3 e frizione High/Medium/Low.
4. Consolidare duplicati; root riproduce e verifica la causa dei problemi importanti.
5. Correggere soltanto problemi riprodotti o dimostrati; nessuna nuova feature o refactor estetico.
6. Aggiungere test mirati di regressione e riprovare le aree toccate.
7. Eseguire golden workflow completo, compilazione TikZ, build, lint e tutti i test.
8. Separare espressamente prove browser reali, workflow nel DOM simulato e analisi del codice. Il DOM non dimostra layout, frame rate o comportamento del browser reale.

## Copertura richiesta

Canvas/pan/zoom/fit/griglia; selezione/gruppi/drag/rotazione/clipboard; tutte le forme di endpoint e waypoint; Quick Junction atomica; persistenza JSON/localStorage/vecchi file/dati invalidi; testo/font/colore e scorciatoie durante editing; frecce e maglie; libreria completa; export/copertura e LaTeX; stabilità con 100 componenti, 200 fili e 100 annotazioni. Test dei circuiti A–E e golden workflow a 25 passi come da richiesta.

## Completamento — 2 ottobre 2026

Eseguito anche il primo uso indipendente `student_browser`. Dodici problemi consolidati, riprodotti e corretti; nuova resistenza US aggiunta su richiesta successiva. Golden workflow reale a 25 passi, stress browser e viewport completati; JSON/TEX scaricati e verificati, reload identico, compilazioni riuscite. Build, lint, 281 test e formattazione passano. Limiti di verifica e TOP 5 sono nel [report finale](report-finale.md).
