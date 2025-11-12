import { Flex } from '@components/Atom/Flex';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { formatPrice } from '../../../util/formatPrice';

interface ProductCardProps {
  name: string;
  price: number;
  /** ISO 4217 currency code, e.g. 'USD', 'EUR' */
  currency?: string;
  imageUrl?: string;
  /** Mark product as new */
  isNew?: boolean;
  /** Sale price. Must be provided together with salePercentage */
  salePrice?: number;
  /** Sale discount percentage (e.g., 20 for 20% off). Must be provided together with salePrice */
  salePercentage?: number;
  /** Visual size variant for the card. Use 'small' for mobile compact layout */
  size?: 'default' | 'small';
}

// Helper function to get size configuration based on size prop
function getSizeConfig(size: 'default' | 'small') {
  const configs = {
    small: {
      card: { cardW: 163, cardH: 277, imageH: 217, badgeW: 49, badgeH: 24 },
      flex: { direction: 'column' as const, gap: 8 },
      text: { badge: 'xsmall' as const, name: 'smedium' as const, price: 'xsmall' as const },
    },
    default: {
      card: { cardW: 424, cardH: 631, imageH: 565, badgeW: 63, badgeH: 30 },
      flex: { direction: 'row' as const, gap: 12 },
      text: { badge: 'small' as const, name: 'special1' as const, price: 'small' as const },
    },
  };
  return configs[size];
}

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
  // Validate that salePrice and salePercentage are provided together

  const priceLabel = formatPrice(price, currency);

  // size variant configuration
  const config = getSizeConfig(size);
  const { card, flex, text } = config;

  return (
    <Section w={card.cardW} h={card.cardH}>
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
