import type { JSX } from 'react';
import type { BaseProps, Trade } from '../../../../src/types';

export interface TradeFormDialogProps extends BaseProps {
  trade?: Trade;
  isUpdate?: boolean;
  Trigger: JSX.Element;
}