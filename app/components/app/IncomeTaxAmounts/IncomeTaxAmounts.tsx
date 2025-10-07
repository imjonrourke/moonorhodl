import type { FunctionComponent } from 'react';
import type { IncomeTaxAmountsProps } from '~/components/app/IncomeTaxAmounts/IncomeTaxAmountsProps';
import { useIncomeTaxAmounts } from '~/hooks/useIncomeTaxAmounts/useIncomeTaxAmounts';
import { Emoji } from '~/components/app/Emoji';
import { TaxBracketDetails } from '~/components/app/TaxBracketDetails';

export const IncomeTaxAmounts: FunctionComponent<IncomeTaxAmountsProps> = ({ income, filingStatus }) => {
  const { federalTax, federalTaxBrackets, effectiveTaxRate, afterTaxIncome } = useIncomeTaxAmounts({ income, filingStatus });

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
