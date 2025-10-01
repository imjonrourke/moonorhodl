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

type CalculateIncomeTaxHandler = (calculateIncomeTaxArgs: CalculateIncomeTax) => Promise<CalculateIncomeTaxResult>;

export const calculateIncomeTax: CalculateIncomeTaxHandler = async ({ income, filingStatus }) => {
  const federalTaxLimits = calculateTaxAmount(income, 0, FederalIncomeTaxRates[filingStatus]);
  const federal = federalTaxLimits.reduce((acc, currentValue) => {
    return acc + currentValue.taxes;
  }, 0);

  const effectiveTaxRate = federal / income;

  return {
    federal,
    effectiveTaxRate,
    state: 0,
    city: 0,
  };
};
