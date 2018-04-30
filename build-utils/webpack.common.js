const Webpack = require('webpack');

const config = {
		devtool: 'source-map',
		plugins: [
				new Webpack.ProgressPlugin()
		]
}

module.exports = config;