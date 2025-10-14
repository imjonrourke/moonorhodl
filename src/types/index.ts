export * from './BaseProps';
export * from './FormData';
export * from './api';

export type FilingStatus = 'single' | 'marriedJointly' | 'marriedSeparately' | 'headOfHousehold';
export type TaxType = 'federal' | 'state' | 'city';
export type TransactionType = 'buy' | 'sell';
export type TradeType = TransactionType | 'swap';
export type AssetType = 'crypto' | 'forex' | 'stock';

export type TaxBracketLimit = {
  limit: number;
  rate: number;
};

export type TaxBracket = Record<TaxType, TaxBracketLimit>;
export type TaxRate = Record<FilingStatus, TaxBracketLimit[]>;
export type TaxTypeResult = Record<TaxType, TaxBracketLimit[]>;

export type WalletAsset = {
  assetType: AssetType;
  name: string;
  quantity: number;
  trades: Trade[];
};

export type Wallet = Record<AssetType, WalletAsset>;

type UpdatedTrade = {
  id: number;
  type: TradeType;
  transactionId: number;
  swapTransactionIds?: number[];
};

export type Trade = {
  type: TradeType;
  id: number;
  assetType: AssetType;
  name: string;
  amount: number;
  quantity: number;
  date: Date;
  referenceIds?: number;
};

export type NewTrade = Omit<Trade, 'id'>;

export type TaxAmountResult = {
  taxes: number;
  bracket: TaxBracketLimit;
};

export type Fee = {
  type: 'fixed' | 'percent';
  amount: number;
};

export type Transaction = {
  id: number;
  type: TransactionType;
  assetType: AssetType;
  name: string;
  amount: number;
  quantity: number;
  fee: number;
  date: Date;
};

export type BasicGains = {
  shortTermCost: number;
  shortTermAmount: number;
  longTermCost: number;
  longTermAmount: number;
};
