import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import React from 'react';
import { BreadCrumb } from '../../HOC/BreadCrumb/BreadCrumb';
import { PageHeaderProps, usePageHeaderConfig } from '../hooks/usePageHeader';

export const PageHeader: React.FC<PageHeaderProps> = ({ isMobile }) => {
  // Define configuration for each variant
  const { sectionProps, innerFlexProps, imageProps, HeadingProps, outerSectionProps, textProps } =
    usePageHeaderConfig(isMobile);

  return (
    <Section {...outerSectionProps}>
      <Position position="relative">
        <Section {...sectionProps}>
          <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap={8}>
            <BreadCrumb
              items={[
                { id: 'home', label: 'Home', path: '/' },
                { id: 'shop', label: 'Shop' },
              ]}
              gap={3}
            />
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
