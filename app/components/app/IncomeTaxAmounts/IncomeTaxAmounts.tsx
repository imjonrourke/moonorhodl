import type { FunctionComponent } from 'react';
import type { IncomeTaxAmountsProps } from '~/components/app/IncomeTaxAmounts/IncomeTaxAmountsProps';
import { useIncomeTaxAmounts } from '~/hooks/useIncomeTaxAmounts/useIncomeTaxAmounts';

export const IncomeTaxAmounts: FunctionComponent<IncomeTaxAmountsProps> = ({ income, filingStatus }) => {
  const { federalTax, effectiveTaxRate, afterTaxIncome } = useIncomeTaxAmounts({ income, filingStatus });

  return (
    <div>
      <p className="flex flex-col items-center justify-center text-center">
        <strong className="text-7xl font-bold tracking-tighter">${federalTax}</strong>
        <span>What you owe</span>
      </p>
      <p className="flex flex-col items-center justify-center text-center">
        <strong className="text-7xl font-bold tracking-tighter">${afterTaxIncome}</strong>
        <span>What you keep</span>
      </p>
      {/* <p>Federal income tax: ${federalTax}</p> */}
      <p>Effective tax rate: {effectiveTaxRate}%</p>
      {/* <p>Your bag: ${afterTaxIncome}</p> */}
    </div>
  );
};
