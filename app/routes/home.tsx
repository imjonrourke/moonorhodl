import type { Route } from './+types/home';
import { type ClientActionFunctionArgs, useFetcher, Form } from 'react-router';
import { createTrade } from '~/actions/createTrade';
import { getTrades } from '~/loaders/getTrades';
import { BaseIncomeForm } from '~/components/app/BaseIncomeForm';
import { useHomeLoaderData } from '~/hooks/useHomeLoaderData/useHomeLoaderData';
import { TradeFormBase } from '~/components/app/TradeFormBase';
import { HomeHeader } from '../../src/components';
import type { SetTradesDataResult } from '../../src/utils/LocalStorage/LocalStorageProps';
import { Button } from '~/components/ui/button';
import { useToggle } from '../../src/hooks/useToggle';
import { TradeForm } from '~/components/app/TradeForm/TradeForm';

export async function clientLoader() {
  return await getTrades();
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
  const fetcher = useFetcher<SetTradesDataResult>({ key: 'home:income' });
  const { toggle, toggleHandler } = useToggle();

  const { trades } = useHomeLoaderData({ trades: fetcher.data?.data?.trades });

  return (
    <div>
      <HomeHeader />
      <BaseIncomeForm />
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
    </div>
  );
}

/* Trade concept
- initial purchase
- conversion (or sale) price

- single
- married jointly
- married separately

- federal
- state
- city

type FilingStatus = 'single' | 'marriedJointly' | 'marriedSeparately';

const shortTermLimits: Record<FilingStatus, number[]> = {
  single: [],
};

const longTermLimits = [
  {},
]

- 100,000 =

*/
