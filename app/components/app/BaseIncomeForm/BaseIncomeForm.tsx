import { type FunctionComponent } from 'react';
import { NumericFormat } from 'react-number-format';
import * as React from 'react';
import { Form } from 'react-router';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Button } from '~/components/ui/button';
import { CurrencyInput } from '~/components/app/CurrencyInput/CurrencyInput';
import { CreateBaseIncomeForm, CreateBaseIncomeFormValues } from '../../../../src/forms/BaseIncomeForm';
import { FormKeys } from '../../../../src/utils/constants';
import type { FilingStatus } from '../../../../src/types';
import type { BaseIncomeFormProps } from './BaseIncomeFormProps';

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

const actionUrls = {
  new: '/income/new',
}

export const BaseIncomeForm: FunctionComponent<BaseIncomeFormProps> = ({ className, income, filingStatus }) => {
  return (
    <Form action={actionUrls.new} method="POST" key={FormKeys.homeIncome} navigate={false} className={className}>
      <div className="grid w-full max-w-sm gap-6">
        <NumericFormat
          id={CreateBaseIncomeForm.income}
          name={CreateBaseIncomeForm.income}
          customInput={CurrencyInput}
          placeholder="Starting bag (Annual income)"
          value={income || ''}
          thousandSeparator
        />
        <Select name={CreateBaseIncomeForm.filingStatus} defaultValue={filingStatus && CreateBaseIncomeFormValues[filingStatus]}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filing status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={CreateBaseIncomeFormValues.single}>Single</SelectItem>
            <SelectItem value={CreateBaseIncomeFormValues.marriedJointly}>Married filing jointly</SelectItem>
            <SelectItem value={CreateBaseIncomeFormValues.marriedSeparately}>Married filing separately</SelectItem>
            <SelectItem value={CreateBaseIncomeFormValues.headOfHousehold}>Head of household</SelectItem>
          </SelectContent>
        </Select>
        {/* <Input type="text" name="location" id="location" placeholder="Location" /> */}
        <Button size="lg" variant="default" type="submit" full>Save income</Button>
      </div>
    </Form>
  );
};
