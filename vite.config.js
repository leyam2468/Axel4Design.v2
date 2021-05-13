const { resolve } = require('path');

module.exports = {
	build: {
		cssCodeSplit: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, '/index.html'),
				calculater: resolve(__dirname, './pages/calculater/index.html'),
				clock: resolve(__dirname, './pages/clock/index.html'),
				digitalClock: resolve(
					__dirname,
					'./pages/digital-clock/index.html'
				),
				flexBoxApp: resolve(
					__dirname,
					'./pages/Flex-box-app/index.html'
				),
				qrCodeGenerator: resolve(
					__dirname,
					'./pages/qr-code-generator/index.html'
				),
				qockPaperScissors: resolve(
					__dirname,
					'./pages/rock-paper-scissors/index.html'
				),
				toDoList: resolve(__dirname, './pages/todolist/index.html'),
				winter: resolve(__dirname, './pages/winter/index.html'),
				xOGame: resolve(__dirname, './pages/x&o-game/index.html'),
			},
		},
	},
};
