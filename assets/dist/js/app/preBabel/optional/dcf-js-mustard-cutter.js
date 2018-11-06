;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.dcfJsMustardCutter = factory();
  }
}(this, function() {
// https://davidwalsh.name/javascript-loader
const load = (() => {
	function loadTag(tag) {
		return function(url) {
			// This promise will be used by Promise.all to determine success or failure
			return new Promise(function(resolve, reject) {
				var element = document.createElement(tag);
				var parent = 'head';
				var attr = 'src';

				// Important success and error for the promise
				element.onload = function() {
					resolve(url);
				};
				element.onerror = function() {
					reject(url);
				};

				// Need to set different attributes depending on tag type
				switch(tag) {
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
	}
})();

/**
 * MustardCutter
 * @params
 * @jsPolyfills: an array of objects, each object contains testCondition and path to the polyfill file
 * @cssPolyfills: an array of objects, each object contains testCondition and path to the css file
 * @entries: an array of paths to files that needs to be run in sequence
 * */
function JsMustardCutter () {
	let mustardLoadersJS = [];
	let mustardLoadersCSS = [];
	let [ jsPolyfills = [], cssPolyfills =[], entries =[], ...rest ] = arguments;

	jsPolyfills.forEach(jsPolyfill => {
		if (!(jsPolyfill.testCondition)) {
			console.log(jsPolyfill.testCondition);
			mustardLoadersJS.push(jsPolyfill.path);
		}
	});

	cssPolyfills.forEach(csssPolyfill => {
		if (!(csssPolyfill.testCondition)) {
			mustardLoadersCSS.push(csssPolyfill.path);
		}
	});

	Promise.all(
			mustardLoadersJS.map(mustardLoader => load.js(mustardLoader))
	)
		.then(
			Promise.all(
					entries.map(entry => load.js(entry))
			)
		)
		.then(
			Promise.all(
					mustardLoadersCSS.map(mustardLoader => load.js(mustardLoader))
			)
		)
		.catch(
			(err) => {
				console.error('Failed at ' + err);
			}
	);
}
return JsMustardCutter;
}));
