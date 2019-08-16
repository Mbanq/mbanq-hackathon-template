module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-var': 'error',
    'camelcase': [2, {
      'properties': 'always'
    }],
    'object-curly-spacing': ['error', 'always'],
    'vue/mustache-interpolation-spacing': [2, 'always'],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/html-quotes': 'error',
    'vue/no-v-html': 'error',
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'import/extensions': ['error', 'always', {
      ignorePackages: true
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
