import type { FunctionComponent } from 'react';
import type { TradeItemProps } from '~/components/app/TradeItem/TradeItemProps';
import { useTransactionItem } from '~/hooks/useTransactionItem';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '~/components/ui/item';
import { Button } from '~/components/ui/button';

export const TradeItem: FunctionComponent<TradeItemProps> = ({ trade }) => {
  const { cost } = useTransactionItem(trade);

  return (
    <div className="flex flex-col gap-6">
      {/* <Item> */}
      {/*   <ItemContent> */}
      {/*     <ItemTitle>{trade.name}</ItemTitle> */}
      {/*     <ItemDescription> */}
      {/*       <p>{trade.assetType} - {trade.quantity}</p> */}
      {/*     </ItemDescription> */}
      {/*   </ItemContent> */}
      {/*   <ItemActions> */}
      {/*     <p> */}
      {/*       <strong>${cost}</strong> */}
      {/*     </p> */}
      {/*     <Button variant="outline" size="sm"> */}
      {/*       Open */}
      {/*     </Button> */}
      {/*   </ItemActions> */}
      {/* </Item> */}
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>{trade.name}</ItemTitle>
          <ItemDescription>
            <p>{trade.assetType} - {trade.quantity}</p>
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <p>
            <strong>${cost}</strong>
          </p>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      {/* <Item variant="muted"> */}
      {/*   <ItemContent> */}
      {/*     <ItemTitle>Muted Variant</ItemTitle> */}
      {/*     <ItemDescription> */}
      {/*       Subdued appearance with muted colors for secondary content. */}
      {/*     </ItemDescription> */}
      {/*   </ItemContent> */}
      {/*   <ItemActions> */}
      {/*     <Button variant="outline" size="sm"> */}
      {/*       Open */}
      {/*     </Button> */}
      {/*   </ItemActions> */}
      {/* </Item> */}
    </div>
  );

  // return (
  //   <div>
  //     <p>Type: {trade.type}</p>
  //     <p>Asset type: {trade.assetType}</p>
  //     <p>Name: {trade.name}</p>
  //     <p>Cost: ${cost}</p>
  //     <p>Qty: {trade.quantity}</p>
  //     <p>Date: {new Date(trade.date).toLocaleDateString()}</p>
  // </div>
  // );
};
