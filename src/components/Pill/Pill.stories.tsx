import type { Meta, StoryObj } from '@storybook/react';

import { Pill } from './';

const meta = {
  title: 'core/Pill',
  component: Pill,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Pill title',
    variant: 'success',
  },
};
