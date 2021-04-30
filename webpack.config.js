const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: '/src/js/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'js/main.min.js',
		clean: true,
	},
	devServer: {
		watchContentBase: true,
		contentBase: './dist',
		compress: true,
		open: true,
		port: 9000,
		// hot: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		// CSS Files
		new MiniCssExtractPlugin({
			filename: './css/main.min.css',
		}),
		// HTML Files
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
			minify: true,
		}),
	],
};
