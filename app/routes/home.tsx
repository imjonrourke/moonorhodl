import type { Route } from './+types/home';
import { type ClientLoaderFunctionArgs, type ClientActionFunctionArgs, useFetcher } from 'react-router';
import * as FederalIncomeTaxRates from '../../taxRates/2025/income/federal.json';
import * as FederalLongTermGainsTaxRates from '../../taxRates/2025/capitalGains/longTerm.json';
import { HomeHeader, BaseIncomeForm } from '../../src/components';
import { useLogTrades } from '../../src/hooks';

const incomeTaxRates = {
  federal: FederalIncomeTaxRates,
  state: null,
  city: null,
};

const gainsTaxRates = {
  shortTerm: FederalIncomeTaxRates,
  longTerm: FederalLongTermGainsTaxRates,
};

export function clientLoader({ params, request, context }: ClientLoaderFunctionArgs) {
  return;
}

export function clientAction({ params, request, context }:  ClientActionFunctionArgs) {

}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Moon or HODL. The bag calculator." },
    { name: "description", content: "Moon or HODL. The bag calculator." },
  ];
}

export default function Home() {
  const fetcher = useFetcher();

  const {
    trades,
    addTrade,
    removeTrade,
  } = useLogTrades();

  return (
    <div>
      <HomeHeader />
      <fetcher.Form onSubmit={(event) => {}}>
        <BaseIncomeForm />
        {
          trades.map((trade) => (
            <div>{trade.amount}</div>
          ))
        }
      </fetcher.Form>
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
