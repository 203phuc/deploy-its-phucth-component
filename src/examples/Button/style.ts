import { cva, VariantProps } from 'class-variance-authority';

export const buttonCva = cva('inline-block cursor-pointer rounded-full font-bold', {
  variants: {
    variant: {
      primary: 'bg-blue-500 text-white',
      secondary: 'border border-gray-200 bg-white text-black shadow-lg',
    },
    size: {
      small: 'px-4 py-2 text-xs',
      medium: 'px-5 py-2 text-sm',
      large: 'px-6 py-3 text-base',
    },
  },
  defaultVariants: {
    variant: 'secondary',
    size: 'medium',
  },
});

export type ButtonCvaProps = VariantProps<typeof buttonCva>;
