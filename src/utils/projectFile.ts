import { t } from '../i18n';
import type { CircuitDocument } from '../model/types';
import { MAX_DOCUMENT_LENGTH } from '../model/limits';
import { deserializeDocument, serializeDocument } from '../model/serialization';

/** Read the same versioned JSON used by autosave, including legacy v1 documents. */
export async function readProjectFile(file: Pick<File, 'size' | 'text'>): Promise<CircuitDocument> {
  if (file.size > MAX_DOCUMENT_LENGTH)
    throw new Error(t('The file exceeds the 10 MB limit.'));
  return deserializeDocument(await file.text());
}

export function projectFilename(title: string): string {
  const safe = Array.from(title.normalize('NFC'), (char) => char.charCodeAt(0) < 32 ? '-' : char).join('').replace(/[<>:"/\\|?*]/g, '-').trim()
    .replace(/[. ]+$/g, '').slice(0, 100);
  return `${safe || 'DrawCircuit'}.drawcircuit`;
}

/** Validate a copy before download; normalization never touches the live drawing. */
export function projectBlob(document: CircuitDocument): Blob {
  const raw = serializeDocument(deserializeDocument(serializeDocument(document)));
  const blob = new Blob([raw], { type: 'application/json' });
  // UTF-8 files can be larger than the string validated by the document parser.
  if (blob.size > MAX_DOCUMENT_LENGTH)
    throw new Error(t('The file exceeds the 10 MB limit.'));
  return blob;
}

export function downloadProject(document: CircuitDocument): void {
  const url = URL.createObjectURL(projectBlob(document));
  const link = window.document.createElement('a');
  link.href = url;
  link.download = projectFilename(document.title);
  window.document.body.append(link);
  link.click();
  link.remove();
  // Give the browser time to acquire the blob before releasing it.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
