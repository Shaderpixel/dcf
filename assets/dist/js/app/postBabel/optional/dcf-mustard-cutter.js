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

	function MustardCutter() {
		var mustardLoaderJS = [];
		var mustardLoaderCSS = [];
		console.log(arguments);

		var _arguments = Array.prototype.slice.call(arguments),
		    _arguments$ = _arguments[0],
		    jsPolyfills = _arguments$ === undefined ? [] : _arguments$,
		    _arguments$2 = _arguments[1],
		    cssPolyfills = _arguments$2 === undefined ? [] : _arguments$2,
		    _arguments$3 = _arguments[2],
		    entries = _arguments$3 === undefined ? [] : _arguments$3,
		    rest = _arguments.slice(3);

		if (!('Promise' in window)) {
			var promisePolyfill = document.createElement("script");
			promisePolyfill.src = 'mustard/es6-promise.min.js';
			promisePolyfill.async = false; // Keep the execution order
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