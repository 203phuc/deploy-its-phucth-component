import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import React from 'react';
import { BreadCrumb } from './BreadCrumb/BreadCrumb';
import { usePageHeaderConfig } from './hooks/usePageHeader';

export interface PageHeaderProps {
  isMobile?: boolean;
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  breadcrumbItems?: { id: string; label: string; path?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  isMobile,
  backgroundImage,
  title = 'Shop',
  subtitle = 'Welcome to our online shopping paradise!<br /> Explore wonderful products waiting for you.',
  breadcrumbItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'shop', label: 'Shop' },
  ],
}) => {
  // Define configuration for each variant
  const { sectionProps, innerFlexProps, imageProps, HeadingProps, outerSectionProps, textProps } =
    usePageHeaderConfig(isMobile);

  // Override image src if custom background image is provided
  const customImageProps = backgroundImage ? { ...imageProps, src: backgroundImage } : imageProps;

  return (
    <Section {...outerSectionProps}>
      <Position position="relative">
        <Section {...sectionProps}>
          <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap={8}>
            <BreadCrumb items={breadcrumbItems} gap={3} />
            <Flex {...innerFlexProps}>
              <Heading {...HeadingProps}>{title}</Heading>
              <Text {...textProps}>{subtitle}</Text>
            </Flex>
          </Flex>

          <Position position="absolute" top={0} right={0} zIndex={-1}>
            <ImagePlaceholder {...customImageProps} />
          </Position>
        </Section>
      </Position>
    </Section>
  );
};
