import type { DistanceGuide } from '../../utils/smartGuides';
export function DistanceGuideLayer({ guides, zoom }: { guides: DistanceGuide[]; zoom: number }) {
  return (
    <g data-layer="distance-guides" pointerEvents="none" aria-hidden="true">
      {guides.map((g, i) => {
        const horizontal = g.axis === 'x',
          mid = (g.from + g.to) / 2,
          tick = 4 / zoom;
        const value =
          Math.abs(g.value - Math.round(g.value)) < 0.01
            ? String(Math.round(g.value))
            : g.value.toFixed(1);
        return (
          <g
            key={i}
            className={`distance-guide${g.equal ? ' equal-spacing' : ''}`}
            data-axis={g.axis}
            data-distance={value}
            data-equal={g.equal || undefined}
          >
            <path
              strokeWidth={1 / zoom}
              d={
                horizontal
                  ? `M${g.from} ${g.at}H${g.to}M${g.from} ${g.at - tick}V${g.at + tick}M${g.to} ${g.at - tick}V${g.at + tick}`
                  : `M${g.at} ${g.from}V${g.to}M${g.at - tick} ${g.from}H${g.at + tick}M${g.at - tick} ${g.to}H${g.at + tick}`
              }
            />
            <text
              x={horizontal ? mid : g.at}
              y={horizontal ? g.at : mid}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize={11 / zoom}
              strokeWidth={6 / zoom}
            >
              {value}
              {g.equal ? ' =' : ''}
            </text>
          </g>
        );
      })}
    </g>
  );
}
