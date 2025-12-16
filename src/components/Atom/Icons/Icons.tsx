import * as AllIcons from './icons/index';
import { iconsCva } from './style';
import { IconBaseProps } from './types';

export const Icons = ({
  iconName,
  color = 'black',
  box = false,
  boxFill = 'none',
  boxBorder = false,
  boxRoundness = 'round',
  boxBorderWidth = null,
  boxClassName = '',
  boxSize,
  iconSize = 20,
  ...props
}: IconBaseProps) => {
  const IconComponent = AllIcons[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" does not exist`);
    return null;
  }

  const boxClasses = iconsCva({
    box,
    boxFill,
    boxBorder,
    boxRoundness,
    boxBorderWidth,
    className: box ? boxClassName : '',
  });

  const iconElement = <IconComponent size={iconSize} color={iconsCva({ color })} className={boxClassName} />;
  if (!box) {
    return iconElement;
  }

  return (
    <div
      className={boxClasses}
      style={boxSize ? { width: `${boxSize}px`, height: `${boxSize}px` } : undefined}
      {...props}
    >
      {iconElement}
    </div>
  );
};
