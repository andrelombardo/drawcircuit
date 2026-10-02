import { useRef } from 'react';
import { X } from 'lucide-react';
import { useDialogFocus } from './useDialogFocus';
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
        <span className="eyebrow">POCHI GESTI, UN BEL CIRCUITO</span>
        <h2 id="help-heading">Disegna. Collega. Annota.</h2>
        <div className="help-steps">
          <p>
            <b>01 · Posiziona</b>Scegli un componente a sinistra, poi clicca sul foglio. Puoi anche
            trascinarlo. Ogni clic ne inserisce un altro; R ruota l’anteprima, Esc termina.
          </p>
          <p>
            <b>02 · Collega</b>Premi W, clicca un terminale, un nodo o un filo: sul filo nasce un
            nodo reale. I clic sul foglio aggiungono svolte; doppio clic o Enter termina su un punto
            libero.
          </p>
          <p>
            <b>03 · Annota</b>Premi N per un nodo, T per il testo, A per una freccia, L per una
            maglia. Trascina sul foglio per disegnare una freccia o una maglia. Doppio clic modifica
            testi e label. Tieni Shift premuto mentre inserisci nodi per ripetere l’inserimento.
          </p>
        </div>
        <div className="shortcut-grid">
          {[
            ['Space + trascina', 'Sposta il foglio'],
            ['Rotellina / trackpad', 'Zoom'],
            ['Shift + clic', 'Selezione multipla'],
            ['Shift + clic con Nodo', 'Inserisci più nodi'],
            ['Trascina sul foglio', 'Selezione a rettangolo'],
            ['R', 'Ruota componente / anteprima'],
            ['Enter', 'Modifica nome o label'],
            ['Alt + clic handle', 'Rimuovi svolta filo'],
            ['L', 'Disegna maglia ellittica'],
            ['⌘/Ctrl D', 'Duplica'],
            ['⌘/Ctrl C / V', 'Copia / incolla'],
            ['Delete', 'Elimina'],
            ['⌘/Ctrl Z', 'Annulla'],
            ['⌘/Ctrl Shift Z', 'Ripeti'],
            ['G', 'Mostra / nascondi griglia'],
            ['1', 'Adatta alla vista'],
            ['Esc', 'Selezione / annulla filo'],
          ].map(([key, description]) => (
            <div key={key}>
              <span>{description}</span>
              <kbd>{key}</kbd>
            </div>
          ))}
        </div>
        <p className="help-note">
          Trascina le label per spostarle. Doppio clic su un filo aggiunge una svolta modificabile.
          I punti blu modificano frecce e fili; Alt + clic elimina una svolta. Nelle maglie trascina
          gli angoli per ridimensionare e il punto sulla punta per spostarla. Scrivi{' '}
          <code>r_&#123;AB&#125;</code> per un pedice.
        </p>
      </section>
    </div>
  );
}
