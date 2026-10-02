import { createPersonalBlock, usePersonalBlocks } from '../../personalBlocks/library';
import { BlockNameDialog } from '../toolbar/BlockNameDialog';
import { ReplaceDialog } from './ReplaceDialog';
import { compatibleReplacements } from '../../model/replacement';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Copy,
  FlipHorizontal,
  RotateCw,
  Trash2,
  Type,
  MoreHorizontal,
} from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';
import { reverseLoop } from '../../utils/loops';
import { COLORS } from '../../model/types';
import type { CircuitObject, Viewport } from '../../model/types';
import { contentBounds, unionBounds } from '../../utils/visualBounds';
import { useEditorStore } from '../../store/editorStore';
import { IconButton } from '../toolbar/IconButton';
import { toolbarActions } from './toolbarActions';
function PropertyText({
  value,
  label,
  onChange,
}: {
  value: string;
  label: string;
  onChange: (text: string) => void;
}) {
  const [text, setText] = useState(value),
    cancel = useRef(false);
  return (
    <input
      className="property-text"
      aria-label={label}
      title={label}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => {
        if (!cancel.current && text !== value) onChange(text);
        cancel.current = false;
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          e.stopPropagation();
          e.currentTarget.blur();
        }
        if (e.key === 'Escape') {
          e.stopPropagation();
          cancel.current = true;
          setText(value);
          e.currentTarget.blur();
        }
      }}
      placeholder={label}
    />
  );
}
export function ContextToolbar({
  viewport,
  surfaceSize,
  svgRef,
  hidden = false,
}: {
  viewport: Viewport;
  surfaceSize: { width: number; height: number };
  svgRef: RefObject<SVGSVGElement | null>;
  hidden?: boolean;
}) {
  const selection = useEditorStore((s) => s.selection),
    doc = useEditorStore((s) => s.document),
    tool = useEditorStore((s) => s.tool),
    update = useEditorStore((s) => s.update);
  const root = useRef<HTMLDivElement>(null),
    more = useRef<HTMLDetailsElement>(null);
  const [dismissed, setDismissed] = useState(false),
    [blockDialog, setBlockDialog] = useState(false),
    [replaceDialog, setReplaceDialog] = useState(false);
  const objects = doc.objects.filter((o) => selection.includes(o.id));
  const o = objects.length === 1 ? objects[0] : null,
    actions = toolbarActions(o);
  useLayoutEffect(() => {
    const outside = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) {
        if (more.current) more.current.open = false;
        setDismissed(true);
      }
    };
    const show = () => setDismissed(false);
    const escape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && more.current?.open) {
        e.preventDefault();
        e.stopPropagation();
        more.current.open = false;
        more.current.querySelector('summary')?.focus();
      }
    };
    document.addEventListener('pointerdown', outside, true);
    document.addEventListener('keydown', escape, true);
    window.addEventListener('drawcircuit:show-properties', show);
    return () => {
      document.removeEventListener('pointerdown', outside, true);
      document.removeEventListener('keydown', escape, true);
      window.removeEventListener('drawcircuit:show-properties', show);
    };
  }, []);
  useLayoutEffect(() => {
    const element = root.current,
      svg = svgRef.current;
    if (!element || !svg || !objects.length || hidden || dismissed) return;
    const position = () => {
      const b = unionBounds(objects.map((obj) => contentBounds(obj, doc))),
        v = viewport;
      const screen = {
        x: b.x * v.zoom + v.x,
        y: b.y * v.zoom + v.y,
        width: b.width * v.zoom,
        height: b.height * v.zoom,
      };
      // Use actual rendered label rectangles (KaTeX, fractions, rotation) when available.
      const canvasRect = svg.getBoundingClientRect();
      for (const label of svg.querySelectorAll('[data-layer="labels"] [data-object]')) {
        if (!selection.includes(label.getAttribute('data-object') ?? '')) continue;
        const r = label.getBoundingClientRect();
        if (r.width && r.height) {
          const joined = unionBounds([
            screen,
            {
              x: r.left - canvasRect.left,
              y: r.top - canvasRect.top,
              width: r.width,
              height: r.height,
            },
          ]);
          Object.assign(screen, joined);
        }
      }
      const w = element.offsetWidth || 520,
        h = element.offsetHeight || 44;
      const x = Math.max(
        8,
        Math.min(surfaceSize.width - w - 8, screen.x + screen.width / 2 - w / 2),
      );
      const clampY = (y: number) => Math.max(96, Math.min(surfaceSize.height - h - 70, y));
      const obstacles = [
        ...svg.querySelectorAll(
          '[data-layer="labels"] [data-object], [data-layer="components"] > [data-object], [data-layer="junctions"] > [data-object]',
        ),
      ]
        .map((node) => ({
          rect: node.getBoundingClientRect(),
          selected: selection.includes(node.getAttribute('data-object') ?? ''),
        }))
        .filter(({ rect: r }) => r.width && r.height)
        .map(({ rect: r, selected }) => ({
          x: r.left - canvasRect.left,
          y: r.top - canvasRect.top,
          width: r.width,
          height: r.height,
          weight: selected ? 20 : 1,
        }));
      const overlap = (y: number) =>
        obstacles.reduce(
          (cost, r) =>
            cost +
            r.weight *
              Math.max(0, Math.min(x + w, r.x + r.width) - Math.max(x, r.x)) *
              Math.max(0, Math.min(y + h, r.y + r.height) - Math.max(y, r.y)),
          0,
        );
      const above = screen.y - h - 16,
        below = screen.y + screen.height + 16;
      const candidates = [above, below, above - h - 16, below + h + 16].map(clampY);
      let y = candidates[0];
      for (const candidate of candidates) if (overlap(candidate) < overlap(y)) y = candidate;
      element.dataset.position = y + h <= screen.y ? 'above' : 'below';

      element.style.left = `${x}px`;
      element.style.top = `${y}px`;
    };
    position();
    const observer = new ResizeObserver(position);
    observer.observe(element);
    const labels = svg.querySelector('[data-layer="labels"]');
    if (labels) observer.observe(labels);
    return () => observer.disconnect();
  }, [doc, selection, viewport, surfaceSize, svgRef, hidden, dismissed, objects]);
  if (!objects.length || tool !== 'select') return null;
  const apply = (fn: (obj: CircuitObject) => CircuitObject) => {
    const s = useEditorStore.getState(),
      selected = new Set(selection);
    s.commit({
      ...s.document,
      objects: s.document.objects.map((obj) => (selected.has(obj.id) ? fn(obj) : obj)),
    });
  };
  const hasLabel = o?.kind === 'component' || o?.kind === 'junction' || o?.kind === 'electrical';
  const textSize = o?.kind === 'text' ? o.fontSize : hasLabel ? o.label.fontSize : 22;
  const setTextSize = (size: number) =>
    apply((obj) =>
      obj.kind === 'text'
        ? { ...obj, fontSize: size }
        : obj.kind === 'component' || obj.kind === 'junction' || obj.kind === 'electrical'
          ? { ...obj, label: { ...obj.label, fontSize: size } }
          : obj,
    );
  const sizeControl = (
    <label className="property-control">
      <span>
        <Type size={13} />
        Testo
      </span>
      <select
        aria-label="Dimensione testo"
        title="Dimensione testo"
        value={textSize}
        onChange={(e) => setTextSize(Number(e.target.value))}
      >
        {[...new Set([16, 18, 20, 22, 23, 24, 27, 28, 32, 40, textSize])]
          .sort((a, b) => a - b)
          .map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
      </select>
    </label>
  );
  const selectedColor = o?.kind === 'component' ? o.label.color : o?.color;
  const setColor = (color: string) =>
    apply((obj) =>
      obj.kind === 'component' ? { ...obj, label: { ...obj.label, color } } : { ...obj, color },
    );
  const width = o?.kind === 'loop-arrow' ? o.strokeWidth : o && 'width' in o ? o.width : 2;
  return (
    <div
      ref={root}
      className="context-toolbar"
      role="toolbar"
      aria-label="Proprietà selezione"
      style={{ visibility: hidden || dismissed ? 'hidden' : 'visible' }}
    >
      {hasLabel && (
        <label className="property-control">
          <span>{o.kind === 'junction' ? 'Nodo' : 'Label'}</span>
          <PropertyText
            key={`${o.id}-${o.label.text}`}
            value={o.label.text}
            label={
              o.kind === 'junction'
                ? 'Nome nodo'
                : o.kind === 'electrical'
                  ? 'Label annotazione'
                  : 'Label componente'
            }
            onChange={(text) =>
              update(o.id, (obj) =>
                obj.kind === 'component' || obj.kind === 'junction' || obj.kind === 'electrical'
                  ? { ...obj, label: { ...obj.label, text } }
                  : obj,
              )
            }
          />
        </label>
      )}
      {o?.kind === 'text' && (
        <PropertyText
          key={`${o.id}-${o.text}`}
          value={o.text}
          label="Testo annotazione"
          onChange={(text) => update(o.id, (obj) => (obj.kind === 'text' ? { ...obj, text } : obj))}
        />
      )}
      {!o && <span className="property-caption">{objects.length} elementi</span>}
      {actions.primary.includes('textSize') && sizeControl}
      {actions.primary.includes('stroke') && (
        <label className="property-control">
          <span>Tratto</span>
          <select
            aria-label={o?.kind === 'component' ? 'Spessore componente' : 'Spessore'}
            title="Spessore tratto"
            value={width}
            onChange={(e) =>
              apply((obj) =>
                obj.kind === 'loop-arrow'
                  ? { ...obj, strokeWidth: Number(e.target.value) }
                  : obj.kind === 'component' || obj.kind === 'wire' || obj.kind === 'arrow'
                    ? { ...obj, width: Number(e.target.value) }
                    : obj,
              )
            }
          >
            {[...new Set([1, 1.5, 1.8, 2, 3, 4, width])]
              .sort((a, b) => a - b)
              .map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
          </select>
        </label>
      )}
      <label className="property-control toolbar-color">
        <span>{o?.kind === 'component' ? 'Label' : 'Colore'}</span>
        <input
          type="color"
          aria-label="Colore personalizzato"
          title="Colore personalizzato"
          value={selectedColor ?? COLORS.ink}
          onChange={(e) => setColor(e.target.value)}
        />
        <div className="color-swatches">
          {Object.entries(COLORS).map(([name, c]) => (
            <button
              type="button"
              key={c}
              aria-label={`Colore ${name}`}
              title={`Colore ${name}`}
              data-tooltip={`Colore ${name}`}
              className={`swatch${selectedColor === c ? ' selected' : ''}`}
              style={{ background: c }}
              onClick={() => setColor(c)}
            />
          ))}
        </div>
      </label>
      <div className="toolbar-divider" />
      {actions.primary.includes('reverse') && o && (
        <IconButton
          label="Inverti freccia"
          onClick={() =>
            update(o.id, (obj) =>
              obj.kind === 'arrow' || obj.kind === 'electrical'
                ? { ...obj, reversed: !obj.reversed }
                : obj.kind === 'loop-arrow'
                  ? reverseLoop(obj)
                  : obj,
            )
          }
        >
          <FlipHorizontal size={17} />
        </IconButton>
      )}
      {actions.primary.includes('rotate') && (
        <IconButton label="Ruota 90° (R)" onClick={() => useEditorStore.getState().rotate()}>
          <RotateCw size={17} />
        </IconButton>
      )}
      <IconButton label="Duplica (⌘/Ctrl D)" onClick={() => useEditorStore.getState().duplicate()}>
        <Copy size={17} />
      </IconButton>
      <IconButton label="Elimina (Delete)" onClick={() => useEditorStore.getState().remove()}>
        <Trash2 size={17} />
      </IconButton>
      <button className="secondary-property" onClick={() => setBlockDialog(true)}>
        Salva come blocco
      </button>
      {o?.kind === 'component' && compatibleReplacements(o).length > 0 && (
        <button className="secondary-property" onClick={() => setReplaceDialog(true)}>
          Sostituisci…
        </button>
      )}
      {blockDialog && (
        <BlockNameDialog
          onClose={() => setBlockDialog(false)}
          onSave={(name) =>
            usePersonalBlocks.getState().add(createPersonalBlock(doc, selection, name))
          }
        />
      )}
      {replaceDialog && o?.kind === 'component' && (
        <ReplaceDialog component={o} onClose={() => setReplaceDialog(false)} />
      )}
      {!!actions.secondary.length && (
        <details ref={more} className="context-more">
          <summary
            aria-label="Altre proprietà"
            title="Altre proprietà"
            data-tooltip="Altre proprietà"
          >
            <MoreHorizontal size={18} />
          </summary>
          <div className="context-popover">
            {actions.secondary.includes('textSize') && sizeControl}
            {o?.kind === 'electrical' && (
              <>
                <label className="property-control">
                  Offset X
                  <input
                    aria-label="Offset annotazione X"
                    type="number"
                    value={o.offset.x}
                    onChange={(e) => {
                      const x = Number(e.target.value);
                      if (Number.isFinite(x))
                        update(o.id, (obj) =>
                          obj.kind === 'electrical'
                            ? { ...obj, offset: { ...obj.offset, x } }
                            : obj,
                        );
                    }}
                  />
                </label>
                <label className="property-control">
                  Offset Y
                  <input
                    aria-label="Offset annotazione Y"
                    type="number"
                    value={o.offset.y}
                    onChange={(e) => {
                      const y = Number(e.target.value);
                      if (Number.isFinite(y))
                        update(o.id, (obj) =>
                          obj.kind === 'electrical'
                            ? { ...obj, offset: { ...obj.offset, y } }
                            : obj,
                        );
                    }}
                  />
                </label>
              </>
            )}
            {actions.secondary.includes('bodyText') && o?.kind === 'component' && (
              <label className="property-control">
                <span>Testo interno</span>
                <PropertyText
                  key={`${o.id}-body-${o.bodyText}`}
                  label="Testo interno"
                  value={o.bodyText ?? '='}
                  onChange={(bodyText) =>
                    update(o.id, (obj) => (obj.kind === 'component' ? { ...obj, bodyText } : obj))
                  }
                />
              </label>
            )}
            {actions.secondary.includes('bodyColor') && o && (
              <label className="property-control">
                <span>Simbolo</span>
                <input
                  type="color"
                  aria-label="Colore componente"
                  title="Colore componente"
                  value={o.color}
                  onChange={(e) => update(o.id, (obj) => ({ ...obj, color: e.target.value }))}
                />
              </label>
            )}
            {actions.secondary.includes('labelColor') && hasLabel && (
              <label className="property-control">
                <span>Colore label</span>
                <input
                  type="color"
                  aria-label="Colore label"
                  title="Colore label"
                  value={o.label.color}
                  onChange={(e) =>
                    update(o.id, (obj) =>
                      obj.kind === 'junction' ||
                      obj.kind === 'component' ||
                      obj.kind === 'electrical'
                        ? { ...obj, label: { ...obj.label, color: e.target.value } }
                        : obj,
                    )
                  }
                />
              </label>
            )}
            {actions.secondary.includes('rotateLabel') && o && (
              <button
                type="button"
                className="secondary-property"
                title="Ruota solo label"
                aria-label="Ruota solo label"
                onClick={() =>
                  update(o.id, (obj) =>
                    obj.kind === 'component' || obj.kind === 'junction' || obj.kind === 'electrical'
                      ? {
                          ...obj,
                          label: {
                            ...obj.label,
                            rotation: ((obj.label.rotation + 90) % 360) as 0 | 90 | 180 | 270,
                          },
                        }
                      : obj,
                  )
                }
              >
                <RotateCw size={15} />
                Ruota label
              </button>
            )}
            {actions.secondary.includes('alignment') && o?.kind === 'text' && (
              <div className="alignment-buttons">
                {(['start', 'middle', 'end'] as const).map((align, i) => (
                  <IconButton
                    key={align}
                    label={['Allinea a sinistra', 'Centra testo', 'Allinea a destra'][i]}
                    active={o.align === align}
                    onClick={() =>
                      update(o.id, (obj) => (obj.kind === 'text' ? { ...obj, align } : obj))
                    }
                  >
                    {i === 0 ? (
                      <AlignLeft size={16} />
                    ) : i === 1 ? (
                      <AlignCenter size={16} />
                    ) : (
                      <AlignRight size={16} />
                    )}
                  </IconButton>
                ))}
              </div>
            )}
            {actions.secondary.includes('arrowType') && o?.kind === 'arrow' && (
              <label className="property-control">
                <span>Forma</span>
                <select
                  aria-label="Tipo freccia"
                  title="Tipo freccia"
                  value={o.type}
                  onChange={(e) =>
                    update(o.id, (obj) =>
                      obj.kind === 'arrow'
                        ? { ...obj, type: e.target.value as 'straight' | 'curve' | 'arc' }
                        : obj,
                    )
                  }
                >
                  <option value="straight">Dritta</option>
                  <option value="curve">Curva</option>
                  <option value="arc">Maglia</option>
                </select>
              </label>
            )}
          </div>
        </details>
      )}
    </div>
  );
}
