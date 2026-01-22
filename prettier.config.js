/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "es5",
  bracketSpacing: true,
  arrowParens: "always",
  endOfLine: "lf",
  quoteProps: "consistent",
  jsxSingleQuote: false,
  printWidth: 100,
  objectWrap: "preserve",
  bracketSameLine: false,
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: true,
  singleAttributePerLine: true,
};

export default config;
