export * from './BaseProps';
export * from './FormData';
export * from './api';

export type FilingStatus = 'single' | 'marriedJointly' | 'marriedSeparately' | 'headOfHousehold';
export type TaxType = 'federal' | 'state' | 'city';
export type TradeType = 'buy' | 'sell' | 'swap';
export type AssetType = 'crypto' | 'forex' | 'stock';

export type TaxBracketLimit = {
  limit: number;
  rate: number;
};

export type TaxBracket = Record<TaxType, TaxBracketLimit>;
export type TaxRate = Record<FilingStatus, TaxBracketLimit[]>;
export type TaxTypeResult = Record<TaxType, TaxBracketLimit[]>;

export type Trade = {
  type: TradeType;
  id: number;
  assetType: AssetType;
  name: string;
  amount: number;
  quantity: number;
  date: Date;
};

export type NewTrade = Omit<Trade, 'id'>;
