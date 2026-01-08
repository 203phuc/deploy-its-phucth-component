import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { Text } from '@components/Atom/Text/Text';
import React from 'react';

interface BreadCrumbItem {
  label: string;
  href?: string;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
  gap?: number;
}

export const BreadCrumb: React.FC<BreadCrumbProps> = ({ items, gap = 8 }) => {
  return (
    <Flex direction="row" align="center" gap={gap}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Flex direction="row" align="center" gap={gap}>
            <Text font="inter" size="small" weight="regular" color="black-600">
              {item.label}
            </Text>
            {index < items.length - 1 && <Icons iconName="ChevronRightIcon" iconSize={16} />}
          </Flex>
        </React.Fragment>
      ))}
    </Flex>
  );
};
