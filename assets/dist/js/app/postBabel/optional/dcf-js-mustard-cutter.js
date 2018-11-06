'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = factory();
	} else {
		root.dcfJsMustardCutter = factory();
	}
})(undefined, function () {
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
  * @jsPolyfills: an array of objects, each object contains testCondition and path to the polyfill file
  * @cssPolyfills: an array of objects, each object contains testCondition and path to the css file
  * @entries: an array of paths to files that needs to be run in sequence
  * */
	function JsMustardCutter() {
		var mustardLoadersJS = [];
		var mustardLoadersCSS = [];

		var _arguments = Array.prototype.slice.call(arguments),
		    _arguments$ = _arguments[0],
		    jsPolyfills = _arguments$ === undefined ? [] : _arguments$,
		    _arguments$2 = _arguments[1],
		    cssPolyfills = _arguments$2 === undefined ? [] : _arguments$2,
		    _arguments$3 = _arguments[2],
		    entries = _arguments$3 === undefined ? [] : _arguments$3,
		    rest = _arguments.slice(3);

		jsPolyfills.forEach(function (jsPolyfill) {
			if (!jsPolyfill.testCondition) {
				console.log(jsPolyfill.testCondition);
				mustardLoadersJS.push(jsPolyfill.path);
			}
		});

		cssPolyfills.forEach(function (csssPolyfill) {
			if (!csssPolyfill.testCondition) {
				mustardLoadersCSS.push(csssPolyfill.path);
			}
		});

		Promise.all(mustardLoadersJS.map(function (mustardLoader) {
			return load.js(mustardLoader);
		})).then(Promise.all(entries.map(function (entry) {
			return load.js(entry);
		}))).then(Promise.all(mustardLoadersCSS.map(function (mustardLoader) {
			return load.js(mustardLoader);
		}))).catch(function (err) {
			console.error('Failed at ' + err);
		});
	}
	return JsMustardCutter;
});