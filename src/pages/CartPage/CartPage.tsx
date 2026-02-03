import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import Heading from '@components/Atom/Heading/Heading.tsx';
import { Icons } from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Input } from '@components/Atom/Input';
import { Position } from '@components/Atom/Position/Position.tsx';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useRouter } from '@pages/CustomHook/navigateHook';
import { CartItem as CartItemComponent } from './components/CartItem';
import { CartSummary } from './components/CartSummary';
import { EmptyCart } from './components/EmptyCart.tsx';
import { useCartPage, type CartItem, type UseCartPageReturn } from './hooks/useCartPage.ts';

const CartPageContent = () => {
  const { isMobile, cartItems, totalItems, totalPrice, updateQuantity, removeItem }: UseCartPageReturn =
    useCartPage();
  const { navigate } = useRouter();

  if (cartItems.length === 0) {
    return <EmptyCart isMobile={isMobile} />;
  }

  if (isMobile) {
    // Mobile Layout - Stacked with FlyoutCart-style items
    return (
      <Section w={343}>
        <Flex direction="column" gap={16}>
          {/* Header */}
          <Section py={16}>
            <Flex justify="center" align="center" width="100%">
              <Heading font="spaceGrotesk" size="h5" weight="moderate" color="black-900">
                Cart
              </Heading>
            </Flex>
          </Section>

          {/* Cart Items Count */}
          <Flex justify="center" align="center" width="100%">
            <Text size="small" color="black-600">
              {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
            </Text>
          </Flex>

          {/* Mobile Delivery Progress Section */}
          <Section w={343} py={16}>
            <Flex direction="column" align="center" gap={12}>
              <Text size="medium" weight="moderate" color="black-900" align="center">
                Shop for $0 more to enjoy <b>FREE Shipping</b>
              </Text>
              <Section py={20}>
                <Flex justify="center" height={8} align="center">
                  <Section w={300} h={8} bgColor="#E5E5E5" borderRadius={4}>
                    <Flex justify="start" align="center">
                      <Section w="60%" h={8} bgColor="#10B981" borderRadius={4}>
                        <Position position="relative">
                          <Flex justify="end" gap={4}>
                            <Position position="absolute" right={0} top={-18}>
                              <Icons
                                box
                                boxFill="white"
                                boxSize={45}
                                boxRoundness="pill"
                                iconName="TruckIcon"
                                iconSize={24}
                                color="black"
                              />
                            </Position>
                          </Flex>
                        </Position>
                      </Section>
                    </Flex>
                  </Section>
                </Flex>
              </Section>
            </Flex>
          </Section>

          {/* Mobile Cart Items - FlyoutCart style */}
          <Flex direction="column" gap={8}>
            {cartItems.map((item: CartItem) => (
              <Section w={343} h={134} key={item.id}>
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
                    <Flex width={250} direction="column" gap={8}>
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
                                  className="cursor-pointer"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                />
                              }
                              iconStart={
                                <Icons
                                  box
                                  iconName="MinusIcon"
                                  iconSize={16}
                                  color="black"
                                  className="cursor-pointer"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                />
                              }
                              type="text"
                              value={item.quantity}
                              onChange={(e) => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value) && value >= 1) {
                                  updateQuantity(item.id, value);
                                }
                              }}
                              min={1}
                            />
                          </Section>
                        </Flex>
                        <Flex gap={8}>
                          <Text size="small" color="black-900" weight="semiBold">
                            ${item.price}
                          </Text>
                          <Icons
                            iconName="TrashIcon"
                            className="cursor-pointer"
                            onClick={() => removeItem(item.id)}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  </Section>
                </Flex>
                <Section bgColor="#E5E5E5" h={1}></Section>
              </Section>
            ))}
          </Flex>

          {/* Mobile Coupon Section */}
          <Section w={343} p={16} border="1px solid #E5E5E5" borderRadius={8}>
            <Flex direction="column" gap={16}>
              <Text size="medium" weight="semiBold" color="black-900">
                Have coupon ?
              </Text>
              <Text size="small" color="black-600">
                Add your code for an instant cart discount
              </Text>
              <Input placeholder="Enter your coupon code" size="large" buttonEnd={<Button>Apply</Button>} />
            </Flex>
          </Section>

          {/* Mobile Cart Summary */}
          <Section w={343} p={16} border="1px solid #E5E5E5" borderRadius={8}>
            <Flex direction="column" gap={16}>
              <Text size="medium" weight="semiBold" color="black-900">
                Cart Summary
              </Text>

              <Flex direction="column" gap={12}>
                <Flex justify="space-between" align="center">
                  <Text size="small" color="black-600">
                    Subtotal ({totalItems} items)
                  </Text>
                  <Text size="small" weight="semiBold" color="black-900">
                    ${totalPrice.toFixed(2)}
                  </Text>
                </Flex>

                <Flex justify="space-between" align="center" className="border-t border-gray-200 pt-4">
                  <Text size="medium" weight="semiBold" color="black-900">
                    Total
                  </Text>
                  <Text size="large" weight="bold" color="black-900">
                    ${totalPrice.toFixed(2)}
                  </Text>
                </Flex>
              </Flex>

              <Button
                variant="solidBlack"
                size="medium"
                fullWidth
                roundness="round"
                onClick={() => navigate('/checkout')}
              >
                Checkout
              </Button>
            </Flex>
          </Section>
        </Flex>
      </Section>
    );
  }

  // Desktop Layout
  return (
    <Section w={1108}>
      <Flex direction="column" gap={24}>
        {/* Header */}
        <Section py={52}>
          <Flex justify="center" align="center" width="100%">
            <Heading font="spaceGrotesk" size={isMobile ? 'h7' : 'h3'} weight="moderate" color="black-900">
              Cart
            </Heading>
          </Flex>
        </Section>

        {/* Delivery Progress Section */}
        <Section w={1108} py={16}>
          <Flex direction="column" align="center" gap={12}>
            <Text size="medium" weight="moderate" color="black-900" align="center">
              Shop for $0 more to enjoy <b>FREE Shipping</b>
            </Text>
            <Section py={20}>
              <Flex justify="center" height={8} align="center">
                <Section w={474} h={8} bgColor="#E5E5E5" borderRadius={4}>
                  <Flex justify="start" align="center">
                    <Section w="60%" h={8} bgColor="#10B981" borderRadius={4}>
                      <Position position="relative">
                        <Flex justify="end" gap={4}>
                          <Position position="absolute" right={0} top={-18}>
                            <Icons
                              box
                              boxFill="white"
                              boxSize={45}
                              boxRoundness="pill"
                              iconName="TruckIcon"
                              iconSize={24}
                              color="black"
                            />
                          </Position>
                        </Flex>
                      </Position>
                    </Section>
                  </Flex>
                </Section>
              </Flex>
            </Section>
          </Flex>
        </Section>

        {/* Cart Content */}
        <Flex direction="column" gap={24}>
          {/* Column Headers */}
          <Section py={12}>
            <Flex justify="space-between" align="center" className="w-full">
              <Flex flex={55}>
                <Text size="special1" weight="moderate" color="black-900" font="spaceGrotesk">
                  Product
                </Text>
              </Flex>
              <Flex justify="center" flex={1}>
                <Text size="special1" weight="moderate" color="black-900" font="spaceGrotesk">
                  Quantity
                </Text>
              </Flex>
              <Flex justify="center" flex={1}>
                <Text size="special1" weight="moderate" color="black-900" font="spaceGrotesk">
                  Price
                </Text>
              </Flex>
              <Flex justify="end" flex={1}>
                <Text size="special1" weight="moderate" color="black-900" font="spaceGrotesk">
                  Subtotal
                </Text>
              </Flex>
            </Flex>
          </Section>
          <Section w="100%" h={1} bgColor="#E5E5E5"></Section>
          {/* Cart Items */}
          <Flex direction="column">
            {cartItems.map((item: CartItem) => (
              <CartItemComponent
                key={item.id}
                item={item}
                isMobile={isMobile}
                onUpdateQuantity={(quantity: number) => updateQuantity(item.id, quantity)}
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </Flex>

          {/* Bottom Section */}
          <Flex justify="space-between" align="start" gap={24}>
            {/* Left Section - Coupon Input */}
            <Flex flex={1}>
              <Section w={424} p={24}>
                <Flex direction="column" gap={16}>
                  <Text size="medium" weight="semiBold" color="black-900">
                    Have coupon ?
                  </Text>
                  <Text size="small" color="black-600">
                    Add your code for an instant cart discount
                  </Text>
                  <Input
                    placeholder="Enter your coupon code"
                    size="large"
                    buttonEnd={<Button>Apply</Button>}
                  />
                </Flex>
              </Section>
            </Flex>

            {/* Right Section - Cart Summary */}
            <Flex flex={1}>
              <Section w={538} h={418}>
                <CartSummary totalPrice={totalPrice} totalItems={totalItems} isMobile={isMobile} />
              </Section>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  );
};

export const CartPage = () => {
  return <CartPageContent />;
};
