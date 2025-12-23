import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading/Heading';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { VideoPlayer } from '@components/Atom/VideoPlayer/VideoPlayer';
import { type MutualProps } from './types';

export const FeatureSection = ({ isMobile }: MutualProps) => {
  if (isMobile) {
    return (
      <Section w="100%" px={16} py={32}>
        <Flex width="100%" align="center" justify="center">
          <Flex direction="column" align="center" width="100%">
            {/* Text Section */}
            <Flex gap={8} direction="column" align="center" width={343} height={130}>
              <Flex direction="column" align="center" gap={4}>
                <Text font="inter" weight="semiBold" size="xsmall" color="black-900">
                  TAGLINE
                </Text>
                <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h5">
                  Centra Series®
                </Heading>
              </Flex>
              <Section w={343}>
                <Text font="inter" weight="regular" size="small" color="black-600" align="center">
                  Discover our latest and greatest collection of premium products curated just for you.
                </Text>
              </Section>
            </Flex>

            {/* Video Section */}
            <Section>
              <VideoPlayer
                src="your-video-url.mp4"
                size="special"
                iconBoxSize={65}
                poster="https://res.cloudinary.com/dnuicbze9/image/upload/v1766383908/videoHome_bzkzdh.png"
              />
            </Section>
          </Flex>
        </Flex>
      </Section>
    );
  }

  return (
    <Section w="100%" px={52} py={52}>
      <Flex width="100%" align="center" justify="center">
        <Flex direction="column" align="center" width="100%">
          {/* Text Section */}
          <Flex gap={16} direction="column" align="center" width={880} height={196}>
            <Flex direction="column" align="center" gap={4}>
              <Text font="inter" weight="semiBold" size="medium" color="black-900">
                TAGLINE
              </Text>
              <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h3">
                Centra Series®
              </Heading>
            </Flex>
            <Section w={540}>
              <Text font="inter" weight="regular" size="large" color="black-600" align="center">
                Discover our latest and greatest collection of premium products curated just for you.
              </Text>
            </Section>
          </Flex>

          {/* Video Section */}
          <Section>
            <VideoPlayer
              src="your-video-url.mp4"
              size="special"
              poster="https://res.cloudinary.com/dnuicbze9/image/upload/v1766383908/videoHome_bzkzdh.png"
            />
          </Section>
        </Flex>
      </Flex>
    </Section>
  );
};

export default FeatureSection;
