import { type FunctionComponent } from 'react';
import { type PillProps, type PillVariant } from './PillProps';

type PillVariants = { [K in PillVariant]: string };

const PillVariants: PillVariants = {
  default: 'bg-gray-100 text-gray-600',
  error: ' bg-red-100 text-red-700',
  success: 'bg-green-100 text-green-700',
  warning: 'bg-yellow-100 text-yellow-800',
  inform: 'bg-blue-100 text-blue-700',
};

const PillVariantsButton: PillVariants = {
  default: 'hover:bg-gray-500/20',
  error: 'hover:bg-red-600/20',
  success: 'hover:bg-green-600/20',
  warning: 'hover:bg-yellow-600/20',
  inform: 'hover:bg-blue-600/20',
};

const PillVariantsButtonIcon: PillVariants = {
  default: 'stroke-gray-700/50 group-hover:stroke-gray-700/75',
  error: 'stroke-red-700/50 group-hover:stroke-red-700/75',
  success: 'stroke-green-800/50 group-hover:stroke-green-800/75',
  warning: 'stroke-yellow-800/50 group-hover:stroke-yellow-800/75',
  inform: 'stroke-blue-800/50 group-hover:stroke-blue-800/75',
};

export const Pill: FunctionComponent<PillProps> = ({ label, variant, onClose }) => {
  return (
    <span
      className={
        `inline-flex items-center gap-x-0.5 rounded-md px-2 py-1 text-xs font-medium ${PillVariants[variant]}`
      }
    >
      {label}
      {
        !!onClose && (
          <button
            type="button"
            className={`group relative -mr-1 h-3.5 w-3.5 rounded-sm ${PillVariantsButton[variant]}`}
            onClick={onClose}
          >
            <span className="sr-only">Remove</span>
            <svg
              viewBox="0 0 14 14"
              className={`h-3.5 w-3.5 ${PillVariantsButtonIcon[variant]}`}
            >
              <path d="M4 4l6 6m0-6l-6 6" />
            </svg>
            <span className="absolute -inset-1" />
          </button>
        )
      }
    </span>
  );
};