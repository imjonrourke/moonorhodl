import type { FunctionComponent } from 'react';
import type { AddTradeFormProps } from '~/components/app/AddTradeForm/AddTradeFormProps';
import { TradeFormDialog } from '~/components/app/TradeFormDialog';
import { Button } from '~/components/ui/button';

export const AddTradeForm: FunctionComponent<AddTradeFormProps> = ({ trade, isUpdate }) => {
  return (
    <TradeFormDialog
      trade={trade}
      isUpdate={isUpdate}
      Trigger={
        <Button variant="outline">Add transaction</Button>
      }
    />
  )
};
