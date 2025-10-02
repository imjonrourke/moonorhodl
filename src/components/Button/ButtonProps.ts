import type { MouseEventHandler } from 'react';
import type { BaseProps } from '../../types';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'section' | 'primary' | 'secondary' | 'link' | 'empty' | 'error';

export interface ButtonProps extends BaseProps {
  type?: 'submit' | 'reset' | 'button' | undefined;
  name?: HTMLButtonElement['name'];
  value?: HTMLButtonElement['value'];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size: ButtonSize;
  variant: ButtonVariant;
  full?: boolean;
  disabled?: boolean;
  href?: string;
}
