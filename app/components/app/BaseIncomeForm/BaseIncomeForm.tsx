import { type FunctionComponent } from 'react';
import { Input } from '~/components/ui/input';
import type { BaseIncomeFormProps } from './BaseIncomeFormProps';
import type { FilingStatus } from '../../../../src/types';
import { NumericFormat } from 'react-number-format';
import * as React from 'react';

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
      <NumericFormat id="quantity" name="quantity" prefix="$" customInput={Input} placeholder="Starting bag (Annual income)" thousandSeparator />
      <Input type="text" name="location" id="location" placeholder="Location" />
    </div>
  );
};
