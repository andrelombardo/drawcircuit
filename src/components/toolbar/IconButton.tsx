import type { ButtonHTMLAttributes, ReactNode } from 'react';
export function IconButton({
  label,
  children,
  active = false,
  className = '',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`icon-button${active ? ' active' : ''}${className ? ` ${className}` : ''}`}
      aria-label={label}
      title={label}
      data-tooltip={label}
      aria-pressed={active}
      {...props}
    >
      {children}
    </button>
  );
}
