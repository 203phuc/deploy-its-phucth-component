import homepage1 from '@assets/homepage1.png'; // or correct relative path from src root
import homepage2 from '@assets/homepage2.png';
import homepage3 from '@assets/homepage3.png';
import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { Slider, type SliderSlide } from '@components/Molecule/Slider';
import { useEffect, useState } from 'react';

const reactNodeSlides: SliderSlide[] = [
  {
    id: 10,
    content: (
      <Position position="relative">
        <Section w={1440} pl={52} h={800}>
          <Flex justify="center" direction="column" height="100%">
            <Section w={538} h={298}>
              <Flex direction="column" gap={28}>
                <Flex direction="column" gap={8}>
                  <Text size="medium" color="black-900" font="inter" weight="semiBold">
                    New Arrivals
                  </Text>
                  <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h3">
                    Create your dream shop instantly.
                  </Heading>
                  <Section w={420}>
                    <Text size="large" color="black-900" weight="regular">
                      Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
                    </Text>
                  </Section>
                </Flex>
                <Section>
                  <Button variant="solid" size="medium" roundness="sharp">
                    See Collection
                  </Button>
                </Section>
              </Flex>
            </Section>
          </Flex>
          <Position top={0} left={0} zIndex={-1} position="absolute">
            <Section w={1440} h={800}>
              <img src={homepage1} alt="this is the homepage1" />
            </Section>
          </Position>
        </Section>
      </Position>
    ),
  },
  {
    id: 11,
    content: (
      <Position position="relative">
        <Section w={1440} pl={52} h={800}>
          <Flex justify="center" direction="column" height="100%">
            <Section w={538} h={298}>
              <Flex direction="column" gap={28}>
                <Flex direction="column" gap={8}>
                  <Text size="medium" color="black-900" font="inter" weight="semiBold">
                    Best seller
                  </Text>
                  <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h3">
                    Create your dream shop instantly.
                  </Heading>
                  <Section w={420}>
                    <Text size="large" color="black-900" weight="regular">
                      Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
                    </Text>
                  </Section>
                </Flex>
                <Section>
                  <Button variant="solid" size="medium" roundness="sharp">
                    See Collection
                  </Button>
                </Section>
              </Flex>
            </Section>
          </Flex>
          <Position top={0} left={0} zIndex={-1} position="absolute">
            <Section w={1440} h={800}>
              <img src={homepage2} alt="this is the homepage2" />
            </Section>
          </Position>
        </Section>
      </Position>
    ),
  },
  {
    id: 11,
    content: (
      <Position position="relative">
        <Section w={1440} h={800}>
          <Flex justify="center" direction="column" align="center" height="100%">
            <Section w={1200} h={298}>
              <Flex direction="column" gap={28} align="center">
                <Flex direction="column" align="center" justify="center" gap={8}>
                  <Text size="medium" color="white" font="inter" weight="semiBold">
                    Sale
                  </Text>
                  <Heading font="spaceGrotesk" color="white" weight="moderate" size="h3">
                    Indulge yourself with the finest kimonos.
                  </Heading>
                  <Section w={420}>
                    <Text size="large" color="white" weight="regular">
                      Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
                    </Text>
                  </Section>
                </Flex>
                <Section>
                  <Button variant="solid" size="medium" roundness="sharp">
                    See Collection
                  </Button>
                </Section>
              </Flex>
            </Section>
          </Flex>
          <Position top={0} left={0} zIndex={-1} position="absolute">
            <Section w={1440} h={800}>
              <img src={homepage3} alt="this is the homepage3" />
            </Section>
          </Position>
        </Section>
      </Position>
    ),
  },
];
const reactNodeSlides2: SliderSlide[] = [
  {
    id: 10,
    content: (
      <Position position="relative">
        <Section h={350}>
          <ImagePlaceholder
            size="full"
            objectFit="cover"
            objectPosition="95%"
            src={homepage1}
            alt="this is the homepage1"
          >
            {' '}
            hello thể
          </ImagePlaceholder>
        </Section>
      </Position>
    ),
  },
  {
    id: 10,
    content: (
      <Position position="relative">
        <Section h={350}>
          <ImagePlaceholder
            size="full"
            objectFit="cover"
            objectPosition="95%"
            src={homepage2}
            alt="this is the homepage1"
          >
            {' '}
            hello thể
          </ImagePlaceholder>
        </Section>
      </Position>
    ),
  },
];
const reactNodeSlidesText: SliderSlide[] = [
  {
    id: 10,
    content: (
      <Section w={375} h={298} px={16} pt={24}>
        <Flex direction="column" gap={24}>
          <Flex direction="column" gap={8}>
            <Text size="small" color="black-900" font="inter" weight="semiBold">
              New Arrivals
            </Text>
            <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h5">
              Create your dream shop instantly.
            </Heading>
            <Section>
              <Text size="medium" color="black-900" weight="regular">
                Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
              </Text>
            </Section>
          </Flex>
          <Section>
            <Button variant="solid" size="small" roundness="sharp">
              See Collection
            </Button>
          </Section>
        </Flex>
      </Section>
    ),
  },
  {
    id: 10,
    content: (
      <Section w={375} h={298} px={16} pt={24}>
        <Flex direction="column" gap={24}>
          <Flex direction="column" gap={8}>
            <Text size="small" color="black-900" font="inter" weight="bold">
              Best Seller
            </Text>
            <Heading font="spaceGrotesk" color="black-900" weight="moderate" size="h5">
              Create your dream shop instantly.
            </Heading>
            <Section>
              <Text size="medium" color="black-900" weight="regular">
                Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.
              </Text>
            </Section>
          </Flex>
          <Section>
            <Button variant="solid" size="small" roundness="sharp">
              See Collection
            </Button>
          </Section>
        </Flex>
      </Section>
    ),
  },
];
export const HomePage = () => {
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // ✅ Set initial value after mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (screenWidth === null) {
    return null; // or loading skeleton while waiting for client
  }
  const handleIndexChange = (index: number) => {
    console.log('running');
    console.log(index);
    setCurrentIndex(index);
  };

  const isMobile = screenWidth <= 768; // ✅ more realistic breakpoint

  return (
    <Flex justify="center" align="center" width="100%">
      <Position position="relative">
        {isMobile ? (
          <Section>
            <Slider
              autoPlay={3000}
              onSlideChange={(current) => handleIndexChange(current)}
              height={350}
              width={375}
              slides={reactNodeSlides2}
            />
            <Slider
              showDots={false}
              currentIndex={currentIndex}
              height={350}
              width={375}
              slides={reactNodeSlidesText}
            />
          </Section>
        ) : (
          <Section w="100%">
            <Slider autoPlay={3000} height={800} width={1440} slides={reactNodeSlides} />
          </Section>
        )}
      </Position>
    </Flex>
  );
};
