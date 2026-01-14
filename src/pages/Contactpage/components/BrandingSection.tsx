import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { Heading } from '@components/Atom/Heading';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { locationsData } from '../mockData/locationsData';

interface BrandingSectionProps {
  isMobile: boolean;
}

interface LocationData {
  heading: string;
  text: string;
}

const LocationCard = ({ heading, text }: LocationData) => (
  <Section w={260} h={90} bgColor="white" borderRadius="medium">
    <Flex direction="column" gap={4} justify="center" height="100%">
      <Text font="spaceGrotesk" color="black-900" weight="moderate" size="large">
        {heading}
      </Text>
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
        <Flex direction={isMobile ? 'column' : 'row'} gap={isMobile ? 50 : 32} justify="space-between">
          {/* Text Section */}
          <Section w={isMobile ? '100%' : 409}>
            <Flex direction="column" gap={8} align="start">
              <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h7">
                Our locations
              </Heading>
              <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h4">
                Come for a coffee, we&apos;d love to chat!
              </Heading>
              <Text font="inter" weight="regular" size="large">
                All good things starts with a homepage. Get inspired without breaking your wallet with premium
                Figma and Sketch templates.
              </Text>
            </Flex>
          </Section>
          {/* Location Cards Grid */}
          <Section w={isMobile ? '100%' : 580}>
            <Grid columns={isMobile ? 1 : 2} gap={16} align="start">
              {locationsData.map((location, index) => (
                <LocationCard key={index} heading={location.heading} text={location.text} />
              ))}
            </Grid>
          </Section>
        </Flex>
      </Section>
    </Section>
  );
};
