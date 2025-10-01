import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './';

const meta = {
  title: 'core/forms/Textarea',
  component: Textarea,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    name: 'input-name',
    id: 'input-name',
  },
};
