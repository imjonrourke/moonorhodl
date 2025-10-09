import * as React from 'react';
import { NumericFormat } from 'react-number-format';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { DatePicker } from '~/components/app/DatePicker';
import { Label } from '~/components/ui/label';
import { useTradeForm } from '../../../../src/hooks';
import { type TradeFormBaseProps } from './TradeFormBaseProps';
import { CreateTradeForm } from '../../../../src/forms/CreateTradeForm';
import { Field, FieldLabel } from '~/components/ui/field';
import { CurrencyInput } from '~/components/app/CurrencyInput/CurrencyInput';

export const TradeFormBase: React.FunctionComponent<TradeFormBaseProps> = ({ type, assetType, id, name, quantity, amount, date, isUpdate }) => {
  const isBuy = type === 'buy';
  const isSell = type === 'sell';
  const isSwap = type === 'swap';

  const {
    title,
    hasId,
    nameValue,
    quantityValue,
    amountValue,
    dateValue,
  } = useTradeForm({ id, assetType, name, quantity, amount, date, type, isUpdate });

  return (
    <div className="grid w-full max-w-sm gap-6">
      <input type="hidden" id={CreateTradeForm.assetType} name={CreateTradeForm.assetType} value={assetType} />
      <Field>
        <FieldLabel htmlFor={CreateTradeForm.name}>Name</FieldLabel>
        <Input
          id={CreateTradeForm.name}
          name={CreateTradeForm.name}
          type="text"
          placeholder="Name"
          value={nameValue}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={CreateTradeForm.amount}>Amount</FieldLabel>
        <NumericFormat
          id={CreateTradeForm.amount}
          name={CreateTradeForm.amount}
          customInput={CurrencyInput}
          value={amountValue}
          placeholder="Transaction amount"
          thousandSeparator
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={CreateTradeForm.quantity}>Quantity</FieldLabel>
        <NumericFormat
          id={CreateTradeForm.quantity}
          name={CreateTradeForm.quantity}
          customInput={Input}
          value={quantityValue}
          thousandSeparator
        />
      </Field>
      <Field>
        <DatePicker name={CreateTradeForm.date} id={CreateTradeForm.date} label="Transaction date" isField />
      </Field>
      <Field>
        <Button size="lg" variant="default" type="submit" full>
          {
            isBuy && `${title} ${assetType} purchase`
          }
          {
            isSell && `${title} ${assetType} sale`
          }
          {
            isSwap && `${title} ${assetType} swap`
          }
        </Button>
      </Field>
    </div>
  );
};
