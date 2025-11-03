import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import React, { useEffect, useMemo, useRef } from 'react';
import { addUniqueIds } from 'src/util/uniqueId';
import { DropdownMixedProps } from './type';

export const DropdownMixed: React.FC<DropdownMixedProps> = ({
  listItem,
  gap = 16,
  paddingTop,
  paddingBot,
  paddingLeft,
  paddingRight,
  isOpen,
  onClose,
  closeOnClickOutside = false,
  width,
  height,
  textColor,
  textSize,
  fitContent = false,
  ...props
}) => {
  const items = useMemo(() => addUniqueIds(listItem ?? []), [listItem]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!closeOnClickOutside || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      onClose?.(); // call onClose on unmount
    };
  }, [closeOnClickOutside, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={ref} style={{ display: 'inline-block' }}>
      <Section
        w={width}
        h={fitContent ? 'fit-content' : height}
        pt={paddingTop}
        pl={paddingLeft}
        pb={paddingBot}
        pr={paddingRight}
        {...props}
      >
        <Flex gap={gap} direction="column">
          {items.map((item) => (
            <Text
              key={item.uid}
              font="inter"
              size={textSize}
              color={item.disabled ? 'black-500' : textColor}
              weight="regular"
              className={item.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
              onClick={() => !item.disabled && item.onSelect?.()}
            >
              {item.label}
            </Text>
          ))}
        </Flex>
      </Section>
    </div>
  );
};
