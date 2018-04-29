//Boiler plate distribution configuration, not used in DCF at the moment
const path = require('path');
const commonPath = require('./common-paths');

const config = {
		mode: 'production',
		entry: {
				dcf_body: path.join(commonPath.distSrcPath , './js/dcf_body.bundle.js')
		},
		output: {
				filename: '[name].[hash].bundle.js',
				path: path.join(commonPath.outputDist, './js')
		}
}

module.exports = config;