import { componentRegistry } from './catalog';
import type { CircuitComponent, CircuitObject } from './types';

/** Polarity belongs to a bipole's two electrical terminals. Logical input/output
 * and independent connector pins are not a voltage pair merely because there are two. */
export function supportsPolarity(object: CircuitObject): object is CircuitComponent {
  if (object.kind !== 'component' || object.terminals.length !== 2) return false;
  const terminals = componentRegistry[object.type].terminals;
  return (
    terminals.length === 2 &&
    terminals.some((terminal) => terminal.id === 'a') &&
    terminals.some((terminal) => terminal.id === 'b') &&
    terminals.every((terminal) => object.terminals.some((actual) => actual.id === terminal.id))
  );
}
