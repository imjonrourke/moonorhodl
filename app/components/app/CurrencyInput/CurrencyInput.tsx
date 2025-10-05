import type { ComponentType, DetailedHTMLProps, FunctionComponent, InputHTMLAttributes } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
} from '~/components/ui/input-group';

export const CurrencyInput: FunctionComponent<ComponentType<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> | undefined> = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" {...props} />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};
