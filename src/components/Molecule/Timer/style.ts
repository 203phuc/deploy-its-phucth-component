import { cva, VariantProps } from 'class-variance-authority';

export const timeBlockCva = cva('font-space-grotesk flex items-center justify-center font-medium', {
  variants: {
    size: {
      mobileSharp: 'h-[48px] w-[48px] bg-black-100 text-[26px] leading-[38px] font-semibold',
      mobileRound: 'h-[48px] w-[48px] bg-black-100 text-[22px] leading-[34px] font-semibold',
      desktopRound:
        'h-[60px] w-[60px] bg-black-100 text-[28px] leading-[34px] font-semibold tracking-[-0.6px]',
      desktopSharp:
        'h-[60px] w-[60px] bg-black-100 text-[34px] leading-[38px] font-semibold tracking-[-0.6px]',
      desktop: 'text-[34px] leading-[38px] font-semibold tracking-[-0.6px]',
      mobile: 'text-[28px] leading-[34px] font-semibold tracking-[-0.6px]',
    },
    round: {
      pill: 'rounded-full',
      sharp: 'rounded-none',
    },
  },
  defaultVariants: {
    size: 'desktopSharp',
  },
});

export const labelCva = cva('font-inter font-semibold ', {
  variants: {
    textColor: {
      red: 'text-red-500',
      black: 'text-black-900',
    },
    mobile: {
      true: 'text-[14px] leading-[22px]',
      false: 'text-[16px] leading-[26px]',
    },
  },
  defaultVariants: {
    mobile: false,
  },
});
export const labelSpanCva = cva('font-inter font-normal text-text-blue', {
  variants: {
    mobile: {
      true: 'text-[14px] leading-[22px]',
      false: 'text-[16px] leading-[26px]',
    },
  },
  defaultVariants: {
    mobile: false,
  },
});

export const titleCva = cva('font-inter font-normal text-text-blue', {
  variants: {
    mobile: {
      true: 'text-[12px] leading-[20px]',
      false: 'text-[12px] leading-[20px]',
    },
  },
  defaultVariants: {
    mobile: false,
  },
});

export type TimeBlockCvaProps = VariantProps<typeof timeBlockCva>;
export type TitleCvaProps = VariantProps<typeof titleCva>;
export type LabelCvaProps = VariantProps<typeof labelCva>;
