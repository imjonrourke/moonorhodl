import type { BaseProps } from '../../../../src/types';

export interface DatePickerProps extends BaseProps {
  date?: Date;
  id?: string;
  name: string;
}
