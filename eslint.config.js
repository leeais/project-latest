import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import security from 'eslint-plugin-security'
import unicorn from 'eslint-plugin-unicorn'
import prettier from 'eslint-plugin-prettier'

export default tseslint.config([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'jsx-a11y': jsxA11y,
      security,
      unicorn,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'jsx-a11y/no-autofocus': 'warn',
      'security/detect-object-injection': 'off',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
])
