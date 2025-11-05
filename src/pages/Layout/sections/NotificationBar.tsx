import { Flex } from '@components/Atom/Flex';
import { Icons } from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';

export const NotificationBar = () => {
  return (
    <Flex align="center" justify="center" height="100%" width="100%">
      <Section w={1440} h={40} bgColor="white" px={16}>
        <Flex height="100%" width="100%" gap={581} align="center" justify="end">
          <Text font="spaceGrotesk" size="smedium" color="black-900" weight="moderate">
            70% Off Storewide — Limited time
          </Text>
          <Icons iconName="CloseIcon" iconSize={20}></Icons>
        </Flex>
      </Section>
    </Flex>
  );
};
