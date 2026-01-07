import { Flex } from '@components/Atom/Flex';
import { Logo } from '@components/Atom/Logo';
import { LogoName } from '@components/Atom/Logo/type';
import { Section } from '@components/Atom/Section';
import React from 'react';
interface LogoSectionProps {
  isMobile: boolean;
}

const logos = [
  { id: 1, name: 'NikeLogo', src: '/path/to/nike-logo.png' },
  { id: 2, name: 'HushLogo', src: '/path/to/hush-logo.png' },
  { id: 3, name: 'PumaLogo', src: '/path/to/puma-logo.png' },
  { id: 4, name: 'ShoeiLogo', src: '/path/to/shoei-logo.png' },
  { id: 5, name: 'MarcLogo', src: '/path/to/marc-logo.png' },
  { id: 6, name: 'SupremeLogo', src: '/path/to/supreme-logo.png' },
];

export const LogoSection: React.FC<LogoSectionProps> = ({ isMobile }) => {
  if (isMobile) {
    return (
      <>
        <Section px={37.5} py={32} w="100%">
          <Flex direction="row" wrap="wrap" gap="16px 20px" justify="center" align="center">
            {logos.map((logo) => (
              <Logo key={logo.id} logoName={logo.name as LogoName} size="medium" />
            ))}
          </Flex>
        </Section>
        <Section mx={16} h={1} bgColor="var(--color-black-300)"></Section>
      </>
    );
  }

  return (
    <Section py={52} w="100%" bgColor="white">
      <Section w={1336} h={192} mx={52}>
        <Section w="100%" h={1} bgColor="var(--color-black-300)"></Section>
        <Flex direction="row" justify="center" align="center" height="100%" gap={72}>
          {logos.map((logo) => (
            <Logo key={logo.id} logoName={logo.name as LogoName} size="large" />
          ))}
        </Flex>
        <Section w="100%" h={1} bgColor="var(--color-black-300)"></Section>
      </Section>
    </Section>
  );
};
