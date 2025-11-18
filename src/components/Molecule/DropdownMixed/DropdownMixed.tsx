import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import React, { useEffect, useMemo, useRef } from 'react';
import { addUniqueIds } from 'src/util/uniqueId';
import { dropdownMixedVariants } from './style';
import type { DropdownMixedProps } from './type';

export const DropdownMixed: React.FC<DropdownMixedProps> = ({
  listItem,
  variant = 'navigation',
  closeOnClickOutside,
  isOpen,
  fitContent,
  onClose,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const items = useMemo(() => addUniqueIds(listItem ?? []), [listItem]);
  const variantProps = variant ? dropdownMixedVariants[variant] : {};

  useEffect(() => {
    if (!closeOnClickOutside || !isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose?.();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickOutside, isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={ref} style={{ display: 'inline-block', overflowY: 'auto' }}>
      <Section
        w={variantProps.width}
        h={fitContent ? 'fit-content' : variantProps.height}
        pt={variantProps.paddingTop}
        pl={variantProps.paddingLeft}
        pb={variantProps.paddingBot}
        pr={variantProps.paddingRight}
        {...props}
      >
        <Flex gap={variantProps.gap} direction="column">
          {items.map((item) => (
            <Text
              key={item.uid}
              font="inter"
              size={variantProps.textSize}
              color={item.disabled ? 'black-900' : variantProps.textColor}
              weight="regular"
              className={item.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
              style={variantProps.style}
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
