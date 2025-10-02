import { type FunctionComponent } from 'react';
import { type EmojiProps } from './EmojiProps';

const computeEmoji: (val: EmojiProps['emoji']) => string = (val) => {
  switch (val) {
    case 'diamond':
      return '&#57397;';
    case 'eagle':
      return '&#129413;';
    case 'hands':
      return '&#58407;';
    case 'rocket':
      return '&#128640;';
    case 'moneyBag':
      return '&#128640;';
    case 'flagUS':
    default:
      return '&#58636;';
  }
};

export const Emoji: FunctionComponent<EmojiProps> = ({ emoji }) => {
  const emojiCode = computeEmoji(emoji);

  return (
    <span>{emojiCode}</span>
  );
};