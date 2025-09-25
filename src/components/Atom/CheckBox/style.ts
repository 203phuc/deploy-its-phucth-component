// style.ts
import { cva, type VariantProps } from 'class-variance-authority';

export const checkboxCva = cva(
  'inline-flex cursor-pointer appearance-none items-center justify-center border border-black transition-colors disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        large: 'h-[32px] w-[32px] border-[1px]', // 32x32
        medium: 'h-[24px] w-[61px] border-[1px]', // 61x24
        small: 'h-[16px] w-[41px] border-[1px]', // 41x16
      },
      state: {
        checked: '', // only adds icon, no bg change
        unchecked: '',
      },
      roundness: {
        full: 'rounded-full', // fully rounded
        rounded: 'rounded-[8px]', // medium rounded
        sharp: 'rounded-none', // square
      },
    },

    compoundVariants: [
      {
        state: 'checked',
        className: 'before:text-sm before:text-black before:content-["✓"]',
      },
    ],

    defaultVariants: {
      size: 'large',
      state: 'unchecked',
      roundness: 'rounded',
    },
  },
);

export type CheckboxCvaProps = VariantProps<typeof checkboxCva>;
export default checkboxCva;
