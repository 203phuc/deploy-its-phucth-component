import { useState } from 'react';
import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useScreenSize } from '@pages/CustomHook/getScreenSizeHook';

export const NotificationBar = () => {
  const { width } = useScreenSize();
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // 🔹 Hide entire bar when closed

  return width > 375 ? (
    <Flex align="center" justify="center" height="100%" width="100%">
      <Section w={1440} h={40} bgColor="white" px={16}>
        <Flex height="100%" width="100%" gap={581} align="center" justify="end">
          <Text font="spaceGrotesk" size="smedium" color="black-900" weight="moderate">
            70% Off Storewide — Limited time
          </Text>
          <Icons
            onClick={() => setVisible(false)} // 🔹 Click to hide
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
            onClick={() => setVisible(false)} // 🔹 Click to hide
            iconName="CloseIcon"
            iconSize={18}
          />
        </Flex>
      </Section>
    </Flex>
  );
};
