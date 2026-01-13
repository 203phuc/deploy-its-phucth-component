import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import Rating from '@components/Molecule/Rating/Rating';
import { Timer } from '@components/Molecule/Timer/Timer';
import { AskQuestionModal } from '@pages/HOC/AskQuestionModal';
import { BreadCrumb } from '@pages/HOC/BreadCrumb/BreadCrumb';
import { ColorSwatch } from '@pages/HOC/ColorSwatch';
import { SharePopup } from '@pages/HOC/SharePopup';
import SizeSwatch from '@pages/HOC/SizeSwatch';
import { useState } from 'react';
import { Product } from '../types';
import ProductGallery from './ProductGallery';

interface ProductSectionProps {
  product: Product;
  isMobile?: boolean;
}

export const ProductSection = ({ product, isMobile = false }: ProductSectionProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);
  const [isAskQuestionOpen, setIsAskQuestionOpen] = useState(false);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <Section w={isMobile ? 343 : 1108} my={isMobile ? 40 : 52} mx={isMobile ? 16 : 166}>
      <Flex
        direction={isMobile ? 'column' : 'row'}
        gap={isMobile ? 24 : 82}
        align="start"
        justify="space-between"
      >
        {/* Product Gallery */}
        <ProductGallery
          images={product.images}
          isNew={product.isNew}
          isOnSale={product.isOnSale}
          salePercentage={product.salePercentage}
          isMobile={isMobile}
        />

        {/* Product Details */}
        <Flex direction="column" width={isMobile ? 343 : 456}>
          <Flex direction="column" gap={16}>
            {/* Breadcrumb */}
            <Section w="100%">
              <Section mb={isMobile ? 16 : 8}>
                <BreadCrumb
                  items={[
                    { id: 'home', label: 'Home', path: '/' },
                    { id: 'category', label: 'Category', path: '/category' },
                    { id: 'product', label: product.title },
                  ]}
                />
              </Section>
              <Flex direction="column" gap={12}>
                {/* Product Title */}
                <Heading size="h5" font="spaceGrotesk" weight="moderate" color="black-900">
                  {product.title}
                </Heading>

                {/* Product Description */}
                <Text size="medium" color="black-600">
                  {product.description}
                </Text>

                {/* Rating and Reviews */}
                <Flex align="center" gap={8}>
                  <Rating rating={product.rating as 0 | 1 | 2 | 3 | 4 | 5} size={16} />
                  <Text size="small" color="black-400">
                    ({product.reviewCount} reviews)
                  </Text>
                </Flex>
              </Flex>
            </Section>
            {/* Price */}
            <Flex align="center" gap={8}>
              <Text size="4xlarge" color="black-900" weight="semiBold">
                ${product.price.toFixed(2)}
              </Text>
              {product.isOnSale && (
                <Text size="medium" color="black-400" line>
                  ${product.originalPrice?.toFixed(2)}
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
            <Section py={24}>
              <Text size="small" weight="regular">
                Color:
              </Text>
              <ColorSwatch colors={product.colors} />
            </Section>
          )}

          {/* Size Swatch */}
          {product.sizes && product.sizes.length > 0 && (
            <Section py={24}>
              <Flex justify="space-between" align="center">
                <Text size="small" weight="regular">
                  Size:
                </Text>
              </Flex>
              <SizeSwatch sizes={product.sizes} />
            </Section>
          )}
          <Section pb={20}>
            <Button variant="text" size="xsmall">
              <Flex gap={8}>
                <Icons iconName="RulerIcon" iconSize={18} />
                <Text size="xsmall" weight="semiBold" color="black-900">
                  SIZE GUIDE
                </Text>
              </Flex>
            </Button>
          </Section>
          <Flex direction="column" gap={24} justify="space-between">
            <Flex direction="column" gap={16} width={isMobile ? 343 : 456}>
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
              <Button variant="text" onClick={() => setIsAskQuestionOpen(true)} size="small" hasIcon>
                <Icons iconName="HelpIcon" iconSize={16} />
                <span>Ask Question</span>
              </Button>
              <Button
                onClick={() => {
                  setIsSharePopupOpen(true);
                }}
                variant="text"
                size="small"
                hasIcon
              >
                <Icons iconName="ShareIcon" iconSize={16} />
                <span>Share</span>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <SharePopup isOpen={isSharePopupOpen} onClose={() => setIsSharePopupOpen(false)} isMobile={isMobile} />
      <AskQuestionModal
        isOpen={isAskQuestionOpen}
        onClose={() => setIsAskQuestionOpen(false)}
        onSubmit={(question) => {
          console.log('Question submitted:', question);
          // Handle question submission logic here
        }}
      />
    </Section>
  );
};
