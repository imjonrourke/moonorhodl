import type { ClientActionFunctionArgs } from 'react-router';
import type { SetTradesDataResult } from '../../src/utils/LocalStorage/LocalStorageProps';
import { tradeFormParser } from '../../src/parsers/tradeFormParser';
import { TradeGateway } from '../../src/utils/TradeGateway';

type CreateTradeResult =  Promise<SetTradesDataResult>;

export const createTrade = async ({ request }: ClientActionFunctionArgs): CreateTradeResult => {
  const tradeGateway = TradeGateway();

  const tradeForm = await tradeFormParser(request);

  // TODO: validate tradeForm
  const { data, error } = await tradeGateway.addTrade({
    trade: tradeForm,
  });

  return {
    data,
    error,
  };
};
