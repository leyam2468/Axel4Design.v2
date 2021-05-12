const { resolve } = require('path');

module.exports = {
	build: {
		cssCodeSplit: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, '/index.html'),
				clock: resolve(__dirname, './pages/clock/index.html'),
				calculater: resolve(__dirname, './pages/calculater/index.html'),
			},
		},
	},
};
