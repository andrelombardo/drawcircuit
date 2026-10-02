import { memo } from 'react';
import type { CircuitDocument } from '../../model/types';
import { bridgePaths, wireCrossings } from '../../utils/crossings';
export const WireBridges = memo(function WireBridges({ doc }: { doc: CircuitDocument }) {
  return (
    <g data-layer="crossings" pointerEvents="none">
      {wireCrossings(doc).map((c) => {
        const p = bridgePaths(c),
          w = Math.max(c.horizontal.width, c.vertical.width) + 4;
        return (
          <g
            key={`${c.x}:${c.y}`}
            data-wire-crossing="unconnected"
            data-over-wire={c.horizontal.id}
          >
            <path d={p.gap} fill="none" stroke="white" strokeWidth={w} />
            <path
              d={p.vertical}
              fill="none"
              stroke={c.vertical.color}
              strokeWidth={c.vertical.width}
            />
            <path d={p.arc} fill="none" stroke="white" strokeWidth={w} strokeLinecap="round" />
            <path
              d={p.arc}
              fill="none"
              stroke={c.horizontal.color}
              strokeWidth={c.horizontal.width}
              strokeLinecap="round"
            />
          </g>
        );
      })}
    </g>
  );
});
