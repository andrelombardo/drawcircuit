import type { Endpoint, Point, Rotation, Wire } from '../model/types';

export interface ConnectionTarget {
  key: string;
  kind: 'junction' | 'terminal';
  point: Point;
  endpoint: Endpoint;
  connected: boolean;
}
export interface WireSegment {
  key: string;
  wire: Wire;
  points: Point[];
  segment: number;
  a: Point;
  b: Point;
}
export type SnapCandidate = {
  key: string;
  terminalId: string;
  point: Point;
  distance: number;
} & (
  | { kind: 'terminal' | 'junction'; target: ConnectionTarget }
  | { kind: 'wire'; segment: WireSegment }
);
export interface InlineCandidate {
  segment: WireSegment;
  position: Point;
  rotation: Rotation;
  cuts: [Point, Point];
  terminalIds: [string, string];
}
export type PlacementSession =
  | { kind: 'free' | 'inline'; terminalId: string | null; manualRotation: boolean }
  | {
      kind: 'anchored';
      target: ConnectionTarget;
      terminalId: string | null;
      manualRotation: boolean;
    };
interface PreviewBase {
  position: Point;
  rotation: Rotation;
  guides: { start: Point; end: Point }[];
}
export type PlacementPreview = PreviewBase &
  (
    | { phase: 'free' }
    | { phase: 'anchor-target'; target: ConnectionTarget }
    | { phase: 'snapped'; candidate: SnapCandidate }
    | { phase: 'anchored'; target: ConnectionTarget; terminalId: string }
    | { phase: 'inline-candidate'; candidate: InlineCandidate }
  );
export const freeSession = (): PlacementSession => ({
  kind: 'free',
  terminalId: null,
  manualRotation: false,
});
