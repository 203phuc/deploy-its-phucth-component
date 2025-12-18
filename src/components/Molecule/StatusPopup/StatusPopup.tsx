import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import { Icons } from '@components/Atom/Icons';
import { Overlay } from '@components/Atom/Overlay';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useEffect, useState } from 'react';
import { onSmallScreenChange } from 'src/util/mediaQueries';
import type { StatusPopupProps } from './StatusPopup.types';

export const StatusPopup = ({
  isOpen,
  onClose,
  title,
  message,
  buttonLabel,
  status,
  onButtonClick,
}: StatusPopupProps) => {
  const [mobile, setMobile] = useState(false);
  const isSuccess = status === 'success';
  const iconName = isSuccess ? 'CheckIcon' : 'CloseIcon';
  const iconBoxFill = isSuccess ? 'green' : 'red';

  useEffect(() => {
    onSmallScreenChange(setMobile);
  }, []); // empty array = run only once
  if (!isOpen) return null;
  if (mobile) {
    return (
      <Overlay isOpen={isOpen} onClose={onClose}>
        <Section data-testid="mobile-status-popup" w={343} px={16} py={24} bgColor="white">
          <Flex gap={32} direction="column">
            <Flex gap={12} width={311} direction="column">
              <Flex gap={12}>
                <Icons
                  iconName={iconName}
                  iconSize={16}
                  box
                  boxSize={30}
                  color="white"
                  boxFill={iconBoxFill}
                  boxRoundness="pill"
                />
                <Heading size="hSpecial" font="spaceGrotesk" color="black-900" weight="moderate">
                  {title}
                </Heading>
              </Flex>
              <Flex align="center" justify="center" height={78}>
                <Text size="medium" color="black-900" align="center">
                  {message}
                </Text>
              </Flex>
            </Flex>

            <Button
              roundness="round"
              size="small"
              font="spaceGrotesk"
              onClick={() => onButtonClick?.()}
              type="button"
            >
              {buttonLabel}
            </Button>
          </Flex>
        </Section>
      </Overlay>
    );
  }

  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <Section w={652} h={228} px={32} py={32} bgColor="white">
        <Flex gap={32} direction="column">
          <Flex gap={16} direction="column">
            <Flex gap={12}>
              <Icons
                iconName={iconName}
                iconSize={18}
                color="white"
                box
                boxSize={36}
                boxFill={iconBoxFill}
                boxRoundness="pill"
              />
              <Heading size="h5" font="spaceGrotesk" color="black-900" weight="moderate">
                {title}
              </Heading>
            </Flex>
            <Text size="medium" color="black-900">
              {message}
            </Text>
          </Flex>
          <Flex width="100%" justify="end">
            <Section w={129}>
              <Button roundness="round" size="medium" onClick={() => onButtonClick?.()} type="button">
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

// Convenience components for common use cases
export const SuccessPopup = ({
  isOpen,
  onClose,
  title = 'Success!',
  message = 'Operation completed successfully!',
  buttonLabel = 'Continue',
  onButtonClick,
}: Omit<StatusPopupProps, 'status' | 'onClose'> & { onClose?: () => void }) => (
  <StatusPopup
    isOpen={isOpen}
    onClose={onClose}
    title={title}
    message={message}
    buttonLabel={buttonLabel}
    status="success"
    onButtonClick={onButtonClick}
  />
);

export const ErrorPopup = ({
  isOpen,
  onClose,
  title = 'Oops!',
  message = 'An error occurred. Please try again.',
  buttonLabel = 'Try Again',
  onButtonClick,
}: Omit<StatusPopupProps, 'status' | 'onClose'> & { onClose?: () => void }) => (
  <StatusPopup
    isOpen={isOpen}
    onClose={onClose}
    title={title}
    message={message}
    buttonLabel={buttonLabel}
    status="error"
    onButtonClick={onButtonClick}
  />
);

export default StatusPopup;
