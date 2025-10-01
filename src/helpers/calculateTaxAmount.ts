import type { TaxBracketLimit } from '../types';

type CalculateTaxAmountResult = {
  taxes: number;
  bracket: TaxBracketLimit;
};

type CalculateTaxAmountHandler = (income: number, previousLimit: number, taxBracketLimits: TaxBracketLimit[]) => CalculateTaxAmountResult[];

export const calculateTaxAmount: CalculateTaxAmountHandler = (income, previousLimit, taxBracketLimits) => {
  const [currentBracketLimit, ...remainingBracketLimits] = taxBracketLimits;

  const isLastBracketLimit = currentBracketLimit.limit === -1 || income <= currentBracketLimit.limit;

  const taxableAmount = currentBracketLimit.limit !== -1 ? currentBracketLimit.limit - previousLimit : income - previousLimit;

  const taxes = taxableAmount * currentBracketLimit.rate;

  const taxDetails = {
    taxes,
    bracket: currentBracketLimit,
  };

  if (isLastBracketLimit) {
    return [taxDetails];
  }

  return [taxDetails, ...calculateTaxAmount(income, currentBracketLimit.limit, remainingBracketLimits)];
}
