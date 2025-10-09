import type { AssetType, TradeType } from '../types';

export const BASE_INFO = import.meta.env.VITE_BASE_INFO
export const TRADE_INFO = import.meta.env.VITE_TRADE_INFO
export const TRADES_LIST = import.meta.env.VITE_TRADES_LIST

export const YEAR_MILLISECONDS = 1000 * 60 * 60 * 24 * 365;

type AssetTypeTitle = {
  value: AssetType;
  label: string;
};

export const AssetTypeTitles: Record<AssetType, AssetTypeTitle> = {
  crypto: {
    value: 'crypto',
    label: 'Crypto',
  },
  stock: {
    value: 'stock',
    label: 'Stock',
  },
  forex: {
    value: 'forex',
    label: 'Forex',
  },
};

export const FormKeys = {
  homeIncome: 'home:income',
  homeTrades: 'home:trades',
};

export const TradeTitles: Record<TradeType, string> = {
  buy: 'Add',
  sell: 'Sell',
  swap: 'Swap',
};
