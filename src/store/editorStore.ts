import { create } from 'zustand';
import { demoDocument } from '../model/demo';
import { deserializeDocument, serializeDocument } from '../model/serialization';
import { cloneObjects, extractSelection, removeObjects, rotateObjects } from '../utils/operations';
import { instantiatePreset } from '../presets/instantiate';
import { presetRegistry } from '../presets/registry';
import type {
  ArrowAnnotation,
  CircuitDocument,
  CircuitObject,
  Point,
  Rotation,
  Tool,
} from '../model/types';
export const STORAGE_KEY = 'drawcircuit.document.v1';
function initialDocument(): CircuitDocument {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? deserializeDocument(raw) : demoDocument();
  } catch {
    return demoDocument();
  }
}
interface EditorState {
  document: CircuitDocument;
  selection: string[];
  tool: Tool;
  pendingPresetId: string | null;
  selectPreset: (id: string) => void;
  insertPreset: (point: Point) => void;
  placementRotation: Rotation;
  rotatePlacement: () => void;
  arrowType: ArrowAnnotation['type'];
  grid: boolean;
  past: CircuitDocument[];
  future: CircuitDocument[];
  gestureStart: CircuitDocument | null;
  notice: string;
  storageError: boolean;
  setTool: (tool: Tool) => void;
  select: (ids: string[]) => void;
  setArrowType: (type: ArrowAnnotation['type']) => void;
  toggleGrid: () => void;
  commit: (doc: CircuitDocument) => void;
  add: (objects: CircuitObject[]) => void;
  update: (id: string, fn: (o: CircuitObject) => CircuitObject) => void;
  beginGesture: () => void;
  preview: (doc: CircuitDocument) => void;
  endGesture: () => void;
  cancelGesture: () => void;
  undo: () => void;
  redo: () => void;
  remove: () => void;
  duplicate: () => void;
  rotate: () => void;
  replace: (doc: CircuitDocument) => void;
  notify: (message: string) => void;
}
export const useEditorStore = create<EditorState>((set, get) => ({
  document: initialDocument(),
  selection: [],
  tool: 'select',
  pendingPresetId: null,
  selectPreset: (id) => {
    if (!Object.hasOwn(presetRegistry, id)) return;
    get().setTool('preset');
    set({ pendingPresetId: id });
  },
  insertPreset: (point) => {
    const s = get(),
      preset = s.pendingPresetId && presetRegistry[s.pendingPresetId];
    if (!preset) return;
    const objects = instantiatePreset(preset, point, s.placementRotation, s.document);
    s.setTool('select');
    s.add(objects);
  },
  placementRotation: 0,
  rotatePlacement: () =>
    set((s) => ({ placementRotation: ((s.placementRotation + 90) % 360) as Rotation })),
  arrowType: 'straight',
  grid: true,
  past: [],
  future: [],
  gestureStart: null,
  notice: '',
  storageError: false,
  setTool: (tool) =>
    set((s) => ({
      tool,
      pendingPresetId: null,
      placementRotation: 0,
      selection: tool === 'select' ? s.selection : [],
    })),
  select: (selection) => set({ selection }),
  setArrowType: (arrowType) => set({ arrowType }),
  toggleGrid: () => set((s) => ({ grid: !s.grid })),
  commit: (document) =>
    set((s) => ({
      document,
      past: [...s.past, s.document].slice(-100),
      future: [],
      gestureStart: null,
    })),
  add: (objects) => {
    const s = get();
    s.commit({ ...s.document, objects: [...s.document.objects, ...objects] });
    s.select(objects.map((o) => o.id));
  },
  update: (id, fn) => {
    const s = get();
    s.commit({ ...s.document, objects: s.document.objects.map((o) => (o.id === id ? fn(o) : o)) });
  },
  beginGesture: () => set((s) => ({ gestureStart: s.document })),
  preview: (document) => set({ document }),
  endGesture: () => {
    const s = get();
    if (s.gestureStart && s.gestureStart !== s.document)
      set({ past: [...s.past, s.gestureStart].slice(-100), future: [], gestureStart: null });
    else set({ gestureStart: null });
  },
  cancelGesture: () => {
    const s = get();
    if (s.gestureStart) set({ document: s.gestureStart, gestureStart: null });
  },
  undo: () => {
    const s = get();
    if (s.gestureStart) {
      s.cancelGesture();
      set({ selection: [], tool: 'select', pendingPresetId: null });
      return;
    }
    if (!s.past.length) return;
    set({
      document: s.past[s.past.length - 1],
      past: s.past.slice(0, -1),
      future: [s.document, ...s.future].slice(0, 100),
      selection: [],
      gestureStart: null,
      tool: 'select',
      pendingPresetId: null,
    });
  },
  redo: () => {
    const s = get();
    if (s.gestureStart) {
      s.cancelGesture();
      set({ selection: [], tool: 'select', pendingPresetId: null });
      return;
    }
    if (!s.future.length) return;
    set({
      document: s.future[0],
      future: s.future.slice(1),
      past: [...s.past, s.document].slice(-100),
      selection: [],
      gestureStart: null,
      tool: 'select',
      pendingPresetId: null,
    });
  },
  remove: () => {
    const s = get();
    if (s.selection.length) {
      s.commit(removeObjects(s.document, s.selection));
      s.select([]);
    }
  },
  duplicate: () => {
    const s = get();
    if (s.selection.length)
      s.add(cloneObjects(extractSelection(s.document, s.selection), { x: 40, y: 40 }, s.document));
  },
  rotate: () => {
    const s = get();
    if (s.selection.length) s.commit(rotateObjects(s.document, s.selection));
  },
  replace: (document) => {
    get().cancelGesture();
    get().commit(document);
    set({ selection: [], tool: 'select', pendingPresetId: null });
  },
  notify: (notice) => set({ notice }),
}));
let saveTimer: ReturnType<typeof setTimeout> | undefined;
useEditorStore.subscribe((state, previous) => {
  // A preview may stay open indefinitely; keep saving the last committed document.
  if (
    (state.gestureStart ?? state.document) === (previous.gestureStart ?? previous.document) &&
    !(previous.gestureStart && !state.gestureStart)
  )
    return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        serializeDocument(
          useEditorStore.getState().gestureStart ?? useEditorStore.getState().document,
        ),
      );
      if (useEditorStore.getState().storageError) useEditorStore.setState({ storageError: false });
    } catch {
      useEditorStore.setState({ storageError: true });
    }
  }, 400);
});
