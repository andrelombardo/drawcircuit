import { ProjectMenu } from './ProjectMenu';
import { HelpCircle } from 'lucide-react';
import { t } from '../../i18n';
import { IconButton } from './IconButton';

export function WorkspaceUtilities({ onHelp }: { onHelp?: () => void }) {
  return (
    <div className="workspace-utilities floating-surface">
      <ProjectMenu />
      <IconButton label={t('Help')} className="help-control" onClick={onHelp}>
        <HelpCircle size={18} />
      </IconButton>
    </div>
  );
}
