type Rect = { left: number; right: number; top: number; bottom: number };

/** Menu coordinates are viewport pixels, independent from the circuit's zoom. */
export function actionMenuPosition(
  anchor: Rect,
  size: { width: number; height: number },
  viewport: { width: number; height: number },
  nested = false,
) {
  const margin = 8;
  const gap = 6;
  const clamp = (value: number, maximum: number) => Math.max(margin, Math.min(maximum, value));
  let left = anchor.left;
  let top = anchor.bottom + gap;
  let side: 'left' | 'right' | 'above' | 'below' = 'below';
  if (nested) {
    const rightSpace = viewport.width - anchor.right - gap - margin;
    const leftSpace = anchor.left - gap - margin;
    side = rightSpace >= size.width || rightSpace >= leftSpace ? 'right' : 'left';
    left = side === 'right' ? anchor.right + gap : anchor.left - gap - size.width;
    top = anchor.top - 4;
  } else if (top + size.height > viewport.height - margin && anchor.top - gap >= size.height) {
    top = anchor.top - gap - size.height;
    side = 'above';
  }
  return {
    left: clamp(left, viewport.width - size.width - margin),
    top: clamp(top, viewport.height - size.height - margin),
    side,
  };
}
