import type {
  GetTradesDataHandler,
  RemoveTradeDataHandler,
  RemoveTradesDataHandler,
  SetTradeDataProps,
  SetTradesDataProps,
  SetTradesDataResult,
} from '../LocalStorage/LocalStorageProps';

export type AddTradeHandler = (props: SetTradeDataProps) => Promise<SetTradesDataResult>;
export type AddTradesHandler = (props: SetTradesDataProps) => Promise<SetTradesDataResult>;
export type UpdateTradeHandler = (props: SetTradeDataProps) => Promise<SetTradesDataResult>;
export type RemoveTradeHandler = RemoveTradeDataHandler;
export type RemoveTradesHandler = RemoveTradesDataHandler;

export type TradeGatewayHandler = () => {
  getTrades: GetTradesDataHandler;
  addTrade: AddTradeHandler;
  addTrades: AddTradesHandler;
  updateTrade: UpdateTradeHandler;
  removeTrade: RemoveTradeHandler;
  removeTrades: RemoveTradesDataHandler;
};
