import { BaseProps } from '../../types';

export interface RadioGroupsProps<K> extends BaseProps {
  label: string;
  description?: string;
  byComparitor: keyof K;
  selected?: K;
  items: K[];
  onChange?: (value: K) => void;
}