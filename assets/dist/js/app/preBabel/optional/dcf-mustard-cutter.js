;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.dcfMustardCutter = factory();
  }
}(this, function() {
// https://davidwalsh.name/javascript-loader
function load() {
	function loadTag(tag) {
		return function(url) {
			// This promise will be used by Promise.all to determine success or failure
			return new Promise(function(resolve, reject) {
				var element = document.createElement(tag);
				var parent = 'body';
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
	}
}

function MustardCutter () {
	let mustardLoadersJS = [];
	let mustardLoadersCSS = [];
	console.log(arguments);
	let [ jsPolyfills = [], cssPolyfills =[], entries =[], ...rest ] = arguments;

	jsPolyfills.forEach(jsPolyfill => {
		if (!(jsPolyfill.testCondition)) {
			mustardLoadersJS.push(jsPolyfill.path);
		}
	});

	cssPolyfills.forEach(csssPolyfill => {
		if (!(csssPolyfill.testCondition)) {
			mustardLoadersCSS.push(csssPolyfill.path);
		}
	});

	console.log(`jsPolyfills: ${mustardLoadersJS}`);
	console.log(`cssPolyfills: ${mustardLoadersCSS}`);

	Promise.all(
			mustardLoadersJS.map(mustardLoader => load.js(mustardLoader))
	)
		.then(
			function() {
				console.log('Everything has loaded!');
				console.log(`mustardLoadersJS: ${mustardLoadersJS}`);
	})
		.catch(
				function() {
					console.log('Oh no, epic failure!');
	});
}
return MustardCutter;
}));
