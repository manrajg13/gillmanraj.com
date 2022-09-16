/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	"./pages/**/*.{js, ts, jsx, tsx}",
	"./components/**/*.{js, ts, jsx, tsx}"
	],
	darkMode: 'class',
	theme: {
		extend: {},
		colors: {
			'dark-background': '#232226',
			'light-background': '#ffffff',
			'white': '#ccd1cb',
			'black': '#232226',
			'gray': '#d9d9d9',
			'red': '#c72e6e',
			'light-blue': '#91ffde',
			'dark-blue': '#009691'
		},
		fontWeight: {
			normal: 500,
			bold: 600,
		},
		screens: {
			'md': '700px',
		},
	},
	plugins: [],
}
