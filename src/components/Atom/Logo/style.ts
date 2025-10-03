import { cva, type VariantProps } from 'class-variance-authority';

export const logoCva = cva('', {
  variants: {
    color: {
      black: 'text-black-500',
      grey: 'text-black-400',
      white: 'text-white',
      custom: String,
    },
  },
});
export type LogoCvaProps = VariantProps<typeof logoCva>;
