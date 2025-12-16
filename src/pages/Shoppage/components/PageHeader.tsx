import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import React from 'react';

interface PageHeaderProps {
  variant?: 'primary' | 'secondary';
}

export const PageHeader: React.FC<PageHeaderProps> = ({ variant = 'primary' }) => {
  // Define configuration for each variant
  const config = {
    primary: {
      sectionProps: { mx: 52, my: 52, w: 1440, h: 504, bg: 'blue' },
      titleProps: { text: 'Primary Header', className: 'text-white text-3xl' },
      subtitleProps: { text: 'This is the primary subtitle', className: 'text-white/70' },
    },
    secondary: {
      sectionProps: { mx: 32, my: 32, bg: 'gray' },
      titleProps: { text: 'Secondary Header', className: 'text-black text-2xl' },
      subtitleProps: { text: 'This is the secondary subtitle', className: 'text-black/50' },
    },
  };

  const { sectionProps } = config[variant];

  return (
    <Section {...sectionProps}>
      <Position position="relative">
        <ImagePlaceholder alt="this is page header picture" src="../../../assets/homepage2.png" />
      </Position>
    </Section>
  );
};
