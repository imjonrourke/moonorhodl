import { type FunctionComponent } from 'react';
import { type EmojiProps } from './EmojiProps';

const computeEmoji: (val: EmojiProps['emoji']) => string = (val) => {
  switch (val) {
    case 'diamond':
      return '&#x1F48E;';
    case 'eagle':
      return '&#x1F985;';
    case 'hands':
      return '&#x1F64C;';
    case 'rocket':
      return '&#128640;';
    case 'moneyBag':
      return '&#x1f4b0;';
    case 'flagUS':
    default:
      return '&#x1f1fa;&#x1f1f8;';
  }
};

export const Emoji: FunctionComponent<EmojiProps> = ({ emoji }) => {
  const emojiCode = computeEmoji(emoji);

  return (
    <span dangerouslySetInnerHTML={{__html: emojiCode}} />
  );
};
