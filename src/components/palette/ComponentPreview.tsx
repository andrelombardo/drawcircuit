import type { ComponentDefinition } from '../../model/catalog';
import { Symbol } from '../../circuit/components/Symbol';
/** The palette and replacement picker share the registry's live symbol renderer. */
export function ComponentPreview({ component: c }: { component: ComponentDefinition }) {
  return (
    <svg
      viewBox={`${c.bounds.x - 4} ${c.bounds.y - 4} ${c.bounds.width + 8} ${c.bounds.height + 8}`}
      width={52}
      height={38}
      aria-hidden="true"
    >
      <Symbol type={c.type} width={2.4} bodyText={c.internalText} />
    </svg>
  );
}
