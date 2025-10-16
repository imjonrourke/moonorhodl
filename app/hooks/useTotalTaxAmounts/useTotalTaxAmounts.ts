import type { BasicGains, FilingStatus, TaxAmountResult } from '../../../src/types';
import { calculateIncomeTax } from '../../../src/helpers';
import { useNumericFormat } from 'react-number-format';

type UseTotalTaxAmountsHandler = (args: { income: number; filingStatus: FilingStatus, gains: BasicGains, wallet?: null }) => {
  federalTax: string;
  federalTaxBrackets: TaxAmountResult[];
  effectiveTaxRate: string;
  afterTaxIncome: string;
};

export const useTotalTaxAmounts: UseTotalTaxAmountsHandler = ({ income: initialIncome, filingStatus, gains }) => {
  const shortTermGainsTotal = gains.shortTermAmount - gains.shortTermCost;

  const income = initialIncome + shortTermGainsTotal;

  const { federal, federalTaxBrackets, effectiveTaxRate } = calculateIncomeTax({ income, filingStatus });

  const { value: federalTax } = useNumericFormat({ value: federal.toFixed(2), thousandSeparator: true });
  const { value: afterTaxIncome } = useNumericFormat({ value: (income - federal).toFixed(2), thousandSeparator: true });

  return {
    federalTax: `${federalTax || '$0.00'}`,
    federalTaxBrackets,
    effectiveTaxRate,
    afterTaxIncome: `${afterTaxIncome || '$0.00'}`,
  };
};
