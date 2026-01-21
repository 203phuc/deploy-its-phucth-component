import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { TextColor } from '@components/Molecule/DropdownMixed/type';
import { useAccountNav } from '../hooks/useAccountNav';

export interface AccountNavProps {
  activeSection: AccountSection;
  onSectionChange: (section: AccountSection) => void;
  isMobile?: boolean;
}

const navItems = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'orders', label: 'Orders' },
  { id: 'address', label: 'Address' },
  { id: 'account', label: 'Account Details' },
  { id: 'wishlist', label: 'Wishlist' },
  { id: 'logout', label: 'Logout' },
];

export const AccountNav = ({ activeSection, onSectionChange, isMobile = false }: AccountNavProps) => {
  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useAccountNav();

  return (
    <Section w={isMobile ? '100%' : 196} bgColor="white" borderRadius="medium" p={16}>
      <Flex direction="column" gap={8}>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;

          let textColor;
          if (isActive) {
            textColor = 'black-900';
          } else if (isHovered) {
            textColor = 'black-800';
          } else {
            textColor = 'black-600';
          }

          return (
            <Flex
              height={40}
              direction="column"
              key={item.id}
              align="start"
              gap={7}
              onClick={() => onSectionChange(item.id as AccountSection)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <Text font="spaceGrotesk" size="special2" weight="moderate" color={textColor as TextColor}>
                {item.label}
              </Text>
              {hoveredItem === item.id || isActive ? (
                <Section h={1} w="100%" bgColor="var(--color-black-900)" />
              ) : null}
            </Flex>
          );
        })}
      </Flex>
    </Section>
  );
};
