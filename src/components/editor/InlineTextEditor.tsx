import { useRef, type RefObject } from 'react';
import { CIRCUIT_FONT } from '../../model/fonts';
import type { Point, Viewport } from '../../model/types';
import type { InlineTextTarget } from '../../utils/labels';

/** Lightweight source editing shared by standalone text and all associated labels. */
export function InlineTextEditor({
  target,
  text,
  viewport,
  surfaceSize,
  svgRef,
  onChange,
  onSave,
  onCancel,
}: {
  target: InlineTextTarget;
  text: string;
  viewport: Viewport;
  surfaceSize: { width: number; height: number };
  svgRef: RefObject<SVGSVGElement | null>;
  onChange: (text: string) => void;
  onSave: () => void;
  onCancel: () => void;
}) {
  const settled = useRef(false);
  const save = () => {
    if (settled.current) return;
    settled.current = true;
    onSave();
  };
  const point: Point = {
    x: target.point.x * viewport.zoom + viewport.x,
    y: target.point.y * viewport.zoom + viewport.y,
  };
  return (
    <form
      className="inline-editor inline-text-editor"
      data-inline-editor={target.id}
      style={{
        left: point.x,
        top: point.y,
        transform: `translate(${target.align === 'middle' ? '-50%' : target.align === 'end' ? '-100%' : '0'}, -50%) rotate(${target.rotation}deg)`,
        maxWidth: Math.max(60, surfaceSize.width - point.x - 12),
      }}
      onSubmit={(event) => {
        event.preventDefault();
        save();
      }}
    >
      <input
        autoFocus
        aria-label="Modifica testo sul foglio"
        style={{
          fontFamily: CIRCUIT_FONT,
          fontSize: target.fontSize * viewport.zoom,
          color: target.color,
          width: `${Math.max(3, text.length + 1)}ch`,
        }}
        autoComplete="off"
        spellCheck={false}
        value={text}
        onFocus={(event) => event.currentTarget.select()}
        onChange={(event) => onChange(event.target.value)}
        onBlur={save}
        onKeyDown={(event) => {
          if (event.nativeEvent.isComposing) return;
          if (event.key === 'Escape') {
            event.preventDefault();
            settled.current = true;
            onCancel();
            svgRef.current?.focus();
          } else if (event.key === 'Enter') {
            event.preventDefault();
            save();
          }
        }}
      />
    </form>
  );
}
