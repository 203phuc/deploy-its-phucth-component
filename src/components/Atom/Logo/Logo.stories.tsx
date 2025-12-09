import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './Logo';
import * as logos from './logos';

const meta = {
  title: 'Atom/Logo',
  component: Logo,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=160-25251&p=f&t=8MNVXzeigEv5kcKZ-0',
    },
    docs: {
      description: {
        component:
          'A Logo component that dynamically renders SVG logos. Supports size presets (`medium`, `large`) or custom `width` and `height`, with optional `color` overrides and `logoName` selection.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logoName: 'MarcLogo',
  },
};

export const Sizes: Story = {
  args: {
    logoName: 'SupremeLogo',
  },
  render: (arg) => (
    <div className="flex items-end gap-4">
      <Logo {...arg} size="medium" />
      <Logo {...arg} size="large" />
    </div>
  ),
};

export const CustomDimension: Story = {
  args: {
    logoName: 'ShoeiLogo',
  },
  render: (arg) => (
    <div className="flex items-end gap-4">
      <Logo {...arg} width={100} height={50} />
      <Logo {...arg} width={200} height={100} />
      <Logo {...arg} width={300} height={150} />
    </div>
  ),
};

export const Color: Story = {
  args: {
    logoName: 'PumaLogo',
  },
  render: (arg) => (
    <div className="flex items-center gap-4">
      <Logo {...arg} color="black" />
      <Logo {...arg} color="grey" />
      <Logo {...arg} color="white" />
    </div>
  ),
};

export const AllLogos: Story = {
  args: {
    logoName: 'MarcLogo',
  },
  render: () => {
    // Define payment and brand logos
    const paymentLogos = [
      { name: 'ApplePayLogo', Component: logos.ApplePayLogo },
      { name: 'GooglePayLogo', Component: logos.GooglePayLogo },
      { name: 'MasterCardLogo', Component: logos.MasterCardLogo },
      { name: 'PaypalLogo', Component: logos.PaypalLogo },
      { name: 'VisaLogo', Component: logos.VisaLogo },
    ];

    const brandLogos = [
      { name: 'NikeLogo', Component: logos.NikeLogo },
      { name: 'HushLogo', Component: logos.HushLogo },
      { name: 'PumaLogo', Component: logos.PumaLogo },
      { name: 'ShoeiLogo', Component: logos.ShoeiLogo },
      { name: 'MarcLogo', Component: logos.MarcLogo },
      { name: 'SupremeLogo', Component: logos.SupremeLogo },
    ];

    interface LogoComponentProps {
      width?: number;
      height?: number;
      className?: string;
      color?: 'black' | 'white' | 'grey';
    }

    interface LogoItem {
      name: string;
      Component: React.ComponentType<LogoComponentProps>;
    }

    const renderLogoFlex = (logoSet: LogoItem[], title: string, mobile: boolean) => (
      <div className="mb-20">
        <h2 className="mb-6 text-xl font-semibold">{title}</h2>
        <div
          className={
            mobile
              ? 'grid h-[242px] w-[300px] grid-cols-2 gap-x-[20px] gap-y-[16px]'
              : 'flex flex-row gap-[72px]'
          }
        >
          {logoSet.map(({ name, Component }) => (
            <div key={name} className="flex items-center rounded-lg">
              <Component
                width={mobile ? 140 : 160}
                height={mobile ? 70 : 80}
                className="max-h-full max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    );

    return (
      <div className="p-4">
        {renderLogoFlex(paymentLogos, 'Payment Methods', false)}
        {renderLogoFlex(brandLogos, 'Brand Logos', false)}
        {renderLogoFlex(brandLogos, 'Brand Logos mobile', true)}
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Displays all available logos in a grid layout with their component names.',
      },
    },
  },
};
