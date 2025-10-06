import type { FilingStatus } from '../types';

type CreateBaseIncomeFormData = {
  income: string;
  filingStatus: string;
};

export const CreateBaseIncomeForm: CreateBaseIncomeFormData = {
  income: 'baseIncome.income',
  filingStatus: 'baseIncome.filingStatus',
};

export const CreateBaseIncomeFormValues: Record<FilingStatus, FilingStatus> = {
  single: 'single',
  marriedJointly: 'marriedJointly',
  marriedSeparately: 'marriedSeparately',
  headOfHousehold: 'headOfHousehold',
};
