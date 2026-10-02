import { memo, useMemo } from 'react';
import type { CircuitDocument } from '../../model/types';
import { wirePoints } from '../../utils/geometry';
import { ComponentView } from '../../circuit/components/ComponentView';
import { WireView } from '../../circuit/wires/WireView';
import { JunctionView } from '../../circuit/junctions/JunctionView';
import { ArrowView } from '../../circuit/annotations/ArrowView';
import { LoopArrowView } from '../../circuit/annotations/LoopArrowView';
import { MathText } from '../../circuit/annotations/MathText';
import { SelectionLayer } from './SelectionLayer';
export const CircuitLayer = memo(function CircuitLayer({
  doc,
  selection,
  terminals,
  zoom,
  activeLabel = null,
}: {
  doc: CircuitDocument;
  selection: string[];
  terminals: boolean;
  zoom: number;
  activeLabel?: string | null;
}) {
  const selected = useMemo(() => new Set(selection), [selection]);
  const wires = useMemo(
    () =>
      doc.objects.flatMap((o) =>
        o.kind === 'wire' ? [{ object: o, points: wirePoints(o, doc) }] : [],
      ),
    [doc],
  );
  return (
    <>
      <g data-layer="wires">
        {wires.map(({ object, points }) => (
          <WireView key={object.id} object={object} points={points} />
        ))}
      </g>
      <g data-layer="components">
        {doc.objects.map((o) =>
          o.kind === 'component' ? (
            <ComponentView
              key={o.id}
              object={o}
              selected={selected.has(o.id)}
              terminals={terminals || selected.has(o.id)}
            />
          ) : null,
        )}
      </g>
      <g data-layer="junctions">
        {doc.objects.map((o) =>
          o.kind === 'junction' ? (
            <JunctionView key={o.id} object={o} selected={selected.has(o.id)} />
          ) : null,
        )}
      </g>
      <g data-layer="labels">
        {doc.objects.map((o) =>
          o.kind === 'component' || o.kind === 'junction' ? (
            <g key={o.id} data-object={o.id}>
              <MathText
                text={o.label.text}
                x={o.x + o.label.offset.x}
                y={o.y + o.label.offset.y}
                color={o.label.color}
                fontSize={o.label.fontSize}
                rotation={o.label.rotation}
                labelId={o.id}
                selected={selected.has(o.id) && activeLabel === o.id}
              />
            </g>
          ) : null,
        )}
      </g>
      <g data-layer="annotations">
        {doc.objects.map((o) =>
          o.kind === 'arrow' ? (
            <ArrowView key={o.id} object={o} />
          ) : o.kind === 'loop-arrow' ? (
            <LoopArrowView key={o.id} object={o} />
          ) : o.kind === 'text' ? (
            <g
              key={o.id}
              data-object={o.id}
              className={`circuit-object${selected.has(o.id) ? ' selected-symbol' : ''}`}
            >
              <MathText
                text={o.text}
                x={o.x}
                y={o.y}
                color={o.color}
                fontSize={o.fontSize}
                align={o.align}
                rotation={o.rotation}
              />
            </g>
          ) : null,
        )}
      </g>
      <SelectionLayer doc={doc} selection={selection} zoom={zoom} />
    </>
  );
});
