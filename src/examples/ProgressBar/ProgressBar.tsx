import { memo, useMemo } from 'react';

import { ProgressBarStep } from './ProgressBarStep';
import { ProgressBarProps } from './type';

const ProgressBarComponent = ({ currentStep, steps }: ProgressBarProps) => {
  const stepItems = useMemo(
    () => steps.map((step) => ({ ...step, isActive: step.step === currentStep })),
    [currentStep, steps],
  );

  return (
    <div>
      {stepItems.map(({ step, isActive }) => (
        <ProgressBarStep isActive={isActive} key={`progress-bar-step-${String(step)}`} step={step} />
      ))}
    </div>
  );
};

const ProgressBar = memo(ProgressBarComponent);

export { ProgressBar };
