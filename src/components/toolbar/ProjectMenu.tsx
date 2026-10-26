import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Download, FolderOpen, Folder } from 'lucide-react';
import { t } from '../../i18n';
import type { CircuitDocument } from '../../model/types';
import { useEditorStore } from '../../store/editorStore';
import { downloadProject, readProjectFile } from '../../utils/projectFile';
import { ActionMenu } from './ActionMenu';
import { useDialogFocus } from './useDialogFocus';

function OpenProjectDialog({ document, onClose }: { document: CircuitDocument; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  useDialogFocus(ref, onClose);
  return createPortal(
    <div className="modal-backdrop">
      <div ref={ref} className="confirm-dialog" role="dialog" aria-modal="true" aria-labelledby="open-project-heading">
        <h2 id="open-project-heading">{t('Open project?')}</h2>
        <p className="project-import-title">{document.title || t('Untitled circuit')}</p>
        <p>{t('The current drawing will be replaced. You can restore it with Undo. Download a copy first to keep it as a file.')}</p>
        {error && <p role="alert">{error}</p>}
        <div className="dialog-actions project-dialog-actions">
          <button className="secondary-button" onClick={onClose}>{t('Cancel')}</button>
          <button className="secondary-button" onClick={() => {
            try {
              const state = useEditorStore.getState();
              downloadProject(state.gestureStart ?? state.document);
            } catch { setError(t('Unable to download the project. The current drawing is unchanged.')); }
          }}>{t('Download current project')}</button>
          <button className="primary-button" onClick={() => {
            if (useEditorStore.getState().replace(document)) {
              useEditorStore.getState().notify(t('Project opened. Undo restores the previous drawing.'));
              window.dispatchEvent(new Event('drawcircuit:fit'));
              onClose();
            } else setError(t('Unable to open the project. The current drawing is unchanged.'));
          }}>{t('Open project')}</button>
        </div>
      </div>
    </div>, window.document.body,
  );
}

export function ProjectMenu() {
  const input = useRef<HTMLInputElement>(null);
  const reading = useRef(false);
  const [pending, setPending] = useState<CircuitDocument | null>(null);
  const notify = useEditorStore((s) => s.notify);
  return <>
    <ActionMenu label={t('Project')} icon={<Folder size={18} />} items={[
      { id: 'download', label: t('Download project'), icon: <Download size={17} />, onSelect: () => {
        try {
          const state = useEditorStore.getState();
          downloadProject(state.gestureStart ?? state.document);
        } catch { notify(t('Unable to download the project. The current drawing is unchanged.')); }
      } },
      { id: 'open', label: t('Open project…'), icon: <FolderOpen size={17} />, onSelect: () => input.current?.click() },
    ]} />
    <input ref={input} type="file" hidden accept=".drawcircuit,.json,application/json" aria-label={t('Choose a DrawCircuit project')} onChange={async (event) => {
      const file = event.currentTarget.files?.[0];
      event.currentTarget.value = '';
      if (!file || reading.current) return;
      reading.current = true;
      try { setPending(await readProjectFile(file)); }
      catch (error) { notify(error instanceof Error ? error.message : t('Unable to read this project.')); }
      finally { reading.current = false; }
    }} />
    {pending && <OpenProjectDialog document={pending} onClose={() => setPending(null)} />}
  </>;
}
