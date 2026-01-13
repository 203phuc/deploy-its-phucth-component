import { Timer } from '@components/Molecule/Timer';
import { useState } from 'react';
import { Button } from '../../../components/Atom/Button';
import { Flex } from '../../../components/Atom/Flex';
import { Icons } from '../../../components/Atom/Icons';
import { Input } from '../../../components/Atom/Input';
import { Section } from '../../../components/Atom/Section';
import { Text } from '../../../components/Atom/Text';
import { ColorSwatch } from '../../../pages/HOC/ColorSwatch';
import SizeSwatch from '../../../pages/HOC/SizeSwatch';

interface ProductDetailsProps {
  product: {
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    peopleViewing: number;
    colors: string[];
    sizes: string[];
  };
  isMobile?: boolean;
}

export const ProductDetails = ({ product, isMobile = false }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Flex direction="column" width={isMobile ? '100%' : 456}>
      <Flex direction="column" gap={16}>
        {/* Product Title and Rating */}
        <Flex direction="column" gap={8}>
          <Text size="xlarge" weight="bold" color="black-900">
            {product.name}
          </Text>
          <Text size="medium" color="black-600">
            {product.description}
          </Text>
          <Flex align="center" gap={8}>
            <Icons iconName="StarIcon" iconSize={16} color="black-900" />
            <Text size="small" color="black-900">
              {product.rating.toFixed(1)} ({product.reviewCount} reviews)
            </Text>
          </Flex>
        </Flex>

        {/* Price */}
        <Flex align="center" gap={8}>
          <Text size="xlarge" weight="bold" color="black-900">
            ${product.price.toFixed(2)}
          </Text>
          {product.originalPrice && (
            <Text size="medium" color="black-400" line>
              ${product.originalPrice.toFixed(2)}
            </Text>
          )}
        </Flex>

        {/* People Viewing */}
        <Text size="small" color="black-600">
          <Flex align="center" gap={4}>
            <Icons iconName="ViewIcon" iconSize={24} />
            <Text weight="bold" color="black-900">
              {product.peopleViewing}
            </Text>
            people are viewing this product
          </Flex>
        </Text>
      </Flex>

      <Section mt={24} w="100%" h={1} bgColor="var(--color-black-200)" />

      {/* Timer */}
      <Section py={24}>
        <Flex direction="row">
          <Text size="small" weight="semiBold" color="red-500">
            Hurry up!
          </Text>
          <Text size="small" weight="regular" color="black-900">
            , offer expires in:
          </Text>
        </Flex>
        <Timer endDate="31/12/2023" start />
      </Section>
      <Section w="100%" h={1} bgColor="var(--color-black-200)" />

      {/* Color Swatch */}
      {product.colors && product.colors.length > 0 && (
        <Section mt={24}>
          <Text size="small" weight="semiBold" color="black-900">
            Color
          </Text>
          <ColorSwatch colors={product.colors} />
        </Section>
      )}

      {/* Size Swatch */}
      {product.sizes && product.sizes.length > 0 && (
        <Section mt={24}>
          <Flex justify="space-between" align="center">
            <Text size="small" weight="semiBold" color="black-900">
              Size
            </Text>
            <Button variant="text" size="xsmall">
              <Flex gap={8}>
                <Icons iconName="RulerIcon" iconSize={18} />
                <Text size="xsmall" weight="semiBold" color="black-900">
                  SIZE GUIDE
                </Text>
              </Flex>
            </Button>
          </Flex>
          <SizeSwatch sizes={product.sizes} />
        </Section>
      )}

      <Section pb={20} />

      <Flex direction="column" gap={24} justify="space-between">
        <Flex direction="column" gap={16} width={456}>
          {/* Add to Cart Section */}
          <Flex direction={isMobile ? 'column' : 'row'} gap={16}>
            <Flex align="center" width={127} height={52} gap={8} style={{ minWidth: 82 }}>
              <Input
                textAlign="center"
                size="xlarge"
                textSize="medium"
                variant="noBorder"
                bgColor="gray"
                iconEnd={
                  <Icons
                    box
                    iconName="PlusIcon"
                    iconSize={16}
                    color="black"
                    style={{ cursor: 'pointer' }}
                    onClick={() => updateQuantity(quantity + 1)}
                  />
                }
                iconStart={
                  <Icons
                    box
                    iconName="MinusIcon"
                    iconSize={16}
                    color={quantity <= 1 ? 'black-600' : 'black'}
                    style={{
                      cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
                      opacity: quantity <= 1 ? 0.5 : 1,
                    }}
                    onClick={() => quantity > 1 && updateQuantity(quantity - 1)}
                  />
                }
                type="text"
                value={quantity.toString()}
                readOnly
              />
            </Flex>
            <Button size="medium" variant="outlined" fullWidth roundness="sharp">
              Add to Cart
            </Button>
          </Flex>

          {/* Buy Now Button */}
          <Button size="medium" fullWidth roundness="sharp">
            Buy Now
          </Button>
        </Flex>

        {/* Wishlist, Ask Question, Share */}
        <Flex justify={isMobile ? 'space-between' : 'start'} gap={isMobile ? 0 : 32}>
          <Button variant="text" size="small" hasIcon>
            <Icons iconName="HeartIcon" iconSize={16} />
            <span>Wishlist</span>
          </Button>
          <Button variant="text" size="small" hasIcon>
            <Icons iconName="HelpIcon" iconSize={16} />
            <span>Ask Question</span>
          </Button>
          <Button variant="text" size="small" hasIcon>
            <Icons iconName="ShareIcon" iconSize={16} />
            <span>Share</span>
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
