type CreateTradeFormData = {
  id: string;
  type: string;
  assetType: string;
  name: string;
  quantity: string;
  amount: string;
  date: string;
};

export const CreateTradeForm: CreateTradeFormData = {
  id: 'createTrade.id',
  type: 'createTrade.type',
  assetType: 'createTrade.assetType',
  name: 'createTrade.name',
  quantity: 'createTrade.quantity',
  amount: 'createTrade.amount',
  date: 'createTrade.date',
};
