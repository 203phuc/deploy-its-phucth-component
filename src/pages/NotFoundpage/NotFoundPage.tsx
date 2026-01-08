import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { RouterProvider } from '@context/RouterContext';
import { NotificationBar } from '@pages/Homepage/sections/NotificationBar';
import { SliderProvider } from '../../context/SliderContext';
import { Footer } from '../Homepage/sections/Footer';
import { useHomePage } from '../Homepage/sections/hooks/HomePageHook';
import { NavigationBar } from '../Homepage/sections/NavigationBar';
import { useNotFound } from './hooks/useNotFound';

interface NotFoundPageContentProps {
  isMobile: boolean;
}

const NotFoundPageContent = ({ isMobile }: NotFoundPageContentProps) => {
  const { setNotificationVisible, scrolled, isMobileScreen, notificationHeight } = useHomePage();

  return (
    <>
      <Position position="fixed" zIndex={5} top={0} left={0} right={0}>
        <Section transform="translateZ(0)" w="100%">
          <Position position="relative" zIndex={15}>
            <NotificationBar isMobile={isMobileScreen} onClose={() => setNotificationVisible(false)} />
          </Position>
          <Position position="fixed" top={0} left={0} right={0} zIndex={10}>
            <NavigationBar
              isMobile={isMobileScreen}
              scrolled={scrolled}
              translateY={notificationHeight}
              transition="transform 220ms cubic-bezier(.2,.9,.2,1)"
            />
          </Position>
        </Section>
      </Position>

      <Flex direction="column" justify="space-between" align="center">
        <Section pt={356} pb={288}>
          <Flex width="100%" height="100%" direction="column" gap="clamp(32px, 50%, 34px)">
            <Flex width="100%" align="center" justify="center">
              <Icons iconName="NotFoundIcon" iconSize={80} />
            </Flex>
            <Flex direction="column" align="center" gap={24}>
              <Flex direction="column" gap={16}>
                <Heading
                  align="center"
                  font="spaceGrotesk"
                  color="black-900"
                  weight="moderate"
                  size={isMobile ? 'h5' : 'h3'}
                >
                  404 - Page not found
                </Heading>
                <Text align="center" size={isMobile ? 'small' : 'large'}>
                  {isMobile ? (
                    <>
                      The page you&apos;re looking for isn&apos;t available. Try to
                      <br />
                      search again or use the go back button below.
                    </>
                  ) : (
                    <>
                      The page you&apos;re looking for isn&apos;t available. Try to search again
                      <br />
                      or use the go back button below.
                    </>
                  )}
                </Text>
              </Flex>
              <Section>
                <Button size="medium" roundness="round">
                  Go back home
                </Button>
              </Section>
            </Flex>
          </Flex>
        </Section>
      </Flex>
    </>
  );
};
export const NotFoundPage = () => {
  const { isMobile } = useNotFound();
  return (
    <RouterProvider>
      <SliderProvider>
        <NotFoundPageContent isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </SliderProvider>
    </RouterProvider>
  );
};
