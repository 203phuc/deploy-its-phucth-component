import { cva, VariantProps } from 'class-variance-authority';

export const badgeCva = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      outline: 'border-[1.5px] border-current bg-transparent',
      solid: '', // use custom class for color background if needed
    },
    theme: {
      whiteSolid: 'bg-[#FFFFFF] text-black-900',
      blackSolid: 'bg-[#121212] text-white',
      whiteOutline: 'border-[#FFFFFF] text-white',
    },
    size: {
      small: 'gap-[4px] px-[10px] py-[2px] text-[12px] leading-[20px] font-[600]',
      medium: 'gap-[4px] px-[14px] py-[3px] text-[14px] leading-[24px] font-[600]',
      large: 'gap-[4px] px-[16px] py-[4px] text-[16px] leading-[26px] font-[600]',
      circleLarge: 'h-[65px] w-[65px] text-[16px] leading-[26px]',
      circleMedium: 'h-[60px] w-[60px] text-[14px] leading-[22px]',
      circleSmall: 'h-[45px] w-[45px] text-[12px] leading-5',
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
  //default variant
  defaultVariants: {
    variant: 'solid',
    size: 'medium',
    color: 'black',
    roundness: 'sharp',
  },
});

export type BadgeCvaProps = VariantProps<typeof badgeCva>;
