import baseConfig from '../../eslint.config.js'
import tseslint from 'typescript-eslint';
import * as jsonParser from 'jsonc-eslint-parser';

export default tseslint.config(
  ...baseConfig,
  {
    languageOptions: {
      parser: jsonParser,
    },
    files: ['**/*.json'],
    rules: { '@nx/dependency-checks': 'error' },
  }
);
