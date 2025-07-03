import * as config from '@lvce-editor/eslint-config'

export default [
  ...config.default,
  {
    rules: {
      'jest/no-restricted-jest-methods': 'off',
      '@typescript-eslint/prefer-readonly-parameter-types': 'off',
    },
  },
]
