import { Flex } from '@components/Atom/Flex';
import { Logo } from '@components/Atom/Logo';
import { Section } from '@components/Atom/Section/Section';
import { navLinks } from './constant';
import DropDownHover from './DropDownhover';
import { IconBlock } from './IconBlock';
export const NavigationBar = () => {
  return (
    <div>
      <Section px={52} h={68}>
        <Flex direction="row" justify="space-between">
          <Logo logoName="NayzakLogo" height={68} />
          <DropDownHover navLinks={navLinks} />
          <IconBlock cartItem={2} />
        </Flex>
      </Section>
    </div>
  );
};
