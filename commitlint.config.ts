import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-min-length': [RuleConfigSeverity.Error, 'always', 0],
    'type-enum': [RuleConfigSeverity.Error, 'always', ['ci', 'feat', 'fix', 'refactor', 'chore']],
    'ticket-prefix': [RuleConfigSeverity.Error, 'always', 'ITS'],
  },
  plugins: [
    {
      rules: {
        'ticket-prefix': ({ scope, type, subject }, _, ticketPrefix) => {
          const errorMessage = `ticket must start with ${ticketPrefix}. Ex: ${type}(${ticketPrefix}-***): ${subject}`;

          if (!scope) {
            return [false, errorMessage];
          }

          if (ticketPrefix && scope.startsWith(ticketPrefix)) {
            return [true];
          }

          return [false, errorMessage];
        },
      },
    },
  ],
};

export default Configuration;
