// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nxEslintPlugin from '@nx/eslint-plugin';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {                
        EXPERIMENTAL_useProjectService: true,
      },
    },
  },
  { plugins: { '@nx': nxEslintPlugin } },
);