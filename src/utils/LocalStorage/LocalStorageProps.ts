import type { BasicGains, FilingStatus, GatewayResult, Trade } from '../../types';

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

export type SetTradeDataProps = {
  trade: Trade;
};

export type SetTradesDataResult = Omit<GatewayResult<SetTradesDataProps>, 'fetcher'>;

export type GetTradesDataHandler = () => Promise<SetTradesDataResult>;
export type SetTradesDataHandler = (props: SetTradesDataProps) => void;
export type AddTradesDataHandler = (props: SetTradesDataProps) =>  Promise<SetTradesDataResult>;
export type UpdateTradeDataHandler = (props: SetTradeDataProps) =>  Promise<SetTradesDataResult>;
export type RemoveTradeDataHandler = (tradeId: number) => Promise<SetTradesDataResult>;
export type RemoveTradesDataHandler = (tradeIds: number[]) => Promise<SetTradesDataResult>;

export type SetBasicGainsResult = Omit<GatewayResult<BasicGains>, 'fetcher'>;

export type GetBasicGainsHandler = () => Promise<SetBasicGainsResult>;

export type LocalStorageHandler = () => {
  getTradesData: GetTradesDataHandler;
  addTradesData: AddTradesDataHandler;
  updateTradeData: UpdateTradeDataHandler;
  removeTradeData: RemoveTradeDataHandler;
  removeTradesData: RemoveTradesDataHandler;
  getBaseIncomeData: GetBaseIncomeDataHandler;
  setBaseIncomeData: SetBaseIncomeDataHandler;
  getBasicGainsData: GetBasicGainsHandler;
};
