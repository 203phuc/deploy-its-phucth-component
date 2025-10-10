import { cva, type VariantProps } from 'class-variance-authority';

export const inputCva = cva(
  'flex items-center bg-white transition-all focus-within:border-black focus-within:ring-1 focus-within:ring-black',
  {
    variants: {
      variant: {
        solid: 'rounded-md border border-gray-300',
        line: 'rounded-none border-b border-gray-400',
      },
      size: {
        small: 'h-8 gap-1 px-2 text-sm',
        medium: 'h-10 gap-2 px-3 text-sm',
        large: 'h-12 gap-2 px-4 text-base',
      },
      error: {
        true: 'border-red-500 focus-within:border-red-500 focus-within:ring-red-500',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'medium',
      error: false,
    },
  },
);

export const inputElementCva = cva(
  'w-full bg-transparent focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        small: 'py-1 text-sm',
        medium: 'py-2 text-sm',
        large: 'py-2 text-base',
      },
    },
    defaultVariants: {
      size: 'medium',
    },
  },
);

export type InputCvaProps = VariantProps<typeof inputCva>;
export default inputCva;
