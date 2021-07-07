module.exports = {
  printWidth: 120,
  trailingComma: 'all',
  tabWidth: 2,
  singleQuote: true,
  semi: true,

  arrowParens: 'always',
  overrides: [
    {
      files: '*.{js,jsx,scss,json,html}',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
