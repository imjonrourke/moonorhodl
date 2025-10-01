import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './';
import {useState} from "react";

const meta = {
  title: 'core/dialogs/Modal',
  // component: Modal,
  component: ({ open, onClose, primaryActionClick, primaryActionLabel, secondaryActionLabel }) => {
    const [isOpen, setIsOpen] = useState(open ?? false);
    const handleClose = () => {
      onClose?.(!isOpen);
      setIsOpen((currentOpen) => !currentOpen)
    };
    return (
      <>
        <button type="button"
                onClick={() => setIsOpen((currentOpen) => !currentOpen)}>{isOpen ? 'Close' : 'Open'}</button>
        <Modal open={isOpen} onClose={handleClose} showCloseIcon primaryActionClick={primaryActionClick} primaryActionLabel={primaryActionLabel} secondaryActionLabel={secondaryActionLabel} />
      </>
    )
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    showCloseIcon: true,
    onClose: () => {
      alert('onClose was clicked');
    },
    primaryActionClick: () => {
      alert('primaryActionClick was clicked');
    },
    primaryActionLabel: 'Accept it',
    secondaryActionLabel: 'Cancel it',
  },
};
