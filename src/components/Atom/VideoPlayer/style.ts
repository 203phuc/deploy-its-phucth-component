import { cva, type VariantProps } from 'class-variance-authority';

export const videoPlayerCva = cva('relative overflow-hidden bg-black', {
  variants: {
    size: {
      small: 'h-[375px] w-[343px]',
      medium: 'h-[494px] w-[766px]',
      large: 'h-[668px] w-[1336px]',
      desktop: 'h-[668px] w-[1336px]',
      mobile: 'h-[375px] w-[375px]',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

export type VideoPlayerVariantProps = VariantProps<typeof videoPlayerCva>;
