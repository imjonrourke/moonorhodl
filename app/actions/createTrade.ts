import type { ClientActionFunctionArgs } from 'react-router';
import { tradeFormParser } from '../../src/parsers/tradeFormParser';
import { TradeGateway } from '../../src/utils/TradeGateway';

export const createTrade = async ({ request }: ClientActionFunctionArgs) => {
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
