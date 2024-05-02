module.exports = {
  darkMode: 'class',
  content: [
    './**/*.html',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
	plugins: [
    require("preline/plugin")
  ],
}

