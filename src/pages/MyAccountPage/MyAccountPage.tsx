import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { ImagePlaceholder } from '@components/Atom/ImagePlaceholder';
import { Position } from '@components/Atom/Position';
import { Section } from '@components/Atom/Section';
import { AccountDetailsSection } from './components/AccountDetailsSection';
import { AccountNav } from './components/AccountNav';
import { AddressSection } from './components/AddressSection';
import { DashboardSection } from './components/DashboardSection';
import { OrdersSection } from './components/OrdersSection';
import { WishlistSection } from './components/WishlistSection';
import { useAccountDashboard } from './hooks/useAccountDashboard';
import { useMyAccountPage } from './hooks/useMyAccountPage';

export const MyAccountPage = () => {
  const { isMobile } = useMyAccountPage();
  const { activeSection, handleSectionChange } = useAccountDashboard();

  // Mock user data
  const userData = {
    name: 'John',
    email: 'john.doe@example.com',
  };

  const renderContentSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection isMobile={isMobile} user={userData} />;
      case 'orders':
        return <OrdersSection isMobile={isMobile} />;
      case 'address':
        return <AddressSection isMobile={isMobile} />;
      case 'account':
        return <AccountDetailsSection isMobile={isMobile} />;
      case 'wishlist':
        return <WishlistSection isMobile={isMobile} />;
      default:
        return <DashboardSection isMobile={isMobile} user={userData} />;
    }
  };

  return (
    <Flex direction="column">
      {/* My Account Heading */}
      <Section py={52} px={0} w="100%">
        <Flex justify="center">
          <Heading size={isMobile ? 'h4' : 'h2'} weight="moderate" color="black-900" font="spaceGrotesk">
            My Account
          </Heading>
        </Flex>
      </Section>
      <Section pt={52} pb={120}>
        <Flex direction={isMobile ? 'column' : 'row'} gap={32}>
          {/* Navigation */}
          <Flex direction="column" gap={32}>
            <Section w={82} h={82}>
              <Position position="relative">
                <Section w={82} h={82} borderRadius="50%" overflow="hidden">
                  <ImagePlaceholder
                    src="https://res.cloudinary.com/dnuicbze9/image/upload/v1766379462/banner2_afsx5i.png"
                    alt="avatar"
                    size="full"
                  />
                  <Position position="absolute" bottom={0} right={0}>
                    <Section w={30} h={30} bgColor="rgba(0, 0, 0, 0.7)" overflow="hidden" borderRadius="50%">
                      <Icons
                        iconName="CameraIcon"
                        iconSize={16}
                        boxSize={30}
                        boxFill="none"
                        color="whiteOpacity"
                        box
                      />
                    </Section>
                  </Position>
                </Section>
              </Position>
            </Section>
            <AccountNav
              activeSection={activeSection}
              onSectionChange={handleSectionChange}
              isMobile={isMobile}
            />
          </Flex>

          {/* Content Section */}
          <Section w={isMobile ? 343 : 880}>
            <Flex direction="column" gap={32}>
              {renderContentSection()}
            </Flex>
          </Section>
        </Flex>
      </Section>
    </Flex>
  );
};
