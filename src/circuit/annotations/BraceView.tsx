import type { BraceAnnotation } from '../../model/types';
import { braceGeometry } from '../../annotations/brace';
import { MathText } from './MathText';

export function BraceView({ object: o, zoom }: { object: BraceAnnotation; zoom: number }) {
  const g = braceGeometry(o);
  return (
    <g data-object={o.id} className="circuit-object">
      <path d={g.d} fill="none" stroke="transparent" strokeWidth={14 / zoom} />
      <path
        d={g.d}
        fill="none"
        stroke={o.color}
        strokeWidth={o.width}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <MathText
        text={o.label.text}
        x={g.labelPoint.x}
        y={g.labelPoint.y}
        color={o.label.color}
        fontSize={o.label.fontSize}
        rotation={o.label.rotation}
        labelId={o.id}
      />
    </g>
  );
}
