import { Flex } from '@components/Atom/Flex';
import Icons from '@components/Atom/Icons';
import { Link } from '@components/Atom/Link';
import { Section } from '@components/Atom/Section/Section';
import { Dropdown } from '@components/Molecule/Dropdown';
import { useRef, useState } from 'react';
import { navLinks as localNavLinks } from './constant';

export interface DropDownHoverProps {
  navLinks?: typeof localNavLinks;
}

const DropDownHover = ({ navLinks = localNavLinks }: DropDownHoverProps) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (id: string) => {
    // cancel any pending close
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    // delay closing a little bit (e.g. 200ms)
    timeoutRef.current = setTimeout(() => {
      setHoveredId(null);
    }, 200);
  };

  return (
    <Flex direction="row" gap={40} align="center">
      {navLinks.map((item) => (
        <Section
          key={item.id}
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            font="spaceGrotesk"
            weight="bold"
            color="black-900"
            href="#"
            hoverUnderline
            onClick={() => console.log('go home')}
          >
            {item.label}
            {item.icon && <Icons iconName={item.icon} />}
          </Link>

          {item.dropdown && (
            <Dropdown
              isOpen={hoveredId === item.id}
              options={item.dropdown.map((drop) => ({
                label: drop.label,
                value: drop.id,
              }))}
              className={`absolute inset-x-0 top-full z-50 mt-2 transition-all duration-200 ${
                hoveredId === item.id
                  ? 'translate-y-0 opacity-100'
                  : 'pointer-events-none -translate-y-2 opacity-0'
              }`}
            />
          )}
        </Section>
      ))}
    </Flex>
  );
};

export default DropDownHover;
