import { useLoaderData } from 'react-router';
import type { SetTradesDataProps, SetTradesDataResult } from '../../../src/utils/LocalStorage/LocalStorageProps';

type UseHomeLoaderDataArgs = {
  trades?: SetTradesDataProps['trades'],
};

type UseHomeLoaderDataResult = {
  trades: SetTradesDataProps['trades'],
  error: SetTradesDataResult['error'],
};

export const useHomeLoaderData: (args: UseHomeLoaderDataArgs) => UseHomeLoaderDataResult = ({ trades: tradesArgs }) => {
  const { data, error } = useLoaderData<SetTradesDataResult>();
  const trades = [...(data?.trades || []), ...(tradesArgs || [])];

  return {
    trades,
    error,
  };
};
