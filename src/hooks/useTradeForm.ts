import type { AssetType, Trade, TradeType } from '../types';
import { AssetTypeTitles, TradeTitles } from '../utils/constants';

type UseTradeFormProps = Partial<Trade> & Pick<Trade, 'assetType' | 'type'> & { isUpdate?: boolean };

type UseTradeFormResult = {
  hasId: boolean;
  assetTypeTitle: string;
  nameValue: string;
  quantityValue: string;
  amountValue: string;
  dateValue: string;
  type: TradeType;
  title: string;
};

export const useTradeForm: (props: UseTradeFormProps) => UseTradeFormResult = ({ id, assetType, name, quantity, amount, date, type, isUpdate }) => {
  const hasId = !!id;

  const nameValue = name || '';
  const quantityValue = `${quantity || '1'}`;
  const amountValue = `${amount || '0'}`;
  const dateValue = date ? new Date(date).toLocaleDateString() : '';

  const assetTypeTitle = AssetTypeTitles[assetType].label;

  const typeValue = isUpdate ? 'buy' : type;
  const title = isUpdate ? 'Update' : TradeTitles[type];

  return {
    type: typeValue,
    title,
    hasId,
    assetTypeTitle,
    nameValue,
    quantityValue,
    amountValue,
    dateValue,
  };
};
