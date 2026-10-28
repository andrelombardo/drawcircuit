import { t } from '../../i18n';
import {
  DraftingCompass,
  Axis3D,
  ArrowRight,
  CircleDot,
  Circle,
  GripVertical,
  Hand,
  Highlighter,
  Eraser,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  Minus,
  Spline,
  Type,
  Undo2,
} from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { IconButton } from './IconButton';
import { useFloatingToolbar } from './useFloatingToolbar';
import { DrawingToolOptions } from './DrawingToolOptions';
import { shortcut } from '../../utils/platform';
import { ActionMenu } from './ActionMenu';
import type { MenuAction } from './ActionMenu';
import {
  BraceToolIcon,
  BracketToolIcon,
  CurrentInlineIcon,
  LoopPathIcon,
  PolarityIcon,
  VoltageIcon,
} from './DrawingIcons';

export function DrawingToolbar({ sidebarVisible = true, inspectorVisible = true }: { sidebarVisible?: boolean; inspectorVisible?: boolean }) {
  const {
    ref: toolbarRef,
    style,
    dragging,
    menuAbove,
    handle,
  } = useFloatingToolbar(sidebarVisible, inspectorVisible);
  const tool = useEditorStore((s) => s.tool),
    setTool = useEditorStore((s) => s.setTool),
    gestureStart = useEditorStore((s) => s.gestureStart),
    canUndo = useEditorStore((s) => s.past.length > 0),
    canRedo = useEditorStore((s) => s.future.length > 0),
    undo = useEditorStore((s) => s.undo),
    redo = useEditorStore((s) => s.redo);
  const drawingTools = [
    'wire',
    'highlight',
    'highlight-eraser',
    'rectangle',
    'circle',
    'line',
    'angle',
    'junction',
    'arrow',
    'loop-arrow',
    'brace',
    'bracket',
    'polarity',
    'voltage',
    'current',
  ];
  const items: MenuAction[] = [
    { id: 'diagrams', label: t('Diagrams'), icon: <Axis3D size={18} />, children: [
      { id: 'cartesian-axes', label: t('Cartesian axes'), onSelect: () => useEditorStore.getState().selectPreset('cartesian-axes') },
      { id: 'gauss-plane', label: t('Gauss plane'), onSelect: () => useEditorStore.getState().selectPreset('gauss-plane') },
    ] },
    { id: 'angle', label: t('Angle'), icon: <DraftingCompass size={18} />, onSelect: () => setTool('angle') },
    {
      id: 'junction',
      label: t('Junction'),
      shortcut: 'N',
      icon: <CircleDot size={18} />,
      onSelect: () => setTool('junction'),
    },
    {
      id: 'arrow',
      label: t('Arrow'),
      shortcut: 'A',
      icon: <ArrowRight size={18} />,
      separatorBefore: true,
      onSelect: () => setTool('arrow'),
    },
    {
      id: 'loop',
      label: t('Loop'),
      shortcut: 'L',
      icon: <LoopPathIcon />,
      onSelect: () => setTool('loop-arrow'),
    },
    {
      id: 'brace',
      label: t('Brace / Bracket'),
      icon: <BraceToolIcon />,
      children: [
        {
          id: 'brace',
          label: t('Brace'),
          icon: <BraceToolIcon />,
          onSelect: () => setTool('brace'),
        },
        {
          id: 'bracket',
          label: t('Bracket'),
          icon: <BracketToolIcon />,
          onSelect: () => setTool('bracket'),
        },
      ],
    },
    {
      id: 'polarity',
      label: t('Polarity + / -'),
      icon: <PolarityIcon />,
      separatorBefore: true,
      onSelect: () => setTool('polarity'),
    },
    {
      id: 'voltage',
      label: t('Voltage between two points'),
      icon: <VoltageIcon />,
      onSelect: () => setTool('voltage'),
    },
    {
      id: 'current',
      label: t('Current on wire'),
      icon: <CurrentInlineIcon />,
      onSelect: () => setTool('current'),
    },
    {
      id: 'highlight',
      label: t('Highlighter'),
      icon: <Highlighter size={18} />,
      separatorBefore: true,
      onSelect: () => setTool('highlight'),
    },
    {
      id: 'highlight-eraser',
      label: t('Highlight eraser'),
      icon: <Eraser size={18} />,
      onSelect: () => setTool('highlight-eraser'),
    },
    {
      id: 'rectangle',
      separatorBefore: true,
      label: t('Rectangle'),
      icon: <Square size={18} />,
      onSelect: () => setTool('rectangle'),
    },
    {
      id: 'circle',
      label: t('Circle'),
      icon: <Circle size={18} />,
      onSelect: () => setTool('circle'),
    },
    {
      id: 'line',
      label: t('Decorative line'),
      icon: <Minus size={18} />,
      onSelect: () => setTool('line'),
    },
  ];
  const currentDrawing = items.flatMap((item) => item.children ? [item, ...item.children] : [item])
    .find((item) => item.id === tool || (item.id === 'loop' && tool === 'loop-arrow'));
  return (
    <div
      ref={toolbarRef}
      className="main-tools floating-surface"
      role="toolbar"
      aria-label={t('Drawing tools')}
      style={style}
      data-dragging={dragging || undefined}
      data-menu-above={menuAbove || undefined}
      onPointerDown={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="toolbar-grip"
        aria-label={t('Move toolbar')}
        title={t('Drag to move the tools')}
        data-tooltip={t('Move toolbar')}
        {...handle}
      >
        <GripVertical size={16} />
      </button>
      <IconButton
        label={t('Select (V)')}
        shortcut="V"
        active={tool === 'select'}
        onClick={() => setTool('select')}
      >
        <MousePointer2 size={18} />
      </IconButton>
      <IconButton label={`${t('Wire')} (W)`} shortcut="W" active={tool === 'wire'} onClick={() => setTool('wire')}>
        <Spline size={18} />
      </IconButton>
      <IconButton label={t('Text')} active={tool === 'text'} onClick={() => setTool('text')}>
        <Type size={19} />
      </IconButton>
      <ActionMenu
        label={t('Drawing and annotations')}
        icon={currentDrawing?.icon ?? <Pencil size={18} />}
        description={currentDrawing?.label}
        shortcut={currentDrawing?.shortcut}
        items={items.map((item) => ({ ...item, checked: item.id === tool || (item.id === 'loop' && tool === 'loop-arrow'), children: item.children?.map((child) => ({ ...child, checked: child.id === tool })) }))}
        active={drawingTools.includes(tool) && tool !== 'wire'}
        onEscape={() => setTool('select')}
      />
      <div className="toolbar-divider" aria-hidden="true" />
      <IconButton
        label={`${t('Undo')} (${shortcut('Z')})`}
        disabled={!canUndo && !gestureStart}
        onClick={undo}
      >
        <Undo2 size={18} />
      </IconButton>
      <IconButton
        label={`${t('Redo')} (${shortcut('Z', true)})`}
        disabled={!canRedo}
        onClick={redo}
      >
        <Redo2 size={18} />
      </IconButton>
      <div className="toolbar-divider" aria-hidden="true" />
      <IconButton
        label={t('Pan view (H or Space)')}
        shortcut="H"
        active={tool === 'pan'}
        onClick={() => setTool('pan')}
      >
        <Hand size={18} />
      </IconButton>
      <DrawingToolOptions />
    </div>
  );
}
