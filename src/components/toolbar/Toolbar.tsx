import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  RefreshCw,
  CircleDot,
  Download,
  GripVertical,
  Hand,
  MousePointer2,
  Redo2,
  Spline,
  Type,
  Undo2,
} from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { IconButton } from './IconButton';
import { useFloatingToolbar } from './useFloatingToolbar';

export function DrawingToolbar({
  onExport,
  sidebarVisible = true,
}: {
  onExport?: () => void;
  sidebarVisible?: boolean;
}) {
  const {
    ref: toolbarRef,
    style,
    dragging,
    menuAbove,
    handle,
  } = useFloatingToolbar(sidebarVisible);
  const tool = useEditorStore((s) => s.tool),
    setTool = useEditorStore((s) => s.setTool),
    gestureStart = useEditorStore((s) => s.gestureStart),
    past = useEditorStore((s) => s.past),
    future = useEditorStore((s) => s.future),
    undo = useEditorStore((s) => s.undo),
    redo = useEditorStore((s) => s.redo);
  const [electricalMenu, setElectricalMenu] = useState(false);
  useEffect(() => {
    if (!electricalMenu) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        setElectricalMenu(false);
      }
    };
    window.addEventListener('keydown', escape, true);
    return () => window.removeEventListener('keydown', escape, true);
  }, [electricalMenu]);
  return (
    <div
      ref={toolbarRef}
      className="main-tools floating-surface"
      role="toolbar"
      aria-label="Strumenti di disegno"
      style={style}
      data-dragging={dragging || undefined}
      data-menu-above={menuAbove || undefined}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="toolbar-grip"
        aria-label="Sposta toolbar"
        title="Trascina per spostare gli strumenti"
        data-tooltip="Sposta toolbar"
        {...handle}
      >
        <GripVertical size={16} />
      </button>
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
      <IconButton label="Nodo (N)" active={tool === 'junction'} onClick={() => setTool('junction')}>
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
      <div className="toolbar-divider" />
      <IconButton label="Esporta" onClick={onExport}>
        <Download size={18} />
      </IconButton>
    </div>
  );
}
