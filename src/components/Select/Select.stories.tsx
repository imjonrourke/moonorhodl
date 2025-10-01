import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './';
import {SelectItem} from "./SelectProps.ts";

const items = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

const meta = {
  title: 'core/forms/Select',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  decorators: [() => {
    const [selectedItem, setSelectedItem] = useState<SelectItem>(items[0]);
    return (
      <Select
        label="Select label"
        items={items}
        selectedItem={selectedItem}
        onSelectItem={(value) => setSelectedItem(value)}
      />
    );
  }],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Default: Story = {
  // args: {
  //   items,
  //   selectedItem,
  //   onSelectItem: (item) => {
  //     selectedItem = item;
  //   },
  // },
};
