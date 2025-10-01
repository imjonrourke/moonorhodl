import type { FilingStatus, Trade } from '../../types';

export type SetBaseIncomeDataProps = {
  income: number | string;
  filingStatus: FilingStatus | string;
};
export type SetBaseIncomeDataHandler = (props: SetBaseIncomeDataProps) => void;
export type GetBaseIncomeDataHandler = () => SetBaseIncomeDataProps;

export type SetTradesDataProps = {
  trades: Trade[];
};
export type SetTradesDataHandler = (props: SetTradesDataProps) => void;
export type GetTradesDataHandler = () => SetTradesDataProps;
export type RemoveTradeDataHandler = (tradeId: number) => SetTradesDataProps;
export type RemoveTradesDataHandler = (tradeIds: number[]) => SetTradesDataProps;

export type LocalStorageHandler = () => {
  getTradesData: GetTradesDataHandler;
  addTradesData: SetTradesDataHandler;
  removeTradeData: RemoveTradeDataHandler;
  removeTradesData: RemoveTradesDataHandler;
  getBaseIncomeData: GetBaseIncomeDataHandler;
  setBaseIncomeData: SetBaseIncomeDataHandler;
};
