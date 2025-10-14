import type { ClientActionFunctionArgs } from 'react-router';
import { CreateBasicCapitalGainsForm } from '../../src/forms/BasicCapitalGainsForm';

export const createCapitalGains = async ({ request }: ClientActionFunctionArgs) => {
  const formData = await request.formData();

  const shortTermCost = formData.get(CreateBasicCapitalGainsForm.shortTermCost);
  const shortTermAmount = formData.get(CreateBasicCapitalGainsForm.shortTermAmount);
  const longTermCost = formData.get(CreateBasicCapitalGainsForm.longTermCost);
  const longTermAmount = formData.get(CreateBasicCapitalGainsForm.longTermAmount);

  return {
    shortTermCost,
    shortTermAmount,
    longTermCost,
    longTermAmount,
  };
};
