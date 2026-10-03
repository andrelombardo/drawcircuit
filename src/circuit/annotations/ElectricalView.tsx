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
  zoom = 1,
}: {
  object: ElectricalAnnotation;
  doc: CircuitDocument;
  selected?: boolean;
  zoom?: number;
}) {
  const g = electricalGeometry(o, doc);
  const head = chevron(g.arrowEnd, {
    x: g.arrowEnd.x - g.arrowStart.x,
    y: g.arrowEnd.y - g.arrowStart.y,
  });
  // A fixed screen hit corridor covers nearby objects when zoomed out.
  // Cap it in world space while preserving the normal screen hit allowance.
  const hitWidth = Math.min(20, 20 * zoom);
  return (
    <g
      data-object={o.id}
      data-electrical={o.mode}
      className={`circuit-object${selected ? ' selected-symbol' : ''}`}
    >
      <path
        d={pointsPath([g.start, g.end])}
        stroke="transparent"
        strokeWidth={hitWidth}
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
