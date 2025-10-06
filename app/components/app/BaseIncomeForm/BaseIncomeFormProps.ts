import type { BaseProps, FilingStatus } from '../../../../src/types';

export interface BaseIncomeFormProps extends BaseProps {
  income?: number;
  filingStatus?: FilingStatus,
}