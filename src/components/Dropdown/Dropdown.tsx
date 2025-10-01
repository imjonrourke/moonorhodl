import { FunctionComponent, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { DropdownProps } from './DropdownProps';
import { classNames } from '../../utils';

const Sizes = {
  small: 'text-xs font-medium',
  medium: '',
  large: 'text-sm font-semibold',
};

const ArrowSizes = {
  small: 'h-3.5 w-3.5',
  medium: '',
  large: 'h-5 w-5',
};

export const Dropdown: FunctionComponent<DropdownProps> = ({ label, size, header, menuItems }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={
          classNames(
            'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
            Sizes[size]
          )
        }
        >
          {label}
          <ChevronDownIcon className={classNames('-mr-1 text-gray-400', ArrowSizes[size])} aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {
            header
          }
          <div className="py-1">
            {
              menuItems.map((menuItem) => (
                <Menu.Item key={menuItem.label}>
                  {({ active }) => (
                    <a
                      href={menuItem.href}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {menuItem.label}
                    </a>
                  )}
                </Menu.Item>
              ))
            }
            {/*<form method="POST" action="#">*/}
            {/*  <Menu.Item>*/}
            {/*    {({ active }) => (*/}
            {/*      <button*/}
            {/*        type="submit"*/}
            {/*        className={classNames(*/}
            {/*          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',*/}
            {/*          'block w-full px-4 py-2 text-left text-sm'*/}
            {/*        )}*/}
            {/*      >*/}
            {/*        Sign out*/}
            {/*      </button>*/}
            {/*    )}*/}
            {/*  </Menu.Item>*/}
            {/*</form>*/}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
