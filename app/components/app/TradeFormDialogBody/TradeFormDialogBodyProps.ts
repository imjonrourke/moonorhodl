import type { BaseProps, Trade } from '../../../../src/types';

export interface TradeFormDialogBodyProps extends BaseProps {
  trade?: Trade;
  isUpdate?: boolean;
}