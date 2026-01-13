import { Badge } from '@components/Atom/Badge/Badge';
import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';
import { Product } from '../types';

interface CarouselProductCardProps {
  product: Product;
}

export const CarouselProductCard = ({ product }: CarouselProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Position position="relative">
      <Section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        w={242}
        bgColor="white"
        overflow="hidden"
      >
        {/* Image */}
        <Section>
          <ImagePlaceholder
            size="s5"
            src={
              product.images[0]?.url ??
              'https://res.cloudinary.com/dnuicbze9/image/upload/v1766485855/productForProduct_ysfleb.png'
            }
            alt={product.title ?? 'Product Image'}
          />
        </Section>

        {/* Badges + Heart (same pattern as ProductCard) */}
        <Position position="absolute" top={0} left={0}>
          <Section w={242} px={12} py={12}>
            {isHovered && (
              <Flex width="100%" justify="space-between" align="center">
                <Flex gap={8}>
                  {product.isNew && <Badge size="small">NEW</Badge>}
                  {Number(product.salePercentage) > 0 && (
                    <Badge size="small" color="green">
                      -{product.salePercentage}%
                    </Badge>
                  )}
                </Flex>
                <Icons iconName="HeartIcon" iconSize={18} />
              </Flex>
            )}
          </Section>
        </Position>

        {/* Content */}
        <Section px={12} py={12}>
          <Flex direction="column" gap={6}>
            <Text size="special1" font="spaceGrotesk" color="black-900" weight="moderate">
              {product.title}
            </Text>

            <Flex gap={8} align="center">
              {product.isOnSale && Number(product.salePercentage) > 0 ? (
                <>
                  <Text size="small" color="black-900" weight="semiBold">
                    ${(product.price * (1 - (product?.salePercentage ?? 0) / 100)).toFixed(2)}
                  </Text>
                  <Text size="small" color="black-400" line>
                    ${product.price.toFixed(2)}
                  </Text>
                </>
              ) : (
                <Text size="small" color="black-900" weight="semiBold">
                  ${product.price.toFixed(2)}
                </Text>
              )}
            </Flex>
          </Flex>
        </Section>
      </Section>
    </Position>
  );
};
