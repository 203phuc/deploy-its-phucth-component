import type { Meta, StoryObj } from '@storybook/react-vite';
import { SignUpPage } from './SignUpPage';

const meta = {
  title: 'Page/SignUpPage',
  component: SignUpPage,
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
} satisfies Meta<typeof SignUpPage>;

export default meta;
type Story = StoryObj<typeof SignUpPage>;
export const Default: Story = {};
