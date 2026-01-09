import { Badge } from '@components/Atom/Badge/Badge';
import { Flex } from '@components/Atom/Flex';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section';
import { useEffect, useState } from 'react';

// ... (previous imports remain the same)
interface ProductImage {
  id: string;
  url: string;
  alt: string;
}
interface ProductGalleryProps {
  images: ProductImage[];
  isNew?: boolean;
  isOnSale?: boolean;
  salePercentage?: number;
  isMobile?: boolean; // Added isMobile prop
}

export const ProductGallery = ({
  images = [],
  isNew = false,
  isOnSale = false,
  salePercentage = 0,
  isMobile = false, // Default to false
}: ProductGalleryProps) => {
  const [selectedImageId, setSelectedImageId] = useState<string>('');

  // Set first image as selected when component mounts
  useEffect(() => {
    if (images.length > 0 && !selectedImageId) {
      setSelectedImageId(images[0].id);
    }
  }, [images, selectedImageId]);

  // Always show the first 4 images as thumbnails
  const thumbnailImages = images.slice(0, 4);
  const mainImage = images.find((img) => img.id === selectedImageId) ?? images[0];

  // Image dimensions based on mobile/desktop
  const mainImageDimensions = isMobile ? { width: 343, height: 457 } : { width: 570, height: 760 };

  return (
    <Flex direction="column" gap={isMobile ? 16 : 20} width={isMobile ? '100%' : 'fit-content'}>
      {/* Main Image */}
      <Section w={mainImageDimensions.width} h={mainImageDimensions.height}>
        <Position position="relative">
          <Section w={mainImageDimensions.width} h={mainImageDimensions.height}>
            <ImagePlaceholder
              src={mainImage?.url}
              alt={mainImage?.alt ?? 'Product image'}
              size="full"
              objectFit="cover"
            />

            {/* Status Badges */}
            <Position position="absolute" top={isMobile ? 12 : 16} left={isMobile ? 12 : 16}>
              <Section px={isMobile ? 12 : 16} py={isMobile ? 12 : 16}>
                <Flex gap={isMobile ? 8 : 12}>
                  {isNew && <Badge size={isMobile ? 'small' : 'large'}>NEW</Badge>}
                  {isOnSale && salePercentage > 0 && (
                    <Badge size={isMobile ? 'small' : 'large'} color="green">
                      -{salePercentage}%
                    </Badge>
                  )}
                </Flex>
              </Section>
            </Position>
          </Section>
        </Position>
      </Section>

      {/* Thumbnails - Only show on desktop */}
      {!isMobile && (
        <Flex gap={19}>
          {thumbnailImages.map((image) => (
            <Section
              key={image.id}
              w={128}
              h={170}
              border={selectedImageId === image.id ? '1px solid var(--color-black-900)' : ''}
              onClick={() => setSelectedImageId(image.id)}
            >
              <ImagePlaceholder src={image.url} alt={image.alt} size="full" objectFit="cover" />
            </Section>
          ))}
        </Flex>
      )}
    </Flex>
  );
};
// ... (rest of the component remains the same)

export default ProductGallery;
