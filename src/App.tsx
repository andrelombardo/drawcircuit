import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { PwaStatus } from './pwa/PwaStatus';
import { Toolbar } from './components/toolbar/Toolbar';
import { ComponentSidebar } from './components/palette/ComponentSidebar';
import { useSidebarPreferences } from './components/palette/useSidebarPreferences';
import { Canvas } from './components/editor/Canvas';
import { ExportDialog } from './components/toolbar/ExportDialog';
import { HelpDialog } from './components/toolbar/HelpDialog';
import { useEditorStore } from './store/editorStore';
export default function App() {
  const sidebar = useSidebarPreferences();
  const [dialog, setDialog] = useState<'export' | 'help' | null>(null),
    notice = useEditorStore((s) => s.notice);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => useEditorStore.getState().notify(''), 4500);
    return () => clearTimeout(timer);
  }, [notice]);
  return (
    <div className="app-shell">
      <PwaStatus />
      <Toolbar onExport={() => setDialog('export')} onHelp={() => setDialog('help')} />
      <div className="workspace">
        <ComponentSidebar {...sidebar} />
        <Canvas
          sidebarVisible={sidebar.preferences.visible}
          onShowSidebar={() => sidebar.setPreferences((p) => ({ ...p, visible: true }))}
        />
      </div>
      {dialog === 'export' && <ExportDialog onClose={() => setDialog(null)} />}{' '}
      {dialog === 'help' && <HelpDialog onClose={() => setDialog(null)} />}
      {notice && (
        <div className="toast" role="status">
          {notice}
          <button
            aria-label="Chiudi notifica"
            title="Chiudi notifica"
            onClick={() => useEditorStore.getState().notify('')}
          >
            <X size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
