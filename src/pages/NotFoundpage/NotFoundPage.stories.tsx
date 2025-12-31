import { Meta, StoryObj } from '@storybook/react-vite';
import { NotFoundPage } from './NotFoundPage';

const meta = {
  title: 'Page/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
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
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HiHaibazo: Story = {
  name: 'Nayzak NotFoundPage',
};
