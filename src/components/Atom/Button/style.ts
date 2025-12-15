// style.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonCva = cva(
  'relative inline-flex items-center justify-center font-medium disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        solidBlack: 'bg-black text-white hover:opacity-90',
        solidWhite: 'bg-white text-black-900 hover:opacity-90',
        outlined: 'border-2 border-current bg-transparent hover:bg-black/5',
        text: 'm-0 border-0 bg-transparent p-0 text-inherit shadow-none hover:bg-transparent hover:opacity-100',
        underline:
          'relative after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[1px] after:bg-black-900',
      },

      size: {
        xlarge: 'h-[76px] gap-[8px] px-[55px] py-[19px] text-[26px] leading-[38px]',
        large: 'h-[72px] gap-[8px] px-[44px] py-[19px] text-[22px] leading-[34px]',
        largeCompact: 'h-[53px] gap-[8px] px-[44px] py-[19px] text-[22px] leading-[34px]',
        medium: 'h-[52px] gap-[4px] px-[26px] py-[10px] text-[18px] leading-[32px]',
        small: 'h-[46px] gap-[4px] px-[24px] py-[9px] text-[16px] leading-[28px]',
        xsmall: 'h-[40px] gap-[2px] px-[20px] py-[8px] text-[14px] leading-[24px]',
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
      // 🔹 Disable padding, margin, height, hover for text variant regardless of size
      {
        variant: 'text',
        className:
          '!m-0 h-auto !min-w-0 border-0 bg-transparent !p-0 shadow-none hover:bg-transparent hover:opacity-100',
      },
      // 🔹 Also make underline behave like plain text
      {
        variant: 'underline',
        className:
          '!h-auto !min-w-0 border-0 bg-transparent !p-0 shadow-none hover:bg-transparent hover:opacity-100',
      },
    ],

    defaultVariants: {
      variant: 'solidBlack',
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
