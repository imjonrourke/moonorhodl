import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown, MenuItems } from './';

const meta = {
  title: 'core/Dropdown',
  component: Dropdown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems: MenuItems[] = [
  {
    label: 'first menu item',
    href: '#',
  },
  {
    label: 'second menu item',
    href: '#',
  },
];

export const Default: Story = {
  args: {
    label: 'Dropdown title',
    // header: 'Dropdown header',
    menuItems,
  },
};
