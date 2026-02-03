import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';
import { Pagination } from '../../HOC/Pagination';

export interface WishlistSectionProps {
  isMobile?: boolean;
}

export const WishlistSection = ({ isMobile = false }: WishlistSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 99; // Simulate 99 pages

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Section w={isMobile ? '100%' : 880} bgColor="white" p={24}>
      <Flex direction="column" gap={16}>
        <Flex justify="space-between" align="center">
          <Text size={isMobile ? 'large' : 'xlarge'} weight="semiBold" color="black-900">
            My Wishlist (99 items)
          </Text>
          <Text size="small" color="black-600" className="cursor-pointer">
            View all
          </Text>
        </Flex>

        <Flex direction="column" gap={16}>
          {/* Show 3 fake items per page */}
          {Array.from({ length: 3 }, (_, index) => {
            const itemNumber = (currentPage - 1) * 3 + index + 1;
            return (
              <Section key={itemNumber} borderRadius="medium" p={16}>
                <Flex justify="space-between" align="center" className="w-full">
                  {/* Column 1: Image and Product Info */}
                  <Flex align="center" gap={24} flex={2}>
                    <Section w={128} h={170} borderRadius="medium" overflow="hidden">
                      <ImagePlaceholder
                        src={`https://picsum.photos/seed/item${itemNumber}/200/200`}
                        alt={`Item ${itemNumber}`}
                        size="full"
                      />
                    </Section>
                    <Flex justify="center" align="start" direction="column" gap={16} width={224} height={92}>
                      <Text size={isMobile ? 'small' : 'medium'} weight="semiBold" color="black-900">
                        Luxury Kanzo Shoes {itemNumber}
                      </Text>
                      <Text size={isMobile ? 'xsmall' : 'small'} color="black-600">
                        Size: 2XL, Color: Green
                      </Text>
                      <Button
                        variant="text"
                        size="xsmall"
                        onClick={() => console.log('Remove item:', itemNumber)}
                      >
                        <Flex gap={4} align="center">
                          <Icons iconName="TrashIcon" iconSize={16} />
                          <Text size="smedium" color="black-600">
                            Remove
                          </Text>
                        </Flex>
                      </Button>
                    </Flex>
                  </Flex>

                  {/* Column 2: Price */}
                  <Flex justify="center" flex={1}>
                    <Text size={isMobile ? 'medium' : 'large'} weight="moderate" color="black-900">
                      ${(89.99 + (itemNumber - 1) * 11.25).toFixed(2)}
                    </Text>
                  </Flex>
                  {/* Column 3: Select Option Button */}
                  <Flex justify="end" flex={1}>
                    <Button
                      variant="text"
                      size={isMobile ? 'small' : 'medium'}
                      roundness="round"
                      onClick={() => console.log('Select options for:', itemNumber)}
                    >
                      <Section px={26} py={10} border="2px solid #CBCBCB" borderRadius={6}>
                        <Flex gap={4} align="center">
                          <Text font="spaceGrotesk" weight="moderate" size="special2" color="black-900">
                            Select Option
                          </Text>
                        </Flex>
                      </Section>
                    </Button>
                  </Flex>
                </Flex>
              </Section>
            );
          })}
        </Flex>

        {/* Pagination Controls */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          isMobile={isMobile}
        />
      </Flex>
    </Section>
  );
};
