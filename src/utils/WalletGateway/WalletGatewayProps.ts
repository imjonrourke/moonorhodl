import type { Wallet, WalletAsset } from '../../types';

export interface WalletGatewayProps {}

export type GetWalletHandler = () => Promise<Wallet>;

export type GetWalletAssetHandler = (id: number) => Promise<WalletAsset>;
export type GetWalletAssetsHandler = () => Promise<WalletAsset[]>;
export type AddWalletAssetHandler = (walletAsset: WalletAsset) => Promise<WalletAsset[]>;
export type AddWalletAssetsHandler = (walletAssets: WalletAsset[]) => Promise<WalletAsset[]>;
export type RemoveWalletAssetHandler = (id: number) => Promise<boolean>;
export type RemoveWalletAssetsHandler = (id: number[]) => Promise<boolean>;

export type WalletGatewayHandler = () => {
  getWallet: GetWalletHandler;
  getWalletAsset: GetWalletAssetHandler;
  getWalletAssets: GetWalletAssetsHandler;
  addWalletAsset: AddWalletAssetHandler;
  addWalletAssets: AddWalletAssetsHandler;
  removeWalletAsset: RemoveWalletAssetHandler;
  removeWalletAssets: RemoveWalletAssetsHandler;
};
