import type { FilingStatus } from '../types';
import { calculateTaxAmount } from './calculateTaxAmount';
import * as FederalIncomeTaxRates from '../../taxRates/2025/income/federal.json';

type CalculateIncomeTax = {
  income: number;
  filingStatus: FilingStatus;
};

type CalculateIncomeTaxResult = {
  federal: number;
  effectiveTaxRate: number;
  state: number;
  city: number;
};

type CalculateIncomeTaxHandler = (calculateIncomeTaxArgs: CalculateIncomeTax) => CalculateIncomeTaxResult;

export const calculateIncomeTax: CalculateIncomeTaxHandler = ({ income, filingStatus }) => {
  const taxableIncome = income <= FederalIncomeTaxRates[filingStatus].standardDeduction ? 0 : income - FederalIncomeTaxRates[filingStatus].standardDeduction
  const federalTaxLimits = calculateTaxAmount(taxableIncome, 0, FederalIncomeTaxRates[filingStatus].rates);

  const federal = federalTaxLimits.reduce((acc, currentValue) => {
    return acc + currentValue.taxes;
  }, 0);

  const effectiveTaxRate = (federal / taxableIncome) * 100;

  return {
    federal,
    effectiveTaxRate,
    state: 0,
    city: 0,
  };
};
