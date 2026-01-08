import { Button } from '@components/Atom/Button/Button';
import { Flex } from '@components/Atom/Flex';
import { ColorType } from '@components/Atom/Icons';
import { Icons } from '@components/Atom/Icons/Icons';
import { Position } from '@components/Atom/Position/Position';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import React from 'react';
import { useMessageModal } from './hooks/useMessageModal';
import type { MessageModalProps } from './types';

export const MessageModal: React.FC<MessageModalProps> = ({
  type,
  message,
  isOpen,
  onClose,
  autoCloseDuration = 5000,
}) => {
  const {
    isVisible,
    positionProps,
    outerWidth,
    outerHeight,
    bgColor,
    borderColor,
    textColor,
    iconName,
    iconColor,
    boxColor,
    innerWidth,
    innerPx,
    handleClose,
  } = useMessageModal({
    type,
    isOpen,
    onClose,
    autoCloseDuration,
  });

  if (!isVisible) return null;

  return (
    <Position {...positionProps}>
      <Section w={outerWidth} h={outerHeight} bgColor={bgColor}>
        <Flex align="center" justify="center" width="100%" height="100%">
          <Section bgColor={bgColor}>
            <Flex direction="column" align="end" justify="space-between">
              <Button type="button" variant="text" size="medium" onClick={handleClose}>
                <Icons iconName="CloseIcon" box boxSize={24} color={iconColor as ColorType} iconSize={20} />
              </Button>

              <Section
                bgColor={bgColor}
                border={borderColor}
                borderRadius={10}
                px={innerPx}
                py={4}
                w={innerWidth}
              >
                <Flex align="center" gap={12}>
                  <Icons
                    box
                    boxRoundness="pill"
                    boxSize={24}
                    iconName={iconName as 'CheckIcon' | 'CloseIcon'}
                    color="white"
                    boxFill={boxColor as 'green' | 'red'}
                    iconSize={20}
                  />
                  <Text
                    font="inter"
                    size="medium"
                    color={textColor as 'white' | 'black-900'}
                    weight="semiBold"
                  >
                    {message}
                  </Text>
                </Flex>
              </Section>
            </Flex>
          </Section>
        </Flex>
      </Section>
    </Position>
  );
};

export default MessageModal;
