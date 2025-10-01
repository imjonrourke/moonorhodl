import { FunctionComponent } from 'react';
import { RadioGroup } from '@headlessui/react';
import { classNames } from '../../../utils';
import { RadioListPanelItem, RadioListPanelProps } from './RadioListPanelProps';
import { useRadioGroups } from '../../../hooks/useRadioGroups/useRadioGroups';

export const RadioListPanel: FunctionComponent<RadioListPanelProps> = ({
  label,
  description,
  name,
  selected,
  onChange,
  items,
  byComparitor,
}) => {
  const { currentItem, handleChange } = useRadioGroups<RadioListPanelItem>({ onChange, selectedItem: selected });

  return (
    <RadioGroup name={name} value={currentItem} by={byComparitor} onChange={handleChange}>
      <RadioGroup.Label className={
        classNames(
          !label ? 'sr-only' : 'block text-sm font-medium leading-6 text-gray-900',
          !description ? ' mb-2' : ''
        )
      }>
        {label}
      </RadioGroup.Label>
      {
        !!description && (
          <p className="text-sm text-gray-500 mb-4">{description}</p>
        )
      }
      <div className="-space-y-px rounded-md bg-white">
        {items.map((item, itemIndex) => (
          <RadioGroup.Option
            key={item.label}
            value={item}
            className={({checked}) =>
              classNames(
                itemIndex === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                itemIndex === items.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                checked ? 'z-10 border-indigo-200 bg-indigo-50' : 'border-gray-200',
                'relative flex cursor-pointer border p-4 focus:outline-none'
              )
            }
          >
            {({active, checked}) => (
              <>
                <span
                  className={classNames(
                    checked ? 'bg-indigo-600 border-transparent' : 'bg-white border-gray-300',
                    active ? 'ring-2 ring-offset-2 ring-indigo-600' : '',
                    'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center'
                  )}
                  aria-hidden="true"
                >
                  <span className="rounded-full bg-white w-1.5 h-1.5"/>
                </span>
                <span className="ml-3 flex flex-col">
                  <RadioGroup.Label
                    as="span"
                    className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'block text-sm font-medium')}
                  >
                    {item.label}
                  </RadioGroup.Label>
                  <RadioGroup.Description
                    as="span"
                    className={classNames(checked ? 'text-indigo-700' : 'text-gray-500', 'block text-sm')}
                  >
                    {item.description}
                  </RadioGroup.Description>
                </span>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
