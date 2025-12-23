import { Badge } from '@components/Atom/Badge/Badge';
import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import Rating from '@components/Molecule/Rating/Rating';

interface ProductCardProps {
  size?: 'list' | '5column' | '4column' | '3column' | '2column';
  imageUrl?: string;
  title?: string;
  price?: number;
  rating?: 0 | 1 | 2 | 3 | 4 | 5;
  isNew?: boolean;
  salePercentage?: number;
}

export const ProductCard = ({ size, title, isNew, salePercentage, rating }: ProductCardProps) => {
  if (size === 'list') {
    return null;
  } else if (size === '5column') {
    return (
      <Position position="relative">
        <Section w={241.5} h={408}>
          <ImagePlaceholder
            size="s5"
            src="https://res.cloudinary.com/dnuicbze9/image/upload/v1766485855/productForProduct_ysfleb.png"
            alt="Product Image"
          />
          <Position position="absolute" top={0} left={0}>
            <Section w={241.5} px={16} py={16}>
              <Flex justify="space-between" align="center">
                <Flex gap={12}>
                  {isNew && <Badge size="small">NEW</Badge>}
                  {Number(salePercentage) > 0 && (
                    <Badge size="small" color="green">
                      -{salePercentage}%
                    </Badge>
                  )}
                </Flex>
                <Icons iconName="HeartIcon" iconSize={20} />
              </Flex>
            </Section>
          </Position>
          <Section pt={12}>
            <Flex gap={4}>
              <Rating rating={rating ?? 0} size={16} />
              <Text>{title}</Text>
            </Flex>
          </Section>
        </Section>
      </Position>
    );
  } else if (size === '4column') {
    return (
      <Section bgColor="var(--color-black-100)" w={290} h={350}>
        4 Column Product Card
      </Section>
    );
  } else if (size === '3column') {
    return (
      <Section bgColor="var(--color-black-100)" w={387} h={350}>
        3 Column Product Card
      </Section>
    );
  } else if (size === '2column') {
    return (
      <Section bgColor="var(--color-black-100)" w={580} h={350}>
        2 Column Product Card
      </Section>
    );
  } else {
    return null;
  }
};
