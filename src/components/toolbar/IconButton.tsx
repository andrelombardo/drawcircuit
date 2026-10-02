import type { ButtonHTMLAttributes, ReactNode } from 'react';
export function IconButton({
  label,
  children,
  active = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`icon-button${active ? ' active' : ''}`}
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
