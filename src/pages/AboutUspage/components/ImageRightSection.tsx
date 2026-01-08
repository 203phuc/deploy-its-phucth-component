import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text/Text';
import React from 'react';
import { ImageRightSectionProps, useImageRightSection } from '../hooks/useImageRightSection';

export const ImageRightSection: React.FC<ImageRightSectionProps> = ({ isMobile }) => {
  const { imageRightData } = useImageRightSection();
  if (isMobile) {
    return (
      <Section px={16} py={24} w="100%" bgColor="white">
        <Flex direction="column" gap={24}>
          {/* Text section on top */}
          <Section w={343}>
            <Flex direction="column" align="start" gap={4}>
              <Text font="inter" size="small" weight="semiBold" color="black-900">
                {imageRightData.tagline}
              </Text>

              <Flex direction="column" gap={12}>
                <Heading font="spaceGrotesk" size="h5" weight="moderate" color="black-900">
                  {imageRightData.title}
                </Heading>

                <Text font="inter" size="small" weight="regular" color="black-700">
                  {imageRightData.description}
                </Text>
              </Flex>
            </Flex>
          </Section>

          {/* Images section below */}
          <Section w={343} h={280}>
            <Position position="relative">
              <Section w={343} h={280}>
                {imageRightData.images.map((image, index) => (
                  <Position key={index} position="absolute" {...image.position}>
                    <Section
                      w={image.mobileDimensions?.width ?? image.dimensions.width}
                      h={image.mobileDimensions?.height ?? image.dimensions.height}
                    >
                      <ImagePlaceholder src={image.src} alt={image.alt} size="full" />
                    </Section>
                  </Position>
                ))}
              </Section>
            </Position>
          </Section>
        </Flex>
      </Section>
    );
  }

  return (
    <Section px={52} py={52} w="100%" bgColor="white">
      <Flex direction="row" justify="center" align="center" gap={82}>
        {/* Left side - Text content */}
        <Section w={456}>
          <Flex direction="column" align="start" gap={8}>
            <Text font="inter" size="medium" weight="semiBold" color="black-900">
              {imageRightData.tagline}
            </Text>

            <Flex direction="column" gap={24}>
              <Heading font="spaceGrotesk" size="h3" weight="moderate" color="black-900">
                {imageRightData.title}
              </Heading>

              <Text font="inter" size="large" weight="regular" color="black-700">
                {imageRightData.description}
              </Text>
            </Flex>
          </Flex>
        </Section>

        {/* Right side - Two images */}
        <Section w={766} h={627}>
          <Position position="relative">
            <Section w={766} h={627}>
              {imageRightData.images.map((image, index) => (
                <Position key={index} position="absolute" {...image.position}>
                  <Section w={image.dimensions.width} h={image.dimensions.height}>
                    <ImagePlaceholder src={image.src} alt={image.alt} size="full" />
                  </Section>
                </Position>
              ))}
            </Section>
          </Position>
        </Section>
      </Flex>
    </Section>
  );
};
