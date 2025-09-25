import { cva, type VariantProps } from 'class-variance-authority';

// Define spacing variants as a separate constant for type safety
export const SPACING_VARIANTS = {
  none: '', // 0px
  xsmall: 'w-0.5', // 2px
  small: 'w-1', // 4px
  medium: 'w-2', // 8px
  large: 'w-4', // 16px
} as const;

export type SpacingVariant = keyof typeof SPACING_VARIANTS;

// Match the color variants from Text component
const colorVariants = {
  default: 'text-text-blue',
  'black-400': 'text-black-400',
  'black-500': 'text-black-500',
  'black-600': 'text-black-600',
  'black-700': 'text-black-700',
  'black-800': 'text-black-800',
  'black-900': 'text-black-900',
  'blue-700': 'text-blue-700',
  'red-500': 'text-red-500',
  'teal-600': 'text-teal-600',
  white: 'text-white',
};

export const linkCva = cva('inline-flex items-center transition-colors duration-200', {
  // Base styles
  variants: {
    /**
     * Font weight variants for the Link component
     * - regular: Normal font weight (400)
     * - moderate: Medium font weight (500)
     * - semiBold: Semi-bold font weight (600)
     * - bold: Bold font weight (700)
     */
    weight: {
      regular: 'font-normal',
      semiBold: 'font-semibold',
      bold: 'font-bold',
      moderate: 'font-medium',
    },
    font: {
      inter: 'font-inter',
      spaceGrotesk: 'font-space-grotesk',
    },
    size: {
      xsmall: 'text-xs leading-5',
      small: 'text-sm leading-6',
      medium: 'text-base leading-[26px]',
      large: 'text-lg leading-[30px]',
      xlarge: 'text-xl leading-[32px]',
      '2xlarge': 'text-2xl leading-[34px]',
      '3xlarge': 'text-[1.375rem] leading-[34px]',
      '4xlarge': 'text-[1.625rem] leading-[40px]',
    },
    color: colorVariants,
    /**
     * Gap between the text and the underline
     */
    gap: {
      none: 'underline-offset-0', // 0px
      small: 'underline-offset-[4px]', // 4px
      medium: 'underline-offset-[6px]', // 6px
      large: 'underline-offset-[8px]', // 8px
    },
    /**
     * Whether to show the underline on hover only
     */
    hoverUnderline: {
      true: 'hover:underline',
      false: 'underline',
    },
    // Width of the spacer between children (in pixels)
    spacing: SPACING_VARIANTS,
  },
  defaultVariants: {
    size: 'medium',
    weight: 'regular',
    font: 'inter',
    color: 'default',
    gap: 'small',
    hoverUnderline: false,
    spacing: 'none',
  },
});

export type LinkCvaProps = VariantProps<typeof linkCva>;

export default linkCva;
