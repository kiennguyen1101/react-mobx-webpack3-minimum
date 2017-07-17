/* eslint-disable no-undef*/
var path = require('path');
const webpack = require('webpack');
module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname + '/dist',
		publicPath: 'dist/',
		filename: 'index.bundle.js'
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
	plugins: [
		//needed for React minification build
		new webpack.DefinePlugin({
		  'process.env': {
			NODE_ENV: JSON.stringify('production')
		  }
		}),
		new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            comments: false,
            sourceMap: true,
            mangle: true,
            minimize: true
        })
	]
};
