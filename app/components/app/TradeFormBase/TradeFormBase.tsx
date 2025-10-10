import * as React from 'react';
import { NumericFormat } from 'react-number-format';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { DatePicker } from '~/components/app/DatePicker';
import { useTradeForm } from '../../../../src/hooks';
import { type TradeFormBaseProps } from './TradeFormBaseProps';
import { SetTradeForm } from '../../../../src/forms/SetTradeForm';
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
      {
        !!id && (
          <input type="hidden" id={SetTradeForm.id} name={SetTradeForm.id} value={id} />
        )
      }
      <input type="hidden" id={SetTradeForm.assetType} name={SetTradeForm.assetType} value={assetType} />
      <Field>
        <FieldLabel htmlFor={SetTradeForm.name}>Name</FieldLabel>
        <Input
          id={SetTradeForm.name}
          name={SetTradeForm.name}
          type="text"
          placeholder="Name"
          value={nameValue}
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={SetTradeForm.amount}>Amount</FieldLabel>
        <NumericFormat
          id={SetTradeForm.amount}
          name={SetTradeForm.amount}
          customInput={CurrencyInput}
          value={amountValue}
          placeholder="Transaction amount"
          thousandSeparator
        />
      </Field>
      <Field>
        <FieldLabel htmlFor={SetTradeForm.quantity}>Quantity</FieldLabel>
        <NumericFormat
          id={SetTradeForm.quantity}
          name={SetTradeForm.quantity}
          customInput={Input}
          value={quantityValue}
          thousandSeparator
        />
      </Field>
      <Field>
        <FieldLabel>Price per unit</FieldLabel>
        <NumericFormat
          id={SetTradeForm.pricePerUnit}
          name={SetTradeForm.pricePerUnit}
          customInput={Input}
          value={quantityValue}
          thousandSeparator
        />
      </Field>
      <Field>
        <DatePicker name={SetTradeForm.date} id={SetTradeForm.date} label="Transaction date" isField />
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
