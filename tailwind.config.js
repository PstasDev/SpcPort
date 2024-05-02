module.exports = {
  darkMode: 'media',
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

