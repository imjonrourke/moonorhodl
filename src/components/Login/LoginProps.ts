import { BaseProps } from '../../types';
import { InputValue } from '../../types/inputs';

export interface LoginProps extends BaseProps {
  title: string;
  InputValues: {
    email: InputValue;
    password: InputValue;
  };
  onChange?: (email: string, password: string) => void;
  onGoogleClick: () => void;
}
