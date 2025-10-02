import * as React from 'react';
import { NumericFormat } from 'react-number-format';
// import { Input } from '../../../../src/components';
import { Input } from '~/components/ui/input';
import { Button } from '../../../../src/components';
import { useTradeForm } from '../../../../src/hooks';
import { type TradeFormProps } from './TradeFormProps';
import { DatePicker } from '~/components/app/DatePicker';

export const TradeForm: React.FunctionComponent<TradeFormProps> = ({ type, assetType, id, name, quantity, amount, date, isEdit }) => {
  const isBuy = type === 'buy';
  const isSell    = type === 'sell';

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
      <Input name="name" placeholder="Name" type={nameType} value={nameValue} />
      {/* <Input name="quantity" placeholder="Quantity" type={quantityType} value={quantityValue} /> */}
      <NumericFormat id="quantity" name="quantity" prefix="$" value={quantityValue} thousandSeparator />
      {/* <Input name="amount" label="Amount" type={amountType} value={amountValue} /> */}
      <NumericFormat id="amount" name="amount" prefix="$" value={amountValue} thousandSeparator />
      <DatePicker name="date" id="date" />
      {/* <Input name="date" label="date" type={dateType} value={dateValue} /> */}
      <Button size="large" variant="primary" type="submit" full />
    </div>
  );
};
