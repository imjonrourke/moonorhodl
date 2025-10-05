import { IncomeGateway } from '../../src/utils/IncomeGateway';

export const getIncome = async () => {
  const incomeGateway = IncomeGateway();

  return await incomeGateway.getIncome();
}
