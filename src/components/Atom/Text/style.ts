import { cva, VariantProps } from 'class-variance-authority';

// limited colors for text
const colorVariants = {
  default: 'text-text-blue', // fallback default
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

export const textCva = cva('inline-block', {
  variants: {
    weight: {
      regular: 'font-normal',
      semiBold: 'font-semibold',
      bold: 'font-bold',
      moderate: 'font-medium',
    },
    color: colorVariants,
    font: {
      inter: 'font-inter',
      spaceGrotesk: 'font-space-grotesk',
    },
    line: {
      true: 'line-through', // applies strikethrough
      false: '', // no decoration
    },
    size: {
      xsmall: 'text-xs leading-5', // default Tailwind
      small: 'text-sm leading-[22px]', // default Tailwind
      smedium: 'text-sm leading-[24px]', // default Tailwind
      medium: 'text-base leading-[26px]', // default Tailwind
      large: 'text-lg leading-[30px]', // default Tailwind
      xlarge: 'text-xl leading-[32px]', // default Tailwind
      '2xlarge': 'text-2xl leading-[34px]', // default Tailwind
      '3xlarge': 'text-[1.375rem] leading-[34px]', // 22px
      '4xlarge': 'text-[1.625rem] leading-[40px]', // 26px
    },
  },
  defaultVariants: {
    weight: 'regular',
    font: 'inter',
    size: 'medium',
    color: 'default',
  },
});
export type TextCvaProps = VariantProps<typeof textCva>;
