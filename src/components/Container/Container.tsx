import { type FunctionComponent } from 'react';
import { type ContainerProps } from './ContainerProps';
import { classNames } from '../../utils';

export const Container: FunctionComponent<ContainerProps> = ({ className, isMobilePadded, children }) => {
  const paddedMobileStyles = 'mx-auto max-w-8xl sm:px-6 lg:px-8';
  const fullWidthMobileStyles = 'mx-auto max-w-8xl px-4 sm:px-6 lg:px-8';
  const styles = isMobilePadded ? paddedMobileStyles : fullWidthMobileStyles;

  const classNameValues = classNames(styles, className || '');

  return (
    <div className={classNameValues}>{children}</div>
  );
};
