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

// ✅ New: Underline offset + thickness variants
const underlineOffsetVariants = {
  none: 'after:bottom-0',
  small: 'after:-bottom-[2px]',
  medium: 'after:-bottom-[4px]',
  large: 'after:-bottom-[6px]',
} as const;

const underlineThicknessVariants = {
  thin: 'after:h-[1px]',
  medium: 'after:h-[2px]',
  thick: 'after:h-[3px]',
} as const;

export const linkCva = cva(
  // Base styles
  'relative inline-flex items-center transition-colors duration-200 after:absolute after:left-0 after:w-full after:bg-current after:content-[""]',
  {
    variants: {
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

      // Hover underline toggle
      hoverUnderline: {
        true: 'after:opacity-0 hover:after:opacity-100',
        false: 'after:opacity-100',
      },

      // Custom underline offset and size
      underlineOffset: underlineOffsetVariants,
      underlineThickness: underlineThicknessVariants,

      // Width of the spacer between children
      spacing: SPACING_VARIANTS,
    },

    defaultVariants: {
      size: 'medium',
      weight: 'regular',
      font: 'inter',
      color: 'default',
      hoverUnderline: false,
      spacing: 'none',
      underlineOffset: 'small',
      underlineThickness: 'thin',
    },
  },
);

export type LinkCvaProps = VariantProps<typeof linkCva>;

export default linkCva;
