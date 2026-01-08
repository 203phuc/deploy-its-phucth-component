import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useState } from 'react';
import { navLinks } from './constant'; // <— your data file

export const MobileNav = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section h={100}>
      {navLinks.map((item) => (
        <Section key={item.id}>
          {/* TOP LEVEL */}
          <Section mt={10} mb={9} onClick={() => setOpenId(openId === item.id ? null : item.id)}>
            <Flex justify="space-between">
              <Text size="smedium" color="black-900" font="spaceGrotesk" weight="moderate">
                {item.label}
              </Text>

              {item.icon && (
                <Icons iconName={openId === item.id ? 'ChevronUpIcon' : item.icon} iconSize={20} />
              )}
            </Flex>

            {/* DROPDOWN (only show when item has dropdown + open) */}
            {item.dropdown && openId === item.id && (
              <Section mt={8}>
                {item.dropdown.map((d) => (
                  <Section key={d.id} mt={6}>
                    <Flex justify="space-between">
                      <Text size="smedium" color="black-800" font="spaceGrotesk">
                        {d.label}
                      </Text>
                    </Flex>
                  </Section>
                ))}
              </Section>
            )}
          </Section>

          {/* DIVIDER */}
          <Section w="100%" h={1} bgColor="var(--color-black-300)"></Section>
        </Section>
      ))}
    </Section>
  );
};

export default MobileNav;
