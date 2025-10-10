type SetTradeFormData = {
  id: string;
  type: string;
  assetType: string;
  name: string;
  quantity: string;
  amount: string;
  date: string;
  pricePerUnit: string;
  fee: string;
};

export const SetTradeForm: SetTradeFormData = {
  id: 'setTrade.id',
  type: 'setTrade.type',
  assetType: 'setTrade.assetType',
  name: 'setTrade.name',
  quantity: 'setTrade.quantity',
  amount: 'setTrade.amount',
  date: 'setTrade.date',
  pricePerUnit: 'setTrade.pricePerUnit',
  fee: 'setTrade.fee',
};
