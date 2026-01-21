import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';

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
          <Text size="small" color="black-600" style={{ cursor: 'pointer' }}>
            View all
          </Text>
        </Flex>

        <Flex direction="column" gap={16}>
          {/* Show 3 fake items per page */}
          {Array.from({ length: 3 }, (_, index) => {
            const itemNumber = (currentPage - 1) * 3 + index + 1;
            return (
              <Section key={itemNumber} borderRadius="medium" p={16}>
                <Flex justify="space-between" align="center" style={{ width: '100%' }}>
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
        {totalPages > 1 && (
          <Flex justify="center" align="center" gap={16} style={{ marginTop: 24 }}>
            <Flex gap={isMobile ? 24 : 32} align="center">
              {/* Show first 3 pages */}
              {Array.from({ length: Math.min(3, totalPages) }, (_, index) => index + 1).map((page) => (
                <Button
                  key={page}
                  variant="text"
                  size="small"
                  onClick={() => handlePageChange(page)}
                  style={{ minWidth: 32, height: 32 }}
                >
                  <Section borderRadius="50%" bgColor={currentPage === page ? '#F5F5F5' : 'white'}>
                    <Flex
                      align="center"
                      justify="center"
                      width={currentPage === page ? 46 : ''}
                      height={currentPage === page ? 46 : ''}
                    >
                      <Text size="large" color="black-900" weight="semiBold">
                        {page}
                      </Text>
                    </Flex>
                  </Section>
                </Button>
              ))}

              {/* Show dots if more than 6 pages total */}
              {totalPages > 6 && (
                <Text size="small" color="black-600" style={{ margin: '0 8px' }}>
                  ...
                </Text>
              )}

              {/* Show current page if not in first 3 or last 3 */}
              {currentPage > 3 && currentPage < totalPages - 2 && (
                <Button
                  key={currentPage}
                  variant="solidBlack"
                  size="small"
                  onClick={() => handlePageChange(currentPage)}
                >
                  <Text size="small" color="white">
                    {currentPage}
                  </Text>
                </Button>
              )}

              {/* Show dots if current page is not in first 3 or last 3 */}
              {currentPage > 3 && currentPage < totalPages - 2 && (
                <Text size="large" color="black-600">
                  ...
                </Text>
              )}

              {/* Show last 3 pages */}
              {totalPages > 3 && (
                <>
                  {Array.from({ length: 3 }, (_, index) => totalPages - 2 + index).map((page) => (
                    <Button key={page} variant="text" size="small" onClick={() => handlePageChange(page)}>
                      <Section borderRadius="50%" bgColor={currentPage === page ? '#F5F5F5' : 'white'}>
                        <Flex
                          align="center"
                          justify="center"
                          width={currentPage === page ? 46 : ''}
                          height={currentPage === page ? 46 : ''}
                        >
                          <Text size="large" color="black-900" weight="semiBold">
                            {page}
                          </Text>
                        </Flex>
                      </Section>
                    </Button>
                  ))}
                </>
              )}
            </Flex>
          </Flex>
        )}
      </Flex>
    </Section>
  );
};
