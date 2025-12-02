import type { Meta, StoryObj } from '@storybook/react-vite';
import { ForgotPassPage } from './ForgotPassPage';
import { ForgotPassPageProps } from './hooks/ForgotPassHook';

const meta: Meta<ForgotPassPageProps> = {
  title: 'Page/ForgotPassPage',
  component: ForgotPassPage,
};

export default meta;
type Story = StoryObj<ForgotPassPageProps>;

export const Default: Story = {
  args: { isOpen: true },
};
