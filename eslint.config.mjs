import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import plImport from 'eslint-plugin-import';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['node_modules/**']),

  {
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      import: plImport,
    },
    settings: {},
    rules: {
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '**/*.module.*',
              group: 'unknown',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['type'],
        },
      ],

      semi: ['error', 'always'],

      quotes: ['error', 'single'],
      indent: ['error', 2],
      semi: ['error', 'always'],

      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
      'react-hooks/set-state-in-effect': 'off',
      'no-empty-object-type': 'off',

      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'multiline-block-like', next: '*' },
      ],
    },
  },
]);

export default eslintConfig;
