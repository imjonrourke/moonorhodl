import type { BaseProps, BasicGains, FilingStatus } from '../../../../src/types';

export interface TotalTaxAmountsProps extends BaseProps {
  income: number;
  filingStatus: FilingStatus;
  gains: BasicGains;
  wallet?: null;
}