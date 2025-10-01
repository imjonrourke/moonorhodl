import { BaseProps } from '../../types/components';

export interface ToggleProps extends BaseProps {
  isTrue?: boolean;
  onChange?: (value: boolean) => void;
}