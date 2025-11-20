import { Meta, StoryObj } from '@storybook/react-vite';
import { HomePage } from './HomePage';

const meta = {
  title: 'Page/HomePage',
  component: HomePage,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=127-21076&t=NkHrVg9SwkSiPX3f-4',
    },
    docs: {
      description: {
        component: 'Home page with full sections',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HiHaibazo: Story = {
  name: 'Nayzak HomePage',
};
