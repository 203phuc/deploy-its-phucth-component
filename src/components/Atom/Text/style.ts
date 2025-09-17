import { cva, VariantProps } from 'class-variance-authority';

export const textCva = cva('text leading-none', {
  variants: {
    weight: {
      Regular: 'font-normal',
      'Semi Bold': 'font-semibold',
      Bold: 'font-bold',
      Moderate: 'font-medium',
    },
    font: {
      Inter: 'font-inter',
      'Space Grotesk': 'font-space-grotesk',
    },
  },
  defaultVariants: {
    weight: 'Regular',
    font: 'Inter',
  },
});
export type TextCvaProps = VariantProps<typeof textCva>;
