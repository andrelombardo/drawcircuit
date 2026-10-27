import { electricalDrawingGeometry } from '../../annotations/electrical';
import type { CircuitDocument, CircuitObject } from '../../model/types';
import { rotatePoint } from '../../utils/geometry';
import { canResizeCircuit, circuitSelectionBounds } from '../../utils/resizeCircuit';
import { contentBounds, unionBounds } from '../../utils/visualBounds';

function selectionBounds(object: CircuitObject, doc: CircuitDocument) {
  if (object.kind !== 'electrical' || object.mode !== 'current') return contentBounds(object, doc);
  const g = electricalDrawingGeometry(object, doc);
  const boxes = [g.start, g.end, ...g.head].map((point) => ({
    x: point.x - g.strokeWidth / 2,
    y: point.y - g.strokeWidth / 2,
    width: g.strokeWidth,
    height: g.strokeWidth,
  }));
  if (object.label.text) {
    const width = Math.max(g.labelFontSize, object.label.text.length * g.labelFontSize * 0.65);
    const height = g.labelFontSize * Math.max(1.6, object.label.text.split('\n').length * 1.4);
    for (const x of [-width / 2, width / 2])
      for (const y of [-height / 2, height / 2]) {
        const point = rotatePoint({ x, y }, object.label.rotation);
        boxes.push({
          x: g.labelPoint.x + point.x,
          y: g.labelPoint.y + point.y,
          width: 0,
          height: 0,
        });
      }
  }
  return unionBounds(boxes);
}
export function selectionGroupBounds(doc: CircuitDocument, selection: string[]) {
  if (canResizeCircuit(doc, selection)) return circuitSelectionBounds(doc, selection);
  const selected = new Set(selection);
  return unionBounds(doc.objects.filter((object) => selected.has(object.id)).map((object) => selectionBounds(object, doc)));
}
