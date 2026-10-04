export const ZOOM_STORAGE_KEY = 'drawcircuit.zoom.v1';
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
