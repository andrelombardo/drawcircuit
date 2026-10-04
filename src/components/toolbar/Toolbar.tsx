import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Braces,
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
  const [menu, setMenu] = useState<'group' | 'electrical' | null>(null);
  useEffect(() => {
    if (!menu) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        setMenu(null);
      }
    };
    window.addEventListener('keydown', escape, true);
    return () => window.removeEventListener('keydown', escape, true);
  }, [menu]);
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
      <IconButton label="Testo" active={tool === 'text'} onClick={() => setTool('text')}>
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
      {(['group', 'electrical'] as const).map((group) => {
        const graphic = group === 'group';
        const label = graphic ? 'Graffe e staffe' : 'Annotazioni elettriche';
        const tools = graphic ? ['brace', 'bracket'] : ['current', 'polarity', 'voltage'];
        const options = graphic
          ? ([
              ['brace', 'Graffa'],
              ['bracket', 'Staffa'],
            ] as const)
          : ([
              ['current', 'Corrente su un filo'],
              ['polarity', 'Polarità + / −'],
              ['voltage', 'Tensione tra due punti'],
            ] as const);
        return (
          <div className="electrical-tools-wrap" key={group}>
            <button
              className={`icon-button${tools.includes(tool) ? ' active' : ''}`}
              aria-label={label}
              aria-pressed={tools.includes(tool)}
              aria-expanded={menu === group}
              title={label}
              data-tooltip={label}
              onClick={() => setMenu((open) => (open === group ? null : group))}
            >
              {graphic ? <Braces size={19} /> : 'I/V'}
            </button>
            {menu === group && (
              <>
                <button
                  className="menu-backdrop"
                  aria-label={`Chiudi ${label.toLowerCase()}`}
                  onClick={() => setMenu(null)}
                />
                <div className="file-menu electrical-tools-menu" role="menu" aria-label={label}>
                  {options.map(([type, name]) => (
                    <button
                      key={type}
                      onClick={() => {
                        setTool(type);
                        setMenu(null);
                      }}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
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
