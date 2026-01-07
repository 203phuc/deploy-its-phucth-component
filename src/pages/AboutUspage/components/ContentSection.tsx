import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import React from 'react';
import { ContentSectionProps, useContentSection } from '../hooks/useContentSection';

export const ContentSection: React.FC<ContentSectionProps> = ({ isMobile }) => {
  const { contentData } = useContentSection();
  if (isMobile) {
    return (
      <Section px={16} py={24} w="100%" bgColor="white">
        <Flex direction="column" gap={24}>
          {/* Text section on top */}
          <Section w={343}>
            <Flex direction="column" align="start" gap={4}>
              <Text font="inter" size="small" weight="semiBold" color="black-900">
                {contentData.tagline}
              </Text>

              <Flex direction="column" gap={12}>
                <Heading font="spaceGrotesk" size="h6" weight="moderate" color="black-900">
                  {contentData.title}
                </Heading>

                <Text font="inter" size="small" weight="regular" color="black-700">
                  {contentData.description}
                </Text>
              </Flex>
            </Flex>
          </Section>

          {/* Images section below */}
          <Section>
            <Flex direction="row" gap={8}>
              {contentData.images.map((image, index) => (
                <ImagePlaceholder key={index} src={image.src} alt={image.alt} size="s3" />
              ))}
            </Flex>
          </Section>
        </Flex>
      </Section>
    );
  }

  return (
    <Section px={52} py={52} w="100%" bgColor="white">
      <Flex direction="row" justify="center" align="center" gap={82}>
        {/* Left side - Two images with 32px gap */}
        <Section>
          <Flex direction="row" gap={32}>
            {contentData.images.map((image, index) => (
              <ImagePlaceholder key={index} src={image.src} alt={image.alt} size="s17" />
            ))}
          </Flex>
        </Section>

        {/* Right side - Text content in column */}
        <Section w={456}>
          <Flex direction="column" align="start" gap={8}>
            <Text font="inter" size="medium" weight="semiBold" color="black-900">
              {contentData.tagline}
            </Text>

            <Flex direction="column" gap={24}>
              <Heading font="spaceGrotesk" size="h3" weight="moderate" color="black-900">
                {contentData.title}
              </Heading>

              <Text font="inter" size="large" weight="regular" color="black-700">
                {contentData.description}
              </Text>
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </Section>
  );
};
