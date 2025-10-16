import type {
  WalletGatewayHandler,
  GetWalletHandler,
  GetWalletAssetHandler,
  GetWalletAssetsHandler,
  AddWalletAssetHandler,
  AddWalletAssetsHandler,
  RemoveWalletAssetHandler,
  RemoveWalletAssetsHandler,
  GetWalletBasicGainsHandler, AddWalletBasicGainsHandler,
} from './WalletGatewayProps';
import { LocalStorage } from '../LocalStorage';

export const WalletGateway: WalletGatewayHandler = () => {
  const localStorage = LocalStorage();

  const getBasicGains: GetWalletBasicGainsHandler = async () => {
    return await localStorage.getBasicGainsData();
  };

  const addBasicGains: AddWalletBasicGainsHandler = async (args) => {
    return localStorage.addBasicGainsData(args);
  };

  // const getWallet: GetWalletHandler = () => {};
  // const getWalletAsset: GetWalletAssetHandler = (id: number) => {};
  // const getWalletAssets: GetWalletAssetsHandler = () => {};
  // const addWalletAsset: AddWalletAssetHandler = (walletAsset) => {};
  // const addWalletAssets: AddWalletAssetsHandler = (walletAssets) => {};
  // const removeWalletAsset: RemoveWalletAssetHandler = (id) => {};
  // const removeWalletAssets: RemoveWalletAssetsHandler = (id) => {};

  return {
    // getWallet,
    // getWalletAsset,
    // getWalletAssets,
    // addWalletAsset,
    // addWalletAssets,
    // removeWalletAsset,
    // removeWalletAssets,
    getBasicGains,
    addBasicGains,
  };
};
