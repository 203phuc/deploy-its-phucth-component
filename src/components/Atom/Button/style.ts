// style.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonCva = cva(
  'inline-flex items-center justify-center font-medium disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: 'bg-black text-white hover:opacity-90', // example solid
        outlined: 'border-2 border-current bg-transparent hover:bg-black/5',
        text: 'bg-transparent text-inherit shadow-none hover:bg-black/5',
        underline: '', // underline handled below
      },

      underlineSize: {
        xlarge: 'gap-[8px] text-[26px] leading-[38px] underline underline-offset-[8px]',
        large: 'gap-[8px] text-[22px] leading-[34px] underline underline-offset-[6px]',
        medium: 'gap-[4px] text-[18px] leading-[32px] underline underline-offset-[4px]',
        small: 'gap-[4px] text-[16px] leading-[28px] underline underline-offset-[4px]',
        xsmall: 'gap-[2px] text-[14px] leading-[24px] underline underline-offset-[4px]',
      },

      size: {
        xlarge: 'h-[76px] min-w-[190px] gap-[8px] px-[55px] py-[19px] text-[26px] leading-[38px]',
        large: 'h-[72px] min-w-[148px] gap-[8px] px-[44px] py-[19px] text-[22px] leading-[34px]',
        largeCompact: 'h-[53px] min-w-[117px] gap-[8px] px-[44px] py-[19px] text-[22px] leading-[34px]',
        medium: 'h-[52px] min-w-[119px] gap-[4px] px-[26px] py-[10px] text-[18px] leading-[32px]',
        small: 'h-[46px] min-w-[88px] gap-[4px] px-[24px] py-[9px] text-[16px] leading-[28px]',
        xsmall: 'h-[40px] min-w-[84px] gap-[2px] px-[20px] py-[8px] text-[14px] leading-[24px]',
      },

      roundness: {
        pill: 'rounded-[39px]',
        round: 'rounded-[6px]',
        sharp: 'rounded-none',
      },

      fullWidth: {
        true: 'w-full min-w-0',
        false: '',
      },

      hasIcon: {
        true: '',
        false: '',
      },

      font: {
        spaceGrotesk: 'font-space-grotesk',
        inter: 'font-inter',
      },
    },

    compoundVariants: [
      // disable box styles when underline variant is active
      {
        variant: 'underline',
        size: undefined,
        className: 'h-auto min-w-0 border-0 bg-transparent p-0 shadow-none',
      },
    ],

    defaultVariants: {
      variant: 'solid',
      size: 'medium',
      roundness: 'pill',
      fullWidth: false,
      hasIcon: false,
      font: 'inter',
    },
  },
);

export type ButtonCvaProps = VariantProps<typeof buttonCva>;
export default buttonCva;
