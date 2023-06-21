const postcssImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const tailwindcssNesting = require('tailwindcss/nesting')
const autoprefixer = require('autoprefixer')

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		postcssImport(),
		tailwindcssNesting(),
		tailwindcss(),
		//But others, like autoprefixer, need to run after,
		autoprefixer
	]
}

module.exports = config
