const objectFitImages = require('object-fit-images'); // object-fit
const dcf_lazyload = require('../app/lazy-load.js'); // lazy load


//Run it
objectFitImages();

// create log function
var log = function (data) {
		if ("console" in window && "log" in console) {
				console.log(data);
		}
};

console.log('goodbye');