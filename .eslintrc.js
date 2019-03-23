module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ["react"],
  rules: {
    "func-names": 0,
    "prefer-arrow-callback": 0,
    "new-cap": 0,
    camelcase: 0,
    "no-constant-condition": 0,
    "no-param-reassign": 0,
    "no-continue": 0,
    "comma-dangle": 0,
    "space-before-function-paren": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": ["error", { argsIgnorePattern: "^__" }],
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "no-use-before-define": 0,
    "react/prop-types": 0,
    "no-shadow": 0,
    "react/no-unused-state": 0,
    "react/destructuring-assignment": 0,
    "global-require": 0,
    "import/prefer-default-export": 0,
    "object-curly-newline": 0,
    "arrow-body-style": 0,
    "no-undef": 0,
    "react/no-array-index-key": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-console": 0,
    "no-unused-vars": 0,
    "arrow-parens": 0
  }
};
