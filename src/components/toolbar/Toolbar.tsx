import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  RefreshCw,
  ChevronDown,
  CircleDot,
  Download,
  FilePlus2,
  FolderOpen,
  Hand,
  HelpCircle,
  MousePointer2,
  PanelLeftClose,
  PanelLeftOpen,
  Redo2,
  Spline,
  Type,
  Undo2,
  Waypoints,
  X,
} from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { demoDocument, emptyDocument } from '../../model/demo';
import { deserializeDocument, serializeDocument } from '../../model/serialization';
import { download, fileName } from '../../utils/files';
import { IconButton } from './IconButton';
import { useDialogFocus } from './useDialogFocus';
export function Toolbar({
  onExport,
  onHelp,
  sidebarVisible,
  onToggleSidebar,
}: {
  onExport: () => void;
  onHelp: () => void;
  sidebarVisible: boolean;
  onToggleSidebar: () => void;
}) {
  const tool = useEditorStore((s) => s.tool),
    setTool = useEditorStore((s) => s.setTool),
    gestureStart = useEditorStore((s) => s.gestureStart),
    past = useEditorStore((s) => s.past),
    future = useEditorStore((s) => s.future),
    undo = useEditorStore((s) => s.undo),
    redo = useEditorStore((s) => s.redo);
  const [menu, setMenu] = useState(false),
    [electricalMenu, setElectricalMenu] = useState(false),
    [newDialog, setNewDialog] = useState<'new' | 'demo' | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const loadRequest = useRef(0);
  const confirmation = useRef<HTMLDivElement>(null);
  useDialogFocus(confirmation, () => setNewDialog(null), newDialog !== null);
  useEffect(
    () => () => {
      loadRequest.current++;
    },
    [],
  );
  useEffect(() => {
    if (!menu && !electricalMenu) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        setMenu(false);
        setElectricalMenu(false);
      }
    };
    window.addEventListener('keydown', escape, true);
    return () => window.removeEventListener('keydown', escape, true);
  }, [menu, electricalMenu]);
  const replace = (kind: 'new' | 'demo') => {
    loadRequest.current++;
    const s = useEditorStore.getState();
    s.replace(kind === 'new' ? emptyDocument() : demoDocument());
    setNewDialog(null);
    requestAnimationFrame(() => window.dispatchEvent(new Event('drawcircuit:fit')));
  };
  return (
    <header className="topbar">
      <div className="app-navigation">
        <button
          className="icon-button sidebar-toggle"
          aria-label={sidebarVisible ? 'Nascondi componenti' : 'Mostra componenti'}
          title={sidebarVisible ? 'Nascondi componenti' : 'Mostra componenti'}
          aria-expanded={sidebarVisible}
          aria-controls="component-library"
          onClick={onToggleSidebar}
        >
          {sidebarVisible ? <PanelLeftClose size={18} /> : <PanelLeftOpen size={18} />}
        </button>
        <div className="brand">
          <svg width={32} height={32} viewBox="0 0 40 40" aria-hidden="true">
            <rect width="40" height="40" rx="11" fill="#2463e8" />
            <path d="M8 20h7v-6h10v12H15v-6m10 0h7" stroke="white" strokeWidth="2.3" fill="none" />
            <circle cx="8" cy="20" r="2.3" fill="white" />
            <circle cx="32" cy="20" r="2.3" fill="white" />
          </svg>
          <span>DrawCircuit</span>
        </div>
        <div className="file-menu-wrap">
          <button
            className="file-trigger"
            aria-expanded={menu}
            aria-label="Menu file"
            onClick={() => {
              setMenu(!menu);
              setElectricalMenu(false);
            }}
          >
            File
            <ChevronDown size={13} />
          </button>
          {menu && (
            <>
              <button
                className="menu-backdrop"
                aria-label="Chiudi menu file"
                onClick={() => setMenu(false)}
              />
              <div className="file-menu">
                <button
                  onClick={() => {
                    setMenu(false);
                    if (useEditorStore.getState().document.objects.length) setNewDialog('new');
                    else replace('new');
                  }}
                >
                  <FilePlus2 size={16} />
                  Nuovo circuito
                </button>
                <button
                  onClick={() => {
                    setMenu(false);
                    fileRef.current?.click();
                  }}
                >
                  <FolderOpen size={16} />
                  Apri JSON
                </button>
                <button
                  onClick={() => {
                    const doc = useEditorStore.getState().document;
                    download(
                      serializeDocument(doc),
                      `${fileName(doc.title)}.json`,
                      'application/json',
                    );
                    setMenu(false);
                  }}
                >
                  <Download size={16} />
                  Salva JSON
                </button>
                <div className="menu-rule" />
                <button
                  onClick={() => {
                    setMenu(false);
                    if (useEditorStore.getState().document.objects.length) setNewDialog('demo');
                    else replace('demo');
                  }}
                >
                  <Waypoints size={16} />
                  Apri circuito di esempio
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="main-tools" role="toolbar" aria-label="Strumenti di disegno">
        <IconButton
          label="Selezione (V)"
          active={tool === 'select'}
          onClick={() => setTool('select')}
        >
          <MousePointer2 size={18} />
        </IconButton>
        <IconButton label="Filo (W)" active={tool === 'wire'} onClick={() => setTool('wire')}>
          <Spline size={19} />
        </IconButton>
        <IconButton
          label="Nodo (N)"
          active={tool === 'junction'}
          onClick={() => setTool('junction')}
        >
          <CircleDot size={18} />
        </IconButton>
        <IconButton label="Testo (T)" active={tool === 'text'} onClick={() => setTool('text')}>
          <Type size={19} />
        </IconButton>
        <IconButton label="Freccia (A)" active={tool === 'arrow'} onClick={() => setTool('arrow')}>
          <ArrowUpRight size={21} />
        </IconButton>
        <IconButton
          label="Maglia (L)"
          active={tool === 'loop-arrow'}
          onClick={() => setTool('loop-arrow')}
        >
          <RefreshCw size={19} />
        </IconButton>
        <div className="electrical-tools-wrap">
          <button
            className={`icon-button${['current', 'polarity', 'voltage'].includes(tool) ? ' active' : ''}`}
            aria-label="Annotazioni elettriche"
            aria-pressed={['current', 'polarity', 'voltage'].includes(tool)}
            aria-expanded={electricalMenu}
            title="Corrente e tensione"
            data-tooltip="Corrente e tensione"
            onClick={() => setElectricalMenu((open) => !open)}
          >
            I/V
          </button>
          {electricalMenu && (
            <>
              <button
                className="menu-backdrop"
                aria-label="Chiudi annotazioni elettriche"
                onClick={() => setElectricalMenu(false)}
              />
              <div className="file-menu electrical-tools-menu">
                <button
                  onClick={() => {
                    setTool('current');
                    setElectricalMenu(false);
                  }}
                >
                  Corrente su un filo
                </button>
                <button
                  onClick={() => {
                    setTool('polarity');
                    setElectricalMenu(false);
                  }}
                >
                  Polarità + / −
                </button>
                <button
                  onClick={() => {
                    setTool('voltage');
                    setElectricalMenu(false);
                  }}
                >
                  Tensione tra due punti
                </button>
              </div>
            </>
          )}
        </div>
        <div className="toolbar-divider" />
        <IconButton
          label="Annulla (⌘/Ctrl Z)"
          disabled={!past.length && !gestureStart}
          onClick={undo}
        >
          <Undo2 size={18} />
        </IconButton>
        <IconButton label="Ripeti (⌘/Ctrl Shift Z)" disabled={!future.length} onClick={redo}>
          <Redo2 size={18} />
        </IconButton>
        <div className="toolbar-divider" />
        <IconButton
          label="Sposta vista (H o Space)"
          active={tool === 'pan'}
          onClick={() => setTool('pan')}
        >
          <Hand size={18} />
        </IconButton>
      </div>
      <div className="topbar-actions">
        <IconButton label="Guida e scorciatoie" onClick={onHelp}>
          <HelpCircle size={18} />
        </IconButton>
        <button
          className="export-button"
          aria-label="Esporta circuito"
          title="Esporta in TikZ, Obsidian o SVG"
          onClick={onExport}
        >
          <Download size={16} />
          <span>Export</span>
        </button>
      </div>
      <input
        ref={fileRef}
        type="file"
        accept=".json,application/json"
        hidden
        aria-label="Apri file JSON"
        onChange={async (e) => {
          const input = e.currentTarget;
          const file = input.files?.[0];
          if (!file) return;
          input.value = '';
          const request = ++loadRequest.current;
          try {
            if (file.size > 10_000_000) throw new Error('Il file supera il limite di 10 MB.');
            const raw = await file.text();
            if (request !== loadRequest.current) return;
            const doc = deserializeDocument(raw);
            useEditorStore.getState().replace(doc);
            requestAnimationFrame(() => window.dispatchEvent(new Event('drawcircuit:fit')));
            useEditorStore.getState().notify('Circuito aperto');
          } catch (error) {
            if (request !== loadRequest.current) return;
            useEditorStore
              .getState()
              .notify(error instanceof Error ? error.message : 'Impossibile aprire il file');
          }
        }}
      />
      {newDialog && (
        <div className="modal-backdrop">
          <div
            ref={confirmation}
            className="confirm-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Sostituisci circuito"
          >
            <button
              className="modal-close"
              aria-label="Annulla"
              title="Annulla"
              onClick={() => setNewDialog(null)}
            >
              <X size={20} />
            </button>
            <h2>{newDialog === 'new' ? 'Nuovo circuito' : 'Apri la rete di esempio'}</h2>
            <p>
              Il circuito corrente sarà sostituito. Puoi recuperarlo con Annulla oppure salvarlo
              prima come JSON.
            </p>
            <div className="dialog-actions">
              <button className="secondary-button" onClick={() => setNewDialog(null)}>
                Annulla
              </button>
              <button className="primary-button" onClick={() => replace(newDialog)}>
                {newDialog === 'new' ? 'Crea nuovo' : 'Apri esempio'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
