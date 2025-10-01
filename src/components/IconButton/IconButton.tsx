import { FunctionComponent } from 'react';
import { IconButtonProps } from './IconButtonProps';
import { ButtonSize, ButtonVariant } from '../Button';
import { classNames } from '../../utils';

const IconButtonSizeClasses: Record<ButtonSize, string> = {
  small: 'p-1',
  medium: 'p-1.5',
  large: 'p-2',
};

const IconButtonSizes: Record<ButtonSize, string> = {
  small: 'h-2.5 w-2.5',
  medium: 'h-3.5 w-3.5',
  large: 'h-5 w-5',
};

const IconButtonVariantClasses: Record<ButtonVariant, string> = {
  // primary: 'bg-indigo-600 dark:hover:bg-indigo-400 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  // secondary: 'bg-white text-gray-900 hover:bg-gray-50 ring-1 ring-inset ring-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
  primary: 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
  secondary: 'bg-white text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  empty: '',
};

export const IconButton: FunctionComponent<IconButtonProps> = ({ onClick, size, variant, icon: Icon }) => {
  return (
    <button
      type="button"
      className={
        classNames(
          'rounded-full',
          IconButtonSizeClasses[size],
          IconButtonVariantClasses[variant],
        )
      }
      onClick={onClick}
    >
      <Icon className={IconButtonSizes[size]} aria-hidden="true" />
    </button>
  );
};
