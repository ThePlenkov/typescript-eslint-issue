// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nxEslintPlugin from '@nx/eslint-plugin';
import * as jsonParser from 'jsonc-eslint-parser';

export default tseslint.config(
  eslint.configs.recommended,
  { files: ["*.ts"],
    extends: [...tseslint.configs.recommendedTypeChecked]    ,
    languageOptions: {
      parserOptions: {                
        EXPERIMENTAL_useProjectService: true,
      },
    },
  },
  { plugins: { '@nx': nxEslintPlugin } },
  {
    files: ['*.json'],    
    //...tseslint.configs.disableTypeChecked,    
    languageOptions: {
      parser: jsonParser
    },
    rules: {
      '@nx/dependency-checks': 'error',
    },
  }
);