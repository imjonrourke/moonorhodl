import { SetTradeForm } from '../forms/SetTradeForm';
import type { ParseFormDataBase, Trade } from '../types';
import { parseTradeType } from './parseTradeType';
import { parseAssetType } from './parseAssetType';
import { filterCurrencyChars } from '../helpers';

export const tradeFormParser: ParseFormDataBase<Trade> = async (request) => {
  const formData = await request.formData();

  const fdId = formData.get(SetTradeForm.id);
  const fdType = formData.get(SetTradeForm.type);
  const fdAssetType = formData.get(SetTradeForm.assetType);
  const fdName = formData.get(SetTradeForm.name);
  const fdQuantity = formData.get(SetTradeForm.quantity);
  const fdAmount = formData.get(SetTradeForm.amount);
  const fdDate = formData.get(SetTradeForm.date);

  const name = `${fdName || ''}`;
  const quantity = parseInt(`${fdQuantity || 0}`);
  const amount = filterCurrencyChars(fdAmount);
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
