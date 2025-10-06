import type { Trade } from '../../../src/types';
import { useNumericFormat } from 'react-number-format';

type UseTransactionItemHandler = (transaction: Trade) => {
  cost: string | number | null | undefined;
};

export const useTransactionItem: UseTransactionItemHandler = ({ id, name, type, assetType, amount, quantity, date }) => {
  const { value: cost } = useNumericFormat({ value: amount.toFixed(2), thousandSeparator: true });

  return {
    cost,
  };
};
