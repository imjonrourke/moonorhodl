import { FunctionComponent } from 'react';
import { ButtonProps, ButtonVariant, ButtonSize } from './ButtonProps';
import { classNames } from '../../utils';

const ButtonSizeClasses: Record<ButtonSize, string> = {
  small: 'text-xs font-bold',
  medium: 'text-sm font-bold',
  large: 'text-md font-bold',
};

const ButtonSpaceClasses: Record<ButtonSize, string> = {
  small: 'px-2 py-1',
  medium: 'px-2.5 py-1.5',
  large: 'px-3.5 py-2.5',
};

const ButtonVariantClasses: Record<ButtonVariant, string> = {
  section: 'bg-sectionBackground text-primary border-2 border-primary shadow shadow-ctaSection text-center hover:text-white hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
  primary: 'bg-primary dark:hover:bg-none text-white text-center hover:text-primary hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
  secondary: 'bg-white text-gray-900 text-center hover:bg-gray-50 ring-1 ring-inset ring-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
  empty: 'relative block rounded-lg border-2 border-dashed border-gray-300 text-gray-500 text-center text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
  link: 'hover:underline',
  error: '',
};

const ButtonDisabledVariantClasses: Record<ButtonVariant, string>  = {
  section: '',
  primary: 'bg-indigo-100 dark:hover:bg-indigo-200 text-indigo-400 hover:text-indigo-500 hover:bg-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
  secondary: 'bg-gray-100 text-gray-300 hover:bg-gray-200 ring-1 ring-inset ring-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20',
  empty: 'relative block rounded-lg border-2 border-dashed border-gray-300 text-gray-400 text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
  link: '',
  error: '',
};

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  size,
  variant,
  full,
  type,
  disabled,
  onClick,
  name,
  value,
  href,
  children,
}) => {
  const isLink = variant === 'link';
  const buttonSizeClasses = !isLink ? `${ButtonSpaceClasses[size]} ${ButtonSizeClasses[size]}`  : '';

  const classNameValues = classNames(
    `rounded ${buttonSizeClasses}`,
    !disabled ? ButtonVariantClasses[variant] : ButtonDisabledVariantClasses[variant],
    full ? 'w-full' : '',
    className ? className : '',
    'transition-all ease-out duration-200'
  );

  if (href) {
    return (
      <a
        className={classNameValues}
        href={href}
        aria-disabled={disabled}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classNameValues}
      onClick={onClick}
      disabled={disabled}
      name={name}
      value={value}
    >
      {children}
    </button>
  );
};
