import type { AssetType } from '../types';

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
  nameType: 'hidden' | 'text';
  nameValue: string;
  quantityType: 'hidden' | 'number';
  quantityValue: string;
  amountType: 'hidden' | 'number';
  amountValue: string;
  dateType: 'hidden' | 'date';
  dateValue: string;
};

export const useTradeForm: (props: UseTradeFormProps) => UseTradeFormResult = ({ id, assetType, name, quantity, amount, date }) => {
  const hasId = !!id;
  const nameType = name ? 'hidden' : 'text';
  const quantityType = quantity ? 'hidden' : 'number';
  const amountType = amount ? 'hidden' : 'number';
  const dateType = date ? 'hidden' : 'date';

  const nameValue = name || '';
  const quantityValue = `${quantity || ''}`;
  const amountValue = `${amount || ''}`;
  const dateValue = date?.toLocaleDateString() || '';

  let assetTypeTitle = '';

  switch (assetType) {
    case "forex":
      assetTypeTitle = 'Forex';
      break;
    case "stock":
      assetTypeTitle = 'Stock';
      break;
    case "crypto":
    default:
      assetTypeTitle = 'Crypto';
  }

  return {
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
  };
};
