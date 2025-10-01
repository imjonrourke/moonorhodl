import { RadioGroupsProps } from '../RadioGroupsProps';

export type RadioListPanelItem = {
  id: string | number;
  label: string;
  description?: string;
};

export interface RadioListPanelProps extends RadioGroupsProps<RadioListPanelItem> {
  items: RadioListPanelItem[];
  onChange?: (selected: RadioListPanelItem) => void;
  name?: string;
}