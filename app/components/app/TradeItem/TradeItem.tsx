import type { FunctionComponent } from 'react';
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
import { Dialog, DialogTrigger } from '~/components/ui/dialog';
import { TradeFormDialogBody } from '~/components/app/TradeFormDialogBody';

export const TradeItem: FunctionComponent<TradeItemProps> = ({ trade }) => {
  const { cost } = useTransactionItem(trade);

  return (
    <>
      <Item variant="outline" size="sm">
        <ItemContent>
          <div className="flex items-center">
            <div className="flex flex-col mr-4 text-center">
              <Badge variant="default">{trade.type}</Badge>
              <span>{trade.assetType}</span>
            </div>
            <div className="flex justify-center items-center flex-1">
              <div className="flex flex-col flex-1">
                <ItemTitle>
                  <h2>{trade.name}</h2>
                </ItemTitle>
                <ItemDescription>
                  <span>{trade.quantity} shares</span>
                </ItemDescription>
              </div>
              <div className="flex flex-col">
                <p className="flex flex-col">
                  <strong>${cost}</strong>
                </p>
              </div>
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
};
