module.exports = {
  extends: ["react-tools", "airbnb", "prettier", "prettier/react"],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"]
      }
    ],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/forbid-prop-types": 1,
    "linebreak-style": [0, "windows"],
    "react/forbid-prop-types": ["warn", { forbid: ["any", "array", "object"] }],
    "react/jsx-indent": 0,
    "no-underscore-dangle": 0,
    "no-unused-vars": "warn",
    "react/prop-types": "warn",
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-autofocus": 0,
    "jsx-a11y/click-events-have-key-events": 1,
    "jsx-a11y/no-noninteractive-element-interactions": 1,
    "import/no-named-as-default-member": 0,
    // This is deprecated in React > 16.3
    "react/no-did-update-set-state": 0,
    "func-names": 0
  },
  parser: "babel-eslint"
};
