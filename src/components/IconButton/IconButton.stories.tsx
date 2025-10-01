import type { Meta, StoryObj } from '@storybook/react';
import { PlusIcon } from '@heroicons/react/20/solid';
import { IconButton } from './';

const meta = {
  title: 'core/buttons/IconButton',
  component: IconButton,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    icon: PlusIcon,
  },
};
