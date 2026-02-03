import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Text } from '@components/Atom/Text';

interface EmptyCartProps {
  isMobile: boolean;
}

export const EmptyCart = ({ isMobile }: EmptyCartProps) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={32}
      className={`min-h-96 ${isMobile ? 'px-6' : 'px-8'}`}
    >
      {/* Empty Cart Icon/Image */}
      <Flex className={`flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 md:h-48 md:w-48`}>
        <ImagePlaceholder
          src="https://res.cloudinary.com/dnuicbze9/image/upload/v1766379463/hompage2_pfkexw.png"
          alt="Empty cart"
          className="h-16 w-16 object-cover opacity-50 md:h-24 md:w-24"
        />
      </Flex>

      {/* Empty Cart Message */}
      <Flex direction="column" gap={16} align="center" className="max-w-md text-center">
        <Text size={isMobile ? '2xlarge' : '3xlarge'} weight="bold" color="black-900">
          Your cart is empty
        </Text>

        <Text size="small" color="black-600" align="center">
          Looks like you haven&apos;t added any products to your cart yet. Start shopping to fill it up!
        </Text>
      </Flex>

      {/* Action Buttons */}
      <Flex direction={isMobile ? 'column' : 'row'} gap={16} className="w-full max-w-sm">
        <Button variant="solidBlack" size="large" fullWidth className="w-full">
          Continue Shopping
        </Button>

        <Button variant="outlined" size="large" fullWidth className="w-full">
          View Favorites
        </Button>
      </Flex>

      {/* Shopping Suggestions */}
      <Flex direction="column" gap={16} className="w-full max-w-2xl">
        <Text size="medium" weight="semiBold" color="black-900" align="center">
          Popular Categories
        </Text>

        <Flex direction={isMobile ? 'column' : 'row'} gap={12} wrap="wrap" justify="center">
          {['Sneakers', 'Jackets', 'Accessories', 'Sale Items'].map((category) => (
            <Button
              key={category}
              variant="text"
              size="small"
              className="text-black-600 hover:text-black-900"
            >
              {category}
            </Button>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
