import { ElectricalView } from '../../circuit/annotations/ElectricalView';
import { usePersonalBlocks } from '../../personalBlocks/library';
import { CIRCUIT_FONT } from '../../model/fonts';
import { LatexPreview } from '../../circuit/annotations/MathText';
import { useRef } from 'react';
import { Check, ChevronRight, Grid2X2, Maximize, Minus, Plus } from 'lucide-react';
import { useEditorStore } from '../../store/editorStore';
import { catalog, componentRegistry } from '../../model/catalog';
import { COLORS, componentTypes, GRID } from '../../model/types';
import { wirePoints, pointsPath, nearestWire } from '../../utils/geometry';
import type { ComponentType, Wire } from '../../model/types';
import { wireCandidate } from '../../utils/wires';
import { DistanceGuideLayer } from './DistanceGuideLayer';
import { CircuitLayer } from './CircuitLayer';
import { DocumentTitle } from './DocumentTitle';
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
export function Canvas() {
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
  const currentHover =
    tool === 'current' && overlay.mouse ? nearestWire(overlay.mouse, doc, 16 / v.zoom) : null;
  const hint =
    tool === 'preset'
      ? `${pendingPresetId ? (presetRegistry[pendingPresetId]?.name ?? personalName) : 'Blocco rapido'} · clicca per inserire · R ruota · Esc annulla`
      : tool === 'current'
        ? 'Clicca un filo per indicare la corrente'
        : tool === 'polarity'
          ? 'Clicca un componente a due terminali per indicare la polarità'
          : tool === 'voltage'
            ? 'Trascina dal primo al secondo punto per indicare la tensione'
            : tool === 'wire'
              ? draft
                ? 'Aggiungi una svolta · clic su terminale, nodo o filo per collegare · Enter per terminare'
                : 'Clicca un terminale, un nodo o un filo per iniziare'
              : tool === 'junction'
                ? 'Clicca per inserire un nodo · Shift + clic per più nodi'
                : tool === 'text'
                  ? 'Clicca sul foglio per scrivere un’annotazione'
                  : tool === 'loop-arrow'
                    ? 'Trascina un’area per la maglia · handle sulla punta per spostarla'
                    : tool === 'arrow'
                      ? 'Trascina per disegnare · seleziona per modificare gli handle'
                      : isComponent
                        ? `${catalog.find((c) => c.type === tool)?.name} · clicca per inserire · R ruota · Esc termina`
                        : 'Space + trascina per spostarti · rotellina per zoomare';
  return (
    <main className="editor" aria-label="Editor circuito">
      <div className="document-heading">
        <div className="document-breadcrumb">
          IL TUO FOGLIO
          <ChevronRight size={12} />
          <span>Elettrotecnica</span>
        </div>
        <DocumentTitle />
        <span className={`save-status${storageError ? ' error' : ''}`}>
          <Check size={12} />
          {storageError
            ? 'Salvataggio locale non disponibile · salva JSON'
            : 'Salvataggio locale automatico'}
        </span>
      </div>
      <div className="paper-tag">
        <span className="paper-tag-dot" />
        IL CIRCUITO, SENZA DISTRAZIONI
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
              {['↗ Dritta', '⤴ Curva'][i]}
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
            x={v.x % gridSize}
            y={v.y % gridSize}
          >
            <circle cx={0} cy={0} r={0.8} fill="#d8ddd9" />
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
                <ElectricalView object={overlay.arrow} doc={doc} />
              ) : overlay.arrow.kind === 'loop-arrow' ? (
                <LoopArrowView object={overlay.arrow} />
              ) : (
                <ArrowView object={overlay.arrow} />
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
          {currentHover && (
            <path
              data-current-hover={currentHover.wire.id}
              d={pointsPath(wirePoints(currentHover.wire, doc))}
              fill="none"
              stroke="#2463cb"
              strokeWidth={6 / v.zoom}
              opacity={0.4}
              pointerEvents="none"
            />
          )}
          <PresetPlacementLayer point={overlay.mouse} zoom={v.zoom} />
        </g>
      </svg>
      {editing && (
        <form
          className="inline-editor"
          style={{ left: editing.point.x * v.zoom + v.x, top: editing.point.y * v.zoom + v.y }}
          onSubmit={(e) => {
            e.preventDefault();
            interactions.saveEdit();
          }}
        >
          <input
            autoFocus
            aria-label="Modifica testo sul foglio"
            style={{ fontFamily: CIRCUIT_FONT }}
            value={editing.text}
            onFocus={(e) => e.currentTarget.select()}
            onChange={(e) => interactions.setEditing({ ...editing, text: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.preventDefault();
                interactions.setEditing(null);
              }
            }}
          />
          <button type="submit" aria-label="Conferma testo" title="Conferma testo">
            <Check size={16} />
          </button>
          <div className="inline-latex-preview" aria-label="Anteprima etichetta">
            <LatexPreview text={editing.text} />
          </div>
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
        <div className="canvas-hint">{isComponent ? (smartHint ?? hint) : hint}</div>
        <span className="sheet-mark">
          FATTO PER I TUOI APPUNTI <span>↗</span>
        </span>
      </div>
      <footer className="statusbar">
        <span>
          <span className="status-dot" />
          Editor SVG<span className="status-separator">/</span>
          {doc.objects.filter((o) => o.kind === 'component').length} componenti
          <span className="status-separator">·</span>
          {doc.objects.filter((o) => o.kind === 'wire').length} fili
        </span>
        <span>
          {selection.length
            ? `${selection.length} ${selection.length === 1 ? 'elemento selezionato' : 'elementi selezionati'}`
            : 'Seleziona e disegna liberamente'}
          <span className="status-separator">/</span>Griglia {GRID} px
        </span>
      </footer>
    </main>
  );
}
