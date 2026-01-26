import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import React from 'react';
import { PaginationProps } from './types';
import { usePagination } from './usePagination';

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isMobile = false,
  maxVisiblePages = 6,
}) => {
  const { visiblePages } = usePagination({ currentPage, totalPages, maxVisiblePages });

  if (totalPages <= 1) {
    return null;
  }

  return (
    <Flex justify="center" align="center" gap={16}>
      <Flex gap={isMobile ? 24 : 32} align="center">
        {visiblePages.map((page, index) => {
          if (page === -1) {
            // Render dots
            return (
              <Text key={`dots-${index}`} size="small" color="black-600">
                ...
              </Text>
            );
          }

          return (
            <Button
              key={page}
              variant="text"
              size="small"
              onClick={() => onPageChange(page)}
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
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Pagination;
