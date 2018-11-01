'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

;(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
		module.exports = factory();
	} else {
		root.dcfMustardCutter = factory();
	}
})(undefined, function () {
	var _arguments = arguments;

	function load() {
		function loadTag(tag) {
			return function (url) {
				// This promise will be used by Promise.all to determine success or failure
				return new Promise(function (resolve, reject) {
					var element = document.createElement(tag);
					var parent = 'body';
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
						case 'script':
							element.async = true;
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
			js: loadTag('script'),
			img: loadTag('img')
		};
	}

	var MustardCutter = function MustardCutter() {
		var jsPolyfills = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
		var cssPolyfills = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
		var entries = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

		var mustardLoaderJS = [];
		var mustardLoaderCSS = [];
		console.log(_arguments);
		// let { jsPolyfills = [], cssPolyfills =[], entries =[] } = arguments;

		if (!('Promise' in window)) {
			var promisePolyfill = document.createElement("script");
			el.src = 'mustard/es6-promise.min.js';
			el.async = false; // Keep the execution order
			document.head.appendChild(promisePolyfill);
		}

		jsPolyfills.forEach(function (jsPolyfill) {
			if (!jsPolyfill.testCondition) {
				mustardLoaderJS.push(jsPolyfill.path);
			}
		});

		cssPolyfills.forEach(function (csssPolyfill) {
			if (!csssPolyfill.testCondition) {
				mustardLoaderCSS.push(csssPolyfill.path);
			}
		});

		console.log('jsPolyfills: ' + jsPolyfills);
		console.log('cssPolyfills: ' + cssPolyfills);
	};
	return MustardCutter;
});