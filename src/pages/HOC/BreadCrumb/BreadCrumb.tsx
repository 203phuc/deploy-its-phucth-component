import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { Text } from '@components/Atom/Text/Text';
import React from 'react';
import { BreadCrumbProps } from './types';
import { useBreadcrumb } from './useBreadcrumb';

export const BreadCrumb: React.FC<BreadCrumbProps> = ({
  items,
  separator = <Icons iconName="ChevronRightIcon" color="black-600" iconSize={12} />,
  gap = 2,
  maxItems,
  showHomeItem = true,
}) => {
  const { breadcrumbs, handleClick } = useBreadcrumb({ items, maxItems, showHomeItem });

  return (
    <Flex align="center" gap={gap}>
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item.id || index}>
          {index > 0 && (
            <Flex align="center" justify="center">
              {separator}
            </Flex>
          )}
          <Text
            onClick={(e) => handleClick(item, e)}
            size="xsmall"
            color={index === breadcrumbs.length - 1 ? 'black-900' : 'black-500'}
            className={index < breadcrumbs.length - 1 ? 'cursor-pointer' : 'cursor-default'}
          >
            {item.label}
          </Text>
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default BreadCrumb;
