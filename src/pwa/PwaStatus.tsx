import { useEffect, useRef, useState } from 'react';
import { saveDocumentNow, useEditorStore } from '../store/editorStore';
interface InstallEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: string }>;
}
export function PwaStatus() {
  const [refresh, setRefresh] = useState(false),
    [install, setInstall] = useState<InstallEvent | null>(null);
  const update = useRef<((reload?: boolean) => Promise<void>) | null>(null);
  useEffect(() => {
    if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return;
    let disposed = false,
      registration: ServiceWorkerRegistration | undefined;
    const check = () => {
      if (navigator.onLine) void registration?.update().catch(() => {});
    };
    const offerInstall = (event: Event) => {
      event.preventDefault();
      setInstall(event as InstallEvent);
    };
    const installed = () => setInstall(null);
    window.addEventListener('beforeinstallprompt', offerInstall);
    window.addEventListener('appinstalled', installed);
    window.addEventListener('focus', check);
    const timer = window.setInterval(check, 60 * 60 * 1000);
    void import('virtual:pwa-register').then(({ registerSW }) => {
      if (disposed) return;
      update.current = registerSW({
        onNeedRefresh: () => setRefresh(true),
        onOfflineReady: () =>
          useEditorStore.getState().notify('DrawCircuit è disponibile anche offline.'),
        onRegisteredSW: (_url, reg) => {
          registration = reg;
        },
        onRegisterError: () =>
          useEditorStore.getState().notify('Modalità offline non disponibile in questo browser.'),
      });
    });
    return () => {
      disposed = true;
      window.removeEventListener('beforeinstallprompt', offerInstall);
      window.removeEventListener('appinstalled', installed);
      window.removeEventListener('focus', check);
      window.clearInterval(timer);
    };
  }, []);
  const applyUpdate = async () => {
    if (useEditorStore.getState().gestureStart || document.querySelector('.inline-editor')) {
      useEditorStore.getState().notify('Concludi la modifica sul foglio prima di aggiornare.');
      return;
    }
    if (!saveDocumentNow()) {
      useEditorStore
        .getState()
        .notify(
          'Salva il circuito come JSON prima di aggiornare: il salvataggio locale non è disponibile.',
        );
      return;
    }
    await update.current?.(true);
  };
  if (!refresh && !install) return null;
  return (
    <aside className="pwa-notice" role="status">
      {refresh ? (
        <>
          <span>È disponibile una nuova versione.</span>
          <button onClick={() => void applyUpdate()}>Salva e aggiorna</button>
          <button onClick={() => setRefresh(false)}>Più tardi</button>
        </>
      ) : (
        <>
          <span>DrawCircuit può essere installato.</span>
          <button
            onClick={() => {
              void install
                ?.prompt()
                .then(() => install.userChoice)
                .then(() => setInstall(null));
            }}
          >
            Installa app
          </button>
          <button onClick={() => setInstall(null)}>Chiudi</button>
        </>
      )}
    </aside>
  );
}
