import type { Meta, StoryObj } from '@storybook/react';

import { Login } from './';

const meta = {
  title: 'core/forms/Login',
  component: Login,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Login title',
    InputValues: {
      email: '',
      password: '',
    },
  },
};
