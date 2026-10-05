import { describe, expect, it } from 'vitest';
import { createCurrent, createElectrical } from '../src/annotations/electrical';
import { createWire } from '../src/model/factories';
import { inlineTextTarget } from '../src/utils/labels';
import type { CircuitDocument } from '../src/model/types';

describe('current inline editor follows the rendered screen-space label', () => {
  it.each(['inline', 'external'] as const)(
    '%s keeps the input anchor and font aligned at 50/100/200%%',
    (placement) => {
      const wire = createWire(
        { kind: 'free', point: { x: 0, y: 0 } },
        { kind: 'free', point: { x: 400, y: 0 } },
      );
      const source: CircuitDocument = { version: 1, title: 'Current label', objects: [wire] };
      const current = createCurrent(wire, { x: 200, y: 0 }, source, placement);
      current.label.offset = { x: 7, y: 9 };
      const doc: CircuitDocument = { ...source, objects: [wire, current] };
      for (const zoom of [0.5, 1, 2]) {
        const target = inlineTextTarget(current, doc, zoom)!;
        expect(target.fontSize * zoom).toBe(current.label.fontSize);
        expect(target.point.x).toBe(207);
        expect(target.point.y).toBeCloseTo((placement === 'inline' ? 24 : -40) / zoom + 9);
      }
      expect(inlineTextTarget(current, doc)).toEqual(inlineTextTarget(current, doc, 1));
    },
  );

  it('leaves voltage labels in document space', () => {
    const voltage = createElectrical('voltage', { x: 0, y: 0 }, { x: 100, y: 0 }, 'V_1');
    const doc: CircuitDocument = { version: 1, title: 'Voltage label', objects: [voltage] };
    expect(inlineTextTarget(voltage, doc, 0.5)).toEqual(inlineTextTarget(voltage, doc, 2));
  });
});
