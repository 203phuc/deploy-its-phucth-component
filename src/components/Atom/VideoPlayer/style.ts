import { cva, type VariantProps } from 'class-variance-authority';

export const videoPlayerCva = cva('relative overflow-hidden bg-black', {
  variants: {
    size: {
      default: 'h-[375px] w-[375px] lg:h-[668px] lg:w-[1336px]',
      special: 'h-[375px] w-[343px] lg:h-[668px] lg:w-[1336px]',
      specialPage: 'h-[375px] w-[375x] lg:h-[494px] lg:w-[766px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export type VideoPlayerVariantProps = VariantProps<typeof videoPlayerCva>;
