import { usePersonalBlocks, instantiatePersonalBlock } from '../personalBlocks/library';
import { useMemo } from 'react';
import { useEditorStore } from '../store/editorStore';
import { CircuitLayer } from '../components/editor/CircuitLayer';
import { documentBounds } from '../utils/geometry';
import { instantiatePreset } from './instantiate';
import { presetRegistry } from './registry';
import type { Point } from '../model/types';

export function PresetPlacementLayer({ point, zoom }: { point: Point | null; zoom: number }) {
  const id = useEditorStore((s) => (s.tool === 'preset' ? s.pendingPresetId : null));
  const rotation = useEditorStore((s) => s.placementRotation),
    existing = useEditorStore((s) => s.document);
  const blocks = usePersonalBlocks((s) => s.blocks);
  const personal = blocks.find((b) => b.id === id);
  const doc = useMemo(
    () =>
      personal
        ? {
            version: 1 as const,
            title: '',
            objects: instantiatePersonalBlock(personal, { x: 0, y: 0 }, rotation, existing),
          }
        : id && presetRegistry[id]
          ? {
              version: 1 as const,
              title: '',
              objects: instantiatePreset(presetRegistry[id], { x: 0, y: 0 }, rotation, existing),
            }
          : null,
    [id, rotation, existing, personal],
  );
  if (!point || !doc) return null;
  const bounds = documentBounds(doc);
  return (
    <g
      className="preset-ghost"
      data-preset-preview={id}
      data-preset-rotation={rotation}
      transform={`translate(${point.x} ${point.y})`}
      pointerEvents="none"
    >
      <rect
        {...bounds}
        rx={8 / zoom}
        fill="#2463cb"
        fillOpacity={0.035}
        stroke="#2463cb"
        strokeWidth={1 / zoom}
        strokeDasharray={`${4 / zoom} ${4 / zoom}`}
      />
      <g opacity={0.55}>
        <CircuitLayer doc={doc} selection={[]} terminals={false} zoom={zoom} />
      </g>
    </g>
  );
}
