import { LocalStorage } from '../LocalStorage';
import type { AddTradesHandler, RemoveTradeHandler, RemoveTradesHandler } from './TradeGatewayProps';

export const TradeGateway = () => {
  const localStorage = LocalStorage();

  const addTrades: AddTradesHandler = async (props) => {
    await localStorage.addTradesData(props);
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
};
