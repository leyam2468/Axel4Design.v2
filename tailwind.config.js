module.exports = {
	purge: [
		'./index.html',
		'./**/*.html',
		'./pages/**/*.html',
		'./**/*.js',
		'./**/*.{vue,js,ts,jsx,tsx}',
	],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				'90vh': '90vh',
			},
			colors: {
				darkmode: '#1f1f1f',
				black: {
					0.1: 'rgba(0, 0, 0, 0.1)',
					0.2: 'rgba(0, 0, 0, 0.2)',
					0.3: 'rgba(0, 0, 0, 0.3)',
					0.4: 'rgba(0, 0, 0, 0.4)',
					0.5: 'rgba(0, 0, 0, 0.5)',
					0.6: 'rgba(0, 0, 0, 0.6)',
					0.7: 'rgba(0, 0, 0, 0.7)',
					0.8: 'rgba(0, 0, 0, 0.8)',
					0.9: 'rgba(0, 0, 0, 0.9)',
					1: 'rgba(0, 0, 0, 0)',
				},

				white: {
					0.1: 'rgba(255, 255, 255, 0.1)',
					0.2: 'rgba(255, 255, 255, 0.2)',
					0.3: 'rgba(255, 255, 255, 0.3)',
					0.4: 'rgba(255, 255, 255, 0.4)',
					0.5: 'rgba(255, 255, 255, 0.5)',
					0.6: 'rgba(255, 255, 255, 0.6)',
					0.7: 'rgba(255, 255, 255, 0.7)',
					0.8: 'rgba(255, 255, 255, 0.8)',
					0.9: 'rgba(255, 255, 255, 0.9)',
					1: 'rgba(255, 255, 255, 255)',
				},
			},
			spacing: {
				42: '10.5rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
