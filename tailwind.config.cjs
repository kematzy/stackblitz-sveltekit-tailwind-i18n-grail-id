/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				// Background colors [s = shade (darker)] and [t = tint (brighter)]
				bkgr: {
					t3: 'rgb(var(--colors-bkgr-t3) / <alpha-value>)',
					t2: 'rgb(var(--colors-bkgr-t2) / <alpha-value>)',
					t1: 'rgb(var(--colors-bkgr-t1) / <alpha-value>)',

					DEFAULT: 'rgb(var(--colors-bkgr) / <alpha-value>)',

					s1: 'rgb(var(--colors-bkgr-s1) / <alpha-value>)',
					s2: 'rgb(var(--colors-bkgr-s2) / <alpha-value>)',
					s3: 'rgb(var(--colors-bkgr-s3) / <alpha-value>)'
				},
				fg: 'rgb(var(--colors-fg) / <alpha-value>)',
				// primary: 'theme(colors.yellow.600)'
				primary: {
					t3: 'rgb(var(--colors-primary-t3) / <alpha-value>)',
					t2: 'rgb(var(--colors-primary-t2) / <alpha-value>)',
					t1: 'rgb(var(--colors-primary-t1) / <alpha-value>)',

					DEFAULT: 'rgb(var(--colors-primary) / <alpha-value>)',

					s1: 'rgb(var(--colors-primary-s1) / <alpha-value>)',
					s2: 'rgb(var(--colors-primary-s2) / <alpha-value>)',
					s3: 'rgb(var(--colors-primary-s3) / <alpha-value>)'
				},
				secondary: {
					t3: 'rgb(var(--colors-secondary-t3) / <alpha-value>)',
					t2: 'rgb(var(--colors-secondary-t2) / <alpha-value>)',
					t1: 'rgb(var(--colors-secondary-t1) / <alpha-value>)',

					DEFAULT: 'rgb(var(--colors-secondary) / <alpha-value>)',

					s1: 'rgb(var(--colors-secondary-s1) / <alpha-value>)',
					s2: 'rgb(var(--colors-secondary-s2) / <alpha-value>)',
					s3: 'rgb(var(--colors-secondary-s3) / <alpha-value>)'
				}
			}
		}
	},

	plugins: []
}

module.exports = config
