import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';

export const IconBoxSection = () => {
  const { width } = useScreenSize();
  const isMobile = typeof width === 'number' && width < 400;
  if (isMobile) {
    return (
      <Section px={16} py={32}>
        <Flex direction="column" gap={30} align="center" justify="center">
          <Flex direction="row" gap={31}>
            <Section w={156} h={84}>
              <Flex direction="column" align="center" justify="center">
                <Section pb={8}>
                  <Icons iconSize={32} iconName="TruckIcon" />
                </Section>
                <Text size="smedium" font="spaceGrotesk" weight="semiBold">
                  Free shipping
                </Text>
                <Text size="xsmall" font="inter" weight="regular">
                  Order above $200
                </Text>
              </Flex>
            </Section>
            <Section w={156} h={84}>
              <Flex direction="column" align="center" justify="center">
                <Section pb={8}>
                  <Icons iconSize={32} iconName="MoneyIcon" />
                </Section>
                <Text size="smedium" font="spaceGrotesk" weight="semiBold">
                  Money-back
                </Text>
                <Text size="xsmall" font="inter" weight="regular">
                  30 day Guarantee
                </Text>
              </Flex>
            </Section>
          </Flex>
          <Flex direction="row" gap={31}>
            <Section w={156} h={84}>
              <Flex direction="column" align="center" justify="center">
                <Section pb={8}>
                  <Icons iconSize={32} strokeWidth={1} iconName="PhoneIcon" />
                </Section>
                <Text size="smedium" font="spaceGrotesk" weight="semiBold">
                  Premium Support
                </Text>
                <Text size="xsmall" font="inter" weight="regular">
                  Phone and email support
                </Text>
              </Flex>
            </Section>
            <Section w={156} h={84}>
              <Flex direction="column" align="center" justify="center">
                <Section pb={8}>
                  <Icons iconSize={32} iconName="LockIcon" />
                </Section>
                <Text size="smedium" font="spaceGrotesk" weight="semiBold">
                  Secure Payments
                </Text>
                <Text size="xsmall" font="inter" weight="regular">
                  Secure by Stripe
                </Text>
              </Flex>
            </Section>
          </Flex>
        </Flex>
      </Section>
    );
  }
  return (
    <Section px={54.5} py={32}>
      <Flex direction="row" gap={80} align="center" justify="center">
        <Section w={212} h={56}>
          <Flex direction="row" gap={12}>
            <Icons iconSize={32} iconName="TruckIcon" />
            <Flex direction="column" gap={2} width={168} height={56}>
              <Text size="special2" font="spaceGrotesk" weight="semiBold">
                Free shipping
              </Text>
              <Text size="small" font="inter" weight="regular">
                Order above $200
              </Text>
            </Flex>
          </Flex>
        </Section>
        <Section w={1} bgColor="var(--color-black-200)" h={135}></Section>
        <Section w={212} h={56}>
          <Flex direction="row" gap={12}>
            <Icons iconSize={32} iconName="MoneyIcon" />
            <Flex direction="column" gap={2} width={168} height={56}>
              <Text size="special2" font="spaceGrotesk" weight="semiBold">
                Money-back
              </Text>
              <Text size="small" font="inter" weight="regular">
                30 day Guarantee
              </Text>
            </Flex>
          </Flex>
        </Section>
        <Section w={1} bgColor="var(--color-black-200)" h={135}></Section>
        <Section w={212} h={56}>
          <Flex direction="row" gap={12}>
            <Icons iconSize={32} iconName="PhoneIcon" />
            <Flex direction="column" gap={2} width={168} height={56}>
              <Text size="special2" font="spaceGrotesk" weight="semiBold">
                Premium Support
              </Text>
              <Text size="small" font="inter" weight="regular">
                Phone and email support
              </Text>
            </Flex>
          </Flex>
        </Section>
        <Section w={1} bgColor="var(--color-black-200)" h={135}></Section>
        <Section w={212} h={56}>
          <Flex direction="row" gap={12}>
            <Icons iconSize={32} iconName="LockIcon" />
            <Flex direction="column" gap={2} width={168} height={56}>
              <Text size="special2" font="spaceGrotesk" weight="semiBold">
                Secure Payments
              </Text>
              <Text size="small" font="spaceGrotesk" weight="regular">
                Secure by Stripe
              </Text>
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </Section>
  );
};
