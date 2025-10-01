import { Input } from '../../../../src/components/Input';
import { Button } from '../../../../src/components/Button';
import type { FunctionComponent } from 'react';
import type { TradeFormProps } from './TradeFormProps';
import { useTradeForm } from '../../../../src/hooks';

export const TradeForm: FunctionComponent<TradeFormProps> = ({ type, assetType, id, name, quantity, amount, date }) => {
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

  return (
    <div>
      <h3>{assetTypeTitle}</h3>
      {
        hasId && (
          <input type="hidden" name="id" value={id} />
        )
      }
      <Input name="name" label="Name" type={nameType} value={nameValue} />
      <Input name="quantity" label="Quantity" type={quantityType} value={quantityValue} />
      <Input name="amount" label="Amount" type={amountType} value={amountValue} />
      <Input name="date" label="date" type={dateType} value={dateValue} />
      <Button size="large" variant="primary" type="submit" full />
    </div>
  );
};
