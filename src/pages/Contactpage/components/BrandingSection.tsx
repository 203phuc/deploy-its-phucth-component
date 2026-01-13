import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Link } from '@components/Atom/Link';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';

interface BrandingSectionProps {
  isMobile: boolean;
}

interface LocationData {
  heading: string;
  text: string;
}

const locations: LocationData[] = [
  {
    heading: 'Netherlands',
    text: 'Suite 101 Nayzak Street\nLondon REU UK',
  },
  {
    heading: 'United States',
    text: 'Suite 202 Fashion Avenue\nNew York NY 10001 USA',
  },
  {
    heading: 'Canada',
    text: 'Suite 303 Maple Road\nToronto ON M5V 2T6 Canada',
  },
  {
    heading: 'Australia',
    text: 'Suite 404 Harbor Street\nSydney NSW 2000 Australia',
  },
  {
    heading: 'Germany',
    text: 'Suite 505 Berlin Plaza\nBerlin 10115 Germany',
  },
  {
    heading: 'Japan',
    text: 'Suite 606 Tokyo Tower\nTokyo 100-8111 Japan',
  },
];

const LocationCard = ({ heading, text }: LocationData) => (
  <Section w={260} h={90} bgColor="white" borderRadius="medium" px={16} py={12}>
    <Flex direction="column" gap={4} justify="center" height="100%">
      <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h6">
        {heading}
      </Heading>
      <Text font="inter" weight="regular" size="small" color="black-700">
        {text}
      </Text>
    </Flex>
  </Section>
);

export const BrandingSection = ({ isMobile }: BrandingSectionProps) => {
  return (
    <Section w={isMobile ? 343 : 1108} my={isMobile ? 24 : 52} mx={isMobile ? 16 : 166}>
      <Section w="100%">
        <Flex>
          <Flex width="100%" direction="column" gap={32}>
            {/* Text Section */}
            <Section w={isMobile ? 343 : 409}>
              <Flex direction="column" gap={8} align="start">
                <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h4">
                  Come for a coffee, we&apos;d love to chat!
                </Heading>
                <Text font="inter" weight="regular" size="large">
                  All good things starts with a homepage. Get inspired without breaking your wallet with
                  premium Figma and Sketch templates.
                </Text>
              </Flex>
            </Section>
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
          {/* Location Cards Grid */}
          <Section w="100%">
            <Grid columns={isMobile ? 1 : 2} gap={16} align="start">
              {locations.map((location, index) => (
                <LocationCard key={index} heading={location.heading} text={location.text} />
              ))}
            </Grid>
          </Section>
        </Flex>
      </Section>
    </Section>
  );
};
