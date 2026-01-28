import { Badge } from '@components/Atom/Badge/Badge';
import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import Rating from '@components/Molecule/Rating/Rating';
import { useSharedRouter } from '../../context/RouterContext';
import { ProductCardProps, cardDimensions } from './hooks/type';

export const ProductCard = ({
  size,
  title,
  price,
  isNew,
  salePercentage,
  rating,
  imageUrl,
  description,
}: ProductCardProps) => {
  const { navigate } = useSharedRouter();

  const handleCardClick = () => {
    navigate('/product');
  };
  if (!price) return null;
  if (size === 'list' || size === 'listColumnFilter') {
    return (
      <Section py={24}>
        <Position position="relative">
          <Section w="100%" h={304} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <Flex gap={40} align="center">
              <ImagePlaceholder
                size="s30"
                src={
                  imageUrl ??
                  'https://res.cloudinary.com/dnuicbze9/image/upload/v1766485855/productForProduct_ysfleb.png'
                }
                alt={title ?? 'Product Image'}
              />
              <Position position="absolute" top={0} left={0}>
                <Section w={228} px={16} py={16}>
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
              <Section w={size === 'listColumnFilter' ? 726 : 1068} h={258}>
                <Flex direction="column" height="100%" gap={4}>
                  <Text size="special1" font="spaceGrotesk" color="black-900" weight="moderate">
                    {title}
                  </Text>
                  <Flex gap={8} align="center">
                    {salePercentage && Number(salePercentage) > 0 ? (
                      <>
                        <Text size="small" font="inter" color="black-900" weight="semiBold">
                          ${(price * (1 - Number(salePercentage) / 100)).toFixed(2)}
                        </Text>
                        <Text size="small" font="inter" color="black-400" weight="regular" line>
                          ${price.toFixed(2)}
                        </Text>
                      </>
                    ) : (
                      <Text size="small" font="inter" color="black-900" weight="semiBold">
                        ${price.toFixed(2)}
                      </Text>
                    )}
                  </Flex>
                  <Section mt={12}>
                    <Rating rating={rating ?? 0} size={16} />
                  </Section>
                  <Section mt={12} w={612} h={52}>
                    <Text>
                      {description ??
                        'If you want, I can make it even more compact so you don’t need to repeat keys at all. Do you want me to do that?'}
                    </Text>
                  </Section>
                  <Section mt={20} w={298} h={40}>
                    <Button size="xsmall" fullWidth roundness="round">
                      Select options
                    </Button>
                  </Section>
                  <Section mt={20} w={298} h={40}>
                    <Flex gap={32}>
                      <Button size="xsmall" variant="text" font="spaceGrotesk" roundness="round">
                        <Icons iconName="HeartIcon" iconSize={14}></Icons> Wishlist
                      </Button>
                      <Button size="xsmall" variant="text" font="spaceGrotesk" roundness="round">
                        <Icons iconName="HelpIcon" iconSize={14}></Icons> Ask Question
                      </Button>
                      <Button size="xsmall" variant="text" font="spaceGrotesk" roundness="round">
                        <Icons iconName="ShareIcon" iconSize={14}></Icons> Share
                      </Button>
                    </Flex>
                  </Section>
                </Flex>
              </Section>
            </Flex>
          </Section>
        </Position>
      </Section>
    );
  }

  const { w, h, imageSize } = cardDimensions[size!] ?? cardDimensions['5column'];

  return (
    <Position position="relative">
      <Section w={w} h={h} onClick={handleCardClick} style={{ cursor: 'pointer' }}>
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
            <Flex justify="space-between" align={size?.includes('Mobile') ? 'start' : 'center'}>
              <Flex direction={size?.includes('Mobile') ? 'column' : 'row'} gap={12}>
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
                  <Text size="small" font="inter" color="black-400" weight="regular" line>
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
