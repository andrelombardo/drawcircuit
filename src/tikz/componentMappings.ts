import { catalog } from '../model/catalog';
import type { ComponentType } from '../model/types';
// Derived compatibility view; the registry owns all native/fallback strategies.
// Native names are checked against https://rmano.github.io/circuitikz/node-The-components-list.html.
export const componentMappings = Object.fromEntries(
  catalog.map((definition) => [
    definition.type,
    definition.tikz.kind === 'geometry' ? null : definition.tikz.symbol,
  ]),
) as Record<ComponentType, string | null>;
