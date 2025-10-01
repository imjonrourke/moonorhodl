import type { Meta, StoryObj } from '@storybook/react';
import {RadioListPanel, RadioListPanelItem} from './';

const items: RadioListPanelItem[] = [
  { id: 123, label: 'Public access', description: 'This project would be available to anyone who has the link' },
  { id: 456, label: 'Private to Project Members', description: 'Only members of this project would be able to access' },
  { id: 789, label: 'Private to you', description: 'You are the only one able to access this project' },
];

const meta = {
  title: 'core/forms/radios/RadioListPanel',
  component: RadioListPanel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof RadioListPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Privacy setting',
    name: 'someValue',
    description: 'How do you prefer to receive notifications?',
    onChange: (currentItem) => {
      console.log('currentItem', currentItem);
    },
    items,
    byComparitor: 'label',
  },
};
