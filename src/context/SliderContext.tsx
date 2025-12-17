import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { type SliderSlide } from '@components/Molecule/Slider';
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { type SlideData } from './sliderTypes';

// Transform slide data into component format
const transformSlideData = (
  slide: SlideData,
): {
  desktop: SliderSlide;
  mobileImage: SliderSlide;
  mobileText: SliderSlide;
} => {
  return {
    desktop: {
      id: slide.id,
      content: (
        <Position position="relative">
          <Section w={1440} pl={52} h={800}>
            <Flex justify="center" direction="column" height="100%">
              <Section w={538} h={298}>
                <Flex direction="column" gap={28}>
                  <Flex direction="column" gap={8}>
                    <Text size="medium" color={slide.textColor} font="inter" weight="semiBold">
                      {slide.category}
                    </Text>
                    <Heading font="spaceGrotesk" color={slide.textColor} weight="moderate" size="h3">
                      {slide.title}
                    </Heading>
                    <Section w={420}>
                      <Text size="large" color={slide.textColor} weight="regular">
                        {slide.description}
                      </Text>
                    </Section>
                  </Flex>
                  <Section>
                    <Button variant="solid" size="medium" roundness="sharp">
                      {slide.buttonText}
                    </Button>
                  </Section>
                </Flex>
              </Section>
            </Flex>
            <Position top={0} left={0} zIndex={-1} position="absolute">
              <Section w={1440} h={800}>
                <ImagePlaceholder
                  size="full"
                  objectFit="cover"
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                />
              </Section>
            </Position>
          </Section>
        </Position>
      ),
    },
    mobileImage: {
      id: slide.id,
      content: (
        <Position position="relative">
          <Section h={350}>
            <ImagePlaceholder
              size="full"
              objectFit="cover"
              objectPosition="right1"
              src={slide.imageUrl}
              alt={`Slide ${slide.id}`}
            />
          </Section>
        </Position>
      ),
    },
    mobileText: {
      id: slide.id,
      content: (
        <Section bgColor="var(--color-black-100)" w={375} h={272} px={16} pt={24} pb={16}>
          <Flex direction="column" gap={24}>
            <Flex direction="column" gap={4}>
              <Text size="small" color={slide.textColor} font="inter" weight="semiBold">
                {slide.category}
              </Text>
              <Heading font="spaceGrotesk" color={slide.textColor} weight="moderate" size="h5">
                {slide.title}
              </Heading>
              <Section pt={4}>
                <Text size="medium" color={slide.textColor} weight="regular">
                  {slide.description}
                </Text>
              </Section>
            </Flex>
            <Section bgColor="black-100">
              <Button variant="solid" size="small" roundness="sharp">
                {slide.buttonText}
              </Button>
            </Section>
          </Flex>
        </Section>
      ),
    },
  };
};

// Initial demo data
const initialSlides: SlideData[] = [
  {
    id: 10,
    category: 'New Arrivals',
    title: 'Create your dream shop instantly.',
    description: 'Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.',
    buttonText: 'See Collection',
    imageUrl: '/assets/homepage1.png',
    textColor: 'black-900',
  },
  {
    id: 11,
    category: 'Best seller',
    title: 'Create your dream shop instantly.',
    description: 'Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.',
    buttonText: 'See Collection',
    imageUrl: '/assets/homepage2.png',
    textColor: 'black-900',
  },
  {
    id: 12,
    category: 'Sale',
    title: 'Indulge yourself with the finest kimonos.',
    description: 'Keep your everyday style chic and on-trend with our selection 20+ styles to choose from.',
    buttonText: 'See Collection',
    imageUrl: '/assets/homepage3.png',
    textColor: 'black-900',
  },
];

interface SliderContextType {
  desktopSlides: SliderSlide[];
  mobileImageSlides: SliderSlide[];
  mobileTextSlides: SliderSlide[];
  updateSlides: (newSlides: SlideData[]) => void;
  isLoading: boolean;
  error: Error | null;
}

const SliderContext = createContext<SliderContextType | undefined>(undefined);

export const useSliderData = () => {
  const context = useContext(SliderContext);
  if (!context) {
    throw new Error('useSliderData must be used within a SliderProvider');
  }
  return context;
};

export const SliderProvider = ({ children }: { children: ReactNode }) => {
  const [slides, setSlides] = useState<SlideData[]>(initialSlides);
  const [isLoading] = useState(false);
  const [error] = useState<Error | null>(null);

  const transformedSlides = useMemo(() => {
    const transformed = slides.map((slide) => transformSlideData(slide));
    return {
      desktopSlides: transformed.map((t) => t.desktop),
      mobileImageSlides: transformed.map((t) => t.mobileImage),
      mobileTextSlides: transformed.map((t) => t.mobileText),
    };
  }, [slides]);

  const updateSlides = useCallback((newSlides: SlideData[]) => {
    setSlides(newSlides);
  }, []);

  const value = useMemo(
    () => ({
      ...transformedSlides,
      updateSlides,
      isLoading,
      error,
    }),
    [transformedSlides, updateSlides, isLoading, error],
  );

  return <SliderContext.Provider value={value}>{children}</SliderContext.Provider>;
};
