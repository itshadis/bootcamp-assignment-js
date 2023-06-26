/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			keyframes: {
				fade: {
					'0%': {opacity: 1},
					'100%': {opacity: 0.8}
				},
			},
			scale: {
				'-100': '-1',
		}
		},
	},
	plugins: [],
};
