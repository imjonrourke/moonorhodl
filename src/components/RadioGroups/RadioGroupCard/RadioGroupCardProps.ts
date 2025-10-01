import { RadioGroupsProps } from '../RadioGroupsProps';
import { ID } from '../../../types';

export interface RadioGroupItem {
  id: ID;
  title: string;
  description?: string;
  users?: string;
}

export interface RadioGroupCardProps extends RadioGroupsProps<RadioGroupItem> {
  name: string;
  items: RadioGroupItem[];
  column?: boolean;
  byComparitor: keyof RadioGroupItem;
}
