import type {
  WalletGatewayHandler,
  GetWalletHandler,
  GetWalletAssetHandler,
  GetWalletAssetsHandler,
  AddWalletAssetHandler,
  AddWalletAssetsHandler,
  RemoveWalletAssetHandler,
  RemoveWalletAssetsHandler,
  GetBasicGainsHandler,
} from './WalletGatewayProps';
import { LocalStorage } from '../LocalStorage';

export const WalletGateway: WalletGatewayHandler = () => {
  const localStorage = LocalStorage();

  const getBasicGains: GetBasicGainsHandler = () => {
    const basicGains = localStorage.getBasicGainsData();
  };

  const getWallet: GetWalletHandler = () => {};
  const getWalletAsset: GetWalletAssetHandler = (id: number) => {};
  const getWalletAssets: GetWalletAssetsHandler = () => {};
  const addWalletAsset: AddWalletAssetHandler = (walletAsset) => {};
  const addWalletAssets: AddWalletAssetsHandler = (walletAssets) => {};
  const removeWalletAsset: RemoveWalletAssetHandler = (id) => {};
  const removeWalletAssets: RemoveWalletAssetsHandler = (id) => {};

  return {
    getWallet,
    getWalletAsset,
    getWalletAssets,
    addWalletAsset,
    addWalletAssets,
    removeWalletAsset,
    removeWalletAssets,
  };
};
