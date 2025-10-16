import { WalletGateway } from '../../src/utils/WalletGateway/WalletGateway.client';

export const getGains = async () => {
  const walletGateway = WalletGateway();

  return await walletGateway.getBasicGains();
};