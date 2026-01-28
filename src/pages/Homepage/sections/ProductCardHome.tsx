import { Flex } from '@components/Atom/Flex';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useSharedRouter } from '../../../context/RouterContext';
import { formatPrice } from '../../../util/formatPrice';
import { useProductCard } from './hooks/ProductCardHomeHook';
import { ProductCardProps } from './types';
// Helper function to get size configuration based on size prop

export const ProductCardHome = ({
  name,
  price,
  imageUrl,
  isNew,
  salePrice,
  salePercentage,
  currency = 'USD',
  size = 'default',
}: ProductCardProps) => {
  const { navigate } = useSharedRouter();

  const handleCardClick = () => {
    navigate('/product');
  };

  // Validate that salePrice and salePercentage are provided together

  const { config, priceLabel } = useProductCard({
    price,
    salePrice,
    salePercentage,
    currency,
    size,
  });
  const { card, flex, text } = config;

  return (
    <Section w={card.cardW} h={card.cardH} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <Position position="relative">
        <Section w="100%" h={card.imageH} mb={12}>
          <ImagePlaceholder src={imageUrl ?? ''} alt={name} size="full" objectFit="cover" />
          {/* Badges at top-left: New (black) and Sale (green) on same row */}
          <Position position="absolute" top={16} left={16} zIndex={2}>
            <Flex direction={flex.direction} gap={flex.gap}>
              {isNew && (
                <Section w={card.badgeW} h={card.badgeH} bgColor="var(--color-black-900)">
                  <Flex align="center" justify="center" height="100%">
                    <Text font="inter" color="white" weight="semiBold" size={text.badge}>
                      NEW
                    </Text>
                  </Flex>
                </Section>
              )}
              {Number(salePercentage) > 0 && (
                <Section w={card.badgeW} h={card.badgeH} bgColor="var(--color-green-400)">
                  <Flex align="center" justify="center" height="100%">
                    <Text font="inter" color="white" weight="semiBold" size={text.badge}>
                      -{salePercentage}%
                    </Text>
                  </Flex>
                </Section>
              )}
            </Flex>
          </Position>
        </Section>
      </Position>
      <Flex direction="column" width="100%" height={54} align="center">
        <Flex width="100%" align="center" justify="center">
          <Text font="spaceGrotesk" color="black-900" size={text.name} weight="semiBold">
            {name}
          </Text>
        </Flex>
        <Flex align="center" justify="center" gap={12} width="100%">
          {salePrice ? (
            <Text size={text.price} weight="bold" color="black-900">
              {salePrice && Number(salePercentage) > 0 ? `${formatPrice(salePrice, currency)}` : ''}
            </Text>
          ) : null}
          <Text size={text.price} weight="regular" color="black-400" line>
            {priceLabel}
          </Text>
        </Flex>
      </Flex>
    </Section>
  );
};

export default ProductCardHome;
