import type { BaseProps } from '../../../../src/types';
import type { TradeFormBaseProps } from '~/components/app/TradeFormBase/TradeFormBaseProps';

export interface TradeFormProps extends BaseProps {
  type: TradeFormBaseProps['type'];
  onSubmit?: () => void;
}