import { useState } from 'react';
import { useEditorStore } from '../../store/editorStore';
export function DocumentTitle() {
  const title = useEditorStore((s) => s.document.title),
    [editing, setEditing] = useState(false),
    [draft, setDraft] = useState(title);
  const save = () => {
    const s = useEditorStore.getState();
    if (draft.trim() !== s.document.title)
      s.commit({ ...s.document, title: draft.trim() || 'Circuito senza titolo' });
    setEditing(false);
  };
  return (
    <input
      aria-label="Titolo circuito"
      value={editing ? draft : title}
      onFocus={() => {
        setDraft(title);
        setEditing(true);
      }}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={save}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.currentTarget.blur();
        if (e.key === 'Escape') {
          setDraft(title);
          setEditing(false);
        }
      }}
    />
  );
}
