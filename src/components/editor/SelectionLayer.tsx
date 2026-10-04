import { braceGeometry } from '../../annotations/brace';
import type { CircuitDocument, Point } from '../../model/types';
import { arrowPath, pointsPath, wirePoints } from '../../utils/geometry';
import { unionBounds, contentBounds } from '../../utils/visualBounds';
import { loopGeometry, loopPath } from '../../utils/loops';
function Handle({
  p,
  name,
  zoom,
  square = false,
}: {
  p: Point;
  name: string;
  zoom: number;
  square?: boolean;
}) {
  return (
    <g data-handle={name} className={`handle-hit handle-${name.split(':')[0]}`}>
      <circle cx={p.x} cy={p.y} r={11 / zoom} fill="transparent" />
      {square ? (
        <rect
          x={p.x - 4 / zoom}
          y={p.y - 4 / zoom}
          width={8 / zoom}
          height={8 / zoom}
          className="control-handle"
        />
      ) : (
        <circle cx={p.x} cy={p.y} r={5 / zoom} className="control-handle" />
      )}
    </g>
  );
}
export function SelectionLayer({
  doc,
  selection,
  zoom,
}: {
  doc: CircuitDocument;
  selection: string[];
  zoom: number;
}) {
  return (
    <g data-layer="selection">
      {selection.length > 1 && (
        <rect
          {...unionBounds(
            doc.objects.filter((o) => selection.includes(o.id)).map((o) => contentBounds(o, doc)),
          )}
          className="selection-box"
          data-selection="group"
          pointerEvents="none"
        />
      )}
      {doc.objects
        .filter((o) => selection.includes(o.id))
        .map((o) => {
          const path =
            o.kind === 'brace'
              ? braceGeometry(o).d
              : o.kind === 'wire'
                ? pointsPath(wirePoints(o, doc))
                : o.kind === 'arrow'
                  ? arrowPath(o)
                  : o.kind === 'loop-arrow'
                    ? loopPath(o)
                    : null;
          return (
            <g key={o.id} data-object={o.id}>
              {path ? (
                <path
                  d={path}
                  fill="none"
                  stroke="#6695ed"
                  opacity={0.2}
                  strokeWidth={7}
                  vectorEffect="non-scaling-stroke"
                  pointerEvents="none"
                />
              ) : null}
              {o.kind === 'wire' && (
                <>
                  {o.vertices.map((p, i) => (
                    <Handle key={i} p={p} name={`vertex:${i}`} zoom={zoom} square />
                  ))}
                  {[wirePoints(o, doc)[0], wirePoints(o, doc).at(-1)!].map((p, i) => (
                    <Handle key={i} p={p} name={i ? 'wireEnd' : 'wireStart'} zoom={zoom} />
                  ))}
                </>
              )}
              {(o.kind === 'arrow' || o.kind === 'brace') && (
                <>
                  {o.kind === 'arrow' && o.type === 'curve' && (
                    <>
                      <path
                        d={`M${o.start.x} ${o.start.y}L${o.controlPoints[0].x} ${o.controlPoints[0].y}M${o.end.x} ${o.end.y}L${o.controlPoints[1].x} ${o.controlPoints[1].y}`}
                        className="handle-line"
                        pointerEvents="none"
                      />
                      {o.controlPoints.map((p, i) => (
                        <Handle key={i} p={p} name={`control:${i}`} zoom={zoom} />
                      ))}
                    </>
                  )}
                  <Handle p={o.start} name="start" zoom={zoom} />
                  <Handle p={o.end} name="end" zoom={zoom} />
                </>
              )}
              {o.kind === 'loop-arrow' && (
                <>
                  <rect
                    x={o.x}
                    y={o.y}
                    width={o.width}
                    height={o.height}
                    className="handle-line"
                    fill="none"
                    pointerEvents="none"
                  />
                  <Handle p={o} name="loopNW" zoom={zoom} square />
                  <Handle
                    p={{ x: o.x + o.width, y: o.y + o.height }}
                    name="loopSE"
                    zoom={zoom}
                    square
                  />
                  <Handle p={loopGeometry(o).end} name="loopHead" zoom={zoom} />
                </>
              )}
            </g>
          );
        })}
    </g>
  );
}
