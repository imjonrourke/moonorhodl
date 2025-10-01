import { FunctionComponent, useState } from 'react';
import {  Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { SelectItem, SelectProps } from './SelectProps';
import { classNames } from '../../utils';

export const Select: FunctionComponent<SelectProps> = ({ className, name, label, selectedItem, onSelectItem, items, inline, truncate }) => {
  const [selected, setSelected] = useState(selectedItem);

  const inlineStyles = classNames(inline && 'flex flex-row items-center gap-x-10', className);
  const inlineOptionStyles = classNames('relative', !inline && 'mt-2');

  const handleSelectItem = (selectedValue: SelectItem) => {
    setSelected(selectedValue);

    if (onSelectItem) {
      onSelectItem(selectedValue);
    }
  };

  return (
    <Listbox name={name} value={selected} onChange={handleSelectItem}>
      {/* <input name={name} type="hidden" value={selected.value} /> */}
      <div className={inlineStyles}>
        <Label className="block text-sm font-medium leading-6 text-primaryBody">{label}</Label>
        <div className={inlineOptionStyles}>
          <ListboxButton className="relative w-full cursor-default rounded-md bg-sectionBackground py-1.5 pl-3 pr-10 text-left text-sectionBody shadow-sm ring-2 ring-inset ring-borderColor focus:outline-none focus:ring-2 focus:ring-secondaryBackground sm:text-sm sm:leading-6">
            <span className="block truncate">{selected.value}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-borderColor" />
          </span>
          </ListboxButton>

          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-60 min-w-20 w-full overflow-auto rounded-md bg-sectionBackground py-1 text-base shadow-lg ring-1 ring-borderColor focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            {items.map((item) => (
              <ListboxOption
                key={item.id}
                value={item}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-sectionBody data-[focus]:bg-primary data-[focus]:text-white"
              >
                <span className={classNames('block font-normal group-data-[selected]:font-semibold', truncate && 'truncate')}>{item.value}</span>

                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-borderColor group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                  <CheckIcon aria-hidden="true" className="h-5 w-5" />
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </div>
    </Listbox>
  );
};
