import { LocalStorage } from '../LocalStorage';
import type {
  AddTradeHandler,
  AddTradesHandler,
  RemoveTradeHandler,
  RemoveTradesHandler,
  TradeGatewayHandler,
  UpdateTradeHandler,
} from './TradeGatewayProps';
import type { GetTradesDataHandler } from '../LocalStorage/LocalStorageProps';

export const TradeGateway: TradeGatewayHandler = () => {
  const localStorage = LocalStorage();

  const getTrades: GetTradesDataHandler = async () => {
    return localStorage.getTradesData();
  }

  const addTrade: AddTradeHandler = async (args) => {
    return localStorage.addTradesData({
      trades: [args.trade],
    });
  };

  const updateTrade: UpdateTradeHandler = async (args) => {
    return localStorage.updateTradeData(args);
  };

  const addTrades: AddTradesHandler = async (args) => {
    return localStorage.addTradesData(args);
  };

  const removeTrade: RemoveTradeHandler = async (tradeId: number) => {
    const { data, error } = await localStorage.removeTradeData(tradeId);

    if (error?.status === 404) {
      return {
        data,
        error: {
          ...error,
          message: 'Can\'t find trade to remove',
        },
      }
    }

    return {
      data,
      error,
    };
  };

  const removeTrades: RemoveTradesHandler = async (tradeIds: number[]) => {
    const { data, error } = await localStorage.removeTradesData(tradeIds);

    if (error?.status === 404) {
      return {
        data,
        error: {
          ...error,
          message: 'Can\'t find trades to remove',
        },
      };
    }

    return localStorage.getTradesData();
  };

  return {
    getTrades,
    addTrade,
    addTrades,
    updateTrade,
    removeTrade,
    removeTrades
  };
};
