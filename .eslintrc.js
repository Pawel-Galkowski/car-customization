module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 'off',
    'default-param-last': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': 'off',
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
