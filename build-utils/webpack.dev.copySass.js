const CopyWebpackPlugin = require('copy-webpack-plugin');
const commonPaths = require('./common-paths.js');
const path = require('path');

const config = {
		plugins: [
				new CopyWebpackPlugin(
						[{
								from: path.join(commonPaths.srcPath, 'scss'),
								to: path.join(commonPaths.outputBuild, 'scss')
						}]
				)
		]
}

module.exports = config;