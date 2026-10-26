import { t } from '../i18n';
import type { CircuitDocument } from '../model/types';

/** Pass the promise immediately to preserve clipboard user activation on Safari. */
export async function copyPNG(doc: CircuitDocument) {
  if (
    typeof ClipboardItem === 'undefined' ||
    !navigator.clipboard?.write ||
    (ClipboardItem.supports && !ClipboardItem.supports('image/png'))
  )
    throw new Error(t('This browser cannot copy images to the clipboard.'));
  const png = import('./exporter').then(({ exportPNG }) => exportPNG(doc));
  // A denied clipboard can reject before the image promise settles.
  void png.catch(() => {});
  await navigator.clipboard.write([new ClipboardItem({ 'image/png': png })]);
}
