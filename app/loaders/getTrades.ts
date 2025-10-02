import { TradeGateway } from '../../src/utils/TradeGateway';

export const getTrades = async () => {
  const tradeGateway = TradeGateway();

  return await tradeGateway.getTrades();
}
