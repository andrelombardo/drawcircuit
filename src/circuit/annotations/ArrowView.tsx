import { memo } from 'react';
import type { ArrowAnnotation } from '../../model/types';
import { arrowPath } from '../../utils/geometry';
import { arrowHeadStyle, canvasArrowHeadPath } from '../../tikz/arrowheads';
import { ArrowShaftPath } from './ArrowShaftPath';
export const ArrowView = memo(function ArrowView({
  object: o,
  zoom = 1,
}: {
  object: ArrowAnnotation;
  zoom?: number;
}) {
  return (
    <g data-object={o.id} className="circuit-object">
      <path
        d={arrowPath(o)}
        stroke="transparent"
        strokeWidth={Math.min(18, 20 * zoom)}
        vectorEffect="non-scaling-stroke"
        fill="none"
      />
      <g
        opacity={o.opacity}
        stroke={o.color}
        strokeWidth={o.width}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ArrowShaftPath object={o} d={arrowPath(o)} />
        <path d={canvasArrowHeadPath(o)} fill={arrowHeadStyle(o) === 'filled' ? o.color : 'none'} />
      </g>
    </g>
  );
});
