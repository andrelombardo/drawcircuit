import { describe, expect, it } from 'vitest';
import { createComponent } from '../src/model/catalog';
import { emptyDocument } from '../src/model/demo';
import { createWire } from '../src/model/factories';
import { compatibleReplacements, replaceComponent } from '../src/model/replacement';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import type { CircuitComponent, Rotation, Wire } from '../src/model/types';
import { resolveEndpoint, wirePoints } from '../src/utils/geometry';

describe('component replacement supports valid legacy terminal metadata', () => {
  it.each([0, 90, 180, 270] as Rotation[])(
    'keeps compatible two-terminal replacements and wire geometry at rotation %i',
    (rotation) => {
      const component = createComponent('resistor', { x: 160, y: 240 }, 1);
      component.rotation = rotation;
      component.label.offset = { x: 12, y: 37 };
      for (const terminal of component.terminals) delete terminal.direction;
      const wires = component.terminals.map((terminal, i) =>
        createWire(
          { kind: 'terminal', componentId: component.id, terminalId: terminal.id },
          { kind: 'free', point: { x: i ? 400 : -120, y: 240 } },
        ),
      );
      const original = deserializeDocument(
        serializeDocument({ ...emptyDocument(), objects: [component, ...wires] }),
      );
      const restored = original.objects[0] as CircuitComponent;
      expect(compatibleReplacements(restored)).toContain('capacitor');
      expect(compatibleReplacements(restored)).toContain('inductor');
      expect(compatibleReplacements(restored)).not.toContain('opAmp');
      const replaced = replaceComponent(original, component.id, 'capacitor');
      expect(replaced.objects[0]).toMatchObject({
        id: component.id,
        type: 'capacitor',
        x: component.x,
        y: component.y,
        rotation,
        label: component.label,
      });
      for (const wire of wires) {
        const after = replaced.objects.find((o) => o.id === wire.id) as Wire;
        expect(resolveEndpoint(after.startEndpoint, replaced)).toEqual(
          resolveEndpoint(wire.startEndpoint, original),
        );
        expect(wirePoints(after, replaced)).toEqual(wirePoints(wire, original));
      }
      expect(deserializeDocument(serializeDocument(replaced))).toEqual(replaced);
    },
  );
});
