import { type FunctionComponent } from 'react';
import { Input } from '~/components/ui/input';
import type { BaseIncomeFormProps } from './BaseIncomeFormProps';
import type { FilingStatus } from '../../../../src/types';
import { NumericFormat } from 'react-number-format';
import * as React from 'react';
import { Form } from 'react-router';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { Button } from '~/components/ui/button';
import { CurrencyInput } from '~/components/app/CurrencyInput/CurrencyInput';

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

export const BaseIncomeForm: FunctionComponent<BaseIncomeFormProps> = () => {
  return (
    <Form action={actionUrls.new} method="POST" key="home:income" navigate={false}>
      <div className="grid w-full max-w-sm gap-6">
        <NumericFormat id="quantity" name="income" customInput={CurrencyInput} placeholder="Starting bag (Annual income)" thousandSeparator />
        <Select name="filingStatus">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Filing status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single">Single</SelectItem>
            <SelectItem value="marriedJointly">Married filing jointly</SelectItem>
            <SelectItem value="marriedSeparately">Married filing separately</SelectItem>
            <SelectItem value="headOfHousehold">Head of household</SelectItem>
          </SelectContent>
        </Select>
        <Input type="text" name="location" id="location" placeholder="Location" />
        <Button size="lg" variant="default" type="submit" full>Save income</Button>
      </div>
    </Form>
  );
};
