export interface Point {
  x: number;
  y: number;
}
export type Rotation = 0 | 90 | 180 | 270;
export const componentTypes = [
  'resistor',
  'capacitor',
  'polarizedCapacitor',
  'inductor',
  'variableResistor',
  'potentiometer',
  'voltageSource',
  'currentSource',
  'battery',
  'dependentVoltage',
  'dependentCurrent',
  'diode',
  'led',
  'zener',
  'openSwitch',
  'closedSwitch',
  'ground',
  'ammeter',
  'voltmeter',
  'transformer',
  'blackBox',
  'thermistor',
  'photoresistor',
  'variableCapacitor',
  'variableInductor',
  'acVoltageSource',
  'acCurrentSource',
  'genericVoltageSource',
  'genericCurrentSource',
  'singleCellBattery',
  'photodiode',
  'schottky',
  'varactor',
  'npn',
  'pnp',
  'nmos',
  'pmos',
  'njfet',
  'pjfet',
  'spdt',
  'pushButtonNO',
  'pushButtonNC',
  'dpst',
  'dpdt',
  'ohmmeter',
  'galvanometer',
  'signalGround',
  'chassisGround',
  'centerTapTransformer',
  'coupledInductors',
  'opAmp',
  'comparator',
  'andGate',
  'orGate',
  'notGate',
  'nandGate',
  'norGate',
  'xorGate',
  'xnorGate',
  'buffer',
  'terminal',
  'testPoint',
  'connector2',
  'connector3',
  'port',
  'fuse',
  'lamp',
  'motor',
  'speaker',
  'buzzer',
  'circleBlock',
  'americanResistor',
] as const;
export type ComponentType = (typeof componentTypes)[number];
export interface Terminal {
  id: string;
  localX: number;
  localY: number;
  name?: string;
  direction?: 'x' | 'y';
}
export interface Label {
  text: string;
  offset: Point;
  color: string;
  fontSize: number;
  rotation: Rotation;
}
export interface CircuitComponent {
  kind: 'component';
  id: string;
  type: ComponentType;
  x: number;
  y: number;
  rotation: Rotation;
  terminals: Terminal[];
  label: Label;
  bodyText?: string;
  color: string;
  width: number;
}
export interface Junction {
  kind: 'junction';
  id: string;
  x: number;
  y: number;
  label: Label;
  color: string;
}
export type Endpoint =
  | { kind: 'terminal'; componentId: string; terminalId: string }
  | { kind: 'junction'; junctionId: string }
  | { kind: 'free'; point: Point };
export interface Wire {
  kind: 'wire';
  id: string;
  startEndpoint: Endpoint;
  endEndpoint: Endpoint;
  vertices: Point[];
  color: string;
  width: number;
}
export interface TextAnnotation {
  kind: 'text';
  id: string;
  x: number;
  y: number;
  text: string;
  color: string;
  fontSize: number;
  align: 'start' | 'middle' | 'end';
  rotation: Rotation;
}
export interface ArrowAnnotation {
  kind: 'arrow';
  id: string;
  type: 'straight' | 'curve' | 'arc';
  start: Point;
  end: Point;
  controlPoints: [Point, Point];
  color: string;
  width: number;
  reversed: boolean;
}
export interface LoopArrow {
  kind: 'loop-arrow';
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  direction: 'clockwise' | 'counterclockwise';
  /** Normalized ellipse parameter: top=0, right=.25, bottom=.5, left=.75. */
  arrowPosition: number;
  color: string;
  strokeWidth: number;
}
export type CircuitObject =
  CircuitComponent | Junction | Wire | TextAnnotation | ArrowAnnotation | LoopArrow;
export interface CircuitDocument {
  version: 1;
  title: string;
  objects: CircuitObject[];
}
export type Tool =
  | 'select'
  | 'wire'
  | 'junction'
  | 'text'
  | 'arrow'
  | 'loop-arrow'
  | 'pan'
  | 'preset'
  | ComponentType;
export interface Viewport {
  x: number;
  y: number;
  zoom: number;
}
export const COLORS = {
  ink: '#171a20',
  blue: '#2463cb',
  red: '#df4949',
  green: '#269978',
  purple: '#8855c2',
};
export const GRID = 20;
