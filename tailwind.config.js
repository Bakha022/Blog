/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				sen: ['Sen', 'sans-serif'],
			},
			screens: {
				custom: '850px',
				screen_bnt: '407px'
			},
		},
	},
	plugins: [],
}
