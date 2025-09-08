interface ProgressBarStep {
  step: number;
  isActive: boolean;
  label?: string;
}

export type ProgressBarStepProps = ProgressBarStep;

export interface ProgressBarProps {
  steps: Omit<ProgressBarStep, 'isActive'>[];
  currentStep: number;
}
