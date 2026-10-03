// @vitest-environment jsdom
import { afterEach, expect, it } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { DocumentTitle } from '../src/components/editor/DocumentTitle';
import { useEditorStore } from '../src/store/editorStore';
import { emptyDocument } from '../src/model/demo';

afterEach(cleanup);
it('Escape cancels the title and releases focus so subsequent typing cannot silently commit a hidden draft', () => {
  useEditorStore.setState({ document: emptyDocument(), past: [], future: [] });
  render(<DocumentTitle />);
  const input = screen.getByRole('textbox', { name: 'Titolo circuito' }) as HTMLInputElement;
  input.focus();
  fireEvent.change(input, { target: { value: 'Discard this draft' } });
  fireEvent.keyDown(input, { key: 'Escape' });
  expect(document.activeElement).not.toBe(input);
  expect(useEditorStore.getState().document.title).toBe(emptyDocument().title);
  expect(useEditorStore.getState().past).toHaveLength(0);
  input.focus();
  fireEvent.change(input, { target: { value: 'New visible draft' } });
  expect(input.value).toBe('New visible draft');
  fireEvent.keyDown(input, { key: 'Enter' });
  expect(useEditorStore.getState().document.title).toBe('New visible draft');
  expect(useEditorStore.getState().past).toHaveLength(1);
  useEditorStore.getState().undo();
  expect(useEditorStore.getState().document.title).toBe(emptyDocument().title);
});
