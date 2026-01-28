import { Flex } from '@components/Atom/Flex';
import { Grid } from '@components/Atom/Grid';
import Icons from '@components/Atom/Icons';
import { Section } from '@components/Atom/Section';
import { Text } from '@components/Atom/Text';
import { TextSize } from '@components/Atom/Text/type';
import { TextColor } from '@components/Molecule/DropdownMixed/type';
import { useCallback, useMemo } from 'react';

export interface OrdersSectionProps {
  isMobile?: boolean;
}

// Simple date formatting function to avoid hook violations
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

// Status color mapping for better maintainability
const statusColorMap: Record<string, TextColor> = {
  Delivered: 'black-600',
  Shipped: 'black-700',
  Processing: 'black-500',
};

export const OrdersSection = ({ isMobile = false }: OrdersSectionProps) => {
  const orders = useMemo(
    () => [
      { id: '#98224', date: '2024-01-15', status: 'Delivered', total: '$129.99' },
      { id: '#98225', date: '2024-01-10', status: 'Shipped', total: '$89.50' },
      { id: '#98226', date: '2024-01-05', status: 'Processing', total: '$45.00' },
    ],
    [],
  );

  // Memoize formatted orders to prevent unnecessary recalculations
  const formattedOrders = useMemo(() => {
    return orders.map((order) => ({
      ...order,
      formattedDate: formatDate(order.date),
      statusColor: statusColorMap[order.status] || 'black-600',
    }));
  }, [orders]);

  // Memoize text sizes for responsive design
  const textSizes = useMemo(
    () => ({
      title: (isMobile ? 'medium' : 'large') as TextSize,
      content: (isMobile ? 'medium' : 'large') as TextSize,
    }),
    [isMobile],
  );

  // Memoize track button click handler
  const handleTrackClick = useCallback((orderId: string) => {
    console.log(`Track order: ${orderId}`);
  }, []);

  return (
    <Section w="100%" bgColor="white" borderRadius="medium" p={24}>
      <Flex direction="column" gap={16}>
        <Flex direction="column" gap={12}>
          {formattedOrders.map((order) => (
            <Section key={order.id}>
              <Flex height={isMobile ? 224 : 72} align="center">
                {isMobile ? (
                  <OrderCardMobile order={order} textSizes={textSizes} onTrackClick={handleTrackClick} />
                ) : (
                  <OrderRow order={order} textSizes={textSizes} onTrackClick={handleTrackClick} />
                )}
              </Flex>
              <Section h={1} mt={isMobile ? 24 : 0} bgColor="var(--color-black-300)" />
            </Section>
          ))}
        </Flex>
      </Flex>
    </Section>
  );
};

// Extract order row component for better separation of concerns
interface OrderRowProps {
  order: {
    id: string;
    formattedDate: string;
    status: string;
    total: string;
    statusColor: TextColor;
  };
  textSizes: {
    title: TextSize;
    content: TextSize;
  };
  onTrackClick: (orderId: string) => void;
}

const OrderRow = ({ order, textSizes, onTrackClick }: OrderRowProps) => (
  <Flex justify="space-between" width="100%">
    <Grid columns="69px 116px 81px 1fr" gap={119} align="center">
      <Text size={textSizes.content} weight="semiBold" color="black-900">
        {order.id}
      </Text>
      <Text size={textSizes.content} weight="regular" color="black-600">
        {order.formattedDate}
      </Text>
      <Text size={textSizes.content} weight="regular" color={order.statusColor}>
        {order.status}
      </Text>
      <Text size={textSizes.content} weight="regular" color="black-900">
        {order.total}
      </Text>
    </Grid>
    <Section>
      <Flex gap={2} align="center" width={57}>
        <Text
          font="spaceGrotesk"
          weight="moderate"
          size="special1"
          color="black-900"
          onClick={() => onTrackClick(order.id)}
        >
          Track
        </Text>
        <Icons iconName="ArrowRightIcon" iconSize={18} />
      </Flex>
      <Section h={1} w="100%" bgColor="var(--color-black-900)" />
    </Section>
  </Flex>
);
const OrderCardMobile = ({ order, onTrackClick }: OrderRowProps) => (
  <Flex justify="space-between" width="100%">
    <Grid width="100%" gap={8} align="center">
      <Flex justify="space-between" width="100%">
        <Text font="spaceGrotesk" color="black-900" size="special1" weight="moderate">
          Order
        </Text>
        <Text size="special1" color="black-900">
          {order.id}
        </Text>
      </Flex>
      <Flex justify="space-between" width="100%">
        <Text font="spaceGrotesk" color="black-900" size="special1" weight="moderate">
          Date
        </Text>
        <Text size="special1" weight="regular" color="black-600">
          {order.formattedDate}
        </Text>
      </Flex>
      <Flex justify="space-between" width="100%">
        <Text font="spaceGrotesk" color="black-900" size="special1" weight="moderate">
          Status
        </Text>
        <Text size="special1" weight="regular" color={order.statusColor}>
          {order.status}
        </Text>
      </Flex>
      <Flex justify="space-between" width="100%">
        <Text font="spaceGrotesk" color="black-900" size="special1" weight="moderate">
          Total
        </Text>
        <Text size="special1" weight="regular" color="black-900">
          {order.total}
        </Text>
      </Flex>
      <Section mt={16} w={57}>
        <Flex gap={2} align="center" width={57}>
          <Text
            font="spaceGrotesk"
            weight="moderate"
            size="special1"
            color="black-900"
            onClick={() => onTrackClick(order.id)}
          >
            Track
          </Text>
          <Icons iconName="ArrowRightIcon" iconSize={18} />
        </Flex>
        <Section h={1} w="100%" bgColor="var(--color-black-900)" />
      </Section>
    </Grid>
  </Flex>
);
