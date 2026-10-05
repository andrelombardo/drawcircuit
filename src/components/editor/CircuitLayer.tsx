import { BraceView } from '../../circuit/annotations/BraceView';
import { WireBridges } from '../../circuit/wires/WireBridges';
import { ElectricalView } from '../../circuit/annotations/ElectricalView';
import { currentWireGaps, wireDrawingPaths } from '../../annotations/electrical';
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
  nearbyComponents = [],
  zoom,
  activeLabel = null,
  editingTextId,
  editingLabelId,
}: {
  doc: CircuitDocument;
  selection: string[];
  terminals: boolean;
  nearbyComponents?: string[];
  zoom: number;
  activeLabel?: string | null;
  editingTextId?: string;
  editingLabelId?: string;
}) {
  const selected = useMemo(() => new Set(selection), [selection]);
  const nearby = useMemo(() => new Set(nearbyComponents), [nearbyComponents]);
  const currentGaps = useMemo(() => currentWireGaps(doc), [doc]);
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
          <WireView
            key={object.id}
            object={object}
            points={points}
            paths={wireDrawingPaths(points, currentGaps.get(object.id))}
          />
        ))}
      </g>
      <WireBridges doc={doc} />
      <g data-layer="components">
        {doc.objects.map((o) =>
          o.kind === 'component' ? (
            <ComponentView
              key={o.id}
              object={o}
              selected={selected.has(o.id) && activeLabel !== o.id}
              terminals={terminals || selected.has(o.id) || nearby.has(o.id)}
            />
          ) : null,
        )}
      </g>
      <g data-layer="junctions">
        {doc.objects.map((o) =>
          o.kind === 'junction' ? (
            <JunctionView
              key={o.id}
              object={o}
              selected={selected.has(o.id) && activeLabel !== o.id}
            />
          ) : null,
        )}
      </g>
      <g data-layer="labels">
        {doc.objects.map((o) =>
          (o.kind === 'component' || o.kind === 'junction') && o.id !== editingLabelId ? (
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
          o.kind === 'brace' ? (
            <BraceView
              key={o.id}
              object={o}
              zoom={zoom}
              labelSelected={selected.has(o.id) && activeLabel === o.id}
              hideLabel={o.id === editingLabelId}
            />
          ) : o.kind === 'electrical' ? (
            <ElectricalView
              key={o.id}
              object={o}
              doc={doc}
              selected={selected.has(o.id) && activeLabel !== o.id}
              labelSelected={selected.has(o.id) && activeLabel === o.id}
              hideLabel={o.id === editingLabelId}
              zoom={zoom}
            />
          ) : o.kind === 'arrow' ? (
            <ArrowView key={o.id} object={o} zoom={zoom} />
          ) : o.kind === 'loop-arrow' ? (
            <LoopArrowView key={o.id} object={o} zoom={zoom} />
          ) : o.kind === 'text' && o.id !== editingTextId ? (
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
      <SelectionLayer
        doc={doc}
        selection={selection.filter((id) => id !== activeLabel)}
        zoom={zoom}
      />
    </>
  );
});
