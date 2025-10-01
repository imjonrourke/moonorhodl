import { useState } from 'react';
import type { NewTrade, Trade } from '../types';

type AddTradeHandler = (newTrade: NewTrade) => void;
type RemoveTradeHandler = (id: number) => void;

interface UseLogTradesResult {
  trades: Trade[];
  addTrade: AddTradeHandler;
  removeTrade: RemoveTradeHandler;
}

export const useLogTrades: () => UseLogTradesResult = () => {
  const [trades, setTrades] = useState<Trade[]>([]);

  const addTrade: AddTradeHandler = (newTrade) => {
    setTrades((currentTrades) => {
      const id = currentTrades[currentTrades.length - 1]?.id || 1;

      const trade = {
        id,
        ...newTrade,
      };

      return [...currentTrades, trade];
    });
  };

  const removeTrade: RemoveTradeHandler = (id) => {
    setTrades((currentTrades) => {
      return currentTrades.filter((trade) => trade.id !== id);
    })
  };

  return {
    trades,
    addTrade,
    removeTrade,
  };
};
