import type { FunctionComponent } from 'react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '~/components/ui/dialog';
import { TradeForm } from '~/components/app/TradeForm/TradeForm';
import type { TradeFormDialogBodyProps } from '~/components/app/TradeFormDialogBody/TradeFormDialogBodyProps';
import { useTradeForm } from '../../../../src/hooks';

export const TradeFormDialogBody: FunctionComponent<TradeFormDialogBodyProps> = ({ trade, isUpdate }) => {
  const { type, title } = useTradeForm({ ...trade, assetType: trade?.assetType || 'crypto', type: trade?.type || 'buy', isUpdate });

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>{title} transaction</DialogTitle>
        <DialogDescription>
          {title} a transaction to your transaction history.
        </DialogDescription>
      </DialogHeader>
      <TradeForm type={type} trade={trade} isUpdate={isUpdate} />
    </DialogContent>
  );
};
