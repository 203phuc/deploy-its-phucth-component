import { useMemo } from 'react';

import { FlexProps } from '@components/Atom/Flex';
import { HeadingProps } from '@components/Atom/Heading';
import { ImagePlaceholderProps } from '@components/Atom/ImagePlaceholder';
import { TextProps } from '@components/Atom/Text/type';

export interface PageHeaderProps {
  isMobile?: boolean;
}

export const HEADER_CONFIG = {
  primary: {
    outerSectionProps: { w: 1440, h: 504, px: 52, py: 52 },
    sectionProps: { w: 1336, h: 400, bg: 'blue' },
    textProps: {
      size: 'large',
      align: 'center',
    } as TextProps,
    innerFlexProps: {
      width: 600,
      height: 130,
      direction: 'column',
      align: 'center',
      gap: 12,
      justify: 'center',
    } as FlexProps,
    HeadingProps: {
      size: 'h3',
      weight: 'moderate',
      font: 'spaceGrotesk',
      color: 'black-900',
    } as HeadingProps,
    imageProps: {
      size: 's27',
      alt: 'Search Header Image',
      src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png',
    } as ImagePlaceholderProps,
  },
  secondary: {
    outerSectionProps: { w: 375, h: 282, px: 16, py: 16 },
    sectionProps: { w: 343, h: 250, bg: 'blue' },
    textProps: {
      size: 'xsmall',
      align: 'center',
    } as TextProps,
    HeadingProps: {
      size: 'h5',
      weight: 'moderate',
      font: 'spaceGrotesk',
      color: 'black-900',
    } as HeadingProps,
    innerFlexProps: {
      width: 311,
      height: 90,
      direction: 'column',
      align: 'center',
      gap: 12,
      justify: 'center',
    } as FlexProps,
    imageProps: {
      size: 's4',
      alt: 'Search Header Image',
      src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png',
    } as ImagePlaceholderProps,
  },
};

export const usePageHeaderConfig = (isMobile: boolean | undefined) => {
  return useMemo(() => {
    return HEADER_CONFIG[isMobile ? 'secondary' : 'primary'];
  }, [isMobile]);
};
