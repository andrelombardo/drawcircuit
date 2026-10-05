import type { CircuitDocument, ElectricalAnnotation } from '../../model/types';
import { electricalDrawingGeometry } from '../../annotations/electrical';
import { pointsPath } from '../../utils/geometry';
import { MathText } from './MathText';
import { CIRCUIT_FONT } from '../../model/fonts';
export function ElectricalView({
  object: o,
  doc,
  selected = false,
  labelSelected = false,
  hideLabel = false,
  zoom = 1,
}: {
  object: ElectricalAnnotation;
  doc: CircuitDocument;
  selected?: boolean;
  labelSelected?: boolean;
  hideLabel?: boolean;
  zoom?: number;
}) {
  const g = electricalDrawingGeometry(o, doc, zoom);
  // A fixed screen hit corridor covers nearby objects when zoomed out.
  // Cap it in world space while preserving the normal screen hit allowance.
  const hitWidth = Math.min(20, 20 * zoom);
  return (
    <g
      data-object={o.id}
      data-electrical={o.mode}
      data-current-placement={o.mode === 'current' ? (o.currentPlacement ?? 'external') : undefined}
      data-current-fallback={g.fallback || undefined}
      className={`circuit-object${selected ? ' selected-symbol' : ''}`}
    >
      {g.mask && (
        <path
          data-current-mask="true"
          d={pointsPath([g.mask.start, g.mask.end])}
          stroke="white"
          strokeWidth={g.mask.width}
          strokeLinecap="butt"
          fill="none"
          pointerEvents="none"
        />
      )}
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
          strokeWidth={g.strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={pointsPath([g.start, g.end])} />
          <path d={pointsPath(g.head)} />
        </g>
      )}
      {!hideLabel && (
        <MathText
          text={o.label.text}
          x={g.labelPoint.x}
          y={g.labelPoint.y}
          color={o.label.color}
          fontSize={o.label.fontSize}
          rotation={o.label.rotation}
          labelId={o.id}
          selected={labelSelected}
        />
      )}
    </g>
  );
}
