module.exports = {
  darkMode: 'class',
  content: [
    './**/*.html',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 10px var(--tw-shadow-color)",
          "0 0px 20px var(--tw-shadow-color)",
        ]
      }
    },
  },
	plugins: [
    require("preline/plugin")
  ],
}

