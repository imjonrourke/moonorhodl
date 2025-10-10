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
import type { FilingStatus } from '../../src/types';
import { AddTradeForm } from '~/components/app/AddTradeForm';
import { BasicCapitalGainsForm } from '~/components/app/BasicCapitalGainsForm';

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

  const { trades, income } = useHomeLoaderData({ trades: tradesFetcher.data?.data?.trades });

  const incomeInfo = income?.income;
  const filingStatusInfo = income?.filingStatus;
  const hasTaxDetails = !!incomeInfo && !!filingStatusInfo;

  return (
    <div className="flex justify-center">
      <div className="pt-6 grid w-full max-w-sm gap-6">
        <HomeHeader />
        <BaseIncomeForm
          income={income?.income}
          filingStatus={income?.filingStatus}
        />
        <BasicCapitalGainsForm />
        <div className="flex flex-col gap-6">
          {
            trades?.map((trade) => <TradeItem key={trade.id} trade={trade} />)
          }
        </div>
        <AddTradeForm />
        {
          hasTaxDetails && (
            <IncomeTaxAmounts income={incomeInfo as number} filingStatus={filingStatusInfo as FilingStatus} />
          )
        }
      </div>
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
