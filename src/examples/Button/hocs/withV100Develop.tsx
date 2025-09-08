import { ComponentType } from 'react';
import { ButtonV100DevelopProps } from '../type';

/**
 * HOC for V1.0.0-DEV.1 compatibility. (remove `label` and add `children`)
 *
 * @since 1.0.0-DEV.1
 */
export const withV100Develop = (Component: ComponentType<ButtonV100DevelopProps>) => {
  // eslint-disable-next-line react/display-name -- HOC
  return (props: ButtonV100DevelopProps) => {
    const { label, children, ...rest } = props;

    return <Component {...rest}>{children || label}</Component>;
  };
};
