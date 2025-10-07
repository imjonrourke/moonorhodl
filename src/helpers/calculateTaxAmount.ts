import type { TaxAmountResult, TaxBracketLimit } from '../types';

type CalculateTaxAmountHandler = (income: number, previousLimit: number, taxBracketLimits: TaxBracketLimit[]) => TaxAmountResult[];

export const calculateTaxAmount: CalculateTaxAmountHandler = (income, previousLimit, taxBracketLimits) => {
  const [currentBracketLimit, ...remainingBracketLimits] = taxBracketLimits;
  const isLastBracketLimit = currentBracketLimit.limit === -1 || income <= currentBracketLimit.limit;
  const currentBracketAmount = currentBracketLimit.limit - previousLimit;
  const taxableAmount = isLastBracketLimit ? income - previousLimit : currentBracketAmount;
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
