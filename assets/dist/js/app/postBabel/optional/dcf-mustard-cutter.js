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
	// https://davidwalsh.name/javascript-loader
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
		var mustardLoadersJS = [];
		var mustardLoadersCSS = [];
		console.log(arguments);

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

		console.log('mustardLoadersJS: ' + mustardLoadersJS);
		console.log('mustardLoadersCSS: ' + mustardLoadersCSS);

		Promise.all(mustardLoadersJS.map(function (mustardLoader) {
			return load.js().bind(null, mustardLoader);
		})).then(function () {
			console.log('Everything has loaded!');
			console.log('mustardLoadersJS: ' + mustardLoadersJS);
		}).catch(function () {
			console.log('Oh no, epic failure!');
		});
	}
	return MustardCutter;
});