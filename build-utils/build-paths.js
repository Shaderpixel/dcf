const path = require('path');
const commonPaths = require('./common-paths');
const buildNames = require('./build-names');

const vendorJsSrcPath = path.join(commonPaths.srcPath, 'js', 'vendor');
const mustardJsSrcPath = path.join(commonPaths.srcPath, 'js', 'mustard');
const appJsSrcPath = path.join(commonPaths.srcPath, 'js', 'app');
const appJsDestPath = path.join(commonPaths.outputBuild, 'js', 'app');
const appJsDestPathPreBabel = path.join(appJsDestPath, 'preBabel');
const appJsDestPathPostBabel = path.join(appJsDestPath, 'postBabel');
const optionalAppPath = path.join(commonPaths.outputBuild, 'js', 'app','optional');
const exampleScssSrcPath = path.join(commonPaths.examplePath, 'scss');
const coreDistCssPath = path.join(commonPaths.outputDist,'css');

//Obtain paths to dependencies from package
const dialogPolyfill = require.resolve('dialog-polyfill');
const intersectionObserver = require.resolve('intersection-observer');
const picturefill = require.resolve('picturefill');
const objectFitImages = require.resolve('object-fit-images');
//TODO detailsPolyfill being pulled in as index.js
const detailsPolyfill = require.resolve('details-polyfill');
const es6Promise = require.resolve('es6-promise');

module.exports = {
	vendorJsSrc: vendorJsSrcPath,
	// better to use unminified vendor files since all files will be concatenated & minified
	vendorJsGlob: [`${vendorJsSrcPath}/**/*.js`],
	vendorJsDest: path.join(commonPaths.outputBuild, 'js', 'vendor'),
	// better to use unminified mustard files since all files will be minified
	mustardJSGlob: [`${mustardJsSrcPath}/**/*.js`,picturefill, objectFitImages, detailsPolyfill, dialogPolyfill, intersectionObserver, es6Promise],
	mustardDest: path.join(commonPaths.outputBuild, 'js', 'mustard'),
	appJsPath: appJsSrcPath,
	appJsCommonSrc: path.join(appJsSrcPath, 'common'),
	appJsOptionalSrc: path.join(appJsSrcPath, 'optional'),
	appJsSrcGlob: `${appJsSrcPath}/**/*.js`,
	appJsDestPreBabel: appJsDestPathPreBabel,
	babelAppGlob: `${appJsDestPathPreBabel}/**/*.js`,
	appJsDestPostBabel: appJsDestPathPostBabel,
	appJsDestPostBabelGlob: `${appJsDestPathPostBabel}/**/*.js`,
	umdCommonAppDest: path.join(appJsDestPathPreBabel, 'common'),
	umdOptionaAppDest: path.join(appJsDestPathPreBabel, 'optional'),

	// example theme related build paths
	exampleScssGlob: [`${exampleScssSrcPath}/**/*.scss`, ],
	exampleScssLintedDest: path.join(commonPaths.exampleBuild, 'scss'),
	exampleScreenScssEntry: path.join(commonPaths.exampleBuild,'scss','all.scss'),
	exampleMustardScssEntry: path.join(commonPaths.exampleBuild,'scss','mustard.scss'),
	examplePrintScssEntry: path.join(commonPaths.exampleBuild,'scss','print.scss'),
	exampleCompiledCssDir: path.join(commonPaths.exampleBuild,'css'),
	exampleScreenConcatGlob: [path.join(commonPaths.exampleBuild,'css','all.css'), `${coreDistCssPath}/screen/**/*.css`]
};
