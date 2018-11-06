/*
*  Task configurations for wrapping widgets in Universal Module Definitions
 */
const path = require('path');
const gulp = require('gulp');
const $ = require('./gulp-load-plugins');
const buildPaths = require('./build-paths');
const customPlumber = require('./custom-plumber');

/**
 * Warning: if no exports option set, the exported variable (for commonJS) is taken from the file name and capitalized
 * so if you are returning something, make sure that you either specify an exports option or rename the file to
 * match. See https://github.com/eduardolundgren/gulp-umd#options
 */

const jsMustardCutter = [
	gulp.src(path.join(buildPaths.appJsOptionalSrc, 'dcf-js-mustard-cutter.js')),
	customPlumber('error wrapping js-mustardCutter'),
	$.newer({ dest:buildPaths.umdOptionaAppDest }),
	$.umd({
		exports: () => 'JsMustardCutter', // the variable name that will be returned
		namespace: () => 'dcfJsMustardCutter' // how this module is named in the global scope
		// if no exports defined, capitalized filename will be used instead
	}),
	gulp.dest(buildPaths.umdOptionaAppDest)
];

const cssMustardCutter = [
	gulp.src(path.join(buildPaths.appJsOptionalSrc, 'dcf-css-mustard-cutter.js')),
	customPlumber('error wrapping css-mustardCutter'),
	$.newer({ dest:buildPaths.umdOptionaAppDest }),
	$.umd({
		exports: () => 'CssMustardCutter', // the variable name that will be returned
		namespace: () => 'dcfCssMustardCutter' // how this module is named in the global scope
		// if no exports defined, capitalized filename will be used instead
	}),
	gulp.dest(buildPaths.umdOptionaAppDest)
];

module.exports = {
	jsMustardCutter,
	cssMustardCutter,
};