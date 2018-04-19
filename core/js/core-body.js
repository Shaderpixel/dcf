/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 334);
/******/ })
/************************************************************************/
/******/ ({

/***/ 334:
/*!*************************************************!*\
  !*** ./core/js/src/entry/core_body_js_entry.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// object-fit\nconst dcf_objectfit = __webpack_require__(/*! ../app/object-fit.js */ 335);\n\n\n// lazy load\nconst dcf_lazyload = __webpack_require__(/*! ../app/lazy-load.js */ 336);\n\n// dialog\n// import dcf_dialog from//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29yZS9qcy9zcmMvZW50cnkvY29yZV9ib2R5X2pzX2VudHJ5LmpzP2UxYTUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gb2JqZWN0LWZpdFxuY29uc3QgZGNmX29iamVjdGZpdCA9IHJlcXVpcmUoJy4uL2FwcC9vYmplY3QtZml0LmpzJyk7XG5cblxuLy8gbGF6eSBsb2FkXG5jb25zdCBkY2ZfbGF6eWxvYWQgPSByZXF1aXJlKCcuLi9hcHAvbGF6eS1sb2FkLmpzJyk7XG5cbi8vIGRpYWxvZ1xuLy8gaW1wb3J0IGRjZl9kaWFsb2cgZnJvbVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29yZS9qcy9zcmMvZW50cnkvY29yZV9ib2R5X2pzX2VudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///334\n");

/***/ }),

/***/ 335:
/*!***************************************!*\
  !*** ./core/js/src/app/object-fit.js ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("// Based on https://www.bmorecreativeinc.com/edge-object-fit-fallback-without-polyfill-modernizr/\n\nvar results = document.querySelector( '.dcf-obj-fit-check' );\nvar objectfit = window.getComputedStyle( results, '::before' ).content;\nif( objectfit == 'none' ) {\n  // Edge fallback\n  // Javascript is nearly identical to the Medium article\n  $( '.dcf-obj-fit-cover' ).parent( 'div' ).addClass( 'dcf-obj-fit-cover-fallback' );\n  $( '.dcf-obj-fit-cover-fallback' ).each( function() {\n    var $container = $( this ),\n      imgUrl = $container.find( 'img' ).prop( 'src' );\n    if( imgUrl ) {\n      $container.css( 'backgroundImage', 'url(' + imgUrl + ')' );\n    }\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29yZS9qcy9zcmMvYXBwL29iamVjdC1maXQuanM/MmE3YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCYXNlZCBvbiBodHRwczovL3d3dy5ibW9yZWNyZWF0aXZlaW5jLmNvbS9lZGdlLW9iamVjdC1maXQtZmFsbGJhY2std2l0aG91dC1wb2x5ZmlsbC1tb2Rlcm5penIvXG5cbnZhciByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5kY2Ytb2JqLWZpdC1jaGVjaycgKTtcbnZhciBvYmplY3RmaXQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggcmVzdWx0cywgJzo6YmVmb3JlJyApLmNvbnRlbnQ7XG5pZiggb2JqZWN0Zml0ID09ICdub25lJyApIHtcbiAgLy8gRWRnZSBmYWxsYmFja1xuICAvLyBKYXZhc2NyaXB0IGlzIG5lYXJseSBpZGVudGljYWwgdG8gdGhlIE1lZGl1bSBhcnRpY2xlXG4gICQoICcuZGNmLW9iai1maXQtY292ZXInICkucGFyZW50KCAnZGl2JyApLmFkZENsYXNzKCAnZGNmLW9iai1maXQtY292ZXItZmFsbGJhY2snICk7XG4gICQoICcuZGNmLW9iai1maXQtY292ZXItZmFsbGJhY2snICkuZWFjaCggZnVuY3Rpb24oKSB7XG4gICAgdmFyICRjb250YWluZXIgPSAkKCB0aGlzICksXG4gICAgICBpbWdVcmwgPSAkY29udGFpbmVyLmZpbmQoICdpbWcnICkucHJvcCggJ3NyYycgKTtcbiAgICBpZiggaW1nVXJsICkge1xuICAgICAgJGNvbnRhaW5lci5jc3MoICdiYWNrZ3JvdW5kSW1hZ2UnLCAndXJsKCcgKyBpbWdVcmwgKyAnKScgKTtcbiAgICB9XG4gIH0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb3JlL2pzL3NyYy9hcHAvb2JqZWN0LWZpdC5qc1xuLy8gbW9kdWxlIGlkID0gMzM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///335\n");

/***/ }),

/***/ 336:
/*!**************************************!*\
  !*** ./core/js/src/app/lazy-load.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("// https://github.com/deanhume/lazy-observer-load/blob/master/lazy-load.js\n\n// Get all of the images that are marked up to lazy load\nconst images = document.querySelectorAll('.dcf-lazy-img');\nconst config = {\n  // If the image gets within 50px in the Y axis, start the download.\n//   rootMargin: '0px 0px 50px 0px',\n  rootMargin: '0px',\n//   threshold: 0.01\n  threshold: 0.5\n};\n\nlet imageCount = images.length;\nlet observer;\n\n// If we don't have support for intersection observer, loads the images immediately\nif (!('IntersectionObserver' in window)) {\n  loadImagesImmediately(images);\n} else {\n  // It is supported, load the images\n  observer = new IntersectionObserver(onIntersection, config);\n\n  // foreach() is not supported in IE\n  for (let i = 0; i < images.length; i++) {\n    let image = images[i];\n    if (image.classList.contains('dcf-lazy-img-handled')) {\n      continue;\n    }\n\n    observer.observe(image);\n  }\n}\n\n/**\n * Fetches the image for the given URL\n * @param {string} url\n */\nfunction fetchImage(url) {\n  return new Promise((resolve, reject) => {\n    const image = new Image();\n    image.src = url;\n    image.onload = resolve;\n    image.onerror = reject;\n  });\n}\n\n/**\n * Preloads the image\n * @param {object} image\n */\nfunction preloadImage(image) {\n  const src = image.dataset.src;\n  if (!src) {\n    return;\n  }\n\n  return fetchImage(src).then(() => { applyImage(image, src); });\n}\n\n/**\n * Load all of the images immediately\n * @param {NodeListOf<Element>} images\n */\nfunction loadImagesImmediately(images) {\n  // foreach() is not supported in IE\n  for (let i = 0; i < images.length; i++) {\n    let image = images[i];\n    preloadImage(image);\n  }\n}\n\n/**\n * Disconnect the observer\n */\nfunction disconnect() {\n  if (!observer) {\n    return;\n  }\n\n  observer.disconnect();\n}\n\n/**\n * On intersection\n * @param {array} entries\n */\nfunction onIntersection(entries) {\n  // Disconnect if we've already loaded all of the images\n  if (imageCount === 0) {\n    observer.disconnect();\n  }\n\n  // Loop through the entries\n  for (let i = 0; i < entries.length; i++) {\n    let entry = entries[i];\n    // Are we in viewport?\n    if (entry.intersectionRatio > 0) {\n      imageCount--;\n\n      // Stop watching and load the image\n      observer.unobserve(entry.target);\n      preloadImage(entry.target);\n    }\n  }\n}\n\n/**\n * Apply the image\n * @param {object} img\n * @param {string} src\n */\nfunction applyImage(img, src) {\n  // Prevent this from being lazy loaded a second time.\n  img.classList.add('dcf-lazy-img-handled');\n  img.src = src;\n  img.classList.add('dcf-fade-up');\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzM2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29yZS9qcy9zcmMvYXBwL2xhenktbG9hZC5qcz81MTNhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWFuaHVtZS9sYXp5LW9ic2VydmVyLWxvYWQvYmxvYi9tYXN0ZXIvbGF6eS1sb2FkLmpzXG5cbi8vIEdldCBhbGwgb2YgdGhlIGltYWdlcyB0aGF0IGFyZSBtYXJrZWQgdXAgdG8gbGF6eSBsb2FkXG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGNmLWxhenktaW1nJyk7XG5jb25zdCBjb25maWcgPSB7XG4gIC8vIElmIHRoZSBpbWFnZSBnZXRzIHdpdGhpbiA1MHB4IGluIHRoZSBZIGF4aXMsIHN0YXJ0IHRoZSBkb3dubG9hZC5cbi8vICAgcm9vdE1hcmdpbjogJzBweCAwcHggNTBweCAwcHgnLFxuICByb290TWFyZ2luOiAnMHB4Jyxcbi8vICAgdGhyZXNob2xkOiAwLjAxXG4gIHRocmVzaG9sZDogMC41XG59O1xuXG5sZXQgaW1hZ2VDb3VudCA9IGltYWdlcy5sZW5ndGg7XG5sZXQgb2JzZXJ2ZXI7XG5cbi8vIElmIHdlIGRvbid0IGhhdmUgc3VwcG9ydCBmb3IgaW50ZXJzZWN0aW9uIG9ic2VydmVyLCBsb2FkcyB0aGUgaW1hZ2VzIGltbWVkaWF0ZWx5XG5pZiAoISgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykpIHtcbiAgbG9hZEltYWdlc0ltbWVkaWF0ZWx5KGltYWdlcyk7XG59IGVsc2Uge1xuICAvLyBJdCBpcyBzdXBwb3J0ZWQsIGxvYWQgdGhlIGltYWdlc1xuICBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihvbkludGVyc2VjdGlvbiwgY29uZmlnKTtcblxuICAvLyBmb3JlYWNoKCkgaXMgbm90IHN1cHBvcnRlZCBpbiBJRVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpbWFnZSA9IGltYWdlc1tpXTtcbiAgICBpZiAoaW1hZ2UuY2xhc3NMaXN0LmNvbnRhaW5zKCdkY2YtbGF6eS1pbWctaGFuZGxlZCcpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgfVxufVxuXG4vKipcbiAqIEZldGNoZXMgdGhlIGltYWdlIGZvciB0aGUgZ2l2ZW4gVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbmZ1bmN0aW9uIGZldGNoSW1hZ2UodXJsKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSB1cmw7XG4gICAgaW1hZ2Uub25sb2FkID0gcmVzb2x2ZTtcbiAgICBpbWFnZS5vbmVycm9yID0gcmVqZWN0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBQcmVsb2FkcyB0aGUgaW1hZ2VcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbWFnZVxuICovXG5mdW5jdGlvbiBwcmVsb2FkSW1hZ2UoaW1hZ2UpIHtcbiAgY29uc3Qgc3JjID0gaW1hZ2UuZGF0YXNldC5zcmM7XG4gIGlmICghc3JjKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmV0dXJuIGZldGNoSW1hZ2Uoc3JjKS50aGVuKCgpID0+IHsgYXBwbHlJbWFnZShpbWFnZSwgc3JjKTsgfSk7XG59XG5cbi8qKlxuICogTG9hZCBhbGwgb2YgdGhlIGltYWdlcyBpbW1lZGlhdGVseVxuICogQHBhcmFtIHtOb2RlTGlzdE9mPEVsZW1lbnQ+fSBpbWFnZXNcbiAqL1xuZnVuY3Rpb24gbG9hZEltYWdlc0ltbWVkaWF0ZWx5KGltYWdlcykge1xuICAvLyBmb3JlYWNoKCkgaXMgbm90IHN1cHBvcnRlZCBpbiBJRVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpbWFnZSA9IGltYWdlc1tpXTtcbiAgICBwcmVsb2FkSW1hZ2UoaW1hZ2UpO1xuICB9XG59XG5cbi8qKlxuICogRGlzY29ubmVjdCB0aGUgb2JzZXJ2ZXJcbiAqL1xuZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbn1cblxuLyoqXG4gKiBPbiBpbnRlcnNlY3Rpb25cbiAqIEBwYXJhbSB7YXJyYXl9IGVudHJpZXNcbiAqL1xuZnVuY3Rpb24gb25JbnRlcnNlY3Rpb24oZW50cmllcykge1xuICAvLyBEaXNjb25uZWN0IGlmIHdlJ3ZlIGFscmVhZHkgbG9hZGVkIGFsbCBvZiB0aGUgaW1hZ2VzXG4gIGlmIChpbWFnZUNvdW50ID09PSAwKSB7XG4gICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICB9XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBlbnRyaWVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBlbnRyeSA9IGVudHJpZXNbaV07XG4gICAgLy8gQXJlIHdlIGluIHZpZXdwb3J0P1xuICAgIGlmIChlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgIGltYWdlQ291bnQtLTtcblxuICAgICAgLy8gU3RvcCB3YXRjaGluZyBhbmQgbG9hZCB0aGUgaW1hZ2VcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgcHJlbG9hZEltYWdlKGVudHJ5LnRhcmdldCk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXBwbHkgdGhlIGltYWdlXG4gKiBAcGFyYW0ge29iamVjdH0gaW1nXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjXG4gKi9cbmZ1bmN0aW9uIGFwcGx5SW1hZ2UoaW1nLCBzcmMpIHtcbiAgLy8gUHJldmVudCB0aGlzIGZyb20gYmVpbmcgbGF6eSBsb2FkZWQgYSBzZWNvbmQgdGltZS5cbiAgaW1nLmNsYXNzTGlzdC5hZGQoJ2RjZi1sYXp5LWltZy1oYW5kbGVkJyk7XG4gIGltZy5zcmMgPSBzcmM7XG4gIGltZy5jbGFzc0xpc3QuYWRkKCdkY2YtZmFkZS11cCcpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb3JlL2pzL3NyYy9hcHAvbGF6eS1sb2FkLmpzXG4vLyBtb2R1bGUgaWQgPSAzMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///336\n");

/***/ })

/******/ });