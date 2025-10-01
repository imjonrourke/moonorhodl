import { BaseProps, ID } from '../../types';

export interface SelectItem {
  id: ID;
  value: ID;
  disabled?: boolean;
}

export interface SelectProps extends BaseProps {
  name: string;
  label: string;
  items: SelectItem[];
  selectedItem: SelectItem;
  onSelectItem: (value: SelectItem) => void;
  inline?: boolean;
  truncate?: boolean;
}
