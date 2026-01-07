import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons/Icons';
import { Input } from '@components/Atom/Input/Input';
import { Logo } from '@components/Atom/Logo';
import { Section } from '@components/Atom/Section/Section';
import { Text } from '@components/Atom/Text/Text';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../../src/util/mediaQueries';
import { currencyOptions, languageOptions } from '../mockData/Dropdown';
import { DropdownSelector } from './DropdownSelector';
import { MobileNav } from './MobileNav';

interface FlyoutMenuProps {
  setFlyoutMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItem: number;
}
export const FlyoutMenu = ({ setFlyoutMenuOpen, cartItem = 2 }: FlyoutMenuProps) => {
  const [currency, setCurrency] = useState<string | number>('USD');
  const [lang, setLang] = useState<string | number>('English');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  if (isSmallScreen) {
    return (
      <Section bgColor="white" w={343} h="100vh" pt={16} px={16} pb={16}>
        <Flex direction="column" justify="space-between" height="100%">
          <Section>
            <Section w="100%">
              <Flex align="center" justify="space-between" width="100%">
                <Logo logoName="NayzakLogo" width={114} height={22} />
                <Button
                  onClick={() => {
                    setFlyoutMenuOpen(false);
                  }}
                >
                  <Icons iconName="CloseIcon" iconSize={26} />
                </Button>
              </Flex>
            </Section>

            <Section mt={28} w="100%" overflow="hidden auto">
              <Input
                size="large"
                placeholder="Search"
                iconStart={<Icons iconName="SearchIcon" iconSize={24} />}
              />
            </Section>
            <Section mt={16}>
              <MobileNav />
            </Section>
          </Section>
          <Section>
            <Section>
              <Flex direction="column">
                <Section mb={23}>
                  <Flex direction="column" gap={16}>
                    <Flex align="center" justify="space-between" width="100%">
                      <Text size="smedium" font="spaceGrotesk" color="black-500" weight="moderate">
                        Cart
                      </Text>
                      <Flex align="center" gap={2}>
                        <Icons iconSize={26} iconName="BagIcon" />
                        {cartItem ? (
                          <Section w={20} bgColor="black" h={20} borderRadius="100%">
                            <Flex width="100%" direction="row" height="100%" align="center" justify="center">
                              <Text font="inter" color="white" weight="bold" size="xsmall">
                                {cartItem}
                              </Text>
                            </Flex>
                          </Section>
                        ) : null}
                      </Flex>
                    </Flex>
                    <Flex align="center" justify="space-between" width="100%">
                      <Text size="smedium" font="spaceGrotesk" color="black-500" weight="moderate">
                        Wishlist
                      </Text>
                      <Flex align="center" gap={2}>
                        <Icons iconSize={26} iconName="HeartIcon" />
                        {cartItem ? (
                          <Section w={20} bgColor="black" h={20} borderRadius="100%">
                            <Flex width="100%" direction="row" height="100%" align="center" justify="center">
                              <Text font="inter" color="white" weight="bold" size="xsmall">
                                {cartItem}
                              </Text>
                            </Flex>
                          </Section>
                        ) : null}
                      </Flex>
                    </Flex>
                  </Flex>
                </Section>
                <Section w="100%" h={1} bgColor="var(--color-black-200)"></Section>
              </Flex>
            </Section>
            <Section pt={16}>
              <Flex direction="column">
                <Section mb={23}>
                  <Flex direction="column" gap={16}>
                    <Flex align="center" justify="space-between" width="100%">
                      <Text size="smedium" font="spaceGrotesk" color="black-500" weight="moderate">
                        Currency
                      </Text>
                      <DropdownSelector
                        options={currencyOptions}
                        value={currency}
                        onSelect={(v) => setCurrency(v)}
                        width={48}
                      />
                    </Flex>
                    <Flex align="center" justify="space-between" width="100%">
                      <Text size="smedium" font="spaceGrotesk" color="black-500" weight="moderate">
                        Language
                      </Text>
                      <DropdownSelector
                        options={languageOptions}
                        value={lang}
                        onSelect={(v) => setLang(v)}
                        width={95}
                      />
                    </Flex>
                  </Flex>
                </Section>
                <Section w="100%" h={1} bgColor="var(--color-black-200)"></Section>
              </Flex>
            </Section>
            <Section pt={19}>
              <Button roundness="round" size="xsmall" fullWidth>
                Sign in
              </Button>
              <Section pt={24}>
                <Flex direction="row" gap={16}>
                  <Icons
                    boxFill="gray"
                    boxRoundness="pill"
                    iconSize={18}
                    box={true}
                    boxSize={36}
                    iconName="FacebookIcon"
                  />
                  <Icons
                    boxFill="gray"
                    boxRoundness="pill"
                    iconSize={18}
                    box
                    boxSize={36}
                    iconName="InstagramIcon"
                  />
                  <Icons
                    boxFill="gray"
                    boxRoundness="pill"
                    iconSize={18}
                    box
                    boxSize={36}
                    iconName="TwitterIcon"
                  />
                  <Icons
                    boxFill="gray"
                    boxRoundness="pill"
                    iconSize={18}
                    box
                    boxSize={36}
                    iconName="EmailIcon"
                  />
                </Flex>
              </Section>
            </Section>
          </Section>
        </Flex>
      </Section>
    );
  }
  return null;
};
