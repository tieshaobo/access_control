module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'space-before-function-paren': ['error', 'never'],
    // 'vue/no-unused-components': ['never'],
    // 'vue/no-unused-vars': ['never'],
    // 'no-multi-spaces': ['error', { 'ignoreEOLComments': true }],
    // 'no-trailing-spaces': ['error', { 'skipBlankLines': true, 'ignoreComments': true }],
    // 'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false }],
    // 'standard/object-curly-even-spacing': ['off'],
    // 'no-unused-vars': ['off'],
    // 'handle-callback-err': ['off']
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
