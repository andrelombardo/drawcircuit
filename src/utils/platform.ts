export const isMac = () => /Mac|iPhone|iPad/.test(navigator.platform);
export const isStandalone = () =>
  window.matchMedia?.('(display-mode: standalone)').matches === true ||
  ('standalone' in navigator && navigator.standalone === true);
