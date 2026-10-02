import { componentRegistry, terminalsFor } from './catalog';
import type { CircuitComponent, CircuitDocument, ComponentType } from './types';
export function compatibleReplacements(c: CircuitComponent): ComponentType[] {
  const pairs: ComponentType[][] = [
    ['npn', 'pnp'],
    ['nmos', 'pmos'],
    ['njfet', 'pjfet'],
    ['opAmp', 'comparator'],
  ];
  const group = pairs.find((types) => types.includes(c.type));
  const originalPins = componentRegistry[c.type].terminals;
  return Object.keys(componentRegistry).filter((type): type is ComponentType => {
    if (type === c.type) return false;
    if (group) return group.includes(type as ComponentType);
    const pins = componentRegistry[type as ComponentType].terminals;
    return (
      c.terminals.length === 2 &&
      pins.length === 2 &&
      pins.every(
        (t, i) =>
          t.localX === c.terminals[i].localX &&
          t.localY === c.terminals[i].localY &&
          t.direction === (c.terminals[i].direction ?? originalPins[i]?.direction),
      )
    );
  });
}
export function replaceComponent(
  doc: CircuitDocument,
  id: string,
  type: ComponentType,
): CircuitDocument {
  const old = doc.objects.find((o) => o.id === id);
  if (old?.kind !== 'component' || !compatibleReplacements(old).includes(type))
    throw new Error('Sostituzione incompatibile.');
  const pins = terminalsFor(type);
  const mapping = new Map(old.terminals.map((t, i) => [t.id, pins[i].id]));
  const component: CircuitComponent = { ...old, type, terminals: pins };
  // Labels have no explicit provenance: preserve them rather than guessing.
  if (componentRegistry[type].internalText === undefined) delete component.bodyText;
  else component.bodyText = old.bodyText ?? componentRegistry[type].internalText;
  return {
    ...doc,
    objects: doc.objects.map((o) =>
      o.id === id
        ? component
        : o.kind === 'wire'
          ? {
              ...o,
              startEndpoint:
                o.startEndpoint.kind === 'terminal' && o.startEndpoint.componentId === id
                  ? { ...o.startEndpoint, terminalId: mapping.get(o.startEndpoint.terminalId)! }
                  : o.startEndpoint,
              endEndpoint:
                o.endEndpoint.kind === 'terminal' && o.endEndpoint.componentId === id
                  ? { ...o.endEndpoint, terminalId: mapping.get(o.endEndpoint.terminalId)! }
                  : o.endEndpoint,
            }
          : o,
    ),
  };
}
