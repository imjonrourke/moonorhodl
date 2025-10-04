import { IncomeGateway } from '../../src/utils/IncomeGateway';

export const getIncome = async () => {
  const incomeGateway = IncomeGateway();
console.log('getIncome');
  return await incomeGateway.getIncome();
}
