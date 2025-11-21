import { type NavigationCvaProps, type SliderCvaProps } from './style';

export interface SliderSlide {
  /**
   * Unique identifier for the slide
   */
  id: string | number;
  /**
   * Image source URL or React element
   */
  content: string | React.ReactNode;
  /**
   * Alt text for images (when content is a string URL)
   */
  alt?: string;
  /**
   * Optional caption or description
   */
  caption?: string;
}

export interface SliderProps
  extends Partial<NavigationCvaProps>,
    Partial<SliderNavigationProps>,
    Partial<SliderCvaProps> {
  /**
   * Array of slides to display
   */
  slides: SliderSlide[];
  /**
   * Whether to show navigation dots
   * @default true
   */
  showDots?: boolean;
  /**
   * Auto-play interval in milliseconds (0 to disable)
   * @default 0
   */
  autoPlay?: number;
  /**
   * Whether to loop back to first slide after last slide
   * @default true
   */
  loop?: boolean;
  /**
   * Custom width (can use for image and custom)
   */
  width?: string | number;
  /**
   * Custom height (can use for image and custom)
   */
  height?: string | number;
  /**
   * Custom width (only used when size is 'custom')
   */
  widthFull?: boolean;
  /**
   * Callback when slide changes
   */
  onSlideChange?: (index: number, slide: SliderSlide) => void;
  /**
   * Custom className for the carousel container
   */
  className?: string;
}

export interface SliderNavigationProps {
  /**
   * Total number of slides
   */
  totalItems: number;
  /**
   * Current active slide index
   */
  currentIndex: number;
  /**
   * Whether to show dot navigation
   */
  showDots?: boolean;
}
