import type { FunctionComponent } from 'react';
import type { IncomeTaxAmountsProps } from '~/components/app/IncomeTaxAmounts/IncomeTaxAmountsProps';
import { useIncomeTaxAmounts } from '~/hooks/useIncomeTaxAmounts/useIncomeTaxAmounts';

export const IncomeTaxAmounts: FunctionComponent<IncomeTaxAmountsProps> = ({ income, filingStatus }) => {
  const { federalTax, effectiveTaxRate, afterTaxIncome } = useIncomeTaxAmounts({ income, filingStatus });

  return (
    <div>
      <p>Federal income tax: ${federalTax}</p>
      <p>Effective tax rate: {effectiveTaxRate}%</p>
      <p>Your bag: ${afterTaxIncome}</p>
    </div>
  );
};
