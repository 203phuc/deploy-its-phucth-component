import { Flex } from '@components/Atom/Flex';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';

export interface DashboardSectionProps {
  isMobile?: boolean;
  user?: {
    name: string;
    email: string;
  };
}

export const DashboardSection = ({ user }: DashboardSectionProps) => {
  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={24}>
        {/* Welcome Message */}
        <Flex direction="column" gap={8}>
          <Text size="large" weight="moderate" color="black-900">
            Hello, {user?.name}!
          </Text>
          <Text size="large" weight="moderate" color="black-600">
            Welcome back to your account dashboard. Here&apos;s what&apos;s happening with your orders and
            account.
          </Text>
        </Flex>
      </Flex>
    </Section>
  );
};
