import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Link } from '@components/Atom/Link';
import { Logo } from '@components/Atom/Logo';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { Dropdown } from '@components/Molecule/Dropdown';
import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';
import { useState } from 'react';
import { currencyOptions, languageOptions } from '../mockData/Dropdown';

export const Footer = () => {
  const [lang, setLang] = useState<string | number>('English');
  const { width } = useScreenSize();
  const [clickLang, setClickLang] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string | number>('USD');
  const [clickCurrency, setClickCurrency] = useState<boolean>(false);
  if (width <= 400) {
    return (
      <Section bgColor="var(--color-black-50)" px={16} py={25}>
        <Section pt={23}>
          <Flex direction="column" gap={72}>
            <Flex direction="column" justify="space-between" gap={24}>
              <Section w={310}>
                <Flex direction="column" gap={16}>
                  <Logo logoName="NayzakLogo" width={155} height={30} />
                  <Text size="medium" font="inter" weight="regular">
                    very effective engage worldwide method process shopping.
                  </Text>
                </Flex>
              </Section>
              <Section w={134}>
                <Flex direction="column" gap={14}>
                  <Section w={134} h={164}>
                    <Flex direction="column" gap={16}>
                      <Text size="smedium" font="spaceGrotesk" weight="moderate" color="black-900">
                        Shop
                      </Text>
                      <Flex direction="column" gap={12}>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          My account
                        </Link>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          Login
                        </Link>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          wishlist
                        </Link>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          Cart
                        </Link>
                      </Flex>
                    </Flex>
                  </Section>
                  <Section w={134} h={164}>
                    <Flex direction="column" gap={16}>
                      <Text size="smedium" font="spaceGrotesk" weight="moderate" color="black-900">
                        Information
                      </Text>
                      <Flex direction="column" gap={12}>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          Shipping Policy
                        </Link>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          Return & Refunds
                        </Link>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          Cookies Policy
                        </Link>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          Frequently asked
                        </Link>
                      </Flex>
                    </Flex>
                  </Section>
                  <Section w={134} h={164}>
                    <Flex direction="column" gap={16}>
                      <Text size="smedium" font="spaceGrotesk" weight="moderate" color="black-900">
                        Company
                      </Text>
                      <Flex direction="column" gap={12}>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          About Us
                        </Link>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          Privacy Policy
                        </Link>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          Terms & Conditions
                        </Link>
                        <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                          Contact Us
                        </Link>
                      </Flex>
                    </Flex>
                  </Section>
                </Flex>
              </Section>
            </Flex>
            <Flex direction="column" justify="space-between">
              <Section>
                <Flex direction="column" justify="center" align="center" gap={16}>
                  <Section>
                    <Flex direction="row" gap={32}>
                      <Position position="relative">
                        <Position position="absolute" left={-8}>
                          <Dropdown
                            direction="up"
                            variant="xs"
                            isOpen={clickLang}
                            options={languageOptions}
                            textSize="smedium"
                            // only provide the value when this dropdown is the selected one
                            value={lang}
                            onSelect={(v) => setLang(v)}
                            // let dropdown request closing (e.g. click outside)
                          />
                        </Position>
                        <Section w={95} onClick={() => setClickLang(!clickLang)}>
                          <Flex direction="row" align="center" justify="center" gap={2}>
                            <Section pr={6}>
                              <Icons iconName={languageOptions.find((opt) => opt.value === lang)!.icon} />
                            </Section>
                            <Text size="smedium" font="spaceGrotesk" color="black-900" weight="moderate">
                              {lang}
                            </Text>
                            <Icons iconSize={18} iconName="ChevronDownIcon" />
                          </Flex>
                        </Section>
                      </Position>
                      <Position position="relative">
                        <Position position="absolute" left={-22}>
                          <Dropdown
                            direction="up"
                            variant="xs"
                            isOpen={clickCurrency}
                            options={currencyOptions}
                            textSize="smedium"
                            // only provide the value when this dropdown is the selected one
                            value={currency}
                            onSelect={(v) => setCurrency(v)}
                            // let dropdown request closing (e.g. click outside)
                          />
                        </Position>
                        <Section w={48} onClick={() => setClickCurrency(!clickCurrency)}>
                          <Flex direction="row" align="center" justify="center" gap={2}>
                            <Text size="smedium" font="spaceGrotesk" color="black-900" weight="moderate">
                              {currency}
                            </Text>
                            <Icons
                              iconSize={18}
                              iconName={clickCurrency ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                            />
                          </Flex>
                        </Section>
                      </Position>
                    </Flex>
                  </Section>
                  <Section pt={16}>
                    <Flex direction="row" gap={16}>
                      <Icons iconSize={18} box boxSize={36} iconName="FacebookIcon" />
                      <Icons iconSize={18} box boxSize={36} iconName="InstagramIcon" />
                      <Icons iconSize={18} box boxSize={36} iconName="TwitterIcon" />
                      <Icons iconSize={18} box boxSize={36} iconName="EmailIcon" />
                    </Flex>
                  </Section>
                  <Section pb={16}>
                    <Text size="xsmall" font="inter" weight="regular">
                      © 2088 Nayzak Design
                    </Text>
                  </Section>
                </Flex>
              </Section>
            </Flex>
          </Flex>
        </Section>
      </Section>
    );
  }
  return (
    <Section bgColor="var(--color-black-50)" px={52} py={25}>
      <Section pt={47}>
        <Flex direction="column" gap={72}>
          <Flex direction="row" justify="space-between" gap={384}>
            <Section w={310}>
              <Flex direction="column" gap={16}>
                <Logo logoName="NayzakLogo" width={155} height={30} />
                <Text size="medium" font="inter" weight="regular">
                  very effective engage worldwide method process shopping.
                </Text>
                <Section pt={8}>
                  <Flex direction="row" gap={16}>
                    <Icons iconSize={18} box boxSize={36} iconName="FacebookIcon" />
                    <Icons iconSize={18} box boxSize={36} iconName="InstagramIcon" />
                    <Icons iconSize={18} box boxSize={36} iconName="TwitterIcon" />
                    <Icons iconSize={18} box boxSize={36} iconName="EmailIcon" />
                  </Flex>
                </Section>
              </Flex>
            </Section>
            <Section w={642} h={164}>
              <Flex direction="row" gap={120}>
                <Section w={134} h={164}>
                  <Flex direction="column" gap={16}>
                    <Text size="smedium" font="spaceGrotesk" weight="moderate" color="black-900">
                      Shop
                    </Text>
                    <Flex direction="column" gap={12}>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        My account
                      </Link>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        Login
                      </Link>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        wishlist
                      </Link>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        Cart
                      </Link>
                    </Flex>
                  </Flex>
                </Section>
                <Section w={134} h={164}>
                  <Flex direction="column" gap={16}>
                    <Text size="smedium" font="spaceGrotesk" weight="moderate" color="black-900">
                      Information
                    </Text>
                    <Flex direction="column" gap={12}>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        Shipping Policy
                      </Link>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        Return & Refunds
                      </Link>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        Cookies Policy
                      </Link>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        Frequently asked
                      </Link>
                    </Flex>
                  </Flex>
                </Section>
                <Section w={134} h={164}>
                  <Flex direction="column" gap={16}>
                    <Text size="smedium" font="spaceGrotesk" weight="moderate" color="black-900">
                      Company
                    </Text>
                    <Flex direction="column" gap={12}>
                      <Link hoverUnderline type="text" size="small" font="inter" href="#" weight="regular">
                        About Us
                      </Link>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        Privacy Policy
                      </Link>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        Terms & Conditions
                      </Link>
                      <Link hoverUnderline size="small" font="inter" href="#" weight="regular">
                        Contact Us
                      </Link>
                    </Flex>
                  </Flex>
                </Section>
              </Flex>
            </Section>
          </Flex>
          <Flex direction="column" height={48} justify="space-between">
            <Section h={1} bgColor="var(--color-black-200)"></Section>
            <Section>
              <Flex direction="row" justify="space-between">
                <Text size="small" font="inter" weight="regular">
                  © 2088 Nayzak Design
                </Text>
                <Section>
                  <Flex direction="row" gap={32}>
                    <Position position="relative">
                      <Position position="absolute" left={-8}>
                        <Dropdown
                          direction="up"
                          variant="xs"
                          isOpen={clickLang}
                          options={languageOptions}
                          textSize="smedium"
                          // only provide the value when this dropdown is the selected one
                          value={lang}
                          onSelect={(v) => setLang(v)}
                          // let dropdown request closing (e.g. click outside)
                        />
                      </Position>
                      <Section w={95} onClick={() => setClickLang(!clickLang)}>
                        <Flex direction="row" align="center" justify="center" gap={2}>
                          <Section pr={6}>
                            <Icons iconName={languageOptions.find((opt) => opt.value === lang)!.icon} />
                          </Section>
                          <Text size="smedium" font="spaceGrotesk" color="black-900" weight="moderate">
                            {lang}
                          </Text>
                          <Icons iconSize={18} iconName="ChevronDownIcon" />
                        </Flex>
                      </Section>
                    </Position>
                    <Position position="relative">
                      <Position position="absolute" left={-22}>
                        <Dropdown
                          direction="up"
                          variant="xs"
                          isOpen={clickCurrency}
                          options={currencyOptions}
                          textSize="smedium"
                          // only provide the value when this dropdown is the selected one
                          value={currency}
                          onSelect={(v) => setCurrency(v)}
                          // let dropdown request closing (e.g. click outside)
                        />
                      </Position>
                      <Section w={48} onClick={() => setClickCurrency(!clickCurrency)}>
                        <Flex direction="row" align="center" justify="center" gap={2}>
                          <Text size="smedium" font="spaceGrotesk" color="black-900" weight="moderate">
                            {currency}
                          </Text>
                          <Icons
                            iconSize={18}
                            iconName={clickCurrency ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                          />
                        </Flex>
                      </Section>
                    </Position>
                  </Flex>
                </Section>
              </Flex>
            </Section>
          </Flex>
        </Flex>
      </Section>
    </Section>
  );
};
