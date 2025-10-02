import type { TradeType } from '../types';

export const parseTradeType = (val: FormDataEntryValue | null): TradeType => {
  switch (val) {
    case 'sell':
      return 'sell';
    case 'swap':
      return 'swap';
    case 'buy':
    default:
      return 'buy';
  }
};
