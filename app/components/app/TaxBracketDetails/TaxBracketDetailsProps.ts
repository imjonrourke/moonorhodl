import type { BaseProps, TaxAmountResult } from '../../../../src/types';

export interface TaxBracketDetailsProps extends BaseProps {
  title: string;
  brackets?: TaxAmountResult[];
}