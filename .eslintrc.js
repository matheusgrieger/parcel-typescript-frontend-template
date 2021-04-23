module.exports = {
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  rules: {
    'max-len': ['error', { code: 120, ignoreUrls: true }],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
