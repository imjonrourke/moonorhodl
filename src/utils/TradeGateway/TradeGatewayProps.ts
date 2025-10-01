import type {
  RemoveTradeDataHandler,
  RemoveTradesDataHandler,
  SetTradesDataHandler,
} from '../LocalStorage/LocalStorageProps';

export type AddTradesHandler = SetTradesDataHandler;
export type RemoveTradeHandler = RemoveTradeDataHandler;
export type RemoveTradesHandler = RemoveTradesDataHandler;

export type TradeGatewayHandler = () => {
  addTrades: AddTradesHandler;
  removeTrade: RemoveTradeHandler;
  removeTrades: RemoveTradesDataHandler;
};
