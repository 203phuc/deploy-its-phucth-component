import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from '../../../../../src/util/mediaQueries';

export const NotificationBar = ({ onClose }: { onClose?: () => void }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cleanup = onSmallScreenChange(setIsSmallScreen);
    return cleanup;
  }, []);

  if (!visible) return null; // 🔹 Hide entire bar when closed
  const handleClose = () => {
    setVisible(false);
    onClose?.(); // notify parent
  };
  return !isSmallScreen ? (
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
  ) : (
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
  );
};
