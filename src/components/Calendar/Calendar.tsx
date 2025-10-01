import { FunctionComponent } from 'react';
import { classNames } from '../../utils';
import { CalendarProps } from './CalendarProps';
import { CalendarHeader } from '../CalendarHeader';
import { useCalendar } from '../../hooks';

export const Calendar: FunctionComponent<CalendarProps> = ({ date}) => {
  const {
    currentDateName,
    dates,
    dayAcronyms,
    onPrevClick,
    onNextClick,
    onSelectedDate,
  } = useCalendar({ date });

  if (!dates.length) {
    return <></>;
  }

  return (
    <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
      <CalendarHeader
        title={currentDateName}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
      <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
        {dayAcronyms.map((dayAcronym) => (
          <div>{dayAcronym}</div>
        ))}
      </div>
      <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {dates.map((date, dateIndex) => (
          <button
            key={date.dateTime}
            type="button"
            className={classNames(
              'py-1.5 hover:bg-gray-100 focus:z-10',
              date.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
              (date.isSelected || date.isToday) ? 'font-semibold' : '',
              date.isSelected ? 'text-white' : '',
              !date.isSelected && date.isCurrentMonth && !date.isToday ? 'text-gray-900' : '',
              !date.isSelected && !date.isCurrentMonth && !date.isToday ? 'text-gray-400' : '',
              date.isToday && !date.isSelected ? 'text-indigo-600' : '',
              dateIndex === 0 ? 'rounded-tl-lg' : '',
              dateIndex === 6 ? 'rounded-tr-lg' : '',
              dateIndex === dates.length - 7 ? 'rounded-bl-lg' : '',
              dateIndex === dates.length - 1 ? 'rounded-br-lg' : ''
            )}
            onClick={() => onSelectedDate(dateIndex)}
          >
            <time
              dateTime={date.dateTime}
              className={classNames(
                'mx-auto flex h-7 w-7 items-center justify-center rounded-full',
                date.isSelected && date.isToday ? 'bg-indigo-600' : '',
                date.isSelected && !date.isToday ? 'bg-gray-900' : '',
              )}
            >
              {date.day}
            </time>
          </button>
        ))}
      </div>
      <button
        type="button"
        className="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add event
      </button>
    </div>
  );
};
