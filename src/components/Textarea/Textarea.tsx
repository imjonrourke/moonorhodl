import { type FunctionComponent } from 'react';

export const Textarea: FunctionComponent<Partial<HTMLTextAreaElement> & { label: string,  hideLabel?: boolean; placeholder?: boolean; error?: string; }> = ({ label, hideLabel, rows = 4, name, id, value = '', error, className }) => {
  return (
    <div className={className}>
      {
        !hideLabel && (
          <label htmlFor={id || name} className="block text-sm font-bold leading-6 text-primaryBody-900">
            {label}
          </label>
        )
      }
      <div className="mt-2">
        <textarea
          rows={rows}
          placeholder={label}
          name={name}
          id={id || name}
          className="block w-full rounded-xl border-0 py-1.5 bg-inputBackground text-primaryBody shadow-sm ring-1 ring-inset ring-inputBorder placeholder:text-primaryBody focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          defaultValue={value}
        />
        {
          !!error && (
            <p className="mt-2 text-sm text-red-600" id="email-error">{error}</p>
          )
        }
      </div>
    </div>
  );
};
