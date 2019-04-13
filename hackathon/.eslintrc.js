module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'import/no-unresolved': ['off'],
    'import/prefer-default-export': ['off'],
    'vue/html-indent': ['error', 4],
    'vue/html-closing-bracket-newline': ['off'],
    'indent': ['error', 4],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
      ],
    }],
    'class-methods-use-this':['off'],
    'no-underscore-dangle': ['error', { 'allow': ['_router'] }],
    'no-unused-vars':['error', { 'argsIgnorePattern': 'commit' }],
    'max-len': ['error', {
      'code': 100,
      'ignoreTrailingComments': true,
      'ignoreComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    }],
    'vue/component-name-in-template-casing': ['error',
      'PascalCase',
      {
        'ignores': ['nuxt', 'nuxt-link','vue-typer','no-ssr'],
      }
    ],
    'vue/order-in-components': ['error', {
      'order': [
        'asyncData',
        'fetch',
      ],
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
};
