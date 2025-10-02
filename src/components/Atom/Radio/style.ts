import { cva, type VariantProps } from 'class-variance-authority';

export const radioCva = cva(
  'flex items-center justify-center border-[1.5px] border-black bg-white transition-all',
  {
    variants: {
      size: {
        sm: 'h-[18px] w-[18px]',
        md: 'h-[24px] w-[24px]',
        lg: 'h-[32px] w-[32px]',
      },
      shape: {
        circle: 'rounded-full',
        sharp: 'rounded-none',
        rounded: 'rounded-[4px]',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: 'cursor-pointer hover:border-gray-700',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
      disabled: false,
    },
  },
);

export type RadioCvaProps = VariantProps<typeof radioCva>;

export default radioCva;
