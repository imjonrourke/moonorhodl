import { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';
import { BaseProps } from '../../types/components';

export interface InputProps extends BaseProps {
  type: HTMLInputTypeAttribute;
  id?: string;
  label: string;
  value: string;
  name: string;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}
