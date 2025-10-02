import { type FunctionComponent } from 'react';
import { Input, Select, type SelectItem } from '../../../../src/components'
import type { BaseIncomeFormProps } from './BaseIncomeFormProps';
import type { FilingStatus } from '../../../../src/types';

const items: SelectItem[] = [
  {
    id: 'single' as FilingStatus,
    value: 'Single',
  },
  {
    id: 'marriedJointly' as FilingStatus,
    value: 'Married filing jointly',
  },
  {
    id: 'marriedSeparately' as FilingStatus,
    value: 'Married filing separately',
  },
];

export const BaseIncomeForm: FunctionComponent<BaseIncomeFormProps> = () => {
  return (
    <div>
      <Input type="number" name="income" id="income" label="Starting bag (Annual income)" value="0" />
      <Select name="filingStatus" label="Filing status" items={items} onSelectItem={() => {}} selectedItem={items[0]} />
      <Input type="text" name="location" id="location" label="Location" value="" />
    </div>
  );
};
