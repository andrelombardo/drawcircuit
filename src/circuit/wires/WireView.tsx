import { memo } from 'react';
import type { Point, Wire } from '../../model/types';
import { pointsPath } from '../../utils/geometry';
export const WireView = memo(
  function WireView({ object: o, points }: { object: Wire; points: Point[] }) {
    const d = pointsPath(points);
    return (
      <g data-object={o.id} className="circuit-object">
        <path
          d={d}
          fill="none"
          stroke="transparent"
          strokeWidth={16}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={d}
          fill="none"
          stroke={o.color}
          strokeWidth={o.width}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    );
  },
  (previous, next) => {
    // Resolve every connection, but only redraw wires whose geometry or style changed.
    return (
      previous.object === next.object &&
      previous.points.length === next.points.length &&
      previous.points.every(
        (point, index) => point.x === next.points[index].x && point.y === next.points[index].y,
      )
    );
  },
);
