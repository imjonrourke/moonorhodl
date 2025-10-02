import { type FunctionComponent, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Calendar } from '~/components/ui/calendar'
import { Label } from '~/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '~/components/ui/popover'
import type { DatePickerProps } from '~/components/app/DatePicker/DatePickerProps';

export const DatePicker: FunctionComponent<DatePickerProps> = ({
  id = "date",
  name,
  date = new Date(),
}) => {
  const [open, setOpen] = useState(false)
  const [localDate, setDate] = useState<Date | undefined>(date)

  return (
    <div className="flex flex-col gap-3">
      <input type="hidden" name={name} value={localDate?.toLocaleDateString()} />
      <Label htmlFor={id} className="px-1">
        Date
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id={id}
            className="w-48 justify-between font-normal"
          >
            {localDate ? localDate.toLocaleDateString() : "Select date"}
            {/* {"Select date"} */}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={localDate}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
};
