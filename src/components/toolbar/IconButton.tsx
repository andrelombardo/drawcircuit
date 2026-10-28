import type { ButtonHTMLAttributes, ReactNode } from 'react';
export function IconButton({
  label,
  children,
  active = false,
  className = '',
  shortcut,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
  active?: boolean;
  shortcut?: string;
}) {
  return (
    <button
      type="button"
      className={`icon-button${active ? ' active' : ''}${className ? ` ${className}` : ''}`}
      aria-label={label}
      title={label}
      data-tooltip={label}
      aria-pressed={active}
      aria-keyshortcuts={shortcut}
      {...props}
    >
      {children}
      {shortcut && <kbd className="toolbar-shortcut" aria-hidden="true">{shortcut}</kbd>}
    </button>
  );
}
