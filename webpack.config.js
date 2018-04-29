const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

const flattenArray = (arr) => {
		return []
				.concat.apply([], [arr])	// Normalize array of addons (flattens the array)
				.filter(Boolean); 							// If addons is undefined or falsy, filter it out of the array
}

const addons = (addonsArg) => {         // addonsArg could be a string or array
		let addons = flattenArray(addonsArg);

		return addons.map((addonName) => {
						try {
								return require(`./build-utils/addons/webpack.${addonName}.js`)
						}
						catch(error) {
								console.error(`--------------------------------------------------\nCannot locate addon -> [${addonName}] in build-utils\n--------------------------------------------------`);
								throw error;
						}
				}
		); // map array of addonNames to an array of addon path
};

const bundles = (chunksArg, envFlag) => {
		let chunks = flattenArray(chunksArg);

		return chunks.map((chunk) => require(`./build-utils/webpack.${envFlag}.${chunk}.js`));
}


module.exports = (env) => {
		console.log(env);

		// check whether the needed env flag values are present before we require the modules that uses those flags
		const envConfig = env == null ? '' : env.env && env.chunks ? bundles(env.chunks, env.env): [];
		const envAddons = env == null ? '' : env.addons ? addons(env.addons): [];
		const optimize = env == null ? '' : env.env && env.optimize ? require(`./build-utils/webpack.${env.env}.optimize`): [];


		const mergedConfig = webpackMerge(commonConfig, ...envConfig, ...envAddons, optimize); // spread env.addons array or single value into addons

		console.log(mergedConfig);
		return mergedConfig;
}