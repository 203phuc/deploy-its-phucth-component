import { cva, VariantProps } from 'class-variance-authority';

export const badgeCva = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      outline: 'border-[1.5px] border-current bg-transparent',
      solid: '', // use color variant for background
    },
    size: {
      small: 'px-[10px] py-[2px] text-[12px] leading-[20px] font-[600]',
      medium: 'px-[14px] py-[4px] text-[14px] leading-[24px] font-[600]',
      large: 'px-[16px] py-[4px] text-[16px] leading-[26px] font-[600]',
    },
    color: {
      red: 'bg-red-500 text-white',
      green: 'bg-teal-600 text-white',
      black: 'bg-black text-white',
      white: 'bg-white text-black',
      none: '',
    },
    roundness: {
      rounded: 'rounded-[4px]',
      pill: 'rounded-full',
      sharp: 'rounded-none',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'medium',
    color: 'black',
    roundness: 'sharp',
  },
});

export type BadgeCvaProps = VariantProps<typeof badgeCva>;
