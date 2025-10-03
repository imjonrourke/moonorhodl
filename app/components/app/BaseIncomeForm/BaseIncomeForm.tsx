import { type FunctionComponent } from 'react';
import { Input } from '~/components/ui/input';
import type { BaseIncomeFormProps } from './BaseIncomeFormProps';
import type { FilingStatus } from '../../../../src/types';
import { NumericFormat } from 'react-number-format';
import * as React from 'react';
import { Form } from 'react-router';

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
    <Form action={actionUrls.new} key="home:income" navigate={false}>
      <NumericFormat id="quantity" name="quantity" prefix="$" customInput={Input} placeholder="Starting bag (Annual income)" thousandSeparator />
      <Input type="text" name="location" id="location" placeholder="Location" />
    </Form>
  );
};
