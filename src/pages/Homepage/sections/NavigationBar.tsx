import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import { Logo } from '@components/Atom/Logo';
import { Section } from '@components/Atom/Section/Section';
import { navLinks } from './constant';
import DropDownHover from './DropDownhover';
import { IconBlock } from './IconBlock';
export const NavigationBar = () => {
  return (
    <div>
      <Section px={52} h={68}>
        <Flex align="center" justify="center" height="100%">
          <Section h={30}>
            <Grid columns="auto 343px auto 298px auto" align="center" height="100%">
              <Logo logoName="NayzakLogo" height={30} width={155} />
              <div />
              <DropDownHover navLinks={navLinks} />
              <div />
              <IconBlock cartItem={2} />
            </Grid>
          </Section>
        </Flex>
      </Section>
    </div>
  );
};
