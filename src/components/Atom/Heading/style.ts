import { cva, VariantProps } from 'class-variance-authority';

// limited colors for headings
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
} as const;

export const headingCva = cva('inline-block', {
  variants: {
    weight: {
      Regular: 'font-normal',
      'Semi Bold': 'font-semibold',
      Bold: 'font-bold',
      Moderate: 'font-medium', // kept for compatibility
    },
    color: colorVariants,
    font: {
      Inter: 'font-inter',
      'Space Grotesk': 'font-space-grotesk',
    },
    size: {
      h1: 'text-[80px] leading-[84px] tracking-[-3px]', // 80 / 84 / -3
      h2: 'text-[72px] leading-[76px] tracking-[-2px]', // 72 / 76 / -2
      h3: 'text-[54px] leading-[58px] tracking-[-1px]', // 54 / 58 / -1
      h4: 'text-[40px] leading-[44px] tracking-[-0.4px]', // 40 / 44 / -0.4
      h5: 'text-[34px] leading-[38px] tracking-[-0.6px]', // 34 / 38 / -0.6
      h6: 'text-[28px] leading-[34px] tracking-[-0.6px]', // 28 / 34 / -0.6
      h7: 'text-[20px] leading-[28px] tracking-[0px]', // 20 / 28 / 0
    },
  },
  defaultVariants: {
    weight: 'Regular',
    font: 'Space Grotesk',
    size: 'h7',
    color: 'default',
  },
});

export type HeadingCvaProps = VariantProps<typeof headingCva>;
