import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Text } from '@components/Atom/Text';
import { OTPInput } from '@components/Molecule/OTPInput/OTPInput';
import { FC } from 'react';

interface OtpVerificationProps {
  contactInfo: string;
  otp: string[];
  isResendDisabled: boolean;
  resendTimer: number;
  onOtpChange: (otpValue: string) => void;
  onResendCode: () => void;
  onOtpSubmit: () => void;
  onClose: () => void;
  isMobile: boolean;
}

export const OtpVerification: FC<OtpVerificationProps> = ({
  contactInfo,
  otp,
  isResendDisabled,
  resendTimer,
  onOtpChange,
  onResendCode,
  onOtpSubmit,
  onClose,
  isMobile,
}) => (
  <Flex direction="column" gap={isMobile ? 30 : 51}>
    <Flex direction="column" gap={isMobile ? 9 : 39}>
      <Flex width="100%" direction="column" gap={isMobile ? 12 : 24}>
        <Flex justify="space-between" align="center" width="100%">
          <Heading
            color="black-900"
            size={isMobile ? 'hSpecial' : 'h4'}
            font="spaceGrotesk"
            weight="moderate"
            align="center"
          >
            OTP Verification
          </Heading>
          <Icons iconName="CloseIcon" box onClick={onClose} iconSize={isMobile ? 32 : 40} />
        </Flex>
        <Flex direction="column" align="center" width="100%">
          <Heading color="black-600" size="h7" weight="moderate" font="spaceGrotesk" align="center">
            Please enter the OTP sent to &nbsp;
            <Heading color="black-900" size="h7" weight="moderate" font="spaceGrotesk" align="center">
              {contactInfo}
            </Heading>
          </Heading>
          <Button variant="text" size="xsmall" onClick={onResendCode} disabled={isResendDisabled}>
            {isResendDisabled ? (
              `Resend in ${resendTimer}s`
            ) : (
              <Text color="red-special" weight="moderate" font="spaceGrotesk" size="special2">
                Resend code
              </Text>
            )}
          </Button>
        </Flex>
      </Flex>

      <Flex direction="column" gap={4} align="center">
        <OTPInput length={6} onChange={onOtpChange} variant={isMobile ? 'mobile' : 'desktop'} />
      </Flex>
    </Flex>

    <Button
      roundness="round"
      size={isMobile ? 'small' : 'large'}
      onClick={onOtpSubmit}
      disabled={!otp.every((digit) => digit)}
    >
      Verify
    </Button>
  </Flex>
);
