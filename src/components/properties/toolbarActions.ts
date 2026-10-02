import { componentRegistry } from '../../model/catalog';
import type { CircuitObject } from '../../model/types';
/** Shared audit/mapping keeps properties specific to the selected object. */
export function toolbarActions(o: CircuitObject | null) {
  if (!o) return { primary: ['color', 'rotate', 'duplicate', 'delete'], secondary: [] };
  const common = ['duplicate', 'delete'];
  switch (o.kind) {
    case 'component':
      return {
        primary: ['label', 'textSize', 'labelColor', 'stroke', 'rotate', ...common],
        secondary: [
          'rotateLabel',
          'bodyColor',
          ...(componentRegistry[o.type].internalText !== undefined ? ['bodyText'] : []),
        ],
      };
    case 'junction':
      return {
        primary: ['label', 'color', ...common],
        secondary: ['textSize', 'labelColor', 'rotateLabel'],
      };
    case 'text':
      return { primary: ['text', 'textSize', 'color', ...common], secondary: ['alignment'] };
    case 'wire':
      return { primary: ['stroke', 'color', ...common], secondary: [] };
    case 'arrow':
      return { primary: ['stroke', 'color', 'reverse', ...common], secondary: ['arrowType'] };
    case 'loop-arrow':
      return { primary: ['stroke', 'color', 'reverse', ...common], secondary: [] };
  }
}
