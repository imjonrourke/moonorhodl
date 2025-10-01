import { FunctionComponent } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { classNames } from '../../../utils';
import { RadioGroupItem, RadioGroupCardProps } from './RadioGroupCardProps';
import { useRadioGroups } from '../../../hooks';

export const RadioGroupCard: FunctionComponent<RadioGroupCardProps> = ({
  label,
  description,
  name,
  column,
  selected,
  onChange,
  items,
  byComparitor,
}) => {
  const { currentItem, handleChange } = useRadioGroups<RadioGroupItem>({ onChange, selectedItem: selected });

  return (
    <RadioGroup name={name} value={currentItem} by={byComparitor} onChange={handleChange}>
      <RadioGroup.Label className={
        classNames(
          !label ? 'sr-only' : 'block text-base font-semibold leading-6 text-gray-900',
          !description ? 'mb-4': '',
        )
      }>
        {label}
      </RadioGroup.Label>
      {
        !!description && (
          <p className="text-sm text-gray-500 mb-4">{description}</p>
        )
      }
      <div className={classNames('grid gap-y-6', column ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-3 sm:gap-x-4')}>
        {items.map((item) => (
          <RadioGroup.Option
            key={item.id}
            value={item}
            className={({ active }) =>
              classNames(
                active ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300',
                'relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none'
              )
            }
          >
            {({ checked, active }) => (
              <>
                <span className="flex flex-1">
                  <span className="flex flex-col">
                    <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                      {item.title}
                    </RadioGroup.Label>
                    {
                      !!item.description && (
                        <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                          {item.description}
                        </RadioGroup.Description>
                      )
                    }
                    {
                      !!item.users && (
                        <RadioGroup.Description as="span" className="mt-6 text-sm font-medium text-gray-900">
                          {item.users}
                        </RadioGroup.Description>
                      )
                    }
                  </span>
                </span>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600')}
                  aria-hidden="true"
                />
                <span
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-indigo-600' : 'border-transparent',
                    'pointer-events-none absolute -inset-px rounded-lg'
                  )}
                  aria-hidden="true"
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
};
