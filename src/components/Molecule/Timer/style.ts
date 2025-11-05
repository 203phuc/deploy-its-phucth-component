import { cva, VariantProps } from 'class-variance-authority';

export const timeBlockCva = cva(
  'font-space-grotesk flex items-center justify-center rounded-full font-medium',
  {
    variants: {
      mobile: {
        true: 'h-[48px] w-[48px] bg-black-100 text-[22px] leading-[34px] ',
        false: 'h-[60px] w-[60px] bg-black-100 text-[28px] leading-[34px] ',
      },
    },
    defaultVariants: {
      mobile: false,
    },
  },
);

export const labelCva = cva('font-inter font-semibold text-red-500', {
  variants: {
    mobile: {
      true: 'text-[14px] leading-[26px]',
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
      true: 'text-[14px] leading-[26px]',
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
