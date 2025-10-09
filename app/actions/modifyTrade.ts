import type { ClientActionFunctionArgs } from 'react-router';
import { TradeGateway } from '../../src/utils/TradeGateway';
import { tradeFormParser } from '../../src/parsers/tradeFormParser';

export const modifyTrade = async ({ request }: ClientActionFunctionArgs) => {
  const tradeGateway = TradeGateway();

  const tradeForm = await tradeFormParser(request);

  const { data, error } = await tradeGateway.updateTrade({
    trade: tradeForm,
  });

  return {
    data,
    error,
  };
};
