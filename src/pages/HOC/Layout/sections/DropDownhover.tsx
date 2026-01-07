import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { Link } from '@components/Atom/Link';
import { Section } from '@components/Atom/Section/Section';
import { Dropdown } from '@components/Molecule/Dropdown';
import { useSharedRouter } from '@pages/CustomHook/navigateHook';
import { useRef, useState } from 'react';
import { navLinks as localNavLinks } from './constant';

export interface DropDownHoverProps {
  navLinks?: typeof localNavLinks;
}

const DropDownHover = ({ navLinks = localNavLinks }: DropDownHoverProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { path, navigate } = useSharedRouter();

  // new: only one dropdown can hold the selected value at a time
  const [selectedState, setSelectedState] = useState<{ id: string | null; value?: string | number | null }>({
    id: null,
    value: undefined,
  });

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredId(null);
    }, 200);
  };

  // when an option is selected in a dropdown, make that dropdown the one with a selected value
  const handleSelect = (dropdownId: string, value: string | number, path?: string) => {
    setSelectedState({ id: dropdownId, value });
    // close dropdown after selection (hover logic will hide it; but keep hoveredId behavior consistent)
    setHoveredId(null);
    if (path) {
      navigate(path);
    }
  };

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
                color={path === item.path ? 'blue-700' : 'black-900'}
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
              options={item.dropdown?.map((drop) => ({
                label: drop.label,
                value: drop.id,
                path: drop.path, // may be undefined
              }))}
              // only provide the value when this dropdown is the selected one
              value={selectedState.id === item.id ? selectedState.value! : undefined}
              onSelect={(value) => {
                const selected = item.dropdown?.find((d) => d.id === value);
                handleSelect(item.id, value, selected?.path);
              }}
            />
          )}
        </Section>
      ))}
    </Flex>
  );
};

export default DropDownHover;
