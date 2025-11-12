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
      regular: 'font-normal', //400
      semiBold: 'font-semibold', //600
      bold: 'font-bold', //700
      moderate: 'font-medium', //500
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
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    size: {
      special1: 'text-[16px] leading-[28px] tracking-[-0.4px]', // 13px / 20px
      xsmall: 'text-[12px] leading-5', // default Tailwind
      small: 'text-[14px] leading-[22px]', // default Tailwind
      smedium: 'text-[14px] leading-[24px]', // default Tailwind
      medium: 'text-[16px] leading-[26px]', // default Tailwind
      large: 'text-[18px] leading-[30px]', // default Tailwind
      xlarge: 'text-[20px] leading-[32px]', // default Tailwind
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
