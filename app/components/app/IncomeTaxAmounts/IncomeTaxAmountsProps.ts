import type { BaseProps, FilingStatus } from '../../../../src/types';

export interface IncomeTaxAmountsProps extends BaseProps {
  income: number;
  filingStatus: FilingStatus;
}
