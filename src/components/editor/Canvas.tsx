import { ElectricalView } from '../../circuit/annotations/ElectricalView';
import { usePersonalBlocks } from '../../personalBlocks/library';
import { CIRCUIT_FONT } from '../../model/fonts';
import { LatexPreview } from '../../circuit/annotations/MathText';
import { useRef } from 'react';
import { Check, CircleAlert, Grid2X2, Maximize, Minus, PanelLeft, Plus } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { catalog, componentRegistry } from '../../model/catalog';
import { COLORS, componentTypes, GRID } from '../../model/types';
import { wirePoints, pointsPath } from '../../utils/geometry';
import type { ComponentType, Wire } from '../../model/types';
import { wireCandidate } from '../../utils/wires';
import { TargetFeedbackLayer } from './TargetFeedbackLayer';
import { DistanceGuideLayer } from './DistanceGuideLayer';
import { CircuitLayer } from './CircuitLayer';
import { DrawingToolbar } from '../toolbar/Toolbar';
import { useCanvasInteractions } from './useCanvasInteractions';
import { ContextToolbar } from '../properties/ContextToolbar';
import { IconButton } from '../toolbar/IconButton';
import { Symbol } from '../../circuit/components/Symbol';
import { LoopArrowView } from '../../circuit/annotations/LoopArrowView';
import { ArrowView } from '../../circuit/annotations/ArrowView';
import { PlacementLayer } from '../../smartPlacement/PlacementLayer';
import { PresetPlacementLayer } from '../../presets/PresetPlacementLayer';
import { presetRegistry } from '../../presets/registry';
import { inlineCompatible, needsTerminalChoice } from '../../smartPlacement/findCandidates';
export function Canvas({
  sidebarVisible = true,
  onShowSidebar,
}: {
  sidebarVisible?: boolean;
  onShowSidebar?: () => void;
}) {
  const svgRef = useRef<SVGSVGElement>(null),
    doc = useEditorStore((s) => s.document),
    tool = useEditorStore((s) => s.tool),
    pendingPresetId = useEditorStore((s) => s.pendingPresetId),
    grid = useEditorStore((s) => s.grid),
    selection = useEditorStore((s) => s.selection),
    arrowType = useEditorStore((s) => s.arrowType),
    storageError = useEditorStore((s) => s.storageError);
  const personalBlocks = usePersonalBlocks((s) => s.blocks);
  const personalName = personalBlocks.find((b) => b.id === pendingPresetId)?.name;
  const interactions = useCanvasInteractions(svgRef),
    { viewport: v, overlay, draft, editing } = interactions;
  const editedObject = editing ? doc.objects.find((o) => o.id === editing.id) : null;
  const editedText = editedObject?.kind === 'text' ? editedObject : null;
  const isComponent = componentTypes.includes(tool as ComponentType),
    gridSize = GRID * v.zoom * (v.zoom < 0.4 ? 2 : 1);
  const placementType =
    interactions.paletteDragType ?? (isComponent ? (tool as ComponentType) : null);
  const smart = interactions.smart;
  const smartHint =
    smart.preview?.phase === 'anchor-target'
      ? 'Clic per ancorare · poi sposta e clicca per inserire'
      : smart.preview?.phase === 'anchored'
        ? 'Ancorato · clic per inserire e collegare · R ruota · Alt/Option ignora'
        : smart.preview?.phase === 'snapped'
          ? 'Clic per inserire e collegare · Alt/Option ignora'
          : smart.preview?.phase === 'inline-candidate'
            ? 'Clic per inserire nel filo · una sola operazione Annulla'
            : null;
  let previewPath = '';
  if (draft && overlay.mouse) {
    const candidate = wireCandidate(overlay.mouse, doc, v.zoom);
    const wire: Wire = {
      kind: 'wire',
      id: 'preview',
      startEndpoint: draft.start,
      endEndpoint:
        candidate.kind === 'wire' ? { kind: 'free', point: candidate.point } : candidate.endpoint,
      vertices: draft.vertices,
      color: COLORS.ink,
      width: 2,
    };
    previewPath = pointsPath(wirePoints(wire, doc));
  }
  const hint =
    tool === 'preset'
      ? `${pendingPresetId ? (presetRegistry[pendingPresetId]?.name ?? personalName) : 'Blocco rapido'} · clicca per inserire · R ruota · Esc annulla`
      : tool === 'current'
        ? 'Corrente · clicca un filo evidenziato · Esc annulla'
        : tool === 'polarity'
          ? 'Polarità · clicca un componente evidenziato · Esc annulla'
          : tool === 'voltage'
            ? interactions.voltageStart
              ? 'A selezionato · seleziona il secondo punto · Esc annulla'
              : 'Seleziona il primo punto · clicca o trascina verso il secondo · Esc annulla'
            : tool === 'wire'
              ? draft
                ? 'Aggiungi una svolta · clic su terminale, nodo o filo per collegare · Enter per terminare'
                : 'Clicca un terminale, un nodo o un filo per iniziare'
              : tool === 'junction'
                ? 'Clicca per inserire un nodo · Shift + clic per più nodi'
                : tool === 'text'
                  ? 'Clicca per inserire Testo · doppio clic per modificarlo'
                  : tool === 'loop-arrow'
                    ? 'Trascina un’area per la maglia · handle sulla punta per spostarla'
                    : tool === 'arrow'
                      ? 'Trascina per disegnare · seleziona per modificare gli handle'
                      : isComponent
                        ? `${catalog.find((c) => c.type === tool)?.name} · clicca per inserire · R ruota · Esc termina`
                        : tool === 'pan'
                          ? 'Trascina per spostare la vista'
                          : null;
  return (
    <main className="editor" aria-label="Editor circuito">
      <DrawingToolbar />
      {!sidebarVisible && (
        <button
          className="icon-button sidebar-toggle sidebar-reopen"
          aria-label="Mostra componenti"
          title="Mostra componenti"
          aria-expanded={false}
          aria-controls="component-library"
          onClick={onShowSidebar}
        >
          <PanelLeft size={18} strokeWidth={1.5} />
        </button>
      )}
      <div className="document-heading">
        {storageError && (
          <span className="save-status error" role="status">
            <CircleAlert size={12} />
            Salvataggio locale non disponibile · salva JSON
          </span>
        )}
      </div>
      <ContextToolbar
        key={selection.join(',')}
        viewport={v}
        surfaceSize={interactions.surfaceSize}
        svgRef={svgRef}
        hidden={!!interactions.dragging || !!editing}
      />
      {isComponent &&
        (inlineCompatible(tool as ComponentType) || needsTerminalChoice(tool as ComponentType)) && (
          <div className="smart-placement-options" aria-label="Assistenze placement">
            {inlineCompatible(tool as ComponentType) && (
              <button
                aria-pressed={smart.session.kind === 'inline'}
                onClick={smart.toggleInline}
                title="Attiva l’inserimento solo quando l’anteprima mostra il taglio del filo"
              >
                Inserisci in filo
              </button>
            )}
            {needsTerminalChoice(tool as ComponentType) && (
              <>
                <span>Collega terminale:</span>
                <button
                  aria-pressed={!smart.session.terminalId}
                  onClick={() => smart.chooseTerminal(null)}
                >
                  Nessuno
                </button>
                {componentRegistry[tool as ComponentType].terminals.map((t) => (
                  <button
                    key={t.id}
                    aria-label={`Collega terminale ${t.name ?? t.id}`}
                    aria-pressed={smart.session.terminalId === t.id}
                    onClick={() => smart.chooseTerminal(t.id)}
                  >
                    {t.name ?? t.id}
                  </button>
                ))}
              </>
            )}
            <span className="smart-option-hint">Alt/Option ignora · R ruota</span>
          </div>
        )}
      {tool === 'arrow' && (
        <div className="arrow-tool-options" aria-label="Forma freccia">
          {(['straight', 'curve'] as const).map((type, i) => (
            <button
              key={type}
              className={arrowType === type ? 'selected' : ''}
              onClick={() => useEditorStore.getState().setArrowType(type)}
            >
              {['Dritta', 'Curva'][i]}
            </button>
          ))}
        </div>
      )}
      <svg
        ref={svgRef}
        tabIndex={0}
        className={`drawing-surface tool-${isComponent ? 'component' : tool}${interactions.space ? ' space-pan' : ''}${interactions.dragging ? ` dragging-${interactions.dragging}` : ''}${isComponent && smartHint ? (smart.preview?.phase === 'inline-candidate' ? ' smart-inline' : ' smart-connect') : ''}`}
        aria-label="Foglio SVG del circuito"
        data-testid="circuit-canvas"
        onPointerDown={interactions.pointerDown}
        onPointerMove={interactions.pointerMove}
        onPointerUp={interactions.pointerUp}
        onPointerCancel={interactions.cancel}
        onDoubleClick={interactions.doubleClick}
        onPointerLeave={interactions.leave}
        onDragOver={interactions.dragOver}
        onDragLeave={smart.leave}
        onDrop={interactions.drop}
        onContextMenu={(e) => e.preventDefault()}
      >
        <defs>
          <pattern
            id="grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
            x={(v.x % gridSize) - gridSize / 2}
            y={(v.y % gridSize) - gridSize / 2}
          >
            <circle cx={gridSize / 2} cy={gridSize / 2} r={0.7} fill="#dce2e8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={grid ? 'url(#grid)' : 'transparent'} />
        <g transform={`translate(${v.x} ${v.y}) scale(${v.zoom})`}>
          <CircuitLayer
            doc={doc}
            selection={selection}
            terminals={tool === 'wire'}
            zoom={v.zoom}
            activeLabel={interactions.activeLabel}
            editingTextId={editedText?.id}
          />
          <DistanceGuideLayer guides={overlay.distances} zoom={v.zoom} />
          <g pointerEvents="none">
            {overlay.guides.x !== undefined && (
              <path
                d={`M${overlay.guides.x} ${-100000}V${100000}`}
                className="snap-guide"
                strokeWidth={1 / v.zoom}
              />
            )}
            {overlay.guides.y !== undefined && (
              <path
                d={`M${-100000} ${overlay.guides.y}H${100000}`}
                className="snap-guide"
                strokeWidth={1 / v.zoom}
              />
            )}
            {overlay.box && (
              <rect
                {...overlay.box}
                fill="#2463e8"
                fillOpacity={0.05}
                stroke="#2463e8"
                strokeWidth={1 / v.zoom}
              />
            )}
            {previewPath && (
              <path
                d={previewPath}
                fill="none"
                stroke="#5681d0"
                strokeWidth={2}
                strokeDasharray="5 4"
              />
            )}
            {draft &&
              draft.vertices.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={3} fill="#2463e8" />
              ))}
            {overlay.target && (
              <>
                <circle
                  cx={overlay.target.x}
                  cy={overlay.target.y}
                  r={10 / v.zoom}
                  className="snap-target"
                />
                <circle cx={overlay.target.x} cy={overlay.target.y} r={3 / v.zoom} fill="#2463e8" />
              </>
            )}
            {overlay.arrow &&
              (overlay.arrow.kind === 'electrical' ? (
                <ElectricalView object={overlay.arrow} doc={doc} zoom={v.zoom} />
              ) : overlay.arrow.kind === 'loop-arrow' ? (
                <LoopArrowView object={overlay.arrow} zoom={v.zoom} />
              ) : (
                <ArrowView object={overlay.arrow} zoom={v.zoom} />
              ))}
          </g>
          <PlacementLayer
            doc={doc}
            type={placementType}
            preview={placementType ? smart.preview : null}
            continueEndpoint={isComponent ? smart.continueEndpoint : null}
            viewport={v}
            size={interactions.surfaceSize}
          />
          <TargetFeedbackLayer
            doc={doc}
            componentId={overlay.componentTarget}
            wireId={overlay.wireTarget}
            firstPoint={tool === 'voltage' ? interactions.voltageStart : null}
            zoom={v.zoom}
          />
          <PresetPlacementLayer point={overlay.mouse} zoom={v.zoom} />
        </g>
      </svg>
      {editing && (
        <form
          className={`inline-editor${editedText ? ' inline-text-editor' : ''}`}
          style={{
            left: editing.point.x * v.zoom + v.x,
            top: editing.point.y * v.zoom + v.y,
            ...(editedText
              ? {
                  transform: `translate(${editedText.align === 'middle' ? '-50%' : editedText.align === 'end' ? '-100%' : '0'}, -50%) rotate(${editedText.rotation}deg)`,
                  maxWidth: Math.max(
                    60,
                    interactions.surfaceSize.width - (editing.point.x * v.zoom + v.x) - 12,
                  ),
                }
              : {}),
          }}
          onSubmit={(e) => {
            e.preventDefault();
            interactions.saveEdit();
          }}
        >
          <input
            autoFocus
            aria-label="Modifica testo sul foglio"
            style={{
              fontFamily: CIRCUIT_FONT,
              ...(editedText
                ? {
                    fontSize: editedText.fontSize * v.zoom,
                    color: editedText.color,
                    width: `${Math.max(3, editing.text.length + 1)}ch`,
                  }
                : {}),
            }}
            autoComplete="off"
            spellCheck={false}
            value={editing.text}
            onFocus={(e) => e.currentTarget.select()}
            onChange={(e) => interactions.setEditing({ ...editing, text: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                interactions.setEditing(null);
                svgRef.current?.focus();
              }
            }}
          />
          {!editedText && (
            <>
              <button type="submit" aria-label="Conferma testo" title="Conferma testo">
                <Check size={16} />
              </button>
              <div className="inline-latex-preview" aria-label="Anteprima etichetta">
                <LatexPreview text={editing.text} />
              </div>
            </>
          )}
        </form>
      )}
      {!doc.objects.length && (
        <div className="empty-sheet">
          <div className="empty-circuit">
            <svg viewBox="-50 -30 100 60">
              <Symbol type="resistor" color="#8092ae" />
            </svg>
          </div>
          <h2>Le idee iniziano da un foglio.</h2>
          <p>
            Scegli un componente dalla palette.
            <br />
            Un clic, e il tuo circuito prende forma.
          </p>
          <span>SVG vettoriale · appunti a mano · export TikZ</span>
        </div>
      )}
      <div className="editor-bottom">
        <div className="zoom-controls">
          <IconButton label="Riduci zoom" onClick={() => interactions.zoomAt(1 / 1.2)}>
            <Minus size={15} />
          </IconButton>
          <button
            className="zoom-number"
            aria-label="Adatta circuito alla vista"
            title="Adatta circuito alla vista"
            onClick={interactions.fit}
          >
            {Math.round(v.zoom * 100)}%
          </button>
          <IconButton label="Aumenta zoom" onClick={() => interactions.zoomAt(1.2)}>
            <Plus size={15} />
          </IconButton>
          <div className="toolbar-divider" />
          <IconButton label="Adatta alla vista (1)" onClick={interactions.fit}>
            <Maximize size={15} />
          </IconButton>
          <IconButton
            label="Griglia (G)"
            active={grid}
            onClick={() => useEditorStore.getState().toggleGrid()}
          >
            <Grid2X2 size={15} />
          </IconButton>
        </div>
        {(isComponent ? (smartHint ?? hint) : hint) && (
          <div className="canvas-hint" role="status">
            {isComponent ? (smartHint ?? hint) : hint}
          </div>
        )}
        {!!selection.length && (
          <span className="selection-status">
            {selection.length}{' '}
            {selection.length === 1 ? 'elemento selezionato' : 'elementi selezionati'}
          </span>
        )}
      </div>
    </main>
  );
}
