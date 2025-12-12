import * as logos from './logos';
import { LogoProps } from './type';

export const Logo = ({ size = 'large', color, width, height, logoName, className, ...props }: LogoProps) => {
  const dimension = {
    large: { width: 160, height: 80 },
    medium: { width: 140, height: 70 },
  };

  const LogoComponent = logos[logoName];
  if (!LogoComponent) return null; // fallback if wrong logoName

  const finalWidth = width ?? dimension[size]?.width;
  const finalHeight = height ?? dimension[size]?.height;

  return (
    <LogoComponent width={finalWidth} height={finalHeight} color={color} className={className} {...props} />
  );
};
