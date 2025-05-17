import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginNext from '@next/eslint-plugin-next'

export default [
  { ignores: ['dist/**'] },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    ...pluginReact.configs.flat.recommended,
    settings: { react: { version: 'detect' } },
  },

  {
    plugins: {
      'react-hooks': pluginReactHooks,
      '@next/next': pluginNext,
      prettier: prettierPlugin,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },

  eslintConfigPrettier,
]
