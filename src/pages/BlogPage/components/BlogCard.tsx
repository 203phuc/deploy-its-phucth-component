import { Flex } from '@components/Atom/Flex';

import { Heading } from '@components/Atom/Heading';

import { Icons } from '@components/Atom/Icons';

import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder/ImagePlaceholder';

import { Link } from '@components/Atom/Link';

import { Section } from '@components/Atom/Section';

import { Text } from '@components/Atom/Text';

import { TextSize } from '@components/Atom/Text/type';

import { ColumnType } from '@pages/HOC/hooks/type';

interface BlogCardProps {
  id?: number;

  imageUrl?: string;

  title?: string;

  date?: string;

  description?: string;

  size?: ColumnType;
}

const blogCardDimensions = {
  '5column': { w: 241.5, imageHeight: 231, padding: 16 },

  '4column': { w: 310, imageHeight: 231, padding: 20 },

  '3column': { w: 424, imageHeight: 231, padding: 24 },

  '2column': { w: 652, imageHeight: 522, padding: 32 },

  list: { w: '100%', imageHeight: 231, padding: 24 },

  '2columnMobile': { w: '100%', imageHeight: 200, padding: 16 },

  listMobile: { w: '100%', imageHeight: 160, padding: 16 },

  '4columnFilter': { w: 228, imageHeight: 231, padding: 16 },

  '3columnFilter': { w: 313, imageHeight: 231, padding: 18 },

  '2columnFilter': { w: 483, imageHeight: 386, padding: 20 },

  listColumnFilter: { w: '100%', imageHeight: 231, padding: 20 },
} as const;

export const BlogCard = ({ id, imageUrl, title, date, description, size = '3column' }: BlogCardProps) => {
  const formatDate = (dateString?: string) => {
    if (!dateString) return '';

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',

      month: 'long',

      day: 'numeric',
    };

    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const dimensions = blogCardDimensions[size] || blogCardDimensions['3column'];

  const isList = size === 'list' || size === 'listMobile';

  const isMobile = size === '2columnMobile' || size === 'listMobile';

  const getTitleSize = (): TextSize => {
    if (isMobile) {
      return 'medium';
    }

    return 'large';
  };

  const getImageHeight = (): number => {
    if (isList) {
      return isMobile ? 160 : 231;
    }

    return dimensions.imageHeight;
  };

  const getImageWidth = (): string => {
    if (isList) {
      return isMobile ? '100%' : '310px';
    }

    return '100%';
  };

  const getListImageWidth = (): string => {
    if (isMobile && isList) {
      return '100%';
    }

    return '310px';
  };

  const getListImageHeight = (): number => {
    if (isMobile && isList) {
      return 160;
    }

    return 231;
  };

  return (
    <Link href={`/blog/${id}`} hoverUnderline underlineOffset="none">
      <Section w={dimensions.w} overflow="hidden" bgColor="white" style={{ cursor: 'pointer' }}>
        {isList ? (
          // List Layout - Horizontal on Desktop, Vertical on Mobile

          <Section p={dimensions.padding}>
            <Flex direction={isMobile ? 'column' : 'row'} gap={isMobile ? 16 : 24}>
              {/* Blog Image */}

              <Section w={getListImageWidth()} h={getListImageHeight()} overflow="hidden">
                <ImagePlaceholder
                  src={imageUrl ?? ''}
                  alt={title ?? 'Blog image'}
                  objectFit="cover"
                  objectPosition="center"
                  fallbackText="Blog"
                  size="full"
                />
              </Section>

              {/* Blog Content */}

              <Flex direction="column" gap={8} flex={1}>
                {/* Date */}

                <Text size={isMobile ? 'small' : 'smedium'} color="black-500" weight="regular">
                  {formatDate(date)}
                </Text>

                {/* Title */}

                <Heading size="h7" color="black-900" weight="semiBold" font="spaceGrotesk">
                  {title}
                </Heading>

                {/* Description */}

                {!isMobile && (
                  <Text size="medium" color="black-600" weight="regular">
                    {description}
                  </Text>
                )}

                {/* Read More Button */}

                <Section pt={8}>
                  <Link
                    href="#"
                    font="spaceGrotesk"
                    weight="moderate"
                    underlineOffset="none"
                    size="special1"
                    color="black-900"
                  >
                    Read More <Icons iconName="ArrowRightIcon" />
                  </Link>
                </Section>
              </Flex>
            </Flex>
          </Section>
        ) : (
          // Grid Layout - Vertical

          <Flex direction="column">
            {/* Blog Image */}

            <Section w={getImageWidth()} h={getImageHeight()} overflow="hidden">
              <ImagePlaceholder
                src={imageUrl ?? ''}
                alt={title ?? 'Blog image'}
                objectFit="cover"
                objectPosition="center"
                fallbackText="Blog"
                size="full"
              />
            </Section>

            {/* Blog Content */}

            <Section pt={dimensions.padding} w="100%">
              <Flex direction="column" gap={isMobile ? 8 : 12}>
                {/* Date */}

                <Text size={isMobile ? 'small' : 'smedium'} color="black-500" weight="regular">
                  {formatDate(date)}
                </Text>

                {/* Title */}

                <Text size={getTitleSize()} color="black-900" weight="semiBold" font="spaceGrotesk">
                  {title}
                </Text>
              </Flex>
            </Section>
          </Flex>
        )}
      </Section>
    </Link>
  );
};
