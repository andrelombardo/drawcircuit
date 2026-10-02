# Evidenze master prima delle correzioni

Revisione del codice seguita da riproduzione sull'App React renderizzata in jsdom. Queste prove non sostituiscono il browser reale, ancora bloccato da una preferenza di accesso.

## M1 — Import JSON fuori ordine (P2)

Passi: avviare apertura di First.json, poi Second.json; completare prima la lettura di Second e poi quella di First. Atteso: resta la seconda scelta dell'utente. Osservato: il circuito torna a First. Variante: creare Nuovo mentre un file è in lettura; alla fine ricompare il vecchio import. Causa verificata: nessun identificatore/cancellazione della richiesta asincrona nella Toolbar. Due test falliscono in `audit-master.test.tsx` prima del fix.

## M2 — Incolla ripetuto prima della risposta clipboard (P2)

Passi: Ctrl V due volte prima che readText si risolva; clipboard con un resistore auto-nominato. Atteso: due ID distinti e due label automatiche distinte. Osservato: ID distinti ma due label identiche. Causa verificata: cloneObjects usa il document catturato prima dell'await. Un test fallisce prima del fix.

## M3 — Ctrl Y durante trascinamento (P2)

Passi: iniziare drag di R da x0 a x20, premere Ctrl Y, muovere a x40 e rilasciare. Atteso: il drag annullato rimane annullato. Osservato: R passa a x40 dopo l'annullamento, senza gestureStart. Causa verificata: Ctrl Y non azzera drag.current; Ctrl Z lo fa. Un test fallisce prima del fix con diff x0 → x40.

## L1 — Label matematica malformata blocca export (P2)

Segnalazione library_tikz riprodotta dal master: esportare R con label R__1 e compilare il file. Il compilatore reale integrato (Tectonic/XeTeX) fallisce a riga13 con `Missing { inserted`, nessuna pagina prodotta. Fixture: `/private/tmp/drawcircuit-audit-library-malformedTex.tex`. Causa: texText protegge parentesi e operatori incompleti ma accetta sub/superscript consecutivi non validi.

## Ambiente browser

Le verifiche sullo stesso URL dopo le conferme dell'utente restituiscono ancora: `A saved user permission setting blocks this action`. Nessun altro browser, URL, porta o meccanismo è stato usato per aggirare il blocco. Il server HTTP risponde; questa limitazione è esterna all'editor.

## D1 — Autosave sospeso durante gesto incompleto (P2)

Segnalazione drawing_wires_history riprodotta dal master eseguendo il test UI mirato: inserire R, iniziare un filo prima dei400ms di debounce e lasciare il filo incompleto per1s. Atteso: viene salvato almeno il circuito già confermato con R. Osservato: nessun salvataggio, perché beginGesture cancella il timer e tutti i preview lo lasciano sospeso. Non si tratta della perdita inevitabile entro la finestra di debounce: un gesto può durare indefinitamente.

## D2 — Nuovo durante Quick Junction altera lo stato recuperato da Undo (P2)

Segnalazione drawing_wires_history riprodotta dal master: iniziare una diramazione dal centro di un filo (split ancora provvisorio), scegliere Nuovo e confermare, poi Undo. Atteso: torna il filo confermato prima della diramazione annullata. Osservato: viene recuperato il filo già spezzato con nodo provvisorio. Causa verificata: replace chiama commit direttamente sul document di preview senza prima cancelGesture.
