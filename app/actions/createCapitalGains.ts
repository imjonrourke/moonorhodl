import type { ClientActionFunctionArgs } from 'react-router';
import { CreateBasicCapitalGainsForm } from '../../src/forms/BasicCapitalGainsForm';
import { filterCurrencyChars } from '../../src/helpers';
import { WalletGateway } from '../../src/utils/WalletGateway/WalletGateway.client';

export const createCapitalGains = async ({ request }: ClientActionFunctionArgs) => {
  const walletGateway = WalletGateway();
  const formData = await request.formData();

  const fdShortTermCost = formData.get(CreateBasicCapitalGainsForm.shortTermCost);
  const fdShortTermAmount = formData.get(CreateBasicCapitalGainsForm.shortTermAmount);
  const fdLongTermCost = formData.get(CreateBasicCapitalGainsForm.longTermCost);
  const fdLongTermAmount = formData.get(CreateBasicCapitalGainsForm.longTermAmount);

  const shortTermCost = filterCurrencyChars(fdShortTermCost);
  const shortTermAmount = filterCurrencyChars(fdShortTermAmount);
  const longTermCost = filterCurrencyChars(fdLongTermCost);
  const longTermAmount = filterCurrencyChars(fdLongTermAmount);

  await walletGateway.addBasicGains({ shortTermCost, shortTermAmount, longTermCost, longTermAmount });

  return {
    shortTermCost,
    shortTermAmount,
    longTermCost,
    longTermAmount,
  };
};
