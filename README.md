# DrawCircuit

Editor web per creare rapidamente circuiti elettrici didattici ed esportarli in TikZ, Obsidian e SVG. Blocchi personali, annotazioni di corrente/tensione e modalità PWA offline.

## Live

[Open DrawCircuit](https://andrelombardo.github.io/drawcircuit/)

Il sito funziona nel browser: non serve avviare un server locale. Gli schemi sono salvati nel browser utilizzato; per trasferirli usa File → Salva JSON / Apri JSON.

## Development

Node.js **26.5.0**, come indicato in `.nvmrc` e usato in CI.

```sh
npm install
npm run dev
```

Con nvm, puoi selezionare la versione con `nvm install && nvm use`.

## Build

```sh
npm run build
npm run preview
```

## Checks and deployment

```sh
npm run lint
npm run test
```

Ogni push su `main` esegue installazione, lint, test e build; GitHub Pages viene aggiornato soltanto se tutti i controlli passano. Le modifiche locali diventano visibili sul sito dopo il deployment del relativo commit.

[Nuove funzioni e offline](docs/nuove-feature.md) · [Manuale e dettagli tecnici](docs/manuale.md) · [Workflow](.github/workflows/deploy-pages.yml)
