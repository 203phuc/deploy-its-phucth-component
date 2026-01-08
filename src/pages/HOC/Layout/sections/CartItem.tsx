import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Section } from '@components/Atom/Section/Section';
import { useEffect, useState } from 'react';
import { Input } from 'src/components/Atom/Input';
import { Text } from 'src/components/Atom/Text/Text';
import { onSmallScreenChange } from '../../../../../src/util/mediaQueries';
import { products } from '../mockData/SampleProduct';
import type { CartItemProps, Product } from './types';

export const CartItem = ({ product, onQuantityChange }: CartItemProps) => {
  const [items, setItems] = useState<Product[]>(product?.length ? [...product] : [...products]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedItems = items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item));
    setItems(updatedItems);
    if (onQuantityChange) {
      onQuantityChange(id, newQuantity);
    }
  };

  const handleQuantityChange = (id: number, value: string) => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue > 0) {
      updateQuantity(id, numValue);
    } else if (value === '') {
      setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: 0 } : item)));
    }
  };

  if (!items.length) return <div>No items in the cart.</div>;
  return (
    <div>
      {items.map((item) => (
        <Section w={412} h={134} key={item.id}>
          <Flex justify="start" height="100%" align="center" gap={16}>
            <Section w={77} h={102}>
              <ImagePlaceholder
                size="full"
                src={item.image}
                objectFit="cover"
                objectPosition="center"
                alt={item.name}
              />
            </Section>
            <Section>
              <Flex width={isSmallScreen ? 218 : 319} direction="column" gap={8}>
                <Text font="inter" size="small" color="black-900" weight="semiBold">
                  {item.name}
                </Text>
                <Text font="inter" color="black-600" size="xsmall" weight="regular">
                  Size: {item.size}, Color: {item.color}
                </Text>
                <Flex align="center" justify="space-between" gap={8}>
                  <Flex align="center" direction="row" gap={4}>
                    <Section w={82} h={32}>
                      <Input
                        textAlign="center"
                        size="small"
                        iconEnd={
                          <Icons
                            box
                            iconName="PlusIcon"
                            iconSize={16}
                            color="black"
                            style={{ cursor: 'pointer' }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)} // increment
                          />
                        }
                        iconStart={
                          <Icons
                            box
                            iconName="MinusIcon"
                            iconSize={16}
                            color="black"
                            style={{ cursor: 'pointer' }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)} // decrement
                          />
                        }
                        type="text"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        min={1}
                      />
                    </Section>
                  </Flex>
                  <Flex gap={8}>
                    <Text size="small" color="black-900" weight="semiBold">
                      ${item.price}
                    </Text>
                    <Icons iconName="TrashIcon" />
                  </Flex>
                </Flex>
              </Flex>
            </Section>
          </Flex>
          <Section bgColor="var(--color-black-200)" h={1}></Section>
        </Section>
      ))}
    </div>
  );
};

export default CartItem;
