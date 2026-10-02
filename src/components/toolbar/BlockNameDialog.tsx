import { createPortal } from 'react-dom';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import { useDialogFocus } from './useDialogFocus';
export function BlockNameDialog({
  initial = '',
  onSave,
  onClose,
}: {
  initial?: string;
  onSave: (name: string) => void;
  onClose: () => void;
}) {
  const [name, setName] = useState(initial),
    [error, setError] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  useDialogFocus(ref, onClose);
  return createPortal(
    <div className="modal-backdrop">
      <div
        ref={ref}
        className="confirm-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={initial ? 'Rinomina blocco' : 'Salva come blocco'}
      >
        <button className="modal-close" aria-label="Chiudi blocco" onClick={onClose}>
          <X size={20} />
        </button>
        <h2>{initial ? 'Rinomina blocco' : 'Salva come blocco'}</h2>
        <p>Il blocco resta disponibile nella tua libreria personale su questo browser.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            try {
              onSave(name);
              onClose();
            } catch (err) {
              setError(err instanceof Error ? err.message : 'Impossibile salvare il blocco.');
            }
          }}
        >
          <label className="block-name">
            Nome
            <input
              autoFocus
              aria-label="Nome blocco"
              maxLength={80}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          {error && <p role="alert">{error}</p>}
          <div className="dialog-actions">
            <button type="button" className="secondary-button" onClick={onClose}>
              Annulla
            </button>
            <button className="primary-button" type="submit">
              Salva blocco
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}
