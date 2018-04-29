const path = require('path');
const commonPath = require('./common-paths');

const config = {
		mode: 'production',
		entry: {
				vendor: path.join(commonPath.srcPath, './js/entry/index.vendor.js')
		},
		output: {
				filename: '[name].bundle.js',
				path: path.join(commonPath.outputDist, './js')
		}
}

module.exports = config;