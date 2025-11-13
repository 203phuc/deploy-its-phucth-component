import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';
import React from 'react';

export interface TextImageSectionProps {
  intro?: string;
  title: string;
  description?: string;
  images: string[]; // expect 4 image urls
}

/**
 * TextImageSection
 * - Two-column layout on desktop: left = text stack (intro, heading, description), right = row of 4 equal images
 * - On mobile (width < 400) it stacks vertically: text block above the image row
 * - Uses existing Atom components only (Section, Flex, Text, Heading, ImagePlaceholder)
 */
export const TextImageSection: React.FC<TextImageSectionProps> = ({ intro, title, description, images }) => {
  const { width } = useScreenSize();
  const isMobile = typeof width === 'number' && width < 400;

  // Ensure we render exactly 4 image slots; if fewer provided, fill with empty placeholders
  const imgs = Array.from({ length: 4 }).map((_, i) => images[i] ?? '');

  return (
    <Section w="100%" px={isMobile ? 16 : 52} py={isMobile ? 16 : 52}>
      <Flex direction="column" gap={16} align="center" justify="space-between">
        {/* Text block */}
        <Section w={isMobile ? 343 : 652} h={isMobile ? 52 : 146}>
          <Flex direction="column" align="center" gap={isMobile ? 0 : 8}>
            {intro ? (
              <Text align="center" size={isMobile ? 'xsmall' : 'medium'} weight="semiBold" color="black-900">
                {intro}
              </Text>
            ) : null}

            <Heading
              align="center"
              size={isMobile ? 'h7' : 'h4'}
              weight="moderate"
              font="spaceGrotesk"
              color="black-900"
            >
              {title}
            </Heading>

            {description && !isMobile ? (
              <Section mt={8} w={540}>
                <Text size="medium" color="default" weight="regular" align="center">
                  {description}
                </Text>
              </Section>
            ) : null}
          </Flex>
        </Section>

        {/* Image block */}
        <Section w="100%">
          <Flex direction={isMobile ? 'column' : 'row'} gap={isMobile ? 16 : 32} wrap="nowrap">
            {imgs.map((src, idx) => (
              <Section w={isMobile ? 343 : 310} h={isMobile ? 343 : 310} key={src || `gallery-${idx}`}>
                <ImagePlaceholder src={src} alt={`gallery-${idx}`} size="full" objectFit="cover" />
              </Section>
            ))}
          </Flex>
        </Section>
      </Flex>
    </Section>
  );
};

export default TextImageSection;
