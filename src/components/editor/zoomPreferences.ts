export const ZOOM_STORAGE_KEY = 'drawcircuit.zoom.v1';
const VIEW_STORAGE_KEY = 'drawcircuit.view.v1';
export const MIN_ZOOM = 0.15;
export const MAX_ZOOM = 4;
export const clampZoom = (zoom: number) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom));

export function readZoomPreference(): number | null {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(ZOOM_STORAGE_KEY) ?? 'null');
    return typeof value === 'number' && Number.isFinite(value) && value > 0
      ? clampZoom(value)
      : null;
  } catch {
    return null;
  }
}

export function saveZoomPreference(zoom: number) {
  try {
    localStorage.setItem(ZOOM_STORAGE_KEY, JSON.stringify(clampZoom(zoom)));
  } catch {
    // Zoom remains usable when storage is unavailable.
  }
}

export function readViewPreference(): { center: { x: number; y: number }; zoom: number } | null {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(VIEW_STORAGE_KEY) ?? 'null');
    if (!value || typeof value !== 'object' || !('center' in value) || !('zoom' in value)) return null;
    const { center, zoom } = value;
    if (!center || typeof center !== 'object' || !('x' in center) || !('y' in center) ||
        typeof center.x !== 'number' || !Number.isFinite(center.x) ||
        typeof center.y !== 'number' || !Number.isFinite(center.y) ||
        typeof zoom !== 'number' || !Number.isFinite(zoom) || zoom <= 0) return null;
    return { center: { x: center.x, y: center.y }, zoom: clampZoom(zoom) };
  } catch {
    return null;
  }
}

export function saveViewPreference(center: { x: number; y: number }, zoom: number) {
  try {
    localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify({ center, zoom: clampZoom(zoom) }));
  } catch {
    // The editor remains usable when storage is unavailable.
  }
}
