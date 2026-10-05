import { useEffect, useState } from 'react';

/** Pointerdown is prevented during SVG gestures, so browser focus-visible
 * heuristics can retain keyboard modality from the previously focused input. */
export function useCanvasFocus() {
  const [modality, setModality] = useState<'pointer' | 'keyboard'>('pointer');
  useEffect(() => {
    const pointer = () => setModality('pointer');
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === 'Tab') setModality('keyboard');
    };
    document.addEventListener('pointerdown', pointer, true);
    document.addEventListener('keydown', keyboard, true);
    return () => {
      document.removeEventListener('pointerdown', pointer, true);
      document.removeEventListener('keydown', keyboard, true);
    };
  }, []);
  return modality;
}
