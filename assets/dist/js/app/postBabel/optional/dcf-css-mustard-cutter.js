'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = factory();
	} else {
		root.dcfCssMustardCutter = factory();
	}
})(undefined, function () {
	/** THIS IS STILL A WIP: LOAD function can possibly be separated out into its own module and be a
  *  dependent for mustard cutters or other modules that has use for script injectors
  *  **/
	// https://davidwalsh.name/javascript-loader
	var load = function () {
		function loadTag(tag) {
			return function (url) {
				// This promise will be used by Promise.all to determine success or failure
				return new Promise(function (resolve, reject) {
					var element = document.createElement(tag);
					var parent = 'head';
					var attr = 'src';

					// Important success and error for the promise
					element.onload = function () {
						resolve(url);
					};
					element.onerror = function () {
						reject(url);
					};

					// Need to set different attributes depending on tag type
					switch (tag) {
						case 'script:async':
							element.async = true;
							break;
						case 'script:sync':
							element.async = false;
							break;
						case 'link':
							element.type = 'text/css';
							element.rel = 'stylesheet';
							attr = 'href';
							parent = 'head';
					}

					// Inject into document to kick off loading
					element[attr] = url;
					document[parent].appendChild(element);
				});
			};
		}

		return {
			css: loadTag('link'),
			jsAsync: loadTag('script:async'),
			jsSync: loadTag('script:sync'),
			img: loadTag('img')
		};
	}();

	/**
  * MustardCutter
  * @params
  * @cssPolyfills: an array of objects, each object contains testCondition and path to the css file
  * @entries: an array of paths to files that needs to be run in sequence
  * */
	function CssMustardCutter() {
		var mustardLoadersCSS = [],
		    _arguments = Array.prototype.slice.call(arguments),
		    _arguments$ = _arguments[0],
		    cssPolyfills = _arguments$ === undefined ? [] : _arguments$,
		    rest = _arguments.slice(1);


		cssPolyfills.forEach(function (csssPolyfill) {
			if (!csssPolyfill.testCondition) {
				mustardLoadersCSS.push(csssPolyfill.path);
			}
		});

		mustardLoadersCSS.map(function (mustardLoader) {
			return load.css(mustardLoader);
		}).catch(function (err) {
			console.error('Failed at ' + err);
		});
	}
	return CssMustardCutter;
});