import type { Meta, StoryObj } from '@storybook/react-vite';
import { Timer } from './Timer';

const meta = {
  title: 'Molecule/Timer',
  component: Timer,
  parameters: {
    docs: {
      description: {
        component:
          'A countdown timer component that counts down to a given end date.\n\n### Features:\n- Displays days, hours, minutes, and seconds.\n- Customizable label and labelSpan text.\n- Responsive styling with mobile prop.\n- Auto-updates every second until the end date.',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/Ovp63tfHXWbbNr8lzFbAGy/HAIBAZO-INTERNSHIP-FRONTEND?node-id=169-28053&t=WB52LU5TqNOlm8Lb-4',
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Main label text displayed before the countdown.',
    },
    labelSpan: {
      control: 'text',
      description: 'Highlighted span text shown after the label.',
    },
    endDate: {
      control: 'text',
      description: 'Target end date in the format `dd/mm/yyyy`.',
    },
    start: {
      control: 'boolean',
      description: 'Whether the countdown should start automatically.',
    },
    size: {
      control: { type: 'select' },
      options: ['mobileSharp', 'mobileRound', 'desktopRound', 'desktopSharp', 'desktop', 'mobile'],
    },
    round: {
      control: { type: 'select' },
      options: ['pill', 'sharp'],
      description: 'Choose the border style.',
    },
    textColor: {
      control: { type: 'select' },
      options: ['red', 'black'],
      description: 'Choose the border style.',
    },
  },
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Hurry up',
    labelSpan: ', offer expires in:',
    endDate: '20/1/2026',
    start: true,
  },
};

export const DesktopRound: Story = {
  args: {
    label: 'Limited Time',
    labelSpan: ', ends soon!',
    endDate: '15/11/2025',
    start: true,
    size: 'desktopRound',
    round: 'pill',
  },
};

export const DesktopSharp: Story = {
  args: {
    label: 'Limited Time',
    labelSpan: ', ends soon!',
    endDate: '15/11/2025',
    start: true,
    size: 'desktopSharp',
    round: 'sharp',
  },
};

export const MobileSharp: Story = {
  args: {
    label: 'Limited Time',
    labelSpan: ', ends soon!',
    endDate: '15/11/2025',
    start: true,
    size: 'mobileSharp',
    round: 'sharp',
  },
};
export const MobileRound: Story = {
  args: {
    label: 'Limited Time',
    labelSpan: ', ends soon!',
    endDate: '15/11/2025',
    start: true,
    size: 'mobileRound',
    round: 'pill',
  },
};

export const DesktopNoBound: Story = {
  args: {
    label: 'Limited Time',
    labelSpan: ', ends soon!',
    endDate: '15/11/2025',
    start: true,
    size: 'desktop',
  },
};

export const MobileNoBound: Story = {
  args: {
    label: 'Limited Time',
    labelSpan: ', ends soon!',
    endDate: '15/11/2025',
    start: true,
    size: 'mobile',
  },
};

export const Expired: Story = {
  args: {
    label: 'This offer has ended',
    labelSpan: ', thank you!',
    endDate: '01/01/2023',
    start: true,
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Sale Countdown',
    labelSpan: ' — time left:',
    endDate: '31/12/2025',
    start: true,
  },
};
