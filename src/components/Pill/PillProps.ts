import { type BaseProps } from '../../types';

export type PillVariant = 'default' | 'success' | 'error' | 'warning' | 'inform';

export interface PillProps extends BaseProps {
  label: string;
  variant: PillVariant;
  onClose?: () => void;
}