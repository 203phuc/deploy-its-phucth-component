import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { Link } from '@components/Atom/Link';
import { Section } from '@components/Atom/Section/Section';
import { Dropdown } from '@components/Molecule/Dropdown';
import { navLinks as localNavLinks } from '../mockData/constant';
import { useDropDownHover } from './hooks/DropdownHoverHook';
import { DropDownHoverProps } from './types';

const DropDownHover = ({ navLinks = localNavLinks }: DropDownHoverProps) => {
  const {
    hoveredId,
    selectedState,
    navigate,
    handleMouseEnter,
    handleMouseLeave,
    handleSelect,
    setHoveredId,
  } = useDropDownHover(navLinks);

  return (
    <Flex direction="row" height="100%" gap={40} align="center">
      {navLinks.map((item) => (
        <Section
          h="100%"
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Section h="100%">
            <Flex height="100%" align="center">
              <Link
                font="spaceGrotesk"
                weight="moderate"
                spacing="xsmall"
                color="black-900"
                href="#"
                size="smedium"
                hoverUnderline
                underlineOffset="none"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(item.path ?? '/');
                }}
              >
                {item.label}
                {item.icon && (
                  <Icons
                    iconSize={18}
                    color="black"
                    iconName={
                      hoveredId === item.id && item.icon === 'ChevronDownIcon' ? 'ChevronUpIcon' : item.icon
                    }
                  />
                )}
              </Link>
            </Flex>
          </Section>

          {item.dropdown && (
            <Dropdown
              disabled={false}
              variant="md"
              isOpen={hoveredId === item.id}
              options={item.dropdown.map((drop) => ({
                label: drop.label,
                value: drop.id,
              }))}
              // only provide the value when this dropdown is the selected one
              value={selectedState.id === item.id ? selectedState.value! : undefined}
              onSelect={(v) => handleSelect(item.id, v)}
              // let dropdown request closing (e.g. click outside)
              onClose={() => setHoveredId(null)}
            />
          )}
        </Section>
      ))}
    </Flex>
  );
};

export default DropDownHover;
