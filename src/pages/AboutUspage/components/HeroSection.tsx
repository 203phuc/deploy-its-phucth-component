import { Heading } from '@components/Atom/Heading/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section';
import React from 'react';

interface HeroSectionProps {
  isMobile: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isMobile }) => {
  const imageUrl = 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png';

  return (
    <Section w="100%">
      <Position position="relative">
        <Section w="100%" h={isMobile ? 450 : 600}>
          <ImagePlaceholder src={imageUrl} alt="About Us Hero" size="full" objectFit="cover" />
          <Position position="absolute" top={isMobile ? 140 : 213} left={isMobile ? 16 : 52}>
            <Section w={isMobile ? 286 : 880}>
              <Heading font="spaceGrotesk" color="black-900" weight="moderate" size={isMobile ? 'h6' : 'h3'}>
                Our goal is to offer you the exclusive hand-picked products that will make your soul shine.
              </Heading>
            </Section>
          </Position>
        </Section>
      </Position>
    </Section>
  );
};
