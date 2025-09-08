import { memo } from 'react';

import { ProgressBarStepProps } from './type';

/**
 * ProgressBarStep
 */
const ProgressBarStepComponent = ({ isActive, label, step }: ProgressBarStepProps) => {
  return (
    <div>
      <div>{step}</div>
      <div>{label}</div>
      {isActive && <div>Active</div>}
    </div>
  );
};

const ProgressBarStep = memo(ProgressBarStepComponent);

export { ProgressBarStep };
