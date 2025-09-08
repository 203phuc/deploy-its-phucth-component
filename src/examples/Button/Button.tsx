import { memo, useMemo } from 'react';

import { withV100Develop } from './hocs/withV100Develop';

import buttonClasses from './button.module.scss';
import { ButtonProps } from './type';

/**
 * Primary UI component for user interaction
 */
const ButtonComponent = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  ...props
}: ButtonProps) => {
  const mode = useMemo(() => {
    if (primary) {
      return buttonClasses['button--primary'];
    }

    return buttonClasses['button--secondary'];
  }, [primary]);

  return (
    <button
      className={[buttonClasses.button, buttonClasses[`button--${size}`], mode].join(' ')}
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
