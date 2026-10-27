export const isMac = () => /Mac|iPhone|iPad/.test(navigator.platform);
/** One platform-specific shortcut label for menus, tooltips and help. */
export const shortcut = (key: string, shift = false) =>
  isMac() ? `⌘${shift ? '⇧' : ''}${key}` : `Ctrl+${shift ? 'Shift+' : ''}${key}`;
