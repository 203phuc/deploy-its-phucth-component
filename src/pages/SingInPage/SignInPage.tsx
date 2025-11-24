import { Button } from '@components/Atom/Button';
import { Flex } from '@components/Atom/Flex';
import { Heading } from '@components/Atom/Heading';
import Icons from '@components/Atom/Icons';
import { Input } from '@components/Atom/Input';
import { Overlay } from '@components/Atom/Overlay';
import { Radio } from '@components/Atom/Radio';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { useSignInLogic } from './SignInHook';

import { SignInProps } from './SignInHook';

export const SignInPage = ({ isOpen }: SignInProps) => {
  const { open, setOpen, showPassword, setShowPassword, mobile } = useSignInLogic({ isOpen });
  if (mobile) {
    return (
      <Overlay isOpen={open} onClose={() => setOpen(false)}>
        <Section w={343} h={388} bgColor="white" px={16} py={24}>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // prevent page reload
              console.log('Form submitted');
              // access form values here
            }}
          >
            <Flex direction="column" gap={24}>
              <Flex width="100%" direction="column" gap={12}>
                <Flex justify="space-between" align="center" width="100%">
                  <Heading color="black-900" size="hSpecial" font="spaceGrotesk" weight="moderate">
                    Sign in
                  </Heading>
                  <Icons iconName="CloseIcon" box onClick={() => setOpen(false)} iconSize={32} />
                </Flex>
                <Text color="black-900" size="small" weight="regular">
                  Don’t have an account yet?{' '}
                  <Button variant="text">
                    <Text color="black-900" size="small" weight="semiBold">
                      Sign up
                    </Text>
                  </Button>
                </Text>
              </Flex>

              <Flex direction="column" width={311} gap={24}>
                <Input
                  variant="line"
                  placeholderSize="small"
                  size="large"
                  textSize="small"
                  placeholder="Your username or email*"
                  required
                />
                <Input
                  variant="line"
                  placeholderSize="small"
                  size="large"
                  textSize="small"
                  placeholder="Password*"
                  required
                  type={showPassword ? 'text' : 'password'}
                  iconEnd={
                    <Icons
                      box
                      onClick={() => setShowPassword((prev) => !prev)}
                      iconSize={24}
                      iconName={showPassword ? 'ViewIcon' : 'EyeCloseIcon'}
                    />
                  }
                />
                <Flex width="100%" justify="space-between">
                  <Flex width={140} height={26} gap={8} align="center">
                    <Radio size="sm" shape="rounded"></Radio>
                    <Text size="small" color="black-900">
                      Remember me
                    </Text>
                  </Flex>
                  <Button
                    onClick={() => {
                      console.log('hello world forgot');
                    }}
                    variant="text"
                  >
                    <Text size="small" font="inter" color="black-900" weight="semiBold">
                      Forgot Password?
                    </Text>
                  </Button>
                </Flex>
              </Flex>
              <Button
                onClick={() => {
                  console.log('hello world sign');
                }}
                roundness="round"
                size="small"
                type="submit"
              >
                Sign in
              </Button>
            </Flex>
          </form>
        </Section>
      </Overlay>
    );
  }
  return (
    <Overlay isOpen={open} onClose={() => setOpen(false)}>
      <Section w={652} h={488} bgColor="white" px={32} py={32}>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            console.log('Form submitted');
            // access form values here
          }}
        >
          <Flex direction="column" gap={32}>
            <Flex width="100%" direction="column" gap={24}>
              <Flex justify="space-between" align="center" width="100%">
                <Heading color="black-900" size="h4" font="spaceGrotesk" weight="moderate">
                  Sign in
                </Heading>
                <Icons iconName="CloseIcon" box onClick={() => setOpen(false)} iconSize={40} />
              </Flex>
              <Text color="black-900" size="medium" weight="regular">
                Don’t have an account yet?{' '}
                <Button variant="text">
                  <Text color="black-900" size="medium" weight="semiBold">
                    Sign up
                  </Text>
                </Button>
              </Text>
            </Flex>

            <Flex direction="column" gap={32}>
              <Input
                variant="line"
                placeholderSize="medium"
                size="xlarge"
                textSize="medium"
                placeholder="Your username or email*"
                required
              />
              <Input
                variant="line"
                placeholderSize="medium"
                size="xlarge"
                textSize="medium"
                placeholder="Password*"
                required
                type={showPassword ? 'text' : 'password'}
                iconEnd={
                  <Icons
                    box
                    onClick={() => setShowPassword((prev) => !prev)}
                    iconSize={24}
                    iconName={showPassword ? 'ViewIcon' : 'EyeCloseIcon'}
                  />
                }
              />
              <Flex width="100%" justify="space-between">
                <Flex width={140} height={26} gap={12} align="center">
                  <Radio size="sm" shape="rounded"></Radio>
                  <Text>Remember me</Text>
                </Flex>
                <Button
                  onClick={() => {
                    console.log('hello world forgot');
                  }}
                  variant="text"
                >
                  <Text font="inter" color="black-900" weight="semiBold">
                    Forgot Password?
                  </Text>
                </Button>
              </Flex>
            </Flex>
            <Button
              onClick={() => {
                console.log('hello world sign');
              }}
              roundness="round"
              size="large"
              type="submit"
            >
              Sign in
            </Button>
          </Flex>
        </form>
      </Section>
    </Overlay>
  );
};
