import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import React from 'react';
import { useBreadcrumbHistory } from '../hooks/useBreadcrumbHistory';
import { PageHeaderProps, usePageHeaderConfig } from '../hooks/usePageHeader';
import { BreadCrumb } from './BreadCrumb';

export const PageHeader: React.FC<PageHeaderProps> = ({ isMobile }) => {
  const breadcrumbHistory = useBreadcrumbHistory(3);
  // Define configuration for each variant
  const { sectionProps, innerFlexProps, imageProps, HeadingProps, outerSectionProps, textProps } =
    usePageHeaderConfig(isMobile);

  return (
    <Section {...outerSectionProps}>
      <Position position="relative">
        <Section {...sectionProps}>
          <Flex width="100%" height="100%" direction="column" justify="center" align="center" gap={8}>
            <BreadCrumb items={breadcrumbHistory} gap={3} />
            <Flex {...innerFlexProps}>
              <Heading {...HeadingProps}>Search</Heading>
              <Text {...textProps}>
                Find your perfect products from our collection
                <br /> Use the search bar below to discover amazing items.
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
