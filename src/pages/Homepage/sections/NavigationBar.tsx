import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { Icons } from '@components/Atom/Icons/Icons';
import { Logo } from '@components/Atom/Logo';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { useSharedRouter } from '../../CustomHook/navigateHook';
import { navLinks } from '../mockData/constant';
import DropDownHover from './Dropdownhover';
import { IconBlock } from './IconBlock';
import { type NavigationBarProps } from './types';

export const NavigationBar = ({
  scrolled = false,
  translateY = 0,
  transition = 'transform 220ms cubic-bezier(.2,.9,.2,1)',
  setFlyoutCartOpen,
  setFlyoutMenuOpen,
  isMobile,
}: NavigationBarProps) => {
  const cartItem = 2;
  const { path } = useSharedRouter();
  const transformValue = `translateY(${translateY}px)`;

  return !isMobile ? (
    // ====== DESKTOP VERSION ======
    <Flex width="100%">
      <Section
        px={52}
        h={68}
        w="100%"
        bgColor={scrolled || path !== '/' ? 'white' : 'transparent'}
        transition={transition}
        transform={path === '/' ? '' : transformValue}
      >
        <Flex align="center" justify="center" height="100%" width="100%">
          <Section h={60}>
            <Grid columns="auto 343px auto 298px auto" align="center" height="100%" width={1337.66}>
              <Logo logoName="NayzakLogo" height={30} width={155} />
              <div />
              <DropDownHover navLinks={navLinks} />
              <div />
              <IconBlock cartItem={cartItem} setFlyoutCartOpen={setFlyoutCartOpen} />
            </Grid>
          </Section>
        </Flex>
      </Section>
    </Flex>
  ) : (
    // ====== SMALL SCREEN VERSION ======
    <Section
      px={16}
      h={46}
      w="100%"
      bgColor="white"
      transition={transition}
      transform={path !== '/' ? transformValue : ''}
    >
      <Flex align="center" justify="center" height="100%" width="100%">
        <Section h={30}>
          <Grid columns="auto 137px auto" align="center" justify="space-between" height="100%">
            <Logo logoName="NayzakLogo" height={22} width={114} />
            <div></div>
            <Flex gap={16}>
              <Flex align="center" gap={3} onClick={() => setFlyoutCartOpen?.(true)}>
                <Icons iconSize={26} iconName="BagIcon" />
                {cartItem ? (
                  <Section w={20} h={20} bgColor="black" borderRadius="100%">
                    <Flex width="100%" height="100%" align="center" justify="center">
                      <Text font="inter" color="white" weight="bold" size="xsmall">
                        {cartItem}
                      </Text>
                    </Flex>
                  </Section>
                ) : null}
              </Flex>
              <Icons
                iconSize={26}
                box
                onClick={() => setFlyoutMenuOpen?.(true)}
                iconName="HamburgerMenuIcon"
              ></Icons>
            </Flex>
          </Grid>
        </Section>
      </Flex>
    </Section>
  );
};
