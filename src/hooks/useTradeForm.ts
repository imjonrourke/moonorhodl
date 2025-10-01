type UseTradeFormProps = {
  id?: number;
  name?: string;
  quantity?: number;
  amount?: number;
  date?: Date;
};

type UseTradeFormResult = {
  hasId: boolean;
  nameType: 'hidden' | 'text';
  nameValue: string;
  quantityType: 'hidden' | 'number';
  quantityValue: string;
  amountType: 'hidden' | 'number';
  amountValue: string;
  dateType: 'hidden' | 'text';
  dateValue: string;
};

export const useTradeForm: (props: UseTradeFormProps) => UseTradeFormResult = ({ id, name, quantity, amount, date }) => {
  const hasId = !!id;
  const nameType = name ? 'hidden' : 'text';
  const quantityType = quantity ? 'hidden' : 'number';
  const amountType = amount ? 'hidden' : 'number';
  const dateType = date ? 'hidden' : 'text';

  const nameValue = name || '';
  const quantityValue = `${quantity || ''}`;
  const amountValue = `${amount || ''}`;
  const dateValue = date?.toLocaleDateString() || '';

  return {
    hasId,
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
