import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["node_modules/", "dist/"],
    languageOptions: {
      globals: {
        ...globals.browser,
        cy: true,
        describe: true,
        it: true,
        beforeEach: true,
      },
    },
  },
  pluginJs.configs.recommended,
];
