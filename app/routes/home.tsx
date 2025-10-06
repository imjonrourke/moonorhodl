import type { Route } from './+types/home';
import { type ClientActionFunctionArgs, useFetcher, Form } from 'react-router';
import { createTrade } from '~/actions/createTrade';
import { getTrades } from '~/loaders/getTrades';
import { BaseIncomeForm } from '~/components/app/BaseIncomeForm';
import { useHomeLoaderData } from '~/hooks/useHomeLoaderData/useHomeLoaderData';
import { Button } from '~/components/ui/button';
import { TradeForm } from '~/components/app/TradeForm/TradeForm';
import { IncomeTaxAmounts } from '~/components/app/IncomeTaxAmounts';
import { TradeItem } from '~/components/app/TradeItem';
import { FormKeys } from '../../src/utils/constants';
import { getIncome } from '~/loaders/getIncome';
import { HomeHeader } from '../../src/components';
import type { SetTradesDataResult } from '../../src/utils/LocalStorage/LocalStorageProps';
import { useToggle } from '../../src/hooks/useToggle';
import type { FilingStatus } from '../../src/types';

export async function clientLoader() {
  const { data: tradesData, error } = await getTrades();
  const { data: incomeData, error: incomeError } = await getIncome();

  return {
    data: {
      trades: tradesData,
      income: incomeData,
    }
  };
}

export async function clientAction(args:  ClientActionFunctionArgs) {
  return await createTrade(args);
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moon or HODL. The bag calculator." },
    { name: "description", content: "Moon or HODL. The bag calculator." },
  ];
}

export default function Home() {
  const incomeFetcher = useFetcher<SetTradesDataResult>({ key: FormKeys.homeIncome });
  const tradesFetcher = useFetcher<SetTradesDataResult>({ key: FormKeys.homeTrades });
  const { toggle, toggleHandler } = useToggle();

  const { trades, income } = useHomeLoaderData({ trades: tradesFetcher.data?.data?.trades });

  const incomeInfo = income?.income;
  const filingStatusInfo = income?.filingStatus;
  const hasTaxDetails = !!incomeInfo && !!filingStatusInfo;

  return (
    <div>
      <HomeHeader />
      <BaseIncomeForm income={income?.income} filingStatus={income?.filingStatus} />
      {
        hasTaxDetails && (
          <IncomeTaxAmounts income={income?.income} filingStatus={income?.filingStatus as FilingStatus} />
        )
      }
      <Button
        type="button"
        variant="ghost"
        size="default"
        full
        onClick={toggleHandler}
      >
        Add trade
      </Button>
      {
        toggle && (
          <TradeForm type="buy" onSubmit={toggleHandler} />
        )
      }
      {
        trades?.map((trade) => <TradeItem key={trade.id} trade={trade} />)
      }
    </div>
  );
}

/* Trade concept
- initial purchase
- conversion (or sale) price

- federal
- state
- city

*/
