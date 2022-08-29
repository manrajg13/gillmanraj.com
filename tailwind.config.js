/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	"./pages/**/*.{js, ts, jsx, tsx}",
	"./components/**/*.{js, ts, jsx, tsx}"
	],
	theme: {
		extend: {},
		colors: {
			'light-gray': '#71717a',
			'dark-gray': '#13121c',
			'white': '#ebe4f2',
			'lavender': '#b499ff',
			'gray': '#aca3b5',
		},
		fontWeight: {
			bold: 600,
		},
		screens: {
			'md': '1043px',
		}
	},
	plugins: [],
}
