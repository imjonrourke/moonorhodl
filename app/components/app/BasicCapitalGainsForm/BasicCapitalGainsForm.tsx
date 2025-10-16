import  { type FunctionComponent } from 'react';
import { Form } from 'react-router';
import { NumericFormat } from 'react-number-format';
import { CurrencyInput } from '~/components/app/CurrencyInput/CurrencyInput';
import { CreateBasicCapitalGainsForm } from '../../../../src/forms/BasicCapitalGainsForm';
import type { BasicCapitalGainsFormProps } from './BasicCapitalGainsFormProps';
import { Field } from '~/components/ui/field';
import { Button } from '~/components/ui/button';

const actionUrls = {
  new: '/gains/basic/new',
};

export const BasicCapitalGainsForm: FunctionComponent<BasicCapitalGainsFormProps> = ({ className, gains }) => {
  const { shortTermCost, shortTermAmount, longTermCost, longTermAmount } = gains;

  return (
    <Form action={actionUrls.new} method="POST" key="" navigate={false} className={className}>
      <div className="grid w-full max-w-sm gap-6">
        <Field>
          <NumericFormat
            id={CreateBasicCapitalGainsForm.shortTermCost}
            name={CreateBasicCapitalGainsForm.shortTermCost}
            customInput={CurrencyInput}
            placeholder="Short term total cost"
            value={shortTermCost || ''}
            thousandSeparator
          />
        </Field>
        <Field>
          <NumericFormat
            id={CreateBasicCapitalGainsForm.shortTermAmount}
            name={CreateBasicCapitalGainsForm.shortTermAmount}
            customInput={CurrencyInput}
            placeholder="Short term sell price"
            value={shortTermAmount || ''}
            thousandSeparator
          />
        </Field>
        <Field>
          <NumericFormat
            id={CreateBasicCapitalGainsForm.longTermCost}
            name={CreateBasicCapitalGainsForm.longTermCost}
            customInput={CurrencyInput}
            placeholder="Long term total cost"
            value={longTermCost || ''}
            thousandSeparator
          />
        </Field>
        <Field>
          <NumericFormat
            id={CreateBasicCapitalGainsForm.longTermAmount}
            name={CreateBasicCapitalGainsForm.longTermAmount}
            customInput={CurrencyInput}
            placeholder="Long term sell price"
            value={longTermAmount || ''}
            thousandSeparator
          />
        </Field>
        <Button size="lg" variant="default" type="submit" full>Save capital gains details</Button>
      </div>
    </Form>
  );
};
