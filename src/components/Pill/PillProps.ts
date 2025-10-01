import { BaseProps } from '../../types/components';

export type PillVariant = 'default' | 'success' | 'error' | 'warning' | 'inform';

export interface PillProps extends BaseProps {
  label: string;
  variant: PillVariant;
  onClose?: () => void;
}