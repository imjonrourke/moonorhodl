import type { ClientActionFunctionArgs } from 'react-router';
import { IncomeGateway } from '../../src/utils/IncomeGateway';

export const createIncome = async ({ request }: ClientActionFunctionArgs) => {
  const incomeGateway = IncomeGateway();

  const formData = await request.formData();

  const fdIncome = formData.get('income');
  const fdFilingStatus = formData.get('filingStatus');

  const income = `${fdIncome || 0}`;
  const filingStatus = `${fdFilingStatus}`

  const data = await incomeGateway.updateIncome({ income, filingStatus });

  return data;
};
