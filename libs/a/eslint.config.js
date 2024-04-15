import baseConfig from '../../eslint.config.js'
import tseslint from 'typescript-eslint';
import * as jsonParser from 'jsonc-eslint-parser';

export default tseslint.config(
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {},
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {},
  },
  // {
  //   languageOptions: {
  //     parser: jsonParser,
  //   },
  //   files: ['**/*.json'],
  //   rules: { '@nx/dependency-checks': 'error' },
  // }
);
