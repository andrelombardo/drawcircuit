import { useEffect, useRef, useState } from 'react';
import { PanelLeftOpen } from 'lucide-react';
import { Palette } from './Palette';

export const SIDEBAR_STORAGE_KEY = 'drawcircuit.sidebar.v1';
export const SIDEBAR_DEFAULT_WIDTH = 232;
export const SIDEBAR_MIN_WIDTH = 200;
export const SIDEBAR_MAX_WIDTH = 480;
const clampWidth = (width: number) =>
  Math.min(SIDEBAR_MAX_WIDTH, Math.max(SIDEBAR_MIN_WIDTH, width));
function initialPreferences(): { visible: boolean; width: number } {
  try {
    const saved: unknown = JSON.parse(localStorage.getItem(SIDEBAR_STORAGE_KEY) ?? 'null');
    if (
      saved &&
      typeof saved === 'object' &&
      'visible' in saved &&
      'width' in saved &&
      typeof saved.visible === 'boolean' &&
      typeof saved.width === 'number' &&
      Number.isFinite(saved.width)
    ) {
      return { visible: saved.visible, width: clampWidth(saved.width) };
    }
  } catch {
    /* Unavailable or malformed storage uses the same functional defaults. */
  }
  return { visible: true, width: SIDEBAR_DEFAULT_WIDTH };
}
export function ComponentSidebar() {
  const [preferences, setPreferences] = useState(initialPreferences);
  const shell = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; width: number; pointerId: number } | null>(null);
  useEffect(() => {
    try {
      localStorage.setItem(SIDEBAR_STORAGE_KEY, JSON.stringify(preferences));
    } catch {
      /* UI preferences remain usable for this session. */
    }
  }, [preferences]);
  const setWidth = (width: number) => setPreferences((p) => ({ ...p, width: clampWidth(width) }));
  return (
    <>
      <div
        ref={shell}
        className="component-sidebar"
        hidden={!preferences.visible}
        style={{ width: preferences.width }}
      >
        <Palette onHide={() => setPreferences((p) => ({ ...p, visible: false }))} />
        <div
          className="sidebar-resizer"
          role="separator"
          aria-label="Ridimensiona barra componenti"
          aria-orientation="vertical"
          tabIndex={0}
          aria-valuemin={SIDEBAR_MIN_WIDTH}
          aria-valuemax={SIDEBAR_MAX_WIDTH}
          aria-valuenow={preferences.width}
          title="Trascina per ridimensionare · doppio clic per ripristinare"
          onPointerDown={(e) => {
            if (e.button !== 0) return;
            e.preventDefault();
            e.currentTarget.setPointerCapture(e.pointerId);
            drag.current = {
              x: e.clientX,
              width: shell.current!.getBoundingClientRect().width,
              pointerId: e.pointerId,
            };
          }}
          onPointerMove={(e) => {
            if (!drag.current || drag.current.pointerId !== e.pointerId) return;
            const maximum = Math.max(
              SIDEBAR_MIN_WIDTH,
              Math.min(SIDEBAR_MAX_WIDTH, window.innerWidth * 0.45),
            );
            setWidth(Math.min(maximum, drag.current.width + e.clientX - drag.current.x));
          }}
          onPointerUp={(e) => {
            if (drag.current?.pointerId === e.pointerId) {
              drag.current = null;
              e.currentTarget.releasePointerCapture(e.pointerId);
            }
          }}
          onPointerCancel={() => {
            drag.current = null;
          }}
          onLostPointerCapture={() => {
            drag.current = null;
          }}
          onDoubleClick={() => setWidth(SIDEBAR_DEFAULT_WIDTH)}
          onKeyDown={(e) => {
            if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
              e.preventDefault();
              e.stopPropagation();
              setWidth(
                e.key === 'Home'
                  ? SIDEBAR_MIN_WIDTH
                  : e.key === 'End'
                    ? SIDEBAR_MAX_WIDTH
                    : preferences.width + (e.key === 'ArrowLeft' ? -10 : 10),
              );
            }
          }}
        />
      </div>
      {!preferences.visible && (
        <button
          className="sidebar-reopen"
          aria-label="Mostra componenti"
          title="Mostra componenti"
          data-tooltip="Mostra componenti"
          onClick={() => setPreferences((p) => ({ ...p, visible: true }))}
        >
          <PanelLeftOpen size={18} />
        </button>
      )}
    </>
  );
}
