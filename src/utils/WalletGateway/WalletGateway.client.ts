import type {
  WalletGatewayHandler,
  GetWalletHandler,
  GetWalletAssetHandler,
  GetWalletAssetsHandler,
  AddWalletAssetHandler,
  AddWalletAssetsHandler,
  RemoveWalletAssetHandler,
  RemoveWalletAssetsHandler,
} from './WalletGatewayProps';

export const WalletGateway: WalletGatewayHandler = () => {
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
