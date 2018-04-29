const webpack = require('webpack');

const config = {
		devtool: 'source-map',
		plugins: [
				new webpack.ProgressPlugin()
		]
}

module.exports = config;