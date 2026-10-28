import { t } from '../../i18n';
import type { ArrowAnnotation, ArrowheadStyle } from '../../model/types';
import { canvasArrowHeadPath } from '../../tikz/arrowheads';

const styles = ['open', 'outlined', 'filled'] as const;
const labels = {
  open: 'Open arrowhead',
  outlined: 'Outlined arrowhead',
  filled: 'Filled arrowhead',
};
const preview: ArrowAnnotation = {
  kind: 'arrow', id: 'preview', type: 'straight',
  start: { x: 4, y: 12 }, end: { x: 56, y: 12 },
  controlPoints: [{ x: 4, y: 12 }, { x: 56, y: 12 }],
  color: '#000000', width: 2, reversed: false,
};

export function ArrowheadControl({ value, onChange, allowNone = false }: {
  value: ArrowheadStyle | 'none' | undefined;
  onChange: (style: ArrowheadStyle | 'none') => void;
  allowNone?: boolean;
}) {
  return <div className="inspector-arrowhead">
    <div className="inspector-arrowhead-caption">
      <span className="inspector-field-caption">{t('Arrowhead')}</span>
      {allowNone && <input
        type="checkbox" role="switch" className="inspector-paint-enabled"
        aria-label={t('Show arrowhead')} checked={value !== 'none'}
        onChange={(e) => onChange(e.target.checked ? 'open' : 'none')}
      />}
    </div>
    <div className="inspector-line-segments inspector-arrowhead-segments" role="group" aria-label={t('Arrowhead')}>
      {styles.map((style) => <button
        key={style} type="button" aria-label={t(labels[style])} title={t(labels[style])}
        aria-pressed={value === style} onClick={() => onChange(style)}
      >
        <svg width="42" height="18" viewBox="0 0 60 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d={style === 'open' ? 'M4 12H56' : 'M4 12H42.5'} />
          <path d={canvasArrowHeadPath({ ...preview, headStyle: style })} fill={style === 'filled' ? 'currentColor' : 'none'} />
        </svg>
      </button>)}
    </div>
  </div>;
}
