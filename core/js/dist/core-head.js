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
/******/ 	return __webpack_require__(__webpack_require__.s = 331);
/******/ })
/************************************************************************/
/******/ ({

/***/ 331:
/*!*************************************************!*\
  !*** ./core/js/src/entry/core_head_js_entry.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

eval("// pull in a dependency\nconst main_js = __webpack_require__(/*! ../main.js */ 332);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMxLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29yZS9qcy9zcmMvZW50cnkvY29yZV9oZWFkX2pzX2VudHJ5LmpzPzRjZWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcHVsbCBpbiBhIGRlcGVuZGVuY3lcbmNvbnN0IG1haW5fanMgPSByZXF1aXJlKCcuLi9tYWluLmpzJyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvcmUvanMvc3JjL2VudHJ5L2NvcmVfaGVhZF9qc19lbnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMzMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///331\n");

/***/ }),

/***/ 332:
/*!*****************************!*\
  !*** ./core/js/src/main.js ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

eval("// create log function\nlog = function (data) {\n\tif (\"console\" in window && \"log\" in console) {\n\t\tconsole.log(data);\n\t}\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzMyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29yZS9qcy9zcmMvbWFpbi5qcz81M2RjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNyZWF0ZSBsb2cgZnVuY3Rpb25cbmxvZyA9IGZ1bmN0aW9uIChkYXRhKSB7XG5cdGlmIChcImNvbnNvbGVcIiBpbiB3aW5kb3cgJiYgXCJsb2dcIiBpbiBjb25zb2xlKSB7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cdH1cbn1cblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvcmUvanMvc3JjL21haW4uanNcbi8vIG1vZHVsZSBpZCA9IDMzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///332\n");

/***/ })

/******/ });