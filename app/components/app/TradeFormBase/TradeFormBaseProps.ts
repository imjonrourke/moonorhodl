import type { AssetType, BaseProps, TradeType } from '../../../../src/types';

export interface TradeFormBaseProps extends BaseProps {
  type: TradeType;
  assetType: AssetType;
  id?: number;
  name?: string;
  quantity?: number;
  amount?: number;
  date?: Date;
  isEdit?: boolean;
}
