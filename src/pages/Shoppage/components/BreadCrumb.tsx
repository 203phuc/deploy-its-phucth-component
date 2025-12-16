import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { Text } from '@components/Atom/Text/Text';
import React, { useEffect } from 'react';

export interface BreadCrumbItem {
  id: string;
  label: string;
  path: string;
  onClick?: () => void;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
  separator?: React.ReactNode;
  gap?: number;
  className?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({
  items,
  separator = <Icons iconName="ChevronRightIcon" color="black-600" iconSize={16} />,
  gap = 2,
  className,
}) => {
  const handleClick = (item: BreadCrumbItem, index: number, e: React.MouseEvent) => {
    if (item.onClick) {
      item.onClick();
    } else if (index < items.length - 1) {
      e.preventDefault();
      window.history.pushState({}, '', item.path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };
  useEffect(() => {
    console.log('this is items', items);
  }, [items]);

  return (
    <Flex align="center" gap={gap} className={className}>
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && (
            <Flex align="center" justify="center">
              {separator}
            </Flex>
          )}
          <Text
            onClick={(e) => handleClick(item, index, e)}
            size="small"
            color={index === items.length - 1 ? 'black-900' : 'black-500'}
            weight={index === items.length - 1 ? 'bold' : 'regular'}
            className={index < items.length - 1 ? 'cursor-pointer' : 'cursor-default'}
          >
            {item.label}
          </Text>
        </React.Fragment>
      ))}
    </Flex>
  );
};

export default BreadCrumb;
