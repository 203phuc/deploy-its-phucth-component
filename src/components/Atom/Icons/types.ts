import * as AllIcons from './icons/index';
import { IconCvaProps } from './style';

// List of all available icon names
export type IconName = keyof typeof AllIcons;
export type BoxFillType = 'red' | 'green' | 'white' | 'none' | 'gray';
export type ColorType = 'black-600' | 'black-400' | 'blue' | 'black' | 'white';
export type BoxRoundnessType = 'pill' | 'round' | 'sharp';

export interface IconBaseProps extends Partial<IconCvaProps>, React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to wrap the icon in a box
   */
  readonly box?: boolean;

  /**
   * Background color of the box
   */
  readonly boxFill?: BoxFillType;

  /**
   * Whether to show border around the box
   */
  readonly boxBorder?: boolean;

  /**
   * Color of the icon
   */
  readonly color?: ColorType;

  /**
   * Roundness of the box
   */
  readonly boxRoundness?: BoxRoundnessType;

  /**
   * Size of the icon
   */
  readonly iconSize?: number;

  /**
   * Size of the box (if box is true)
   */
  readonly boxSize?: number;

  /**
   * Additional class name for the box
   */
  readonly boxClassName?: string;

  /**
   * Additional class name for the icon
   */
  readonly iconClassName?: string;

  /**
   * Stroke width of the icon
   */
  readonly strokeWidth?: number;

  /**
   * Name of the icon to display
   */
  readonly iconName: IconName;
}

// Props for the Icons component
