import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';

export interface WishlistSectionProps {
  isMobile?: boolean;
}

export const WishlistSection = ({ isMobile = false }: WishlistSectionProps) => {
  const wishlistItems = [
    {
      id: 'wish-001',
      name: 'Classic White Sneakers',
      price: '$89.99',
      image: 'https://via.placeholder.com/150x150.png',
      inStock: true,
    },
    {
      id: 'wish-002',
      name: 'Denim Jacket',
      price: '$129.99',
      image: 'https://via.placeholder.com/150x150.png',
      inStock: false,
    },
    {
      id: 'wish-003',
      name: 'Leather Wallet',
      price: '$45.00',
      image: 'https://via.placeholder.com/150x150.png',
      inStock: true,
    },
  ];

  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={16}>
        <Flex justify="space-between" align="center">
          <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
            My Wishlist ({wishlistItems.length})
          </Text>
          <Text size="small" color="black-600" style={{ cursor: 'pointer' }}>
            View all
          </Text>
        </Flex>

        <Flex direction="column" gap={12}>
          {wishlistItems.map((item) => (
            <Flex
              key={item.id}
              justify="space-between"
              align="center"
              style={{ border: '1px solid var(--color-black-200)' }}
            >
              <Flex align="center" gap={12} flex={1}>
                <Section
                  w={60}
                  h={60}
                  borderRadius="medium"
                  bgColor="var(--color-black-100)"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />

                <Flex direction="column" gap={4} flex={1}>
                  <Text size={isMobile ? 'small' : 'medium'} weight="semiBold" color="black-900">
                    {item.name}
                  </Text>
                  <Text size={isMobile ? 'small' : 'medium'} weight="regular" color="black-700">
                    {item.price}
                  </Text>
                  {!item.inStock && (
                    <Text size={isMobile ? 'xsmall' : 'small'} weight="regular" color="red-500">
                      Out of Stock
                    </Text>
                  )}
                </Flex>
              </Flex>

              <Flex direction="column" gap={8}>
                <Text size="small" color="black-600" style={{ cursor: 'pointer' }}>
                  Add to Cart
                </Text>
                <Text size="small" color="red-500" style={{ cursor: 'pointer' }}>
                  Remove
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};
