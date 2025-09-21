import type { ImagePlaceholderCvaProps } from './style';

export type ImagePlaceholderSize =
  | 's1'
  | 's2'
  | 's3'
  | 's4'
  | 's5'
  | 's6'
  | 's7'
  | 's8'
  | 's9'
  | 's10'
  | 's11'
  | 's12'
  | 's13'
  | 's14'
  | 's15'
  | 's16'
  | 's17'
  | 's18'
  | 's19'
  | 's20'
  | 's21'
  | 's22'
  | 's23'
  | 's24'
  | 's25';

type ImagePlaceholderCvaPropsWithoutSize = Omit<ImagePlaceholderCvaProps, 'size'>;

/**
 * ImagePlaceholder component props
 */
export interface ImagePlaceholderProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'size'>,
    ImagePlaceholderCvaPropsWithoutSize {
  /**
   * Size of the placeholder
   */
  size?: ImagePlaceholderSize;
  /**
   * Additional class name
   */
  className?: string;
  /**
   * Children nodes - used as fallback content
   */
  children?: React.ReactNode;
  /**
   * Source URL of the image
   */
  src: string;
  /**
   * Alternative text for the image
   */
  alt: string;
  /**
   * Custom fallback text to display when image fails to load
   */
  fallbackText?: string;
}
