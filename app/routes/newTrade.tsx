import type { ClientActionFunctionArgs } from 'react-router';
import { createTrade } from '~/actions/createTrade';
import { TradeGateway } from '../../src/utils/TradeGateway';

export async function clientLoader() {
  const tradeGateway = TradeGateway();
  return await tradeGateway.getTrades();
}

export async function clientAction(args: ClientActionFunctionArgs) {
  return await createTrade(args);
}
