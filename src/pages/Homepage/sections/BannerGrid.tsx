import { Grid } from '@components/Atom/Grid';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Link } from '@components/Atom/Link';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { useBannerGrid } from './hooks/BannerGridHook';
import { type BannerGridProps, BannerItem } from './types';

/**
 * BannerGrid
 * Layout rules (implemented with Grid/Section/Position/Flex/ImagePlaceholder/Link/Text/Heading only):
 * - two columns (50% / 50%)
 * - left column: single full-height box with name at top-left
 * - right column: two rows, each with a box; name displayed bottom-left and an "Explore" Link
 */
export const BannerGrid = ({ items, isMobile }: BannerGridProps) => {
  const { left, topRight, bottomRight } = useBannerGrid(items, isMobile);
  // Mobile breakpoint: when width is below 400px, render as stacked rows (one column)
  if (isMobile) {
    const mobileItems = [left, topRight, bottomRight].filter((i): i is BannerItem => i != null);

    return (
      <Section h={969} w="100%" px={16} py={24}>
        <Grid columns={1} gap={16} justify="center" align="center">
          {mobileItems.map((it, index) => (
            <Position key={it.id} position="relative">
              <Section w={343} h={index === 0 ? 453 : 218}>
                <ImagePlaceholder
                  src={it.imageUrl}
                  alt={it.name}
                  size="full"
                  objectFit="cover"
                  objectPosition="95%"
                />
                <Position position="absolute" top={index === 0 ? 32 : 138} left={24} zIndex={2}>
                  <Heading size="h7" weight="moderate" color="black-900" font="spaceGrotesk">
                    {it.name}
                  </Heading>
                  <Section mt={index === 0 ? 12 : 4}>
                    <Link
                      color="black-900"
                      underlineOffset="none"
                      weight="moderate"
                      size="smedium"
                      href={it.link ?? '#'}
                    >
                      Explore
                    </Link>
                  </Section>
                </Position>
              </Section>
            </Position>
          ))}
        </Grid>
      </Section>
    );
  }

  return (
    <Section w="100%" h={894} px={52} py={52}>
      <Grid columns="1fr 1fr" gap={32} height={894}>
        {/* Left column: one full box */}
        <Section h={790}>
          <Position position="relative">
            <Section h={790}>
              <ImagePlaceholder size="full" objectFit="cover" src={left?.imageUrl} alt={left?.name} />
              {/* name at top-left */}
              <Position position="absolute" top={48} left={48} zIndex={2}>
                <Heading size="h5" weight="moderate" color="black-900" font="spaceGrotesk">
                  {topRight?.name}
                </Heading>
                <Section mt={8}>
                  <Link weight="moderate" color="black-900" href={topRight?.link ?? '#'}>
                    Explore
                    <Icons iconSize={20} iconName="ArrowRightIcon" />
                  </Link>
                </Section>
              </Position>
            </Section>
          </Position>
        </Section>
        {/* Right column: two stacked boxes */}
        <Section h={790}>
          <Grid columns={1} rows="1fr 1fr" gap={32}>
            {/* Top-right box */}
            <Position position="relative">
              <Section w="100%" h={379}>
                <ImagePlaceholder
                  src={topRight?.imageUrl}
                  alt={topRight?.name}
                  size="full"
                  objectFit="cover"
                />
                <Position position="absolute" bottom={32} left={32} zIndex={2}>
                  <Heading size="h5" weight="moderate" color="black-900" font="spaceGrotesk">
                    {topRight?.name}
                  </Heading>
                  <Section mt={8}>
                    <Link weight="moderate" color="black-900" href={topRight?.link ?? '#'}>
                      Explore
                      <Icons iconSize={20} iconName="ArrowRightIcon" />
                    </Link>
                  </Section>
                </Position>
              </Section>
            </Position>

            {/* Bottom-right box */}
            <Position position="relative">
              <Section w="100%" h={379}>
                <ImagePlaceholder
                  src={bottomRight?.imageUrl}
                  alt={bottomRight?.name}
                  size="full"
                  objectFit="cover"
                />
                <Position position="absolute" bottom={32} left={32} zIndex={2}>
                  <Heading size="h5" weight="moderate" color="black-900" font="spaceGrotesk">
                    {bottomRight?.name}
                  </Heading>
                  <Section mt={8}>
                    <Link color="black-900" weight="moderate" href={bottomRight?.link ?? '#'}>
                      Explore
                      <Icons iconSize={20} iconName="ArrowRightIcon" />
                    </Link>
                  </Section>
                </Position>
              </Section>
            </Position>
          </Grid>
        </Section>
      </Grid>
    </Section>
  );
};

export default BannerGrid;
