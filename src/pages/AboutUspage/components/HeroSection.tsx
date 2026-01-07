import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { Section } from '@components/Atom/Section';
import React from 'react';

interface HeroSectionProps {
  isMobile: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isMobile }) => {
  const imageUrl = 'https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png';

  return (
    <Section w="100%" h={isMobile ? 540 : 600}>
      <ImagePlaceholder src={imageUrl} alt="About Us Hero" size="full" objectFit="cover" />
    </Section>
  );
};
