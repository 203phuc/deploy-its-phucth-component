import { Flex } from '@components/Atom/Flex';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Section } from '@components/Atom/Section/Section';
import { Text } from 'src/components/Atom/Text/Text';
import { products } from '../data/SampleProduct';

export interface Product {
  id: number;
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

export interface CartItemProps {
  product?: Product[];
}

export const CartItem = ({ product }: CartItemProps) => {
  const items = product?.length ? product : products;

  if (!items.length) return <div>No items in the cart.</div>;

  return (
    <div>
      {items.map((item) => (
        <Section w={412} border="0px 0px 0px 2px black" h={134} key={item.id}>
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
              <Flex direction="column" gap={8}>
                <Text font="inter" size="small" color="black-900" weight="semiBold">
                  {item.name}
                </Text>
                <Text font="inter" color="black-600" size="xsmall" weight="regular">
                  Size: {item.size}, Color: {item.color}
                </Text>
                <Text font="inter" size="small" weight="regular">
                  Quantity: {item.quantity}
                </Text>
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
