import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useNotificationBar } from './hooks/NotificationBarHook';
import { type NotificationBarProps } from './types';

export const NotificationBar = ({ onClose, isMobile }: NotificationBarProps) => {
  const { visible, handleClose, width, height, gap, iconSize } = useNotificationBar({ onClose, isMobile });

  if (!visible) return null;

  return (
    <Flex align="center" justify="center" height="100%" width="100%">
      <Section w={width} h={height} bgColor="white" px={isMobile ? 8 : 10}>
        <Flex height="100%" width="100%" gap={gap} align="center" justify="end">
          <Text font="spaceGrotesk" size="smedium" color="black-900" weight="moderate">
            70% Off Storewide — Limited time
          </Text>
          <Icons box onClick={handleClose} iconName="CloseIcon" iconSize={iconSize} />
        </Flex>
      </Section>
    </Flex>
  );
};
