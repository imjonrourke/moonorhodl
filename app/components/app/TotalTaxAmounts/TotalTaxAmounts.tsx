import { Emoji } from '~/components/app/Emoji';
import { TaxBracketDetails } from '~/components/app/TaxBracketDetails';
import type { FunctionComponent } from 'react';
import type { TotalTaxAmountsProps } from '~/components/app/TotalTaxAmounts/TotalTaxAmountsProps';
import { useTotalTaxAmounts } from '~/hooks/useTotalTaxAmounts';

export const TotalTaxAmounts: FunctionComponent<TotalTaxAmountsProps> = ({ income, filingStatus, gains }) => {
  const { federalTax, federalTaxBrackets, effectiveTaxRate, afterTaxIncome } = useTotalTaxAmounts({ income, filingStatus, gains });

  return (
    <div className="flex flex-col w-full">
      <p className="flex flex-col items-center justify-center text-center mb-4">
        <span className="text-xl font-bold">Your bag <Emoji emoji="moneyBag" /></span>
        <strong className="text-6xl font-bold tracking-tighter"><sup className="mt-1">$</sup>{afterTaxIncome}</strong>
      </p>
      <div className="flex items-center justify-between">
        <p className="flex flex-col text-xl items-center justify-center text-left">
          <span>What you owe <Emoji emoji="flagUS" /></span>
          <strong className="font-bold tracking-tighter">${federalTax}</strong>
        </p>
        <p className="flex flex-col text-xl items-center justify-center text-left">
          <span>Effective tax rate</span>
          <strong className="font-bold tracking-tighter">{effectiveTaxRate}%</strong>
        </p>
      </div>
      <TaxBracketDetails
        title="Tax details"
        brackets={federalTaxBrackets}
      />
    </div>
  );
};
