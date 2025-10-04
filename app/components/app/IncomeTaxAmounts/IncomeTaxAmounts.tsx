import type { FunctionComponent } from 'react';
import type { IncomeTaxAmountsProps } from '~/components/app/IncomeTaxAmounts/IncomeTaxAmountsProps';
import { calculateIncomeTax } from '../../../../src/helpers';

export const IncomeTaxAmounts: FunctionComponent<IncomeTaxAmountsProps> = ({ income, filingStatus }) => {
  const { federal, effectiveTaxRate } = calculateIncomeTax({ income, filingStatus });

  return (
    <div>
      <p>Federal income tax: ${federal}</p>
      <p>Effective tax rate: ${effectiveTaxRate}</p>
    </div>
  );
};
