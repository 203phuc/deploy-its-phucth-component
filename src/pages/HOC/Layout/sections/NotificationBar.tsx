import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useNotificationBar } from './hooks/useNotificationBar';
import type { NotificationBarProps } from './types';

export const NotificationBar = ({ onClose }: NotificationBarProps) => {
  const { isSmallScreen, visible, handleClose } = useNotificationBar(onClose);

  if (!visible) return null; // 🔹 Hide entire bar when closed

  return !isSmallScreen ? (
    <Section w="100%" h={40} bgColor="white" px={16}>
      <Flex align="center" justify="center" height="100%" width="100%">
        <Section w={1440} h={40} bgColor="white" px={16}>
          <Flex height="100%" width="100%" gap={581} align="center" justify="end">
            <Text font="spaceGrotesk" size="smedium" color="black-900" weight="moderate">
              70% Off Storewide — Limited time
            </Text>
            <Icons
              box
              onClick={handleClose} // 🔹 Click to hide
              iconName="CloseIcon"
              iconSize={20}
            />
          </Flex>
        </Section>
      </Flex>
    </Section>
  ) : (
    <Section w="100%" h={36} bgColor="white" px={16}>
      <Flex align="center" justify="center" height="100%" width="100%">
        <Section w={375} h={36} bgColor="white" px={16}>
          <Flex height="100%" width="100%" gap={51} align="center" justify="end">
            <Text font="spaceGrotesk" size="smedium" color="black-900" weight="moderate">
              70% Off Storewide — Limited time
            </Text>
            <Icons
              box
              onClick={handleClose} // 🔹 Click to hide
              iconName="CloseIcon"
              iconSize={18}
            />
          </Flex>
        </Section>
      </Flex>
    </Section>
  );
};
