import type { ClientActionFunctionArgs } from 'react-router';
import { IncomeGateway } from '../../src/utils/IncomeGateway';
import { filterCurrencyChars } from '../../src/helpers';
import { CreateBaseIncomeForm } from '../../src/forms/BaseIncomeForm';

export const createIncome = async ({ request }: ClientActionFunctionArgs) => {
  const incomeGateway = IncomeGateway();

  const formData = await request.formData();

  const fdIncome = formData.get(CreateBaseIncomeForm.income);

  const fdFilingStatus = formData.get(CreateBaseIncomeForm.filingStatus);

  const income = filterCurrencyChars(fdIncome);

  const filingStatus = fdFilingStatus && `${fdFilingStatus}` || '';

  // TODO: parse form data
  // TODO: validate form data
  const data = await incomeGateway.updateIncome({ income, filingStatus });

  return data;
};
