import { BaseProps } from '../../types/components';

export interface CalendarHeaderProps extends BaseProps {
  title: string;
  onPrevClick: () => void;
  onNextClick: () => void;
}
