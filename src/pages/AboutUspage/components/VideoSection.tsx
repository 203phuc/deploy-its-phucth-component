import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { VideoPlayer } from '@components/Atom/VideoPlayer/VideoPlayer';
import React from 'react';
import { useVideoSection, VideoSectionProps } from '../hooks/useVideoSection';

export const VideoSection: React.FC<VideoSectionProps> = ({ isMobile }) => {
  const { videoData } = useVideoSection();
  if (isMobile) {
    return (
      <Section px={16} py={24} w="100%" bgColor="white">
        <Flex direction="column" gap={24}>
          {/* Video section below */}
          <Section>
            <VideoPlayer
              src={videoData.video.src}
              size={videoData.video.size}
              poster={videoData.video.poster}
            />
          </Section>

          {/* Text section below video */}
          <Section w={343}>
            <Flex direction="column" align="start" gap={14}>
              <Flex direction="column" gap={8}>
                <Heading font="spaceGrotesk" size="h6" weight="semiBold" color="black-900">
                  {videoData.title}
                </Heading>

                <Text font="inter" size="small" weight="regular" color="black-700">
                  {videoData.description}
                </Text>
              </Flex>

              <Button variant="text">
                {videoData.buttonText} <Icons iconName="ArrowRightIcon" />
              </Button>
            </Flex>
          </Section>
        </Flex>
      </Section>
    );
  }

  return (
    <Section px={52} py={52} w="100%" bgColor="white">
      <Flex direction="row" justify="center" align="center" gap={40}>
        {/* Left side - Text content with 52px left margin */}
        <Section ml={52} w={456}>
          <Flex direction="column" align="start" gap={24}>
            <Flex direction="column" gap={13}>
              <Heading font="spaceGrotesk" size="h4" weight="moderate" color="black-900">
                {videoData.title}
              </Heading>

              <Text font="inter" size="large" weight="regular" color="black-700">
                {videoData.description}
              </Text>
            </Flex>
            <Button variant="text">
              {videoData.buttonText} <Icons iconName="ArrowRightIcon" />
            </Button>
          </Flex>
        </Section>

        {/* Right side - Video player */}
        <Section>
          <VideoPlayer
            src={videoData.video.src}
            size={videoData.video.size}
            poster={videoData.video.poster}
          />
        </Section>
      </Flex>
    </Section>
  );
};
