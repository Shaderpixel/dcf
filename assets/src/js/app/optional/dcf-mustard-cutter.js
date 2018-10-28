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

let MustardCutter = (jsPolyfills = [], cssPolyfills = [], entries = []) => {
	let mustardLoaderJS = [];
	let mustardLoaderCSS = [];

	if (!('Promise' in window)) {
			const promisePolyfill = document.createElement("script");
			el.src = 'mustard/es6-promise.min.js';
			el.async = false; // Keep the execution order
			document.head.appendChild(promisePolyfill);
	}

	jsPolyfills.forEach(jsPolyfill => {
		if (!(jsPolyfill.testCondition)) {
			mustardLoaderJS.push(jsPolyfill.path);
		}
	});

	cssPolyfills.forEach(csssPolyfill => {
		if (!(csssPolyfill.testCondition)) {
			mustardLoaderCSS.push(csssPolyfill.path);
		}
	});

	console.log(`jsPolyfills: ${jsPolyfills}`);
	console.log(`cssPolyfills: ${cssPolyfills}`);
};