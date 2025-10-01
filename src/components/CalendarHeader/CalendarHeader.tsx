import { FunctionComponent } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { CalendarHeaderProps } from './CalendarHeaderProps';

export const CalendarHeader: FunctionComponent<CalendarHeaderProps> = ({ title, onPrevClick, onNextClick }) => {
  return (
    <div className="flex items-center text-gray-900">
      <button
        type="button"
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        onClick={onPrevClick}
      >
        <span className="sr-only">Previous month</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      <div className="flex-auto text-sm font-semibold">{title}</div>
      <button
        type="button"
        className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        onClick={onNextClick}
      >
        <span className="sr-only">Next month</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  );
};
