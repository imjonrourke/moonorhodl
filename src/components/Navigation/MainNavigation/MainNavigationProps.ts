import { BaseProps, NavItem } from '../../../types/components';

export interface MainNavigationProps extends BaseProps {
  navItems: NavItem[];
  isMobile?: boolean;
}