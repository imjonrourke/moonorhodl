import type { FilingStatus } from '../../../src/types';
import { calculateIncomeTax } from '../../../src/helpers';
import { useNumericFormat } from 'react-number-format';

type UseIncomeTaxAmountsHandler = (args: { income: number; filingStatus: FilingStatus }) => {
  federalTax: string;
  effectiveTaxRate: string;
  afterTaxIncome: string;
};

// TODO: fix type errors
export const useIncomeTaxAmounts: UseIncomeTaxAmountsHandler = ({ income, filingStatus }) => {
  const { federal, effectiveTaxRate } = calculateIncomeTax({ income, filingStatus });

  const { value: federalTax } = useNumericFormat({ value: federal.toFixed(2), thousandSeparator: true });
  const { value: afterTaxIncome } = useNumericFormat({ value: (income - federal).toFixed(2), thousandSeparator: true });

  return {
    federalTax,
    effectiveTaxRate,
    afterTaxIncome,
  };
};
