/* eslint-disable no-undef*/
var path = require('path');
module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',	
				include: path.join(__dirname, 'src'),				
				options: {
					plugins: [
						"transform-decorators-legacy",
						"transform-class-properties"
					]
				}
				
				
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};
