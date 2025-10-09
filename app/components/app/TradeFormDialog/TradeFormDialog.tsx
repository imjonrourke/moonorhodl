import type { FunctionComponent } from 'react';
import {
  Dialog,
  DialogTrigger
} from '~/components/ui/dialog';
import type { TradeFormDialogProps } from '~/components/app/TradeFormDialog/TradeFormDialogProps';
import { TradeFormDialogBody } from '~/components/app/TradeFormDialogBody';

export const TradeFormDialog: FunctionComponent<TradeFormDialogProps> = ({ trade, isUpdate, children, Trigger }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {Trigger}
      </DialogTrigger>
      <TradeFormDialogBody trade={trade} isUpdate={isUpdate} />
    </Dialog>
  );
};
