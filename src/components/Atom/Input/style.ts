import { cva, VariantProps } from 'class-variance-authority';
import { colorVariants } from '../Text/style';

export const inputCva = cva(
  'flex items-center transition-all focus-within:border-black hover:border-black-900 ',
  {
    variants: {
      variant: {
        solid: 'rounded-md border border-gray-300',
        line: 'rounded-none border-b border-gray-400',
        noBorder: 'rounded-none border-none',
      },
      size: {
        small: 'h-8 gap-1 px-2', //32px
        smedium: 'h-[32px] gap-2 px-[8px] py-[6px]', //32px
        medium: 'h-10 gap-2 px-3', //40px
        large: 'h-[46px] gap-2 px-3 ', //46px
        xlarge: 'h-13 gap-2 px-4', //52px
        special1: 'h-[32px] justify-between px-[8px] py-[8px]', //32px
      },
      error: {
        true: 'border-red-500 focus-within:border-red-500 focus-within:ring-red-500',
        false: '',
      },
      bgColor: {
        gray: 'bg-[#F5F5F5]',
        white: 'bg-white',
        transparent: 'bg-transparent',
      },
    },
    compoundVariants: [
      {
        variant: 'line',
        size: 'small',
        className: '!px-0',
      },
      {
        variant: 'line',
        size: 'medium',
        className: '!px-0',
      },
      {
        variant: 'line',
        size: 'large',
        className: '!px-0',
      },
      {
        variant: 'line',
        size: 'xlarge',
        className: '!px-0',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'medium',
      error: false,
      bgColor: 'white',
    },
  },
);

export const inputElementCva = cva(
  'w-full bg-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      textSize: {
        special1: 'text-[16px] leading-[28px] tracking-[-0.4px]', // 13px / 20px
        special2: 'text-[18px] leading-[32px] tracking-[-0.4px]', // 18px / 32px
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
      fontFamily: {
        inter: 'font-inter placeholder:font-inter',
        grotesk: 'font-space-grotesk placeholder:font-space-grotesk',
      },
      placeholderSize: {
        special1: 'placeholder:text-[16px] placeholder:leading-[28px] placeholder:tracking-[-0.4px]',
        special2: 'placeholder:text-[18px] placeholder:leading-[32px] placeholder:tracking-[-0.4px]',
        xsmall: 'placeholder:text-[12px] placeholder:leading-5',
        small: 'placeholder:text-[14px] placeholder:leading-[22px]',
        smedium: 'placeholder:text-[14px] placeholder:leading-[24px]',
        medium: 'placeholder:text-[16px] placeholder:leading-[26px]',
        large: 'placeholder:text-[18px] placeholder:leading-[30px]',
        xlarge: 'placeholder:text-[20px] placeholder:leading-[32px]',
        '2xlarge': 'placeholder:text-2xl placeholder:leading-[34px]',
        '3xlarge': 'placeholder:text-[1.375rem] placeholder:leading-[34px]',
        '4xlarge': 'placeholder:text-[1.625rem] placeholder:leading-[40px]',
      },
      placeholderColor: {
        gray: 'placeholder:text-gray-400',
        black: 'placeholder:text-black-900',
        white: 'placeholder:text-white',
      },
    },
    defaultVariants: {
      fontFamily: 'inter',
      placeholderColor: 'gray',
    },
  },
);

export const labelCva = cva('font-semibold text-gray-700', {
  variants: {
    textSize: {
      special1: 'text-[16px] leading-[28px] tracking-[-0.4px]', // 13px / 20px
      special2: 'text-[18px] leading-[32px] tracking-[-0.4px]', // 18px / 32px
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
    labelColor: colorVariants,
    fontFamily: {
      inter: 'font-inter',
      grotesk: 'font-space-grotesk',
    },
    required: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    textSize: 'medium',
    fontFamily: 'inter',
    required: false,
  },
});

export const textareaCva = cva(
  'w-full resize-y bg-white p-[16px] transition-all placeholder:text-gray-400 hover:border-black-900 focus:border-black focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: 'rounded-md border border-gray-300',
        line: 'rounded-none border-b border-gray-400',
      },
      textSize: {
        special1: 'text-[16px] leading-[28px] tracking-[-0.4px]', // 13px / 20px
        special2: 'text-[18px] leading-[32px] tracking-[-0.4px]', // 18px / 32px
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
      placeholderSize: {
        special1: 'placeholder:text-[16px] placeholder:leading-[28px] placeholder:tracking-[-0.4px]',
        special2: 'placeholder:text-[18px] placeholder:leading-[32px] placeholder:tracking-[-0.4px]',
        xsmall: 'placeholder:text-[12px] placeholder:leading-5',
        small: 'placeholder:text-[14px] placeholder:leading-[22px]',
        smedium: 'placeholder:text-[14px] placeholder:leading-[24px]',
        medium: 'placeholder:text-[16px] placeholder:leading-[26px]',
        large: 'placeholder:text-[18px] placeholder:leading-[30px]',
        xlarge: 'placeholder:text-[20px] placeholder:leading-[32px]',
        '2xlarge': 'placeholder:text-2xl placeholder:leading-[34px]',
        '3xlarge': 'placeholder:text-[1.375rem] placeholder:leading-[34px]',
        '4xlarge': 'placeholder:text-[1.625rem] placeholder:leading-[40px]',
      },
      error: {
        true: 'border-red-500 focus:border-red-500 focus:ring-red-500',
        false: '',
      },
      fontFamily: {
        inter: 'font-inter placeholder:font-inter',
        grotesk: 'font-space-grotesk placeholder:font-space-grotesk',
      },
    },
    compoundVariants: [
      {
        variant: 'line',
        textSize: 'small',
        className: '!px-0',
      },
      {
        variant: 'line',
        textSize: 'medium',
        className: '!px-0',
      },
      {
        variant: 'line',
        textSize: 'large',
        className: '!px-0',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      textSize: 'medium',
      error: false,
      fontFamily: 'inter',
    },
  },
);

export type InputCvaProps = VariantProps<typeof inputElementCva>;

export const dropdownMenuClasses = {
  dropdownMenu:
    'absolute left-0 top-full z-50 mt-1 max-h-60 w-64 overflow-y-auto rounded-md border border-gray-200 bg-white',
};
