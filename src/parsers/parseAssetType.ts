import type { AssetType } from '../types';

export const parseAssetType = (val: FormDataEntryValue | null): AssetType => {
  switch (val) {
    case 'forex':
      return 'forex';
    case 'stock':
      return 'stock';
    case 'crypto':
    default:
      return 'crypto'
  }
};
