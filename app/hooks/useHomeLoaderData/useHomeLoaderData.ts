import { useLoaderData } from 'react-router';
import type {
  SetBaseIncomeDataProps, SetBaseIncomeDataResult,
  SetTradesDataProps,
  SetTradesDataResult
} from '../../../src/utils/LocalStorage/LocalStorageProps';
import type { BasicGains, FilingStatus } from '../../../src/types';

type UseLoaderDataResult = {
  data: {
    trades: SetTradesDataResult['data'],
    income: SetBaseIncomeDataResult['data'],
    gains: BasicGains,
  },
  error?: SetTradesDataResult['error'],
}

type UseHomeLoaderDataArgs = {
  trades?: SetTradesDataProps['trades'],
  income?: SetBaseIncomeDataProps,
};

type UseHomeLoaderDataResult = {
  trades: SetTradesDataProps['trades'] | null;
  income: {
    income: number;
    filingStatus: FilingStatus;
  } | null,
  gains: BasicGains;
  error?: SetTradesDataResult['error'],
};

export const useHomeLoaderData: (args: UseHomeLoaderDataArgs) => UseHomeLoaderDataResult = ({ trades: tradesArgs, income: incomeArgs }) => {
  const { data, error } = useLoaderData<UseLoaderDataResult>();

  const trades = [...(data?.trades?.trades || []), ...(tradesArgs || [])];
  const income = {
    income:  Number(incomeArgs?.income || data?.income?.income || 0),
    filingStatus: incomeArgs?.filingStatus as FilingStatus || data?.income?.filingStatus as FilingStatus || 'single',
  };
  const gains = data.gains;

  return {
    trades,
    income,
    gains,
    error,
  };
};
