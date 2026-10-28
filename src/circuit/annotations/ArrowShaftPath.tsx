import { useId } from 'react';
import type { SVGProps } from 'react';
import type { ArrowAnnotation, CircuitDocument, LineAnnotation, LoopArrow } from '../../model/types';
import { arrowShaftClipPath } from '../../tikz/arrowheads';

export function ArrowShaftPath({ object, doc, ...props }: SVGProps<SVGPathElement> & {
  object: ArrowAnnotation | LoopArrow | LineAnnotation;
  doc?: CircuitDocument;
}) {
  const id = useId();
  const clip = arrowShaftClipPath(object, doc);
  return <>
    {clip && <defs><clipPath id={id}><path d={clip} clipRule="evenodd" /></clipPath></defs>}
    <path {...props} clipPath={clip ? `url(#${id})` : undefined} />
  </>;
}
