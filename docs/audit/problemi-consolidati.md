# Problemi consolidati prima dei fix

12 problemi distinti: 0 P0, 0 P1, 9 P2 e 3 P3. Segnalazioni duplicate sui nodi e sul footer export unite. Non contati come bug: limiti del browser, timeout dell'API download, -0 equivalente a0, selezione azzerata dopo Undo/Redo, conservazione intenzionale dei fili dopo eliminazione.

| ID  | Priorità | Problema                                            | Evidenza prima del fix                                |
| --- | -------- | --------------------------------------------------- | ----------------------------------------------------- |
| M1  | P2       | Import fuori ordine / dopo Nuovo                    | Due test master falliscono                            |
| M2  | P2       | Incolla concorrenti duplicano label automatiche     | Test master fallisce                                  |
| M3  | P2       | Ctrl Y lascia attivo drag annullato                 | Test master: x0 → x40                                 |
| D1  | P2       | Autosave sospeso durante gesto incompleto           | Test UI agente riprodotto dal master                  |
| D2  | P2       | Nuovo conferma preview Quick Junction nella history | Test UI agente riprodotto dal master                  |
| L1  | P2       | Formule malformate non compilabili                  | Cinque compilazioni reali falliscono                  |
| L2  | P2       | Anchor nativi dei transistor P invertiti            | Misure PGF vere; riproduzione master                  |
| U1  | P2       | Escape non chiude conferma Nuovo/Esempio            | Test DOM e azione Browser master                      |
| U2  | P2       | Focus dei dialoghi resta fuori                      | Test DOM e lettura activeElement Browser master       |
| U3  | P3       | Escape non chiude menu File                         | Test DOM e Browser master                             |
| U4  | P3       | Ripetizione nodi con Shift non spiegata             | Primo uso DOM e browser indipendente, stessa sorpresa |
| U5  | P3       | Footer export parzialmente tagliato a1280×720       | Screenshot studente e master; misure DOM reali        |

Classificazione delle cinque frizioni UX U1–U5: High0, Medium3 (U1,U2,U4), Low2 (U3,U5). Non è stata dimostrata una frizione High. I difetti tecnici P2 sono riportati separatamente.

I quattro report indipendenti e le riproduzioni master sono stati raccolti prima di modificare il codice produttivo. Le correzioni mantengono lo scopo didattico e non aggiungono nuove feature.

Aggiornamento: la prima prova reale dello studente e la riproduzione master hanno confermato U5 prima della correzione CSS. Footer oltre il bordo interno del dialogo a1280×720; la preview a310px fissi occupava troppo spazio. Il dialogo rimaneva raggiungibile tramite scroll, quindi P3/Low, non blocker.
