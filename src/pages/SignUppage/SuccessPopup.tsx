import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Icons } from '@components/Atom/Icons';
import { Overlay } from '@components/Atom/Overlay';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';

export const SuccessPopUp = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    return onSmallScreenChange(setIsMobile);
  }, []);
  if (isMobile) {
    return (
      <Overlay isOpen={true}>
        <Section w={343} px={16} py={24} bgColor="white">
          <Flex gap={32} direction="column">
            <Flex gap={12} width={311} direction="column">
              <Flex gap={12}>
                <Icons
                  iconName="CheckIcon"
                  iconSize={16}
                  box
                  boxSize={30}
                  color="white"
                  boxFill="green"
                  boxRoundness="pill"
                />
                <Heading size="hSpecial" font="spaceGrotesk" color="black-900" weight="moderate">
                  Thank you!
                </Heading>
              </Flex>
              <Flex align="center" justify="center">
                <Text size="medium" color="black-900" align="center">
                  You have successfully registered!
                </Text>
              </Flex>
            </Flex>

            <Button roundness="round" size="medium">
              <Text size="special2" font="spaceGrotesk" color="white">
                Continue
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
              <Icons
                iconName="CheckIcon"
                iconSize={18}
                color="white"
                box
                boxSize={36}
                boxFill="green"
                boxRoundness="pill"
              />
              <Heading size="h5" font="spaceGrotesk" color="black-900" weight="moderate">
                Thank you!
              </Heading>
            </Flex>
            <Text size="medium" color="black-900">
              You have successfully registered!
            </Text>
          </Flex>
          <Flex width="100%" justify="end">
            <Section w={129}>
              <Button roundness="round" size="medium">
                <Text size="special2" font="spaceGrotesk" color="white">
                  Continue
                </Text>
              </Button>
            </Section>
          </Flex>
        </Flex>
      </Section>
    </Overlay>
  );
};
