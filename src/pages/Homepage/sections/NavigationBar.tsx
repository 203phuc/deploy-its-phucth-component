import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { Icons } from '@components/Atom/Icons/Icons';
import { Logo } from '@components/Atom/Logo';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { useScreenSize } from '../../CustomHook/getScreenSizeHook';
import { navLinks } from './constant';
import DropDownHover from './DropDownhover';
import { IconBlock } from './IconBlock';

export const NavigationBar = () => {
  const cartItem = 2;
  const { width } = useScreenSize();
  return width > 768 ? (
    // ====== DESKTOP VERSION ======
    <Position position="fixed" zIndex={3} top={40} left={0} right={0}>
      <Section px={52} h={68} w="100%">
        <Flex align="center" justify="center" height="100%">
          <Section h={30}>
            <Grid columns="auto 343px auto 298px auto" align="center" height="100%">
              <Logo logoName="NayzakLogo" height={30} width={155} />
              <div />
              <DropDownHover navLinks={navLinks} />
              <div />
              <IconBlock cartItem={cartItem} />
            </Grid>
          </Section>
        </Flex>
      </Section>
    </Position>
  ) : (
    // ====== SMALL SCREEN VERSION ======
    <Position position="fixed" zIndex={3} top={36} left={0} right={0}>
      <Section px={16} h={46} w="100%" bgColor="white">
        <Flex align="center" justify="center" height="100%" width="100%">
          <Section h={30}>
            <Grid columns="auto 137px auto" align="center" justify="space-between" height="100%">
              <Logo logoName="NayzakLogo" height={22} width={114} />
              <div></div>
              <Flex gap={16}>
                <Flex align="center" gap={3}>
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
                <Icons iconSize={26} iconName="HamburgerMenuIcon"></Icons>
              </Flex>
            </Grid>
          </Section>
        </Flex>
      </Section>
    </Position>
  );
};
