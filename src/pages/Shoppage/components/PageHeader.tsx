import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { ImagePlaceholder, ImagePlaceholderProps } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import { TextProps } from '@components/Atom/Text/type';
import React from 'react';
import { useBreadcrumbHistory } from '../hooks/useBreadcrumbHistory';
import { BreadCrumb } from './BreadCrumb';

interface PageHeaderProps {
  variant?: 'primary' | 'secondary';
}

export const PageHeader: React.FC<PageHeaderProps> = ({ variant = 'primary' }) => {
  const breadcrumbHistory = useBreadcrumbHistory(3);
  // Define configuration for each variant
  const config = {
    primary: {
      outerSectionProps: { w: 1440, h: 504, px: 52, py: 52 },
      sectionProps: { w: 1336, h: 400, bg: 'blue' },
      titleProps: { text: 'Primary Header', className: 'text-white text-3xl' },
      subtitleProps: { text: 'This is the primary subtitle', className: 'text-white/70' },
      textProps: {
        size: 'large',
        align: 'center',
      } as TextProps,
      imageProps: {
        size: 's27',
        alt: 'Secondary Header Image',
        src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766393221/pageheader_fhqave.png',
      } as ImagePlaceholderProps,
    },
    secondary: {
      outerSectionProps: { w: 375, h: 282, px: 16, py: 16 },
      sectionProps: { mx: 32, my: 32, bg: 'gray' },
      titleProps: { text: 'Secondary Header', className: 'text-black text-2xl' },
      subtitleProps: { text: 'This is the secondary subtitle', className: 'text-black/50' },
      imageProps: {
        size: 's4',
        alt: 'Secondary Header Image',
        src: 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766393221/pageheader_fhqave.png',
      } as ImagePlaceholderProps,
      textProps: {
        size: 'large',
        align: 'center',
      } as TextProps,
    },
  };

  const { sectionProps, imageProps, outerSectionProps, textProps } = config[variant];

  return (
    <Section {...outerSectionProps}>
      <Position position="relative">
        <Section {...sectionProps}>
          <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap={8}>
            <BreadCrumb items={breadcrumbHistory} gap={3} />
            <Flex width={600} height={130} direction="column" align="center" gap={12} justify="center">
              <Heading size="h3" weight="semiBold" font="spaceGrotesk" color="black-900">
                Shop
              </Heading>
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
