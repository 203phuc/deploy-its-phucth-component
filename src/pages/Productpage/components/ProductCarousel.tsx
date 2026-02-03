import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { useProductCarousel } from '../hooks/useProductCarousel';
import { Product } from '../types';
import { CarouselProductCard } from './CarouselProductCard';

interface ProductCarouselProps {
  products: Product[];
  isMobile?: boolean;
}

export const ProductCarousel = ({ products, isMobile = false }: ProductCarouselProps) => {
  const { currentSlide, totalSlides, productsPerSlide, handlePrevious, handleNext, setCurrentSlide } =
    useProductCarousel({
      products,
      isMobile,
    });

  const handleSlideChange = (slideIndex: number): void => {
    setCurrentSlide(slideIndex);
  };

  if (products.length === 0) return null;

  // Mobile version - scrollable
  if (isMobile) {
    return (
      <Section w={343} my={24} mx={16}>
        {/* Header */}
        <Section mb={24}>
          <Flex justify="space-between" align="center">
            <Heading size="h6" font="spaceGrotesk" weight="moderate" color="black-900">
              You May Also Like
            </Heading>
          </Flex>
        </Section>

        {/* Scrollable Container */}
        <Section w="100%" overflow="scroll">
          <Flex direction="row" gap={8}>
            {products.map((product) => (
              <CarouselProductCard key={product.id} product={product} />
            ))}
          </Flex>
        </Section>
      </Section>
    );
  }

  // Desktop version - carousel
  return (
    <Section w={1108} my={52} mx={166}>
      {/* Header */}
      <Section mb={35}>
        <Flex justify="space-between" align="center">
          <Heading size="h5" font="spaceGrotesk" weight="moderate" color="black-900">
            You May Also Like
          </Heading>

          {/* Navigation Buttons */}
          <Flex gap={8}>
            <Icons
              boxSize={44}
              onClick={handlePrevious}
              iconName="ArrowLeftIcon"
              box
              boxRoundness="pill"
              boxFill="gray"
              iconSize={24}
            />
            <Icons
              box
              boxFill="gray"
              boxSize={44}
              onClick={handleNext}
              iconName="ArrowRightIcon"
              iconSize={24}
              boxRoundness="pill"
            />
          </Flex>
        </Flex>
      </Section>

      {/* Carousel Container */}
      <Section w="100%" overflow="hidden">
        <Section transform={`translateX(-${currentSlide * 100}%)`} transition="transform 0.4s ease">
          <Flex direction="row">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <Flex key={slideIndex} flex="0 0 100%" gap={46} justify="start">
                {products
                  .slice(slideIndex * productsPerSlide, (slideIndex + 1) * productsPerSlide)
                  .map((product) => (
                    <CarouselProductCard key={product.id} product={product} />
                  ))}
              </Flex>
            ))}
          </Flex>
        </Section>
      </Section>

      {/* Slide Indicators */}
      {totalSlides > 1 && (
        <Flex justify="center" gap={8}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <Section
              key={index}
              w={8}
              h={8}
              borderRadius="50%"
              bgColor={currentSlide === index ? 'var(--color-black-900)' : 'var(--color-black-300)'}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </Flex>
      )}
    </Section>
  );
};
