import { t } from '../../i18n';
import { useEditorStore } from '../../store/editorStore';

/** Tool options travel with the floating toolbar and inherit its appearance. */
export function DrawingToolOptions() {
  const tool = useEditorStore((s) => s.tool),
    wireRouting = useEditorStore((s) => s.wireRouting),
    lineCurve = useEditorStore((s) => s.lineCurve),
    arrowType = useEditorStore((s) => s.arrowType);

  if (tool === 'wire' || tool === 'line') {
    return (
      <div className="arrow-tool-options floating-surface" role="group" aria-label={t(tool === 'line' ? 'Line routing' : 'Wire routing')}>
        {(['orthogonal', '45', 'free'] as const).map((routing, i) => (
          <button
            key={routing}
            type="button"
            aria-pressed={wireRouting === routing && !(tool === 'line' && lineCurve)}
            className={wireRouting === routing && !(tool === 'line' && lineCurve) ? 'selected' : ''}
            onClick={() => {
              if (tool === 'line') useEditorStore.getState().setLineCurve(false);
              useEditorStore.getState().setWireRouting(routing);
            }}
            title={t('Shift+W changes routing')}
          >
            {[t('Orthogonal'), '45°', t('Free')][i]}
          </button>
        ))}
        {tool === 'line' && (
          <button
            type="button"
            aria-pressed={lineCurve}
            className={lineCurve ? 'selected' : ''}
            onClick={() => useEditorStore.getState().setLineCurve(true)}
          >
            {t('Curved')}
          </button>
        )}
      </div>
    );
  }

  if (tool === 'arrow') {
    return (
      <div className="arrow-tool-options floating-surface" role="group" aria-label={t('Arrow shape')}>
        {(['straight', 'curve'] as const).map((type, i) => (
          <button
            key={type}
            type="button"
            aria-pressed={arrowType === type}
            className={arrowType === type ? 'selected' : ''}
            onClick={() => useEditorStore.getState().setArrowType(type)}
          >
            {[t('Straight'), t('Curved')][i]}
          </button>
        ))}
      </div>
    );
  }

  return null;
}
