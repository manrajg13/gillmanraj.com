/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	"./pages/**/*.{js, ts, jsx, tsx}",
	"./components/**/*.{js, ts, jsx, tsx}"
	],
	theme: {
		extend: {},
		colors: {
			'background': '#232226',
			'white': '#ccd1cb',
			'red': '#c72e6e',
		},
		fontWeight: {
			normal: 500,
			bold: 600,
		},
		screens: {
			'md': '1043px',
		}
	},
	plugins: [],
}
