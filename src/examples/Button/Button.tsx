import { memo } from 'react';
import { withV100Develop } from './hocs/withV100Develop';
import { buttonCva, ButtonCvaProps } from './style';
import { ButtonProps } from './type';

type ButtonComponentProps = ButtonProps & ButtonCvaProps;

const ButtonComponent = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  className,
  ...props
}: ButtonComponentProps) => {
  const variant = primary ? 'primary' : 'secondary';
  return (
    <button
      className={buttonCva({ variant, size, className })}
      style={{ backgroundColor }}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

const ButtonBackForward = memo(withV100Develop(ButtonComponent));
const Button = memo(ButtonComponent);

export { Button, ButtonBackForward };
