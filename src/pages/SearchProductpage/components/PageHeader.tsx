import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { Section } from '@components/Atom/Section';
import React from 'react';

interface PageHeaderProps {
  searchQuery: string;
  isMobile: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ searchQuery, isMobile }) => {
  return (
    <Section w="100%" pt={isMobile ? 48 : 72} pb={isMobile ? 40 : 64} px={isMobile ? 16 : 0}>
      <Flex width="100%" justify="center" align="center">
        <Heading
          size={isMobile ? 'h6' : 'h4'}
          color="black-900"
          weight="moderate"
          font="spaceGrotesk"
          align="center"
        >
          Search results for &ldquo;{searchQuery}&rdquo;
        </Heading>
      </Flex>
    </Section>
  );
};
