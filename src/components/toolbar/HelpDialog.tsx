import { useRef } from 'react';
import { X } from 'lucide-react';
import { useDialogFocus } from './useDialogFocus';

const shortcuts = [
  {
    title: 'Navigazione',
    rows: [
      ['Space + trascina · H', 'Sposta il foglio'],
      ['Rotellina · + / −', 'Zoom'],
      ['1', 'Adatta alla vista'],
      ['V · Esc', 'Selezione / annulla il gesto'],
    ],
  },
  {
    title: 'Selezione e modifica',
    rows: [
      ['Clic · trascina', 'Seleziona / sposta un elemento'],
      ['Shift + clic · rettangolo', 'Selezione multipla'],
      ['R', 'Ruota componente o anteprima'],
      ['Enter · doppio clic', 'Modifica testo o label'],
      ['⌘/Ctrl Z · Shift Z', 'Annulla / ripeti'],
      ['⌘/Ctrl C / V · D', 'Copia / incolla · duplica'],
      ['Delete · ⌘/Ctrl A', 'Elimina · seleziona tutto'],
    ],
  },
  {
    title: 'Disegno',
    rows: [
      ['W', 'Filo: clic sui terminali; clic per le svolte'],
      ['Enter · doppio clic', 'Termina il filo su un punto libero'],
      ['N · Shift + clic', 'Nodo / inserisci più nodi'],
      ['T · A · L', 'Testo · freccia · maglia'],
      ['I/V nella toolbar', 'Corrente, polarità e tensione'],
      ['G', 'Mostra / nascondi griglia'],
    ],
  },
];

export function HelpDialog({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLElement>(null);
  useDialogFocus(dialog, onClose);
  return (
    <div className="modal-backdrop">
      <section
        ref={dialog}
        className="help-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="help-heading"
      >
        <button
          className="modal-close"
          aria-label="Chiudi guida"
          title="Chiudi guida"
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <h2 id="help-heading">Aiuto e scorciatoie</h2>
        <div className="help-sections">
          {shortcuts.map(({ title, rows }) => (
            <section key={title}>
              <h3>{title}</h3>
              <dl>
                {rows.map(([key, description]) => (
                  <div key={key}>
                    <dt>
                      <kbd>{key}</kbd>
                    </dt>
                    <dd>{description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
        <div className="help-tips">
          <p>
            <b>Componenti e Smart Placement.</b> Scegli dalla sidebar, poi clicca o trascina sul
            foglio. L’anteprima indica aggancio e collegamento; Alt/Option li ignora. “Inserisci in
            filo” attiva l’inserimento nel filo. Un filo iniziato su un altro filo crea un nodo
            reale.
          </p>
          <p>
            <b>Annotazioni.</b> Trascina per frecce e maglie; doppio clic per testi e label,
            trascina le label per spostarle. Usa la sintassi LaTeX, per esempio{' '}
            <code>r_&#123;AB&#125;</code>. Alt + clic su una svolta del filo la elimina.
          </p>
          <p>
            <b>Toolbar ed export.</b> Il grip sposta la toolbar e ricorda la posizione. L’icona
            download apre TikZ, Obsidian, File .tex e SVG, anche per la selezione. Le modifiche al
            circuito vengono conservate automaticamente in questo browser.
          </p>
        </div>
      </section>
    </div>
  );
}
