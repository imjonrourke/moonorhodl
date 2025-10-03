import { LocalStorage } from '../LocalStorage';
import type { SetBaseIncomeDataProps } from '../LocalStorage/LocalStorageProps';

export const IncomeGateway = () => {
  const localStorage = LocalStorage();

  const getIncome = async () => {
    return localStorage.getBaseIncomeData();
  };
  const setIncome = async (props: SetBaseIncomeDataProps) => {
    localStorage.setBaseIncomeData(props);

    return props;
  };
  const updateIncome = async (props: SetBaseIncomeDataProps) => {
    return await setIncome(props);
  };

  return {
    getIncome,
    updateIncome,
  };
};
