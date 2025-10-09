import type { FunctionComponent } from 'react';
import { Form } from 'react-router';
import { MoreHorizontal } from 'lucide-react';
import type { TradeItemProps } from '~/components/app/TradeItem/TradeItemProps';
import { useTransactionItem } from '~/hooks/useTransactionItem';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '~/components/ui/item';
import { Button } from '~/components/ui/button';
import { Badge } from '~/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '~/components/ui/dropdown-menu';
import { TradeFormDialog } from '~/components/app/TradeFormDialog';
import { useToggle } from '../../../../src/hooks/useToggle';
import { Dialog, DialogTrigger } from '~/components/ui/dialog';
import { TradeFormDialogBody } from '~/components/app/TradeFormDialogBody';

export const TradeItem: FunctionComponent<TradeItemProps> = ({ trade }) => {
  const { cost } = useTransactionItem(trade);
  const { toggle, toggleHandler } = useToggle();

  return (
    <>
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
      <Item variant="outline" size="sm">

        <ItemContent>
          <div className="flex items-center">
            <div className="flex flex-col">
              <Badge variant="default">{trade.type}</Badge>
              <span>{trade.assetType}</span>
            </div>
            <div className="flex flex-col items-start flex-1">
              <ItemTitle>
                {trade.name}
              </ItemTitle>
              <ItemDescription>
                {trade.quantity}
                <div>
                  <p>Cost</p>
                  <p>
                    <strong>${cost}</strong>
                  </p>
                </div>
              </ItemDescription>
            </div>
          </div>
        </ItemContent>
        <ItemActions>
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" size="sm"><MoreHorizontal /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>Edit transaction</DropdownMenuLabel>
                <DropdownMenuGroup>
                    {/*  TODO: encase DropdownMenu in Dialog */}
                    <DialogTrigger asChild>
                      <DropdownMenuItem>
                        Modify
                      </DropdownMenuItem>
                    </DialogTrigger>
                  <DropdownMenuItem variant="destructive">
                    <input type="hidden" name="removeTrade.id" value={trade.id} />
                    Remove
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <TradeFormDialogBody trade={trade} isUpdate />
          </Dialog>
        </ItemActions>
      </Item>
    </>
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
