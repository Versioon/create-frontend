module.exports = {
  extends: ['@optimistdigital/eslint-config-rules', 'prettier'],
  rules: {
    'flowtype/define-flow-type': 1,
    'react/jsx-indent': 0,
    'no-param-reassign': 0,
    'new-cap': [
      1,
      {
        capIsNewExceptionPattern: '^(.*.)*[A-Z]{2,}',
      },
    ],
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['import', 'react', 'flowtype'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
      jsx: true,
    },
  },
  globals: {
    __DEVELOPMENT__: true,
    __PRODUCTION__: true,
    __DEBUG__: true,
    __OCF_MANIFEST_PATH__: true,
  },
};
