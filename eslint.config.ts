// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt([
  {
    // Your custom configs here
    files: ["app/**/*.{vue,js}"],
    rules: {
      "vue/no-multiple-template-root": "off",
      "vue/multi-word-component-names": "off",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
        },
      ],
      "vue/first-attribute-linebreak": [
        "error",
        {
          multiline: "below",
          singleline: "ignore",
        },
      ],
      "suggestCanonicalClasses": "off",
    },
  },
]);
