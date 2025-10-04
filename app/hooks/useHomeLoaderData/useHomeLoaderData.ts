import { useLoaderData } from 'react-router';
import type {
  SetBaseIncomeDataProps, SetBaseIncomeDataResult,
  SetTradesDataProps,
  SetTradesDataResult
} from '../../../src/utils/LocalStorage/LocalStorageProps';

type UseLoaderDataResult = {
  data: {
    trades: SetTradesDataResult['data'],
    income: SetBaseIncomeDataResult['data'],
  },
  error?: SetTradesDataResult['error'],
}

type UseHomeLoaderDataArgs = {
  trades?: SetTradesDataProps['trades'],
};

type UseHomeLoaderDataResult = {
  trades: SetTradesDataProps['trades'] | null,
  income: SetBaseIncomeDataProps | null,
  error?: SetTradesDataResult['error'],
};

export const useHomeLoaderData: (args: UseHomeLoaderDataArgs) => UseHomeLoaderDataResult = ({ trades: tradesArgs }) => {
  const { data, error } = useLoaderData<UseLoaderDataResult>();
  const trades = [...(data?.trades?.trades || []), ...(tradesArgs || [])];
  return {
    trades,
    income: data?.income,
    error,
  };
};
