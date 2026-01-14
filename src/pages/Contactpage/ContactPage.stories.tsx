import { RouterProvider } from '@pages/CustomHook/navigateHook';
import Layout from '@pages/HOC/Layout';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect } from 'react';

// Wrapper component that handles navigation to Contact page with full Layout
const ContactPageWithLayout = () => {
  useEffect(() => {
    // Navigate to Contact page after component mounts
    window.history.pushState({}, '', '/contact');
  }, []);

  return (
    <RouterProvider>
      <Layout />
    </RouterProvider>
  );
};

const meta = {
  title: 'Pages/ContactPage',
  component: ContactPageWithLayout,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=127-21076&t=NkHrVg9SwkSiPX3f-4',
    },
    docs: {
      description: {
        component: 'Contact page with form, branding section, and FAQ section',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactPageWithLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default Contact Page with Layout',
};
