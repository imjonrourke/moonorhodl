import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroupCard, RadioGroupItem } from './';

const items: RadioGroupItem[] = [
  { id: 1, title: 'Newsletter', description: 'Last message sent an hour ago', users: '621 users' },
  { id: 2, title: 'Existing Customers', description: 'Last message sent 2 weeks ago', users: '1200 users' },
  { id: 3, title: 'Trial Users', description: 'Last message sent 4 days ago', users: '2740 users' },
]

const meta = {
  title: 'core/forms/radios/RadioGroupCard',
  component: RadioGroupCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  decorators: [() => {
    const [selectedItem, setSelectedItem] = useState(items[0]);
    return (
      <RadioGroupCard
        label="Radio Group Title"
        description="This is a description for the group title"
        name="message"
        items={items}
        selected={selectedItem}
        onChange={setSelectedItem}
        byComparitor="id"
      />
    );
  }],
} satisfies Meta<typeof RadioGroupCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Default: Story = {
  // args: {
  //   items,
  //   onChange: (item) => {
  //     console.log(item);
  //   },
  // },
};
