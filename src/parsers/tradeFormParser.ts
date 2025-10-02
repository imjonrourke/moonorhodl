import type { ParseFormDataBase, Trade } from '../types';
import { parseTradeType } from './parseTradeType';
import { parseAssetType } from './parseAssetType';

type CreateTradeFormData = {
  id: string;
  type: string;
  assetType: string;
  name: string;
  quantity: string;
  amount: string;
  date: string;
};

const CreateTradeForm: CreateTradeFormData = {
  id: 'createTrade.id',
  type: 'createTrade.type',
  assetType: 'createTrade.assetType',
  name: 'createTrade.name',
  quantity: 'createTrade.quantity',
  amount: 'createTrade.amount',
  date: 'createTrade.date',
}

export const tradeFormParser: ParseFormDataBase<Trade> = async (request) => {
  const formData = await request.formData();

  const fdId = formData.get(CreateTradeForm.id);
  const fdType = formData.get(CreateTradeForm.type);
  const fdAssetType = formData.get(CreateTradeForm.assetType);
  const fdName = formData.get(CreateTradeForm.name);
  const fdQuantity = formData.get(CreateTradeForm.quantity);
  const fdAmount = formData.get(CreateTradeForm.amount);
  const fdDate = formData.get(CreateTradeForm.date);

  const name = `${fdName || ''}`;
  const quantity = parseInt(`${fdQuantity || 0}`);
  const amount = parseInt(`${fdAmount || 0}`);
  const date = new Date(`${fdDate || ''}`);
  const id = parseInt(`${fdId || 0}`);

  return {
    id,
    type: parseTradeType(fdType),
    assetType: parseAssetType(fdAssetType),
    name,
    quantity,
    amount,
    date,
  };
};
