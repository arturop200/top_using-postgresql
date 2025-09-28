/** @type {import('prettier').Config} */
export default {
  htmlWhitespaceSensitivity: 'ignore',
  singleQuote: true,
  overrides: [
    {
      files: ['*.css'],
      options: {
        singleQuote: false,
      },
    },
    {
      files: ['*.ejs'],
      options: {
        htmlWhitespaceSensitivity: 'css',
      },
    },
  ],
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-ejs'],
};
