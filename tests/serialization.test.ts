import { describe, expect, it } from 'vitest';
import { demoDocument } from '../src/model/demo';
import { deserializeDocument, serializeDocument } from '../src/model/serialization';
import {
  cloneObjects,
  extractSelection,
  removeObjects,
  rotateObjects,
} from '../src/utils/operations';
import { resolveEndpoint } from '../src/utils/geometry';
import type { Wire } from '../src/model/types';
describe('serialization, clipboard and edits', () => {
  it('round-trips all object variants without losing references or label offsets', () => {
    const doc = demoDocument();
    expect(deserializeDocument(serializeDocument(doc))).toEqual(doc);
  });
  it.each([
    '{}',
    '{"version":2,"title":"x","objects":[]}',
    '{"version":1,"title":"x","objects":[{"id":"a","kind":"evil"}]}',
    'not json',
  ])('rejects invalid data: %s', (raw) => expect(() => deserializeDocument(raw)).toThrow());
  it('rejects duplicate IDs', () => {
    const doc = demoDocument();
    doc.objects.push(doc.objects[0]);
    expect(() => deserializeDocument(serializeDocument(doc))).toThrow();
  });
  it('rejects dangling terminal references', () => {
    const doc = demoDocument();
    doc.objects = doc.objects.filter((o) => o.id !== 'r-AB');
    expect(() => deserializeDocument(serializeDocument(doc))).toThrow();
  });
  it('rejects forged terminal geometry and invalid colors', () => {
    const doc = demoDocument(),
      c = doc.objects.find((o) => o.kind === 'component')!;
    if (c.kind !== 'component') throw Error();
    c.terminals[0].localX = 100;
    expect(() => deserializeDocument(serializeDocument(doc))).toThrow();
    c.terminals[0].localX = -40;
    c.color = 'red';
    expect(() => deserializeDocument(serializeDocument(doc))).toThrow();
  });
  it('detaches external endpoints when copying only wires', () => {
    const doc = demoDocument(),
      fragment = extractSelection(doc, ['w-r-AB-a']);
    expect(fragment.objects[0]).toMatchObject({
      startEndpoint: { kind: 'free' },
      endEndpoint: { kind: 'free' },
    });
    expect(() => deserializeDocument(serializeDocument(fragment))).not.toThrow();
  });
  it('duplicates a complete circuit with new IDs and rewired references', () => {
    const doc = demoDocument(),
      copy = cloneObjects(doc, { x: 40, y: 60 }),
      duplicated = { ...doc, objects: copy };
    expect(new Set(copy.map((o) => o.id)).size).toBe(copy.length);
    expect(copy.every((o) => !doc.objects.some((p) => p.id === o.id))).toBe(true);
    expect(() => deserializeDocument(serializeDocument(duplicated))).not.toThrow();
    const original = doc.objects.find((o): o is Wire => o.kind === 'wire')!,
      wire = copy.find((o): o is Wire => o.kind === 'wire')!;
    const p = resolveEndpoint(original.startEndpoint, doc);
    expect(resolveEndpoint(wire.startEndpoint, duplicated)).toEqual({ x: p.x + 40, y: p.y + 60 });
  });
  it('deletion preserves attached wires as free endpoints at their old positions', () => {
    const doc = demoDocument(),
      removed = removeObjects(doc, ['r-AB', 'node-A']);
    expect(() => deserializeDocument(serializeDocument(removed))).not.toThrow();
    expect(removed.objects.find((o) => o.id === 'w-r-AB-a')).toMatchObject({
      startEndpoint: { kind: 'free', point: { x: -160, y: 0 } },
      endEndpoint: { kind: 'free', point: { x: -240, y: 0 } },
    });
  });
  it('returns geometry to its original position after four rotations', () => {
    const doc = demoDocument(),
      ids = doc.objects.map((o) => o.id);
    let rotated = doc;
    for (let i = 0; i < 4; i++) rotated = rotateObjects(rotated, ids);
    expect(rotated).toEqual(doc);
  });
});
