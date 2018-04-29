//Boiler plate distribution configuration, not used in DCF at the moment
const path = require('path');
const commonPath = require('./common-paths');
console.log(commonPath.distSrcPath);
const config = {
		mode: 'production',
		entry: {
				dcf_head: path.join(commonPath.distSrcPath , './js/dcf_head.bundle.js')
		},
		output: {
				filename: '[name].[hash].bundle.js',
				path: path.join(commonPath.outputDist, './js')
		}
}

module.exports = config;