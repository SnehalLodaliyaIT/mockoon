module.exports = {
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: [
    '.eslintrc.js',
    'typings.d.ts',
    'build/*',
    'dist/*',
    'packages/*',
    'scripts/*',
    'tmp/*'
  ],
  extends: ['prettier'],
  parser: '@typescript-eslint/parser'
  
};
