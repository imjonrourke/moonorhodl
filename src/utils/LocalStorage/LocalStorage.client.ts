import { TRADES_LIST, BASE_INFO } from '../constants';
import {
  type SetBaseIncomeDataHandler,
  type GetBaseIncomeDataHandler,
  type SetTradesDataHandler,
  type GetTradesDataHandler,
  type RemoveTradesDataHandler,
  type RemoveTradeDataHandler,
  type LocalStorageHandler,
} from './LocalStorageProps';

export const LocalStorage: LocalStorageHandler = () => {
  const getTradesData: GetTradesDataHandler = () => {
    const tradesData = window.localStorage.getItem(TRADES_LIST);

    let trades = { trades: [] };
    if (tradesData) {
      try {
        trades = JSON.parse(tradesData) as SetTradesDataProps;
      } catch(e) {

      }
    }
    return trades;
  };

  const setTradesData: SetTradesDataHandler = (props) => {

    window.localStorage.setItem(TRADES_LIST, JSON.stringify(props));
  };

  const addTradesData: SetTradesDataHandler = ({ trades }) => {
    const currentTrades = getTradesData();

    const tradesWithIds = trades.map((trade, index) => ({
      ...trade,
      id: currentTrades.trades[currentTrades.trades.length - 1].id + index + 1,
    }));

    const newTrades = [...currentTrades.trades, ...tradesWithIds];

    setTradesData(newTrades);
  };

  const removeTradeData: RemoveTradeDataHandler = (tradeId: number) => {
    const currentTrades = getTradesData();

    const newTrades = currentTrades.filter((trade) => trade.id !== tradeId);

    setTradesData({ ...currentTrades, trades: newTrades });
  };

  const removeTradesData: RemoveTradesDataHandler = (tradeIds: number[]) => {
    const currentTrades = getTradesData();

    const newTrades = currentTrades.filter((trade) => !tradeIds.find((id) => id === trade.id));

    setTradesData({ ...currentTrades, trades: newTrades });
  };

  const getBaseIncomeData: GetBaseIncomeDataHandler = () => {
    const baseIncomeData = window.localStorage.getItem(BASE_INFO);

    let income = '', filingStatus = '';

    if (baseIncomeData) {
      try {
        const result = JSON.parse(baseIncomeData);
        income = result.income;
        filingStatus = result.filingStatus;

        return {
          income,
          filingStatus,
        };
      } catch(e) {}
    }

    return {
      income,
      filingStatus,
    };
  };

  const setBaseIncomeData: SetBaseIncomeDataHandler = ({ income, filingStatus }) => {
    window.localStorage.setItem(BASE_INFO, JSON.stringify({ income, filingStatus }));
  };

  return {
    getTradesData,
    addTradesData,
    removeTradeData,
    removeTradesData,
    getBaseIncomeData,
    setBaseIncomeData,
  };
};
