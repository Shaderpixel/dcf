const path = require('path');
const commonPath = require('./common-paths');

const config = {
		mode: 'development',
		entry: {
				dcf_body: path.join(commonPath.srcPath, './js/entry/index.body.js')
		},
		output: {
				filename: '[name].bundle.js',
				path: path.join(commonPath.outputBuild, './js')
		}
}

module.exports = config;