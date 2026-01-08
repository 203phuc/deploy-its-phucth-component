import { RouterProvider, useSharedRouter } from '@pages/CustomHook/navigateHook';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';
import { SliderProvider } from '../../context/SliderContext';
import { SearchPage } from './SearchPage';

const meta = {
  title: 'Page/SearchPage',
  component: SearchPage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=4076-34633&t=jHTtmbUsdXzhpEGX-4',
    },
    docs: {
      description: {
        component: 'Search page with results and filtering options',
      },
    },
  },
  decorators: [
    (Story) => {
      interface SearchRouterProps {
        searchQuery?: string;
      }

      const SearchRouter = ({ searchQuery = 'test' }: SearchRouterProps) => {
        const { navigate } = useSharedRouter();

        useEffect(() => {
          navigate(`/search?q=${searchQuery}`);
        }, [navigate, searchQuery]);

        return (
          <SliderProvider>
            <Story />
          </SliderProvider>
        );
      };

      return (
        <RouterProvider>
          <SearchRouter />
        </RouterProvider>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SearchPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchQuery: 'test',
  },
};

export const NoResults: Story = {
  args: {
    searchQuery: 'non-existent-product',
  },
};
