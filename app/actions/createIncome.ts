import type { ClientActionFunctionArgs } from 'react-router';
import { IncomeGateway } from '../../src/utils/IncomeGateway';
import { filterCurrencyChars } from '../../src/helpers';

export const createIncome = async ({ request }: ClientActionFunctionArgs) => {
  const incomeGateway = IncomeGateway();

  const formData = await request.formData();

  const fdIncome = formData.get('income');
  const fdFilingStatus = formData.get('filingStatus');

  const income = filterCurrencyChars(fdIncome);
  const filingStatus = `${fdFilingStatus}`

  const data = await incomeGateway.updateIncome({ income, filingStatus });

  return data;
};
