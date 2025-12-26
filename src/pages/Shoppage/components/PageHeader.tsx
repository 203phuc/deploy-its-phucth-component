import { Flex, FlexProps } from '@components/Atom/Flex';
import { HeadingProps } from '@components/Atom/Heading';
import { Heading } from '@components/Atom/Heading/Heading';
import { ImagePlaceholder, ImagePlaceholderProps } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import { TextProps } from '@components/Atom/Text/type';
import React from 'react';
import { useBreadcrumbHistory } from '../hooks/useBreadcrumbHistory';
import { BreadCrumb } from './BreadCrumb';

export interface PageHeaderProps {
  isMobile?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ isMobile }) => {
  const breadcrumbHistory = useBreadcrumbHistory(3);
  // Define configuration for each variant
  const config = {
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
        alt: 'Secondary Header Image',
        src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766393221/pageheader_fhqave.png',
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
        alt: 'Secondary Header Image',
        src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766393221/pageheader_fhqave.png',
      } as ImagePlaceholderProps,
    },
  };

  const { sectionProps, innerFlexProps, imageProps, HeadingProps, outerSectionProps, textProps } =
    config[isMobile ? 'secondary' : 'primary'];

  return (
    <Section {...outerSectionProps}>
      <Position position="relative">
        <Section {...sectionProps}>
          <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap={8}>
            <BreadCrumb items={breadcrumbHistory} gap={3} />
            <Flex {...innerFlexProps}>
              <Heading {...HeadingProps}>Shop</Heading>
              <Text {...textProps}>
                Welcome to our online shopping paradise!
                <br /> Explore the wonderful products waiting for you.
              </Text>
            </Flex>
          </Flex>

          <Position position="absolute" top={0} right={0} zIndex={-1}>
            <ImagePlaceholder {...imageProps} />
          </Position>
        </Section>
      </Position>
    </Section>
  );
};
