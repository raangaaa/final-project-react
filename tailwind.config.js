/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["selector"],
	theme: {
		extend: {
			colors: {
				"megenta-200": "#1e0011",
				"megenta-300": "#0f0009",
			},
		},
	},
	plugins: [require("daisyui")],
};
