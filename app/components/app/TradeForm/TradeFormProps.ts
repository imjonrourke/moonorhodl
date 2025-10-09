import type { BaseProps, Trade } from '../../../../src/types';
import type { TradeFormBaseProps } from '~/components/app/TradeFormBase/TradeFormBaseProps';

export interface TradeFormProps extends BaseProps {
  type: TradeFormBaseProps['type'];
  trade?: Trade;
  isUpdate?: boolean;
  onSubmit?: () => void;
}