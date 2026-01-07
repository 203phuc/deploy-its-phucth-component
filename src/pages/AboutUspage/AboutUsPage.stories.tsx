import { RouterProvider } from '@pages/CustomHook/navigateHook';
import Layout from '@pages/HOC/Layout';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';

// Wrapper component that handles navigation to About Us page with full Layout
const AboutUsPageWithLayout = () => {
  useEffect(() => {
    // Navigate to About Us page after component mounts
    window.history.pushState({}, '', '/about-us');
  }, []);

  return (
    <RouterProvider>
      <Layout />
    </RouterProvider>
  );
};

const meta = {
  title: 'Page/AboutUsPage',
  component: AboutUsPageWithLayout,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=127-21076&t=NkHrVg9SwkSiPX3f-4',
    },
    docs: {
      description: {
        component: 'About Us page with full app layout including notification bar, navigation, and footer',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutUsPageWithLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default About Us Page with Layout',
};

export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone12',
    },
  },
};
