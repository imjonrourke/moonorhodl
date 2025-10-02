import { type FunctionComponent } from 'react';
import { Input } from '~/components/ui/input';
import type { BaseIncomeFormProps } from './BaseIncomeFormProps';
import type { FilingStatus } from '../../../../src/types';

const items = [
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
      <Input type="number" name="income" id="income" placeholder="Starting bag (Annual income)" value="0" />
      <Input type="text" name="location" id="location" placeholder="Location" value="" />
    </div>
  );
};
