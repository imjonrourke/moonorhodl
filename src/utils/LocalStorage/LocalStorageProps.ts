import type { FilingStatus, GatewayResult, Trade } from '../../types';

export type SetBaseIncomeDataProps = {
  income: number | string;
  filingStatus: FilingStatus | string;
};

export type SetBaseIncomeDataResult = Omit<GatewayResult<SetBaseIncomeDataProps>, 'fetcher'>;

export type SetBaseIncomeDataHandler = (props: SetBaseIncomeDataProps) => void;
export type GetBaseIncomeDataHandler = () => Promise<SetBaseIncomeDataResult>;

export type SetTradesDataProps = {
  trades: Trade[];
};

export type SetTradesDataResult = Omit<GatewayResult<SetTradesDataProps>, 'fetcher'>;

export type SetTradesDataHandler = (props: SetTradesDataProps) => void;
export type GetTradesDataHandler = () => Promise<SetTradesDataResult>;
export type RemoveTradeDataHandler = (tradeId: number) => Promise<SetTradesDataResult>;
export type RemoveTradesDataHandler = (tradeIds: number[]) => Promise<SetTradesDataResult>;

export type LocalStorageHandler = () => {
  getTradesData: GetTradesDataHandler;
  addTradesData: SetTradesDataHandler;
  removeTradeData: RemoveTradeDataHandler;
  removeTradesData: RemoveTradesDataHandler;
  getBaseIncomeData: GetBaseIncomeDataHandler;
  setBaseIncomeData: SetBaseIncomeDataHandler;
};
