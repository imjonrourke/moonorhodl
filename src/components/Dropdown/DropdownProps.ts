import { ReactNode } from 'react';
import { BaseProps } from '../../types';

export interface MenuItems {
  label: string;
  href: string;
}

export interface DropdownProps extends BaseProps {
  label: string | ReactNode;
  size: 'small' | 'medium' | 'large';
  header?: ReactNode;
  menuItems: MenuItems[];
}
