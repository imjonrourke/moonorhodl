import type { BaseProps } from '../../types';

export type TradeType = 'buy' | 'sell' | 'swap';

export interface TradeFormProps extends BaseProps {
  type: TradeType;
  id?: number;
  name?: string;
  quantity?: number;
  amount?: number;
  date?: Date;
}
