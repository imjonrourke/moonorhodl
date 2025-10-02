import * as React from 'react';
import { NumericFormat } from 'react-number-format';
import { Input } from '~/components/ui/input';
import { Button } from '~/components/ui/button';
import { DatePicker } from '~/components/app/DatePicker';
import { Label } from '~/components/ui/label';
import { useTradeForm } from '../../../../src/hooks';
import { type TradeFormProps } from './TradeFormProps';
import { CreateTradeForm } from '../../../../src/forms/CreateTradeForm';

export const TradeForm: React.FunctionComponent<TradeFormProps> = ({ type, assetType, id, name, quantity, amount, date, isEdit }) => {
  const isBuy = type === 'buy';
  const isSell = type === 'sell';
  const isSwap = type === 'swap';

  const {
    hasId,
    assetTypeTitle,
    nameType,
    nameValue,
    quantityType,
    quantityValue,
    amountType,
    amountValue,
    dateType,
    dateValue,
  } = useTradeForm({ id, assetType, name, quantity, amount, date });

  if (hasId && !isEdit) {
    return (
      <>
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="name" value={nameValue} />
        <input type="hidden" name="quantity" value={quantityValue} />
        <input type="hidden" name="amount" value={amountValue} />
        <input type="hidden" name="date" value={dateValue} />
      </>
    );
  }

  return (
    <div>
      <h3>{assetTypeTitle}</h3>
      <Input name={CreateTradeForm.name} placeholder="Name" type={nameType} />
      {/* <Input name="quantity" placeholder="Quantity" type={quantityType} value={quantityValue} /> */}
      <Label htmlFor={CreateTradeForm.quantity}>Quantity</Label>
      <NumericFormat
        id={CreateTradeForm.quantity}
        name={CreateTradeForm.quantity}
        customInput={Input}
        value={quantityValue}
        thousandSeparator
      />
      {/* <Input name="amount" label="Amount" type={amountType} value={amountValue} /> */}
      <Label htmlFor={CreateTradeForm.amount}>Amount</Label>
      <NumericFormat
        id={CreateTradeForm.amount}
        name={CreateTradeForm.amount}
        customInput={Input}
        value={amountValue}
        thousandSeparator
        decimalScale={2}
      />
      <DatePicker name={CreateTradeForm.date} id="date" />
      {/* <Input name="date" label="date" type={dateType} value={dateValue} /> */}
      <Button size="lg" variant="default" type="submit" full>
        {
          isBuy && `Add ${assetType} purchase`
        }
        {
          isSell && `Add ${assetType} sale`
        }
        {
          isSwap && `Add ${assetType} swap`
        }
      </Button>
    </div>
  );
};
