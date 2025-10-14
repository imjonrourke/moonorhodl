import { TRADES_LIST, BASE_INFO, BASIC_CAPITAL_GAINS } from '../constants';
import {
  type SetBaseIncomeDataHandler,
  type GetBaseIncomeDataHandler,
  type SetTradesDataHandler,
  type GetTradesDataHandler,
  type RemoveTradesDataHandler,
  type RemoveTradeDataHandler,
  type LocalStorageHandler,
  type SetTradesDataProps,
  type AddTradesDataHandler,
  type UpdateTradeDataHandler, type GetBasicGainsHandler,
} from './LocalStorageProps';

export const LocalStorage: LocalStorageHandler = () => {
  const getTradesData: GetTradesDataHandler = async () => {
    return new Promise((resolve, reject) => {
      const tradeList = window.localStorage.getItem(TRADES_LIST);
      let data: SetTradesDataProps = {
        trades: [],
      };

      if (tradeList) {
        try {
          data = JSON.parse(tradeList) as SetTradesDataProps;
          resolve({ data, error: null });
        } catch (e) {
          resolve(
            {
              data: null,
              error: {
                status: 503,
                message: 'invalid',
              },
            },
          );
        }
      }

      resolve({ data, error: null });
    });
  };

  const setTradesData: SetTradesDataHandler = (props) => {
    window.localStorage.setItem(TRADES_LIST, JSON.stringify(props));
  };

  const addTradesData: AddTradesDataHandler = async ({ trades }) => {
    const { data } = await getTradesData();

    const tradesWithIds = trades.map((trade, index) => ({
      ...trade,
      id: (data?.trades[data?.trades.length - 1]?.id || 0) + index + 1,
    }));

    const newTrades = {
      ...data,
      trades: [...(data?.trades || []), ...tradesWithIds],
  };

    setTradesData(newTrades);

    return {
      data: newTrades,
      error: null,
    };
  };

  const updateTradeData: UpdateTradeDataHandler = async ({ trade }) => {
    const { data } = await getTradesData();

    const updatedTrades = data?.trades.map((currentTrade) => {
      if (currentTrade.id === trade.id) {
        return trade;
      }

      return currentTrade;
    }) || [];

    setTradesData({ trades: updatedTrades });

    return {
      data: {
        trades: updatedTrades,
      },
      error: null,
    };
  };

  const removeTradeData: RemoveTradeDataHandler = async (tradeId: number) => {
    const { data } = await getTradesData();

    const newTrades = {
      ...data,
      trades: data?.trades.filter((trade) => trade.id !== tradeId) || [],
    };

    if (data?.trades.length === newTrades.trades.length) {
      return {
        data: null,
        error: {
          status: 404,
          message: 'Trade not found',
        },
      };
    }

    setTradesData(newTrades);

    return {
      data: newTrades,
      error: null,
    };
  };

  const removeTradesData: RemoveTradesDataHandler = async (tradeIds: number[]) => {
    const { data } = await getTradesData();

    const newTrades = {
      ...data,
      trades: data?.trades.filter((trade) => !tradeIds.find((id) => id === trade.id)) || []
    };

    if (data?.trades.length === newTrades.trades.length) {
      return {
        data: null,
        error: {
          status: 404,
          message: 'trade ids not found',
        },
      };
    }

    setTradesData(newTrades);

    return {
      data: newTrades,
      error: null,
    };
  };

  const getBaseIncomeData: GetBaseIncomeDataHandler = async () => {
    return new Promise((resolve, reject) => {
      const data = {
        income: '',
        filingStatus: '',
      };

      const baseIncomeData = window.localStorage.getItem(BASE_INFO);

      if (baseIncomeData) {
        try {
          const result = JSON.parse(baseIncomeData);
          data.income = result.income;
          data.filingStatus = result.filingStatus;

          resolve({ data,  error: null });
        } catch (e) {
          resolve({
            data: null,
            error: {
              status: 503,
              message: 'invalid',
            },
          });
        }
      }

      resolve({ data,  error: null });
    });
  };

  const setBaseIncomeData: SetBaseIncomeDataHandler = ({ income, filingStatus }) => {
    window.localStorage.setItem(BASE_INFO, JSON.stringify({ income, filingStatus }));
  };

  const getBasicGainsData: GetBasicGainsHandler = async () => {
    return new Promise((resolve, reject) => {
      const basicGains = window.localStorage.getItem(BASIC_CAPITAL_GAINS);

      const data = {
        shortTermCost: 0,
        shortTermAmount: 0,
        longTermCost: 0,
        longTermAmount: 0,
      };

      if (basicGains) {
        try {
          const result = JSON.parse(basicGains);
          data.shortTermCost = result.shortTermCost;
          data.shortTermAmount = result.shortTermAmount;
          data.longTermCost = result.longTermCost;
          data.longTermAmount = result.longTermAmount;

          resolve({ data, error: null });
        } catch (e) {
          resolve({
            data: null,
            error: {
              status: 503,
              message: 'invalid',
            },
          });
        }
      }

      resolve({ data, error: null });
    });
  };

  return {
    getTradesData,
    addTradesData,
    updateTradeData,
    removeTradeData,
    removeTradesData,
    getBaseIncomeData,
    setBaseIncomeData,
    getBasicGainsData,
  };
};
