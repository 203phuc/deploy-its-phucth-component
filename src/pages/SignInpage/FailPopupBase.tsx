import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Icons } from '@components/Atom/Icons';
import { Overlay } from '@components/Atom/Overlay';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useIsMobile } from '@pages/CustomHook/breakpoint';

interface FailPopupProps {
  message: string;
  buttonLabel: string;
}

export const FailPopupBase = ({ message, buttonLabel }: FailPopupProps) => {
  const mobile = useIsMobile();

  if (mobile) {
    return (
      <Overlay isOpen={true}>
        <Section w={343} h={262} px={16} py={24} bgColor="white">
          <Flex gap={32} direction="column">
            <Flex gap={12} width={311} direction="column">
              <Flex gap={12}>
                <Icons
                  iconName="CloseIcon"
                  iconSize={16}
                  box
                  boxSize={30}
                  boxFill="red"
                  boxRoundness="pill"
                />
                <Heading size="hSpecial" font="spaceGrotesk" weight="moderate">
                  Oops!
                </Heading>
              </Flex>
              <Flex align="center" justify="center" height={78}>
                <Text size="medium" color="black-900" align="center">
                  {message}
                </Text>
              </Flex>
            </Flex>

            <Button roundness="round" size="medium">
              <Text font="spaceGrotesk" size="special2" color="white">
                {buttonLabel}
              </Text>
            </Button>
          </Flex>
        </Section>
      </Overlay>
    );
  }

  return (
    <Overlay isOpen={true}>
      <Section w={652} h={228} px={32} py={32} bgColor="white">
        <Flex gap={32} direction="column">
          <Flex gap={16} direction="column">
            <Flex gap={12}>
              <Icons iconName="CloseIcon" iconSize={18} box boxSize={36} boxFill="red" boxRoundness="pill" />
              <Heading size="h5" font="spaceGrotesk" weight="moderate">
                Oops!
              </Heading>
            </Flex>
            <Text size="medium" color="black-900">
              {message}
            </Text>
          </Flex>
          <Flex width="100%" justify="end">
            <Section w={129}>
              <Button roundness="round" size="medium">
                <Text font="spaceGrotesk" size="special2" color="white">
                  {buttonLabel}
                </Text>
              </Button>
            </Section>
          </Flex>
        </Flex>
      </Section>
    </Overlay>
  );
};
