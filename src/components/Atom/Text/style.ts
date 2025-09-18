import { cva, VariantProps } from 'class-variance-authority';

// limited colors for text
const colorVariants = {
  default: 'text-text-blue', // fallback default
  black400: 'text-black-400',
  black500: 'text-black-500',
  black600: 'text-black-600',
  black700: 'text-black-700',
  black800: 'text-black-800',
  black900: 'text-black-900',
  blue700: 'text-blue-700',
  red500: 'text-red-500',
  teal600: 'text-teal-600',
  white: 'text-white',
};

export const textCva = cva('inline-block', {
  variants: {
    weight: {
      Regular: 'font-normal',
      'Semi Bold': 'font-semibold',
      Bold: 'font-bold',
      Moderate: 'font-medium',
    },
    color: colorVariants,
    font: {
      Inter: 'font-inter',
      'Space Grotesk': 'font-space-grotesk',
    },
    line: {
      true: 'line-through', // applies strikethrough
      false: '', // no decoration
    },
    size: {
      xsmall: 'text-xs leading-5', // default Tailwind
      small: 'text-sm leading-6', // default Tailwind
      medium: 'text-base leading-[26px]', // default Tailwind
      large: 'text-lg leading-[30px]', // default Tailwind
      xlarge: 'text-xl leading-[32px]', // default Tailwind
      '2xlarge': 'text-2xl leading-[34px]', // default Tailwind
      '3xlarge': 'text-[1.375rem] leading-[34px]', // 22px
      '4xlarge': 'text-[1.625rem] leading-[40px]', // 26px
    },
  },
  defaultVariants: {
    weight: 'Regular',
    font: 'Inter',
    size: 'medium',
    color: 'default',
  },
});
export type TextCvaProps = VariantProps<typeof textCva>;
