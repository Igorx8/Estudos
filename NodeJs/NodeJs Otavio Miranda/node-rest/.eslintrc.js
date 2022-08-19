module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: "airbnb-base",
  overrides: [],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    quotes: "off",
    "no-console": "off",
    "class-methods-use-this": "off",
    "import/first": "off",
    "comma-dangle": "off",
    "no-param-reassign": "off",
    "spaced-comment": "off",
    camelcase: "off",
  },
};
