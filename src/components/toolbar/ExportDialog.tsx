import { useMemo, useRef, useState } from 'react';
import { Check, Code2, Copy, Download, X } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { exportObsidian, exportStandalone, exportTikz } from '../../tikz/exporter';
import { selectionDocument } from '../../tikz/selection';
import { download, fileName } from '../../utils/files';
import { useDialogFocus } from './useDialogFocus';
export function ExportDialog({ onClose }: { onClose: () => void }) {
  const doc = useEditorStore((s) => s.document),
    selection = useEditorStore((s) => s.selection),
    [scope, setScope] = useState<'all' | 'selection'>('all'),
    [tab, setTab] = useState<'snippet' | 'obsidian' | 'standalone'>('snippet'),
    [copied, setCopied] = useState<'snippet' | 'obsidian' | null>(null),
    [copyError, setCopyError] = useState(false);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const dialog = useRef<HTMLElement>(null);
  useDialogFocus(dialog, onClose);
  const subset = useMemo(() => selectionDocument(doc, selection), [doc, selection]);
  const exportDoc = scope === 'selection' && subset.objects.length ? subset : doc;
  const code =
    tab === 'snippet'
      ? exportTikz(exportDoc)
      : tab === 'obsidian'
        ? exportObsidian(exportDoc)
        : exportStandalone(exportDoc);
  const copy = async (format: 'snippet' | 'obsidian') => {
    setTab(format);
    setCopied(null);
    setCopyError(false);
    try {
      await navigator.clipboard.writeText(
        format === 'obsidian' ? exportObsidian(exportDoc) : exportTikz(exportDoc),
      );
      setCopied(format);
    } catch {
      requestAnimationFrame(() => {
        textarea.current?.select();
        setCopyError(true);
      });
    }
  };
  const selectTab = (format: typeof tab) => {
    setTab(format);
    setCopied(null);
    setCopyError(false);
  };
  return (
    <div
      className="modal-backdrop"
      onPointerDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        ref={dialog}
        className="export-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="export-heading"
      >
        <button className="modal-close" aria-label="Chiudi export" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="dialog-icon">
          <Code2 size={24} />
        </div>
        <h2 id="export-heading">Dal circuito al tuo documento.</h2>
        <p>
          Il tuo schema, in TikZ e CircuitikZ. Pronto per LaTeX e Obsidian con il plugin TikZJax.
        </p>
        <div className="export-scope" role="group" aria-label="Ambito export">
          <span>Esporta</span>
          <button
            aria-pressed={scope === 'all'}
            onClick={() => {
              setScope('all');
              setCopied(null);
              setCopyError(false);
            }}
          >
            Tutto il circuito
          </button>
          <button
            aria-pressed={scope === 'selection'}
            disabled={!subset.objects.length}
            title={
              !subset.objects.length
                ? 'Seleziona almeno un elemento sul foglio'
                : 'Esporta gli elementi selezionati e i fili interni'
            }
            onClick={() => {
              setScope('selection');
              setCopied(null);
              setCopyError(false);
            }}
          >
            Solo selezione
          </button>
        </div>
        <div className="code-tabs">
          <button
            className={tab === 'snippet' ? 'selected' : ''}
            onClick={() => selectTab('snippet')}
          >
            Codice TikZ
          </button>
          <button
            className={tab === 'obsidian' ? 'selected' : ''}
            onClick={() => selectTab('obsidian')}
          >
            Obsidian
          </button>
          <button
            className={tab === 'standalone' ? 'selected' : ''}
            onClick={() => selectTab('standalone')}
          >
            File standalone .tex
          </button>
          <span>{exportDoc.objects.length} oggetti vettoriali</span>
        </div>
        <textarea
          ref={textarea}
          className="code-preview"
          aria-label="Codice TikZ generato"
          value={code}
          readOnly
          spellCheck={false}
        />
        {copyError && (
          <p className="copy-error">Codice selezionato: premi ⌘/Ctrl C per copiarlo.</p>
        )}
        <div className="export-dialog-footer">
          <span>
            {tab === 'obsidian'
              ? 'Scala canvas · font e geometria preservati'
              : '1 cm = 40 px · orientamento preservato'}
          </span>
          <button className="secondary-button" onClick={() => copy('snippet')}>
            {copied === 'snippet' ? <Check size={16} /> : <Copy size={16} />}{' '}
            {copied === 'snippet'
              ? 'Copiato'
              : scope === 'selection'
                ? 'Copia TikZ selezione'
                : 'Copy TikZ'}
          </button>
          <button className="secondary-button" onClick={() => copy('obsidian')}>
            {copied === 'obsidian' ? <Check size={16} /> : <Copy size={16} />}{' '}
            {copied === 'obsidian'
              ? 'Copiato per Obsidian'
              : scope === 'selection'
                ? 'Copia selezione per Obsidian'
                : 'Copia per Obsidian'}
          </button>
          <button
            className="primary-button"
            onClick={() =>
              download(
                exportStandalone(exportDoc),
                `${fileName(doc.title)}.tex`,
                'application/x-tex',
              )
            }
          >
            <Download size={16} />
            Download .tex
          </button>
        </div>
      </section>
    </div>
  );
}
