import { fireEvent, screen } from '@testing-library/react';

/** Follow the same progressive-disclosure path as a pointer user. */
export function chooseDrawingTool(label: string, child?: string) {
  fireEvent.click(screen.getByRole('button', { name: 'Disegno e annotazioni' }));
  fireEvent.click(screen.getByRole('menuitem', { name: label }));
  if (child) fireEvent.click(screen.getByRole('menuitem', { name: child }));
}
