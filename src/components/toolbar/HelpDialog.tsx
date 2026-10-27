import { t } from '../../i18n';
import { useRef } from 'react';
import { shortcut } from '../../utils/platform';
import { X } from 'lucide-react';
import { useDialogFocus } from './useDialogFocus';

export function HelpDialog({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLElement>(null);
  useDialogFocus(dialog, onClose);
  const shortcuts = [
    ['V · Esc', t('Select / cancel wire')],
    ['W · N', t('Wire / junction')],
    ['A · L', t('Arrow / loop')],
    ['R', t('Rotate component by 45° · brace/bracket by 90°')],
    ['Enter', t('Edit name or label')],
    [t('Space + drag'), t('Pan the sheet')],
    [t('Mouse wheel / trackpad'), 'Zoom'],
    [t('Shift + click'), t('Multiple selection')],
    [t('Alt/Option + click'), t('Cycle overlapping objects and labels')],
    ['↑ ↓ ← →', t('Nudge (1 unit)')],
    ['Shift + ↑↓←→', t('Larger nudge (10 units)')],
    ['Shift + W', t('Change wire routing')],
    [shortcut('D'), t('Duplicate')],
    [`${shortcut('C')} / ${shortcut('X')} / ${shortcut('V')}`, t('Copy / cut / paste')],
    ['Delete / Backspace', t('Delete selection · on a label, delete only the text')],
    ['Shift + Delete / Backspace', t('Delete the object from its label')],
    [shortcut('Z'), t('Undo')],
    [shortcut('Z', true), t('Redo')],
    ['G', t('Show / hide grid')],
    ['T', t('Show / hide components')],
    ['1', t('Fit to view')],
    ['+ / −', t('Zoom in / out')],
    [shortcut('A'), t('Select all')],
  ];
  return <div className="modal-backdrop">
    <section ref={dialog} className="help-dialog" role="dialog" aria-modal="true" aria-labelledby="help-heading">
      <button className="modal-close" aria-label={t('Close help')} title={t('Close help')} onClick={onClose}><X size={20} /></button>
      <span className="eyebrow">{t('A FEW GESTURES, A CLEAR CIRCUIT')}</span>
      <h2 id="help-heading">{t('Draw. Connect. Annotate.')}</h2>
      <div className="help-steps">
        <p><b>{t('01 · Place')}</b>{t('Search in Components. Click a symbol, then the sheet, or drag it. R rotates; Esc returns to Select.')}</p>
        <p><b>{t('02 · Connect')}</b>{t('Choose Wire or press W. Click the start and destination terminals; empty-space clicks add bends. Enter or double-click finishes a free end. Backspace removes the last bend; Esc cancels. N inserts junctions.')}</p>
        <p><b>{t('03 · Annotate')}</b>{t('Choose Text or open Drawing and annotations. Double-click a label to edit it; Enter confirms and Esc cancels. Select an object to adjust its properties. Shift + click selects several objects.')}</p>
      </div>
      <details className="help-disclosure">
        <summary>{t('Keyboard shortcuts')}</summary>
        <div className="shortcut-grid">{shortcuts.map(([key,description])=><div key={key}><span>{description}</span><kbd>{key}</kbd></div>)}</div>
      </details>
      <details className="help-disclosure">
        <summary>{t('Drawing and editing tips')}</summary>
        <p>{t('Drag a terminal to start a new wire in Select. Drag a round endpoint handle to reconnect an existing wire. Filled handles are connected; hollow handles are free. Alt/Option temporarily disables snapping. A selection click never changes connections.')}</p>
        <p>{t('Select a complete circuit, including its wires, then drag a corner to adjust its spacing without changing symbol sizes. Include all connected elements to show the corner handles.')}</p>
        <p>{t('Smart Placement can insert a component into a compatible wire when the preview shows both cuts. Highlighter follows circuit paths in Smart mode or draws freely in Freehand mode. Highlight eraser affects highlights only; each drag is one undo step.')}</p>
        <p>{t('Diagrams contains editable axes and a Gauss plane. Click two intersecting lines with Angle to measure their angle. Decorative lines can attach to shapes and use curved routing or arrowheads. Braces and brackets rotate with R.')}</p>
      </details>
      <details className="help-disclosure">
        <summary>{t('Projects and images')}</summary>
        <p>{t('The drawing is saved automatically in this browser. Project, beside Help, downloads an editable .drawcircuit file or opens a .drawcircuit / JSON project. Opening asks before replacing your work and can be undone.')}</p>
        <p>{t('Select elements and choose Copy as image from the right-click menu for a transparent PNG. Use Select all to include the whole circuit. Grid, guides and handles stay out of the image.')}</p>
      </details>
      <a className="help-guide-link" href="https://github.com/andrelombardo/drawcircuit/blob/main/docs/it/guide.md" target="_blank" rel="noreferrer">{t('Read the complete guide')}</a>
    </section>
  </div>;
}
