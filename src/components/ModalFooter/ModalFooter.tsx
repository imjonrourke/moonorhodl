import { FunctionComponent } from 'react';
import { ModalFooterProps } from './ModalFooterProps.ts';

export const ModalFooter: FunctionComponent<ModalFooterProps> = ({ children }) => {
  return (
    <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
      {children}
    </div>
  );
};
