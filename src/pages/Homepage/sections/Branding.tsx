import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { Icons } from '@components/Atom/Icons/Icons';
import { Link } from '@components/Atom/Link';
import { Logo } from '@components/Atom/Logo';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';

export const Branding = () => {
  return (
    <Section w="100%" h={428} px={52} py={52}>
      <Section w="100%" h={324} bgColor="var(--color-black-100)" px={52} py={70}>
        <Flex width="100%" height="100%" direction="row" gap={16} justify="space-between" align="center">
          <Section w={537}>
            <Flex direction="column" gap={16}>
              <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h4">
                Loved brands
              </Heading>
              <Text font="inter" weight="regular" size="large">
                this is the description for the branding section on the homepage.
              </Text>
              <Section pt={8}>
                <Link
                  href="#"
                  font="spaceGrotesk"
                  weight="moderate"
                  underlineOffset="none"
                  size="special1"
                  color="black-900"
                >
                  See all Brands <Icons iconName="ArrowRightIcon" />
                </Link>
              </Section>
            </Flex>
          </Section>
          <Section>
            <Flex direction="column" gap={24}>
              <Flex direction="row" gap={80}>
                <Logo logoName="NikeLogo" width={160} height={80} />
                <Logo logoName="HushLogo" width={160} height={80} />
                <Logo logoName="PumaLogo" width={160} height={80} />
              </Flex>
              <Flex direction="row" gap={80}>
                <Logo logoName="ShoeiLogo" width={160} height={80} />
                <Logo logoName="MarcLogo" width={160} height={80} />
                <Logo logoName="SupremeLogo" width={160} height={80} />
              </Flex>
            </Flex>
          </Section>
        </Flex>
      </Section>
    </Section>
  );
};
