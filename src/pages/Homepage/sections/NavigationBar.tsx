import { Flex } from '@components/Atom/Flex';
import { Logo } from '@components/Atom/Logo';
import { Section } from '@components/Atom/Section/Section';
import DropDownHover from './DropDownhover';
import { navLinks } from './constant';
export const NavigationBar = () => {
  return (
    <div>
      <Section px={52} py={19}>
        <Flex direction="row" justify="space-between">
          <Logo logoName="NayzakLogo" />
          <DropDownHover navLinks={navLinks} />
        </Flex>
      </Section>
    </div>
  );
};
