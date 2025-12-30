import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { Text } from '@components/Atom/Text/Text';
import React from 'react';
import { BreadCrumbProps, useBreadcrumb } from '../hooks/useBreadcrumb';

export const BreadCrumb: React.FC<BreadCrumbProps> = ({
  items,
  separator = <Icons iconName="ChevronRightIcon" color="black-600" iconSize={12} />,
  gap = 2,
}) => {
  const handleClick = useBreadcrumb({ items });
  return (
    <Flex align="center" gap={gap}>
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && (
            <Flex align="center" justify="center">
              {separator}
            </Flex>
          )}
          <Text
            onClick={(e) => handleClick(item, index, e)}
            size="xsmall"
            color={index === items.length - 1 ? 'black-900' : 'black-500'}
            className={index < items.length - 1 ? 'cursor-pointer' : 'cursor-default'}
          >
            {item.label}
          </Text>
        </React.Fragment>
      ))}
    </Flex>
  );
};
