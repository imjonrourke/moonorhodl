import { Input } from '../Input';
import { Button } from '../Button';
import type { FunctionComponent } from 'react';
import type { TradeFormProps } from './TradeFormProps';
import { useTradeForm } from '../../hooks';

export const TradeForm: FunctionComponent<TradeFormProps> = ({ type, id, name, quantity, amount, date }) => {
  const isBuy = type === 'buy';
  const isSell    = type === 'sell';

  const {
    hasId,
    nameType,
    nameValue,
    quantityType,
    quantityValue,
    amountType,
    amountValue,
    dateType,
    dateValue,
  } = useTradeForm({ id, name, quantity, amount, date });

  return (
    <div>
      {
        hasId && (
          <input type="hidden" name="id" value={id} />
        )
      }
      <Input name="name" label="name" type={nameType} value={nameValue} />
      <Input name="quantity" label="Quantity" type={quantityType} value={quantityValue} />
      <Input name="amount" label="Amount" type={amountType} value={amountValue} />
      <Input name="date" label="date" type={dateType} value={dateValue} />
      <Button size="large" variant="primary" type="submit" full />
    </div>
  );
};
