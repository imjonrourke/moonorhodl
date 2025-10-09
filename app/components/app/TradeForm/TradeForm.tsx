import { type FunctionComponent, useState } from 'react';
import { Form } from 'react-router';
import { TradeFormBase } from '~/components/app/TradeFormBase';
import type { TradeFormProps } from '~/components/app/TradeForm/TradeFormProps';
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group';
import { cn } from '~/lib/utils';
import { Field, FieldLabel } from '~/components/ui/field';
import { AssetTypeTitles, FormKeys } from '../../../../src/utils/constants';
import type { AssetType, TradeType } from '../../../../src/types';

const actionUrls: Record<TradeType | 'update', string> = {
  buy: '/trades/new',
  sell: '/trades/sell',
  swap: '/trades/swap',
  update: '/trades/update',
}

const labelStyles = "border-blue-500 text-blue-500"

export const TradeForm: FunctionComponent<TradeFormProps> = ({ trade, isUpdate, type, onSubmit }) => {
  const [assetType, setAssetType] = useState<AssetType>(trade?.assetType || AssetTypeTitles.crypto.value);

  const handleAssetType = (value: AssetType) => {
    console.log('handleAssetType', value);
    return setAssetType(AssetTypeTitles[value].value);
  };

  const action = isUpdate && trade ? actionUrls.update : actionUrls[type];
  const method = isUpdate ? 'PATCH' : 'POST';

  return (
    <div>
      <Form action={action} method={method} key={FormKeys.homeTrades} navigate={false} onSubmit={onSubmit}>
        <div className="grid w-full max-w-sm gap-6 mb-6">
          <RadioGroup
            name="assetType"
            defaultValue={trade?.assetType || AssetTypeTitles.crypto.value}
            orientation="horizontal"
            className="flex justify-center align-middle"
            onValueChange={handleAssetType}
          >
            {
              (Object.keys(AssetTypeTitles) as AssetType[]).map((assetTypeTitle) => (
                <Field className="flex items-center justify-center gap-3">
                  <RadioGroupItem id={assetTypeTitle} value={assetTypeTitle} className="peer" hidden />
                  <FieldLabel
                    htmlFor={assetTypeTitle}
                    className={
                      cn(
                        'rounded-lg border-1 p-2 border-transparent justify-center',
                        assetType === assetTypeTitle && labelStyles,
                      )
                    }
                  >
                    {AssetTypeTitles[assetTypeTitle].label}
                  </FieldLabel>
                </Field>
              ))
            }
          </RadioGroup>
        </div>
        <TradeFormBase {...trade} type={type} assetType={assetType} isUpdate={isUpdate} />
      </Form>
    </div>
  );
};
