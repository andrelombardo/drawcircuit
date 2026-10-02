import { useEffect, useRef } from 'react';
import type { RefObject } from 'react';

export function useDialogFocus<T extends HTMLElement>(
  ref: RefObject<T | null>,
  onClose: () => void,
  open = true,
) {
  const close = useRef(onClose);
  useEffect(() => {
    close.current = onClose;
  }, [onClose]);
  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;
    const previous = document.activeElement;
    const controls = () =>
      Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'button, a[href], input, select, textarea, [tabindex]',
        ),
      ).filter(
        (element) => element.tabIndex >= 0 && !element.matches(':disabled') && !element.hidden,
      );
    controls()[0]?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close.current();
      } else if (event.key === 'Tab') {
        const elements = controls(),
          first = elements[0],
          last = elements.at(-1);
        if (!first) {
          event.preventDefault();
          return;
        }
        if (
          !dialog.contains(document.activeElement) ||
          (event.shiftKey && document.activeElement === first) ||
          (!event.shiftKey && document.activeElement === last)
        ) {
          event.preventDefault();
          (event.shiftKey ? last : first)?.focus();
        }
      }
    };
    window.addEventListener('keydown', keydown);
    return () => {
      window.removeEventListener('keydown', keydown);
      if (previous instanceof HTMLElement && previous.isConnected) previous.focus();
    };
  }, [open, ref]);
}
