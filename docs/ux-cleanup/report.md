# DrawCircuit — UX cleanup e selezione esportata

Verifica del 3 ottobre 2026. L’editor e il formato dei documenti restano quelli esistenti.

| Richiesta | Risultato |
| --- | --- |
| 1. Semplificazione toolbar | Un’unica riga compatta. Nella prova a 1280 px la toolbar del resistore passa da circa 796 × 90 a 333 × 46 px. |
| 2. Controlli diretti | Label modificabile, Stile, Ruota, Duplica, More. Per frecce e annotazioni resta diretta l’inversione; la rotazione compare solo dove applicabile. |
| 3. More | Sostituisci, Salva come blocco, Elimina e proprietà pertinenti: rotazione label, testo interno, offset, allineamento testo, forma freccia. |
| 4. Colori | Swatch circolari con la stessa hitbox; colore personalizzato circolare. Simbolo ed Etichetta hanno righe e nomi accessibili distinti. |
| 5. Stile | Popover compatto con Simbolo, Etichetta, Spessore e Testo, solo se applicabili. Numeri in px; icone Lucide, tooltip e focus visibile. Posizione corretta anche vicino ai bordi del canvas. |
| 6. Replace | Modal da 360 px, ricerca immediata, categorie del catalogo e lista con scroll. Nessuna modifica alla logica di compatibilità o sostituzione. |
| 7. Preview | `ComponentPreview` condiviso con la palette; usa `Symbol` e la geometria SVG del registry, senza immagini statiche. |
| 8. Polarità | Solo componenti a due terminali: outline tenue e terminali evidenziati. Wire, Junction e componenti incompatibili restano neutri. Hover e clic usano lo stesso controllo di validità. |
| 9. Corrente | Evidenzia il filo valido e il punto di applicazione; elimina il calcolo duplicato della ricerca del filo nel renderer. |
| 10. Tensione | Punto A persistente, indicazione “A selezionato”, preview e secondo punto riconoscibile. Supporta il percorso a due clic richiesto e conserva il drag. Esc, cambio strumento e cancellazione ripuliscono lo stato. |
| 11. Significato di G | Mostra/nasconde la griglia. Lo snapping non viene disattivato. |
| 12. Grid | Il toggle funzionava già. Puntini troppo tenui, disegnati nell’angolo del pattern e parzialmente tagliati, più stato testuale invariato rendevano il cambiamento poco leggibile. Ora i puntini sono interni alla tile, con coordinate di griglia preservate, e compaiono stato visibile/nascosta e notifica. |
| 13. Sidebar | Tolti icona decorativa e totale 72 dall’header. Titolo 14 px/600, toggle PanelLeft con hitbox 30 px. Conservati ricerca, categorie, ridimensionamento, preferenze e badge secondari dei blocchi. |
| 14. Distance guides | Quote centrate sullo spazio misurato, fondo discreto, testo UI, tick sottili, accento per uguaglianza; nessuna scritta aggiuntiva. Nessun pointer event. Scompaiono alla fine del drag. |
| 15. Geometria | Gap orizzontale = sinistra del bounding box geometrico successivo − destra del precedente; verticale = bordo superiore successivo − bordo inferiore precedente. Esclude label e padding delle hitbox, include terminali/lead. Componenti misurati rispetto a componenti, Junction rispetto a Junction. Il filtro riguarda le quote: lo snap elettrico componente–Junction resta attivo. |
| 16. Causa export riprodotta | La chiusura precedente considerava i wire automatici solo se entrambi gli endpoint appartenevano già alla selezione esplicita. Ometteva connessioni tramite Junction intermedie non selezionate e annotazioni con host incluso. Non è stata riprodotta un’omissione del solo simbolo di un componente validamente selezionato. |
| 17. Fix export | `getExportSelection` usa un Set di ID del modello, conserva ogni oggetto selezionato, chiude le connessioni interne attraverso Junction, esclude rami esterni e crossing non connessi, include annotazioni con host incluso. Wire selezionati con terminali esterni vengono scollegati conservando la geometria. Una sola proiezione alimenta TikZ, Obsidian e SVG; nessun fallback silenzioso all’intero documento per scope selezione vuoto. |
| 18. Test aggiunti | A–H, catene Junction, rami esclusi, crossing, annotazioni indipendenti e associate, wire esterni, ordine/duplicati degli ID, tutti i preset e blocchi personali, dieci subset nei tre formati, vera box selection equivalente a Shift-click, stile, Replace/undo/redo, hover, primo/secondo punto, Esc, Grid, quote e jitter a cinque zoom. |
| 19. Regressioni | La suite completa copre placement, smart placement, anchor, inline insertion, wire/Junction/Quick Junction/crossing, frecce e maglie, annotazioni I/V, label/LaTeX, guides, Replace, preset/blocchi, Copy/Paste, undo/redo, JSON/localStorage, export e PWA. I test precedenti sono aggiornati per aprire Stile/More prima di usare i controlli spostati. |
| 20. Browser locale | Build verificata attraverso il nome dell’asset caricato. Nuovo foglio; placement; label/stile; Duplica/Ruota/More; ricerca “cond” e Replace con undo/redo; anchor e inline insertion; wire/Junction; preset RLC e blocco personale; hover I/V e due punti; Grid; sidebar/search/resize; drag orizzontale e verticale a due zoom; dieci subset × tre formati, tutti i componenti attesi presenti; persistenza dopo reload. Nessun errore o warning nella console della build corrente. |
| 21. Build e test | Node 26.5.0; `npm ci`, lint, suite completa e build di produzione riusciti. PWA: 83 elementi nel precache, service worker generato. |
| 22. Sito pubblico | Vedere la verifica di pubblicazione in fondo a questo report. |
| 23. Limiti | Hover/drag provati anche con 500 componenti, senza errori osservati; non è un benchmark FPS. Per quote durante il drag la precisione del rendering intermedio è verificata anche nei test DOM, perché l’automazione browser espone il drag come singola azione. Il clipboard virtuale del browser non ha consentito il paste manuale e il download Blob JSON non ha restituito un evento osservabile: Copy/Paste e serializzazione restano verificati nella suite; import JSON e persistenza sono verificati anche nel browser. La specifica omissione intermittente del solo componente resta non riprodotta nei casi provati. |

## Selection closure

La selezione è un insieme di ID, senza primary selection. Le label sono proprietà dell’oggetto; una label selezionata sul canvas usa l’ID del proprietario. Le annotazioni elettriche associate hanno `componentId` oppure `wireId`. Arrow, Loop Arrow, testo e tensioni indipendenti entrano solo se selezionati.

Il grafo di export ammette terminali dei componenti selezionati e Junction, elimina le foglie di Junction non selezionate e conserva le regioni che collegano almeno due endpoint inclusi. Non attraversa componenti esterni né collega fili soltanto perché si incrociano. L’ordine degli oggetti resta quello del documento. Il documento originale e le regole di clipboard/blocchi personali non vengono modificati.

Bounds e normalizzazione vengono calcolati dopo la proiezione, sul subset. SVG usa inoltre le dimensioni del testo renderizzato e include le punte delle frecce nei bounds.

## Evidenze e pubblicazione

- Lint: riuscito.
- Test finali: **977/977 passati, 34 file**, 21 test in più rispetto alla baseline.
- Build: riuscito, asset `index-BeG6ikb8.js` nella preview verificata.
- Dieci selezioni manuali × tre formati: nessun componente atteso assente; stesso conteggio logico fra formati; nessun `NaN`/`undefined`.
- Drag: R3 arriva a x=30 fra R2=-240 e R4=300 (gap 190/190); R6 arriva a y=260 fra R5=60 e R7=460 (gap 120/120). Nessuna quota residua.
- Stress browser: 500 componenti, hover Polarità ripetuto e drag completato, console senza errori/warning.
- Commit, run Actions e smoke test pubblico: da aggiornare dopo la pubblicazione.
