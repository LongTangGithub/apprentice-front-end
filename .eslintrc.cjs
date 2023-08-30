module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "react-hooks", "jsx-a11y", "react-refresh", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    "prettier/prettier": "error",

    "no-var": "error",
    "prefer-const": "error",
    "no-unused-vars": "warn",
    eqeqeq: "error",

    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/prop-types": "error",
    "react/no-array-index-key": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    indent: ["error", 2],
    quotes: ["error", "single"],
    semi: ["error", "always"],

    "import/no-unresolved": "error",
    "import/order": "error",

    complexity: ["error", 8],
    "no-alert": "error",
    yoda: "error",

    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/click-events-have-key-events": "error",
  },
};
