import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { Input } from '@components/Atom/Input/Input';
import { Logo } from '@components/Atom/Logo';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';
interface FlyoutMenuProps {
  setFlyoutMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const FlyoutMenu = ({ setFlyoutMenuOpen }: FlyoutMenuProps) => {
  const { width } = useScreenSize();

  if (width <= 400) {
    return (
      <Section bgColor="white" w={343} h="100vh" pt={16} px={16} pb={16}>
        <Flex direction="column" justify="space-between" height="100%">
          <Section>
            <Section w="100%">
              <Flex align="center" justify="space-between" width="100%">
                <Logo logoName="NayzakLogo" width={114} height={22} />
                <button
                  onClick={() => {
                    setFlyoutMenuOpen(false);
                  }}
                >
                  <Icons iconName="CloseIcon" iconSize={26} />
                </button>
              </Flex>
            </Section>

            <Section mt={28} w="100%" overflow="hidden auto">
              <Input
                size="large"
                placeholder="Search"
                iconStart={<Icons iconName="SearchIcon" iconSize={24} />}
              />
            </Section>
            <Section mt={16}>hello menu</Section>
          </Section>
          <Section>
            <Flex direction="column" gap={16}>
              <Input placeholder="Enter your coupon code" size="large" buttonEnd={<Button>Apply</Button>} />
              <Section px={16} py={16} border="1px solid var(--color-black-300)" borderRadius={8}>
                <Section mb={16}>
                  <Position position="relative">
                    <Flex gap={16} justify="center" width="100%" height={52} direction="column">
                      <Flex justify="space-between">
                        <Flex align="center" gap={3}>
                          <Icons iconName="CouponIcon" iconSize={20} color="black" />{' '}
                          <Text size="medium" color="black-900">
                            Label
                          </Text>
                        </Flex>
                        <Flex>
                          <Text color="teal-600">$0.00</Text>
                          <Button variant="text" font="inter">
                            <Text color="teal-600">[Remove]</Text>
                          </Button>
                        </Flex>
                      </Flex>
                      <Position position="absolute" zIndex={1000} bottom={0}>
                        <Section bgColor="var(--color-black-200)" w={376} h={1}></Section>
                      </Position>
                    </Flex>
                  </Position>
                </Section>
                <Position position="relative">
                  <Flex gap={16} justify="center" width="100%" height={52} direction="column">
                    <Flex justify="space-between">
                      <Text size="medium" color="black-900">
                        Subtotal
                      </Text>
                    </Flex>
                    <Position position="absolute" zIndex={1000} bottom={0}>
                      <Section bgColor="var(--color-black-200)" w={376} h={1}></Section>
                    </Position>
                  </Flex>
                </Position>
                <Section mb={24}>
                  <Position position="relative">
                    <Flex gap={16} justify="center" width="100%" height={52} direction="column">
                      <Flex justify="space-between"></Flex>
                    </Flex>
                  </Position>
                </Section>
                <Button size="medium" roundness="round" font="spaceGrotesk" fullWidth={true}>
                  Checkout
                </Button>
              </Section>
            </Flex>
          </Section>
        </Flex>
      </Section>
    );
  }
  return null;
};
