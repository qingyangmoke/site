/*!
 * tinyjs-plugin-keyboard
 * Description: KeyboardManager
 * Author: fangjun.yfj
 * Version: v0.0.1
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Keyboard"] = factory();
	else
		root["Tiny"] = root["Tiny"] || {}, root["Tiny"]["Keyboard"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @file        KeyboardManager
	 * @author      fangjun.yfj
	 */

	/**
	 * Tiny.js
	 * @external Tiny
	 * @see {@link http://tinyjs.net/}
	 */

	/**
	 * KeyboardManager
	 *
	 * @class Keyboard
	 */
	var Keyboard =
	/**
	 *
	 * @param keyCode
	 * @return {object}
	 */
	function Keyboard(keyCode) {
	  _classCallCheck(this, Keyboard);

	  var key = {};
	  key.code = keyCode;
	  key.isDown = false;
	  key.isUp = true;
	  key.press = undefined;
	  key.release = undefined;
	  //The `downHandler`
	  key.downHandler = function (event) {
	    if (event.keyCode === key.code) {
	      if (key.isUp && key.press) key.press();
	      key.isDown = true;
	      key.isUp = false;
	    }
	    event.preventDefault();
	  };

	  //The `upHandler`
	  key.upHandler = function (event) {
	    if (event.keyCode === key.code) {
	      if (key.isDown && key.release) key.release();
	      key.isDown = false;
	      key.isUp = true;
	    }
	    event.preventDefault();
	  };

	  //Attach event listeners
	  window.addEventListener('keydown', key.downHandler.bind(key), false);
	  window.addEventListener('keyup', key.upHandler.bind(key), false);
	  return key;
	};

	module.exports = Keyboard;

/***/ })
/******/ ])
});
;