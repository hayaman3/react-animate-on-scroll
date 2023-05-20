module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "jsx-a11y/label-has-associated-control": [ 2, {
    "labelComponents": ["CustomInputLabel"],
    "labelAttributes": ["label"],
    "controlComponents": ["CustomInput"],
    "depth": 3,
    }],
    }
};
