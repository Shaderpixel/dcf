const path = require('path');
const commonPath = require('./common-paths');

const config = {
		mode: 'development',
		entry: {
				dcf_head: path.join(commonPath.srcPath, './js/entry/index.head.js')
		},
		output: {
				filename: '[name].bundle.js',
				path: path.join(commonPath.outputBuild, './js')
		}
}

module.exports = config;