import { Badge } from '@components/Atom/Badge/Badge';
import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { ImagePlaceholderSize } from '@components/Atom/ImagePlaceholder/type';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import Rating from '@components/Molecule/Rating/Rating';

export interface ProductCardProps {
  size?: 'list' | '5column' | '4column' | '3column' | '2column';
  imageUrl?: string;
  title?: string;
  price: number;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  isNew?: boolean;
  salePercentage?: number;
}

const cardDimensions = {
  '5column': { w: 241.5, h: 408, imageSize: 's5' as ImagePlaceholderSize },
  '4column': { w: 310, h: 499, imageSize: 's8' as ImagePlaceholderSize },
  '3column': { w: 424, h: 651, imageSize: 's19' as ImagePlaceholderSize },
  '2column': { w: 652, h: 975, imageSize: 's23' as ImagePlaceholderSize },
};

export const ProductCard = ({
  size,
  title,
  price,
  isNew,
  salePercentage,
  rating,
  imageUrl,
}: ProductCardProps) => {
  if (!price || size === 'list') return null;

  const { w, h, imageSize } = cardDimensions[size!] ?? cardDimensions['5column'];

  return (
    <Position position="relative">
      <Section w={w} h={h}>
        <ImagePlaceholder
          size={imageSize}
          src={
            imageUrl ??
            'https://res.cloudinary.com/dnuicbze9/image/upload/v1766485855/productForProduct_ysfleb.png'
          }
          alt={title ?? 'Product Image'}
        />
        <Position position="absolute" top={0} left={0}>
          <Section w={w} px={16} py={16}>
            <Flex justify="space-between" align="center">
              <Flex gap={12}>
                {isNew && <Badge size="small">NEW</Badge>}
                {Number(salePercentage) > 0 && (
                  <Badge size="small" color="green">
                    -{salePercentage}%
                  </Badge>
                )}
              </Flex>
              <Icons iconName="HeartIcon" iconSize={25} />
            </Flex>
          </Section>
        </Position>
        <Section pt={12}>
          <Flex direction="column" gap={4}>
            <Rating rating={rating ?? 0} size={16} />
            <Text size="special1" font="spaceGrotesk" color="black-900" weight="moderate">
              {title}
            </Text>
            <Flex gap={8} align="center">
              {salePercentage && Number(salePercentage) > 0 ? (
                <>
                  <Text size="small" font="inter" color="black-900" weight="semiBold">
                    ${(price * (1 - Number(salePercentage) / 100)).toFixed(2)}
                  </Text>
                  <Text
                    size="small"
                    font="inter"
                    color="black-500"
                    weight="semiBold"
                    style={{ textDecoration: 'line-through' }}
                  >
                    ${price.toFixed(2)}
                  </Text>
                </>
              ) : (
                <Text size="small" font="inter" color="black-900" weight="semiBold">
                  ${price.toFixed(2)}
                </Text>
              )}
            </Flex>
          </Flex>
        </Section>
      </Section>
    </Position>
  );
};
