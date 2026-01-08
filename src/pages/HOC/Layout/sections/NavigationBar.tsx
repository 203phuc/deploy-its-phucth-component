import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { Icons } from '@components/Atom/Icons/Icons';
import { Logo } from '@components/Atom/Logo';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { useSharedRouter } from '@context/RouterContext';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../util/mediaQueries';
import { navLinks } from './constant';
import DropDownHover from './DropDownhover';
import { IconBlock } from './IconBlock';

interface NavigationBarProps {
  scrolled?: boolean;
  /** vertical translation in px applied to the nav (for slide animations) */
  translateY?: number;
  /** css transition to apply to the transform */
  transition?: string;
  setFlyoutCartOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setFlyoutMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationBar = ({
  scrolled = false,
  translateY = 0,
  transition = 'transform 220ms cubic-bezier(.2,.9,.2,1)',
  setFlyoutCartOpen,
  setFlyoutMenuOpen,
}: NavigationBarProps) => {
  const cartItem = 2;
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const { path } = useSharedRouter();
  const transformValue = `translateY(${translateY}px)`;

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);
  const transparentPages = ['/home', '/about-us'];

  return !isSmallScreen ? (
    // ====== DESKTOP VERSION ======
    <Flex width="100%">
      <Section
        px={52}
        h={68}
        w="100%"
        bgColor={scrolled || !transparentPages.includes(path) ? 'white' : 'transparent'}
        transition={transition}
        transform={transparentPages.includes(path) ? transformValue : ''}
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
      bgColor={scrolled || !transparentPages.includes(path) ? 'white' : 'transparent'}
      transition={transition}
      transform={transparentPages.includes(path) ? transformValue : ''}
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
