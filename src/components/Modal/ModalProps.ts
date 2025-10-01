import { BaseProps } from '../../types';

export interface ModalProps extends BaseProps {
  open?: boolean;
  onClose?: (value: boolean) => void;
  title?: string;
  showCloseIcon?: boolean;
  primaryActionLabel?: string;
  primaryIsSubmit?: boolean;
  renderActions?: boolean;
  primaryActionClick?: () => void;
  secondaryActionLabel?: string;
  secondaryActionClick?: () => void;
}
