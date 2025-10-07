import type { FunctionComponent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';
import { TradeForm } from '~/components/app/TradeForm/TradeForm';
import type { AddTradeFormProps } from '~/components/app/AddTradeForm/AddTradeFormProps';
import { useToggle } from '../../../../src/hooks/useToggle';

export const AddTradeForm: FunctionComponent<AddTradeFormProps> = () => {
  const { toggle, toggleHandler } = useToggle();

  return (
    <Dialog open={toggle} onOpenChange={toggleHandler}>
      <DialogTrigger asChild>
        <Button variant="outline">Add transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add transaction</DialogTitle>
          <DialogDescription>
            Add a transaction to your transaction history.
          </DialogDescription>
        </DialogHeader>
        <TradeForm type="buy" />
      </DialogContent>
    </Dialog>
  )
};
