import { ChangeEventHandler, FunctionComponent, useCallback, useState } from 'react';
import { InputProps } from './InputProps';
import { classNames } from '../../utils';

export const Input: FunctionComponent<InputProps> = ({
  className,
  label,
  value,
  name,
  error,
  type,
  placeholder,
  autoComplete,
  onChange,
}) => {
  const isHidden = type === 'hidden';
  const [currentValue, setCurrentValue] = useState(value);
  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback((event) => {
    onChange?.(event);
    setCurrentValue(event.target.value);
  }, [setCurrentValue, onChange]);

  return (
    <div className={className}>
      {
        !isHidden && (
          <label htmlFor={name} className="block text-sm font-bold leading-6 text-primaryBody-900">
            {label}
          </label>
        )
      }
      <div className={!isHidden ? "mt-2" : ""}>
        <input
          type={type}
          name={name}
          id={name}
          autoComplete={autoComplete}
          className={
            classNames(
              !isHidden ? "block w-full rounded-md border-0 py-1.5 px-2" : "",
              error ?
                "pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6" :
                "bg-inputBackground ring-inputBorder text-primaryBody shadow-sm ring-1 ring-inset placeholder:text-primaryBody focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
            )
          }
          placeholder={placeholder}
          value={currentValue}
          onChange={handleOnChange}
        />
        {
          !isHidden && !!error && (
            <p className="mt-2 text-sm text-red-600" id="email-error">{error}</p>
          )
        }
      </div>
    </div>
  );
};
