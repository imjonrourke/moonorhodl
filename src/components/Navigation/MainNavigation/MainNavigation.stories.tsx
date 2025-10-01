import type { Meta, StoryObj } from '@storybook/react';

import { MainNavigation } from './';
import {NavItem} from "../../../types/components.ts";

const meta = {
  title: 'core/MainNavigation',
  component: MainNavigation,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof MainNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const navItems: NavItem[] = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'About',
  },
];

export const Default: Story = {
  args: {
    navItems,
  },
};
