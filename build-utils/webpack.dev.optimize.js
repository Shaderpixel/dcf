const config = {
		optimization: {
				splitChunks: {
						cacheGroups: {
								commons: {
										test: /[\\/]node_modules[\\/]/,
										name: 'vendor',
										chunks: 'all'
								}
						}
				}
		}
}

module.exports = config;