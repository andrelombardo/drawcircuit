import { createPortal } from 'react-dom';
import { useRef, useState } from 'react';
import { X } from 'lucide-react';
import type { CircuitComponent } from '../../model/types';
import { compatibleReplacements } from '../../model/replacement';
import { componentRegistry } from '../../model/catalog';
import { useEditorStore } from '../../store/editorStore';
import { useDialogFocus } from '../toolbar/useDialogFocus';
export function ReplaceDialog({
  component,
  onClose,
}: {
  component: CircuitComponent;
  onClose: () => void;
}) {
  const [search, setSearch] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  useDialogFocus(ref, onClose);
  const items = compatibleReplacements(component).filter((type) =>
    componentRegistry[type].name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
  );
  return createPortal(
    <div className="modal-backdrop">
      <div
        className="confirm-dialog"
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label="Sostituisci componente"
      >
        <button className="modal-close" aria-label="Chiudi sostituzione" onClick={onClose}>
          <X size={20} />
        </button>
        <h2>Sostituisci con</h2>
        <input
          className="replace-search"
          autoFocus
          aria-label="Cerca sostituzione"
          placeholder="Cerca componente…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="replace-list">
          {items.map((type) => (
            <button
              key={type}
              className="secondary-button"
              onClick={() => {
                useEditorStore.getState().replaceComponent(component.id, type);
                onClose();
              }}
            >
              {componentRegistry[type].name}
            </button>
          ))}
        </div>
        {!items.length && <p>Nessun componente compatibile trovato.</p>}
      </div>
    </div>,
    document.body,
  );
}
