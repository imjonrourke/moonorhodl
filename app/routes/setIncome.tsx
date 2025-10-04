import type { ClientActionFunctionArgs } from 'react-router';
import { createIncome } from '~/actions/createIncome';
import { IncomeGateway } from '../../src/utils/IncomeGateway';

export const clientLoader = async () => {
  const incomeGateway = IncomeGateway();

  return await incomeGateway.getIncome();
};

export const clientAction = async (args: ClientActionFunctionArgs) => {
  return await createIncome(args);
};
