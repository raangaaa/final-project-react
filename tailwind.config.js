/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["selector"],
	theme: {
		extend: {
			colors: {
				"megenta-200": "#1e0011",
				"megenta-300": "#0f0009",
				"caramel-200": "#efe2c8",
				"caramel-300": "#d7b784",
			},
		},
	},
	plugins: [require("daisyui")],
};
