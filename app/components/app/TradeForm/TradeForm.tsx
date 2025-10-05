import { type FunctionComponent, useState } from 'react';
import { Form } from 'react-router';
import { TradeFormBase } from '~/components/app/TradeFormBase';
import type { TradeFormProps } from '~/components/app/TradeForm/TradeFormProps';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { Label } from '~/components/ui/label';
import { AssetTypeTitles, FormKeys } from '../../../../src/utils/constants';
import type { AssetType, TradeType } from '../../../../src/types';
import { cn } from '~/lib/utils';

const actionUrls: Record<TradeType, string> = {
  buy: '/trades/new',
  sell: '/trades/sell',
  swap: '/trades/swap',
}

const labelStyles = "border-blue-500 text-blue-500"

export const TradeForm: FunctionComponent<TradeFormProps> = ({ type, onSubmit }) => {
  const [assetType, setAssetType] = useState<AssetType>(AssetTypeTitles.crypto.value);

  const handleAssetType = (value: AssetType) => {
    return setAssetType(AssetTypeTitles[value].value);
  };

  return (
    <div>
      <Form action={actionUrls[type]} method="POST" key={FormKeys.homeTrades} navigate={false} onSubmit={onSubmit}>
        <RadioGroup
          name="assetType"
          defaultValue={AssetTypeTitles.crypto.value}
          orientation="horizontal"
          className="flex justify-center align-middle"
          onValueChange={handleAssetType}
        >
          {
            Object.keys(AssetTypeTitles).map((assetTypeTitle) => (
              <div className="flex items-center gap-3">
                <RadioGroupItem id={assetTypeTitle} value={assetTypeTitle} className="peer" hidden />
                <Label
                  htmlFor={assetTypeTitle}
                  className={
                    cn(
                      'rounded-lg border-1 p-2 border-transparent',
                      assetType === assetTypeTitle && labelStyles,
                    )
                  }
                >
                  {AssetTypeTitles[assetTypeTitle as AssetType].label}
                </Label>
              </div>
            ))
          }
        </RadioGroup>
        <div>
          <TradeFormBase type={type} assetType={assetType} />
        </div>
      </Form>
    </div>
  );
};
