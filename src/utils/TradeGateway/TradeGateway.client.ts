import { LocalStorage } from '../LocalStorage';

export const TradeGateway = () => {
  const localStorage = LocalStorage();

  const addTrades = (props) => {
    localStorage.addTradesData(props);
  };
  const removeTrade = (tradeId: number) => {
    localStorage.removeTradeData(tradeId);
  };
  const removeTrades = (tradeIds: number[]) => {
    localStorage.removeTradesData(tradeIds);
  };
};
