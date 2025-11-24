import type { Meta, StoryObj } from '@storybook/react-vite';
import { SignInPage } from './SignInPage';

const meta = {
  title: 'Page/SignInPage',
  component: SignInPage,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=8-96700&p=f&t=JCV8ENuJzwR6AnIe-0',
    },
    docs: {
      description: {
        component: 'A Sign in pop up for sign in',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SignInPage>;

export default meta;
type Story = StoryObj<typeof SignInPage>;
export const Default: Story = {};
