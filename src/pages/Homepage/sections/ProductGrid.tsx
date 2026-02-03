import Flex from '@components/Atom/Flex/Flex';
import { Grid } from '@components/Atom/Grid';
import { Link } from '@components/Atom/Link/Link';
import { Section } from '@components/Atom/Section';
import { link } from '../mockData/products';
import { useProductGrid } from './hooks/ProductGridHook';
import ProductCardHome from './ProductCardHome';
import type { ProductGridProps } from './types';

const ProductGrid = ({ links = link, isMobile }: ProductGridProps) => {
  const { selectedLink, handleLinkClick, displayProducts } = useProductGrid(links);

  return (
    <Section w="100%" px={isMobile ? 16 : 52} py={isMobile ? 24 : 52}>
      <Flex direction="column" gap={isMobile ? 0 : 52}>
        <Flex justify="center" align="center" width="100%" height={74}>
          <Flex gap={isMobile ? 32 : 56} justify="center" align="center" width="fit-content">
            {links
              ? links.map((l) => {
                  const isSelected = selectedLink === l.url;
                  return (
                    <Link
                      color={isSelected ? 'black-900' : 'black-400'}
                      key={l.url}
                      font="inter"
                      href="#"
                      weight={isSelected ? 'semiBold' : 'regular'}
                      underlineThickness="thin"
                      size={isMobile ? 'medium' : '3xlarge'}
                      hoverUnderline={!isSelected}
                      underlineOffset="none"
                      onClick={(e) => {
                        handleLinkClick(l.url);
                        globalThis.history.pushState({}, '', globalThis.location.pathname + '/' + l.url);
                        e.preventDefault();
                      }}
                    >
                      {l.label}
                    </Link>
                  );
                })
              : null}
          </Flex>
        </Flex>
        {isMobile ? (
          <Grid columns={2} columnGap={17} rowGap={32} align="start">
            {displayProducts.map((p) => (
              <div key={p.id} className="flex justify-center">
                <ProductCardHome
                  name={p.name}
                  price={p.prices}
                  imageUrl={p.imageUrl}
                  currency={p.currency}
                  isNew={p.isNew}
                  salePrice={p.salePrice}
                  salePercentage={p.salePercentage}
                  size="small"
                />
              </div>
            ))}
          </Grid>
        ) : (
          <Grid columns={3} columnGap={32} rowGap={56} align="start">
            {displayProducts.map((p) => (
              <div key={p.id} className="flex justify-center">
                <ProductCardHome
                  name={p.name}
                  price={p.prices}
                  imageUrl={p.imageUrl}
                  currency={p.currency}
                  isNew={p.isNew}
                  salePrice={p.salePrice}
                  salePercentage={p.salePercentage}
                />
              </div>
            ))}
          </Grid>
        )}
      </Flex>
    </Section>
  );
};

export default ProductGrid;
