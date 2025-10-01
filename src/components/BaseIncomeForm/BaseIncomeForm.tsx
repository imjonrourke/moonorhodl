import type { FunctionComponent } from 'react';
import { Input } from '../Input'
import type { BaseIncomeFormProps } from './BaseIncomeFormProps';

export const BaseIncomeForm: FunctionComponent<BaseIncomeFormProps> = () => {
  return (
    <div>
      <Input type="number" name="income" id="income" label="Starting bag (Annual income)" value="0" />
      <Input type="text" name="location" id="location" label="Location" value="" />
    </div>
  );
};
