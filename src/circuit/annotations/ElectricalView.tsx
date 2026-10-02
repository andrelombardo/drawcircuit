import type { CircuitDocument, ElectricalAnnotation } from '../../model/types';
import { electricalGeometry } from '../../annotations/electrical';
import { pointsPath } from '../../utils/geometry';
import { chevron } from '../../tikz/arrowheads';
import { MathText } from './MathText';
import { CIRCUIT_FONT } from '../../model/fonts';
export function ElectricalView({
  object: o,
  doc,
  selected = false,
}: {
  object: ElectricalAnnotation;
  doc: CircuitDocument;
  selected?: boolean;
}) {
  const g = electricalGeometry(o, doc);
  const head = chevron(g.arrowEnd, {
    x: g.arrowEnd.x - g.arrowStart.x,
    y: g.arrowEnd.y - g.arrowStart.y,
  });
  return (
    <g
      data-object={o.id}
      data-electrical={o.mode}
      className={`circuit-object${selected ? ' selected-symbol' : ''}`}
    >
      <path
        d={pointsPath([g.start, g.end])}
        stroke="transparent"
        strokeWidth={20}
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      {o.mode === 'polarity' ? (
        <>
          {[g.start, g.end].map((p, i) => (
            <text
              key={i}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily={CIRCUIT_FONT}
              fontSize={22}
              fill={o.color}
            >
              {(i === 0) !== o.reversed ? '+' : '−'}
            </text>
          ))}
        </>
      ) : (
        <g
          fill="none"
          stroke={o.color}
          strokeWidth={o.width}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={pointsPath([g.start, g.end])} />
          <path d={pointsPath(head)} />
        </g>
      )}
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
