import type { LoopArrow, Point } from '../model/types';
export const LOOP_SWEEP = 324;
export const wrapPosition = (p: number) => ((p % 1) + 1) % 1;
export function loopGeometry(o: LoopArrow) {
  const endAngle = o.arrowPosition * 360 - 90;
  const sign = o.direction === 'clockwise' ? 1 : -1;
  const startAngle = endAngle - sign * LOOP_SWEEP;
  const point = (angle: number) => ({
    x: o.x + o.width / 2 + (o.width / 2) * Math.cos((angle * Math.PI) / 180),
    y: o.y + o.height / 2 + (o.height / 2) * Math.sin((angle * Math.PI) / 180),
  });
  return { startAngle, endAngle, start: point(startAngle), end: point(endAngle), sign };
}
export function loopPath(o: LoopArrow) {
  const g = loopGeometry(o);
  return `M ${g.start.x} ${g.start.y} A ${o.width / 2} ${o.height / 2} 0 1 ${g.sign === 1 ? 1 : 0} ${g.end.x} ${g.end.y}`;
}
export function loopPositionAt(o: LoopArrow, p: Point) {
  return wrapPosition(
    (Math.atan2(
      (p.y - o.y - o.height / 2) / (o.height / 2),
      (p.x - o.x - o.width / 2) / (o.width / 2),
    ) +
      Math.PI / 2) /
      (2 * Math.PI),
  );
}
export function reverseLoop(o: LoopArrow): LoopArrow {
  return {
    ...o,
    direction: o.direction === 'clockwise' ? 'counterclockwise' : 'clockwise',
    arrowPosition: wrapPosition((loopGeometry(o).startAngle + 90) / 360),
  };
}
