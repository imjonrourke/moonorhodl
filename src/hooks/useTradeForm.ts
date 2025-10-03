import type { AssetType } from '../types';
import { AssetTypeTitles } from '../utils/constants';

type UseTradeFormProps = {
  id?: number;
  assetType: AssetType;
  name?: string;
  quantity?: number;
  amount?: number;
  date?: Date;
};

type UseTradeFormResult = {
  hasId: boolean;
  assetTypeTitle: string;
  nameValue: string;
  quantityValue: string;
  amountValue: string;
  dateValue: string;
};

export const useTradeForm: (props: UseTradeFormProps) => UseTradeFormResult = ({ id, assetType, name, quantity, amount, date }) => {
  const hasId = !!id;

  const nameValue = name || '';
  const quantityValue = `${quantity || '1'}`;
  const amountValue = `${amount || '0'}`;
  const dateValue = date ? new Date(date).toLocaleDateString() : '';

  const assetTypeTitle = AssetTypeTitles[assetType].label;

  return {
    hasId,
    assetTypeTitle,
    nameValue,
    quantityValue,
    amountValue,
    dateValue,
  };
};
