/*!
 * Name: tiny
 * Description: The Tiny engine is an HTML5 game engine designed to be lightweight and concise JavaScript-friendly syntax, it will only for mobile.
 * Author: yiqi
 * Version: v1.1.3
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tiny"] = factory();
	else
		root["Tiny"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 149);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * String of the current Tiny version.
 *
 * @static
 * @constant
 * @memberof Tiny
 * @name VERSION
 * @type {string}
 */
var VERSION = exports.VERSION = '1.1.3';

/**
 * Math.PI * 2
 *
 * @static
 * @constant
 * @memberof Tiny
 * @name PI_2
 * @type {number}
 */
var PI_2 = exports.PI_2 = Math.PI * 2;

/**
 * Constant conversion factor for converting radians to degrees
 *
 * @static
 * @constant
 * @memberof Tiny
 * @name RAD_TO_DEG
 * @type {number}
 */
var RAD_TO_DEG = exports.RAD_TO_DEG = 180 / Math.PI;

/**
 * Constant conversion factor for converting degrees to radians
 *
 * @static
 * @constant
 * @memberof Tiny
 * @name DEG_TO_RAD
 * @type {number}
 */
var DEG_TO_RAD = exports.DEG_TO_RAD = Math.PI / 180;

/**
 * Constant to identify the Renderer Type.
 *
 * @static
 * @constant
 * @memberof Tiny
 * @name RENDERER_TYPE
 * @type {object}
 * @property {number} UNKNOWN - Unknown render type.
 * @property {number} WEBGL - WebGL render type.
 * @property {number} CANVAS - Canvas render type.
 */
var RENDERER_TYPE = exports.RENDERER_TYPE = {
  UNKNOWN: 0,
  WEBGL: 1,
  CANVAS: 2
};

/**
 * Various blend modes supported.
 * <br>
 * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
 * Anything else will silently act like NORMAL.
 *
 * @static
 * @constant
 * @memberof Tiny
 * @name BLEND_MODES
 * @type {object}
 * @property {number} NORMAL
 * @property {number} ADD
 * @property {number} MULTIPLY
 * @property {number} SCREEN
 * @property {number} OVERLAY
 * @property {number} DARKEN
 * @property {number} LIGHTEN
 * @property {number} COLOR_DODGE
 * @property {number} COLOR_BURN
 * @property {number} HARD_LIGHT
 * @property {number} SOFT_LIGHT
 * @property {number} DIFFERENCE
 * @property {number} EXCLUSION
 * @property {number} HUE
 * @property {number} SATURATION
 * @property {number} COLOR
 * @property {number} LUMINOSITY
 */
var BLEND_MODES = exports.BLEND_MODES = {
  NORMAL: 0,
  ADD: 1,
  MULTIPLY: 2,
  SCREEN: 3,
  OVERLAY: 4,
  DARKEN: 5,
  LIGHTEN: 6,
  COLOR_DODGE: 7,
  COLOR_BURN: 8,
  HARD_LIGHT: 9,
  SOFT_LIGHT: 10,
  DIFFERENCE: 11,
  EXCLUSION: 12,
  HUE: 13,
  SATURATION: 14,
  COLOR: 15,
  LUMINOSITY: 16
};

/**
 * Various webgl draw modes. These can be used to specify which GL drawMode to use
 * under certain situations and renderers.
 *
 * @static
 * @constant
 * @memberof Tiny
 * @name DRAW_MODES
 * @type {object}
 * @property {number} POINTS
 * @property {number} LINES
 * @property {number} LINE_LOOP
 * @property {number} LINE_STRIP
 * @property {number} TRIANGLES
 * @property {number} TRIANGLE_STRIP
 * @property {number} TRIANGLE_FAN
 */
var DRAW_MODES = exports.DRAW_MODES = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
};

/**
 * The scale modes that are supported.
 *
 * The {@link Tiny.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
 * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
 *
 * @static
 * @constant
 * @memberof Tiny
 * @name SCALE_MODES
 * @type {object}
 * @property {number} LINEAR Smooth scaling
 * @property {number} NEAREST Pixelating scaling
 */
var SCALE_MODES = exports.SCALE_MODES = {
  LINEAR: 0,
  NEAREST: 1
};

/**
 * The wrap modes that are supported.
 *
 * The {@link Tiny.settings.WRAP_MODE} wrap mode affects the default wraping mode of future operations.
 * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
 * If the texture is non power of two then clamp will be used regardless as webGL can
 * only use REPEAT if the texture is po2.
 *
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @name WRAP_MODES
 * @memberof Tiny
 * @type {object}
 * @property {number} CLAMP - The textures uvs are clamped
 * @property {number} REPEAT - The texture uvs tile and repeat
 * @property {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring
 */
var WRAP_MODES = exports.WRAP_MODES = {
  CLAMP: 0,
  REPEAT: 1,
  MIRRORED_REPEAT: 2
};

/**
 * The gc modes that are supported by Tiny.
 *
 * The {@link Tiny.settings.GC_MODE} Garbage Collection mode for Tiny textures is AUTO
 * If set to GC_MODE, the renderer will occasianally check textures usage. If they are not
 * used for a specified period of time they will be removed from the GPU. They will of course
 * be uploaded again when they are required. This is a silent behind the scenes process that
 * should ensure that the GPU does not  get filled up.
 *
 * Handy for mobile devices!
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @name GC_MODES
 * @memberof Tiny
 * @type {object}
 * @property {number} AUTO - Garbage collection will happen periodically automatically
 * @property {number} MANUAL - Garbage collection will need to be called manually
 */
var GC_MODES = exports.GC_MODES = {
  AUTO: 0,
  MANUAL: 1
};

/**
 * Regexp for image type by extension.
 *
 * @static
 * @constant
 * @memberof Tiny
 * @type {RegExp|string}
 * @example `image.png`
 */
var URL_FILE_EXTENSION = exports.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i;

/**
 * Regexp for data URI.
 * Based on: {@link https://github.com/ragingwind/data-uri-regex}
 *
 * @static
 * @constant
 * @name DATA_URI
 * @memberof Tiny
 * @type {RegExp|string}
 * @example data:image/png;base64
 */
var DATA_URI = exports.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i;

/**
 * Regexp for SVG size.
 *
 * @static
 * @constant
 * @name SVG_SIZE
 * @memberof Tiny
 * @type {RegExp|string}
 * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
 */
var SVG_SIZE = exports.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;

/**
 * Constants that identify shapes, mainly to prevent `instanceof` calls.
 *
 * @static
 * @constant
 * @name SHAPES
 * @memberof Tiny
 * @type {object}
 * @property {number} POLY Polygon
 * @property {number} RECT Rectangle
 * @property {number} CIRC Circle
 * @property {number} ELIP Ellipse
 * @property {number} RREC Rounded Rectangle
 */
var SHAPES = exports.SHAPES = {
  POLY: 0,
  RECT: 1,
  CIRC: 2,
  ELIP: 3,
  RREC: 4
};

/**
 * Constants that specify float precision in shaders.
 *
 * @static
 * @constant
 * @name PRECISION
 * @memberof Tiny
 * @type {object}
 * @property {string} LOW='lowp'
 * @property {string} MEDIUM='mediump'
 * @property {string} HIGH='highp'
 */
var PRECISION = exports.PRECISION = {
  LOW: 'lowp',
  MEDIUM: 'mediump',
  HIGH: 'highp'
};

/**
 * Constants that specify the transform type.
 *
 * @static
 * @constant
 * @name TRANSFORM_MODE
 * @memberof Tiny
 * @type {object}
 * @property {number} STATIC
 * @property {number} DYNAMIC
 */
var TRANSFORM_MODE = exports.TRANSFORM_MODE = {
  STATIC: 0,
  DYNAMIC: 1
};

/**
 * Constants that define the type of gradient on text.
 *
 * @static
 * @constant
 * @name TEXT_GRADIENT
 * @memberof Tiny
 * @type {object}
 * @property {number} LINEAR_VERTICAL Vertical gradient
 * @property {number} LINEAR_HORIZONTAL Linear gradient
 */
var TEXT_GRADIENT = exports.TEXT_GRADIENT = {
  LINEAR_VERTICAL: 0,
  LINEAR_HORIZONTAL: 1
};

/**
 * Represents the update priorities used by internal Tiny classes when registered with
 * the {@link Tiny.ticker.Ticker} object. Higher priority items are updated first and lower
 * priority items, such as render, should go later.
 *
 * @static
 * @constant
 * @name UPDATE_PRIORITY
 * @memberof Tiny
 * @type {object}
 * @property {number} INTERACTION=50  Highest priority, used for {@link Tiny.interaction.InteractionManager}
 * @property {number} HIGH=25         High priority updating, {@link Tiny.VideoBaseTexture} and {@link Tiny.AnimatedSprite}
 * @property {number} NORMAL=0        Default priority for ticker events, see {@link Tiny.ticker.Ticker#add}.
 * @property {number} LOW=-25         Low priority used for {@link Tiny.Application} rendering.
 * @property {number} UTILITY=-50     Lowest priority used for {@link Tiny.prepare.BasePrepare} utility.
 */
var UPDATE_PRIORITY = exports.UPDATE_PRIORITY = {
  INTERACTION: 50,
  HIGH: 25,
  NORMAL: 0,
  LOW: -25,
  UTILITY: -50
};

/**
 * 主界面尺寸
 *
 * @static
 * @constant
 * @name WIN_SIZE
 * @memberof Tiny
 * @type {object}
 * @property {number} width   宽
 * @property {number} height  高
 */
var WIN_SIZE = exports.WIN_SIZE = {
  width: 0,
  height: 0
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseTextureCache = exports.TextureCache = exports.isArray = exports.mixins = exports.pluginTarget = exports.EventEmitter = exports.removeItems = exports.isMobile = exports.TWEEN = undefined;

var _decide = __webpack_require__(127);

Object.keys(_decide).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _decide[key];
    }
  });
});
exports.uid = uid;
exports.isFunction = isFunction;
exports.isNumber = isNumber;
exports.isString = isString;
exports.isUndefined = isUndefined;
exports.isObject = isObject;
exports.getTime = getTime;
exports.random = random;
exports.randomInt = randomInt;
exports.randomFloat = randomFloat;
exports.randomBool = randomBool;
exports.randomPM = randomPM;
exports.randomFromArray = randomFromArray;
exports.hex2rgb = hex2rgb;
exports.hex2string = hex2string;
exports.rgb2hex = rgb2hex;
exports.color2hex = color2hex;
exports.hex2color = hex2color;
exports.deg2radian = deg2radian;
exports.radian2deg = radian2deg;
exports.getXMLHttpRequest = getXMLHttpRequest;
exports.getResolutionOfUrl = getResolutionOfUrl;
exports.decomposeDataUri = decomposeDataUri;
exports.getUrlFileExtension = getUrlFileExtension;
exports.getSvgSize = getSvgSize;
exports.isWebGLSupported = isWebGLSupported;
exports.sign = sign;
exports.arrayRemoveObject = arrayRemoveObject;
exports.detect = detect;
exports.point = point;
exports.scale = scale;
exports.color = color;
exports.destroyTextureCache = destroyTextureCache;
exports.clearTextureCache = clearTextureCache;

var _const = __webpack_require__(0);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

var _eventemitter = __webpack_require__(6);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _tween = __webpack_require__(12);

var _tween2 = _interopRequireDefault(_tween);

var _pluginTarget = __webpack_require__(131);

var _pluginTarget2 = _interopRequireDefault(_pluginTarget);

var _mixin = __webpack_require__(130);

var mixins = _interopRequireWildcard(_mixin);

var _ismobilejs = __webpack_require__(18);

var isMobile = _interopRequireWildcard(_ismobilejs);

var _removeArrayItems = __webpack_require__(76);

var _removeArrayItems2 = _interopRequireDefault(_removeArrayItems);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nextUid = 0;

exports.TWEEN = _tween2.default;
exports.isMobile = isMobile;
exports.removeItems = _removeArrayItems2.default;
exports.EventEmitter = _eventemitter2.default;
exports.pluginTarget = _pluginTarget2.default;
exports.mixins = mixins;

/**
 * Gets the next unique identifier
 *
 * @static
 * @memberof Tiny
 * @function uid
 * @return {number} The next unique identifier to use.
 */

function uid() {
  return ++nextUid;
}

/**
 * 判断对象是否是`Array`类型
 *
 * @static
 * @memberof Tiny
 * @function isArray
 * @param {Object} obj 要判断的对象
 * @return {Boolean}
 */
var isArray = exports.isArray = Array.isArray || function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

/**
 * 判断对象是否是函数类型
 *
 * @static
 * @memberof Tiny
 * @function isFunction
 * @param {Object} obj 要判断的对象
 * @return {Boolean}
 */
function isFunction(obj) {
  return Object.prototype.toString.call(obj) === '[object Function]';
}

/**
 * 判断对象是否是`Number`类型
 *
 * @static
 * @memberof Tiny
 * @function isNumber
 * @param {Object} obj 要判断的对象
 * @return {Boolean}
 */
function isNumber(obj) {
  return Object.prototype.toString.call(obj) === '[object Number]';
}

/**
 * 判断对象是否是`String`类型
 *
 * @static
 * @memberof Tiny
 * @function isString
 * @param {Object} obj 要判断的对象
 * @return {Boolean}
 */
function isString(obj) {
  return typeof obj === 'string';
}

/**
 * 判断对象是否是`Undefined`类型
 *
 * @static
 * @memberof Tiny
 * @function isUndefined
 * @param obj
 * @return {boolean}
 */
function isUndefined(obj) {
  return obj === void 0;
}

/**
 * 判断对象是否是`Object`类型
 *
 * @static
 * @memberof Tiny
 * @function isObject
 * @param {Object} obj 要判断的对象
 * @return {boolean}
 */
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * 高精度获取当前时间，比 `Date.now()` 的精度高1000倍，为考虑不同性能场景下的时间获取，建议使用此方法来替代 `Date.now()`。
 *
 * @static
 * @memberof Tiny
 * @function getTime
 * @return {number}
 */
function getTime() {
  return window.performance.timing.navigationStart + window.performance.now();
}

/**
 * 生成数字区间内的随机整型数据
 *
 * @example
 *
 *  ``` js
 *  Tiny.random(10, 18);
 *  //=> 15
 *  ```
 *
 * @static
 * @memberof Tiny
 * @function random
 * @param min
 * @param max
 * @return {number}
 */
function random(min, max) {
  if (isArray(min)) {
    max = min[1];
    min = min[0];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * `Tiny.random` 的别名
 *
 * @static
 * @memberof Tiny
 * @function randomInt
 * @return {boolean}
 */
function randomInt() {
  return random.call.apply(random, [this].concat(Array.prototype.slice.call(arguments)));
}

/**
 * 返回区间内的随机浮点类型数字
 *
 * @static
 * @memberof Tiny
 * @function randomFloat
 * @param min
 * @param max
 * @return {number}
 */
function randomFloat(min, max) {
  return min + Math.random() * (max - min);
}

/**
 * 生成随机的`Boolean`类型数据
 *
 * @static
 * @memberof Tiny
 * @function randomBool
 * @param {number} chance 生成 true 的几率，默认值：0.5
 * @return {boolean}
 */
function randomBool(chance) {
  chance = chance ? chance : 0.5; // eslint-disable-line
  return Math.random() < chance;
}

/**
 * 随机生成 {-1, 1} 两个值
 *
 * @example
 *
 *  ``` js
 *  Tiny.randomPM(0.8);
 *  //=> -1
 *  ```
 *
 * @static
 * @memberof Tiny
 * @function randomPM
 * @param {number} chance 生成 -1 的几率，默认值：0.5
 * @return {number}
 */
function randomPM(chance) {
  chance = chance ? chance : 0.5; // eslint-disable-line
  return Math.random() > chance ? -1 : 1;
}

/**
 * 随机返回数组中的任意对象
 *
 * @memberof Tiny
 * @function randomFromArray
 * @param {array<object>}  arr
 * @return {object}
 */
function randomFromArray(arr) {
  return arr[random(0, arr.length - 1)];
}

/**
 * Converts a hex color number to an [R, G, B] array
 *
 * @memberof Tiny
 * @function hex2rgb
 * @param {number} hex - The number to convert
 * @param  {number[]} [out=[]] If supplied, this array will be used rather than returning a new one
 * @return {number[]} An array representing the [R, G, B] of the color.
 */
function hex2rgb(hex, out) {
  out = out || [];

  out[0] = (hex >> 16 & 0xFF) / 255;
  out[1] = (hex >> 8 & 0xFF) / 255;
  out[2] = (hex & 0xFF) / 255;

  return out;
}

/**
 * Converts a hex color number to a string.
 *
 * @memberof Tiny
 * @function hex2string
 * @param {number} hex - Number in hex
 * @return {string} The string color.
 */
function hex2string(hex) {
  hex = hex.toString(16);
  hex = '000000'.substr(0, 6 - hex.length) + hex;

  return '#' + hex;
}

/**
 * Converts a color as an [R, G, B] array to a hex number
 *
 * @memberof Tiny
 * @function rgb2hex
 * @param {number[]} rgb - rgb array
 * @return {number} The color number
 */
function rgb2hex(rgb) {
  return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + (rgb[2] * 255 | 0);
}

/**
 * 转换 color 对象为二进制颜色值
 *
 * @example
 *
 * var color = Tiny.color(255, 255, 0);
 * var hex = Tiny.color2hex(color);
 * //=> 16776960
 * //等于 0xffff00
 *
 * @memberof Tiny
 * @version 1.0.2
 * @param color
 */
function color2hex(color) {
  return rgb2hex([color.colorR / 255, color.colorG / 255, color.colorB / 255]);
}

/**
 * 转换 hex 为 color 对象
 *
 * @example
 *
 * var hex = 0xAA0055;
 * var color = Tiny.hex2color(hex);
 * //=> Object {colorR: 170, colorG: 0, colorB: 85}
 *
 * @example
 *
 * var hex = 0xFF0000;
 * var color = Tiny.hex2color(hex);
 * //=> Object {colorR: 255, colorG: 0, colorB: 0}
 *
 * @param hex
 * @returns {{colorR, colorG, colorB}}
 */
function hex2color(hex) {
  var rgb = hex2rgb(hex);
  return color(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

/**
 * 角度值转弧度
 *
 * @memberof Tiny
 * @function deg2radian
 * @param deg
 * @return {number}
 */
function deg2radian(deg) {
  return _const.PI_2 * deg / 360;
}

/**
 * 弧度值转角度
 *
 * @memberof Tiny
 * @function radian2deg
 * @param radian
 * @return {number}
 */
function radian2deg(radian) {
  return 360 * radian / _const.PI_2;
}

/**
 * 获取 XMLHttpRequest 对象，如果 Tiny._XMLHttpRequest 存在，则取之，如果没有，则创建一个 XMLHttpRequest 对象，并存之。
 * 如果 Tiny._XMLHttpRequest 正在使用中，则返回一个新建的 XMLHttpRequest
 *
 * @static
 * @return {XMLHttpRequest}
 */
function getXMLHttpRequest() {
  var xhr = this._XMLHttpRequest;
  if (!xhr) {
    xhr = new XMLHttpRequest();
    this._XMLHttpRequest = xhr;
  } else {
    if (+xhr.readyState !== 4) {
      return new XMLHttpRequest();
    }
  }
  return xhr;
}

/**
 * get the resolution / device pixel ratio of an asset by looking for the prefix
 * used by spritesheets and image urls
 *
 * @memberof Tiny
 * @function getResolutionOfUrl
 * @param {string} url - the image path
 * @param {number} [defaultValue=1] - the defaultValue if no filename prefix is set.
 * @return {number} resolution / device pixel ratio of an asset
 */
function getResolutionOfUrl(url, defaultValue) {
  var resolution = _settings2.default.RETINA_PREFIX.exec(url);

  if (resolution) {
    return parseFloat(resolution[1]);
  }

  return defaultValue !== undefined ? defaultValue : 1;
}

/**
 * Typedef for decomposeDataUri return object.
 *
 * @typedef {object} DecomposedDataUri
 * @property {mediaType} Media type, eg. `image`
 * @property {subType} Sub type, eg. `png`
 * @property {encoding} Data encoding, eg. `base64`
 * @property {data} The actual data
 */

/**
 * Split a data URI into components. Returns undefined if parameter `dataUri` is not a valid data URI.
 *
 * @memberof Tiny
 * @function decomposeDataUri
 * @param {string} dataUri - the data URI to check
 * @return {DecomposedDataUri|undefined} The decomposed data uri or undefined
 */
function decomposeDataUri(dataUri) {
  var dataUriMatch = _const.DATA_URI.exec(dataUri);

  if (dataUriMatch) {
    return {
      mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : undefined,
      subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : undefined,
      encoding: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : undefined,
      data: dataUriMatch[4]
    };
  }

  return undefined;
}

/**
 * Get type of the image by regexp for extension. Returns undefined for unknown extensions.
 *
 * @memberof Tiny
 * @function getUrlFileExtension
 * @param {string} url - the image path
 * @return {string|undefined} image extension
 */
function getUrlFileExtension(url) {
  var extension = _const.URL_FILE_EXTENSION.exec(url);

  if (extension) {
    return extension[1].toLowerCase();
  }

  return undefined;
}

/**
 * Typedef for Size object.
 *
 * @typedef {object} Size
 * @property {width} Width component
 * @property {height} Height component
 */

/**
 * Get size from an svg string using regexp.
 *
 * @memberof Tiny
 * @function getSvgSize
 * @param {string} svgString - a serialized svg element
 * @return {Size|undefined} image extension
 */
function getSvgSize(svgString) {
  var sizeMatch = _const.SVG_SIZE.exec(svgString);
  var size = {};

  if (sizeMatch) {
    size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
    size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
  }

  return size;
}

/**
 * Helper for checking for webgl support
 *
 * @memberof Tiny
 * @function isWebGLSupported
 * @return {boolean} is webgl supported
 */
function isWebGLSupported() {
  var contextOptions = { stencil: true, failIfMajorPerformanceCaveat: true };

  try {
    if (!window.WebGLRenderingContext) {
      return false;
    }

    var canvas = document.createElement('canvas');
    var gl = canvas.getContext('webgl', contextOptions) || canvas.getContext('experimental-webgl', contextOptions);

    var success = !!(gl && gl.getContextAttributes().stencil);

    if (gl) {
      var loseContext = gl.getExtension('WEBGL_lose_context');

      if (loseContext) {
        loseContext.loseContext();
      }
    }

    gl = null;

    return success;
  } catch (e) {
    return false;
  }
}

/**
 * Returns sign of number
 *
 * @memberof Tiny
 * @function sign
 * @param {number} n - the number to check the sign of
 * @return {number} 0 if `n` is 0, -1 if `n` is negative, 1 if `n` is positive
 */
function sign(n) {
  if (n === 0) return 0;

  return n < 0 ? -1 : 1;
}

/**
 * 从数组中移除某个对象
 *
 * @memberof Tiny
 * @function arrayRemoveObject
 * @param {array<object>}  arr
 * @param {object}         delObj
 */
function arrayRemoveObject(arr, delObj) {
  for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === delObj) {
      arr.splice(i, 1);
      break;
    }
  }
}

/**
 * Looks through each value in the list, returning the first one that passes a truth test (**predicate**), or `undefined` if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
 *
 * @example
 *
 *  ``` js
 *  var even = Tiny.detect([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
 *  //=> 2
 *  ```
 *
 * @static
 * @memberof Tiny
 * @function detect
 * @param {object}    obj
 * @param {function}  iterator
 * @param {object}    context
 * @param arg1
 * @param arg2
 * @return {boolean}
 */
function detect(obj, iterator, context, arg1, arg2) {
  var result = void 0;
  if (obj === null) {
    return;
  }
  if (obj.length === +obj.length) {
    for (var i = 0, l = obj.length; i < l; i++) {
      result = iterator.call(context, obj[i], i, arg1, arg2);
      if (result) {
        return result;
      }
    }
    return false;
  } else {
    for (var key in obj) {
      result = iterator.call(context, obj[key], key, arg1, arg2);
      if (result) {
        return result;
      }
    }
    return false;
  }
}

/**
 * 转化坐标值
 *
 * @example
 *
 *  ``` js
 *  Tiny.point(100, 200);
 *  //=> {x: 100, y: 200}
 *  ```
 *
 * @static
 * @memberof Tiny
 * @function point
 * @param {number}  x
 * @param {number}  y - 如果不传，则等于 x
 * @return {object}
 */
function point(x, y) {
  return {
    x: x, // eslint-disable-line
    y: y === void 0 ? x : y
  };
}

/**
 * 转化缩放值
 *
 * @example
 *
 *  ```js
 *  Tiny.scale(2, 1.5);
 *  //=> {scaleX: 2, scaleY: 1.5}
 *  ```
 *
 * @memberof Tiny
 * @function scale
 * @param {number}  x
 * @param {number}  y - 如果不传，则等于 x
 * @return {object}
 */
function scale(x, y) {
  return {
    scaleX: x,
    scaleY: y === void 0 ? x : y
  };
}

/**
 * 转化RGB颜色值
 *
 * @example
 *
 * ``` js
 * Tiny.color(0, 255, 255);
 * //=> {colorR: 0, colorG: 255, colorB: 255}
 * ```
 *
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @returns {object}
 */
function color(red, green, blue) {
  return {
    colorR: Tiny.isUndefined(red) ? 255 : red,
    colorG: Tiny.isUndefined(green) ? 255 : green,
    colorB: Tiny.isUndefined(blue) ? 255 : blue
  };
}

/**
 * texture 缓存，用于存储已加载的图片 texture
 *
 * @name TextureCache
 * @memberof Tiny
 * @type {object}
 * @private
 */
var TextureCache = exports.TextureCache = Object.create(null);

/**
 *
 * @name BaseTextureCache
 * @memberof Tiny
 * @type {object}
 * @private
 */
var BaseTextureCache = exports.BaseTextureCache = Object.create(null);

/**
 * Destroys all texture in the cache
 *
 * @static
 * @memberof Tiny
 * @function destroyTextureCache
 */
function destroyTextureCache() {
  var key = void 0;

  for (key in TextureCache) {
    TextureCache[key].destroy();
  }
  for (key in BaseTextureCache) {
    BaseTextureCache[key].destroy();
  }
}

/**
 * Removes all textures from cache, but does not destroy them
 *
 * @static
 * @memberof Tiny
 * @function clearTextureCache
 */
function clearTextureCache() {
  var key = void 0;

  for (key in TextureCache) {
    delete TextureCache[key];
  }
  for (key in BaseTextureCache) {
    delete BaseTextureCache[key];
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Point = __webpack_require__(25);

Object.defineProperty(exports, 'Point', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Point).default;
  }
});

var _ObservablePoint = __webpack_require__(98);

Object.defineProperty(exports, 'ObservablePoint', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ObservablePoint).default;
  }
});

var _Matrix = __webpack_require__(24);

Object.defineProperty(exports, 'Matrix', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Matrix).default;
  }
});

var _GroupD = __webpack_require__(50);

Object.defineProperty(exports, 'GroupD8', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GroupD).default;
  }
});

var _Circle = __webpack_require__(99);

Object.defineProperty(exports, 'Circle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circle).default;
  }
});

var _Ellipse = __webpack_require__(100);

Object.defineProperty(exports, 'Ellipse', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Ellipse).default;
  }
});

var _Polygon = __webpack_require__(101);

Object.defineProperty(exports, 'Polygon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Polygon).default;
  }
});

var _Rectangle = __webpack_require__(26);

Object.defineProperty(exports, 'Rectangle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Rectangle).default;
  }
});

var _RoundedRectangle = __webpack_require__(102);

Object.defineProperty(exports, 'RoundedRectangle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RoundedRectangle).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;

var _maxRecommendedTextures = __webpack_require__(129);

var _maxRecommendedTextures2 = _interopRequireDefault(_maxRecommendedTextures);

var _canUploadSameBuffer = __webpack_require__(126);

var _canUploadSameBuffer2 = _interopRequireDefault(_canUploadSameBuffer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * User's customizable globals for overriding the default Tiny settings, such
 * as a renderer's default resolution, framerate, float percision, etc.
 *
 * @example
 * // Disable interpolation when scaling, will make texture be pixelated
 * Tiny.settings.SCALE_MODE = Tiny.SCALE_MODES.NEAREST;
 * @namespace Tiny.settings
 */
exports.default = {
  /**
   * Target frames per millisecond.
   *
   * @static
   * @memberof Tiny.settings
   * @type {number}
   * @default 0.06
   */
  TARGET_FPMS: 0.06,

  /**
   * If set to true WebGL will attempt make textures mimpaped by default.
   * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
   *
   * @static
   * @memberof Tiny.settings
   * @type {boolean}
   * @default true
   */
  MIPMAP_TEXTURES: true,

  /**
   * Default resolution / device pixel ratio of the renderer.
   *
   * @static
   * @memberof Tiny.settings
   * @type {number}
   * @default 1
   */
  RESOLUTION: 1,

  /**
   * The maximum textures that this device supports.
   *
   * @static
   * @memberof Tiny.settings
   * @type {number}
   * @default 32
   */
  SPRITE_MAX_TEXTURES: (0, _maxRecommendedTextures2.default)(32),

  /**
   * The default sprite batch size.
   *
   * The default aims to balance desktop and mobile devices.
   *
   * @static
   * @memberof Tiny.settings
   * @type {number}
   * @default 4096
   */
  SPRITE_BATCH_SIZE: 4096,

  /**
   * The prefix that denotes a URL is for a retina asset.
   *
   * @static
   * @memberof Tiny.settings
   * @type {RegExp|string}
   * @type {RegExp}
   * @example `@2x`
   * @default /@([0-9\.]+)x/
   */
  RETINA_PREFIX: /@([0-9\.]+)x/, // eslint-disable-line

  /**
   * 默认渲染参数
   *
   * @static
   * @constant
   * @memberof Tiny.settings
   * @type {object}
   * @property {boolean}            antialias=false
   * @property {boolean}            transparent=false
   * @property {number}             backgroundColor=0x000000
   * @property {boolean}            clearBeforeRender=true
   * @property {boolean}            preserveDrawingBuffer=false
   * @property {boolean}            roundPixels=false
   * @property {boolean}            legacy=false
   */
  RENDER_OPTIONS: {
    view: null,
    antialias: false,
    autoResize: false,
    transparent: false,
    backgroundColor: 0x000000,
    clearBeforeRender: true,
    preserveDrawingBuffer: false,
    roundPixels: false,
    legacy: false
  },

  /**
   * Default transform type.
   *
   * @static
   * @memberof Tiny.settings
   * @type {Tiny.TRANSFORM_MODE}
   * @default Tiny.TRANSFORM_MODE.STATIC
   */
  TRANSFORM_MODE: 0,

  /**
   * Default Garbage Collection mode.
   *
   * @static
   * @memberof Tiny.settings
   * @type {Tiny.GC_MODES}
   * @default Tiny.GC_MODES.AUTO
   */
  GC_MODE: 0,

  /**
   * Default Garbage Collection max idle.
   *
   * @static
   * @memberof Tiny.settings
   * @type {number}
   * @default 3600
   */
  GC_MAX_IDLE: 60 * 60,

  /**
   * Default Garbage Collection maximum check count.
   *
   * @static
   * @memberof Tiny.settings
   * @type {number}
   * @default 600
   */
  GC_MAX_CHECK_COUNT: 60 * 10,

  /**
   * Default wrap modes that are supported by Tiny.
   *
   * @static
   * @memberof Tiny.settings
   * @type {Tiny.WRAP_MODES}
   * @default Tiny.WRAP_MODES.CLAMP
   */
  WRAP_MODE: 0,

  /**
   * The scale modes that are supported by Tiny.
   *
   * @static
   * @memberof Tiny.settings
   * @type {Tiny.SCALE_MODES}
   * @default Tiny.SCALE_MODES.LINEAR
   */
  SCALE_MODE: 0,

  /**
   * Default specify float precision in vertex shader.
   *
   * @static
   * @memberof Tiny.settings
   * @type {Tiny.PRECISION}
   * @default Tiny.PRECISION.HIGH
   */
  PRECISION_VERTEX: 'highp',

  /**
   * Default specify float precision in shaders.
   *
   * @static
   * @memberof Tiny.settings
   * @type {Tiny.PRECISION}
   * @default Tiny.PRECISION.MEDIUM
   */
  PRECISION_FRAGMENT: 'mediump',

  /**
   * Can we upload the same buffer in a single frame?
   *
   * @static
   * @constant
   * @memberof Tiny.settings
   * @type {boolean}
   */
  CAN_UPLOAD_SAME_BUFFER: (0, _canUploadSameBuffer2.default)()

};

/**
 * 默认配置参数
 *
 * @static
 * @constant
 * @name config
 * @memberof Tiny
 * @type {object}
 * @property {number}   width=window.innerWidth     宽度
 * @property {number}   height=window.innerHeight   高度
 * @property {number}   referWidth=320              基准参考宽度，如：320、375，默认：320
 * @property {Boolean}  fixSize=false               是否固定尺寸为传入的宽高
 * @property {string}   canvasId='TinyCanvas'       canvas的DOM
 * @property {Boolean}  orientation=0               横竖屏 [0: 竖屏, 1: 横屏]
 * @property {Boolean}  listenRotation=true         是否监听屏幕旋转
 * @property {number}   dpi=1                       分辨率
 * @property {boolean}  showFPS=false               是否显示帧频
 * @property {number}   renderType=0                渲染类型 [0: 自动识别, 1: WEBGL, 2: CANVAS]
 * @property {object}   renderOptions               渲染参数，见{@link Tiny.settings.RENDER_OPTIONS}
 * @property {number}   autoRender=1                是否自动渲染 [0: 手动, 1: 自动]
 */

var config = exports.config = {
  width: null,
  height: null,
  referWidth: 320,
  fixSize: false,
  canvasId: 'TinyCanvas',
  orientation: 0,
  listenRotation: true,
  dpi: 1,
  showFPS: false,
  renderType: 0, //WEBGL: 1, CANVAS: 2
  renderOptions: {},
  autoRender: 1 //0: 手动, 1: 自动
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var gl = {
    createContext: __webpack_require__(81),
    setVertexAttribArrays: __webpack_require__(35),
    GLBuffer: __webpack_require__(77),
    GLFramebuffer: __webpack_require__(78),
    GLShader: __webpack_require__(79),
    GLTexture: __webpack_require__(34),
    VertexArrayObject: __webpack_require__(80),
    shader: __webpack_require__(82)
};

// Export for Node-compatible environments
if (typeof module !== 'undefined' && module.exports) {
    // Export the module
    module.exports = gl;
}

// Add to the browser window pixi.gl
if (typeof window !== 'undefined') {
    // add the window object
    window.PIXI = window.PIXI || {};
    window.PIXI.glCore = gl;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Application = exports.Filter = exports.SpriteMaskFilter = exports.Quad = exports.RenderTarget = exports.ObjectRenderer = exports.WebGLManager = exports.Shader = exports.CanvasRenderTarget = exports.TextureTransform = exports.TextureUvs = exports.VideoBaseTexture = exports.BaseRenderTexture = exports.RenderTexture = exports.BaseTexture = exports.Texture = exports.Spritesheet = exports.CanvasGraphicsRenderer = exports.GraphicsRenderer = exports.GraphicsData = exports.Graphics = exports.TextMetrics = exports.TextStyle = exports.Text = exports.SpriteRenderer = exports.CanvasTinter = exports.CanvasSpriteRenderer = exports.AnimatedSprite = exports.Sprite = exports.TransformBase = exports.TransformStatic = exports.Transform = exports.Container = exports.DisplayObject = exports.Bounds = exports.glCore = exports.WebGLRenderer = exports.CanvasRenderer = exports.ticker = exports.settings = exports.config = undefined;

var _const = __webpack_require__(0);

Object.keys(_const).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _const[key];
    }
  });
});

var _math = __webpack_require__(2);

Object.keys(_math).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    }
  });
});

var _utils = __webpack_require__(1);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _settings = __webpack_require__(3);

Object.defineProperty(exports, 'config', {
  enumerable: true,
  get: function get() {
    return _settings.config;
  }
});

var _pixiGlCore = __webpack_require__(4);

Object.defineProperty(exports, 'glCore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pixiGlCore).default;
  }
});

var _Bounds = __webpack_require__(22);

Object.defineProperty(exports, 'Bounds', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Bounds).default;
  }
});

var _DisplayObject = __webpack_require__(46);

Object.defineProperty(exports, 'DisplayObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DisplayObject).default;
  }
});

var _Container = __webpack_require__(8);

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Container).default;
  }
});

var _Transform = __webpack_require__(47);

Object.defineProperty(exports, 'Transform', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Transform).default;
  }
});

var _TransformStatic = __webpack_require__(48);

Object.defineProperty(exports, 'TransformStatic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TransformStatic).default;
  }
});

var _TransformBase = __webpack_require__(23);

Object.defineProperty(exports, 'TransformBase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TransformBase).default;
  }
});

var _Sprite = __webpack_require__(27);

Object.defineProperty(exports, 'Sprite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sprite).default;
  }
});

var _AnimatedSprite = __webpack_require__(117);

Object.defineProperty(exports, 'AnimatedSprite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AnimatedSprite).default;
  }
});

var _CanvasSpriteRenderer = __webpack_require__(118);

Object.defineProperty(exports, 'CanvasSpriteRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CanvasSpriteRenderer).default;
  }
});

var _CanvasTinter = __webpack_require__(57);

Object.defineProperty(exports, 'CanvasTinter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CanvasTinter).default;
  }
});

var _SpriteRenderer = __webpack_require__(120);

Object.defineProperty(exports, 'SpriteRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SpriteRenderer).default;
  }
});

var _Text = __webpack_require__(58);

Object.defineProperty(exports, 'Text', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Text).default;
  }
});

var _TextStyle = __webpack_require__(60);

Object.defineProperty(exports, 'TextStyle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextStyle).default;
  }
});

var _TextMetrics = __webpack_require__(59);

Object.defineProperty(exports, 'TextMetrics', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextMetrics).default;
  }
});

var _Graphics = __webpack_require__(88);

Object.defineProperty(exports, 'Graphics', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Graphics).default;
  }
});

var _GraphicsData = __webpack_require__(49);

Object.defineProperty(exports, 'GraphicsData', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GraphicsData).default;
  }
});

var _GraphicsRenderer = __webpack_require__(91);

Object.defineProperty(exports, 'GraphicsRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GraphicsRenderer).default;
  }
});

var _CanvasGraphicsRenderer = __webpack_require__(89);

Object.defineProperty(exports, 'CanvasGraphicsRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CanvasGraphicsRenderer).default;
  }
});

var _Spritesheet = __webpack_require__(122);

Object.defineProperty(exports, 'Spritesheet', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spritesheet).default;
  }
});

var _Texture = __webpack_require__(7);

Object.defineProperty(exports, 'Texture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Texture).default;
  }
});

var _BaseTexture = __webpack_require__(11);

Object.defineProperty(exports, 'BaseTexture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BaseTexture).default;
  }
});

var _RenderTexture = __webpack_require__(28);

Object.defineProperty(exports, 'RenderTexture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RenderTexture).default;
  }
});

var _BaseRenderTexture = __webpack_require__(61);

Object.defineProperty(exports, 'BaseRenderTexture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BaseRenderTexture).default;
  }
});

var _VideoBaseTexture = __webpack_require__(63);

Object.defineProperty(exports, 'VideoBaseTexture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_VideoBaseTexture).default;
  }
});

var _TextureUvs = __webpack_require__(62);

Object.defineProperty(exports, 'TextureUvs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextureUvs).default;
  }
});

var _TextureTransform = __webpack_require__(123);

Object.defineProperty(exports, 'TextureTransform', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TextureTransform).default;
  }
});

var _CanvasRenderTarget = __webpack_require__(52);

Object.defineProperty(exports, 'CanvasRenderTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CanvasRenderTarget).default;
  }
});

var _Shader = __webpack_require__(13);

Object.defineProperty(exports, 'Shader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Shader).default;
  }
});

var _WebGLManager = __webpack_require__(10);

Object.defineProperty(exports, 'WebGLManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_WebGLManager).default;
  }
});

var _ObjectRenderer = __webpack_require__(16);

Object.defineProperty(exports, 'ObjectRenderer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ObjectRenderer).default;
  }
});

var _RenderTarget = __webpack_require__(17);

Object.defineProperty(exports, 'RenderTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RenderTarget).default;
  }
});

var _Quad = __webpack_require__(56);

Object.defineProperty(exports, 'Quad', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Quad).default;
  }
});

var _SpriteMaskFilter = __webpack_require__(55);

Object.defineProperty(exports, 'SpriteMaskFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SpriteMaskFilter).default;
  }
});

var _Filter = __webpack_require__(54);

Object.defineProperty(exports, 'Filter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Filter).default;
  }
});

var _Application = __webpack_require__(87);

Object.defineProperty(exports, 'Application', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Application).default;
  }
});

var _ticker = __webpack_require__(29);

var ticker = _interopRequireWildcard(_ticker);

var _settings2 = _interopRequireDefault(_settings);

var _CanvasRenderer = __webpack_require__(9);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _WebGLRenderer = __webpack_require__(15);

var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.settings = _settings2.default;
exports.ticker = ticker;
exports.CanvasRenderer = _CanvasRenderer2.default;
exports.WebGLRenderer = _WebGLRenderer2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = [],
      events,
      name;

  if (this._eventsCount === 0) return names;

  for (name in events = this._events) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event,
      available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt],
      len = arguments.length,
      args,
      i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1:
        return listeners.fn.call(listeners.context), true;
      case 2:
        return listeners.fn.call(listeners.context, a1), true;
      case 3:
        return listeners.fn.call(listeners.context, a1, a2), true;
      case 4:
        return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6:
        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len - 1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length,
        j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1:
          listeners[i].fn.call(listeners[i].context);break;
        case 2:
          listeners[i].fn.call(listeners[i].context, a1);break;
        case 3:
          listeners[i].fn.call(listeners[i].context, a1, a2);break;
        case 4:
          listeners[i].fn.call(listeners[i].context, a1, a2, a3);break;
        default:
          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this),
      evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;else if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true),
      evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;else if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
      if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseTexture = __webpack_require__(11);

var _BaseTexture2 = _interopRequireDefault(_BaseTexture);

var _VideoBaseTexture = __webpack_require__(63);

var _VideoBaseTexture2 = _interopRequireDefault(_VideoBaseTexture);

var _TextureUvs = __webpack_require__(62);

var _TextureUvs2 = _interopRequireDefault(_TextureUvs);

var _eventemitter = __webpack_require__(6);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _math = __webpack_require__(2);

var _utils = __webpack_require__(1);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A texture stores the information that represents an image or part of an image. It cannot be added
 * to the display list directly. Instead use it as the texture for a Sprite. If no frame is provided
 * then the whole image is used.
 *
 * You can directly create a texture from an image and then reuse it multiple times like this :
 *
 * ```js
 * let texture = Tiny.Texture.fromImage('assets/image.png');
 * let sprite1 = new Tiny.Sprite(texture);
 * let sprite2 = new Tiny.Sprite(texture);
 * ```
 *
 * Textures made from SVGs, loaded or not, cannot be used before the file finishes processing.
 * You can check for this by checking the sprite's _textureID property.
 * ```js
 * var texture = Tiny.Texture.fromImage('assets/image.svg');
 * var sprite1 = new Tiny.Sprite(texture);
 * //sprite1._textureID should not be undefined if the texture has finished processing the SVG file
 * ```
 * You can use a ticker or rAF to ensure your sprites load the finished textures after processing. See issue #3068.
 *
 * @class
 * @extends EventEmitter
 * @memberof Tiny
 */
var Texture = function (_EventEmitter) {
  _inherits(Texture, _EventEmitter);

  /**
   * @param {Tiny.BaseTexture} baseTexture - The base texture source to create the texture from
   * @param {Tiny.Rectangle} [frame] - The rectangle frame of the texture to show
   * @param {Tiny.Rectangle} [orig] - The area of original texture
   * @param {Tiny.Rectangle} [trim] - Trimmed rectangle of original texture
   * @param {number} [rotate] - indicates how the texture was rotated by texture packer. See {@link Tiny.GroupD8}
   */
  function Texture(baseTexture, frame, orig, trim, rotate) {
    _classCallCheck(this, Texture);

    /**
     * Does this Texture have any frame data assigned to it?
     *
     * @member {boolean}
     */
    var _this = _possibleConstructorReturn(this, (Texture.__proto__ || Object.getPrototypeOf(Texture)).call(this));

    _this.noFrame = false;

    if (!frame) {
      _this.noFrame = true;
      frame = new _math.Rectangle(0, 0, 1, 1);
    }

    if (baseTexture instanceof Texture) {
      baseTexture = baseTexture.baseTexture;
    }

    /**
     * The base texture that this texture uses.
     *
     * @member {Tiny.BaseTexture}
     */
    _this.baseTexture = baseTexture;

    /**
     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,
     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)
     *
     * @member {Tiny.Rectangle}
     */
    _this._frame = frame;

    /**
     * This is the trimmed area of original texture, before it was put in atlas
     *
     * @member {Tiny.Rectangle}
     */
    _this.trim = trim;

    /**
     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
     *
     * @member {boolean}
     */
    _this.valid = false;

    /**
     * This will let a renderer know that a texture has been updated (used mainly for webGL uv updates)
     *
     * @member {boolean}
     */
    _this.requiresUpdate = false;

    /**
     * The WebGL UV data cache.
     *
     * @member {Tiny.TextureUvs}
     * @private
     */
    _this._uvs = null;

    /**
     * This is the area of original texture, before it was put in atlas
     *
     * @member {Tiny.Rectangle}
     */
    _this.orig = orig || frame; // new Rectangle(0, 0, 1, 1);

    _this._rotate = Number(rotate || 0);

    if (rotate === true) {
      // this is old texturepacker legacy, some games/libraries are passing "true" for rotated textures
      _this._rotate = 2;
    } else if (_this._rotate % 2 !== 0) {
      throw new Error('attempt to use diamond-shaped UVs. If you are sure, set rotation manually');
    }

    if (baseTexture.hasLoaded) {
      if (_this.noFrame) {
        frame = new _math.Rectangle(0, 0, baseTexture.width, baseTexture.height);

        // if there is no frame we should monitor for any base texture changes..
        baseTexture.on('update', _this.onBaseTextureUpdated, _this);
      }
      _this.frame = frame;
    } else {
      baseTexture.once('loaded', _this.onBaseTextureLoaded, _this);
    }

    /**
     * Fired when the texture is updated. This happens if the frame or the baseTexture is updated.
     *
     * @event update
     * @memberof Tiny.Texture#
     * @protected
     */

    _this._updateID = 0;

    /**
     * Extra field for extra plugins. May contain clamp settings and some matrices
     * @type {Object}
     */
    _this.transform = null;

    /**
     * The ids under which this Texture has been added to the texture cache. This is
     * automatically set as long as Texture.addToCache is used, but may not be set if a
     * Texture is added directly to the TextureCache array.
     *
     * @member {string[]}
     */
    _this.textureCacheIds = [];
    return _this;
  }

  /**
   * Updates this texture on the gpu.
   *
   */


  _createClass(Texture, [{
    key: 'update',
    value: function update() {
      this.baseTexture.update();
    }

    /**
     * Called when the base texture is loaded
     *
     * @private
     * @param {Tiny.BaseTexture} baseTexture - The base texture.
     */

  }, {
    key: 'onBaseTextureLoaded',
    value: function onBaseTextureLoaded(baseTexture) {
      this._updateID++;

      // TODO this code looks confusing.. boo to abusing getters and setters!
      if (this.noFrame) {
        this.frame = new _math.Rectangle(0, 0, baseTexture.width, baseTexture.height);
      } else {
        this.frame = this._frame;
      }

      this.baseTexture.on('update', this.onBaseTextureUpdated, this);
      this.emit('update', this);
    }

    /**
     * Called when the base texture is updated
     *
     * @private
     * @param {Tiny.BaseTexture} baseTexture - The base texture.
     */

  }, {
    key: 'onBaseTextureUpdated',
    value: function onBaseTextureUpdated(baseTexture) {
      this._updateID++;

      this._frame.width = baseTexture.width;
      this._frame.height = baseTexture.height;

      this.emit('update', this);
    }

    /**
     * Destroys this texture
     *
     * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
     */

  }, {
    key: 'destroy',
    value: function destroy(destroyBase) {
      if (this.baseTexture) {
        if (destroyBase) {
          // delete the texture if it exists in the texture cache..
          // this only needs to be removed if the base texture is actually destroyed too..
          if (_utils.TextureCache[this.baseTexture.imageUrl]) {
            Texture.removeFromCache(this.baseTexture.imageUrl);
          }

          this.baseTexture.destroy();
        }

        this.baseTexture.off('update', this.onBaseTextureUpdated, this);
        this.baseTexture.off('loaded', this.onBaseTextureLoaded, this);

        this.baseTexture = null;
      }

      this._frame = null;
      this._uvs = null;
      this.trim = null;
      this.orig = null;

      this.valid = false;

      Texture.removeFromCache(this);
      this.textureCacheIds = null;
    }

    /**
     * Creates a new texture object that acts the same as this one.
     *
     * @return {Tiny.Texture} The new texture
     */

  }, {
    key: 'clone',
    value: function clone() {
      return new Texture(this.baseTexture, this.frame, this.orig, this.trim, this.rotate);
    }

    /**
     * Updates the internal WebGL UV cache.
     *
     * @protected
     */

  }, {
    key: '_updateUvs',
    value: function _updateUvs() {
      if (!this._uvs) {
        this._uvs = new _TextureUvs2.default();
      }

      this._uvs.set(this._frame, this.baseTexture, this.rotate);

      this._updateID++;
    }

    /**
     * Helper function that creates a Texture object from the given image url.
     * If the image is not in the texture cache it will be  created and loaded.
     *
     * @static
     * @param {string} imageUrl - The image url of the texture
     * @param {boolean} [crossorigin] - Whether requests should be treated as crossorigin
     * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
     * @param {number} [sourceScale=(auto)] - Scale for the original image, used with SVG images.
     * @return {Tiny.Texture} The newly created texture
     */

  }, {
    key: 'frame',


    /**
     * The frame specifies the region of the base texture that this texture uses.
     *
     * @member {Tiny.Rectangle}
     */
    get: function get() {
      return this._frame;
    },
    set: function set(frame) {
      this._frame = frame;

      this.noFrame = false;

      if (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height) {
        throw new Error('Texture Error: frame does not fit inside the base Texture dimensions: \n        X: ' + frame.x + ' + ' + frame.width + ' > ' + this.baseTexture.width + '\n        Y: ' + frame.y + ' + ' + frame.height + ' > ' + this.baseTexture.height);
      }

      // this.valid = frame && frame.width && frame.height && this.baseTexture.source && this.baseTexture.hasLoaded;
      this.valid = frame && frame.width && frame.height && this.baseTexture.hasLoaded;

      if (!this.trim && !this.rotate) {
        this.orig = frame;
      }

      if (this.valid) {
        this._updateUvs();
      }
    }

    /**
     * Indicates whether the texture is rotated inside the atlas
     * set to 2 to compensate for texture packer rotation
     * set to 6 to compensate for spine packer rotation
     * can be used to rotate or mirror sprites
     * See {@link Tiny.GroupD8} for explanation
     *
     * @member {number}
     */

  }, {
    key: 'rotate',
    get: function get() {
      return this._rotate;
    },
    set: function set(rotate) {
      this._rotate = rotate;
      if (this.valid) {
        this._updateUvs();
      }
    }

    /**
     * The width of the Texture in pixels.
     *
     * @member {number}
     */

  }, {
    key: 'width',
    get: function get() {
      return this.orig.width;
    }

    /**
     * The height of the Texture in pixels.
     *
     * @member {number}
     */

  }, {
    key: 'height',
    get: function get() {
      return this.orig.height;
    }
  }], [{
    key: 'fromImage',
    value: function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
      var texture = _utils.TextureCache[imageUrl];

      if (!texture) {
        texture = new Texture(_BaseTexture2.default.fromImage(imageUrl, crossorigin, scaleMode, sourceScale));
        Texture.addToCache(texture, imageUrl);
      }

      return texture;
    }

    /**
     * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
     * The frame ids are created when a Texture packer file has been loaded
     *
     * @static
     * @param {string} frameId - The frame Id of the texture in the cache
     * @return {Tiny.Texture} The newly created texture
     */

  }, {
    key: 'fromFrame',
    value: function fromFrame(frameId) {
      var texture = _utils.TextureCache[frameId];

      if (!texture) {
        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
      }

      return texture;
    }

    /**
     * Helper function that creates a new Texture based on the given canvas element.
     *
     * @static
     * @param {HTMLCanvasElement} canvas - The canvas element source of the texture
     * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
     * @return {Tiny.Texture} The newly created texture
     */

  }, {
    key: 'fromCanvas',
    value: function fromCanvas(canvas, scaleMode) {
      return new Texture(_BaseTexture2.default.fromCanvas(canvas, scaleMode));
    }

    /**
     * Helper function that creates a new Texture based on the given video element.
     *
     * @static
     * @param {HTMLVideoElement|string} video - The URL or actual element of the video
     * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
     * @return {Tiny.Texture} The newly created texture
     */

  }, {
    key: 'fromVideo',
    value: function fromVideo(video, scaleMode) {
      if (typeof video === 'string') {
        return Texture.fromVideoUrl(video, scaleMode);
      }

      return new Texture(_VideoBaseTexture2.default.fromVideo(video, scaleMode));
    }

    /**
     * Helper function that creates a new Texture based on the video url.
     *
     * @static
     * @param {string} videoUrl - URL of the video
     * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
     * @return {Tiny.Texture} The newly created texture
     */

  }, {
    key: 'fromVideoUrl',
    value: function fromVideoUrl(videoUrl, scaleMode) {
      return new Texture(_VideoBaseTexture2.default.fromUrl(videoUrl, scaleMode));
    }

    /**
     * Helper function that creates a new Texture based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     *
     * @static
     * @param {number|string|Tiny.BaseTexture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
     * @return {Tiny.Texture} The newly created texture
     */

  }, {
    key: 'from',
    value: function from(source) {
      // TODO auto detect cross origin..
      // TODO pass in scale mode?
      if (typeof source === 'string') {
        var texture = _utils.TextureCache[source];

        if (!texture) {
          // check if its a video..
          var isVideo = source.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) !== null;

          if (isVideo) {
            return Texture.fromVideoUrl(source);
          }

          return Texture.fromImage(source);
        }

        return texture;
      } else if (source instanceof HTMLImageElement) {
        return new Texture(_BaseTexture2.default.from(source));
      } else if (source instanceof HTMLCanvasElement) {
        return Texture.fromCanvas(source, _settings2.default.SCALE_MODE, 'HTMLCanvasElement');
      } else if (source instanceof HTMLVideoElement) {
        return Texture.fromVideo(source);
      } else if (source instanceof _BaseTexture2.default) {
        return new Texture(source);
      }

      // lets assume its a texture!
      return source;
    }

    /**
     * Create a texture from a source and add to the cache.
     *
     * @static
     * @param {HTMLImageElement|HTMLCanvasElement} source - The input source.
     * @param {String} imageUrl - File name of texture, for cache and resolving resolution.
     * @param {String} [name] - Human readible name for the texture cache. If no name is
     *        specified, only `imageUrl` will be used as the cache ID.
     * @return {Tiny.Texture} Output texture
     */

  }, {
    key: 'fromLoader',
    value: function fromLoader(source, imageUrl, name) {
      var baseTexture = new _BaseTexture2.default(source, undefined, (0, _utils.getResolutionOfUrl)(imageUrl));
      var texture = new Texture(baseTexture);

      baseTexture.imageUrl = imageUrl;

      // No name, use imageUrl instead
      if (!name) {
        name = imageUrl;
      }

      // lets also add the frame to pixi's global cache for fromFrame and fromImage fucntions
      _BaseTexture2.default.addToCache(texture.baseTexture, name);
      Texture.addToCache(texture, name);

      // also add references by url if they are different.
      if (name !== imageUrl) {
        _BaseTexture2.default.addToCache(texture.baseTexture, imageUrl);
        Texture.addToCache(texture, imageUrl);
      }

      return texture;
    }

    /**
     * Adds a Texture to the global TextureCache. This cache is shared across the whole Tiny object.
     *
     * @static
     * @param {Tiny.Texture} texture - The Texture to add to the cache.
     * @param {string} id - The id that the Texture will be stored against.
     */

  }, {
    key: 'addToCache',
    value: function addToCache(texture, id) {
      if (id) {
        if (texture.textureCacheIds.indexOf(id) === -1) {
          texture.textureCacheIds.push(id);
        }

        // @if DEBUG
        /* eslint-disable no-console */
        if (_utils.TextureCache[id]) {
          console.warn('Texture added to the cache with an id [' + id + '] that already had an entry');
        }
        /* eslint-enable no-console */
        // @endif

        _utils.TextureCache[id] = texture;
      }
    }

    /**
     * Remove a Texture from the global TextureCache.
     *
     * @static
     * @param {string|Tiny.Texture} texture - id of a Texture to be removed, or a Texture instance itself
     * @return {Tiny.Texture|null} The Texture that was removed
     */

  }, {
    key: 'removeFromCache',
    value: function removeFromCache(texture) {
      if (typeof texture === 'string') {
        var textureFromCache = _utils.TextureCache[texture];

        if (textureFromCache) {
          var index = textureFromCache.textureCacheIds.indexOf(texture);

          if (index > -1) {
            textureFromCache.textureCacheIds.splice(index, 1);
          }

          delete _utils.TextureCache[texture];

          return textureFromCache;
        }
      } else if (texture && texture.textureCacheIds) {
        for (var i = 0; i < texture.textureCacheIds.length; ++i) {
          delete _utils.TextureCache[texture.textureCacheIds[i]];
        }

        texture.textureCacheIds.length = 0;

        return texture;
      }

      return null;
    }
  }]);

  return Texture;
}(_eventemitter2.default);

exports.default = Texture;


function createWhiteTexture() {
  var canvas = document.createElement('canvas');

  canvas.width = 10;
  canvas.height = 10;

  var context = canvas.getContext('2d');

  context.fillStyle = 'white';
  context.fillRect(0, 0, 10, 10);

  return new Texture(new _BaseTexture2.default(canvas));
}

function removeAllHandlers(tex) {
  tex.destroy = function _emptyDestroy() {/* empty */
  };
  tex.on = function _emptyOn() {/* empty */
  };
  tex.once = function _emptyOnce() {/* empty */
  };
  tex.emit = function _emptyEmit() {/* empty */
  };
}

/**
 * An empty texture, used often to not have to create multiple empty textures.
 * Can not be destroyed.
 *
 * @static
 * @constant
 */
Texture.EMPTY = new Texture(new _BaseTexture2.default());
removeAllHandlers(Texture.EMPTY);
removeAllHandlers(Texture.EMPTY.baseTexture);

/**
 * A white texture of 10x10 size, used for graphics and other things
 * Can not be destroyed.
 *
 * @static
 * @constant
 */
Texture.WHITE = createWhiteTexture();
removeAllHandlers(Texture.WHITE);
removeAllHandlers(Texture.WHITE.baseTexture);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _utils = __webpack_require__(1);

var _DisplayObject2 = __webpack_require__(46);

var _DisplayObject3 = _interopRequireDefault(_DisplayObject2);

var _tween = __webpack_require__(12);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Container represents a collection of display objects.
 * It is the base class of all display objects that act as a container for other objects.
 *
 *```js
 * let container = new Tiny.Container();
 * container.addChild(sprite);
 * ```
 *
 * @class
 * @extends Tiny.DisplayObject
 * @memberof Tiny
 */
var Container = function (_DisplayObject) {
  _inherits(Container, _DisplayObject);

  /**
   *
   */
  function Container() {
    _classCallCheck(this, Container);

    /**
     * The array of children of this container.
     *
     * @member {Array<Tiny.DisplayObject>}
     * @readonly
     */
    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));

    _this.children = [];

    /**
     * 该对象上绑定的所有 Action
     *
     * @member {Array<Tiny.Action>}
     */
    _this.actions = [];

    _this.on('removed', function () {
      _this.removeActionsTrace();
    });
    return _this;
  }

  /**
   * 移除该对象上绑定的所有 Action
   */


  _createClass(Container, [{
    key: 'removeActions',
    value: function removeActions() {
      if (this.actions.length !== 0) {
        this.actions.forEach(function (action) {
          _tween2.default.remove(action);
        });
        this.actions = [];
      }
    }

    /**
     * 移除该对象及其子集上绑定的所有 Action
     */

  }, {
    key: 'removeActionsTrace',
    value: function removeActionsTrace() {
      if (this.children.length !== 0) {
        this.children.forEach(function (item) {
          item.removeActionsTrace();
        });
      }
      this.removeActions();
    }

    /**
     * Overridable method that can be used by Container subclasses whenever the children array is modified
     *
     * @private
     */

  }, {
    key: 'onChildrenChange',
    value: function onChildrenChange() {}
    /* empty */


    /**
     * Adds one or more children to the container.
     *
     * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
     *
     * @param {...Tiny.DisplayObject} child - The DisplayObject(s) to add to the container
     * @return {Tiny.DisplayObject} The first child that was added.
     */

  }, {
    key: 'addChild',
    value: function addChild(child) {
      var argumentsLength = arguments.length;

      // if there is only one argument we can bypass looping through the them
      if (argumentsLength > 1) {
        // loop through the arguments property and add all children
        // use it the right way (.length and [i]) so that this function can still be optimised by JS runtimes
        for (var i = 0; i < argumentsLength; i++) {
          this.addChild(arguments[i]);
        }
      } else {
        // if the child has a parent then lets remove it as Tiny objects can only exist in one place
        if (child.parent) {
          child.parent.removeChild(child);
        }

        child.parent = this;

        // ensure a transform will be recalculated..
        child.transform._parentID = -1;

        this.children.push(child);

        // ensure bounds will be recalculated
        this._boundsID++;

        // TODO - lets either do all callbacks or all events.. not both!
        this.onChildrenChange(this.children.length - 1);
        child.emit('added', this);
      }

      return child;
    }

    /**
     * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
     *
     * @param {Tiny.DisplayObject} child - The child to add
     * @param {number} index - The index to place the child in
     * @return {Tiny.DisplayObject} The child that was added.
     */

  }, {
    key: 'addChildAt',
    value: function addChildAt(child, index) {
      if (index < 0 || index > this.children.length) {
        throw new Error(child + 'addChildAt: The index ' + index + ' supplied is out of bounds ' + this.children.length);
      }

      if (child.parent) {
        child.parent.removeChild(child);
      }

      child.parent = this;
      // ensure child transform will be recalculated
      child.transform._parentID = -1;

      this.children.splice(index, 0, child);

      // ensure bounds will be recalculated
      this._boundsID++;

      // TODO - lets either do all callbacks or all events.. not both!
      this.onChildrenChange(index);
      child.emit('added', this);

      return child;
    }

    /**
     * Swaps the position of 2 Display Objects within this container.
     *
     * @param {Tiny.DisplayObject} child - First display object to swap
     * @param {Tiny.DisplayObject} child2 - Second display object to swap
     */

  }, {
    key: 'swapChildren',
    value: function swapChildren(child, child2) {
      if (child === child2) {
        return;
      }

      var index1 = this.getChildIndex(child);
      var index2 = this.getChildIndex(child2);

      this.children[index1] = child2;
      this.children[index2] = child;
      this.onChildrenChange(index1 < index2 ? index1 : index2);
    }

    /**
     * Returns the index position of a child DisplayObject instance
     *
     * @param {Tiny.DisplayObject} child - The DisplayObject instance to identify
     * @return {number} The index position of the child display object to identify
     */

  }, {
    key: 'getChildIndex',
    value: function getChildIndex(child) {
      var index = this.children.indexOf(child);

      if (index === -1) {
        throw new Error('The supplied DisplayObject must be a child of the caller');
      }

      return index;
    }

    /**
     * Changes the position of an existing child in the display object container
     *
     * @param {Tiny.DisplayObject} child - The child DisplayObject instance for which you want to change the index number
     * @param {number} index - The resulting index number for the child display object
     */

  }, {
    key: 'setChildIndex',
    value: function setChildIndex(child, index) {
      if (index < 0 || index >= this.children.length) {
        throw new Error('The supplied index is out of bounds');
      }

      var currentIndex = this.getChildIndex(child);

      (0, _utils.removeItems)(this.children, currentIndex, 1); // remove from old position
      this.children.splice(index, 0, child); // add at new position
      this.onChildrenChange(index);
    }

    /**
     * Returns the child at the specified index
     *
     * @param {number} index - The index to get the child at
     * @return {Tiny.DisplayObject} The child at the given index, if any.
     */

  }, {
    key: 'getChildAt',
    value: function getChildAt(index) {
      if (index < 0 || index >= this.children.length) {
        throw new Error('getChildAt: Index (' + index + ') does not exist.');
      }

      return this.children[index];
    }

    /**
     * Removes one or more children from the container.
     *
     * @param {...Tiny.DisplayObject} child - The DisplayObject(s) to remove
     * @return {Tiny.DisplayObject} The first child that was removed.
     */

  }, {
    key: 'removeChild',
    value: function removeChild(child) {
      var argumentsLength = arguments.length;

      // if there is only one argument we can bypass looping through the them
      if (argumentsLength > 1) {
        // loop through the arguments property and add all children
        // use it the right way (.length and [i]) so that this function can still be optimised by JS runtimes
        for (var i = 0; i < argumentsLength; i++) {
          this.removeChild(arguments[i]);
        }
      } else {
        var index = this.children.indexOf(child);

        if (index === -1) return null;

        child.parent = null;
        // ensure child transform will be recalculated
        child.transform._parentID = -1;
        (0, _utils.removeItems)(this.children, index, 1);

        // ensure bounds will be recalculated
        this._boundsID++;

        // TODO - lets either do all callbacks or all events.. not both!
        this.onChildrenChange(index);
        child.emit('removed', this);
      }

      return child;
    }

    /**
     * Removes a child from the specified index position.
     *
     * @param {number} index - The index to get the child from
     * @return {Tiny.DisplayObject} The child that was removed.
     */

  }, {
    key: 'removeChildAt',
    value: function removeChildAt(index) {
      var child = this.getChildAt(index);

      // ensure child transform will be recalculated..
      child.parent = null;
      child.transform._parentID = -1;
      (0, _utils.removeItems)(this.children, index, 1);

      // ensure bounds will be recalculated
      this._boundsID++;

      // TODO - lets either do all callbacks or all events.. not both!
      this.onChildrenChange(index);
      child.emit('removed', this);

      return child;
    }

    /**
     * Removes all children from this container that are within the begin and end indexes.
     *
     * @param {number} [beginIndex=0] - The beginning position.
     * @param {number} [endIndex=this.children.length] - The ending position. Default value is size of the container.
     * @return {DisplayObject[]} List of removed children
     */

  }, {
    key: 'removeChildren',
    value: function removeChildren() {
      var beginIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var endIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var begin = beginIndex;
      var end = typeof endIndex === 'number' ? endIndex : this.children.length;
      var range = end - begin;
      var removed = void 0;

      if (range > 0 && range <= end) {
        removed = this.children.splice(begin, range);

        for (var i = 0; i < removed.length; ++i) {
          removed[i].parent = null;
          if (removed[i].transform) {
            removed[i].transform._parentID = -1;
          }
        }

        this._boundsID++;

        this.onChildrenChange(beginIndex);

        for (var _i = 0; _i < removed.length; ++_i) {
          removed[_i].emit('removed', this);
        }

        return removed;
      } else if (range === 0 && this.children.length === 0) {
        return [];
      }

      throw new RangeError('removeChildren: numeric values are outside the acceptable range.');
    }

    /**
     * Updates the transform on all children of this container for rendering
     */

  }, {
    key: 'updateTransform',
    value: function updateTransform() {
      this._boundsID++;

      this.transform.updateTransform(this.parent.transform);

      // TODO: check render flags, how to process stuff here
      this.worldAlpha = this.alpha * this.parent.worldAlpha;

      for (var i = 0, j = this.children.length; i < j; ++i) {
        var child = this.children[i];

        if (child.visible) {
          child.updateTransform();
        }
      }
    }

    /**
     * Recalculates the bounds of the container.
     *
     */

  }, {
    key: 'calculateBounds',
    value: function calculateBounds() {
      this._bounds.clear();

      this._calculateBounds();

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];

        if (!child.visible || !child.renderable) {
          continue;
        }

        child.calculateBounds();

        // TODO: filter+mask, need to mask both somehow
        if (child._mask) {
          child._mask.calculateBounds();
          this._bounds.addBoundsMask(child._bounds, child._mask._bounds);
        } else if (child.filterArea) {
          this._bounds.addBoundsArea(child._bounds, child.filterArea);
        } else {
          this._bounds.addBounds(child._bounds);
        }
      }

      this._lastBoundsID = this._boundsID;
    }

    /**
     * Recalculates the bounds of the object. Override this to
     * calculate the bounds of the specific object (not including children).
     *
     * @private
     */

  }, {
    key: '_calculateBounds',
    value: function _calculateBounds() {}
    // FILL IN//


    /**
     * Renders the object using the WebGL renderer
     *
     * @param {Tiny.WebGLRenderer} renderer - The renderer
     */

  }, {
    key: 'renderWebGL',
    value: function renderWebGL(renderer) {
      // if the object is not visible or the alpha is 0 then no need to render this element
      if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
        return;
      }

      // do a quick check to see if this element has a mask or a filter.
      if (this._mask || this._filters) {
        this.renderAdvancedWebGL(renderer);
      } else {
        this._renderWebGL(renderer);

        // simple render children!
        for (var i = 0, j = this.children.length; i < j; ++i) {
          this.children[i].renderWebGL(renderer);
        }
      }
    }

    /**
     * Render the object using the WebGL renderer and advanced features.
     *
     * @private
     * @param {Tiny.WebGLRenderer} renderer - The renderer
     */

  }, {
    key: 'renderAdvancedWebGL',
    value: function renderAdvancedWebGL(renderer) {
      renderer.flush();

      var filters = this._filters;
      var mask = this._mask;

      // push filter first as we need to ensure the stencil buffer is correct for any masking
      if (filters) {
        if (!this._enabledFilters) {
          this._enabledFilters = [];
        }

        this._enabledFilters.length = 0;

        for (var i = 0; i < filters.length; i++) {
          if (filters[i].enabled) {
            this._enabledFilters.push(filters[i]);
          }
        }

        if (this._enabledFilters.length) {
          renderer.filterManager.pushFilter(this, this._enabledFilters);
        }
      }

      if (mask) {
        renderer.maskManager.pushMask(this, this._mask);
      }

      // add this object to the batch, only rendered if it has a texture.
      this._renderWebGL(renderer);

      // now loop through the children and make sure they get rendered
      for (var _i2 = 0, j = this.children.length; _i2 < j; _i2++) {
        this.children[_i2].renderWebGL(renderer);
      }

      renderer.flush();

      if (mask) {
        renderer.maskManager.popMask(this, this._mask);
      }

      if (filters && this._enabledFilters && this._enabledFilters.length) {
        renderer.filterManager.popFilter();
      }
    }

    /**
     * To be overridden by the subclasses.
     *
     * @private
     * @param {Tiny.WebGLRenderer} renderer - The renderer
     */

  }, {
    key: '_renderWebGL',
    value: function _renderWebGL(renderer) {} // eslint-disable-line no-unused-vars
    // this is where content itself gets rendered...


    /**
     * To be overridden by the subclass
     *
     * @private
     * @param {Tiny.CanvasRenderer} renderer - The renderer
     */

  }, {
    key: '_renderCanvas',
    value: function _renderCanvas(renderer) {} // eslint-disable-line no-unused-vars
    // this is where content itself gets rendered...


    /**
     * Renders the object using the Canvas renderer
     *
     * @param {Tiny.CanvasRenderer} renderer - The renderer
     */

  }, {
    key: 'renderCanvas',
    value: function renderCanvas(renderer) {
      // if not visible or the alpha is 0 then no need to render this
      if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
        return;
      }

      if (this._mask) {
        renderer.maskManager.pushMask(this._mask);
      }

      this._renderCanvas(renderer);
      for (var i = 0, j = this.children.length; i < j; ++i) {
        this.children[i].renderCanvas(renderer);
      }

      if (this._mask) {
        renderer.maskManager.popMask(renderer);
      }
    }

    /**
     * Removes all internal references and listeners as well as removes children from the display list.
     * Do not use a Container after calling `destroy`.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true Should it destroy the base texture of the child sprite
     */

  }, {
    key: 'destroy',
    value: function destroy(options) {
      _get(Container.prototype.__proto__ || Object.getPrototypeOf(Container.prototype), 'destroy', this).call(this);

      var destroyChildren = typeof options === 'boolean' ? options : options && options.children;

      var oldChildren = this.removeChildren(0, this.children.length);

      if (destroyChildren) {
        for (var i = 0; i < oldChildren.length; ++i) {
          oldChildren[i].destroy(options);
        }
      }
    }

    /**
     * The width of the Container, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */

  }, {
    key: 'width',
    get: function get() {
      return this.scale.x * this.getLocalBounds().width;
    },
    set: function set(value) {
      // eslint-disable-line require-jsdoc
      var width = this.getLocalBounds().width;

      if (width !== 0) {
        this.scale.x = value / width;
      } else {
        this.scale.x = 1;
      }

      this._width = value;
    }

    /**
     * The height of the Container, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */

  }, {
    key: 'height',
    get: function get() {
      return this.scale.y * this.getLocalBounds().height;
    },
    set: function set(value) {
      // eslint-disable-line require-jsdoc
      var height = this.getLocalBounds().height;

      if (height !== 0) {
        this.scale.y = value / height;
      } else {
        this.scale.y = 1;
      }

      this._height = value;
    }
  }]);

  return Container;
}(_DisplayObject3.default);

// performance increase to avoid using call.. (10x faster)


exports.default = Container;
Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SystemRenderer2 = __webpack_require__(51);

var _SystemRenderer3 = _interopRequireDefault(_SystemRenderer2);

var _CanvasMaskManager = __webpack_require__(103);

var _CanvasMaskManager2 = _interopRequireDefault(_CanvasMaskManager);

var _CanvasRenderTarget = __webpack_require__(52);

var _CanvasRenderTarget2 = _interopRequireDefault(_CanvasRenderTarget);

var _mapCanvasBlendModesToTiny = __webpack_require__(104);

var _mapCanvasBlendModesToTiny2 = _interopRequireDefault(_mapCanvasBlendModesToTiny);

var _utils = __webpack_require__(1);

var _const = __webpack_require__(0);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The CanvasRenderer draws the scene and all its content onto a 2d canvas. This renderer should
 * be used for browsers that do not support WebGL. Don't forget to add the CanvasRenderer.view to
 * your DOM or you will not see anything :)
 *
 * @class
 * @memberof Tiny
 * @extends Tiny.SystemRenderer
 */
var CanvasRenderer = function (_SystemRenderer) {
  _inherits(CanvasRenderer, _SystemRenderer);

  /**
   * @param {number}            width                             - the width of the screen
   * @param {number}            height                            - the height of the screen
   * @param {object}            options                           - The optional renderer parameters
   * @param {HTMLCanvasElement} options.view                      - the canvas to use as a view, optional
   * @param {boolean}           options.antialias=false           - sets antialias (only applicable in chrome at the moment)
   * @param {boolean}           options.autoResize=false          - If the render view is automatically resized, default false
   * @param {number}            options.backgroundColor=0x000000  - The background color of the rendered area (shown if not transparent).
   * @param {boolean}           options.clearBeforeRender=true    - This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
   * @param {number}            options.resolution=1              - The resolution / device pixel ratio of the renderer. The resolution of the renderer retina would be 2.
   * @param {boolean}           options.roundPixels=false         - If true Tiny will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * @param {boolean}           options.transparent=false         - If the render view is transparent, default false
   */
  function CanvasRenderer(width, height, options) {
    _classCallCheck(this, CanvasRenderer);

    var _this = _possibleConstructorReturn(this, (CanvasRenderer.__proto__ || Object.getPrototypeOf(CanvasRenderer)).call(this, 'Canvas', width, height, options));

    _this.type = _const.RENDERER_TYPE.CANVAS;

    /**
     * The canvas 2d context that everything is drawn with.
     *
     * @member {CanvasRenderingContext2D}
     */
    _this.rootContext = _this.view.getContext('2d', { alpha: _this.transparent });

    /**
     * Boolean flag controlling canvas refresh.
     *
     * @member {boolean}
     */
    _this.refresh = true;

    /**
     * Instance of a CanvasMaskManager, handles masking when using the canvas renderer.
     *
     * @member {Tiny.CanvasMaskManager}
     */
    _this.maskManager = new _CanvasMaskManager2.default(_this);

    /**
     * The canvas property used to set the canvas smoothing property.
     *
     * @member {string}
     */
    _this.smoothProperty = 'imageSmoothingEnabled';

    if (!_this.rootContext.imageSmoothingEnabled) {
      if (_this.rootContext.webkitImageSmoothingEnabled) {
        _this.smoothProperty = 'webkitImageSmoothingEnabled';
      } else if (_this.rootContext.mozImageSmoothingEnabled) {
        _this.smoothProperty = 'mozImageSmoothingEnabled';
      } else if (_this.rootContext.oImageSmoothingEnabled) {
        _this.smoothProperty = 'oImageSmoothingEnabled';
      } else if (_this.rootContext.msImageSmoothingEnabled) {
        _this.smoothProperty = 'msImageSmoothingEnabled';
      }
    }

    _this.initPlugins();

    _this.blendModes = (0, _mapCanvasBlendModesToTiny2.default)();
    _this._activeBlendMode = null;

    _this.context = null;
    _this.renderingToScreen = false;

    _this.resize(_this.options.width, _this.options.height);

    /**
     * Fired after rendering finishes.
     *
     * @event Tiny.CanvasRenderer#postrender
     */

    /**
     * Fired before rendering starts.
     *
     * @event Tiny.CanvasRenderer#prerender
     */
    return _this;
  }

  /**
   * Renders the object to this canvas view
   *
   * @param {Tiny.DisplayObject} displayObject - The object to be rendered
   * @param {Tiny.RenderTexture} [renderTexture] - A render texture to be rendered to.
   *  If unset, it will render to the root context.
   * @param {boolean} [clear=false] - Whether to clear the canvas before drawing
   * @param {Tiny.Transform} [transform] - A transformation to be applied
   * @param {boolean} [skipUpdateTransform=false] - Whether to skip the update transform
   */


  _createClass(CanvasRenderer, [{
    key: 'render',
    value: function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
      if (!this.view) {
        return;
      }

      // can be handy to know!
      this.renderingToScreen = !renderTexture;

      this.emit('prerender');

      var rootResolution = this.resolution;

      if (renderTexture) {
        renderTexture = renderTexture.baseTexture || renderTexture;

        if (!renderTexture._canvasRenderTarget) {
          renderTexture._canvasRenderTarget = new _CanvasRenderTarget2.default(renderTexture.width, renderTexture.height, renderTexture.resolution);
          renderTexture.source = renderTexture._canvasRenderTarget.canvas;
          renderTexture.valid = true;
        }

        this.context = renderTexture._canvasRenderTarget.context;
        this.resolution = renderTexture._canvasRenderTarget.resolution;
      } else {
        this.context = this.rootContext;
      }

      var context = this.context;

      if (!renderTexture) {
        this._lastObjectRendered = displayObject;
      }

      if (!skipUpdateTransform) {
        // update the scene graph
        var cacheParent = displayObject.parent;
        var tempWt = this._tempDisplayObjectParent.transform.worldTransform;

        if (transform) {
          transform.copy(tempWt);

          // lets not forget to flag the parent transform as dirty...
          this._tempDisplayObjectParent.transform._worldID = -1;
        } else {
          tempWt.identity();
        }

        displayObject.parent = this._tempDisplayObjectParent;
        displayObject.updateTransform();
        displayObject.parent = cacheParent;
        // displayObject.hitArea = //TODO add a temp hit area
      }

      context.setTransform(1, 0, 0, 1, 0, 0);
      context.globalAlpha = 1;
      context.globalCompositeOperation = this.blendModes[_const.BLEND_MODES.NORMAL];

      if (navigator.isCocoonJS && this.view.screencanvas) {
        context.fillStyle = 'black';
        context.clear();
      }

      if (clear !== undefined ? clear : this.clearBeforeRender) {
        if (this.renderingToScreen) {
          if (this.transparent) {
            context.clearRect(0, 0, this.width, this.height);
          } else {
            context.fillStyle = this._backgroundColorString;
            context.fillRect(0, 0, this.width, this.height);
          }
        } // else {
        // TODO: implement background for CanvasRenderTarget or RenderTexture?
        // }
      }

      // TODO RENDER TARGET STUFF HERE..
      var tempContext = this.context;

      this.context = context;
      displayObject.renderCanvas(this);
      this.context = tempContext;

      this.resolution = rootResolution;

      this.emit('postrender');
    }

    /**
     * Clear the canvas of renderer.
     *
     * @param {string} [clearColor] - Clear the canvas with this color, except the canvas is transparent.
     */

  }, {
    key: 'clear',
    value: function clear(clearColor) {
      var context = this.context;

      clearColor = clearColor || this._backgroundColorString;

      if (!this.transparent && clearColor) {
        context.fillStyle = clearColor;
        context.fillRect(0, 0, this.width, this.height);
      } else {
        context.clearRect(0, 0, this.width, this.height);
      }
    }

    /**
     * Sets the blend mode of the renderer.
     *
     * @param {number} blendMode - See {@link Tiny.BLEND_MODES} for valid values.
     */

  }, {
    key: 'setBlendMode',
    value: function setBlendMode(blendMode) {
      if (this._activeBlendMode === blendMode) {
        return;
      }

      this._activeBlendMode = blendMode;
      this.context.globalCompositeOperation = this.blendModes[blendMode];
    }

    /**
     * Removes everything from the renderer and optionally removes the Canvas DOM element.
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     */

  }, {
    key: 'destroy',
    value: function destroy(removeView) {
      this.destroyPlugins();

      // call the base destroy
      _get(CanvasRenderer.prototype.__proto__ || Object.getPrototypeOf(CanvasRenderer.prototype), 'destroy', this).call(this, removeView);

      this.context = null;

      this.refresh = true;

      this.maskManager.destroy();
      this.maskManager = null;

      this.smoothProperty = null;
    }

    /**
     * Resizes the canvas view to the specified width and height.
     *
     * @extends Tiny.SystemRenderer#resize
     *
     * @param {number} screenWidth - the new width of the screen
     * @param {number} screenHeight - the new height of the screen
     */

  }, {
    key: 'resize',
    value: function resize(screenWidth, screenHeight) {
      _get(CanvasRenderer.prototype.__proto__ || Object.getPrototypeOf(CanvasRenderer.prototype), 'resize', this).call(this, screenWidth, screenHeight);

      // reset the scale mode.. oddly this seems to be reset when the canvas is resized.
      // surely a browser bug?? Let Tiny fix that for you..
      if (this.smoothProperty) {
        this.rootContext[this.smoothProperty] = _settings2.default.SCALE_MODE === _const.SCALE_MODES.LINEAR;
      }
    }
  }]);

  return CanvasRenderer;
}(_SystemRenderer3.default);

/**
 * Collection of installed plugins. These are included by default in PIXI, but can be excluded
 * by creating a custom build. Consult the README for more information about creating custom
 * builds and excluding plugins.
 * @name Tiny.CanvasRenderer#plugins
 * @type {object}
 * @readonly
 * @property {Tiny.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
 * @property {Tiny.extract.CanvasExtract} extract Extract image data from renderer.
 * @property {Tiny.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
 * @property {Tiny.prepare.CanvasPrepare} prepare Pre-render display objects.
 */

/**
 * Adds a plugin to the renderer.
 *
 * @method Tiny.CanvasRenderer#registerPlugin
 * @param {string} pluginName - The name of the plugin.
 * @param {Function} ctor - The constructor function or class for the plugin.
 */


exports.default = CanvasRenderer;
_utils.pluginTarget.mixin(CanvasRenderer);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class
 * @memberof Tiny
 */
var WebGLManager = function () {
  /**
   * @param {Tiny.WebGLRenderer} renderer - The renderer this manager works for.
   */
  function WebGLManager(renderer) {
    _classCallCheck(this, WebGLManager);

    /**
     * The renderer this manager works for.
     *
     * @member {Tiny.WebGLRenderer}
     */
    this.renderer = renderer;

    this.renderer.on('context', this.onContextChange, this);
  }

  /**
   * Generic method called when there is a WebGL context change.
   *
   */


  _createClass(WebGLManager, [{
    key: 'onContextChange',
    value: function onContextChange() {}
    // do some codes init!


    /**
     * Generic destroy methods to be overridden by the subclass
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.renderer.off('context', this.onContextChange, this);

      this.renderer = null;
    }
  }]);

  return WebGLManager;
}();

exports.default = WebGLManager;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

var _eventemitter = __webpack_require__(6);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _determineCrossOrigin = __webpack_require__(128);

var _determineCrossOrigin2 = _interopRequireDefault(_determineCrossOrigin);

var _bitTwiddle = __webpack_require__(19);

var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A texture stores the information that represents an image. All textures have a base texture.
 *
 * @class
 * @extends EventEmitter
 * @memberof Tiny
 */
var BaseTexture = function (_EventEmitter) {
  _inherits(BaseTexture, _EventEmitter);

  /**
   * @param {HTMLImageElement|HTMLCanvasElement}  source  - the source object of the texture.
   * @param {number}                              scaleMode=Tiny.settings.SCALE_MODE  - See {@link Tiny.SCALE_MODES} for possible values
   * @param {number}                              resolution=1  - The resolution / device pixel ratio of the texture
   */
  function BaseTexture(source, scaleMode, resolution) {
    _classCallCheck(this, BaseTexture);

    var _this = _possibleConstructorReturn(this, (BaseTexture.__proto__ || Object.getPrototypeOf(BaseTexture)).call(this));

    _this.uid = (0, _utils.uid)();

    _this.touched = 0;

    /**
     * The resolution / device pixel ratio of the texture
     *
     * @member {number}
     * @default 1
     */
    _this.resolution = resolution || _settings2.default.RESOLUTION;

    /**
     * The width of the base texture set when the image has loaded
     *
     * @readonly
     * @member {number}
     */
    _this.width = 100;

    /**
     * The height of the base texture set when the image has loaded
     *
     * @readonly
     * @member {number}
     */
    _this.height = 100;

    // TODO docs
    // used to store the actual dimensions of the source
    /**
     * Used to store the actual width of the source of this texture
     *
     * @readonly
     * @member {number}
     */
    _this.realWidth = 100;
    /**
     * Used to store the actual height of the source of this texture
     *
     * @readonly
     * @member {number}
     */
    _this.realHeight = 100;

    /**
     * The scale mode to apply when scaling this texture
     *
     * @member {number}
     * @default Tiny.settings.SCALE_MODE
     * @see Tiny.SCALE_MODES
     */
    _this.scaleMode = scaleMode !== undefined ? scaleMode : _settings2.default.SCALE_MODE;

    /**
     * Set to true once the base texture has successfully loaded.
     *
     * This is never true if the underlying source fails to load or has no texture data.
     *
     * @readonly
     * @member {boolean}
     */
    _this.hasLoaded = false;

    /**
     * Set to true if the source is currently loading.
     *
     * If an Image source is loading the 'loaded' or 'error' event will be
     * dispatched when the operation ends. An underyling source that is
     * immediately-available bypasses loading entirely.
     *
     * @readonly
     * @member {boolean}
     */
    _this.isLoading = false;

    /**
     * The image source that is used to create the texture.
     *
     * TODO: Make this a setter that calls loadSource();
     *
     * @readonly
     * @member {HTMLImageElement|HTMLCanvasElement}
     */
    _this.source = null; // set in loadSource, if at all

    /**
     * The image source that is used to create the texture. This is used to
     * store the original Svg source when it is replaced with a canvas element.
     *
     * TODO: Currently not in use but could be used when re-scaling svg.
     *
     * @readonly
     * @member {Image}
     */
    _this.origSource = null; // set in loadSvg, if at all

    /**
     * Type of image defined in source, eg. `png` or `svg`
     *
     * @readonly
     * @member {string}
     */
    _this.imageType = null; // set in updateImageType

    /**
     * Scale for source image. Used with Svg images to scale them before rasterization.
     *
     * @readonly
     * @member {number}
     */
    _this.sourceScale = 1.0;

    /**
     * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)
     * All blend modes, and shaders written for default value. Change it on your own risk.
     *
     * @member {boolean}
     * @default true
     */
    _this.premultipliedAlpha = true;

    /**
     * The image url of the texture
     *
     * @member {string}
     */
    _this.imageUrl = null;

    /**
     * Whether or not the texture is a power of two, try to use power of two textures as much
     * as you can
     *
     * @private
     * @member {boolean}
     */
    _this.isPowerOfTwo = false;

    // used for webGL

    /**
     *
     * Set this to true if a mipmap of this texture needs to be generated. This value needs
     * to be set before the texture is used
     * Also the texture must be a power of two size to work
     *
     * @member {boolean}
     * @see Tiny.MIPMAP_TEXTURES
     */
    _this.mipmap = _settings2.default.MIPMAP_TEXTURES;

    /**
     *
     * WebGL Texture wrap mode
     *
     * @member {number}
     * @see Tiny.WRAP_MODES
     */
    _this.wrapMode = _settings2.default.WRAP_MODE;

    /**
     * A map of renderer IDs to webgl textures
     *
     * @private
     * @member {object<number, WebGLTexture>}
     */
    _this._glTextures = {};

    _this._enabled = 0;
    _this._virtalBoundId = -1;

    /**
     * If the object has been destroyed via destroy(). If true, it should not be used.
     *
     * @member {boolean}
     * @private
     * @readonly
     */
    _this._destroyed = false;

    /**
     * The ids under which this BaseTexture has been added to the base texture cache. This is
     * automatically set as long as BaseTexture.addToCache is used, but may not be set if a
     * BaseTexture is added directly to the BaseTextureCache array.
     *
     * @member {string[]}
     */
    _this.textureCacheIds = [];

    // if no source passed don't try to load
    if (source) {
      _this.loadSource(source);
    }

    /**
     * Fired when a not-immediately-available source finishes loading.
     *
     * @protected
     * @event Tiny.BaseTexture#loaded
     * @param {Tiny.BaseTexture} baseTexture - Resource loaded.
     */

    /**
     * Fired when a not-immediately-available source fails to load.
     *
     * @protected
     * @event Tiny.BaseTexture#error
     * @param {Tiny.BaseTexture} baseTexture - Resource errored.
     */

    /**
     * Fired when BaseTexture is updated.
     *
     * @protected
     * @event Tiny.BaseTexture#update
     * @param {Tiny.BaseTexture} baseTexture - Instance of texture being updated.
     */

    /**
     * Fired when BaseTexture is destroyed.
     *
     * @protected
     * @event Tiny.BaseTexture#dispose
     * @param {Tiny.BaseTexture} baseTexture - Instance of texture being destroyed.
     */
    return _this;
  }

  /**
   * Updates the texture on all the webgl renderers, this also assumes the src has changed.
   *
   * @fires update
   */


  _createClass(BaseTexture, [{
    key: 'update',
    value: function update() {
      // Svg size is handled during load
      if (this.imageType !== 'svg') {
        this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width;
        this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height;

        this._updateDimensions();
      }

      this.emit('update', this);
    }

    /**
     * Update dimensions from real values
     */

  }, {
    key: '_updateDimensions',
    value: function _updateDimensions() {
      this.width = this.realWidth / this.resolution;
      this.height = this.realHeight / this.resolution;

      this.isPowerOfTwo = _bitTwiddle2.default.isPow2(this.realWidth) && _bitTwiddle2.default.isPow2(this.realHeight);
    }

    /**
     * Load a source.
     *
     * If the source is not-immediately-available, such as an image that needs to be
     * downloaded, then the 'loaded' or 'error' event will be dispatched in the future
     * and `hasLoaded` will remain false after this call.
     *
     * The logic state after calling `loadSource` directly or indirectly (eg. `fromImage`, `new BaseTexture`) is:
     *
     *     if (texture.hasLoaded) {
     *        // texture ready for use
     *     } else if (texture.isLoading) {
     *        // listen to 'loaded' and/or 'error' events on texture
     *     } else {
     *        // not loading, not going to load UNLESS the source is reloaded
     *        // (it may still make sense to listen to the events)
     *     }
     *
     * @protected
     * @param {HTMLImageElement|HTMLCanvasElement} source - the source object of the texture.
     */

  }, {
    key: 'loadSource',
    value: function loadSource(source) {
      var wasLoading = this.isLoading;

      this.hasLoaded = false;
      this.isLoading = false;

      if (wasLoading && this.source) {
        this.source.onload = null;
        this.source.onerror = null;
      }

      var firstSourceLoaded = !this.source;

      this.source = source;

      // Apply source if loaded. Otherwise setup appropriate loading monitors.
      if ((source.src && source.complete || source.getContext) && source.width && source.height) {
        this._updateImageType();

        if (this.imageType === 'svg') {
          this._loadSvgSource();
        } else {
          this._sourceLoaded();
        }

        if (firstSourceLoaded) {
          // send loaded event if previous source was null and we have been passed a pre-loaded IMG element
          this.emit('loaded', this);
        }
      } else if (!source.getContext) {
        // Image fail / not ready
        this.isLoading = true;

        var scope = this;

        source.onload = function () {
          scope._updateImageType();
          source.onload = null;
          source.onerror = null;

          if (!scope.isLoading) {
            return;
          }

          scope.isLoading = false;
          scope._sourceLoaded();

          if (scope.imageType === 'svg') {
            scope._loadSvgSource();

            return;
          }

          scope.emit('loaded', scope);
        };

        source.onerror = function () {
          source.onload = null;
          source.onerror = null;

          if (!scope.isLoading) {
            return;
          }

          scope.isLoading = false;
          scope.emit('error', scope);
        };

        // Per http://www.w3.org/TR/html5/embedded-content-0.html#the-img-element
        //   "The value of `complete` can thus change while a script is executing."
        // So complete needs to be re-checked after the callbacks have been added..
        // NOTE: complete will be true if the image has no src so best to check if the src is set.
        if (source.complete && source.src) {
          // ..and if we're complete now, no need for callbacks
          source.onload = null;
          source.onerror = null;

          if (scope.imageType === 'svg') {
            scope._loadSvgSource();

            return;
          }

          this.isLoading = false;

          if (source.width && source.height) {
            this._sourceLoaded();

            // If any previous subscribers possible
            if (wasLoading) {
              this.emit('loaded', this);
            }
          } else if (wasLoading) {
            // If any previous subscribers possible
            this.emit('error', this);
          }
        }
      }
    }

    /**
     * Updates type of the source image.
     */

  }, {
    key: '_updateImageType',
    value: function _updateImageType() {
      if (!this.imageUrl) {
        return;
      }

      var dataUri = (0, _utils.decomposeDataUri)(this.imageUrl);
      var imageType = void 0;

      if (dataUri && dataUri.mediaType === 'image') {
        // Check for subType validity
        var firstSubType = dataUri.subType.split('+')[0];

        imageType = (0, _utils.getUrlFileExtension)('.' + firstSubType);

        if (!imageType) {
          throw new Error('Invalid image type in data URI.');
        }
      } else {
        imageType = (0, _utils.getUrlFileExtension)(this.imageUrl);

        if (!imageType) {
          imageType = 'png';
        }
      }

      this.imageType = imageType;
    }

    /**
     * Checks if `source` is an SVG image and whether it's loaded via a URL or a data URI. Then calls
     * `_loadSvgSourceUsingDataUri` or `_loadSvgSourceUsingXhr`.
     */

  }, {
    key: '_loadSvgSource',
    value: function _loadSvgSource() {
      if (this.imageType !== 'svg') {
        // Do nothing if source is not svg
        return;
      }

      var dataUri = (0, _utils.decomposeDataUri)(this.imageUrl);

      if (dataUri) {
        this._loadSvgSourceUsingDataUri(dataUri);
      } else {
        // We got an URL, so we need to do an XHR to check the svg size
        this._loadSvgSourceUsingXhr();
      }
    }

    /**
     * Reads an SVG string from data URI and then calls `_loadSvgSourceUsingString`.
     *
     * @param {string} dataUri - The data uri to load from.
     */

  }, {
    key: '_loadSvgSourceUsingDataUri',
    value: function _loadSvgSourceUsingDataUri(dataUri) {
      var svgString = void 0;

      if (dataUri.encoding === 'base64') {
        if (!atob) {
          throw new Error('Your browser doesn\'t support base64 conversions.');
        }
        svgString = atob(dataUri.data);
      } else {
        svgString = dataUri.data;
      }

      this._loadSvgSourceUsingString(svgString);
    }

    /**
     * Loads an SVG string from `imageUrl` using XHR and then calls `_loadSvgSourceUsingString`.
     */

  }, {
    key: '_loadSvgSourceUsingXhr',
    value: function _loadSvgSourceUsingXhr() {
      var _this2 = this;

      var svgXhr = new XMLHttpRequest();

      // This throws error on IE, so SVG Document can't be used
      // svgXhr.responseType = 'document';

      // This is not needed since we load the svg as string (breaks IE too)
      // but overrideMimeType() can be used to force the response to be parsed as XML
      // svgXhr.overrideMimeType('image/svg+xml');

      svgXhr.onload = function () {
        if (svgXhr.readyState !== svgXhr.DONE || svgXhr.status !== 200) {
          throw new Error('Failed to load SVG using XHR.');
        }

        _this2._loadSvgSourceUsingString(svgXhr.response);
      };

      svgXhr.onerror = function () {
        return _this2.emit('error', _this2);
      };

      svgXhr.open('GET', this.imageUrl, true);
      svgXhr.send();
    }

    /**
     * Loads texture using an SVG string. The original SVG Image is stored as `origSource` and the
     * created canvas is the new `source`. The SVG is scaled using `sourceScale`. Called by
     * `_loadSvgSourceUsingXhr` or `_loadSvgSourceUsingDataUri`.
     *
     * @param  {string} svgString SVG source as string
     *
     * @fires Tiny.BaseTexture#loaded
     */

  }, {
    key: '_loadSvgSourceUsingString',
    value: function _loadSvgSourceUsingString(svgString) {
      var svgSize = (0, _utils.getSvgSize)(svgString);

      var svgWidth = svgSize.width;
      var svgHeight = svgSize.height;

      if (!svgWidth || !svgHeight) {
        throw new Error('The SVG image must have width and height defined (in pixels), canvas API needs them.');
      }

      // Scale realWidth and realHeight
      this.realWidth = Math.round(svgWidth * this.sourceScale);
      this.realHeight = Math.round(svgHeight * this.sourceScale);

      this._updateDimensions();

      // Create a canvas element
      var canvas = document.createElement('canvas');

      canvas.width = this.realWidth;
      canvas.height = this.realHeight;
      canvas._tinyId = 'canvas_' + (0, _utils.uid)();

      // Draw the Svg to the canvas
      canvas.getContext('2d').drawImage(this.source, 0, 0, svgWidth, svgHeight, 0, 0, this.realWidth, this.realHeight);

      // Replace the original source image with the canvas
      this.origSource = this.source;
      this.source = canvas;

      // Add also the canvas in cache (destroy clears by `imageUrl` and `source._tinyId`)
      BaseTexture.addToCache(this, canvas._tinyId);

      this.isLoading = false;
      this._sourceLoaded();
      this.emit('loaded', this);
    }

    /**
     * Used internally to update the width, height, and some other tracking vars once
     * a source has successfully loaded.
     *
     * @private
     */

  }, {
    key: '_sourceLoaded',
    value: function _sourceLoaded() {
      this.hasLoaded = true;
      this.update();
    }

    /**
     * Destroys this base texture
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      if (this.imageUrl) {
        delete _utils.TextureCache[this.imageUrl];

        this.imageUrl = null;

        if (!navigator.isCocoonJS) {
          this.source.src = '';
        }
      }

      this.source = null;

      this.dispose();

      BaseTexture.removeFromCache(this);
      this.textureCacheIds = null;

      this._destroyed = true;
    }

    /**
     * Frees the texture from WebGL memory without destroying this texture object.
     * This means you can still use the texture later which will upload it to GPU
     * memory again.
     *
     */

  }, {
    key: 'dispose',
    value: function dispose() {
      this.emit('dispose', this);
    }

    /**
     * Changes the source image of the texture.
     * The original source must be an Image element.
     *
     * @param {string} newSrc - the path of the image
     */

  }, {
    key: 'updateSourceImage',
    value: function updateSourceImage(newSrc) {
      this.source.src = newSrc;

      this.loadSource(this.source);
    }

    /**
     * Helper function that creates a base texture from the given image url.
     * If the image is not in the base texture cache it will be created and loaded.
     *
     * @static
     * @param {string} imageUrl - The image url of the texture
     * @param {boolean} [crossorigin=(auto)] - Should use anonymous CORS? Defaults to true if the URL is not a data-URI.
     * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
     * @param {number} [sourceScale=(auto)] - Scale for the original image, used with Svg images.
     * @return {Tiny.BaseTexture} The new base texture.
     */

  }], [{
    key: 'fromImage',
    value: function fromImage(imageUrl, crossorigin, scaleMode, sourceScale) {
      var baseTexture = _utils.BaseTextureCache[imageUrl];

      if (!baseTexture) {
        // new Image() breaks tex loading in some versions of Chrome.
        // See https://code.google.com/p/chromium/issues/detail?id=238071
        var image = new Image(); // document.createElement('img');

        if (crossorigin === undefined && imageUrl.indexOf('data:') !== 0) {
          image.crossOrigin = (0, _determineCrossOrigin2.default)(imageUrl);
        }

        baseTexture = new BaseTexture(image, scaleMode);
        baseTexture.imageUrl = imageUrl;

        if (sourceScale) {
          baseTexture.sourceScale = sourceScale;
        }

        // if there is an @2x at the end of the url we are going to assume its a highres image
        baseTexture.resolution = (0, _utils.getResolutionOfUrl)(imageUrl);

        image.src = imageUrl; // Setting this triggers load

        BaseTexture.addToCache(baseTexture, imageUrl);
      }

      return baseTexture;
    }

    /**
     * Helper function that creates a base texture from the given canvas element.
     *
     * @static
     * @param {HTMLCanvasElement} canvas - The canvas element source of the texture
     * @param {number} scaleMode - See {@link Tiny.SCALE_MODES} for possible values
     * @param {string} [origin='canvas'] - A string origin of who created the base texture
     * @return {Tiny.BaseTexture} The new base texture.
     */

  }, {
    key: 'fromCanvas',
    value: function fromCanvas(canvas, scaleMode) {
      var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'canvas';

      if (!canvas._tinyId) {
        canvas._tinyId = origin + '_' + (0, _utils.uid)();
      }

      var baseTexture = _utils.BaseTextureCache[canvas._tinyId];

      if (!baseTexture) {
        baseTexture = new BaseTexture(canvas, scaleMode);
        BaseTexture.addToCache(baseTexture, canvas._tinyId);
      }

      return baseTexture;
    }

    /**
     * Helper function that creates a base texture based on the source you provide.
     * The source can be - image url, image element, canvas element.
     *
     * @static
     * @param {string|HTMLImageElement|HTMLCanvasElement} source - The source to create base texture from.
     * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
     * @param {number} [sourceScale=(auto)] - Scale for the original image, used with Svg images.
     * @return {Tiny.BaseTexture} The new base texture.
     */

  }, {
    key: 'from',
    value: function from(source, scaleMode, sourceScale) {
      if (typeof source === 'string') {
        return BaseTexture.fromImage(source, undefined, scaleMode, sourceScale);
      } else if (source instanceof HTMLImageElement) {
        var imageUrl = source.src;
        var baseTexture = _utils.BaseTextureCache[imageUrl];

        if (!baseTexture) {
          baseTexture = new BaseTexture(source, scaleMode);
          baseTexture.imageUrl = imageUrl;

          if (sourceScale) {
            baseTexture.sourceScale = sourceScale;
          }

          // if there is an @2x at the end of the url we are going to assume its a highres image
          baseTexture.resolution = (0, _utils.getResolutionOfUrl)(imageUrl);

          BaseTexture.addToCache(baseTexture, imageUrl);
        }

        return baseTexture;
      } else if (source instanceof HTMLCanvasElement) {
        return BaseTexture.fromCanvas(source, scaleMode);
      }

      // lets assume its a base texture!
      return source;
    }

    /**
     * Adds a BaseTexture to the global BaseTextureCache. This cache is shared across the whole Tiny object.
     *
     * @static
     * @param {Tiny.BaseTexture} baseTexture - The BaseTexture to add to the cache.
     * @param {string} id - The id that the BaseTexture will be stored against.
     */

  }, {
    key: 'addToCache',
    value: function addToCache(baseTexture, id) {
      if (id) {
        if (baseTexture.textureCacheIds.indexOf(id) === -1) {
          baseTexture.textureCacheIds.push(id);
        }

        // @if DEBUG
        /* eslint-disable no-console */
        if (_utils.BaseTextureCache[id]) {
          console.warn('BaseTexture added to the cache with an id [' + id + '] that already had an entry');
        }
        /* eslint-enable no-console */
        // @endif

        _utils.BaseTextureCache[id] = baseTexture;
      }
    }

    /**
     * Remove a BaseTexture from the global BaseTextureCache.
     *
     * @static
     * @param {string|Tiny.BaseTexture} baseTexture - id of a BaseTexture to be removed, or a BaseTexture instance itself.
     * @return {Tiny.BaseTexture|null} The BaseTexture that was removed.
     */

  }, {
    key: 'removeFromCache',
    value: function removeFromCache(baseTexture) {
      if (typeof baseTexture === 'string') {
        var baseTextureFromCache = _utils.BaseTextureCache[baseTexture];

        if (baseTextureFromCache) {
          var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);

          if (index > -1) {
            baseTextureFromCache.textureCacheIds.splice(index, 1);
          }

          delete _utils.BaseTextureCache[baseTexture];

          return baseTextureFromCache;
        }
      } else if (baseTexture && baseTexture.textureCacheIds) {
        for (var i = 0; i < baseTexture.textureCacheIds.length; ++i) {
          delete _utils.BaseTextureCache[baseTexture.textureCacheIds[i]];
        }

        baseTexture.textureCacheIds.length = 0;

        return baseTexture;
      }

      return null;
    }
  }]);

  return BaseTexture;
}(_eventemitter2.default);

exports.default = BaseTexture;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 *
 * @version v16.10.0
 */

var _Group = function _Group() {
  this._tweens = {};
  this._tweensAddedDuringUpdate = {};
};

_Group.prototype = {
  getAll: function getAll() {
    return Object.keys(this._tweens).map(function (tweenId) {
      return this._tweens[tweenId];
    }.bind(this));
  },

  removeAll: function removeAll() {
    this._tweens = {};
  },

  add: function add(tween) {
    this._tweens[tween.getId()] = tween;
    this._tweensAddedDuringUpdate[tween.getId()] = tween;
  },

  remove: function remove(tween) {
    delete this._tweens[tween.getId()];
    delete this._tweensAddedDuringUpdate[tween.getId()];
  },

  update: function update(time, preserve) {
    var tweenIds = Object.keys(this._tweens);

    if (tweenIds.length === 0) {
      return false;
    }

    time = time !== undefined ? time : TWEEN.now();

    // Tweens are updated in "batches". If you add a new tween during an update, then the
    // new tween will be updated in the next batch.
    // If you remove a tween during an update, it will normally still be updated. However,
    // if the removed tween was added during the current batch, then it will not be updated.
    while (tweenIds.length > 0) {
      this._tweensAddedDuringUpdate = {};

      for (var i = 0; i < tweenIds.length; i++) {
        if (this._tweens[tweenIds[i]] && this._tweens[tweenIds[i]]._isPlaying) {
          var t = this._tweens[tweenIds[i]]._passedTime;
          if (this._tweens[tweenIds[i]].update(t ? time - t : time) === false) {
            this._tweens[tweenIds[i]] && (this._tweens[tweenIds[i]]._isPlaying = false);

            if (!preserve) {
              delete this._tweens[tweenIds[i]];
            }
          }
        }
      }

      tweenIds = Object.keys(this._tweensAddedDuringUpdate);
    }

    return true;
  },

  pause: function pause() {
    var tweenIds = Object.keys(this._tweens);

    if (tweenIds.length === 0) {
      return false;
    }

    for (var i = 0; i < tweenIds.length; i++) {
      this._tweens[tweenIds[i]].pause();
    }
  },

  resume: function resume() {
    var tweenIds = Object.keys(this._tweens);

    if (tweenIds.length === 0) {
      return false;
    }

    for (var i = 0; i < tweenIds.length; i++) {
      this._tweens[tweenIds[i]].resume();
    }
  }
};

var TWEEN = new _Group();
TWEEN.Group = _Group;

TWEEN._nextId = 0;
TWEEN.nextId = function () {
  return TWEEN._nextId++;
};

// Include a performance.now polyfill.
// In node.js, use process.hrtime.
if (typeof window === 'undefined' && typeof process !== 'undefined') {
  TWEEN.now = function () {
    var time = process.hrtime();

    // Convert [seconds, nanoseconds] to milliseconds.
    return time[0] * 1000 + time[1] / 1000000;
  };
} else if (typeof window !== 'undefined' && // In a browser, use window.performance.now if it is available.
window.performance !== undefined && window.performance.now !== undefined) {
  // This must be bound, because directly assigning this function
  // leads to an invocation exception in Chrome.
  TWEEN.now = window.performance.now.bind(window.performance);
} else if (Date.now !== undefined) {
  // Use Date.now if it is available.
  TWEEN.now = Date.now;
} else {
  // Otherwise, use 'new Date().getTime()'.
  TWEEN.now = function () {
    return new Date().getTime();
  };
}

TWEEN.Tween = function (object, group) {
  this._object = object;
  this._valuesStart = {};
  this._valuesEnd = {};
  this._valuesStartRepeat = {};
  this._duration = 1000;
  this._repeat = 0;
  this._repeatDelayTime = undefined;
  this._yoyo = false;
  this._isPlaying = false;
  this._reversed = false;
  this._pauseTime = 0;
  this._passedTime = 0;
  this._delayTime = 0;
  this._startTime = null;
  this._easingFunction = TWEEN.Easing.Linear.None;
  this._interpolationFunction = TWEEN.Interpolation.Linear;
  this._chainedTweens = [];
  this._onStartCallback = null;
  this._onStartCallbackFired = false;
  this._onUpdateCallback = null;
  this._onCompleteCallback = null;
  this._onStopCallback = null;
  this._group = group || TWEEN;
  this._id = TWEEN.nextId();
};

TWEEN.Tween.prototype = {
  getId: function getId() {
    return this._id;
  },

  isPlaying: function isPlaying() {
    return this._isPlaying;
  },

  to: function to(properties, duration) {
    this._valuesEnd = properties;

    if (duration !== undefined) {
      this._duration = duration;
    }

    return this;
  },

  start: function start(time) {
    this._group.add(this);

    this._isPlaying = true;

    this._onStartCallbackFired = false;

    this._startTime = time !== undefined ? time : TWEEN.now();
    this._startTime += this._delayTime;

    for (var property in this._valuesEnd) {
      // Check if an Array was provided as property value
      if (this._valuesEnd[property] instanceof Array) {
        if (this._valuesEnd[property].length === 0) {
          continue;
        }

        // Create a local copy of the Array with the start value at the front
        this._valuesEnd[property] = [this._object[property]].concat(this._valuesEnd[property]);
      }

      // If `to()` specifies a property that doesn't exist in the source object,
      // we should not set that property in the object
      if (this._object[property] === undefined) {
        continue;
      }

      // Save the starting value.
      this._valuesStart[property] = this._object[property];

      if (this._valuesStart[property] instanceof Array === false) {
        this._valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
      }

      this._valuesStartRepeat[property] = this._valuesStart[property] || 0;
    }

    return this;
  },

  stop: function stop() {
    if (!this._isPlaying) {
      return this;
    }

    this._group.remove(this);
    this._isPlaying = false;

    if (this._onStopCallback !== null) {
      this._onStopCallback.call(this._object, this._object);
    }

    this.stopChainedTweens();
    return this;
  },

  pause: function pause() {
    if (!this._isPlaying) {
      return this;
    }
    this._isPlaying = false;
    this._pauseTime = TWEEN.now() - this._passedTime;
  },

  resume: function resume() {
    if (this._isPlaying) {
      return this;
    }
    this._isPlaying = true;
    this._passedTime = TWEEN.now() - this._pauseTime;
  },

  end: function end() {
    this.update(this._startTime + this._duration);
    return this;
  },

  stopChainedTweens: function stopChainedTweens() {
    for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
      this._chainedTweens[i].stop();
    }
  },

  delay: function delay(amount) {
    this._delayTime = amount;
    return this;
  },

  repeat: function repeat(times) {
    this._repeat = times;
    return this;
  },

  repeatDelay: function repeatDelay(amount) {
    this._repeatDelayTime = amount;
    return this;
  },

  yoyo: function yoyo(yoyo) {
    this._yoyo = yoyo;
    return this;
  },

  easing: function easing(easing) {
    this._easingFunction = easing;
    return this;
  },

  interpolation: function interpolation(interpolation) {
    this._interpolationFunction = interpolation;
    return this;
  },

  chain: function chain() {
    this._chainedTweens = arguments;
    return this;
  },

  onStart: function onStart(callback) {
    this._onStartCallback = callback;
    return this;
  },

  onUpdate: function onUpdate(callback) {
    this._onUpdateCallback = callback;
    return this;
  },

  onComplete: function onComplete(callback) {
    this._passedTime = 0;
    this._onCompleteCallback = callback;
    return this;
  },

  onStop: function onStop(callback) {
    this._onStopCallback = callback;
    return this;
  },

  update: function update(time) {
    var property;
    var elapsed;
    var value;

    if (time < this._startTime) {
      return true;
    }

    if (this._onStartCallbackFired === false) {
      if (this._onStartCallback !== null) {
        this._onStartCallback.call(this._object, this._object);
      }

      this._onStartCallbackFired = true;
    }

    elapsed = (time - this._startTime) / this._duration;
    elapsed = elapsed > 1 ? 1 : elapsed;

    value = this._easingFunction(elapsed);

    for (property in this._valuesEnd) {
      // Don't update properties that do not exist in the source object
      if (this._valuesStart[property] === undefined) {
        continue;
      }

      var start = this._valuesStart[property] || 0;
      var end = this._valuesEnd[property];

      if (end instanceof Array) {
        this._object[property] = this._interpolationFunction(end, value);
      } else {
        // Parses relative end values with start as base (e.g.: +10, -3)
        if (typeof end === 'string') {
          if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            end = start + parseFloat(end);
          } else {
            end = parseFloat(end);
          }
        }

        // Protect against non numeric properties.
        if (typeof end === 'number') {
          this._object[property] = start + (end - start) * value;
        }
      }
    }

    if (this._onUpdateCallback !== null) {
      this._onUpdateCallback.call(this._object, value);
    }

    if (elapsed === 1) {
      if (this._repeat > 0) {
        if (isFinite(this._repeat)) {
          this._repeat--;
        }

        // Reassign starting values, restart by making startTime = now
        for (property in this._valuesStartRepeat) {
          if (typeof this._valuesEnd[property] === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
          }

          if (this._yoyo) {
            var tmp = this._valuesStartRepeat[property];

            this._valuesStartRepeat[property] = this._valuesEnd[property];
            this._valuesEnd[property] = tmp;
          }

          this._valuesStart[property] = this._valuesStartRepeat[property];
        }

        if (this._yoyo) {
          this._reversed = !this._reversed;
        }

        if (this._repeatDelayTime !== undefined) {
          this._startTime = time + this._repeatDelayTime;
        } else {
          this._startTime = time + this._delayTime;
        }

        return true;
      } else {
        if (this._onCompleteCallback !== null) {
          this._onCompleteCallback.call(this._object, this._object);
        }

        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
          // Make the chained tweens start exactly at the time they should,
          // even if the `update()` method was called way past the duration of the tween
          this._chainedTweens[i].start(this._startTime + this._duration);
        }

        return false;
      }
    }

    return true;
  }
};

TWEEN.Easing = {

  Linear: {
    None: function None(k) {
      return k;
    }
  },

  Quadratic: {
    In: function In(k) {
      return k * k;
    },

    Out: function Out(k) {
      return k * (2 - k);
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k;
      }

      return -0.5 * (--k * (k - 2) - 1);
    }

  },

  Cubic: {
    In: function In(k) {
      return k * k * k;
    },

    Out: function Out(k) {
      return --k * k * k + 1;
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k + 2);
    }

  },

  Quartic: {
    In: function In(k) {
      return k * k * k * k;
    },

    Out: function Out(k) {
      return 1 - --k * k * k * k;
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k;
      }

      return -0.5 * ((k -= 2) * k * k * k - 2);
    }

  },

  Quintic: {
    In: function In(k) {
      return k * k * k * k * k;
    },

    Out: function Out(k) {
      return --k * k * k * k * k + 1;
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return 0.5 * k * k * k * k * k;
      }

      return 0.5 * ((k -= 2) * k * k * k * k + 2);
    }

  },

  Sinusoidal: {
    In: function In(k) {
      return 1 - Math.cos(k * Math.PI / 2);
    },

    Out: function Out(k) {
      return Math.sin(k * Math.PI / 2);
    },

    InOut: function InOut(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

  },

  Exponential: {
    In: function In(k) {
      return k === 0 ? 0 : Math.pow(1024, k - 1);
    },

    Out: function Out(k) {
      return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
    },

    InOut: function InOut(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      if ((k *= 2) < 1) {
        return 0.5 * Math.pow(1024, k - 1);
      }

      return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
    }

  },

  Circular: {
    In: function In(k) {
      return 1 - Math.sqrt(1 - k * k);
    },

    Out: function Out(k) {
      return Math.sqrt(1 - --k * k);
    },

    InOut: function InOut(k) {
      if ((k *= 2) < 1) {
        return -0.5 * (Math.sqrt(1 - k * k) - 1);
      }

      return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
    }

  },

  Elastic: {
    In: function In(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
    },

    Out: function Out(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
    },

    InOut: function InOut(k) {
      if (k === 0) {
        return 0;
      }

      if (k === 1) {
        return 1;
      }

      k *= 2;

      if (k < 1) {
        return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
      }

      return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
    }
  },

  Back: {
    In: function In(k) {
      var s = 1.70158;

      return k * k * ((s + 1) * k - s);
    },

    Out: function Out(k) {
      var s = 1.70158;

      return --k * k * ((s + 1) * k + s) + 1;
    },

    InOut: function InOut(k) {
      var s = 1.70158 * 1.525;

      if ((k *= 2) < 1) {
        return 0.5 * (k * k * ((s + 1) * k - s));
      }

      return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
    }
  },

  Bounce: {
    In: function In(k) {
      return 1 - TWEEN.Easing.Bounce.Out(1 - k);
    },

    Out: function Out(k) {
      if (k < 1 / 2.75) {
        return 7.5625 * k * k;
      } else if (k < 2 / 2.75) {
        return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
      } else if (k < 2.5 / 2.75) {
        return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
      } else {
        return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
      }
    },

    InOut: function InOut(k) {
      if (k < 0.5) {
        return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
      }

      return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
    }
  }
};

TWEEN.Interpolation = {
  Linear: function Linear(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.Linear;

    if (k < 0) {
      return fn(v[0], v[1], f);
    }

    if (k > 1) {
      return fn(v[m], v[m - 1], m - f);
    }

    return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
  },

  Bezier: function Bezier(v, k) {
    var b = 0;
    var n = v.length - 1;
    var pw = Math.pow;
    var bn = TWEEN.Interpolation.Utils.Bernstein;

    for (var i = 0; i <= n; i++) {
      b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
    }

    return b;
  },

  CatmullRom: function CatmullRom(v, k) {
    var m = v.length - 1;
    var f = m * k;
    var i = Math.floor(f);
    var fn = TWEEN.Interpolation.Utils.CatmullRom;

    if (v[0] === v[m]) {
      if (k < 0) {
        i = Math.floor(f = m * (1 + k));
      }

      return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
    } else {
      if (k < 0) {
        return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
      }

      if (k > 1) {
        return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
      }

      return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
    }
  },

  Utils: {
    Linear: function Linear(p0, p1, t) {
      return (p1 - p0) * t + p0;
    },

    Bernstein: function Bernstein(n, i) {
      var fc = TWEEN.Interpolation.Utils.Factorial;

      return fc(n) / fc(i) / fc(n - i);
    },

    Factorial: function () {
      var a = [1];

      return function (n) {
        var s = 1;

        if (a[n]) {
          return a[n];
        }

        for (var i = n; i > 1; i--) {
          s *= i;
        }

        a[n] = s;
        return s;
      };
    }(),

    CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
      var v0 = (p2 - p0) * 0.5;
      var v1 = (p3 - p1) * 0.5;
      var t2 = t * t;
      var t3 = t * t2;

      return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
    }
  }
};

exports.default = TWEEN;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pixiGlCore = __webpack_require__(4);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function checkPrecision(src, def) {
  if (src instanceof Array) {
    if (src[0].substring(0, 9) !== 'precision') {
      var copy = src.slice(0);

      copy.unshift('precision ' + def + ' float;');

      return copy;
    }
  } else if (src.substring(0, 9) !== 'precision') {
    return 'precision ' + def + ' float;\n' + src;
  }

  return src;
}

/**
 * Wrapper class, WebGL Shader.
 * Adds precision string if vertexSrc or fragmentSrc have no mention of it.
 *
 * @class
 * @extends GLShader
 * @memberof Tiny
 * @private
 */

var Shader = function (_GLShader) {
  _inherits(Shader, _GLShader);

  /**
   *
   * @param {WebGLRenderingContext} gl - The current WebGL rendering context
   * @param {string|string[]} vertexSrc - The vertex shader source as an array of strings.
   * @param {string|string[]} fragmentSrc - The fragment shader source as an array of strings.
   */
  function Shader(gl, vertexSrc, fragmentSrc) {
    _classCallCheck(this, Shader);

    return _possibleConstructorReturn(this, (Shader.__proto__ || Object.getPrototypeOf(Shader)).call(this, gl, checkPrecision(vertexSrc, _settings2.default.PRECISION_VERTEX), checkPrecision(fragmentSrc, _settings2.default.PRECISION_FRAGMENT)));
  }

  return Shader;
}(_pixiGlCore.GLShader);

exports.default = Shader;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (graphicsData, webGLData, webGLDataNativeLines) {
  if (graphicsData.nativeLines) {
    buildNativeLine(graphicsData, webGLDataNativeLines);
  } else {
    buildLine(graphicsData, webGLData);
  }
};

var _math = __webpack_require__(2);

var _utils = __webpack_require__(1);

/**
 * Builds a line to draw using the poligon method.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {Tiny.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 */
function buildLine(graphicsData, webGLData) {
  // TODO OPTIMISE!
  var points = graphicsData.points;

  if (points.length === 0) {
    return;
  }
  // if the line width is an odd number add 0.5 to align to a whole pixel
  // commenting this out fixes #711 and #1620
  // if (graphicsData.lineWidth%2)
  // {
  //     for (i = 0; i < points.length; i++)
  //     {
  //         points[i] += 0.5;
  //     }
  // }

  // get first and last point.. figure out the middle!
  var firstPoint = new _math.Point(points[0], points[1]);
  var lastPoint = new _math.Point(points[points.length - 2], points[points.length - 1]);

  // if the first point is the last point - gonna have issues :)
  if (firstPoint.x === lastPoint.x && firstPoint.y === lastPoint.y) {
    // need to clone as we are going to slightly modify the shape..
    points = points.slice();

    points.pop();
    points.pop();

    lastPoint = new _math.Point(points[points.length - 2], points[points.length - 1]);

    var midPointX = lastPoint.x + (firstPoint.x - lastPoint.x) * 0.5;
    var midPointY = lastPoint.y + (firstPoint.y - lastPoint.y) * 0.5;

    points.unshift(midPointX, midPointY);
    points.push(midPointX, midPointY);
  }

  var verts = webGLData.points;
  var indices = webGLData.indices;
  var length = points.length / 2;
  var indexCount = points.length;
  var indexStart = verts.length / 6;

  // DRAW the Line
  var width = graphicsData.lineWidth / 2;

  // sort color
  var color = (0, _utils.hex2rgb)(graphicsData.lineColor);
  var alpha = graphicsData.lineAlpha;
  var r = color[0] * alpha;
  var g = color[1] * alpha;
  var b = color[2] * alpha;

  var p1x = points[0];
  var p1y = points[1];
  var p2x = points[2];
  var p2y = points[3];
  var p3x = 0;
  var p3y = 0;

  var perpx = -(p1y - p2y);
  var perpy = p1x - p2x;
  var perp2x = 0;
  var perp2y = 0;
  var perp3x = 0;
  var perp3y = 0;

  var dist = Math.sqrt(perpx * perpx + perpy * perpy);

  perpx /= dist;
  perpy /= dist;
  perpx *= width;
  perpy *= width;

  // start
  verts.push(p1x - perpx, p1y - perpy, r, g, b, alpha);

  verts.push(p1x + perpx, p1y + perpy, r, g, b, alpha);

  for (var i = 1; i < length - 1; ++i) {
    p1x = points[(i - 1) * 2];
    p1y = points[(i - 1) * 2 + 1];

    p2x = points[i * 2];
    p2y = points[i * 2 + 1];

    p3x = points[(i + 1) * 2];
    p3y = points[(i + 1) * 2 + 1];

    perpx = -(p1y - p2y);
    perpy = p1x - p2x;

    dist = Math.sqrt(perpx * perpx + perpy * perpy);
    perpx /= dist;
    perpy /= dist;
    perpx *= width;
    perpy *= width;

    perp2x = -(p2y - p3y);
    perp2y = p2x - p3x;

    dist = Math.sqrt(perp2x * perp2x + perp2y * perp2y);
    perp2x /= dist;
    perp2y /= dist;
    perp2x *= width;
    perp2y *= width;

    var a1 = -perpy + p1y - (-perpy + p2y);
    var b1 = -perpx + p2x - (-perpx + p1x);
    var c1 = (-perpx + p1x) * (-perpy + p2y) - (-perpx + p2x) * (-perpy + p1y);
    var a2 = -perp2y + p3y - (-perp2y + p2y);
    var b2 = -perp2x + p2x - (-perp2x + p3x);
    var c2 = (-perp2x + p3x) * (-perp2y + p2y) - (-perp2x + p2x) * (-perp2y + p3y);

    var denom = a1 * b2 - a2 * b1;

    if (Math.abs(denom) < 0.1) {
      denom += 10.1;
      verts.push(p2x - perpx, p2y - perpy, r, g, b, alpha);

      verts.push(p2x + perpx, p2y + perpy, r, g, b, alpha);

      continue;
    }

    var px = (b1 * c2 - b2 * c1) / denom;
    var py = (a2 * c1 - a1 * c2) / denom;
    var pdist = (px - p2x) * (px - p2x) + (py - p2y) * (py - p2y);

    if (pdist > 196 * width * width) {
      perp3x = perpx - perp2x;
      perp3y = perpy - perp2y;

      dist = Math.sqrt(perp3x * perp3x + perp3y * perp3y);
      perp3x /= dist;
      perp3y /= dist;
      perp3x *= width;
      perp3y *= width;

      verts.push(p2x - perp3x, p2y - perp3y);
      verts.push(r, g, b, alpha);

      verts.push(p2x + perp3x, p2y + perp3y);
      verts.push(r, g, b, alpha);

      verts.push(p2x - perp3x, p2y - perp3y);
      verts.push(r, g, b, alpha);

      indexCount++;
    } else {
      verts.push(px, py);
      verts.push(r, g, b, alpha);

      verts.push(p2x - (px - p2x), p2y - (py - p2y));
      verts.push(r, g, b, alpha);
    }
  }

  p1x = points[(length - 2) * 2];
  p1y = points[(length - 2) * 2 + 1];

  p2x = points[(length - 1) * 2];
  p2y = points[(length - 1) * 2 + 1];

  perpx = -(p1y - p2y);
  perpy = p1x - p2x;

  dist = Math.sqrt(perpx * perpx + perpy * perpy);
  perpx /= dist;
  perpy /= dist;
  perpx *= width;
  perpy *= width;

  verts.push(p2x - perpx, p2y - perpy);
  verts.push(r, g, b, alpha);

  verts.push(p2x + perpx, p2y + perpy);
  verts.push(r, g, b, alpha);

  indices.push(indexStart);

  for (var _i = 0; _i < indexCount; ++_i) {
    indices.push(indexStart++);
  }

  indices.push(indexStart - 1);
}

/**
 * Builds a line to draw using the gl.drawArrays(gl.LINES) method
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {Tiny.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 */


/**
 * Builds a line to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {Tiny.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildNativeLine(graphicsData, webGLData) {
  var i = 0;
  var points = graphicsData.points;

  if (points.length === 0) return;

  var verts = webGLData.points;
  var length = points.length / 2;

  // sort color
  var color = (0, _utils.hex2rgb)(graphicsData.lineColor);
  var alpha = graphicsData.lineAlpha;
  var r = color[0] * alpha;
  var g = color[1] * alpha;
  var b = color[2] * alpha;

  for (i = 1; i < length; i++) {
    var p1x = points[(i - 1) * 2];
    var p1y = points[(i - 1) * 2 + 1];

    var p2x = points[i * 2];
    var p2y = points[i * 2 + 1];

    verts.push(p1x, p1y);
    verts.push(r, g, b, alpha);

    verts.push(p2x, p2y);
    verts.push(r, g, b, alpha);
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _SystemRenderer2 = __webpack_require__(51);

var _SystemRenderer3 = _interopRequireDefault(_SystemRenderer2);

var _MaskManager = __webpack_require__(111);

var _MaskManager2 = _interopRequireDefault(_MaskManager);

var _StencilManager = __webpack_require__(112);

var _StencilManager2 = _interopRequireDefault(_StencilManager);

var _FilterManager = __webpack_require__(110);

var _FilterManager2 = _interopRequireDefault(_FilterManager);

var _RenderTarget = __webpack_require__(17);

var _RenderTarget2 = _interopRequireDefault(_RenderTarget);

var _ObjectRenderer = __webpack_require__(16);

var _ObjectRenderer2 = _interopRequireDefault(_ObjectRenderer);

var _TextureManager = __webpack_require__(106);

var _TextureManager2 = _interopRequireDefault(_TextureManager);

var _BaseTexture = __webpack_require__(11);

var _BaseTexture2 = _interopRequireDefault(_BaseTexture);

var _TextureGarbageCollector = __webpack_require__(105);

var _TextureGarbageCollector2 = _interopRequireDefault(_TextureGarbageCollector);

var _WebGLState = __webpack_require__(107);

var _WebGLState2 = _interopRequireDefault(_WebGLState);

var _mapWebGLDrawModesToTiny = __webpack_require__(115);

var _mapWebGLDrawModesToTiny2 = _interopRequireDefault(_mapWebGLDrawModesToTiny);

var _validateContext = __webpack_require__(116);

var _validateContext2 = _interopRequireDefault(_validateContext);

var _utils = __webpack_require__(1);

var _pixiGlCore = __webpack_require__(4);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CONTEXT_UID = 0;

/**
 * The WebGLRenderer draws the scene and all its content onto a webGL enabled canvas. This renderer
 * should be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.
 * So no need for Sprite Batches or Sprite Clouds.
 * Don't forget to add the view to your DOM or you will not see anything :)
 *
 * @class
 * @memberof Tiny
 * @extends Tiny.SystemRenderer
 */

var WebGLRenderer = function (_SystemRenderer) {
  _inherits(WebGLRenderer, _SystemRenderer);

  /**
   *
   * @param {number}            width                               - the width of the screen
   * @param {number}            height                              - the height of the screen
   * @param {object}            options                             - The optional renderer parameters
   * @param {HTMLCanvasElement} options.view                        - the canvas to use as a view, optional
   * @param {boolean}           options.antialias=false             - sets antialias. If not available natively then FXAA antialiasing is used
   * @param {boolean}           options.autoResize=false            - If the render view is automatically resized, default false
   * @param {boolean}           options.clearBeforeRender=true      - This sets if the CanvasRenderer will clear the canvas or not before the new render pass. If you wish to set this to false, you *must* set preserveDrawingBuffer to `true`.
   * @param {boolean}           options.legacy=false                - If true Tiny will aim to ensure compatibility with older / less advanced devices. If you experiance unexplained flickering try setting this to true.
   * @param {boolean}           options.preserveDrawingBuffer=false - enables drawing buffer preservation, enable this if you need to call toDataUrl on the webgl context.
   * @param {number}            options.resolution=1                - The resolution / device pixel ratio of the renderer. The resolution of the renderer retina would be 2.
   * @param {boolean}           options.roundPixels=false           - If true Tiny will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * @param {boolean}           options.transparent=false           - If the render view is transparent, default false
   */
  function WebGLRenderer(width, height, options) {
    _classCallCheck(this, WebGLRenderer);

    var _this = _possibleConstructorReturn(this, (WebGLRenderer.__proto__ || Object.getPrototypeOf(WebGLRenderer)).call(this, 'WebGL', width, height, options));

    _this.legacy = _this.options.legacy;

    if (_this.legacy) {
      _pixiGlCore2.default.VertexArrayObject.FORCE_NATIVE = true;
    }

    /**
     * The type of this renderer as a standardised const
     *
     * @member {number}
     * @see Tiny.RENDERER_TYPE
     */
    _this.type = _const.RENDERER_TYPE.WEBGL;

    _this.handleContextLost = _this.handleContextLost.bind(_this);
    _this.handleContextRestored = _this.handleContextRestored.bind(_this);

    _this.view.addEventListener('webglcontextlost', _this.handleContextLost, false);
    _this.view.addEventListener('webglcontextrestored', _this.handleContextRestored, false);

    /**
     * The options passed in to create a new webgl context.
     *
     * @member {object}
     * @private
     */
    _this._contextOptions = {
      alpha: _this.transparent,
      antialias: _this.options.antialias,
      premultipliedAlpha: _this.transparent && _this.transparent !== 'notMultiplied',
      stencil: true,
      preserveDrawingBuffer: _this.options.preserveDrawingBuffer
    };

    _this._backgroundColorRgba[3] = _this.transparent ? 0 : 1;

    /**
     * Manages the masks using the stencil buffer.
     *
     * @member {Tiny.MaskManager}
     */
    _this.maskManager = new _MaskManager2.default(_this);

    /**
     * Manages the stencil buffer.
     *
     * @member {Tiny.StencilManager}
     */
    _this.stencilManager = new _StencilManager2.default(_this);

    /**
     * An empty renderer.
     *
     * @member {Tiny.ObjectRenderer}
     */
    _this.emptyRenderer = new _ObjectRenderer2.default(_this);

    /**
     * The currently active ObjectRenderer.
     *
     * @member {Tiny.ObjectRenderer}
     */
    _this.currentRenderer = _this.emptyRenderer;

    _this.initPlugins();

    /**
     * The current WebGL rendering context, it is created here
     *
     * @member {WebGLRenderingContext}
     */
    // initialize the context so it is ready for the managers.
    if (_this.options.context) {
      // checks to see if a context is valid..
      (0, _validateContext2.default)(_this.options.context);
    }

    _this.gl = _this.options.context || _pixiGlCore2.default.createContext(_this.view, _this._contextOptions);

    _this.CONTEXT_UID = CONTEXT_UID++;

    /**
     * The currently active ObjectRenderer.
     *
     * @member {Tiny.WebGLState}
     */
    _this.state = new _WebGLState2.default(_this.gl);

    _this.renderingToScreen = true;

    /**
     * Holds the current state of textures bound to the GPU.
     * @type {Array}
     */
    _this.boundTextures = null;

    /**
     * Holds the current shader
     *
     * @member {Tiny.Shader}
     */
    _this._activeShader = null;

    _this._activeVao = null;

    /**
     * Holds the current render target
     *
     * @member {Tiny.RenderTarget}
     */
    _this._activeRenderTarget = null;

    _this._initContext();

    /**
     * Manages the filters.
     *
     * @member {Tiny.FilterManager}
     */
    _this.filterManager = new _FilterManager2.default(_this);
    // map some webGL blend and drawmodes..
    _this.drawModes = (0, _mapWebGLDrawModesToTiny2.default)(_this.gl);

    _this._nextTextureLocation = 0;

    _this.setBlendMode(0);

    /**
     * Fired after rendering finishes.
     *
     * @event Tiny.WebGLRenderer#postrender
     */

    /**
     * Fired before rendering starts.
     *
     * @event Tiny.WebGLRenderer#prerender
     */

    /**
     * Fired when the WebGL context is set.
     *
     * @event Tiny.WebGLRenderer#context
     * @param {WebGLRenderingContext} gl - WebGL context.
     */
    return _this;
  }

  /**
   * Creates the WebGL context
   *
   * @private
   */


  _createClass(WebGLRenderer, [{
    key: '_initContext',
    value: function _initContext() {
      var gl = this.gl;

      // restore a context if it was previously lost
      if (gl.isContextLost() && gl.getExtension('WEBGL_lose_context')) {
        gl.getExtension('WEBGL_lose_context').restoreContext();
      }

      var maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);

      this._activeShader = null;
      this._activeVao = null;

      this.boundTextures = new Array(maxTextures);
      this.emptyTextures = new Array(maxTextures);

      // create a texture manager...
      this.textureManager = new _TextureManager2.default(this);
      this.textureGC = new _TextureGarbageCollector2.default(this);

      this.state.resetToDefault();

      this.rootRenderTarget = new _RenderTarget2.default(gl, this.width, this.height, null, this.resolution, true);
      this.rootRenderTarget.clearColor = this._backgroundColorRgba;

      this.bindRenderTarget(this.rootRenderTarget);

      // now lets fill up the textures with empty ones!
      var emptyGLTexture = new _pixiGlCore2.default.GLTexture.fromData(gl, null, 1, 1); // eslint-disable-line

      var tempObj = { _glTextures: {} };

      tempObj._glTextures[this.CONTEXT_UID] = {};

      for (var i = 0; i < maxTextures; i++) {
        var empty = new _BaseTexture2.default();

        empty._glTextures[this.CONTEXT_UID] = emptyGLTexture;

        this.boundTextures[i] = tempObj;
        this.emptyTextures[i] = empty;
        this.bindTexture(null, i);
      }

      this.emit('context', gl);

      // setup the width/height properties and gl viewport
      this.resize(this.screen.width, this.screen.height);
    }

    /**
     * Renders the object to its webGL view
     *
     * @param {Tiny.DisplayObject} displayObject - the object to be rendered
     * @param {Tiny.RenderTexture} renderTexture - The render texture to render to.
     * @param {boolean} [clear] - Should the canvas be cleared before the new render
     * @param {Tiny.Transform} [transform] - A transform to apply to the render texture before rendering.
     * @param {boolean} [skipUpdateTransform] - Should we skip the update transform pass?
     */

  }, {
    key: 'render',
    value: function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
      // can be handy to know!
      this.renderingToScreen = !renderTexture;

      this.emit('prerender');

      // no point rendering if our context has been blown up!
      if (!this.gl || this.gl.isContextLost()) {
        return;
      }

      this._nextTextureLocation = 0;

      if (!renderTexture) {
        this._lastObjectRendered = displayObject;
      }

      if (!skipUpdateTransform) {
        // update the scene graph
        var cacheParent = displayObject.parent;

        displayObject.parent = this._tempDisplayObjectParent;
        displayObject.updateTransform();
        displayObject.parent = cacheParent;
        // displayObject.hitArea = //TODO add a temp hit area
      }

      this.bindRenderTexture(renderTexture, transform);

      this.currentRenderer.start();

      if (clear !== undefined ? clear : this.clearBeforeRender) {
        this._activeRenderTarget.clear();
      }

      displayObject.renderWebGL(this);

      // apply transform..
      this.currentRenderer.flush();

      // this.setObjectRenderer(this.emptyRenderer);

      this.textureGC.update();

      this.emit('postrender');
    }

    /**
     * Changes the current renderer to the one given in parameter
     *
     * @param {Tiny.ObjectRenderer} objectRenderer - The object renderer to use.
     */

  }, {
    key: 'setObjectRenderer',
    value: function setObjectRenderer(objectRenderer) {
      if (this.currentRenderer === objectRenderer) {
        return;
      }

      this.currentRenderer.stop();
      this.currentRenderer = objectRenderer;
      this.currentRenderer.start();
    }

    /**
     * This should be called if you wish to do some custom rendering
     * It will basically render anything that may be batched up such as sprites
     *
     */

  }, {
    key: 'flush',
    value: function flush() {
      this.setObjectRenderer(this.emptyRenderer);
    }

    /**
     * Resizes the webGL view to the specified width and height.
     *
     * @param {number} screenWidth - the new width of the screen
     * @param {number} screenHeight - the new height of the screen
     */

  }, {
    key: 'resize',
    value: function resize(screenWidth, screenHeight) {
      //  if(width * this.resolution === this.width && height * this.resolution === this.height)return;

      _SystemRenderer3.default.prototype.resize.call(this, screenWidth, screenHeight);

      this.rootRenderTarget.resize(screenWidth, screenHeight);

      if (this._activeRenderTarget === this.rootRenderTarget) {
        this.rootRenderTarget.activate();

        if (this._activeShader) {
          this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(true);
        }
      }
    }

    /**
     * Resizes the webGL view to the specified width and height.
     *
     * @param {number} blendMode - the desired blend mode
     */

  }, {
    key: 'setBlendMode',
    value: function setBlendMode(blendMode) {
      this.state.setBlendMode(blendMode);
    }

    /**
     * Erases the active render target and fills the drawing area with a colour
     *
     * @param {number} [clearColor] - The colour
     */

  }, {
    key: 'clear',
    value: function clear(clearColor) {
      this._activeRenderTarget.clear(clearColor);
    }

    /**
     * Sets the transform of the active render target to the given matrix
     *
     * @param {Tiny.Matrix} matrix - The transformation matrix
     */

  }, {
    key: 'setTransform',
    value: function setTransform(matrix) {
      this._activeRenderTarget.transform = matrix;
    }

    /**
     * Erases the render texture and fills the drawing area with a colour
     *
     * @param {Tiny.RenderTexture} renderTexture - The render texture to clear
     * @param {number} [clearColor] - The colour
     * @return {Tiny.WebGLRenderer} Returns itself.
     */

  }, {
    key: 'clearRenderTexture',
    value: function clearRenderTexture(renderTexture, clearColor) {
      var baseTexture = renderTexture.baseTexture;
      var renderTarget = baseTexture._glRenderTargets[this.CONTEXT_UID];

      if (renderTarget) {
        renderTarget.clear(clearColor);
      }

      return this;
    }

    /**
     * Binds a render texture for rendering
     *
     * @param {Tiny.RenderTexture} renderTexture - The render texture to render
     * @param {Tiny.Transform} transform - The transform to be applied to the render texture
     * @return {Tiny.WebGLRenderer} Returns itself.
     */

  }, {
    key: 'bindRenderTexture',
    value: function bindRenderTexture(renderTexture, transform) {
      var renderTarget = void 0;

      if (renderTexture) {
        var baseTexture = renderTexture.baseTexture;

        if (!baseTexture._glRenderTargets[this.CONTEXT_UID]) {
          // bind the current texture
          this.textureManager.updateTexture(baseTexture, 0);
        }

        this.unbindTexture(baseTexture);

        renderTarget = baseTexture._glRenderTargets[this.CONTEXT_UID];
        renderTarget.setFrame(renderTexture.frame);
      } else {
        renderTarget = this.rootRenderTarget;
      }

      renderTarget.transform = transform;
      this.bindRenderTarget(renderTarget);

      return this;
    }

    /**
     * Changes the current render target to the one given in parameter
     *
     * @param {Tiny.RenderTarget} renderTarget - the new render target
     * @return {Tiny.WebGLRenderer} Returns itself.
     */

  }, {
    key: 'bindRenderTarget',
    value: function bindRenderTarget(renderTarget) {
      if (renderTarget !== this._activeRenderTarget) {
        this._activeRenderTarget = renderTarget;
        renderTarget.activate();

        if (this._activeShader) {
          this._activeShader.uniforms.projectionMatrix = renderTarget.projectionMatrix.toArray(true);
        }

        this.stencilManager.setMaskStack(renderTarget.stencilMaskStack);
      }

      return this;
    }

    /**
     * Changes the current shader to the one given in parameter
     *
     * @param {Tiny.Shader} shader - the new shader
     * @param {boolean} [autoProject=true] - Whether automatically set the projection matrix
     * @return {Tiny.WebGLRenderer} Returns itself.
     */

  }, {
    key: 'bindShader',
    value: function bindShader(shader, autoProject) {
      // TODO cache
      if (this._activeShader !== shader) {
        this._activeShader = shader;
        shader.bind();

        // `autoProject` normally would be a default parameter set to true
        // but because of how Babel transpiles default parameters
        // it hinders the performance of this method.
        if (autoProject !== false) {
          // automatically set the projection matrix
          shader.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(true);
        }
      }

      return this;
    }

    /**
     * Binds the texture. This will return the location of the bound texture.
     * It may not be the same as the one you pass in. This is due to optimisation that prevents
     * needless binding of textures. For example if the texture is already bound it will return the
     * current location of the texture instead of the one provided. To bypass this use force location
     *
     * @param {Tiny.Texture} texture - the new texture
     * @param {number} location - the suggested texture location
     * @param {boolean} forceLocation - force the location
     * @return {Tiny.WebGLRenderer} Returns itself.
     */

  }, {
    key: 'bindTexture',
    value: function bindTexture(texture, location, forceLocation) {
      texture = texture || this.emptyTextures[location];
      texture = texture.baseTexture || texture;
      texture.touched = this.textureGC.count;

      if (!forceLocation) {
        // TODO - maybe look into adding boundIds.. save us the loop?
        for (var i = 0; i < this.boundTextures.length; i++) {
          if (this.boundTextures[i] === texture) {
            return i;
          }
        }

        if (location === undefined) {
          this._nextTextureLocation++;
          this._nextTextureLocation %= this.boundTextures.length;
          location = this.boundTextures.length - this._nextTextureLocation - 1;
        }
      } else {
        location = location || 0;
      }

      var gl = this.gl;
      var glTexture = texture._glTextures[this.CONTEXT_UID];

      if (!glTexture) {
        // this will also bind the texture..
        this.textureManager.updateTexture(texture, location);
      } else {
        // bind the current texture
        this.boundTextures[location] = texture;
        gl.activeTexture(gl.TEXTURE0 + location);
        gl.bindTexture(gl.TEXTURE_2D, glTexture.texture);
      }

      return location;
    }

    /**
     * unbinds the texture ...
     *
     * @param {Tiny.Texture} texture - the texture to unbind
     * @return {Tiny.WebGLRenderer} Returns itself.
     */

  }, {
    key: 'unbindTexture',
    value: function unbindTexture(texture) {
      var gl = this.gl;

      texture = texture.baseTexture || texture;

      for (var i = 0; i < this.boundTextures.length; i++) {
        if (this.boundTextures[i] === texture) {
          this.boundTextures[i] = this.emptyTextures[i];

          gl.activeTexture(gl.TEXTURE0 + i);
          gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[i]._glTextures[this.CONTEXT_UID].texture);
        }
      }

      return this;
    }

    /**
     * Creates a new VAO from this renderer's context and state.
     *
     * @return {VertexArrayObject} The new VAO.
     */

  }, {
    key: 'createVao',
    value: function createVao() {
      return new _pixiGlCore2.default.VertexArrayObject(this.gl, this.state.attribState);
    }

    /**
     * Changes the current Vao to the one given in parameter
     *
     * @param {Tiny.VertexArrayObject} vao - the new Vao
     * @return {Tiny.WebGLRenderer} Returns itself.
     */

  }, {
    key: 'bindVao',
    value: function bindVao(vao) {
      if (this._activeVao === vao) {
        return this;
      }

      if (vao) {
        vao.bind();
      } else if (this._activeVao) {
        // TODO this should always be true i think?
        this._activeVao.unbind();
      }

      this._activeVao = vao;

      return this;
    }

    /**
     * Resets the WebGL state so you can render things however you fancy!
     *
     * @return {Tiny.WebGLRenderer} Returns itself.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.setObjectRenderer(this.emptyRenderer);

      this._activeShader = null;
      this._activeRenderTarget = this.rootRenderTarget;

      // bind the main frame buffer (the screen);
      this.rootRenderTarget.activate();

      this.state.resetToDefault();

      return this;
    }

    /**
     * Handles a lost webgl context
     *
     * @private
     * @param {WebGLContextEvent} event - The context lost event.
     */

  }, {
    key: 'handleContextLost',
    value: function handleContextLost(event) {
      event.preventDefault();
    }

    /**
     * Handles a restored webgl context
     *
     * @private
     */

  }, {
    key: 'handleContextRestored',
    value: function handleContextRestored() {
      this.textureManager.removeAll();
      this._initContext();
    }

    /**
     * Removes everything from the renderer (event listeners, spritebatch, etc...)
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     *  See: https://github.com/pixijs/pixi.js/issues/2233
     */

  }, {
    key: 'destroy',
    value: function destroy(removeView) {
      this.destroyPlugins();

      // remove listeners
      this.view.removeEventListener('webglcontextlost', this.handleContextLost);
      this.view.removeEventListener('webglcontextrestored', this.handleContextRestored);

      this.textureManager.destroy();

      // call base destroy
      _get(WebGLRenderer.prototype.__proto__ || Object.getPrototypeOf(WebGLRenderer.prototype), 'destroy', this).call(this, removeView);

      this.uid = 0;

      // destroy the managers
      this.maskManager.destroy();
      this.stencilManager.destroy();
      this.filterManager.destroy();

      this.maskManager = null;
      this.filterManager = null;
      this.textureManager = null;
      this.currentRenderer = null;

      this.handleContextLost = null;
      this.handleContextRestored = null;

      this._contextOptions = null;
      this.gl.useProgram(null);

      if (this.gl.getExtension('WEBGL_lose_context')) {
        this.gl.getExtension('WEBGL_lose_context').loseContext();
      }

      this.gl = null;

      // this = null;
    }
  }]);

  return WebGLRenderer;
}(_SystemRenderer3.default);

/**
 * Collection of installed plugins. These are included by default in Tiny, but can be excluded
 * by creating a custom build. Consult the README for more information about creating custom
 * builds and excluding plugins.
 * @name Tiny.WebGLRenderer#plugins
 * @type {object}
 * @readonly
 * @property {Tiny.accessibility.AccessibilityManager} accessibility Support tabbing interactive elements.
 * @property {Tiny.extract.WebGLExtract} extract Extract image data from renderer.
 * @property {Tiny.interaction.InteractionManager} interaction Handles mouse, touch and pointer events.
 * @property {Tiny.prepare.WebGLPrepare} prepare Pre-render display objects.
 */

/**
 * Adds a plugin to the renderer.
 *
 * @method Tiny.WebGLRenderer#registerPlugin
 * @param {string} pluginName - The name of the plugin.
 * @param {Function} ctor - The constructor function or class for the plugin.
 */

exports.default = WebGLRenderer;
_utils.pluginTarget.mixin(WebGLRenderer);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebGLManager2 = __webpack_require__(10);

var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Base for a common object renderer that can be used as a system renderer plugin.
 *
 * @class
 * @extends Tiny.WebGLManager
 * @memberof Tiny
 */
var ObjectRenderer = function (_WebGLManager) {
  _inherits(ObjectRenderer, _WebGLManager);

  function ObjectRenderer() {
    _classCallCheck(this, ObjectRenderer);

    return _possibleConstructorReturn(this, (ObjectRenderer.__proto__ || Object.getPrototypeOf(ObjectRenderer)).apply(this, arguments));
  }

  _createClass(ObjectRenderer, [{
    key: 'start',

    /**
     * Starts the renderer and sets the shader
     *
     */
    value: function start() {}
    // set the shader..


    /**
     * Stops the renderer
     *
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.flush();
    }

    /**
     * Stub method for rendering content and emptying the current batch.
     *
     */

  }, {
    key: 'flush',
    value: function flush() {}
    // flush!


    /**
     * Renders an object
     *
     * @param {Tiny.DisplayObject} object - The object to render.
     */

  }, {
    key: 'render',
    value: function render(object) {
      // render the object
    }
  }]);

  return ObjectRenderer;
}(_WebGLManager3.default);

exports.default = ObjectRenderer;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(2);

var _const = __webpack_require__(0);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

var _pixiGlCore = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class
 * @memberof Tiny
 */
var RenderTarget = function () {
  /**
   * @param {WebGLRenderingContext} gl - The current WebGL drawing context
   * @param {number} [width=0] - the horizontal range of the filter
   * @param {number} [height=0] - the vertical range of the filter
   * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
   * @param {number} [resolution=1] - The current resolution / device pixel ratio
   * @param {boolean} [root=false] - Whether this object is the root element or not
   */
  function RenderTarget(gl, width, height, scaleMode, resolution, root) {
    _classCallCheck(this, RenderTarget);

    // TODO Resolution could go here ( eg low res blurs )

    /**
     * The current WebGL drawing context.
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    // next time to create a frame buffer and texture

    /**
     * A frame buffer
     *
     * @member {Tiny.glCore.GLFramebuffer}
     */
    this.frameBuffer = null;

    /**
     * The texture
     *
     * @member {Tiny.glCore.GLTexture}
     */
    this.texture = null;

    /**
     * The background colour of this render target, as an array of [r,g,b,a] values
     *
     * @member {number[]}
     */
    this.clearColor = [0, 0, 0, 0];

    /**
     * The size of the object as a rectangle
     *
     * @member {Tiny.Rectangle}
     */
    this.size = new _math.Rectangle(0, 0, 1, 1);

    /**
     * The current resolution / device pixel ratio
     *
     * @member {number}
     * @default 1
     */
    this.resolution = resolution || _settings2.default.RESOLUTION;

    /**
     * The projection matrix
     *
     * @member {Tiny.Matrix}
     */
    this.projectionMatrix = new _math.Matrix();

    /**
     * The object's transform
     *
     * @member {Tiny.Matrix}
     */
    this.transform = null;

    /**
     * The frame.
     *
     * @member {Tiny.Rectangle}
     */
    this.frame = null;

    /**
     * The stencil buffer stores masking data for the render target
     *
     * @member {glCore.GLBuffer}
     */
    this.defaultFrame = new _math.Rectangle();
    this.destinationFrame = null;
    this.sourceFrame = null;

    /**
     * The stencil buffer stores masking data for the render target
     *
     * @member {glCore.GLBuffer}
     */
    this.stencilBuffer = null;

    /**
     * The data structure for the stencil masks
     *
     * @member {Tiny.Graphics[]}
     */
    this.stencilMaskStack = [];

    /**
     * Stores filter data for the render target
     *
     * @member {object[]}
     */
    this.filterData = null;

    /**
     * The scale mode.
     *
     * @member {number}
     * @default Tiny.settings.SCALE_MODE
     * @see Tiny.SCALE_MODES
     */
    this.scaleMode = scaleMode !== undefined ? scaleMode : _settings2.default.SCALE_MODE;

    /**
     * Whether this object is the root element or not
     *
     * @member {boolean}
     */
    this.root = root;

    if (!this.root) {
      this.frameBuffer = _pixiGlCore.GLFramebuffer.createRGBA(gl, 100, 100);

      if (this.scaleMode === _const.SCALE_MODES.NEAREST) {
        this.frameBuffer.texture.enableNearestScaling();
      } else {
        this.frameBuffer.texture.enableLinearScaling();
      }
      /*
       A frame buffer needs a target to render to..
       create a texture and bind it attach it to the framebuffer..
       */

      // this is used by the base texture
      this.texture = this.frameBuffer.texture;
    } else {
      // make it a null framebuffer..
      this.frameBuffer = new _pixiGlCore.GLFramebuffer(gl, 100, 100);
      this.frameBuffer.framebuffer = null;
    }

    this.setFrame();

    this.resize(width, height);
  }

  /**
   * Clears the filter texture.
   *
   * @param {number[]} [clearColor=this.clearColor] - Array of [r,g,b,a] to clear the framebuffer
   */


  _createClass(RenderTarget, [{
    key: 'clear',
    value: function clear(clearColor) {
      var cc = clearColor || this.clearColor;

      this.frameBuffer.clear(cc[0], cc[1], cc[2], cc[3]); // r,g,b,a);
    }

    /**
     * Binds the stencil buffer.
     *
     */

  }, {
    key: 'attachStencilBuffer',
    value: function attachStencilBuffer() {
      // TODO check if stencil is done?
      /**
       * The stencil buffer is used for masking in Tiny
       * lets create one and then add attach it to the framebuffer..
       */
      if (!this.root) {
        this.frameBuffer.enableStencil();
      }
    }

    /**
     * Sets the frame of the render target.
     *
     * @param {Rectangle} destinationFrame - The destination frame.
     * @param {Rectangle} sourceFrame - The source frame.
     */

  }, {
    key: 'setFrame',
    value: function setFrame(destinationFrame, sourceFrame) {
      this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
      this.sourceFrame = sourceFrame || this.sourceFrame || destinationFrame;
    }

    /**
     * Binds the buffers and initialises the viewport.
     *
     */

  }, {
    key: 'activate',
    value: function activate() {
      // TOOD refactor usage of frame..
      var gl = this.gl;

      // make sure the texture is unbound!
      this.frameBuffer.bind();

      this.calculateProjection(this.destinationFrame, this.sourceFrame);

      if (this.transform) {
        this.projectionMatrix.append(this.transform);
      }

      // TODO add a check as them may be the same!
      if (this.destinationFrame !== this.sourceFrame) {
        gl.enable(gl.SCISSOR_TEST);
        gl.scissor(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
      } else {
        gl.disable(gl.SCISSOR_TEST);
      }

      // TODO - does not need to be updated all the time??
      gl.viewport(this.destinationFrame.x | 0, this.destinationFrame.y | 0, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0);
    }

    /**
     * Updates the projection matrix based on a projection frame (which is a rectangle)
     *
     * @param {Rectangle} destinationFrame - The destination frame.
     * @param {Rectangle} sourceFrame - The source frame.
     */

  }, {
    key: 'calculateProjection',
    value: function calculateProjection(destinationFrame, sourceFrame) {
      var pm = this.projectionMatrix;

      sourceFrame = sourceFrame || destinationFrame;

      pm.identity();

      // TODO: make dest scale source
      if (!this.root) {
        pm.a = 1 / destinationFrame.width * 2;
        pm.d = 1 / destinationFrame.height * 2;

        pm.tx = -1 - sourceFrame.x * pm.a;
        pm.ty = -1 - sourceFrame.y * pm.d;
      } else {
        pm.a = 1 / destinationFrame.width * 2;
        pm.d = -1 / destinationFrame.height * 2;

        pm.tx = -1 - sourceFrame.x * pm.a;
        pm.ty = 1 - sourceFrame.y * pm.d;
      }
    }

    /**
     * Resizes the texture to the specified width and height
     *
     * @param {number} width - the new width of the texture
     * @param {number} height - the new height of the texture
     */

  }, {
    key: 'resize',
    value: function resize(width, height) {
      width = width | 0;
      height = height | 0;

      if (this.size.width === width && this.size.height === height) {
        return;
      }

      this.size.width = width;
      this.size.height = height;

      this.defaultFrame.width = width;
      this.defaultFrame.height = height;

      this.frameBuffer.resize(width * this.resolution, height * this.resolution);

      var projectionFrame = this.frame || this.size;

      this.calculateProjection(projectionFrame);
    }

    /**
     * Destroys the render target.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.frameBuffer.destroy();

      this.frameBuffer = null;
      this.texture = null;
    }
  }]);

  return RenderTarget;
}();

exports.default = RenderTarget;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

/**
 * isMobile.js v0.4.1
 *
 * A simple library to detect Apple phones and tablets,
 * Android phones and tablets, other mobile devices (like blackberry, mini-opera and windows phone),
 * and any kind of seven inch device, via user agent sniffing.
 *
 * @author: Kai Mallea (kmallea@gmail.com)
 *
 * @license: http://creativecommons.org/publicdomain/zero/1.0/
 */
(function (global) {

    var apple_phone = /iPhone/i,
        apple_ipod = /iPod/i,
        apple_tablet = /iPad/i,
        android_phone = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
        // Match 'Android' AND 'Mobile'
    android_tablet = /Android/i,
        amazon_phone = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        amazon_tablet = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        windows_phone = /Windows Phone/i,
        windows_tablet = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
        // Match 'Windows' AND 'ARM'
    other_blackberry = /BlackBerry/i,
        other_blackberry_10 = /BB10/i,
        other_opera = /Opera Mini/i,
        other_chrome = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        other_firefox = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
        // Match 'Firefox' AND 'Mobile'
    seven_inch = new RegExp('(?:' + // Non-capturing group

    'Nexus 7' + // Nexus 7

    '|' + // OR

    'BNTV250' + // B&N Nook Tablet 7 inch

    '|' + // OR

    'Kindle Fire' + // Kindle Fire

    '|' + // OR

    'Silk' + // Kindle Fire, Silk Accelerated

    '|' + // OR

    'GT-P1000' + // Galaxy Tab 7 inch

    ')', // End non-capturing group

    'i'); // Case-insensitive matching

    var match = function match(regex, userAgent) {
        return regex.test(userAgent);
    };

    var IsMobileClass = function IsMobileClass(userAgent) {
        var ua = userAgent || navigator.userAgent;

        // Facebook mobile app's integrated browser adds a bunch of strings that
        // match everything. Strip it out if it exists.
        var tmp = ua.split('[FBAN');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        // Twitter mobile app's integrated browser on iPad adds a "Twitter for
        // iPhone" string. Same probable happens on other tablet platforms.
        // This will confuse detection so strip it out if it exists.
        tmp = ua.split('Twitter');
        if (typeof tmp[1] !== 'undefined') {
            ua = tmp[0];
        }

        this.apple = {
            phone: match(apple_phone, ua),
            ipod: match(apple_ipod, ua),
            tablet: !match(apple_phone, ua) && match(apple_tablet, ua),
            device: match(apple_phone, ua) || match(apple_ipod, ua) || match(apple_tablet, ua)
        };
        this.amazon = {
            phone: match(amazon_phone, ua),
            tablet: !match(amazon_phone, ua) && match(amazon_tablet, ua),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua)
        };
        this.android = {
            phone: match(amazon_phone, ua) || match(android_phone, ua),
            tablet: !match(amazon_phone, ua) && !match(android_phone, ua) && (match(amazon_tablet, ua) || match(android_tablet, ua)),
            device: match(amazon_phone, ua) || match(amazon_tablet, ua) || match(android_phone, ua) || match(android_tablet, ua)
        };
        this.windows = {
            phone: match(windows_phone, ua),
            tablet: match(windows_tablet, ua),
            device: match(windows_phone, ua) || match(windows_tablet, ua)
        };
        this.other = {
            blackberry: match(other_blackberry, ua),
            blackberry10: match(other_blackberry_10, ua),
            opera: match(other_opera, ua),
            firefox: match(other_firefox, ua),
            chrome: match(other_chrome, ua),
            device: match(other_blackberry, ua) || match(other_blackberry_10, ua) || match(other_opera, ua) || match(other_firefox, ua) || match(other_chrome, ua)
        };
        this.seven_inch = match(seven_inch, ua);
        this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch;

        // excludes 'other' devices and ipods, targeting touchscreen phones
        this.phone = this.apple.phone || this.android.phone || this.windows.phone;

        // excludes 7 inch devices, classifying as phone or tablet is left to the user
        this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet;

        if (typeof window === 'undefined') {
            return this;
        }
    };

    var instantiate = function instantiate() {
        var IM = new IsMobileClass();
        IM.Class = IsMobileClass;
        return IM;
    };

    if (typeof module !== 'undefined' && module.exports && typeof window === 'undefined') {
        //node
        module.exports = IsMobileClass;
    } else if (typeof module !== 'undefined' && module.exports && typeof window !== 'undefined') {
        //browserify
        module.exports = instantiate();
    } else if (true) {
        //AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (global.isMobile = instantiate()),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        global.isMobile = instantiate();
    }
})(undefined);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Bit twiddling hacks for JavaScript.
 *
 * Author: Mikola Lysenko
 *
 * Ported from Stanford bit twiddling hack library:
 *    http://graphics.stanford.edu/~seander/bithacks.html
 */

"use restrict";

//Number of bits in an integer

var INT_BITS = 32;

//Constants
exports.INT_BITS = INT_BITS;
exports.INT_MAX = 0x7fffffff;
exports.INT_MIN = -1 << INT_BITS - 1;

//Returns -1, 0, +1 depending on sign of x
exports.sign = function (v) {
  return (v > 0) - (v < 0);
};

//Computes absolute value of integer
exports.abs = function (v) {
  var mask = v >> INT_BITS - 1;
  return (v ^ mask) - mask;
};

//Computes minimum of integers x and y
exports.min = function (x, y) {
  return y ^ (x ^ y) & -(x < y);
};

//Computes maximum of integers x and y
exports.max = function (x, y) {
  return x ^ (x ^ y) & -(x < y);
};

//Checks if a number is a power of two
exports.isPow2 = function (v) {
  return !(v & v - 1) && !!v;
};

//Computes log base 2 of v
exports.log2 = function (v) {
  var r, shift;
  r = (v > 0xFFFF) << 4;v >>>= r;
  shift = (v > 0xFF) << 3;v >>>= shift;r |= shift;
  shift = (v > 0xF) << 2;v >>>= shift;r |= shift;
  shift = (v > 0x3) << 1;v >>>= shift;r |= shift;
  return r | v >> 1;
};

//Computes log base 10 of v
exports.log10 = function (v) {
  return v >= 1000000000 ? 9 : v >= 100000000 ? 8 : v >= 10000000 ? 7 : v >= 1000000 ? 6 : v >= 100000 ? 5 : v >= 10000 ? 4 : v >= 1000 ? 3 : v >= 100 ? 2 : v >= 10 ? 1 : 0;
};

//Counts number of bits
exports.popCount = function (v) {
  v = v - (v >>> 1 & 0x55555555);
  v = (v & 0x33333333) + (v >>> 2 & 0x33333333);
  return (v + (v >>> 4) & 0xF0F0F0F) * 0x1010101 >>> 24;
};

//Counts number of trailing zeros
function countTrailingZeros(v) {
  var c = 32;
  v &= -v;
  if (v) c--;
  if (v & 0x0000FFFF) c -= 16;
  if (v & 0x00FF00FF) c -= 8;
  if (v & 0x0F0F0F0F) c -= 4;
  if (v & 0x33333333) c -= 2;
  if (v & 0x55555555) c -= 1;
  return c;
}
exports.countTrailingZeros = countTrailingZeros;

//Rounds to next power of 2
exports.nextPow2 = function (v) {
  v += v === 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
};

//Rounds down to previous power of 2
exports.prevPow2 = function (v) {
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v - (v >>> 1);
};

//Computes parity of word
exports.parity = function (v) {
  v ^= v >>> 16;
  v ^= v >>> 8;
  v ^= v >>> 4;
  v &= 0xf;
  return 0x6996 >>> v & 1;
};

var REVERSE_TABLE = new Array(256);

(function (tab) {
  for (var i = 0; i < 256; ++i) {
    var v = i,
        r = i,
        s = 7;
    for (v >>>= 1; v; v >>>= 1) {
      r <<= 1;
      r |= v & 1;
      --s;
    }
    tab[i] = r << s & 0xff;
  }
})(REVERSE_TABLE);

//Reverse bits in a 32 bit word
exports.reverse = function (v) {
  return REVERSE_TABLE[v & 0xff] << 24 | REVERSE_TABLE[v >>> 8 & 0xff] << 16 | REVERSE_TABLE[v >>> 16 & 0xff] << 8 | REVERSE_TABLE[v >>> 24 & 0xff];
};

//Interleave bits of 2 coordinates with 16 bits.  Useful for fast quadtree codes
exports.interleave2 = function (x, y) {
  x &= 0xFFFF;
  x = (x | x << 8) & 0x00FF00FF;
  x = (x | x << 4) & 0x0F0F0F0F;
  x = (x | x << 2) & 0x33333333;
  x = (x | x << 1) & 0x55555555;

  y &= 0xFFFF;
  y = (y | y << 8) & 0x00FF00FF;
  y = (y | y << 4) & 0x0F0F0F0F;
  y = (y | y << 2) & 0x33333333;
  y = (y | y << 1) & 0x55555555;

  return x | y << 1;
};

//Extracts the nth interleaved component
exports.deinterleave2 = function (v, n) {
  v = v >>> n & 0x55555555;
  v = (v | v >>> 1) & 0x33333333;
  v = (v | v >>> 2) & 0x0F0F0F0F;
  v = (v | v >>> 4) & 0x00FF00FF;
  v = (v | v >>> 16) & 0x000FFFF;
  return v << 16 >> 16;
};

//Interleave bits of 3 coordinates, each with 10 bits.  Useful for fast octree codes
exports.interleave3 = function (x, y, z) {
  x &= 0x3FF;
  x = (x | x << 16) & 4278190335;
  x = (x | x << 8) & 251719695;
  x = (x | x << 4) & 3272356035;
  x = (x | x << 2) & 1227133513;

  y &= 0x3FF;
  y = (y | y << 16) & 4278190335;
  y = (y | y << 8) & 251719695;
  y = (y | y << 4) & 3272356035;
  y = (y | y << 2) & 1227133513;
  x |= y << 1;

  z &= 0x3FF;
  z = (z | z << 16) & 4278190335;
  z = (z | z << 8) & 251719695;
  z = (z | z << 4) & 3272356035;
  z = (z | z << 2) & 1227133513;

  return x | z << 2;
};

//Extracts nth interleaved component of a 3-tuple
exports.deinterleave3 = function (v, n) {
  v = v >>> n & 1227133513;
  v = (v | v >>> 2) & 3272356035;
  v = (v | v >>> 4) & 251719695;
  v = (v | v >>> 8) & 4278190335;
  v = (v | v >>> 16) & 0x3FF;
  return v << 22 >> 22;
};

//Computes next combination in colexicographic order (this is mistakenly called nextPermutation on the bit twiddling hacks page)
exports.nextCombination = function (v) {
  var t = v | v - 1;
  return t + 1 | (~t & -~t) - 1 >>> countTrailingZeros(v) + 1;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapSize = function mapSize(gl, type) {
    if (!GL_TABLE) {
        var typeNames = Object.keys(GL_TO_GLSL_TYPES);

        GL_TABLE = {};

        for (var i = 0; i < typeNames.length; ++i) {
            var tn = typeNames[i];
            GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
        }
    }

    return GL_TABLE[type];
};

var GL_TABLE = null;

var GL_TO_GLSL_TYPES = {
    'FLOAT': 'float',
    'FLOAT_VEC2': 'vec2',
    'FLOAT_VEC3': 'vec3',
    'FLOAT_VEC4': 'vec4',

    'INT': 'int',
    'INT_VEC2': 'ivec2',
    'INT_VEC3': 'ivec3',
    'INT_VEC4': 'ivec4',

    'BOOL': 'bool',
    'BOOL_VEC2': 'bvec2',
    'BOOL_VEC3': 'bvec3',
    'BOOL_VEC4': 'bvec4',

    'FLOAT_MAT2': 'mat2',
    'FLOAT_MAT3': 'mat3',
    'FLOAT_MAT4': 'mat4',

    'SAMPLER_2D': 'sampler2D'
};

module.exports = mapSize;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tween = __webpack_require__(12);

var _tween2 = _interopRequireDefault(_tween);

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 动作类
 *
 * `Action`是对`Tween.js`做的一层封装，你可以很方便的制作动画；你也可以通过`new Tiny.TWEEN.Tween(..)`来直接使用`Tween.js`原生方法
 *
 * @example
 *
 * var action = new Tiny.Action(600, Tiny.point(100, 120));
 * action.yoyo = true;
 * //重复4次
 * action.repeatTimes = 4;
 * //延迟500ms开始
 * action.setDelay(500);
 * //设置动画缓冲为`Quadratic.InOut`
 * action.setEasing(Tiny.TWEEN.Easing.Quadratic.InOut);
 * //运动中更改精灵的坐标
 * action.onUpdate = function (tween, object) {
 *   sprite.setPosition(tween.x, tween.y);
 * };
 * //运动完成后的回调
 * action.onComplete = function (tween, object) {
 *   console.log('complete');
 * };
 *
 * @class
 * @memberof Tiny
 */
var Action = function () {
  /**
   *
   * @param {number} duration 动作持续时间（ms）
   * @param {object} to 运动到的状态
   */
  function Action(duration, to) {
    _classCallCheck(this, Action);

    /**
     * action的唯一name
     *
     * @member {string}
     * @default ''
     * @private
     */
    this.name = '';

    /**
     * 当前 action 对应的 tween 对象
     *
     * @type {Tiny.TWEEN.Tween}
     * @version 1.0.2
     */
    this.tween = null;

    /**
     * 动画持续时间
     * > 注意：无论帧频是多少，都会在这个时间内完成动画
     *
     * @member {number}
     */
    this.duration = duration;

    /**
     * 动画需要达到的目标形态的属性
     * @member {object}
     */
    this.to = to;

    /**
     * 延迟
     *
     * @member {number}
     * @default 0
     * @private
     */
    this.delay = 0;

    /**
     * 悠悠球效果
     *
     * @member {boolean}
     * @default false
     * @private
     */
    this.yoyo = false;

    /**
     * 重复次数
     *
     * @member {number}
     * @default 1
     */
    this.repeatTimes = 0;

    /**
     * 重复的延迟时间
     *
     * @type {number}
     * @default 0
     */
    this.repeatDelayTime = 0;

    /**
     * 动画缓冲
     *
     * @member {Tiny.TWEEN.Easing}
     * @default Tiny.TWEEN.Easing.Linear.None
     * @private
     */
    this.easing = _tween2.default.Easing.Linear.None;

    /**
     * 插值
     *
     * @member {Tiny.TWEEN.Interpolation}
     * @default Tiny.TWEEN.Interpolation.Linear
     * @private
     */
    this.interpolation = _tween2.default.Interpolation.Linear;
  }

  _createClass(Action, [{
    key: 'create',
    value: function create() {
      var self = this;
      return function (object) {
        var tween = new _tween2.default.Tween(object.getNature()).to(self.to, self.duration).repeat(self.repeatTimes).repeatDelay(self.repeatDelayTime).delay(self.delay).easing(self.easing).yoyo(self.yoyo).interpolation(self.interpolation).onStart(function () {
          self.onStart(this, object);
        }).onUpdate(function () {
          self.onUpdate(this, object);
        }).onComplete(function () {
          self.onComplete(this, object);
        }).onStop(function () {
          self.onStop(this, object);
        });

        tween.name = self.name;
        self.tween = tween;
        return tween;
      };
    }

    /**
     * 设置action的name值
     * @param {string}  name
     */

  }, {
    key: 'setName',
    value: function setName(name) {
      this.name = name;
    }

    /**
     * 动画开始时的回调
     *
     * @param tween
     * @param object
     */

  }, {
    key: 'onStart',
    value: function onStart(tween, object) {
      this._onStart(tween, object);
    }

    /**
     * 动画更新时的回调
     * > 注意：如果使用 Tiny 提供的静态 actions(eg: MoveBy, ScaleTo..) 同时又要使用`onUpdate`，需要调用`_onUpdate`来还原原 action，也可以自己重写 action。
     *
     * @example
     *
     * var moveByAction = Tiny.MoveBy(1000, Tiny.point(100, -200));
     * moveByAction.onUpdate = function (tween, object) {
     *  console.log('update');
     *  // 还原 MoveBy 行为
     *  this._onUpdate.call(this, tween, object);
     * };
     *
     * @param tween
     * @param object
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(tween, object) {
      this._onUpdate(tween, object);
    }

    /**
     * 动画完成的回调
     *
     * @example
     *
     * var moveByAction = Tiny.MoveBy(1000, Tiny.point(2));
     * moveByAction.onComplete = function (tween, object) {
     *  console.log('completed!');
     *  // 还原 MoveBy 行为，一般用在 Repeat/RepeatForever 的情况
     *  this._onComplete.call(this, tween, object);
     * };
     * sprite.runAction(Tiny.RepeatForever(moveByAction));
     *
     * @param tween
     * @param object
     */

  }, {
    key: 'onComplete',
    value: function onComplete(tween, object) {
      this._onComplete(tween, object);
    }

    /**
     * 动画停止的回调
     *
     * @param tween
     * @param object
     */

  }, {
    key: 'onStop',
    value: function onStop(tween, object) {
      this._onStop(tween, object);
    }
  }, {
    key: '_onStart',
    value: function _onStart(tween, object) {
      //OVERRIDE
    }
  }, {
    key: '_onUpdate',
    value: function _onUpdate(tween, object) {
      //OVERRIDE
    }
  }, {
    key: '_onComplete',
    value: function _onComplete(tween, object) {
      //OVERRIDE
    }
  }, {
    key: '_onStop',
    value: function _onStop(tween, object) {}
    //OVERRIDE


    /**
     * 设置动画缓冲
     *
     * 内置的缓冲效果如下表：
     *
     * | Linear.None | |
     * |:--:|:--:|:--:
     * | ![](https://gw.alipayobjects.com/zos/rmsportal/xHLCeeTUbcKOoiEdSoVb.png)||
     * | Quadratic.In | Quadratic.Out| Quadratic.InOut | Cubic.In | Cubic.Out| Cubic.InOut
     * |![](https://gw.alipayobjects.com/zos/rmsportal/bmXLkbJLtzyWwJSEkdfm.png)|![](https://gw.alipayobjects.com/zos/rmsportal/RFZGonunOaWrnywVqUBO.png)|![](https://gw.alipayobjects.com/zos/rmsportal/bfLsmoZkAikEzNSXSHWh.png)|![](https://gw.alipayobjects.com/zos/rmsportal/HEXPOCOiojeKUDMKisJp.png)|![](https://gw.alipayobjects.com/zos/rmsportal/vZCUliuGFTDVSCduDqRH.png)|![](https://gw.alipayobjects.com/zos/rmsportal/rtpBvxNkdFWtamVhZdkQ.png)
     * | Quartic.In | Quartic.Out| Quartic.InOut | Quintic.In | Quintic.Out| Quintic.InOut
     * |![](https://gw.alipayobjects.com/zos/rmsportal/MKxrNVWXZsawHZKSSGtf.png)|![](https://gw.alipayobjects.com/zos/rmsportal/wXcCqgEVNZMVPSNldeWZ.png)|![](https://gw.alipayobjects.com/zos/rmsportal/IgrvhMyPYmGTSdjMncZy.png)|![](https://gw.alipayobjects.com/zos/rmsportal/IUoELDGYFkDKcRGcjyeb.png)|![](https://gw.alipayobjects.com/zos/rmsportal/vqtkEuaUbbfqjaOXEDFn.png)|![](https://gw.alipayobjects.com/zos/rmsportal/bxSjlyiWOVJLYxNGzSib.png)
     * | Sinusoidal.In | Sinusoidal.Out| Sinusoidal.InOut | Exponential.In | Exponential.Out| Exponential.InOut
     * |![](https://gw.alipayobjects.com/zos/rmsportal/VVaDZIJphFcTbgyjbKGT.png)|![](https://gw.alipayobjects.com/zos/rmsportal/ExVkPzCRhEbpUwmcqgMf.png)|![](https://gw.alipayobjects.com/zos/rmsportal/mSuTICjQAOTdOfSAbwHz.png)|![](https://gw.alipayobjects.com/zos/rmsportal/hpLsUyjdhSwEWuMhiCQD.png)|![](https://gw.alipayobjects.com/zos/rmsportal/DJgKaxKQvnAgnRNamLXJ.png)|![](https://gw.alipayobjects.com/zos/rmsportal/NYeYSVLHysUCRltlCDKE.png)
     * | Circular.In | Circular.Out| Circular.InOut | Elastic.In | Elastic.Out| Elastic.InOut
     * |![](https://gw.alipayobjects.com/zos/rmsportal/ABckFwQKahquFfuETPVp.png)|![](https://gw.alipayobjects.com/zos/rmsportal/suKheoPdbnvnwdzTEYwQ.png)|![](https://gw.alipayobjects.com/zos/rmsportal/cSBNmWFzHLEarLgooEcV.png)|![](https://gw.alipayobjects.com/zos/rmsportal/WuqHhXjNArNwLOliqiXm.png)|![](https://gw.alipayobjects.com/zos/rmsportal/SOOyWYVdlDPppaFpKWuX.png)|![](https://gw.alipayobjects.com/zos/rmsportal/GwqgiMOkFzZQhtsVmXFw.png)
     * | Back.In | Back.Out| Back.InOut | Bounce.In | Bounce.Out| Bounce.InOut
     * |![](https://gw.alipayobjects.com/zos/rmsportal/vwGtMvOurAZBieEkwayF.png)|![](https://gw.alipayobjects.com/zos/rmsportal/mqpdGdmwbwuJBBTqvYXW.png)|![](https://gw.alipayobjects.com/zos/rmsportal/eguKvIEfuNqacRvENERe.png)|![](https://gw.alipayobjects.com/zos/rmsportal/SHdZxnDkfTULbpXFZNBI.png)|![](https://gw.alipayobjects.com/zos/rmsportal/cbfHmuklomRKjULuMSCC.png)|![](https://gw.alipayobjects.com/zos/rmsportal/XyuCcxsHgtIFltQamaur.png)
     *
     * @param {Tiny.TWEEN.Easing} easing
     * @default Tiny.TWEEN.Easing.Linear.None
     */

  }, {
    key: 'setEasing',
    value: function setEasing(easing) {
      this.easing = easing;
    }

    /**
     * 设置插值
     *
     * 内置的插值效果如下表：
     *
     * | Linear | Bezier | CatmullRom
     * |:--:|:--:|:--:
     * |![](https://gw.alipayobjects.com/zos/rmsportal/lVaiWObEJiCgHshzFmKl.png)|![](https://gw.alipayobjects.com/zos/rmsportal/YuvtNeRrSuobgYnCcbEW.png)|![](https://gw.alipayobjects.com/zos/rmsportal/VNUxidULbepffAFVKrim.png)
     * | start===end | start===end | start===end
     * |![](https://gw.alipayobjects.com/zos/rmsportal/kLPjaZFIUTzKrtDuVuXt.png)|![](https://gw.alipayobjects.com/zos/rmsportal/XrVohPavkaahIbOTAcjK.png)|![](https://gw.alipayobjects.com/zos/rmsportal/DHcLSlmlWDlpQVKkYjLF.png)
     *
     * @param {Tiny.TWEEN.Interpolation} interpolation
     * @default Tiny.TWEEN.Interpolation.Linear
     */

  }, {
    key: 'setInterpolation',
    value: function setInterpolation(interpolation) {
      this.interpolation = interpolation;
    }

    /**
     * 设置延迟
     *
     * @param {number}  delay
     * @default 0
     */

  }, {
    key: 'setDelay',
    value: function setDelay(delay) {
      this.delay = delay;
    }

    /**
     * 设置重复延迟
     *
     * @param {number}  delay
     * @default 0
     */

  }, {
    key: 'setRepeatDelay',
    value: function setRepeatDelay(delay) {
      this.repeatDelayTime = delay;
    }

    /**
     * 是否运动中
     *
     * @version 1.0.2
     * @returns {Boolean}
     */

  }, {
    key: 'isPlaying',
    value: function isPlaying() {
      if (this.tween) {
        return this.tween.isPlaying();
      } else {
        return false;
      }
    }

    /**
     * 停止动画
     *
     * @version 1.0.2
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.tween && this.tween.stop();
    }

    /**
     * 暂停动画
     *
     * @version 1.0.2
     */

  }, {
    key: 'pause',
    value: function pause() {
      this.tween && this.tween.pause();
    }

    /**
     * 继续暂停的动画
     *
     * @version 1.1.0
     */

  }, {
    key: 'resume',
    value: function resume() {
      this.tween && this.tween.resume();
    }
  }]);

  return Action;
}();

/**
 * 清除某对象上的所有 Action
 *
 * @static
 * @param {Tiny.DisplayObject}  sprite
 */


exports.default = Action;
Action.cleanup = function (sprite) {
  if (sprite && sprite.actions.length !== 0) {
    sprite.actions.forEach(function (action) {
      _tween2.default.remove(action);
    });
    sprite.actions = [];
  }
};

/**
 * 克隆某个 Action
 * 如果要让某个 Action 被多个精灵使用，请使用 clone 方法以避免因为精灵的初始状态不一导致的动画冲突
 *
 * @example
 *
 * var action = Tiny.MoveBy(1000, Tiny.point(10));
 * sprite1.runAction(action);
 * sprite2.runAction(Tiny.Action.clone(action));
 * sprite3.runAction(Tiny.Repeat(5, Tiny.Action.clone(action)));
 *
 * @example
 *
 * var action1 = Tiny.ScaleTo(500, Tiny.scale(0.5));
 * var action2 = var action = Tiny.RotateBy(1000, {rotation: Tiny.deg2radian(-75)});
 * sprite1.runAction(action1);
 * sprite2.runSequenceAction(Tiny.Action.clone(action1), action2);
 *
 * @param {Tiny.Action}  action
 * @version 1.0.2
 * @return {Tiny.Action} obj
 */
Action.clone = function (action) {
  if (action === null || !core.isObject(action)) {
    return action;
  }
  var type = action._type;
  var to = core.isUndefined(action._to) ? action.to : action._to;
  if (core.isObject(to)) {
    to = Object.assign(Object.create(Object.prototype), to);
  }
  var clone = void 0;
  switch (type) {
    case 'Blink':
    case 'TintBy':
    case 'TintTo':
      clone = Tiny[type](action._arg[0], action._arg[1]);
      break;
    case 'JumpTo':
      clone = Tiny[type](action.duration, to, action._arg[0], action._arg[1]);
      break;
    default:
      clone = Tiny[type](action.duration, to);
  }
  clone.setDelay(action.delay);
  clone.setEasing(action.easing);
  clone.setInterpolation(action.interpolation);
  clone.setRepeatDelay(action.repeatDelayTime);
  return clone;
};

/**
 * 让 action 们动起来吧
 *
 * > Tips: 多组action同时：`runAction([action1, action2], action3)`
 *
 * @example
 *
 * var action = Tiny.MoveBy(1000, Tiny.point(100, 100));
 * container.runAction(Tiny.RepeatForever(action));
 * //container 会在舞台的(0, 0)位置和(100, 100)位置来回不停的移动
 *
 * @memberof Tiny.Container#
 * @function runAction
 * @param {Tiny.Action} actions
 */
core.Container.prototype.runAction = function (actions) {
  var actionArray = core.isArray(actions) ? actions : arguments;
  for (var i = 0; i < actionArray.length; i++) {
    actionArray[i]._caller = 'runAction';
    var action = actionArray[i].create()(this).start();
    this.actions.push(action);
  }
};

/**
 * 有顺序的让 action 们动起来吧
 *
 * > Tips: `runSequenceAction(action1, action2)`
 *
 * @example
 *
 * var action1 = Tiny.MoveTo(1000, Tiny.point(100, 100));
 * var action2 = Tiny.ScaleBy(1200, Tiny.scale(0.25, 2));
 * var action3 = Tiny.RotateTo(2000, {rotation: Tiny.CONST.PI_2});
 * container.runSequenceAction(action1, action2, action3);
 * //container 先在1000ms内从坐标(0, 0)移动到(100, 100)，然后在1200ms内横向缩小0.25倍，纵向拉伸2倍，最后在2000ms内顺时针旋转360度
 *
 * @memberof Tiny.Container#
 * @function runSequenceAction
 * @param {Tiny.Action} actions
 */
core.Container.prototype.runSequenceAction = function (actions) {
  var self = this;

  var actionArray = core.isArray(actions) ? actions : arguments;
  var tempArray = [];

  if (actionArray.length > 0 && actionArray[actionArray.length - 1] == null) {
    throw new Error('parameters should not be ending with null');
  }

  for (var i = 0; i < actionArray.length; i++) {
    tempArray.push(actionArray[i].create()(self));
  }

  for (var _i = tempArray.length - 1; _i > 0; _i--) {
    tempArray[_i - 1].chain(tempArray[_i]);
  }

  tempArray[0].start();
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 'Builder' pattern for bounds rectangles
 * Axis-Aligned Bounding Box
 * It is not a shape! Its mutable thing, no 'EMPTY' or that kind of problems
 *
 * @class
 * @memberof Tiny
 */
var Bounds = function () {
  /**
   *
   */
  function Bounds() {
    _classCallCheck(this, Bounds);

    /**
     * @member {number}
     * @default 0
     */
    this.minX = Infinity;

    /**
     * @member {number}
     * @default 0
     */
    this.minY = Infinity;

    /**
     * @member {number}
     * @default 0
     */
    this.maxX = -Infinity;

    /**
     * @member {number}
     * @default 0
     */
    this.maxY = -Infinity;

    this.rect = null;
  }

  /**
   * Checks if bounds are empty.
   *
   * @return {boolean} True if empty.
   */


  _createClass(Bounds, [{
    key: 'isEmpty',
    value: function isEmpty() {
      return this.minX > this.maxX || this.minY > this.maxY;
    }

    /**
     * Clears the bounds and resets.
     *
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.updateID++;

      this.minX = Infinity;
      this.minY = Infinity;
      this.maxX = -Infinity;
      this.maxY = -Infinity;
    }

    /**
     * Can return Rectangle.EMPTY constant, either construct new rectangle, either use your rectangle
     * It is not guaranteed that it will return tempRect
     *
     * @param {Tiny.Rectangle} rect - temporary object will be used if AABB is not empty
     * @return {Tiny.Rectangle} A rectangle of the bounds
     */

  }, {
    key: 'getRectangle',
    value: function getRectangle(rect) {
      if (this.minX > this.maxX || this.minY > this.maxY) {
        return _math.Rectangle.EMPTY;
      }

      rect = rect || new _math.Rectangle(0, 0, 1, 1);

      rect.x = this.minX;
      rect.y = this.minY;
      rect.width = this.maxX - this.minX;
      rect.height = this.maxY - this.minY;

      return rect;
    }

    /**
     * This function should be inlined when its possible.
     *
     * @param {Tiny.Point} point - The point to add.
     */

  }, {
    key: 'addPoint',
    value: function addPoint(point) {
      this.minX = Math.min(this.minX, point.x);
      this.maxX = Math.max(this.maxX, point.x);
      this.minY = Math.min(this.minY, point.y);
      this.maxY = Math.max(this.maxY, point.y);
    }

    /**
     * Adds a quad, not transformed
     *
     * @param {Float32Array} vertices - The verts to add.
     */

  }, {
    key: 'addQuad',
    value: function addQuad(vertices) {
      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;

      var x = vertices[0];
      var y = vertices[1];

      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;

      x = vertices[2];
      y = vertices[3];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;

      x = vertices[4];
      y = vertices[5];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;

      x = vertices[6];
      y = vertices[7];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;

      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    }

    /**
     * Adds sprite frame, transformed.
     *
     * @param {Tiny.TransformBase} transform - TODO
     * @param {number} x0 - TODO
     * @param {number} y0 - TODO
     * @param {number} x1 - TODO
     * @param {number} y1 - TODO
     */

  }, {
    key: 'addFrame',
    value: function addFrame(transform, x0, y0, x1, y1) {
      var matrix = transform.worldTransform;
      var a = matrix.a;
      var b = matrix.b;
      var c = matrix.c;
      var d = matrix.d;
      var tx = matrix.tx;
      var ty = matrix.ty;

      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;

      var x = a * x0 + c * y0 + tx;
      var y = b * x0 + d * y0 + ty;

      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;

      x = a * x1 + c * y0 + tx;
      y = b * x1 + d * y0 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;

      x = a * x0 + c * y1 + tx;
      y = b * x0 + d * y1 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;

      x = a * x1 + c * y1 + tx;
      y = b * x1 + d * y1 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;

      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    }

    /**
     * Add an array of vertices
     *
     * @param {Tiny.TransformBase} transform - TODO
     * @param {Float32Array} vertices - TODO
     * @param {number} beginOffset - TODO
     * @param {number} endOffset - TODO
     */

  }, {
    key: 'addVertices',
    value: function addVertices(transform, vertices, beginOffset, endOffset) {
      var matrix = transform.worldTransform;
      var a = matrix.a;
      var b = matrix.b;
      var c = matrix.c;
      var d = matrix.d;
      var tx = matrix.tx;
      var ty = matrix.ty;

      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;

      for (var i = beginOffset; i < endOffset; i += 2) {
        var rawX = vertices[i];
        var rawY = vertices[i + 1];
        var x = a * rawX + c * rawY + tx;
        var y = d * rawY + b * rawX + ty;

        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
      }

      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    }

    /**
     * Adds other Bounds
     *
     * @param {Tiny.Bounds} bounds - TODO
     */

  }, {
    key: 'addBounds',
    value: function addBounds(bounds) {
      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;

      this.minX = bounds.minX < minX ? bounds.minX : minX;
      this.minY = bounds.minY < minY ? bounds.minY : minY;
      this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
      this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
    }

    /**
     * Adds other Bounds, masked with Bounds
     *
     * @param {Tiny.Bounds} bounds - TODO
     * @param {Tiny.Bounds} mask - TODO
     */

  }, {
    key: 'addBoundsMask',
    value: function addBoundsMask(bounds, mask) {
      var _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
      var _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
      var _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
      var _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;

      if (_minX <= _maxX && _minY <= _maxY) {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;

        this.minX = _minX < minX ? _minX : minX;
        this.minY = _minY < minY ? _minY : minY;
        this.maxX = _maxX > maxX ? _maxX : maxX;
        this.maxY = _maxY > maxY ? _maxY : maxY;
      }
    }

    /**
     * Adds other Bounds, masked with Rectangle
     *
     * @param {Tiny.Bounds} bounds - TODO
     * @param {Tiny.Rectangle} area - TODO
     */

  }, {
    key: 'addBoundsArea',
    value: function addBoundsArea(bounds, area) {
      var _minX = bounds.minX > area.x ? bounds.minX : area.x;
      var _minY = bounds.minY > area.y ? bounds.minY : area.y;
      var _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : area.x + area.width;
      var _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : area.y + area.height;

      if (_minX <= _maxX && _minY <= _maxY) {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;

        this.minX = _minX < minX ? _minX : minX;
        this.minY = _minY < minY ? _minY : minY;
        this.maxX = _maxX > maxX ? _maxX : maxX;
        this.maxY = _maxY > maxY ? _maxY : maxY;
      }
    }
  }]);

  return Bounds;
}();

exports.default = Bounds;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Generic class to deal with traditional 2D matrix transforms
 *
 * @class
 * @memberof Tiny
 */
var TransformBase = function () {
  /**
   *
   */
  function TransformBase() {
    _classCallCheck(this, TransformBase);

    /**
     * The global matrix transform. It can be swapped temporarily by some functions like getLocalBounds()
     *
     * @member {Tiny.Matrix}
     */
    this.worldTransform = new _math.Matrix();

    /**
     * The local matrix transform
     *
     * @member {Tiny.Matrix}
     */
    this.localTransform = new _math.Matrix();

    this._worldID = 0;
    this._parentID = 0;
  }

  /**
   * TransformBase does not have decomposition, so this function wont do anything
   */


  _createClass(TransformBase, [{
    key: 'updateLocalTransform',
    value: function updateLocalTransform() {}
    // empty


    /**
     * Updates the values of the object and applies the parent's transform.
     *
     * @param {Tiny.TransformBase} parentTransform - The transform of the parent of this object
     */

  }, {
    key: 'updateTransform',
    value: function updateTransform(parentTransform) {
      var pt = parentTransform.worldTransform;
      var wt = this.worldTransform;
      var lt = this.localTransform;

      // concat the parent matrix with the objects transform.
      wt.a = lt.a * pt.a + lt.b * pt.c;
      wt.b = lt.a * pt.b + lt.b * pt.d;
      wt.c = lt.c * pt.a + lt.d * pt.c;
      wt.d = lt.c * pt.b + lt.d * pt.d;
      wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
      wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

      this._worldID++;
    }
  }]);

  return TransformBase;
}();

/**
 * Updates the values of the object and applies the parent's transform.
 * @param  parentTransform {Tiny.Transform} The transform of the parent of this object
 *
 */


exports.default = TransformBase;
TransformBase.prototype.updateWorldTransform = TransformBase.prototype.updateTransform;

TransformBase.IDENTITY = new TransformBase();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Point = __webpack_require__(25);

var _Point2 = _interopRequireDefault(_Point);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Matrix class as an object, which makes it a lot faster,
 * here is a representation of it :
 * | a | b | tx|
 * | c | d | ty|
 * | 0 | 0 | 1 |
 *
 * @class
 * @memberof Tiny
 */
var Matrix = function () {
  /**
   * @param {number} [a=1] - x scale
   * @param {number} [b=0] - y skew
   * @param {number} [c=0] - x skew
   * @param {number} [d=1] - y scale
   * @param {number} [tx=0] - x translation
   * @param {number} [ty=0] - y translation
   */
  function Matrix() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    _classCallCheck(this, Matrix);

    /**
     * @member {number}
     * @default 1
     */
    this.a = a;

    /**
     * @member {number}
     * @default 0
     */
    this.b = b;

    /**
     * @member {number}
     * @default 0
     */
    this.c = c;

    /**
     * @member {number}
     * @default 1
     */
    this.d = d;

    /**
     * @member {number}
     * @default 0
     */
    this.tx = tx;

    /**
     * @member {number}
     * @default 0
     */
    this.ty = ty;

    this.array = null;
  }

  /**
   * Creates a Matrix object based on the given array. The Element to Matrix mapping order is as follows:
   *
   * a = array[0]
   * b = array[1]
   * c = array[3]
   * d = array[4]
   * tx = array[2]
   * ty = array[5]
   *
   * @param {number[]} array - The array that the matrix will be populated from.
   */


  _createClass(Matrix, [{
    key: 'fromArray',
    value: function fromArray(array) {
      this.a = array[0];
      this.b = array[1];
      this.c = array[3];
      this.d = array[4];
      this.tx = array[2];
      this.ty = array[5];
    }

    /**
     * sets the matrix properties
     *
     * @param {number} a - Matrix component
     * @param {number} b - Matrix component
     * @param {number} c - Matrix component
     * @param {number} d - Matrix component
     * @param {number} tx - Matrix component
     * @param {number} ty - Matrix component
     *
     * @return {Tiny.Matrix} This matrix. Good for chaining method calls.
     */

  }, {
    key: 'set',
    value: function set(a, b, c, d, tx, ty) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;

      return this;
    }

    /**
     * Creates an array from the current Matrix object.
     *
     * @param {boolean} transpose - Whether we need to transpose the matrix or not
     * @param {Float32Array} [out=new Float32Array(9)] - If provided the array will be assigned to out
     * @return {number[]} the newly created array which contains the matrix
     */

  }, {
    key: 'toArray',
    value: function toArray(transpose, out) {
      if (!this.array) {
        this.array = new Float32Array(9);
      }

      var array = out || this.array;

      if (transpose) {
        array[0] = this.a;
        array[1] = this.b;
        array[2] = 0;
        array[3] = this.c;
        array[4] = this.d;
        array[5] = 0;
        array[6] = this.tx;
        array[7] = this.ty;
        array[8] = 1;
      } else {
        array[0] = this.a;
        array[1] = this.c;
        array[2] = this.tx;
        array[3] = this.b;
        array[4] = this.d;
        array[5] = this.ty;
        array[6] = 0;
        array[7] = 0;
        array[8] = 1;
      }

      return array;
    }

    /**
     * Get a new position with the current transformation applied.
     * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
     *
     * @param {Tiny.Point} pos - The origin
     * @param {Tiny.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @return {Tiny.Point} The new point, transformed through this matrix
     */

  }, {
    key: 'apply',
    value: function apply(pos, newPos) {
      newPos = newPos || new _Point2.default();

      var x = pos.x;
      var y = pos.y;

      newPos.x = this.a * x + this.c * y + this.tx;
      newPos.y = this.b * x + this.d * y + this.ty;

      return newPos;
    }

    /**
     * Get a new position with the inverse of the current transformation applied.
     * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
     *
     * @param {Tiny.Point} pos - The origin
     * @param {Tiny.Point} [newPos] - The point that the new position is assigned to (allowed to be same as input)
     * @return {Tiny.Point} The new point, inverse-transformed through this matrix
     */

  }, {
    key: 'applyInverse',
    value: function applyInverse(pos, newPos) {
      newPos = newPos || new _Point2.default();

      var id = 1 / (this.a * this.d + this.c * -this.b);

      var x = pos.x;
      var y = pos.y;

      newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
      newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;

      return newPos;
    }

    /**
     * Translates the matrix on the x and y.
     *
     * @param {number} x How much to translate x by
     * @param {number} y How much to translate y by
     * @return {Tiny.Matrix} This matrix. Good for chaining method calls.
     */

  }, {
    key: 'translate',
    value: function translate(x, y) {
      this.tx += x;
      this.ty += y;

      return this;
    }

    /**
     * Applies a scale transformation to the matrix.
     *
     * @param {number} x The amount to scale horizontally
     * @param {number} y The amount to scale vertically
     * @return {Tiny.Matrix} This matrix. Good for chaining method calls.
     */

  }, {
    key: 'scale',
    value: function scale(x, y) {
      this.a *= x;
      this.d *= y;
      this.c *= x;
      this.b *= y;
      this.tx *= x;
      this.ty *= y;

      return this;
    }

    /**
     * Applies a rotation transformation to the matrix.
     *
     * @param {number} angle - The angle in radians.
     * @return {Tiny.Matrix} This matrix. Good for chaining method calls.
     */

  }, {
    key: 'rotate',
    value: function rotate(angle) {
      var cos = Math.cos(angle);
      var sin = Math.sin(angle);

      var a1 = this.a;
      var c1 = this.c;
      var tx1 = this.tx;

      this.a = a1 * cos - this.b * sin;
      this.b = a1 * sin + this.b * cos;
      this.c = c1 * cos - this.d * sin;
      this.d = c1 * sin + this.d * cos;
      this.tx = tx1 * cos - this.ty * sin;
      this.ty = tx1 * sin + this.ty * cos;

      return this;
    }

    /**
     * Appends the given Matrix to this Matrix.
     *
     * @param {Tiny.Matrix} matrix - The matrix to append.
     * @return {Tiny.Matrix} This matrix. Good for chaining method calls.
     */

  }, {
    key: 'append',
    value: function append(matrix) {
      var a1 = this.a;
      var b1 = this.b;
      var c1 = this.c;
      var d1 = this.d;

      this.a = matrix.a * a1 + matrix.b * c1;
      this.b = matrix.a * b1 + matrix.b * d1;
      this.c = matrix.c * a1 + matrix.d * c1;
      this.d = matrix.c * b1 + matrix.d * d1;

      this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
      this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;

      return this;
    }

    /**
     * Sets the matrix based on all the available properties
     *
     * @param {number} x - Position on the x axis
     * @param {number} y - Position on the y axis
     * @param {number} pivotX - Pivot on the x axis
     * @param {number} pivotY - Pivot on the y axis
     * @param {number} scaleX - Scale on the x axis
     * @param {number} scaleY - Scale on the y axis
     * @param {number} rotation - Rotation in radians
     * @param {number} skewX - Skew on the x axis
     * @param {number} skewY - Skew on the y axis
     * @return {Tiny.Matrix} This matrix. Good for chaining method calls.
     */

  }, {
    key: 'setTransform',
    value: function setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
      var sr = Math.sin(rotation);
      var cr = Math.cos(rotation);
      var cy = Math.cos(skewY);
      var sy = Math.sin(skewY);
      var nsx = -Math.sin(skewX);
      var cx = Math.cos(skewX);

      var a = cr * scaleX;
      var b = sr * scaleX;
      var c = -sr * scaleY;
      var d = cr * scaleY;

      this.a = cy * a + sy * c;
      this.b = cy * b + sy * d;
      this.c = nsx * a + cx * c;
      this.d = nsx * b + cx * d;

      this.tx = x + (pivotX * a + pivotY * c);
      this.ty = y + (pivotX * b + pivotY * d);

      return this;
    }

    /**
     * Prepends the given Matrix to this Matrix.
     *
     * @param {Tiny.Matrix} matrix - The matrix to prepend
     * @return {Tiny.Matrix} This matrix. Good for chaining method calls.
     */

  }, {
    key: 'prepend',
    value: function prepend(matrix) {
      var tx1 = this.tx;

      if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
        var a1 = this.a;
        var c1 = this.c;

        this.a = a1 * matrix.a + this.b * matrix.c;
        this.b = a1 * matrix.b + this.b * matrix.d;
        this.c = c1 * matrix.a + this.d * matrix.c;
        this.d = c1 * matrix.b + this.d * matrix.d;
      }

      this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
      this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;

      return this;
    }

    /**
     * Decomposes the matrix (x, y, scaleX, scaleY, and rotation) and sets the properties on to a transform.
     *
     * @param {Tiny.Transform|Tiny.TransformStatic} transform - The transform to apply the properties to.
     * @return {Tiny.Transform|Tiny.TransformStatic} The transform with the newly applied properties
     */

  }, {
    key: 'decompose',
    value: function decompose(transform) {
      // sort out rotation / skew..
      var a = this.a;
      var b = this.b;
      var c = this.c;
      var d = this.d;

      var skewX = -Math.atan2(-c, d);
      var skewY = Math.atan2(b, a);

      var delta = Math.abs(skewX + skewY);

      if (delta < 0.00001) {
        transform.rotation = skewY;

        if (a < 0 && d >= 0) {
          transform.rotation += transform.rotation <= 0 ? Math.PI : -Math.PI;
        }

        transform.skew.x = transform.skew.y = 0;
      } else {
        transform.skew.x = skewX;
        transform.skew.y = skewY;
      }

      // next set scale
      transform.scale.x = Math.sqrt(a * a + b * b);
      transform.scale.y = Math.sqrt(c * c + d * d);

      // next set position
      transform.position.x = this.tx;
      transform.position.y = this.ty;

      return transform;
    }

    /**
     * Inverts this matrix
     *
     * @return {Tiny.Matrix} This matrix. Good for chaining method calls.
     */

  }, {
    key: 'invert',
    value: function invert() {
      var a1 = this.a;
      var b1 = this.b;
      var c1 = this.c;
      var d1 = this.d;
      var tx1 = this.tx;
      var n = a1 * d1 - b1 * c1;

      this.a = d1 / n;
      this.b = -b1 / n;
      this.c = -c1 / n;
      this.d = a1 / n;
      this.tx = (c1 * this.ty - d1 * tx1) / n;
      this.ty = -(a1 * this.ty - b1 * tx1) / n;

      return this;
    }

    /**
     * Resets this Matix to an identity (default) matrix.
     *
     * @return {Tiny.Matrix} This matrix. Good for chaining method calls.
     */

  }, {
    key: 'identity',
    value: function identity() {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 1;
      this.tx = 0;
      this.ty = 0;

      return this;
    }

    /**
     * Creates a new Matrix object with the same values as this one.
     *
     * @return {Tiny.Matrix} A copy of this matrix. Good for chaining method calls.
     */

  }, {
    key: 'clone',
    value: function clone() {
      var matrix = new Matrix();

      matrix.a = this.a;
      matrix.b = this.b;
      matrix.c = this.c;
      matrix.d = this.d;
      matrix.tx = this.tx;
      matrix.ty = this.ty;

      return matrix;
    }

    /**
     * Changes the values of the given matrix to be the same as the ones in this matrix
     *
     * @param {Tiny.Matrix} matrix - The matrix to copy from.
     * @return {Tiny.Matrix} The matrix given in parameter with its values updated.
     */

  }, {
    key: 'copy',
    value: function copy(matrix) {
      matrix.a = this.a;
      matrix.b = this.b;
      matrix.c = this.c;
      matrix.d = this.d;
      matrix.tx = this.tx;
      matrix.ty = this.ty;

      return matrix;
    }

    /**
     * A default (identity) matrix
     *
     * @static
     * @const
     */

  }], [{
    key: 'IDENTITY',
    get: function get() {
      return new Matrix();
    }

    /**
     * A temp matrix
     *
     * @static
     * @const
     */

  }, {
    key: 'TEMP_MATRIX',
    get: function get() {
      return new Matrix();
    }
  }]);

  return Matrix;
}();

exports.default = Matrix;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 *
 * @class
 * @memberof Tiny
 */
var Point = function () {
  /**
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Point);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;
  }

  /**
   * Creates a clone of this point
   *
   * @return {Tiny.Point} a copy of the point
   */


  _createClass(Point, [{
    key: "clone",
    value: function clone() {
      return new Point(this.x, this.y);
    }

    /**
     * Copies x and y from the given point
     *
     * @param {Tiny.Point} p - The point to copy.
     */

  }, {
    key: "copy",
    value: function copy(p) {
      this.set(p.x, p.y);
    }

    /**
     * Returns true if the given point is equal to this point
     *
     * @param {Tiny.Point} p - The point to check
     * @return {boolean} Whether the given point equal to this point
     */

  }, {
    key: "equals",
    value: function equals(p) {
      return p.x === this.x && p.y === this.y;
    }

    /**
     * Sets the point to a new x and y position.
     * If y is omitted, both x and y will be set to x.
     *
     * @param {number} [x=0] - position of the point on the x axis
     * @param {number} [y=0] - position of the point on the y axis
     */

  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x || 0;
      this.y = y || (y !== 0 ? this.x : 0);
    }
  }]);

  return Point;
}();

exports.default = Point;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Rectangle object is an area defined by its position, as indicated by its top-left corner
 * point (x, y) and by its width and its height.
 *
 * @class
 * @memberof Tiny
 */
var Rectangle = function () {
  /**
   * @param {number} [x=0] - The X coordinate of the upper-left corner of the rectangle
   * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rectangle
   * @param {number} [width=0] - The overall width of this rectangle
   * @param {number} [height=0] - The overall height of this rectangle
   */
  function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Rectangle);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default Tiny.SHAPES.RECT
     * @see Tiny.SHAPES
     */
    this.type = _const.SHAPES.RECT;
  }

  /**
   * returns the left edge of the rectangle
   *
   * @member {number}
   */


  _createClass(Rectangle, [{
    key: 'clone',


    /**
     * Creates a clone of this Rectangle
     *
     * @return {Tiny.Rectangle} a copy of the rectangle
     */
    value: function clone() {
      return new Rectangle(this.x, this.y, this.width, this.height);
    }

    /**
     * Copies another rectangle to this one.
     *
     * @param {Tiny.Rectangle} rectangle - The rectangle to copy.
     * @return {Tiny.Rectangle} Returns itself.
     */

  }, {
    key: 'copy',
    value: function copy(rectangle) {
      this.x = rectangle.x;
      this.y = rectangle.y;
      this.width = rectangle.width;
      this.height = rectangle.height;

      return this;
    }

    /**
     * Checks whether the x and y coordinates given are contained within this Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rectangle
     */

  }, {
    key: 'contains',
    value: function contains(x, y) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }

      if (x >= this.x && x < this.x + this.width) {
        if (y >= this.y && y < this.y + this.height) {
          return true;
        }
      }

      return false;
    }

    /**
     * Pads the rectangle making it grow in all directions.
     *
     * @param {number} paddingX - The horizontal padding amount.
     * @param {number} paddingY - The vertical padding amount.
     */

  }, {
    key: 'pad',
    value: function pad(paddingX, paddingY) {
      paddingX = paddingX || 0;
      paddingY = paddingY || (paddingY !== 0 ? paddingX : 0);

      this.x -= paddingX;
      this.y -= paddingY;

      this.width += paddingX * 2;
      this.height += paddingY * 2;
    }

    /**
     * Fits this rectangle around the passed one.
     *
     * @param {Tiny.Rectangle} rectangle - The rectangle to fit.
     */

  }, {
    key: 'fit',
    value: function fit(rectangle) {
      if (this.x < rectangle.x) {
        this.width += this.x;
        if (this.width < 0) {
          this.width = 0;
        }

        this.x = rectangle.x;
      }

      if (this.y < rectangle.y) {
        this.height += this.y;
        if (this.height < 0) {
          this.height = 0;
        }
        this.y = rectangle.y;
      }

      if (this.x + this.width > rectangle.x + rectangle.width) {
        this.width = rectangle.width - this.x;
        if (this.width < 0) {
          this.width = 0;
        }
      }

      if (this.y + this.height > rectangle.y + rectangle.height) {
        this.height = rectangle.height - this.y;
        if (this.height < 0) {
          this.height = 0;
        }
      }
    }

    /**
     * Enlarges this rectangle to include the passed rectangle.
     *
     * @param {Tiny.Rectangle} rectangle - The rectangle to include.
     */

  }, {
    key: 'enlarge',
    value: function enlarge(rectangle) {
      var x1 = Math.min(this.x, rectangle.x);
      var x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
      var y1 = Math.min(this.y, rectangle.y);
      var y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);

      this.x = x1;
      this.width = x2 - x1;
      this.y = y1;
      this.height = y2 - y1;
    }
  }, {
    key: 'left',
    get: function get() {
      return this.x;
    }

    /**
     * returns the right edge of the rectangle
     *
     * @member {number}
     */

  }, {
    key: 'right',
    get: function get() {
      return this.x + this.width;
    }

    /**
     * returns the top edge of the rectangle
     *
     * @member {number}
     */

  }, {
    key: 'top',
    get: function get() {
      return this.y;
    }

    /**
     * returns the bottom edge of the rectangle
     *
     * @member {number}
     */

  }, {
    key: 'bottom',
    get: function get() {
      return this.y + this.height;
    }

    /**
     * A constant empty rectangle.
     *
     * @static
     * @constant
     */

  }], [{
    key: 'EMPTY',
    get: function get() {
      return new Rectangle(0, 0, 0, 0);
    }
  }]);

  return Rectangle;
}();

exports.default = Rectangle;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _math = __webpack_require__(2);

var _utils = __webpack_require__(1);

var _const = __webpack_require__(0);

var _Texture = __webpack_require__(7);

var _Texture2 = _interopRequireDefault(_Texture);

var _Container2 = __webpack_require__(8);

var _Container3 = _interopRequireDefault(_Container2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tempPoint = new _math.Point();

/**
 * The Sprite object is the base for all textured objects that are rendered to the screen
 *
 * A sprite can be created directly from an image like this:
 *
 *  ```js
 *  let sprite = new Tiny.Sprite.fromImage('assets/image.png');
 *  ```
 *
 * @class
 * @extends Tiny.Container
 * @memberof Tiny
 */

var Sprite = function (_Container) {
  _inherits(Sprite, _Container);

  /**
   * @param {Tiny.Texture} texture - The texture for this sprite
   */
  function Sprite(texture) {
    _classCallCheck(this, Sprite);

    /**
     * The anchor sets the origin point of the texture.
     * The default is 0,0 this means the texture's origin is the top left
     * Setting the anchor to 0.5,0.5 means the texture's origin is centered
     * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
     *
     * @member {Tiny.ObservablePoint}
     * @private
     */
    var _this = _possibleConstructorReturn(this, (Sprite.__proto__ || Object.getPrototypeOf(Sprite)).call(this));

    _this._anchor = new _math.ObservablePoint(_this._onAnchorUpdate, _this);

    /**
     * The texture that the sprite is using
     *
     * @private
     * @member {Tiny.Texture}
     */
    _this._texture = null;

    /**
     * The width of the sprite (this is initially set by the texture)
     *
     * @private
     * @member {number}
     */
    _this._width = 0;

    /**
     * The height of the sprite (this is initially set by the texture)
     *
     * @private
     * @member {number}
     */
    _this._height = 0;

    /**
     * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
     *
     * @private
     * @member {number}
     * @default 0xFFFFFF
     */
    _this._tint = null;
    _this._tintRGB = null;
    _this.tint = 0xFFFFFF;

    /**
     * The blend mode to be applied to the sprite. Apply a value of `Tiny.BLEND_MODES.NORMAL` to reset the blend mode.
     *
     * @member {number}
     * @default Tiny.BLEND_MODES.NORMAL
     * @see Tiny.BLEND_MODES
     */
    _this.blendMode = _const.BLEND_MODES.NORMAL;

    /**
     * The shader that will be used to render the sprite. Set to null to remove a current shader.
     *
     * @member {Tiny.Filter|Tiny.Shader}
     */
    _this.shader = null;

    /**
     * An internal cached value of the tint.
     *
     * @private
     * @member {number}
     * @default 0xFFFFFF
     */
    _this.cachedTint = 0xFFFFFF;

    // call texture setter
    _this.texture = texture || _Texture2.default.EMPTY;

    /**
     * this is used to store the vertex data of the sprite (basically a quad)
     *
     * @private
     * @member {Float32Array}
     */
    _this.vertexData = new Float32Array(8);

    /**
     * This is used to calculate the bounds of the object IF it is a trimmed sprite
     *
     * @private
     * @member {Float32Array}
     */
    _this.vertexTrimmedData = null;

    _this._transformID = -1;
    _this._textureID = -1;

    _this._transformTrimmedID = -1;
    _this._textureTrimmedID = -1;

    /**
     * Plugin that is responsible for rendering this element.
     * Allows to customize the rendering process without overriding '_renderWebGL' & '_renderCanvas' methods.
     *
     * @member {string}
     * @default 'sprite'
     */
    _this.pluginName = 'sprite';
    return _this;
  }

  /**
   * When the texture is updated, this event will fire to update the scale and frame
   *
   * @private
   */


  _createClass(Sprite, [{
    key: '_onTextureUpdate',
    value: function _onTextureUpdate() {
      this._textureID = -1;
      this._textureTrimmedID = -1;

      // so if _width is 0 then width was not set..
      if (this._width) {
        this.scale.x = (0, _utils.sign)(this.scale.x) * this._width / this._texture.orig.width;
      }

      if (this._height) {
        this.scale.y = (0, _utils.sign)(this.scale.y) * this._height / this._texture.orig.height;
      }
    }

    /**
     * Called when the anchor position updates.
     *
     * @private
     */

  }, {
    key: '_onAnchorUpdate',
    value: function _onAnchorUpdate() {
      this._transformID = -1;
      this._transformTrimmedID = -1;
    }

    /**
     * calculates worldTransform * vertices, store it in vertexData
     */

  }, {
    key: 'calculateVertices',
    value: function calculateVertices() {
      if (this._transformID === this.transform._worldID && this._textureID === this._texture._updateID) {
        return;
      }

      this._transformID = this.transform._worldID;
      this._textureID = this._texture._updateID;

      // set the vertex data

      var texture = this._texture;
      var wt = this.transform.worldTransform;
      var a = wt.a;
      var b = wt.b;
      var c = wt.c;
      var d = wt.d;
      var tx = wt.tx;
      var ty = wt.ty;
      var vertexData = this.vertexData;
      var trim = texture.trim;
      var orig = texture.orig;
      var anchor = this._anchor;

      var w0 = 0;
      var w1 = 0;
      var h0 = 0;
      var h1 = 0;

      if (trim) {
        // if the sprite is trimmed and is not a tilingsprite then we need to add the extra
        // space before transforming the sprite coords.
        w1 = trim.x - anchor._x * orig.width;
        w0 = w1 + trim.width;

        h1 = trim.y - anchor._y * orig.height;
        h0 = h1 + trim.height;
      } else {
        w1 = -anchor._x * orig.width;
        w0 = w1 + orig.width;

        h1 = -anchor._y * orig.height;
        h0 = h1 + orig.height;
      }

      // xy
      vertexData[0] = a * w1 + c * h1 + tx;
      vertexData[1] = d * h1 + b * w1 + ty;

      // xy
      vertexData[2] = a * w0 + c * h1 + tx;
      vertexData[3] = d * h1 + b * w0 + ty;

      // xy
      vertexData[4] = a * w0 + c * h0 + tx;
      vertexData[5] = d * h0 + b * w0 + ty;

      // xy
      vertexData[6] = a * w1 + c * h0 + tx;
      vertexData[7] = d * h0 + b * w1 + ty;
    }

    /**
     * calculates worldTransform * vertices for a non texture with a trim. store it in vertexTrimmedData
     * This is used to ensure that the true width and height of a trimmed texture is respected
     */

  }, {
    key: 'calculateTrimmedVertices',
    value: function calculateTrimmedVertices() {
      if (!this.vertexTrimmedData) {
        this.vertexTrimmedData = new Float32Array(8);
      } else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) {
        return;
      }

      this._transformTrimmedID = this.transform._worldID;
      this._textureTrimmedID = this._texture._updateID;

      // lets do some special trim code!
      var texture = this._texture;
      var vertexData = this.vertexTrimmedData;
      var orig = texture.orig;
      var anchor = this._anchor;

      // lets calculate the new untrimmed bounds..
      var wt = this.transform.worldTransform;
      var a = wt.a;
      var b = wt.b;
      var c = wt.c;
      var d = wt.d;
      var tx = wt.tx;
      var ty = wt.ty;

      var w1 = -anchor._x * orig.width;
      var w0 = w1 + orig.width;

      var h1 = -anchor._y * orig.height;
      var h0 = h1 + orig.height;

      // xy
      vertexData[0] = a * w1 + c * h1 + tx;
      vertexData[1] = d * h1 + b * w1 + ty;

      // xy
      vertexData[2] = a * w0 + c * h1 + tx;
      vertexData[3] = d * h1 + b * w0 + ty;

      // xy
      vertexData[4] = a * w0 + c * h0 + tx;
      vertexData[5] = d * h0 + b * w0 + ty;

      // xy
      vertexData[6] = a * w1 + c * h0 + tx;
      vertexData[7] = d * h0 + b * w1 + ty;
    }

    /**
     *
     * Renders the object using the WebGL renderer
     *
     * @private
     * @param {Tiny.WebGLRenderer} renderer - The webgl renderer to use.
     */

  }, {
    key: '_renderWebGL',
    value: function _renderWebGL(renderer) {
      this.calculateVertices();

      renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
      renderer.plugins[this.pluginName].render(this);
    }

    /**
     * Renders the object using the Canvas renderer
     *
     * @private
     * @param {Tiny.CanvasRenderer} renderer - The renderer
     */

  }, {
    key: '_renderCanvas',
    value: function _renderCanvas(renderer) {
      renderer.plugins[this.pluginName].render(this);
    }

    /**
     * Updates the bounds of the sprite.
     *
     * @private
     */

  }, {
    key: '_calculateBounds',
    value: function _calculateBounds() {
      var trim = this._texture.trim;
      var orig = this._texture.orig;

      // First lets check to see if the current texture has a trim..
      if (!trim || trim.width === orig.width && trim.height === orig.height) {
        // no trim! lets use the usual calculations..
        this.calculateVertices();
        this._bounds.addQuad(this.vertexData);
      } else {
        // lets calculate a special trimmed bounds...
        this.calculateTrimmedVertices();
        this._bounds.addQuad(this.vertexTrimmedData);
      }
    }

    /**
     * Gets the local bounds of the sprite object.
     *
     * @param {Tiny.Rectangle} rect - The output rectangle.
     * @return {Tiny.Rectangle} The bounds.
     */

  }, {
    key: 'getLocalBounds',
    value: function getLocalBounds(rect) {
      // we can do a fast local bounds if the sprite has no children!
      if (this.children.length === 0) {
        this._bounds.minX = this._texture.orig.width * -this._anchor._x;
        this._bounds.minY = this._texture.orig.height * -this._anchor._y;
        this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x);
        this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._x);

        if (!rect) {
          if (!this._localBoundsRect) {
            this._localBoundsRect = new _math.Rectangle();
          }

          rect = this._localBoundsRect;
        }

        return this._bounds.getRectangle(rect);
      }

      return _get(Sprite.prototype.__proto__ || Object.getPrototypeOf(Sprite.prototype), 'getLocalBounds', this).call(this, rect);
    }

    /**
     * Tests if a point is inside this sprite
     *
     * @param {Tiny.Point} point - the point to test
     * @return {boolean} the result of the test
     */

  }, {
    key: 'containsPoint',
    value: function containsPoint(point) {
      this.worldTransform.applyInverse(point, tempPoint);

      var width = this._texture.orig.width;
      var height = this._texture.orig.height;
      var x1 = -width * this.anchor.x;
      var y1 = 0;

      if (tempPoint.x > x1 && tempPoint.x < x1 + width) {
        y1 = -height * this.anchor.y;

        if (tempPoint.y > y1 && tempPoint.y < y1 + height) {
          return true;
        }
      }

      return false;
    }

    /**
     * Destroys this sprite and optionally its texture and children
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *      method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
     * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
     */

  }, {
    key: 'destroy',
    value: function destroy(options) {
      _get(Sprite.prototype.__proto__ || Object.getPrototypeOf(Sprite.prototype), 'destroy', this).call(this, options);

      this._anchor = null;

      var destroyTexture = typeof options === 'boolean' ? options : options && options.texture;

      if (destroyTexture) {
        var destroyBaseTexture = typeof options === 'boolean' ? options : options && options.baseTexture;

        this._texture.destroy(!!destroyBaseTexture);
      }

      this._texture = null;
      this.shader = null;
    }

    // some helper functions..

    /**
     * Helper function that creates a new sprite based on the source you provide.
     * The source can be - frame id, image url, video url, canvas element, video element, base texture
     *
     * @static
     * @param {number|string|Tiny.BaseTexture|HTMLCanvasElement|HTMLVideoElement} source Source to create texture from
     * @return {Tiny.Sprite} The newly created texture
     */

  }, {
    key: 'setAnchor',


    /**
     *
     * @param x
     * @param y
     */
    value: function setAnchor(x, y) {
      this.anchor.set(x, y === void 0 ? x : y);
    }

    /**
     *
     * @return {object}
     */

  }, {
    key: 'getAnchor',
    value: function getAnchor() {
      return this.anchor;
    }

    /**
     * The width of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */

  }, {
    key: 'width',
    get: function get() {
      return Math.abs(this.scale.x) * this._texture.orig.width;
    },
    set: function set(value) {
      var s = (0, _utils.sign)(this.scale.x) || 1;

      this.scale.x = s * value / this._texture.orig.width;
      this._width = value;
    }

    /**
     * The height of the sprite, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */

  }, {
    key: 'height',
    get: function get() {
      return Math.abs(this.scale.y) * this._texture.orig.height;
    },
    set: function set(value) {
      var s = (0, _utils.sign)(this.scale.y) || 1;

      this.scale.y = s * value / this._texture.orig.height;
      this._height = value;
    }

    /**
     * The anchor sets the origin point of the texture.
     * The default is 0,0 this means the texture's origin is the top left
     * Setting the anchor to 0.5,0.5 means the texture's origin is centered
     * Setting the anchor to 1,1 would mean the texture's origin point will be the bottom right corner
     *
     * @member {Tiny.ObservablePoint}
     */

  }, {
    key: 'anchor',
    get: function get() {
      return this._anchor;
    },
    set: function set(value) {
      this._anchor.copy(value);
    }

    /**
     * The tint applied to the sprite. This is a hex value.
     * A value of 0xFFFFFF will remove any tint effect.
     *
     * @member {number}
     * @default 0xFFFFFF
     */

  }, {
    key: 'tint',
    get: function get() {
      return this._tint;
    },
    set: function set(value) {
      this._tint = value;
      this._tintRGB = (value >> 16) + (value & 0xff00) + ((value & 0xff) << 16);
    }

    /**
     * The texture that the sprite is using
     *
     * @member {Tiny.Texture}
     */

  }, {
    key: 'texture',
    get: function get() {
      return this._texture;
    },
    set: function set(value) {
      if (this._texture === value) {
        return;
      }

      this._texture = value;
      this.cachedTint = 0xFFFFFF;

      this._textureID = -1;
      this._textureTrimmedID = -1;

      if (value) {
        // wait for the texture to load
        if (value.baseTexture.hasLoaded) {
          this._onTextureUpdate();
        } else {
          value.once('update', this._onTextureUpdate, this);
        }
      }
    }
  }], [{
    key: 'from',
    value: function from(source) {
      return new Sprite(_Texture2.default.from(source));
    }

    /**
     * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId
     * The frame ids are created when a Texture packer file has been loaded
     *
     * @static
     * @param {string} frameId - The frame Id of the texture in the cache
     * @return {Tiny.Sprite} A new Sprite using a texture from the texture cache matching the frameId
     */

  }, {
    key: 'fromFrame',
    value: function fromFrame(frameId) {
      var texture = _utils.TextureCache[frameId];

      if (!texture) {
        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache');
      }

      return new Sprite(texture);
    }

    /**
     * Helper function that creates a sprite that will contain a texture based on an image url
     * If the image is not in the texture cache it will be loaded
     *
     * @static
     * @param {string} imageId - The image url of the texture
     * @param {boolean} [crossorigin=(auto)] - if you want to specify the cross-origin parameter
     * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - if you want to specify the scale mode,
     *  see {@link Tiny.SCALE_MODES} for possible values
     * @return {Tiny.Sprite} A new Sprite using a texture from the texture cache matching the image id
     */

  }, {
    key: 'fromImage',
    value: function fromImage(imageId, crossorigin, scaleMode) {
      return new Sprite(_Texture2.default.fromImage(imageId, crossorigin, scaleMode));
    }
  }]);

  return Sprite;
}(_Container3.default);

exports.default = Sprite;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseRenderTexture = __webpack_require__(61);

var _BaseRenderTexture2 = _interopRequireDefault(_BaseRenderTexture);

var _Texture2 = __webpack_require__(7);

var _Texture3 = _interopRequireDefault(_Texture2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A RenderTexture is a special texture that allows any display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A RenderTexture takes a snapshot of any Display Object given to its render method. For example:
 *
 * ```js
 * let renderer = (new Tiny.Application()).renderer;
 * let renderTexture = Tiny.RenderTexture.create(800, 600);
 * let sprite = Tiny.Sprite.fromImage('spinObj_01.png');
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * renderer.render(sprite, renderTexture);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 *
 * sprite.setTransform()
 *
 * let renderTexture = new Tiny.RenderTexture.create(100, 100);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends Tiny.Texture
 * @memberof Tiny
 */
var RenderTexture = function (_Texture) {
  _inherits(RenderTexture, _Texture);

  /**
   * @param {Tiny.BaseRenderTexture} baseRenderTexture - The renderer used for this RenderTexture
   * @param {Tiny.Rectangle} [frame] - The rectangle frame of the texture to show
   */
  function RenderTexture(baseRenderTexture, frame) {
    _classCallCheck(this, RenderTexture);

    // support for legacy..
    var _legacyRenderer = null;

    if (!(baseRenderTexture instanceof _BaseRenderTexture2.default)) {
      /* eslint-disable prefer-rest-params, no-console */
      var width = arguments[1];
      var height = arguments[2];
      var scaleMode = arguments[3];
      var resolution = arguments[4];

      // we have an old render texture..
      console.warn('Please use RenderTexture.create(' + width + ', ' + height + ') instead of the ctor directly.');
      _legacyRenderer = arguments[0];
      /* eslint-enable prefer-rest-params, no-console */

      frame = null;
      baseRenderTexture = new _BaseRenderTexture2.default(width, height, scaleMode, resolution);
    }

    /**
     * The base texture object that this texture uses
     *
     * @member {BaseTexture}
     */

    var _this = _possibleConstructorReturn(this, (RenderTexture.__proto__ || Object.getPrototypeOf(RenderTexture)).call(this, baseRenderTexture, frame));

    _this.legacyRenderer = _legacyRenderer;

    /**
     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
     *
     * @member {boolean}
     */
    _this.valid = true;

    _this._updateUvs();
    return _this;
  }

  /**
   * Resizes the RenderTexture.
   *
   * @param {number} width - The width to resize to.
   * @param {number} height - The height to resize to.
   * @param {boolean} doNotResizeBaseTexture - Should the baseTexture.width and height values be resized as well?
   */


  _createClass(RenderTexture, [{
    key: 'resize',
    value: function resize(width, height, doNotResizeBaseTexture) {
      // TODO - could be not required..
      this.valid = width > 0 && height > 0;

      this._frame.width = this.orig.width = width;
      this._frame.height = this.orig.height = height;

      if (!doNotResizeBaseTexture) {
        this.baseTexture.resize(width, height);
      }

      this._updateUvs();
    }

    /**
     * A short hand way of creating a render texture.
     *
     * @param {number} [width=100] - The width of the render texture
     * @param {number} [height=100] - The height of the render texture
     * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
     * @param {number} [resolution=1] - The resolution / device pixel ratio of the texture being generated
     * @return {Tiny.RenderTexture} The new render texture
     */

  }], [{
    key: 'create',
    value: function create(width, height, scaleMode, resolution) {
      return new RenderTexture(new _BaseRenderTexture2.default(width, height, scaleMode, resolution));
    }
  }]);

  return RenderTexture;
}(_Texture3.default);

exports.default = RenderTexture;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ticker = exports.shared = undefined;

var _Ticker = __webpack_require__(124);

var _Ticker2 = _interopRequireDefault(_Ticker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The shared ticker instance used by {@link Tiny.AnimatedSprite}.
 * and by {@link Tiny.interaction.InteractionManager}.
 * The property {@link Tiny.ticker.Ticker#autoStart} is set to `true`
 * for this instance. Please follow the examples for usage, including
 * how to opt-out of auto-starting the shared ticker.
 *
 * @example
 * let ticker = Tiny.ticker.shared;
 * // Set this to prevent starting this ticker when listeners are added.
 * // By default this is true only for the Tiny.ticker.shared instance.
 * ticker.autoStart = false;
 * // FYI, call this to ensure the ticker is stopped. It should be stopped
 * // if you have not attempted to render anything yet.
 * ticker.stop();
 * // Call this when you are ready for a running shared ticker.
 * ticker.start();
 *
 * @example
 * // You may use the shared ticker to render...
 * let renderer = new Tiny.CanvasRenderer(800, 600);
 * let stage = new Tiny.Container();
 * document.body.appendChild(renderer.view);
 * ticker.add(function (time) {
 *     renderer.render(stage);
 * });
 *
 * @example
 * // Or you can just update it manually.
 * ticker.autoStart = false;
 * ticker.stop();
 * function animate(time) {
 *     ticker.update(time);
 *     renderer.render(stage);
 *     requestAnimationFrame(animate);
 * }
 * animate(performance.now());
 *
 * @type {Tiny.ticker.Ticker}
 * @memberof Tiny.ticker
 */
var shared = new _Ticker2.default();

shared.autoStart = true;
shared.destroy = function () {
  // protect destroying shared ticker
  // this is used by other internal systems
  // like AnimatedSprite and InteractionManager
};

/**
 * This namespace contains an API for interacting with Tiny's internal global update loop.
 *
 * This ticker is used for rendering, {@link Tiny.AnimatedSprite AnimatedSprite},
 * {@link Tiny.interaction.InteractionManager InteractionManager} and many other time-based Tiny systems.
 * @example
 * const ticker = new Tiny.ticker.Ticker();
 * ticker.stop();
 * ticker.add((deltaTime) => {
 *   // do something every frame
 * });
 * ticker.start();
 * @namespace Tiny.ticker
 */
exports.shared = shared;
exports.Ticker = _Ticker2.default;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _ActionInterval = __webpack_require__(45);

var ActionInterval = _interopRequireWildcard(_ActionInterval);

var _Action = __webpack_require__(21);

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 各种转场
 *
 * 内置的所有转场如下表：
 *
 * | 转场名 | 描述
 * | :--: | :--
 * | FadeColor | 颜色过渡
 * | FadeWhite | 白色过渡
 * | ProgressH | 横向进度
 * | ProgressV | 纵向进度
 * | ProgressInOut | 内=>外扩散
 * | ProgressOutIn | 外=>内扩散
 * | ProgressRadialCW | 顺时针射线
 * | ProgressRadialCCW | 逆时针射线
 * | MoveInL | 左侧移入
 * | MoveInR | 右侧移入
 * | MoveInT | 头部移入
 * | MoveInB | 底部移入
 * | SlideInL | 左=>右滑动
 * | SlideInR | 右=>左滑动
 * | SlideInT | 头=>底滑动
 * | SlideInB | 底=>头滑动
 *
 * @example
 * var app = new Tiny.Application()
 * app.replaceScene(sceneName, 'MoveInL', 300);
 *
 * @class
 * @memberof Tiny
 */
var Transition = function () {
  /**
   *
   * @param {Tiny.DisplayObject}  stage
   * @param {Tiny.DisplayObject}  scene
   * @param {number}  duration
   */
  function Transition(stage, scene, duration) {
    _classCallCheck(this, Transition);

    this.stage = stage;
    this.scene = scene;
    this.duration = duration || 600;
  }

  /**
   *
   * @param color
   * @private
   */


  _createClass(Transition, [{
    key: 'Fade',
    value: function Fade(color) {
      var self = this;
      var fadeOutAction = ActionInterval.FadeOut(this.duration);
      var fadeInAction = ActionInterval.FadeIn(this.duration);

      var g = new core.Graphics();
      g.beginFill(color || 0x000000);
      g.drawRect(0, 0, core.WIN_SIZE.width, core.WIN_SIZE.height);
      g.endFill();
      g.setOpacity(0);

      self.stage.addChild(g);

      fadeInAction.onComplete = function () {
        self.stage.removeChildren();
        self.stage.addChild(self.scene);
        self.stage.addChild(g);
        g.runAction(fadeOutAction);
      };

      g.runAction(fadeInAction);
    }

    /**
     *
     */

  }, {
    key: 'FadeWhite',
    value: function FadeWhite() {
      this.Fade(0xFFFFFF);
    }

    /**
     * @example
     *
     * var app = new Tiny.Application()
     * app.replaceScene(sceneName, 'FadeColor', 500, 0xFF0000);
     */

  }, {
    key: 'FadeColor',
    value: function FadeColor(arg) {
      this.Fade(arg[0]);
    }

    /**
     * @private
     */

  }, {
    key: 'Progress',
    value: function Progress(action, g) {
      var self = this;

      self.stage.addChild(self.scene);
      self.stage.addChild(g);

      self.scene.mask = g;

      //    self.stage.children.forEach(function (child) {
      //        child.mask = g;
      //    });

      action.onComplete = function () {
        self.scene.mask = null;
        self.stage.removeChildren();
        self.stage.addChild(self.scene);
      };

      g.runAction(action);
    }

    /**
     *
     */

  }, {
    key: 'ProgressH',
    value: function ProgressH() {
      var moveToAction = ActionInterval.MoveTo(this.duration, { x: core.WIN_SIZE.width });

      var g = new core.Graphics();
      g.beginFill(0xFFFFFF);
      g.drawRect(-core.WIN_SIZE.width, 0, core.WIN_SIZE.width, core.WIN_SIZE.height);
      g.endFill();

      this.Progress(moveToAction, g);
    }

    /**
     *
     */

  }, {
    key: 'ProgressV',
    value: function ProgressV() {
      var moveToAction = ActionInterval.MoveTo(this.duration, { y: core.WIN_SIZE.height });

      var g = new core.Graphics();
      g.beginFill(0xFFFFFF);
      g.drawRect(0, -core.WIN_SIZE.height, core.WIN_SIZE.width, core.WIN_SIZE.height);
      g.endFill();

      this.Progress(moveToAction, g);
    }

    /**
     *
     */

  }, {
    key: 'ProgressInOut',
    value: function ProgressInOut() {
      var scaleToAction = ActionInterval.ScaleTo(this.duration, core.scale(core.WIN_SIZE.width, core.WIN_SIZE.height));

      var g = new core.Graphics();
      g.beginFill(0xFFFFFF);
      g.drawRect(0, 0, 1, 1);
      g.endFill();
      g.setPosition(core.WIN_SIZE.width / 2, core.WIN_SIZE.height / 2);
      g.setPivot(0.5);

      this.Progress(scaleToAction, g);
    }

    /**
     *
     */

  }, {
    key: 'ProgressOutIn',
    value: function ProgressOutIn() {
      var self = this;
      var scaleToAction = ActionInterval.ScaleTo(this.duration, core.scale(0));
      var moveToAction = ActionInterval.MoveTo(this.duration, core.point(core.WIN_SIZE.width / 2, core.WIN_SIZE.height / 2));

      var g = new core.Graphics();
      g.beginFill(0xFFFFFF);
      g.drawRect(0, 0, core.WIN_SIZE.width, core.WIN_SIZE.height);
      g.endFill();
      g.setPivot(0.5);

      var container = new core.Container();
      self.stage.children.forEach(function (child) {
        container.addChild(child);
      });
      container.mask = g;
      self.stage.removeChildren();
      self.stage.addChild(self.scene);
      self.stage.addChild(container);
      self.stage.addChild(g);

      scaleToAction.onComplete = function () {
        container.mask = null;
        self.stage.removeChild(container);
        self.stage.removeChild(g);
      };

      g.runAction([scaleToAction, moveToAction]);
    }

    /**
     * @private
     */

  }, {
    key: 'ProgressRadial',
    value: function ProgressRadial(ccw) {
      var rotateXY = function rotateXY(x, y, angle) {
        var rad = Math.PI * angle / 180;

        if (ccw) {
          rad = -rad;
        }

        var cosVal = Math.cos(rad);
        var sinVal = Math.sin(rad);
        return new core.Point(cosVal * x - sinVal * y, sinVal * x + cosVal * y);
      };
      var computeMaskPolygon = function computeMaskPolygon(x, y, radius, angle) {
        while (angle < 0) {
          angle += 360;
        }
        angle %= 360;

        var delta = rotateXY(0, -2 * radius, angle);
        var a270 = 270;
        var a90 = 90;
        var pts = [new core.Point(x, y - 2 * radius), new core.Point(x, y), new core.Point(x + delta.x, y + delta.y)];

        if (ccw) {
          a270 = 90;
          a90 = 270;
          pts.reverse();
        }

        if (angle > a270) {
          pts.push(new core.Point(x - 2 * radius, y));
        }
        if (angle > 180) {
          pts.push(new core.Point(x, y + 2 * radius));
        }
        if (angle > a90) {
          pts.push(new core.Point(x + 2 * radius, y));
        }

        return pts;
      };

      var centerX = core.WIN_SIZE.width / 2;
      var centerY = core.WIN_SIZE.height / 2;
      var radius = Math.max(core.WIN_SIZE.width, core.WIN_SIZE.height);

      var g = new core.Graphics();

      var updatePieMask = function updatePieMask(angle) {
        g.clear();
        var pts = computeMaskPolygon(centerX, centerY, radius, angle);
        g.beginFill(0xFFFFFF);
        g.moveTo(pts[0].x, pts[0].y);
        for (var i = 1; i < pts.length; ++i) {
          g.lineTo(pts[i].x, pts[i].y);
        }
        g.lineTo(pts[0].x, pts[0].y);
        g.endFill();
      };

      var action = new _Action2.default(this.duration, { angle: 360 });
      action.yoyo = false;
      action.repeatTimes = 0;
      action.onUpdate = function (tween, object) {
        updatePieMask(~~tween.angle);
      };

      this.Progress(action, g);
    }

    /**
     *
     */

  }, {
    key: 'ProgressRadialCW',
    value: function ProgressRadialCW() {
      this.ProgressRadial(false);
    }

    /**
     *
     */

  }, {
    key: 'ProgressRadialCCW',
    value: function ProgressRadialCCW() {
      this.ProgressRadial(true);
    }

    /**
     * @private
     */

  }, {
    key: 'MoveIn',
    value: function MoveIn() {
      var self = this;
      var action = ActionInterval.MoveTo(this.duration, new core.Point());

      self.stage.addChild(self.scene);

      action.onComplete = function () {
        self.stage.removeChildren();
        self.stage.addChild(self.scene);
      };

      self.scene.runAction(action);
    }

    /**
     *
     */

  }, {
    key: 'MoveInL',
    value: function MoveInL() {
      this.scene.setPositionX(-core.WIN_SIZE.width);
      this.MoveIn();
    }

    /**
     *
     */

  }, {
    key: 'MoveInR',
    value: function MoveInR() {
      this.scene.setPositionX(core.WIN_SIZE.width);
      this.MoveIn();
    }

    /**
     *
     */

  }, {
    key: 'MoveInT',
    value: function MoveInT() {
      this.scene.setPositionY(-core.WIN_SIZE.height);
      this.MoveIn();
    }

    /**
     *
     */

  }, {
    key: 'MoveInB',
    value: function MoveInB() {
      this.scene.setPositionY(core.WIN_SIZE.height);
      this.MoveIn();
    }

    /**
     * @private
     */

  }, {
    key: 'SlideIn',
    value: function SlideIn(x, y) {
      var self = this;
      var container = new core.Container();
      self.stage.children.forEach(function (child) {
        container.addChild(child);
      });
      self.stage.removeChildren();

      container.addChild(self.scene);

      self.scene.setPosition(x, y);
      self.stage.addChild(container);
      var action = ActionInterval.MoveTo(this.duration, { x: -x, y: -y });

      action.onComplete = function () {
        self.stage.removeChildren();
        self.scene.setPosition(0);
        self.stage.addChild(self.scene);
      };

      container.runAction(action);
    }

    /**
     *
     */

  }, {
    key: 'SlideInL',
    value: function SlideInL() {
      this.SlideIn(-core.WIN_SIZE.width, 0);
    }

    /**
     *
     */

  }, {
    key: 'SlideInR',
    value: function SlideInR() {
      this.SlideIn(core.WIN_SIZE.width, 0);
    }

    /**
     *
     */

  }, {
    key: 'SlideInT',
    value: function SlideInT() {
      this.SlideIn(0, -core.WIN_SIZE.height);
    }

    /**
     *
     */

  }, {
    key: 'SlideInB',
    value: function SlideInB() {
      this.SlideIn(0, core.WIN_SIZE.height);
    }
  }]);

  return Transition;
}();

exports.default = Transition;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function splitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};

// path.relative(from, to)
// posix version
exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};

exports.basename = function (path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  return splitPath(path)[3];
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }
  return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Helper class to create a WebGL Texture
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param width {number} the width of the texture
 * @param height {number} the height of the texture
 * @param format {number} the pixel format of the texture. defaults to gl.RGBA
 * @param type {number} the gl type of the texture. defaults to gl.UNSIGNED_BYTE
 */
var Texture = function Texture(gl, width, height, format, type) {
	/**
  * The current WebGL rendering context
  *
  * @member {WebGLRenderingContext}
  */
	this.gl = gl;

	/**
  * The WebGL texture
  *
  * @member {WebGLTexture}
  */
	this.texture = gl.createTexture();

	/**
  * If mipmapping was used for this texture, enable and disable with enableMipmap()
  *
  * @member {Boolean}
  */
	// some settings..
	this.mipmap = false;

	/**
  * Set to true to enable pre-multiplied alpha
  *
  * @member {Boolean}
  */
	this.premultiplyAlpha = false;

	/**
  * The width of texture
  *
  * @member {Number}
  */
	this.width = width || -1;
	/**
  * The height of texture
  *
  * @member {Number}
  */
	this.height = height || -1;

	/**
  * The pixel format of the texture. defaults to gl.RGBA
  *
  * @member {Number}
  */
	this.format = format || gl.RGBA;

	/**
  * The gl type of the texture. defaults to gl.UNSIGNED_BYTE
  *
  * @member {Number}
  */
	this.type = type || gl.UNSIGNED_BYTE;
};

/**
 * Uploads this texture to the GPU
 * @param source {HTMLImageElement|ImageData|HTMLVideoElement} the source image of the texture
 */
Texture.prototype.upload = function (source) {
	this.bind();

	var gl = this.gl;

	gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

	var newWidth = source.videoWidth || source.width;
	var newHeight = source.videoHeight || source.height;

	if (newHeight !== this.height || newWidth !== this.width) {
		gl.texImage2D(gl.TEXTURE_2D, 0, this.format, this.format, this.type, source);
	} else {
		gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, this.format, this.type, source);
	}

	// if the source is a video, we need to use the videoWidth / videoHeight properties as width / height will be incorrect.
	this.width = newWidth;
	this.height = newHeight;
};

var FLOATING_POINT_AVAILABLE = false;

/**
 * Use a data source and uploads this texture to the GPU
 * @param data {TypedArray} the data to upload to the texture
 * @param width {number} the new width of the texture
 * @param height {number} the new height of the texture
 */
Texture.prototype.uploadData = function (data, width, height) {
	this.bind();

	var gl = this.gl;

	if (data instanceof Float32Array) {
		if (!FLOATING_POINT_AVAILABLE) {
			var ext = gl.getExtension("OES_texture_float");

			if (ext) {
				FLOATING_POINT_AVAILABLE = true;
			} else {
				throw new Error('floating point textures not available');
			}
		}

		this.type = gl.FLOAT;
	} else {
		// TODO support for other types
		this.type = this.type || gl.UNSIGNED_BYTE;
	}

	// what type of data?
	gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);

	if (width !== this.width || height !== this.height) {
		gl.texImage2D(gl.TEXTURE_2D, 0, this.format, width, height, 0, this.format, this.type, data || null);
	} else {
		gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, this.format, this.type, data || null);
	}

	this.width = width;
	this.height = height;

	//	texSubImage2D
};

/**
 * Binds the texture
 * @param  location
 */
Texture.prototype.bind = function (location) {
	var gl = this.gl;

	if (location !== undefined) {
		gl.activeTexture(gl.TEXTURE0 + location);
	}

	gl.bindTexture(gl.TEXTURE_2D, this.texture);
};

/**
 * Unbinds the texture
 */
Texture.prototype.unbind = function () {
	var gl = this.gl;
	gl.bindTexture(gl.TEXTURE_2D, null);
};

/**
 * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
 */
Texture.prototype.minFilter = function (linear) {
	var gl = this.gl;

	this.bind();

	if (this.mipmap) {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
	} else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, linear ? gl.LINEAR : gl.NEAREST);
	}
};

/**
 * @param linear {Boolean} if we want to use linear filtering or nearest neighbour interpolation
 */
Texture.prototype.magFilter = function (linear) {
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, linear ? gl.LINEAR : gl.NEAREST);
};

/**
 * Enables mipmapping
 */
Texture.prototype.enableMipmap = function () {
	var gl = this.gl;

	this.bind();

	this.mipmap = true;

	gl.generateMipmap(gl.TEXTURE_2D);
};

/**
 * Enables linear filtering
 */
Texture.prototype.enableLinearScaling = function () {
	this.minFilter(true);
	this.magFilter(true);
};

/**
 * Enables nearest neighbour interpolation
 */
Texture.prototype.enableNearestScaling = function () {
	this.minFilter(false);
	this.magFilter(false);
};

/**
 * Enables clamping on the texture so WebGL will not repeat it
 */
Texture.prototype.enableWrapClamp = function () {
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
};

/**
 * Enable tiling on the texture
 */
Texture.prototype.enableWrapRepeat = function () {
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
};

Texture.prototype.enableWrapMirrorRepeat = function () {
	var gl = this.gl;

	this.bind();

	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
};

/**
 * Destroys this texture
 */
Texture.prototype.destroy = function () {
	var gl = this.gl;
	//TODO
	gl.deleteTexture(this.texture);
};

/**
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param source {HTMLImageElement|ImageData} the source image of the texture
 * @param premultiplyAlpha {Boolean} If we want to use pre-multiplied alpha
 */
Texture.fromSource = function (gl, source, premultiplyAlpha) {
	var texture = new Texture(gl);
	texture.premultiplyAlpha = premultiplyAlpha || false;
	texture.upload(source);

	return texture;
};

/**
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param data {TypedArray} the data to upload to the texture
 * @param width {number} the new width of the texture
 * @param height {number} the new height of the texture
 */
Texture.fromData = function (gl, data, width, height) {
	//console.log(data, width, height);
	var texture = new Texture(gl);
	texture.uploadData(data, width, height);

	return texture;
};

module.exports = Texture;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// var GL_MAP = {};

/**
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param attribs {*}
 * @param state {*}
 */
var setVertexAttribArrays = function setVertexAttribArrays(gl, attribs, state) {
    var i;
    if (state) {
        var tempAttribState = state.tempAttribState,
            attribState = state.attribState;

        for (i = 0; i < tempAttribState.length; i++) {
            tempAttribState[i] = false;
        }

        // set the new attribs
        for (i = 0; i < attribs.length; i++) {
            tempAttribState[attribs[i].attribute.location] = true;
        }

        for (i = 0; i < attribState.length; i++) {
            if (attribState[i] !== tempAttribState[i]) {
                attribState[i] = tempAttribState[i];

                if (state.attribState[i]) {
                    gl.enableVertexAttribArray(i);
                } else {
                    gl.disableVertexAttribArray(i);
                }
            }
        }
    } else {
        for (i = 0; i < attribs.length; i++) {
            var attrib = attribs[i];
            gl.enableVertexAttribArray(attrib.attribute.location);
        }
    }
};

module.exports = setVertexAttribArrays;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param attributeLocations {Object} An attribute location map that lets you manually set the attribute locations
 * @return {WebGLProgram} the shader program
 */
var compileProgram = function compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations) {
    var glVertShader = compileShader(gl, gl.VERTEX_SHADER, vertexSrc);
    var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSrc);

    var program = gl.createProgram();

    gl.attachShader(program, glVertShader);
    gl.attachShader(program, glFragShader);

    // optionally, set the attributes manually for the program rather than letting WebGL decide..
    if (attributeLocations) {
        for (var i in attributeLocations) {
            gl.bindAttribLocation(program, attributeLocations[i], i);
        }
    }

    gl.linkProgram(program);

    // if linking fails, then log and cleanup
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Pixi.js Error: Could not initialize shader.');
        console.error('gl.VALIDATE_STATUS', gl.getProgramParameter(program, gl.VALIDATE_STATUS));
        console.error('gl.getError()', gl.getError());

        // if there is a program info log, log it
        if (gl.getProgramInfoLog(program) !== '') {
            console.warn('Pixi.js Warning: gl.getProgramInfoLog()', gl.getProgramInfoLog(program));
        }

        gl.deleteProgram(program);
        program = null;
    }

    // clean up some shaders
    gl.deleteShader(glVertShader);
    gl.deleteShader(glFragShader);

    return program;
};

/**
 * @private
 * @param gl {WebGLRenderingContext} The current WebGL context {WebGLProgram}
 * @param type {Number} the type, can be either VERTEX_SHADER or FRAGMENT_SHADER
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @return {WebGLShader} the shader
 */
var compileShader = function compileShader(gl, type, src) {
    var shader = gl.createShader(type);

    gl.shaderSource(shader, src);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
};

module.exports = compileProgram;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @class
 * @memberof PIXI.glCore.shader
 * @param type {String} Type of value
 * @param size {Number}
 */
var defaultValue = function defaultValue(type, size) {
    switch (type) {
        case 'float':
            return 0;

        case 'vec2':
            return new Float32Array(2 * size);

        case 'vec3':
            return new Float32Array(3 * size);

        case 'vec4':
            return new Float32Array(4 * size);

        case 'int':
        case 'sampler2D':
            return 0;

        case 'ivec2':
            return new Int32Array(2 * size);

        case 'ivec3':
            return new Int32Array(3 * size);

        case 'ivec4':
            return new Int32Array(4 * size);

        case 'bool':
            return false;

        case 'bvec2':

            return booleanArray(2 * size);

        case 'bvec3':
            return booleanArray(3 * size);

        case 'bvec4':
            return booleanArray(4 * size);

        case 'mat2':
            return new Float32Array([1, 0, 0, 1]);

        case 'mat3':
            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);

        case 'mat4':
            return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
};

var booleanArray = function booleanArray(size) {
    var array = new Array(size);

    for (var i = 0; i < array.length; i++) {
        array[i] = false;
    }

    return array;
};

module.exports = defaultValue;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapType = __webpack_require__(20);
var mapSize = __webpack_require__(41);

/**
 * Extracts the attributes
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param program {WebGLProgram} The shader program to get the attributes from
 * @return attributes {Object}
 */
var extractAttributes = function extractAttributes(gl, program) {
    var attributes = {};

    var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < totalAttributes; i++) {
        var attribData = gl.getActiveAttrib(program, i);
        var type = mapType(gl, attribData.type);

        attributes[attribData.name] = {
            type: type,
            size: mapSize(type),
            location: gl.getAttribLocation(program, attribData.name),
            //TODO - make an attribute object
            pointer: pointer
        };
    }

    return attributes;
};

var pointer = function pointer(type, normalized, stride, start) {
    // console.log(this.location)
    gl.vertexAttribPointer(this.location, this.size, type || gl.FLOAT, normalized || false, stride || 0, start || 0);
};

module.exports = extractAttributes;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapType = __webpack_require__(20);
var defaultValue = __webpack_require__(37);

/**
 * Extracts the uniforms
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param program {WebGLProgram} The shader program to get the uniforms from
 * @return uniforms {Object}
 */
var extractUniforms = function extractUniforms(gl, program) {
  var uniforms = {};

  var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);

  for (var i = 0; i < totalUniforms; i++) {
    var uniformData = gl.getActiveUniform(program, i);
    var name = uniformData.name.replace(/\[.*?\]/, "");
    var type = mapType(gl, uniformData.type);

    uniforms[name] = {
      type: type,
      size: uniformData.size,
      location: gl.getUniformLocation(program, name),
      value: defaultValue(type, uniformData.size)
    };
  }

  return uniforms;
};

module.exports = extractUniforms;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Extracts the attributes
 * @class
 * @memberof PIXI.glCore.shader
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param uniforms {Array} @mat ?
 * @return attributes {Object}
 */
var generateUniformAccessObject = function generateUniformAccessObject(gl, uniformData) {
    // this is the object we will be sending back.
    // an object hierachy will be created for structs
    var uniforms = { data: {} };

    uniforms.gl = gl;

    var uniformKeys = Object.keys(uniformData);

    for (var i = 0; i < uniformKeys.length; i++) {
        var fullName = uniformKeys[i];

        var nameTokens = fullName.split('.');
        var name = nameTokens[nameTokens.length - 1];

        var uniformGroup = getUniformGroup(nameTokens, uniforms);

        var uniform = uniformData[fullName];
        uniformGroup.data[name] = uniform;

        uniformGroup.gl = gl;

        Object.defineProperty(uniformGroup, name, {
            get: generateGetter(name),
            set: generateSetter(name, uniform)
        });
    }

    return uniforms;
};

var generateGetter = function generateGetter(name) {
    var template = getterTemplate.replace('%%', name);
    return new Function(template); // jshint ignore:line
};

var generateSetter = function generateSetter(name, uniform) {
    var template = setterTemplate.replace(/%%/g, name);
    var setTemplate;

    if (uniform.size === 1) {
        setTemplate = GLSL_TO_SINGLE_SETTERS[uniform.type];
    } else {
        setTemplate = GLSL_TO_ARRAY_SETTERS[uniform.type];
    }

    if (setTemplate) {
        template += "\nthis.gl." + setTemplate + ";";
    }

    return new Function('value', template); // jshint ignore:line
};

var getUniformGroup = function getUniformGroup(nameTokens, uniform) {
    var cur = uniform;

    for (var i = 0; i < nameTokens.length - 1; i++) {
        var o = cur[nameTokens[i]] || { data: {} };
        cur[nameTokens[i]] = o;
        cur = o;
    }

    return cur;
};

var getterTemplate = ['return this.data.%%.value;'].join('\n');

var setterTemplate = ['this.data.%%.value = value;', 'var location = this.data.%%.location;'].join('\n');

var GLSL_TO_SINGLE_SETTERS = {

    'float': 'uniform1f(location, value)',

    'vec2': 'uniform2f(location, value[0], value[1])',
    'vec3': 'uniform3f(location, value[0], value[1], value[2])',
    'vec4': 'uniform4f(location, value[0], value[1], value[2], value[3])',

    'int': 'uniform1i(location, value)',
    'ivec2': 'uniform2i(location, value[0], value[1])',
    'ivec3': 'uniform3i(location, value[0], value[1], value[2])',
    'ivec4': 'uniform4i(location, value[0], value[1], value[2], value[3])',

    'bool': 'uniform1i(location, value)',
    'bvec2': 'uniform2i(location, value[0], value[1])',
    'bvec3': 'uniform3i(location, value[0], value[1], value[2])',
    'bvec4': 'uniform4i(location, value[0], value[1], value[2], value[3])',

    'mat2': 'uniformMatrix2fv(location, false, value)',
    'mat3': 'uniformMatrix3fv(location, false, value)',
    'mat4': 'uniformMatrix4fv(location, false, value)',

    'sampler2D': 'uniform1i(location, value)'
};

var GLSL_TO_ARRAY_SETTERS = {

    'float': 'uniform1fv(location, value)',

    'vec2': 'uniform2fv(location, value)',
    'vec3': 'uniform3fv(location, value)',
    'vec4': 'uniform4fv(location, value)',

    'int': 'uniform1iv(location, value)',
    'ivec2': 'uniform2iv(location, value)',
    'ivec3': 'uniform3iv(location, value)',
    'ivec4': 'uniform4iv(location, value)',

    'bool': 'uniform1iv(location, value)',
    'bvec2': 'uniform2iv(location, value)',
    'bvec3': 'uniform3iv(location, value)',
    'bvec4': 'uniform4iv(location, value)',

    'sampler2D': 'uniform1iv(location, value)'
};

module.exports = generateUniformAccessObject;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @class
 * @memberof PIXI.glCore.shader
 * @param type {String}
 * @return {Number}
 */
var mapSize = function mapSize(type) {
    return GLSL_TO_SIZE[type];
};

var GLSL_TO_SIZE = {
    'float': 1,
    'vec2': 2,
    'vec3': 3,
    'vec4': 4,

    'int': 1,
    'ivec2': 2,
    'ivec3': 3,
    'ivec4': 4,

    'bool': 1,
    'bvec2': 2,
    'bvec3': 3,
    'bvec4': 4,

    'mat2': 4,
    'mat3': 9,
    'mat4': 16,

    'sampler2D': 1
};

module.exports = mapSize;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Sets the float precision on the shader. If the precision is already present this function will do nothing
 * @param {string} src       the shader source
 * @param {string} precision The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 *
 * @return {string} modified shader source
 */
var setPrecision = function setPrecision(src, precision) {
    if (src.substring(0, 9) !== 'precision') {
        return 'precision ' + precision + ' float;\n' + src;
    }

    return src;
};

module.exports = setPrecision;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = earcut;

function earcut(data, holeIndices, dim) {

    dim = dim || 2;

    var hasHoles = holeIndices && holeIndices.length,
        outerLen = hasHoles ? holeIndices[0] * dim : data.length,
        outerNode = linkedList(data, 0, outerLen, dim, true),
        triangles = [];

    if (!outerNode) return triangles;

    var minX, minY, maxX, maxY, x, y, size;

    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);

    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];

        for (var i = dim; i < outerLen; i += dim) {
            x = data[i];
            y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }

        // minX, minY and size are later used to transform coords into integers for z-order calculation
        size = Math.max(maxX - minX, maxY - minY);
    }

    earcutLinked(outerNode, triangles, dim, minX, minY, size);

    return triangles;
}

// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    var i, last;

    if (clockwise === signedArea(data, start, end, dim) > 0) {
        for (i = start; i < end; i += dim) {
            last = insertNode(i, data[i], data[i + 1], last);
        }
    } else {
        for (i = end - dim; i >= start; i -= dim) {
            last = insertNode(i, data[i], data[i + 1], last);
        }
    }

    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }

    return last;
}

// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;

    var p = start,
        again;
    do {
        again = false;

        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) return null;
            again = true;
        } else {
            p = p.next;
        }
    } while (again || p !== end);

    return end;
}

// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, size, pass) {
    if (!ear) return;

    // interlink polygon nodes in z-order
    if (!pass && size) indexCurve(ear, minX, minY, size);

    var stop = ear,
        prev,
        next;

    // iterate through ears, slicing them one by one
    while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;

        if (size ? isEarHashed(ear, minX, minY, size) : isEar(ear)) {
            // cut off the triangle
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);

            removeNode(ear);

            // skipping the next vertice leads to less sliver triangles
            ear = next.next;
            stop = next.next;

            continue;
        }

        ear = next;

        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, size, 1);

                // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(ear, triangles, dim);
                earcutLinked(ear, triangles, dim, minX, minY, size, 2);

                // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, size);
            }

            break;
        }
    }
}

// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // now make sure we don't have other points inside the potential ear
    var p = ear.next.next;

    while (p !== ear.prev) {
        if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }

    return true;
}

function isEarHashed(ear, minX, minY, size) {
    var a = ear.prev,
        b = ear,
        c = ear.next;

    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear

    // triangle bbox; min & max are calculated like this for speed
    var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x,
        minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y,
        maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x,
        maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;

    // z-order range for the current triangle bbox;
    var minZ = zOrder(minTX, minTY, minX, minY, size),
        maxZ = zOrder(maxTX, maxTY, minX, minY, size);

    // first look for points inside the triangle in increasing z-order
    var p = ear.nextZ;

    while (p && p.z <= maxZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.nextZ;
    }

    // then look for points in decreasing z-order
    p = ear.prevZ;

    while (p && p.z >= minZ) {
        if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }

    return true;
}

// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles, dim) {
    var p = start;
    do {
        var a = p.prev,
            b = p.next.next;

        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {

            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);

            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);

            p = start = b;
        }
        p = p.next;
    } while (p !== start);

    return p;
}

// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, size) {
    // look for a valid diagonal that divides the polygon into two
    var a = start;
    do {
        var b = a.next.next;
        while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                var c = splitPolygon(a, b);

                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);

                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, size);
                earcutLinked(c, triangles, dim, minX, minY, size);
                return;
            }
            b = b.next;
        }
        a = a.next;
    } while (a !== start);
}

// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    var queue = [],
        i,
        len,
        start,
        end,
        list;

    for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }

    queue.sort(compareX);

    // process holes from left to right
    for (i = 0; i < queue.length; i++) {
        eliminateHole(queue[i], outerNode);
        outerNode = filterPoints(outerNode, outerNode.next);
    }

    return outerNode;
}

function compareX(a, b) {
    return a.x - b.x;
}

// find a bridge between vertices that connects hole with an outer ring and and link it
function eliminateHole(hole, outerNode) {
    outerNode = findHoleBridge(hole, outerNode);
    if (outerNode) {
        var b = splitPolygon(outerNode, hole);
        filterPoints(b, b.next);
    }
}

// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    var p = outerNode,
        hx = hole.x,
        hy = hole.y,
        qx = -Infinity,
        m;

    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    do {
        if (hy <= p.y && hy >= p.next.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                if (x === hx) {
                    if (hy === p.y) return p;
                    if (hy === p.next.y) return p.next;
                }
                m = p.x < p.next.x ? p : p.next;
            }
        }
        p = p.next;
    } while (p !== outerNode);

    if (!m) return null;

    if (hx === qx) return m.prev; // hole touches outer segment; pick lower endpoint

    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point

    var stop = m,
        mx = m.x,
        my = m.y,
        tanMin = Infinity,
        tan;

    p = m.next;

    while (p !== stop) {
        if (hx >= p.x && p.x >= mx && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {

            tan = Math.abs(hy - p.y) / (hx - p.x); // tangential

            if ((tan < tanMin || tan === tanMin && p.x > m.x) && locallyInside(p, hole)) {
                m = p;
                tanMin = tan;
            }
        }

        p = p.next;
    }

    return m;
}

// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, size) {
    var p = start;
    do {
        if (p.z === null) p.z = zOrder(p.x, p.y, minX, minY, size);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    } while (p !== start);

    p.prevZ.nextZ = null;
    p.prevZ = null;

    sortLinked(p);
}

// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    var i,
        p,
        q,
        e,
        tail,
        numMerges,
        pSize,
        qSize,
        inSize = 1;

    do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;

        while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }

            qSize = inSize;

            while (pSize > 0 || qSize > 0 && q) {

                if (pSize === 0) {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                } else if (qSize === 0 || !q) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else if (p.z <= q.z) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }

                if (tail) tail.nextZ = e;else list = e;

                e.prevZ = tail;
                tail = e;
            }

            p = q;
        }

        tail.nextZ = null;
        inSize *= 2;
    } while (numMerges > 1);

    return list;
}

// z-order of a point given coords and size of the data bounding box
function zOrder(x, y, minX, minY, size) {
    // coords are transformed into non-negative 15-bit integer range
    x = 32767 * (x - minX) / size;
    y = 32767 * (y - minY) / size;

    x = (x | x << 8) & 0x00FF00FF;
    x = (x | x << 4) & 0x0F0F0F0F;
    x = (x | x << 2) & 0x33333333;
    x = (x | x << 1) & 0x55555555;

    y = (y | y << 8) & 0x00FF00FF;
    y = (y | y << 4) & 0x0F0F0F0F;
    y = (y | y << 2) & 0x33333333;
    y = (y | y << 1) & 0x55555555;

    return x | y << 1;
}

// find the leftmost node of a polygon ring
function getLeftmost(start) {
    var p = start,
        leftmost = start;
    do {
        if (p.x < leftmost.x) leftmost = p;
        p = p.next;
    } while (p !== start);

    return leftmost;
}

// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
}

// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b);
}

// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}

// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}

// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    if (equals(p1, q1) && equals(p2, q2) || equals(p1, q2) && equals(p2, q1)) return true;
    return area(p1, q1, p2) > 0 !== area(p1, q1, q2) > 0 && area(p2, q2, p1) > 0 !== area(p2, q2, q1) > 0;
}

// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    var p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
        p = p.next;
    } while (p !== a);

    return false;
}

// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}

// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    var p = a,
        inside = false,
        px = (a.x + b.x) / 2,
        py = (a.y + b.y) / 2;
    do {
        if (p.y > py !== p.next.y > py && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
        p = p.next;
    } while (p !== a);

    return inside;
}

// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    var a2 = new Node(a.i, a.x, a.y),
        b2 = new Node(b.i, b.x, b.y),
        an = a.next,
        bp = b.prev;

    a.next = b;
    b.prev = a;

    a2.next = an;
    an.prev = a2;

    b2.next = a2;
    a2.prev = b2;

    bp.next = b2;
    b2.prev = bp;

    return b2;
}

// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    var p = new Node(i, x, y);

    if (!last) {
        p.prev = p;
        p.next = p;
    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}

function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;

    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}

function Node(i, x, y) {
    // vertice index in coordinates array
    this.i = i;

    // vertex coordinates
    this.x = x;
    this.y = y;

    // previous and next vertice nodes in a polygon ring
    this.prev = null;
    this.next = null;

    // z-order curve value
    this.z = null;

    // previous and next nodes in z-order
    this.prevZ = null;
    this.nextZ = null;

    // indicates whether this is a steiner point
    this.steiner = false;
}

// return a percentage difference between the polygon area and its triangulation area;
// used to verify correctness of triangulation
earcut.deviation = function (data, holeIndices, dim, triangles) {
    var hasHoles = holeIndices && holeIndices.length;
    var outerLen = hasHoles ? holeIndices[0] * dim : data.length;

    var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
            var start = holeIndices[i] * dim;
            var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }

    var trianglesArea = 0;
    for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs((data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }

    return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
};

function signedArea(data, start, end, dim) {
    var sum = 0;
    for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}

// turn a polygon in a multi-dimensional array form (e.g. as in GeoJSON) into a form Earcut accepts
earcut.flatten = function (data) {
    var dim = data[0][0].length,
        result = { vertices: [], holes: [], dimensions: dim },
        holeIndex = 0;

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
            for (var d = 0; d < dim; d++) {
                result.vertices.push(data[i][j][d]);
            }
        }
        if (i > 0) {
            holeIndex += data[i - 1].length;
            result.holes.push(holeIndex);
        }
    }
    return result;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoveBy = MoveBy;
exports.MoveTo = MoveTo;
exports.ScaleBy = ScaleBy;
exports.ScaleTo = ScaleTo;
exports.RotateBy = RotateBy;
exports.RotateTo = RotateTo;
exports.JumpTo = JumpTo;
exports.Blink = Blink;
exports.FadeTo = FadeTo;
exports.FadeIn = FadeIn;
exports.FadeOut = FadeOut;
exports.TintBy = TintBy;
exports.TintTo = TintTo;
exports.RepeatForever = RepeatForever;
exports.Repeat = Repeat;
exports.Back = Back;

var _Action = __webpack_require__(21);

var _Action2 = _interopRequireDefault(_Action);

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @static
 * @memberof Tiny
 * @function MoveBy
 * @param {number}  duration
 * @param {object}  to
 * @param {number}  to.x
 * @param {number}  to.y
 * @return {Tiny.Action}
 */
function MoveBy(duration, to) {
  var _to = {};
  Object.assign(_to, to);
  var action = new _Action2.default(duration, _to);
  action._to = to;
  action._onStart = function (tween, object) {
    action.to.x = object.x + to.x;
    action.to.y = object.y + to.y;
  };
  action._onUpdate = function (tween, object) {
    object.setPosition(tween.x, tween.y);
  };
  action._type = 'MoveBy';
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function MoveTo
 * @param {number}  duration
 * @param {object}  to
 * @param {number}  to.x
 * @param {number}  to.y
 * @return {Tiny.Action}
 */
function MoveTo(duration, to) {
  var action = new _Action2.default(duration, to);
  action._onUpdate = function (tween, object) {
    object.setPosition(tween.x, tween.y);
  };
  action._type = 'MoveTo';
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function ScaleBy
 * @param {number}  duration
 * @param {object}  to
 * @param {object}  to.scaleX
 * @param {object}  to.scaleY
 * @return {Tiny.Action}
 */
function ScaleBy(duration, to) {
  var _to = {};
  Object.assign(_to, to);
  var action = new _Action2.default(duration, _to);
  action._to = to;
  action._onStart = function (tween, object) {
    action.to.scaleX = object.scale.x * to.scaleX;
    action.to.scaleY = object.scale.y * to.scaleY;
  };
  action._onUpdate = function (tween, object) {
    object.setScale(tween.scaleX, tween.scaleY);
  };
  action._type = 'ScaleBy';
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function ScaleTo
 * @param {number}  duration
 * @param {object}  to
 * @param {object}  to.scaleX
 * @param {object}  to.scaleY
 * @return {Tiny.Action}
 */
function ScaleTo(duration, to) {
  var action = new _Action2.default(duration, to);
  action._onUpdate = function (tween, object) {
    object.setScale(tween.scaleX, tween.scaleY);
  };
  action._type = 'ScaleTo';
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function RotateBy
 * @param {number}  duration
 * @param {object}  to
 * @param {number}  to.rotation
 * @return {Tiny.Action}
 */
function RotateBy(duration, to) {
  var _to = {};
  Object.assign(_to, to);
  var action = new _Action2.default(duration, _to);
  action._to = to;
  action._onStart = function (tween, object) {
    action.to.rotation = Tiny.deg2radian(Tiny.radian2deg(object.rotation) + Tiny.radian2deg(to.rotation));
  };
  action._onUpdate = function (tween, object) {
    object.rotation = tween.rotation;
  };
  action._type = 'RotateBy';
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function RotateTo
 * @param {number}  duration
 * @param {object}  to
 * @param {number}  to.rotation
 * @return {Tiny.Action}
 */
function RotateTo(duration, to) {
  var action = new _Action2.default(duration, to);
  action._onUpdate = function (tween, object) {
    object.rotation = tween.rotation;
  };
  action._type = 'RotateTo';
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function JumpTo
 * @param {number}  duration
 * @param {object}  to
 * @param {number}  height
 * @param {number}  times
 * @return {Tiny.Action}
 */
function JumpTo(duration, to, height, times) {
  var _to = {};
  Object.assign(_to, to);

  var newY = [];
  for (var i = 0; i < times * 2; i++) {
    if (i % 2 === 0) {
      newY.push(_to.y - height);
    } else {
      newY.push(_to.y);
    }
  }

  _to.y = newY;

  var action = new _Action2.default(duration, _to);
  action._to = to;
  action.yoyo = false;
  action.repeatTimes = 0;
  action._onUpdate = function (tween, object) {
    object.setPosition(tween.x, tween.y);
  };
  action._type = 'JumpTo';
  action._arg = [height, times];
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function Blink
 * @param {number}  hideDuration
 * @param {number}  showDuration
 * @return {Tiny.Action}
 */
function Blink(hideDuration, showDuration) {
  var newVisible = [];
  for (var i = 0; i < hideDuration; i++) {
    newVisible.push(false);
  }
  for (var _i = 0; _i < showDuration; _i++) {
    newVisible.push(true);
  }

  var action = new _Action2.default(showDuration + hideDuration, {
    visible: newVisible
  });
  action.yoyo = false;
  action.repeatTimes = 0;
  action._onUpdate = function (tween, object) {
    object.visible = ~~tween.visible;
  };
  action._type = 'Blink';
  action._arg = [hideDuration, showDuration];
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function FadeTo
 * @param {number}  duration
 * @param {number}  to
 * @return {Tiny.Action}
 */
function FadeTo(duration, to) {
  var action = new _Action2.default(duration, {
    alpha: to
  });
  action._to = to;
  action.yoyo = false;
  action.repeatTimes = 0;
  action._onUpdate = function (tween, object) {
    object.setOpacity(tween.alpha);
  };
  action._type = 'FadeTo';
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function FadeIn
 * @param {number}  duration
 * @return {Tiny.Action}
 */
function FadeIn(duration) {
  return FadeTo(duration, 1);
}

/**
 * @static
 * @memberof Tiny
 * @function FadeOut
 * @param {number}  duration
 * @return {Tiny.Action}
 */
function FadeOut(duration) {
  return FadeTo(duration, 0);
}

/**
 * 注意：差值计算时，R、G、B三个通道，无论加减多少，最后的结果最少是0，最多是255。
 *
 * @example
 *
 * var action = Tiny.TintBy(1000, Tiny.color(-85, 0, 85));
 * sprite.runAction(action);
 * //=> sprite.tint 等于 0xaaffff（即：[170, 255, 255]）
 *
 * @static
 * @memberof Tiny
 * @function TintBy
 * @param {number}              duration
 * @param {number|Tiny.color}   color       - 此处的 color 虽然是 Tiny.color 类型，但是并不代表某个色值，而是色值与色值直接要做的差值
 * @return {Tiny.Action}
 */
function TintBy(duration, color) {
  if (core.isNumber(color)) {
    color = core.hex2color(color);
  }
  var _to = {};
  Object.assign(_to, color);
  var action = TintTo(duration, _to);
  action._to = color;
  action._onStart = function (tween, object) {
    var oc = core.hex2rgb(object.tint);
    action.to.colorR = oc[0] * 255 + color.colorR;
    action.to.colorG = oc[1] * 255 + color.colorG;
    action.to.colorB = oc[2] * 255 + color.colorB;
    action.to.colorR <= 0 && (action.to.colorR = 0);
    action.to.colorG <= 0 && (action.to.colorG = 0);
    action.to.colorB <= 0 && (action.to.colorB = 0);
    action.to.colorR >= 255 && (action.to.colorR = 255);
    action.to.colorG >= 255 && (action.to.colorG = 255);
    action.to.colorB >= 255 && (action.to.colorB = 255);
  };
  action._type = 'TintBy';
  action._arg = [duration, color];
  return action;
}

/**
 * @example
 *
 * var action = Tiny.TintTo(1000, 0xFFFF00);
 * sprite.tint = 0xFF0000;
 * sprite.runAction(action);
 *
 * @example
 *
 * // [255, 102, 0] 即橙色（#FF6600）
 * var action = Tiny.TintTo(1000, Tiny.color(255, 102, 0));
 * sprite.runAction(action);
 *
 * @static
 * @memberof Tiny
 * @function TintTo
 * @param {number}              duration
 * @param {number|Tiny.color}   color
 * @return {Tiny.Action}
 */
function TintTo(duration, color) {
  if (core.isNumber(color)) {
    color = core.hex2color(color);
  }
  var action = new _Action2.default(duration, color);
  action._onUpdate = function (tween, object) {
    object.tint = core.rgb2hex([tween.colorR / 255, tween.colorG / 255, tween.colorB / 255]);
  };
  action._type = 'TintTo';
  action._arg = [duration, color];
  return action;
}

/**
 * @static
 * @memberof Tiny
 * @function RepeatForever
 * @param {Tiny.Action} action
 * @param {number} delay
 * @return {Tiny.Action}
 */
function RepeatForever(action, delay) {
  return Repeat(Infinity, action, delay);
}

/**
 * @static
 * @memberof Tiny
 * @function RepeatForever
 * @param {number}  times
 * @param {Tiny.Action} action
 * @param {number} delay
 * @return {Tiny.Action}
 */
function Repeat(times, action, delay) {
  !delay && action.repeatDelayTime && (delay = action.repeatDelayTime);

  if (action._type && ['MoveBy', 'ScaleBy', 'RotateBy', 'TintBy'].indexOf(action._type) !== -1) {
    action._onComplete = function (tween, object) {
      if (!object.__tmp_times) {
        object.__tmp_times = 1;
      }
      object.__tmp_times++;
      if (object.__tmp_times > times) {
        return;
      }
      if (action._caller === 'runAction') {
        var fn = void 0;
        switch (action._type) {
          case 'MoveBy':
            fn = MoveBy;
            break;
          case 'ScaleBy':
            fn = ScaleBy;
            break;
          case 'RotateBy':
            fn = RotateBy;
            break;
          case 'TintBy':
            fn = TintBy;
            break;
        }
        if (!fn) {
          return;
        }
        var act = fn(action.duration, Object.assign(Object.create(Object.prototype), action._to || action.to));
        act._onComplete = action._onComplete;
        delay && act.setDelay(delay);
        act.onStart = action.onStart;
        act.onUpdate = action.onUpdate;
        act.onComplete = action.onComplete;
        object.runAction(act);
      }
    };
    return action;
  }

  action.repeatDelayTime = delay;
  action.repeatTimes = times - 1;
  action._type = 'Repeat';
  return action;
}

/**
 * 原动作返回
 *
 * @static
 * @memberof Tiny
 * @function Back
 * @param {Tiny.Action} action
 * @return {Tiny.Action}
 */
function Back(action) {
  action.yoyo = true;
  if (!action.repeatTimes) {
    action.repeatTimes = 1;
  }
  if (action._type === 'Repeat') {
    action.repeatTimes = (action.repeatTimes - 1) * 2 + 1;
  }
  action._type = 'Back';
  return action;
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = __webpack_require__(6);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _const = __webpack_require__(0);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

var _TransformStatic = __webpack_require__(48);

var _TransformStatic2 = _interopRequireDefault(_TransformStatic);

var _Transform = __webpack_require__(47);

var _Transform2 = _interopRequireDefault(_Transform);

var _Bounds = __webpack_require__(22);

var _Bounds2 = _interopRequireDefault(_Bounds);

var _math = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * `The base class for all objects that are rendered on the screen.`
 * This is an abstract class and should not be used on its own rather it should be extended.
 *
 * @class
 * @extends EventEmitter
 * @memberof Tiny
 */
var DisplayObject = function (_EventEmitter) {
  _inherits(DisplayObject, _EventEmitter);

  /**
   *
   */
  function DisplayObject() {
    _classCallCheck(this, DisplayObject);

    var _this = _possibleConstructorReturn(this, (DisplayObject.__proto__ || Object.getPrototypeOf(DisplayObject)).call(this));

    var TransformClass = _settings2.default.TRANSFORM_MODE === _const.TRANSFORM_MODE.STATIC ? _TransformStatic2.default : _Transform2.default;

    _this.tempDisplayObjectParent = null;

    /**
     * World transform and local transform of this object.
     * This will become read-only later, please do not assign anything there unless you know what are you doing
     *
     * @member {Tiny.TransformBase}
     */
    _this.transform = new TransformClass();

    /**
     * The opacity of the object.
     *
     * @member {number}
     */
    _this.alpha = 1;

    /**
     * The visibility of the object. If false the object will not be drawn, and
     * the updateTransform function will not be called.
     *
     * Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually
     *
     * @member {boolean}
     */
    _this.visible = true;

    /**
     * Can this object be rendered, if false the object will not be drawn but the updateTransform
     * methods will still be called.
     *
     * Only affects recursive calls from parent. You can ask for bounds manually
     *
     * @member {boolean}
     */
    _this.renderable = true;

    /**
     * The display object container that contains this display object.
     *
     * @member {Tiny.Container}
     * @readonly
     */
    _this.parent = null;

    /**
     * The multiplied alpha of the displayObject
     *
     * @member {number}
     * @readonly
     */
    _this.worldAlpha = 1;

    /**
     * The area the filter is applied to. This is used as more of an optimisation
     * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle
     *
     * Also works as an interaction mask
     *
     * @member {Tiny.Rectangle}
     */
    _this.filterArea = null;

    _this._filters = null;
    _this._enabledFilters = null;

    /**
     * The bounds object, this is used to calculate and store the bounds of the displayObject
     *
     * @member {Tiny.Rectangle}
     * @private
     */
    _this._bounds = new _Bounds2.default();
    _this._boundsID = 0;
    _this._lastBoundsID = -1;
    _this._boundsRect = null;
    _this._localBoundsRect = null;

    /**
     * The original, cached mask of the object
     *
     * @member {Tiny.Graphics|Tiny.Sprite}
     * @private
     */
    _this._mask = null;

    /**
     * If the object has been destroyed via destroy(). If true, it should not be used.
     *
     * @member {boolean}
     * @private
     * @readonly
     */
    _this._destroyed = false;

    /**
     * The instance name of the object.
     *
     * @member {string}
     */
    _this.name = null;

    /**
     * Fired when this DisplayObject is added to a Container.
     *
     * @event Tiny.DisplayObject#added
     * @param {Tiny.Container} container - The container added to.
     */

    /**
     * Fired when this DisplayObject is removed from a Container.
     *
     * @event Tiny.DisplayObject#removed
     * @param {Tiny.Container} container - The container removed from.
     */
    return _this;
  }

  /**
   * @member {Tiny.DisplayObject}
   * @private
   */


  _createClass(DisplayObject, [{
    key: 'updateTransform',


    /**
     * Updates the object transform for rendering
     */
    value: function updateTransform() {
      this.transform.updateTransform(this.parent.transform);
      // multiply the alphas..
      this.worldAlpha = this.alpha * this.parent.worldAlpha;

      this._bounds.updateID++;
    }

    /**
     * recursively updates transform of all objects from the root to this one
     * internal function for toLocal()
     *
     * @private
     */

  }, {
    key: '_recursivePostUpdateTransform',
    value: function _recursivePostUpdateTransform() {
      if (this.parent) {
        this.parent._recursivePostUpdateTransform();
        this.transform.updateTransform(this.parent.transform);
      } else {
        this.transform.updateTransform(this._tempDisplayObjectParent.transform);
      }
    }

    /**
     * Retrieves the bounds of the displayObject as a rectangle object.
     *
     * @param {boolean} skipUpdate - setting to true will stop the transforms of the scene graph from
     *  being updated. This means the calculation returned MAY be out of date BUT will give you a
     *  nice performance boost
     * @param {Tiny.Rectangle} rect - Optional rectangle to store the result of the bounds calculation
     * @return {Tiny.Rectangle} the rectangular bounding area
     */

  }, {
    key: 'getBounds',
    value: function getBounds(skipUpdate, rect) {
      if (!skipUpdate) {
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.updateTransform();
          this.parent = null;
        } else {
          this._recursivePostUpdateTransform();
          this.updateTransform();
        }
      }

      if (this._boundsID !== this._lastBoundsID) {
        this.calculateBounds();
      }

      if (!rect) {
        if (!this._boundsRect) {
          this._boundsRect = new _math.Rectangle();
        }

        rect = this._boundsRect;
      }

      return this._bounds.getRectangle(rect);
    }

    /**
     * Retrieves the local bounds of the displayObject as a rectangle object
     *
     * @param {Tiny.Rectangle} [rect] - Optional rectangle to store the result of the bounds calculation
     * @return {Tiny.Rectangle} the rectangular bounding area
     */

  }, {
    key: 'getLocalBounds',
    value: function getLocalBounds(rect) {
      var transformRef = this.transform;
      var parentRef = this.parent;

      this.parent = null;
      this.transform = this._tempDisplayObjectParent.transform;

      if (!rect) {
        if (!this._localBoundsRect) {
          this._localBoundsRect = new _math.Rectangle();
        }

        rect = this._localBoundsRect;
      }

      var bounds = this.getBounds(false, rect);

      this.parent = parentRef;
      this.transform = transformRef;

      return bounds;
    }

    /**
     * Calculates the global position of the display object
     *
     * @param {Tiny.Point} position - The world origin to calculate from
     * @param {Tiny.Point} [point] - A Point object in which to store the value, optional
     *  (otherwise will create a new Point)
     * @param {boolean} [skipUpdate=false] - Should we skip the update transform.
     * @return {Tiny.Point} A point object representing the position of this object
     */

  }, {
    key: 'toGlobal',
    value: function toGlobal(position, point) {
      var skipUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!skipUpdate) {
        this._recursivePostUpdateTransform();

        // this parent check is for just in case the item is a root object.
        // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
        // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.displayObjectUpdateTransform();
          this.parent = null;
        } else {
          this.displayObjectUpdateTransform();
        }
      }

      // don't need to update the lot
      return this.worldTransform.apply(position, point);
    }

    /**
     * Calculates the local position of the display object relative to another point
     *
     * @param {Tiny.Point} position - The world origin to calculate from
     * @param {Tiny.DisplayObject} [from] - The DisplayObject to calculate the global position from
     * @param {Tiny.Point} [point] - A Point object in which to store the value, optional
     *  (otherwise will create a new Point)
     * @param {boolean} [skipUpdate=false] - Should we skip the update transform
     * @return {Tiny.Point} A point object representing the position of this object
     */

  }, {
    key: 'toLocal',
    value: function toLocal(position, from, point, skipUpdate) {
      if (from) {
        position = from.toGlobal(position, point, skipUpdate);
      }

      if (!skipUpdate) {
        this._recursivePostUpdateTransform();

        // this parent check is for just in case the item is a root object.
        // If it is we need to give it a temporary parent so that displayObjectUpdateTransform works correctly
        // this is mainly to avoid a parent check in the main loop. Every little helps for performance :)
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.displayObjectUpdateTransform();
          this.parent = null;
        } else {
          this.displayObjectUpdateTransform();
        }
      }

      // simply apply the matrix..
      return this.worldTransform.applyInverse(position, point);
    }

    /**
     * Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.
     *
     * @param {Tiny.Point} point - the point to write the global value to. If null a new point will be returned
     * @param {boolean} skipUpdate - setting to true will stop the transforms of the scene graph from
     *  being updated. This means the calculation returned MAY be out of date BUT will give you a
     *  nice performance boost
     * @return {Tiny.Point} The updated point
     */

  }, {
    key: 'getGlobalPosition',
    value: function getGlobalPosition() {
      var point = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _math.Point();
      var skipUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.parent) {
        this.parent.toGlobal(this.position, point, skipUpdate);
      } else {
        point.x = this.position.x;
        point.y = this.position.y;
      }
      return point;
    }

    /**
     * Returns the display object in the container
     *
     * @param {string} name - instance name
     * @return {Tiny.DisplayObject} The child with the specified name.
     */

  }, {
    key: 'getChildByName',
    value: function getChildByName(name) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].name === name) {
          return this.children[i];
        }
      }

      return null;
    }

    /**
     * Renders the object using the WebGL renderer
     *
     * @param {Tiny.WebGLRenderer} renderer - The renderer
     */

  }, {
    key: 'renderWebGL',
    value: function renderWebGL(renderer) {} // eslint-disable-line no-unused-vars
    // OVERWRITE;


    /**
     * Renders the object using the Canvas renderer
     *
     * @param {Tiny.CanvasRenderer} renderer - The renderer
     */

  }, {
    key: 'renderCanvas',
    value: function renderCanvas(renderer) {} // eslint-disable-line no-unused-vars
    // OVERWRITE;


    /**
     * Set the parent Container of this DisplayObject
     *
     * @param {Tiny.Container} container - The Container to add this DisplayObject to
     * @return {Tiny.Container} The Container that this DisplayObject was added to
     */

  }, {
    key: 'setParent',
    value: function setParent(container) {
      if (!container || !container.addChild) {
        throw new Error('setParent: Argument must be a Container');
      }

      container.addChild(this);

      return container;
    }

    /**
     * Convenience function to set the position, scale, skew and pivot at once.
     *
     * @param {number} [x=0] - The X position
     * @param {number} [y=0] - The Y position
     * @param {number} [scaleX=1] - The X scale value
     * @param {number} [scaleY=1] - The Y scale value
     * @param {number} [rotation=0] - The rotation
     * @param {number} [skewX=0] - The X skew value
     * @param {number} [skewY=0] - The Y skew value
     * @param {number} [pivotX=0] - The X pivot value
     * @param {number} [pivotY=0] - The Y pivot value
     * @return {Tiny.DisplayObject} The DisplayObject instance
     */

  }, {
    key: 'setTransform',
    value: function setTransform() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var scaleX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      var scaleY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var rotation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var skewX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      var skewY = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var pivotX = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;
      var pivotY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0;

      this.position.x = x;
      this.position.y = y;
      this.scale.x = !scaleX ? 1 : scaleX;
      this.scale.y = !scaleY ? 1 : scaleY;
      this.rotation = rotation;
      this.skew.x = skewX;
      this.skew.y = skewY;
      this.pivot.x = pivotX;
      this.pivot.y = pivotY;

      return this;
    }

    /**
     * 设置是否可交互
     *
     * @param {boolean} b
     */

  }, {
    key: 'setEventEnabled',
    value: function setEventEnabled(b) {
      this.interactive = !!b;
    }

    /**
     *
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: 'setPosition',
    value: function setPosition(x, y) {
      this.position.set(x, y === void 0 ? x : y);
    }

    /**
     *
     * @return {object}
     */

  }, {
    key: 'getPosition',
    value: function getPosition() {
      return this.position;
    }

    /**
     *
     * @param {number} x
     */

  }, {
    key: 'setPositionX',
    value: function setPositionX(x) {
      this.x = x;
    }

    /**
     *
     * @return {number}
     */

  }, {
    key: 'getPositionX',
    value: function getPositionX() {
      return this.x;
    }

    /**
     *
     * @param {number} y
     */

  }, {
    key: 'setPositionY',
    value: function setPositionY(y) {
      this.y = y;
    }

    /**
     *
     * @return {number}
     */

  }, {
    key: 'getPositionY',
    value: function getPositionY() {
      return this.y;
    }

    /**
     *
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: 'setPivot',
    value: function setPivot(x, y) {
      this.pivot.set(x, y === void 0 ? x : y);
    }

    /**
     *
     * @return {number}
     */

  }, {
    key: 'getPivot',
    value: function getPivot() {
      return this.pivot;
    }

    /**
     *
     * @param {number} rotation
     */

  }, {
    key: 'setRotation',
    value: function setRotation(rotation) {
      this.rotation = rotation;
    }

    /**
     *
     * @return {number}
     */

  }, {
    key: 'getRotation',
    value: function getRotation() {
      return this.rotation;
    }

    /**
     *
     * @param {number} alpha
     */

  }, {
    key: 'setOpacity',
    value: function setOpacity(alpha) {
      this.alpha = alpha;
    }

    /**
     *
     * @return {number}
     */

  }, {
    key: 'getOpacity',
    value: function getOpacity() {
      return this.alpha;
    }

    /**
     *
     * @param {boolean} visible
     */

  }, {
    key: 'setVisible',
    value: function setVisible(visible) {
      this.visible = visible;
    }

    /**
     *
     * @return {boolean}
     */

  }, {
    key: 'getVisible',
    value: function getVisible() {
      return this.visible;
    }

    /**
     *
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: 'setScale',
    value: function setScale(x, y) {
      this.scale.set(x, y === void 0 ? x : y);
    }

    /**
     *
     * @return {object}
     */

  }, {
    key: 'getScale',
    value: function getScale() {
      return this.scale;
    }

    /**
     *
     * @param {number} x
     * @param {number} y
     * @version 1.1.0
     */

  }, {
    key: 'setSkew',
    value: function setSkew(x, y) {
      this.skew.set(x, y === void 0 ? x : y);
    }

    /**
     *
     * @return {object}
     * @version 1.1.0
     */

  }, {
    key: 'getSkew',
    value: function getSkew() {
      return this.skew;
    }

    /**
     * 获取对象的属性：`x`, `y`, `angle`, `rotation`, `visible`, `alpha`, `scaleX`, `scaleY`, `skewX`, `skewY`, `colorR`, `colorG`, `colorB`
     *
     * @return {object}
     */

  }, {
    key: 'getNature',
    value: function getNature() {
      var tint = Tiny.hex2rgb(this.tint);
      return {
        x: this.x,
        y: this.y,
        angle: this.angle || 0,
        rotation: this.rotation,
        visible: this.visible,
        alpha: this.alpha,
        scaleX: this.scale.x,
        scaleY: this.scale.y,
        skewX: this.skew.x,
        skewY: this.skew.y,
        colorR: tint[0] * 255,
        colorG: tint[1] * 255,
        colorB: tint[2] * 255
      };
    }

    /**
     * Base destroy method for generic display objects. This will automatically
     * remove the display object from its parent Container as well as remove
     * all current event listeners and internal references. Do not use a DisplayObject
     * after calling `destroy`.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.removeAllListeners();
      if (this.parent) {
        this.parent.removeChild(this);
      }
      this.transform = null;

      this.parent = null;

      this._bounds = null;
      this._currentBounds = null;
      this._mask = null;

      this.filterArea = null;

      this.interactive = false;
      this.interactiveChildren = false;

      this._destroyed = true;
    }

    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     * An alias to position.x
     *
     * @member {number}
     */

  }, {
    key: '_tempDisplayObjectParent',
    get: function get() {
      if (this.tempDisplayObjectParent === null) {
        this.tempDisplayObjectParent = new DisplayObject();
      }

      return this.tempDisplayObjectParent;
    }
  }, {
    key: 'x',
    get: function get() {
      return this.position.x;
    },
    set: function set(value) {
      // eslint-disable-line require-jsdoc
      this.transform.position.x = value;
    }

    /**
     * The position of the displayObject on the y axis relative to the local coordinates of the parent.
     * An alias to position.y
     *
     * @member {number}
     */

  }, {
    key: 'y',
    get: function get() {
      return this.position.y;
    },
    set: function set(value) {
      // eslint-disable-line require-jsdoc
      this.transform.position.y = value;
    }

    /**
     * Current transform of the object based on world (parent) factors
     *
     * @member {Tiny.Matrix}
     * @readonly
     */

  }, {
    key: 'worldTransform',
    get: function get() {
      return this.transform.worldTransform;
    }

    /**
     * Current transform of the object based on local factors: position, scale, other stuff
     *
     * @member {Tiny.Matrix}
     * @readonly
     */

  }, {
    key: 'localTransform',
    get: function get() {
      return this.transform.localTransform;
    }

    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     * Assignment by value since pixi-v4.
     *
     * @member {Tiny.Point|Tiny.ObservablePoint}
     */

  }, {
    key: 'position',
    get: function get() {
      return this.transform.position;
    },
    set: function set(value) {
      // eslint-disable-line require-jsdoc
      this.transform.position.copy(value);
    }

    /**
     * The scale factor of the object.
     * Assignment by value since pixi-v4.
     *
     * @member {Tiny.Point|Tiny.ObservablePoint}
     */

  }, {
    key: 'scale',
    get: function get() {
      return this.transform.scale;
    },
    set: function set(value) {
      // eslint-disable-line require-jsdoc
      this.transform.scale.copy(value);
    }

    /**
     * The pivot point of the displayObject that it rotates around
     * Assignment by value since pixi-v4.
     *
     * @member {Tiny.Point|Tiny.ObservablePoint}
     */

  }, {
    key: 'pivot',
    get: function get() {
      return this.transform.pivot;
    },
    set: function set(value) {
      // eslint-disable-line require-jsdoc
      this.transform.pivot.copy(value);
    }

    /**
     * The skew factor for the object in radians.
     * Assignment by value since pixi-v4.
     *
     * @member {Tiny.ObservablePoint}
     */

  }, {
    key: 'skew',
    get: function get() {
      return this.transform.skew;
    },
    set: function set(value) {
      // eslint-disable-line require-jsdoc
      this.transform.skew.copy(value);
    }

    /**
     * The rotation of the object in radians.
     *
     * @member {number}
     */

  }, {
    key: 'rotation',
    get: function get() {
      return this.transform.rotation;
    },
    set: function set(value) {
      this.transform.rotation = value;
    }

    /**
     * Indicates if the object is globally visible.
     *
     * @member {boolean}
     * @readonly
     */

  }, {
    key: 'worldVisible',
    get: function get() {
      var item = this;

      do {
        if (!item.visible) {
          return false;
        }

        item = item.parent;
      } while (item);

      return true;
    }

    /**
     * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
     * object to the shape of the mask applied to it. In Tiny a regular mask must be a
     * Tiny.Graphics or a Tiny.Sprite object. This allows for much faster masking in canvas as it
     * utilises shape clipping. To remove a mask, set this property to null.
     *
     * @member {Tiny.Graphics|Tiny.Sprite}
     */

  }, {
    key: 'mask',
    get: function get() {
      return this._mask;
    },
    set: function set(value) {
      if (this._mask) {
        this._mask.renderable = true;
      }

      this._mask = value;

      if (this._mask) {
        this._mask.renderable = false;
      }
    }

    /**
     * Sets the filters for the displayObject.
     * * IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
     * To remove filters simply set this property to 'null'
     *
     * @member {array<Tiny.Filter>}
     */

  }, {
    key: 'filters',
    get: function get() {
      return this._filters && this._filters.slice();
    },
    set: function set(value) {
      this._filters = value && value.slice();
    }
  }]);

  return DisplayObject;
}(_eventemitter2.default);

// performance increase to avoid using call.. (10x faster)


exports.default = DisplayObject;
DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(2);

var _TransformBase2 = __webpack_require__(23);

var _TransformBase3 = _interopRequireDefault(_TransformBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Generic class to deal with traditional 2D matrix transforms
 * local transformation is calculated from position,scale,skew and rotation
 *
 * @class
 * @extends Tiny.TransformBase
 * @memberof Tiny
 */
var Transform = function (_TransformBase) {
  _inherits(Transform, _TransformBase);

  /**
   *
   */
  function Transform() {
    _classCallCheck(this, Transform);

    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     *
     * @member {Tiny.Point}
     */
    var _this = _possibleConstructorReturn(this, (Transform.__proto__ || Object.getPrototypeOf(Transform)).call(this));

    _this.position = new _math.Point(0, 0);

    /**
     * The scale factor of the object.
     *
     * @member {Tiny.Point}
     */
    _this.scale = new _math.Point(1, 1);

    /**
     * The skew amount, on the x and y axis.
     *
     * @member {Tiny.ObservablePoint}
     */
    _this.skew = new _math.ObservablePoint(_this.updateSkew, _this, 0, 0);

    /**
     * The pivot point of the displayObject that it rotates around
     *
     * @member {Tiny.Point}
     */
    _this.pivot = new _math.Point(0, 0);

    /**
     * The rotation value of the object, in radians
     *
     * @member {Number}
     * @private
     */
    _this._rotation = 0;

    _this._cx = 1; // cos rotation + skewY;
    _this._sx = 0; // sin rotation + skewY;
    _this._cy = 0; // cos rotation + Math.PI/2 - skewX;
    _this._sy = 1; // sin rotation + Math.PI/2 - skewX;
    return _this;
  }

  /**
   * Updates the skew values when the skew or rotation changes.
   *
   * @private
   */


  _createClass(Transform, [{
    key: 'updateSkew',
    value: function updateSkew() {
      this._cx = Math.cos(this._rotation + this.skew._y);
      this._sx = Math.sin(this._rotation + this.skew._y);
      this._cy = -Math.sin(this._rotation - this.skew._x); // cos, added PI/2
      this._sy = Math.cos(this._rotation - this.skew._x); // sin, added PI/2
    }

    /**
     * Updates only local matrix
     */

  }, {
    key: 'updateLocalTransform',
    value: function updateLocalTransform() {
      var lt = this.localTransform;

      lt.a = this._cx * this.scale.x;
      lt.b = this._sx * this.scale.x;
      lt.c = this._cy * this.scale.y;
      lt.d = this._sy * this.scale.y;

      lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
      lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
    }

    /**
     * Updates the values of the object and applies the parent's transform.
     *
     * @param {Tiny.Transform} parentTransform - The transform of the parent of this object
     */

  }, {
    key: 'updateTransform',
    value: function updateTransform(parentTransform) {
      var lt = this.localTransform;

      lt.a = this._cx * this.scale.x;
      lt.b = this._sx * this.scale.x;
      lt.c = this._cy * this.scale.y;
      lt.d = this._sy * this.scale.y;

      lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
      lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);

      // concat the parent matrix with the objects transform.
      var pt = parentTransform.worldTransform;
      var wt = this.worldTransform;

      wt.a = lt.a * pt.a + lt.b * pt.c;
      wt.b = lt.a * pt.b + lt.b * pt.d;
      wt.c = lt.c * pt.a + lt.d * pt.c;
      wt.d = lt.c * pt.b + lt.d * pt.d;
      wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
      wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

      this._worldID++;
    }

    /**
     * Decomposes a matrix and sets the transforms properties based on it.
     *
     * @param {Tiny.Matrix} matrix - The matrix to decompose
     */

  }, {
    key: 'setFromMatrix',
    value: function setFromMatrix(matrix) {
      matrix.decompose(this);
    }

    /**
     * The rotation of the object in radians.
     *
     * @member {number}
     */

  }, {
    key: 'rotation',
    get: function get() {
      return this._rotation;
    },
    set: function set(value) {
      this._rotation = value;
      this.updateSkew();
    }
  }]);

  return Transform;
}(_TransformBase3.default);

exports.default = Transform;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _math = __webpack_require__(2);

var _TransformBase2 = __webpack_require__(23);

var _TransformBase3 = _interopRequireDefault(_TransformBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Transform that takes care about its versions
 *
 * @class
 * @extends Tiny.TransformBase
 * @memberof Tiny
 */
var TransformStatic = function (_TransformBase) {
  _inherits(TransformStatic, _TransformBase);

  /**
   *
   */
  function TransformStatic() {
    _classCallCheck(this, TransformStatic);

    /**
     * The coordinate of the object relative to the local coordinates of the parent.
     *
     * @member {Tiny.ObservablePoint}
     */
    var _this = _possibleConstructorReturn(this, (TransformStatic.__proto__ || Object.getPrototypeOf(TransformStatic)).call(this));

    _this.position = new _math.ObservablePoint(_this.onChange, _this, 0, 0);

    /**
     * The scale factor of the object.
     *
     * @member {Tiny.ObservablePoint}
     */
    _this.scale = new _math.ObservablePoint(_this.onChange, _this, 1, 1);

    /**
     * The pivot point of the displayObject that it rotates around
     *
     * @member {Tiny.ObservablePoint}
     */
    _this.pivot = new _math.ObservablePoint(_this.onChange, _this, 0, 0);

    /**
     * The skew amount, on the x and y axis.
     *
     * @member {Tiny.ObservablePoint}
     */
    _this.skew = new _math.ObservablePoint(_this.updateSkew, _this, 0, 0);

    _this._rotation = 0;

    _this._cx = 1; // cos rotation + skewY;
    _this._sx = 0; // sin rotation + skewY;
    _this._cy = 0; // cos rotation + Math.PI/2 - skewX;
    _this._sy = 1; // sin rotation + Math.PI/2 - skewX;

    _this._localID = 0;
    _this._currentLocalID = 0;
    return _this;
  }

  /**
   * Called when a value changes.
   *
   * @private
   */


  _createClass(TransformStatic, [{
    key: 'onChange',
    value: function onChange() {
      this._localID++;
    }

    /**
     * Called when skew or rotation changes
     *
     * @private
     */

  }, {
    key: 'updateSkew',
    value: function updateSkew() {
      this._cx = Math.cos(this._rotation + this.skew._y);
      this._sx = Math.sin(this._rotation + this.skew._y);
      this._cy = -Math.sin(this._rotation - this.skew._x); // cos, added PI/2
      this._sy = Math.cos(this._rotation - this.skew._x); // sin, added PI/2

      this._localID++;
    }

    /**
     * Updates only local matrix
     */

  }, {
    key: 'updateLocalTransform',
    value: function updateLocalTransform() {
      var lt = this.localTransform;

      if (this._localID !== this._currentLocalID) {
        // get the matrix values of the displayobject based on its transform properties..
        lt.a = this._cx * this.scale._x;
        lt.b = this._sx * this.scale._x;
        lt.c = this._cy * this.scale._y;
        lt.d = this._sy * this.scale._y;

        lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
        lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
        this._currentLocalID = this._localID;

        // force an update..
        this._parentID = -1;
      }
    }

    /**
     * Updates the values of the object and applies the parent's transform.
     *
     * @param {Tiny.Transform} parentTransform - The transform of the parent of this object
     */

  }, {
    key: 'updateTransform',
    value: function updateTransform(parentTransform) {
      var lt = this.localTransform;

      if (this._localID !== this._currentLocalID) {
        // get the matrix values of the displayobject based on its transform properties..
        lt.a = this._cx * this.scale._x;
        lt.b = this._sx * this.scale._x;
        lt.c = this._cy * this.scale._y;
        lt.d = this._sy * this.scale._y;

        lt.tx = this.position._x - (this.pivot._x * lt.a + this.pivot._y * lt.c);
        lt.ty = this.position._y - (this.pivot._x * lt.b + this.pivot._y * lt.d);
        this._currentLocalID = this._localID;

        // force an update..
        this._parentID = -1;
      }

      if (this._parentID !== parentTransform._worldID) {
        // concat the parent matrix with the objects transform.
        var pt = parentTransform.worldTransform;
        var wt = this.worldTransform;

        wt.a = lt.a * pt.a + lt.b * pt.c;
        wt.b = lt.a * pt.b + lt.b * pt.d;
        wt.c = lt.c * pt.a + lt.d * pt.c;
        wt.d = lt.c * pt.b + lt.d * pt.d;
        wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
        wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;

        this._parentID = parentTransform._worldID;

        // update the id of the transform..
        this._worldID++;
      }
    }

    /**
     * Decomposes a matrix and sets the transforms properties based on it.
     *
     * @param {Tiny.Matrix} matrix - The matrix to decompose
     */

  }, {
    key: 'setFromMatrix',
    value: function setFromMatrix(matrix) {
      matrix.decompose(this);
      this._localID++;
    }

    /**
     * The rotation of the object in radians.
     *
     * @member {number}
     */

  }, {
    key: 'rotation',
    get: function get() {
      return this._rotation;
    },
    set: function set(value) {
      this._rotation = value;
      this.updateSkew();
    }
  }]);

  return TransformStatic;
}(_TransformBase3.default);

exports.default = TransformStatic;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A GraphicsData object.
 *
 * @class
 * @memberof Tiny
 */
var GraphicsData = function () {
  /**
   *
   * @param {number}                                                lineWidth   - the width of the line to draw
   * @param {number}                                                lineColor   - the color of the line to draw
   * @param {number}                                                lineAlpha   - the alpha of the line to draw
   * @param {number}                                                fillColor   - the color of the fill
   * @param {number}                                                fillAlpha   - the alpha of the fill
   * @param {boolean}                                               fill        - whether or not the shape is filled with a colour
   * @param {boolean}                                               nativeLines - the method for drawing lines
   * @param {Tiny.Circle|Tiny.Rectangle|Tiny.Ellipse|Tiny.Polygon}  shape       - The shape object to draw.
   */
  function GraphicsData(lineWidth, lineColor, lineAlpha, fillColor, fillAlpha, fill, nativeLines, shape) {
    _classCallCheck(this, GraphicsData);

    /**
     * @member {number} the width of the line to draw
     */
    this.lineWidth = lineWidth;

    /**
     * @member {boolean} if true the liens will be draw using LINES instead of TRIANGLE_STRIP
     */
    this.nativeLines = nativeLines;

    /**
     * @member {number} the color of the line to draw
     */
    this.lineColor = lineColor;

    /**
     * @member {number} the alpha of the line to draw
     */
    this.lineAlpha = lineAlpha;

    /**
     * @member {number} cached tint of the line to draw
     */
    this._lineTint = lineColor;

    /**
     * @member {number} the color of the fill
     */
    this.fillColor = fillColor;

    /**
     * @member {number} the alpha of the fill
     */
    this.fillAlpha = fillAlpha;

    /**
     * @member {number} cached tint of the fill
     */
    this._fillTint = fillColor;

    /**
     * @member {boolean} whether or not the shape is filled with a colour
     */
    this.fill = fill;

    this.holes = [];

    /**
     * @member {Tiny.Circle|Tiny.Ellipse|Tiny.Polygon|Tiny.Rectangle|Tiny.RoundedRectangle} The shape object to draw.
     */
    this.shape = shape;

    /**
     * @member {number} The type of the shape, see the Const.Shapes file for all the existing types,
     */
    this.type = shape.type;
  }

  /**
   * Creates a new GraphicsData object with the same values as this one.
   *
   * @return {Tiny.GraphicsData} Cloned GraphicsData object
   */


  _createClass(GraphicsData, [{
    key: "clone",
    value: function clone() {
      return new GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape);
    }

    /**
     * Adds a hole to the shape.
     *
     * @param {Tiny.Rectangle|Tiny.Circle} shape - The shape of the hole.
     */

  }, {
    key: "addHole",
    value: function addHole(shape) {
      this.holes.push(shape);
    }

    /**
     * Destroys the Graphics data.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.shape = null;
      this.holes = null;
    }
  }]);

  return GraphicsData;
}();

exports.default = GraphicsData;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Matrix = __webpack_require__(24);

var _Matrix2 = _interopRequireDefault(_Matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1]; // Your friendly neighbour https://en.wikipedia.org/wiki/Dihedral_group of order 16

var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
var tempMatrices = [];

var mul = [];

function signum(x) {
  if (x < 0) {
    return -1;
  }
  if (x > 0) {
    return 1;
  }

  return 0;
}

function init() {
  for (var i = 0; i < 16; i++) {
    var row = [];

    mul.push(row);

    for (var j = 0; j < 16; j++) {
      var _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
      var _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
      var _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
      var _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);

      for (var k = 0; k < 16; k++) {
        if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
          row.push(k);
          break;
        }
      }
    }
  }

  for (var _i = 0; _i < 16; _i++) {
    var mat = new _Matrix2.default();

    mat.set(ux[_i], uy[_i], vx[_i], vy[_i], 0, 0);
    tempMatrices.push(mat);
  }
}

init();

/**
 * Implements Dihedral Group D_8, see [group D4]{@link http://mathworld.wolfram.com/DihedralGroupD4.html},
 * D8 is the same but with diagonals. Used for texture rotations.
 *
 * Vector xX(i), xY(i) is U-axis of sprite with rotation i
 * Vector yY(i), yY(i) is V-axis of sprite with rotation i
 * Rotations: 0 grad (0), 90 grad (2), 180 grad (4), 270 grad (6)
 * Mirrors: vertical (8), main diagonal (10), horizontal (12), reverse diagonal (14)
 * This is the small part of gameofbombs.com portal system. It works.
 *
 * @author Ivan @ivanpopelyshev
 * @class
 * @memberof Tiny
 */
var GroupD8 = {
  E: 0,
  SE: 1,
  S: 2,
  SW: 3,
  W: 4,
  NW: 5,
  N: 6,
  NE: 7,
  MIRROR_VERTICAL: 8,
  MIRROR_HORIZONTAL: 12,
  uX: function uX(ind) {
    return ux[ind];
  },
  uY: function uY(ind) {
    return uy[ind];
  },
  vX: function vX(ind) {
    return vx[ind];
  },
  vY: function vY(ind) {
    return vy[ind];
  },
  inv: function inv(rotation) {
    if (rotation & 8) {
      return rotation & 15;
    }

    return -rotation & 7;
  },
  add: function add(rotationSecond, rotationFirst) {
    return mul[rotationSecond][rotationFirst];
  },
  sub: function sub(rotationSecond, rotationFirst) {
    return mul[rotationSecond][GroupD8.inv(rotationFirst)];
  },

  /**
   * Adds 180 degrees to rotation. Commutative operation.
   *
   * @memberof Tiny.GroupD8
   * @param {number} rotation - The number to rotate.
   * @return {number} rotated number
   */
  rotate180: function rotate180(rotation) {
    return rotation ^ 4;
  },

  /**
   * I dont know why sometimes width and heights needs to be swapped. We'll fix it later.
   *
   * @memberof Tiny.GroupD8
   * @param {number} rotation - The number to check.
   * @return {boolean} Whether or not the width/height should be swapped.
   */
  isSwapWidthHeight: function isSwapWidthHeight(rotation) {
    return (rotation & 3) === 2;
  },

  /**
   * @memberof Tiny.GroupD8
   * @param {number} dx - TODO
   * @param {number} dy - TODO
   *
   * @return {number} TODO
   */
  byDirection: function byDirection(dx, dy) {
    if (Math.abs(dx) * 2 <= Math.abs(dy)) {
      if (dy >= 0) {
        return GroupD8.S;
      }

      return GroupD8.N;
    } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
      if (dx > 0) {
        return GroupD8.E;
      }

      return GroupD8.W;
    } else if (dy > 0) {
      if (dx > 0) {
        return GroupD8.SE;
      }

      return GroupD8.SW;
    } else if (dx > 0) {
      return GroupD8.NE;
    }

    return GroupD8.NW;
  },

  /**
   * Helps sprite to compensate texture packer rotation.
   *
   * @memberof Tiny.GroupD8
   * @param {Tiny.Matrix} matrix - sprite world matrix
   * @param {number} rotation - The rotation factor to use.
   * @param {number} tx - sprite anchoring
   * @param {number} ty - sprite anchoring
   */
  matrixAppendRotationInv: function matrixAppendRotationInv(matrix, rotation) {
    var tx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var ty = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    // Packer used "rotation", we use "inv(rotation)"
    var mat = tempMatrices[GroupD8.inv(rotation)];

    mat.tx = tx;
    mat.ty = ty;
    matrix.append(mat);
  }
};

exports.default = GroupD8;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = __webpack_require__(6);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _utils = __webpack_require__(1);

var _math = __webpack_require__(2);

var _const = __webpack_require__(0);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

var _Container = __webpack_require__(8);

var _Container2 = _interopRequireDefault(_Container);

var _RenderTexture = __webpack_require__(28);

var _RenderTexture2 = _interopRequireDefault(_RenderTexture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tempMatrix = new _math.Matrix();

/**
 * The SystemRenderer is the base for a Tiny Renderer. It is extended by the {@link Tiny.CanvasRenderer}
 * and {@link Tiny.WebGLRenderer} which can be used for rendering a Tiny scene.
 *
 * @abstract
 * @class
 * @extends EventEmitter
 * @memberof Tiny
 */

var SystemRenderer = function (_EventEmitter) {
  _inherits(SystemRenderer, _EventEmitter);

  /**
   * @param {string}            system                              - The name of the system this renderer is for.
   * @param {number}            width                               - the width of the screen
   * @param {number}            height                              - the height of the screen
   * @param {object}            options                             - The optional renderer parameters
   * @param {HTMLCanvasElement} options.view                        - the canvas to use as a view, optional
   * @param {boolean}           options.antialias=false             - sets antialias (only applicable in chrome at the moment)
   * @param {boolean}           options.autoResize=false            - If the render view is automatically resized, default false
   * @param {number}            options.backgroundColor=0x000000    - The background color of the rendered area (shown if not transparent).
   * @param {boolean}           options.clearBeforeRender=true      - This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
   * @param {number}            options.resolution=1                - The resolution / device pixel ratio of the renderer. The resolution of the renderer retina would be 2.
   * @param {boolean}           options.roundPixels=false           - If true Tiny will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * @param {boolean}           options.transparent=false           - If the render view is transparent, default false
   */
  function SystemRenderer(system, width, height, options) {
    _classCallCheck(this, SystemRenderer);

    var _this = _possibleConstructorReturn(this, (SystemRenderer.__proto__ || Object.getPrototypeOf(SystemRenderer)).call(this));

    options = Object.assign({
      width: width,
      height: height
    }, options);

    // Add the default render options
    options = Object.assign({}, _settings2.default.RENDER_OPTIONS, options);

    /**
     * The supplied constructor options.
     *
     * @member {Object}
     * @readOnly
     */
    _this.options = options;
    // console.log(options);

    /**
     * The type of the renderer.
     *
     * @member {number}
     * @default Tiny.RENDERER_TYPE.UNKNOWN
     * @see Tiny.RENDERER_TYPE
     */
    _this.type = _const.RENDERER_TYPE.UNKNOWN;

    /**
     * Measurements of the screen. (0, 0, screenWidth, screenHeight)
     *
     * Its safe to use as filterArea or hitArea for whole stage
     *
     * @member {Tiny.Rectangle}
     */
    _this.screen = new _math.Rectangle(0, 0, options.width, options.height);

    /**
     * The canvas element that everything is drawn to
     *
     * @member {HTMLCanvasElement}
     */
    _this.view = options.view || document.createElement('canvas');

    /**
     * The resolution / device pixel ratio of the renderer
     *
     * @member {number}
     * @default 1
     */
    _this.resolution = options.resolution || _settings2.default.RESOLUTION;

    /**
     * Whether the render view is transparent
     *
     * @member {boolean}
     */
    _this.transparent = options.transparent;

    /**
     * Whether css dimensions of canvas view should be resized to screen dimensions automatically
     *
     * @member {boolean}
     */
    _this.autoResize = options.autoResize || false;

    /**
     * Tracks the blend modes useful for this renderer.
     *
     * @member {object<string, mixed>}
     */
    _this.blendModes = null;

    /**
     * The value of the preserveDrawingBuffer flag affects whether or not the contents of
     * the stencil buffer is retained after rendering.
     *
     * @member {boolean}
     */
    _this.preserveDrawingBuffer = options.preserveDrawingBuffer;

    /**
     * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.
     * If the scene is NOT transparent Tiny will use a canvas sized fillRect operation every
     * frame to set the canvas background color. If the scene is transparent Tiny will use clearRect
     * to clear the canvas every frame. Disable this by setting this to false. For example if
     * your game has a canvas filling background image you often don't need this set.
     *
     * @member {boolean}
     * @default
     */
    _this.clearBeforeRender = options.clearBeforeRender;

    /**
     * If true Tiny will Math.floor() x/y values when rendering, stopping pixel interpolation.
     * Handy for crisp pixel art and speed on legacy devices.
     *
     * @member {boolean}
     */
    _this.roundPixels = options.roundPixels;

    /**
     * The background color as a number.
     *
     * @member {number}
     * @private
     */
    _this._backgroundColor = 0x000000;

    /**
     * The background color as an [R, G, B] array.
     *
     * @member {number[]}
     * @private
     */
    _this._backgroundColorRgba = [0, 0, 0, 0];

    /**
     * The background color as a string.
     *
     * @member {string}
     * @private
     */
    _this._backgroundColorString = '#000000';

    _this.backgroundColor = options.backgroundColor || _this._backgroundColor; // run bg color setter

    /**
     * This temporary display object used as the parent of the currently being rendered item
     *
     * @member {Tiny.DisplayObject}
     * @private
     */
    _this._tempDisplayObjectParent = new _Container2.default();

    /**
     * The last root object that the renderer tried to render.
     *
     * @member {Tiny.DisplayObject}
     * @private
     */
    _this._lastObjectRendered = _this._tempDisplayObjectParent;
    return _this;
  }

  /**
   * Same as view.width, actual number of pixels in the canvas by horizontal
   *
   * @member {number}
   * @readonly
   * @default 800
   */


  _createClass(SystemRenderer, [{
    key: 'resize',


    /**
     * Resizes the screen and canvas to the specified width and height
     * Canvas dimensions are multiplied by resolution
     *
     * @param {number} screenWidth - the new width of the screen
     * @param {number} screenHeight - the new height of the screen
     */
    value: function resize(screenWidth, screenHeight) {
      this.screen.width = screenWidth;
      this.screen.height = screenHeight;

      this.view.width = screenWidth * this.resolution;
      this.view.height = screenHeight * this.resolution;

      if (this.autoResize) {
        this.view.style.width = screenWidth + 'px';
        this.view.style.height = screenHeight + 'px';

        _const.WIN_SIZE.width = Math.round(this.width);
        _const.WIN_SIZE.height = Math.round(this.height);
      }
    }

    /**
     * Useful function that returns a texture of the display object that can then be used to create sprites
     * This can be quite useful if your displayObject is complicated and needs to be reused multiple times.
     *
     * @param {Tiny.DisplayObject} displayObject - The displayObject the object will be generated from
     * @param {number} scaleMode - Should be one of the scaleMode consts
     * @param {number} resolution - The resolution / device pixel ratio of the texture being generated
     * @return {Tiny.Texture} a texture of the graphics object
     */

  }, {
    key: 'generateTexture',
    value: function generateTexture(displayObject, scaleMode, resolution) {
      var bounds = displayObject.getLocalBounds();

      var renderTexture = _RenderTexture2.default.create(bounds.width | 0, bounds.height | 0, scaleMode, resolution);

      tempMatrix.tx = -bounds.x;
      tempMatrix.ty = -bounds.y;

      this.render(displayObject, renderTexture, false, tempMatrix, true);

      return renderTexture;
    }

    /**
     * Removes everything from the renderer and optionally removes the Canvas DOM element.
     *
     * @param {boolean} [removeView=false] - Removes the Canvas element from the DOM.
     */

  }, {
    key: 'destroy',
    value: function destroy(removeView) {
      if (removeView && this.view.parentNode) {
        this.view.parentNode.removeChild(this.view);
      }

      this.type = _const.RENDERER_TYPE.UNKNOWN;

      this.view = null;

      this.screen = null;

      this.resolution = 0;

      this.transparent = false;

      this.autoResize = false;

      this.blendModes = null;

      this.options = null;

      this.preserveDrawingBuffer = false;
      this.clearBeforeRender = false;

      this.roundPixels = false;

      this._backgroundColor = 0;
      this._backgroundColorRgba = null;
      this._backgroundColorString = null;

      this.backgroundColor = 0;
      this._tempDisplayObjectParent = null;
      this._lastObjectRendered = null;
    }

    /**
     * The background color to fill if not transparent
     *
     * @member {number}
     */

  }, {
    key: 'width',
    get: function get() {
      return this.view.width;
    }

    /**
     * Same as view.height, actual number of pixels in the canvas by vertical
     *
     * @member {number}
     * @readonly
     * @default 600
     */

  }, {
    key: 'height',
    get: function get() {
      return this.view.height;
    }
  }, {
    key: 'backgroundColor',
    get: function get() {
      return this._backgroundColor;
    },
    set: function set(value) {
      this._backgroundColor = value;
      this._backgroundColorString = (0, _utils.hex2string)(value);
      (0, _utils.hex2rgb)(value, this._backgroundColorRgba);
    }
  }]);

  return SystemRenderer;
}(_eventemitter2.default);

exports.default = SystemRenderer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a Canvas element of the given size.
 *
 * @class
 * @memberof Tiny
 */
var CanvasRenderTarget = function () {
  /**
   * @param {number} width - the width for the newly created canvas
   * @param {number} height - the height for the newly created canvas
   * @param {number} [resolution=1] - The resolution / device pixel ratio of the canvas
   */
  function CanvasRenderTarget(width, height, resolution) {
    _classCallCheck(this, CanvasRenderTarget);

    /**
     * The Canvas object that belongs to this CanvasRenderTarget.
     *
     * @member {HTMLCanvasElement}
     */
    this.canvas = document.createElement('canvas');

    /**
     * A CanvasRenderingContext2D object representing a two-dimensional rendering context.
     *
     * @member {CanvasRenderingContext2D}
     */
    this.context = this.canvas.getContext('2d');

    this.resolution = resolution || _settings2.default.RESOLUTION;

    this.resize(width, height);
  }

  /**
   * Clears the canvas that was created by the CanvasRenderTarget class.
   *
   * @private
   */


  _createClass(CanvasRenderTarget, [{
    key: 'clear',
    value: function clear() {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Resizes the canvas to the specified width and height.
     *
     * @param {number} width - the new width of the canvas
     * @param {number} height - the new height of the canvas
     */

  }, {
    key: 'resize',
    value: function resize(width, height) {
      this.canvas.width = width * this.resolution;
      this.canvas.height = height * this.resolution;
    }

    /**
     * Destroys this canvas.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.context = null;
      this.canvas = null;
    }

    /**
     * The width of the canvas buffer in pixels.
     *
     * @member {number}
     */

  }, {
    key: 'width',
    get: function get() {
      return this.canvas.width;
    },
    set: function set(val) {
      this.canvas.width = val;
    }

    /**
     * The height of the canvas buffer in pixels.
     *
     * @member {number}
     */

  }, {
    key: 'height',
    get: function get() {
      return this.canvas.height;
    },
    set: function set(val) {
      this.canvas.height = val;
    }
  }]);

  return CanvasRenderTarget;
}();

exports.default = CanvasRenderTarget;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canUseNewCanvasBlendModes;
/**
 * Creates a little colored canvas
 *
 * @ignore
 * @param {string} color - The color to make the canvas
 * @return {canvas} a small canvas element
 */
function createColoredCanvas(color) {
  var canvas = document.createElement('canvas');

  canvas.width = 6;
  canvas.height = 1;

  var context = canvas.getContext('2d');

  context.fillStyle = color;
  context.fillRect(0, 0, 6, 1);

  return canvas;
}

/**
 * Checks whether the Canvas BlendModes are supported by the current browser
 *
 * @return {boolean} whether they are supported
 */
function canUseNewCanvasBlendModes() {
  if (typeof document === 'undefined') {
    return false;
  }

  var magenta = createColoredCanvas('#ff00ff');
  var yellow = createColoredCanvas('#ffff00');

  var canvas = document.createElement('canvas');

  canvas.width = 6;
  canvas.height = 1;

  var context = canvas.getContext('2d');

  context.globalCompositeOperation = 'multiply';
  context.drawImage(magenta, 0, 0);
  context.drawImage(yellow, 2, 0);

  var imageData = context.getImageData(2, 0, 1, 1);

  if (!imageData) {
    return false;
  }

  var data = imageData.data;

  return data[0] === 255 && data[1] === 0 && data[2] === 0;
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extractUniformsFromSrc = __webpack_require__(108);

var _extractUniformsFromSrc2 = _interopRequireDefault(_extractUniformsFromSrc);

var _utils = __webpack_require__(1);

var _const = __webpack_require__(0);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SOURCE_KEY_MAP = {};

// let math = require('../../../math');
/**
 * @class
 * @memberof Tiny
 * @extends Tiny.Shader
 */

var Filter = function () {
  /**
   * @param {string} [vertexSrc] - The source of the vertex shader.
   * @param {string} [fragmentSrc] - The source of the fragment shader.
   * @param {object} [uniforms] - Custom uniforms to use to augment the built-in ones.
   */
  function Filter(vertexSrc, fragmentSrc, uniforms) {
    _classCallCheck(this, Filter);

    /**
     * The vertex shader.
     *
     * @member {string}
     */
    this.vertexSrc = vertexSrc || Filter.defaultVertexSrc;

    /**
     * The fragment shader.
     *
     * @member {string}
     */
    this.fragmentSrc = fragmentSrc || Filter.defaultFragmentSrc;

    this.blendMode = _const.BLEND_MODES.NORMAL;

    this.uniformData = uniforms || (0, _extractUniformsFromSrc2.default)(this.vertexSrc, this.fragmentSrc, 'projectionMatrix|uSampler');

    /**
     * An object containing the current values of custom uniforms.
     * @example <caption>Updating the value of a custom uniform</caption>
     * filter.uniforms.time = performance.now();
     *
     * @member {object}
     */
    this.uniforms = {};

    for (var i in this.uniformData) {
      this.uniforms[i] = this.uniformData[i].value;
    }

    // this is where we store shader references..
    // TODO we could cache this!
    this.glShaders = {};

    // used for cacheing.. sure there is a better way!
    if (!SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc]) {
      SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc] = (0, _utils.uid)();
    }

    this.glShaderKey = SOURCE_KEY_MAP[this.vertexSrc + this.fragmentSrc];

    /**
     * The padding of the filter. Some filters require extra space to breath such as a blur.
     * Increasing this will add extra width and height to the bounds of the object that the
     * filter is applied to.
     *
     * @member {number}
     */
    this.padding = 4;

    /**
     * The resolution of the filter. Setting this to be lower will lower the quality but
     * increase the performance of the filter.
     *
     * @member {number}
     */
    this.resolution = _settings2.default.RESOLUTION;

    /**
     * If enabled is true the filter is applied, if false it will not.
     *
     * @member {boolean}
     */
    this.enabled = true;

    /**
     * If enabled, will fit the filter area into boundaries for better performance.
     * Switch it off if it does not work for specific shader.
     *
     * @member {boolean}
     */
    this.autoFit = true;
  }

  /**
   * Applies the filter
   *
   * @param {Tiny.FilterManager} filterManager - The renderer to retrieve the filter from
   * @param {Tiny.RenderTarget} input - The input render target.
   * @param {Tiny.RenderTarget} output - The target to output to.
   * @param {boolean} clear - Should the output be cleared before rendering to it
   * @param {object} [currentState] - It's current state of filter.
   *        There are some useful properties in the currentState :
   *        target, filters, sourceFrame, destinationFrame, renderTarget, resolution
   */


  _createClass(Filter, [{
    key: 'apply',
    value: function apply(filterManager, input, output, clear, currentState) {
      // --- //
      //  this.uniforms.filterMatrix = filterManager.calculateSpriteMatrix(tempMatrix, window.panda );

      // do as you please!

      filterManager.applyFilter(this, input, output, clear);

      // or just do a regular render..
    }

    /**
     * The default vertex shader source
     *
     * @static
     * @constant
     */

  }], [{
    key: 'defaultVertexSrc',
    get: function get() {
      return ['attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'uniform mat3 projectionMatrix;', 'uniform mat3 filterMatrix;', 'varying vec2 vTextureCoord;', 'varying vec2 vFilterCoord;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;', '   vTextureCoord = aTextureCoord ;', '}'].join('\n');
    }

    /**
     * The default fragment shader source
     *
     * @static
     * @constant
     */

  }, {
    key: 'defaultFragmentSrc',
    get: function get() {
      return ['varying vec2 vTextureCoord;', 'varying vec2 vFilterCoord;', 'uniform sampler2D uSampler;', 'uniform sampler2D filterSampler;', 'void main(void){', '   vec4 masky = texture2D(filterSampler, vFilterCoord);', '   vec4 sample = texture2D(uSampler, vTextureCoord);', '   vec4 color;', '   if(mod(vFilterCoord.x, 1.0) > 0.5)', '   {', '     color = vec4(1.0, 0.0, 0.0, 1.0);', '   }', '   else', '   {', '     color = vec4(0.0, 1.0, 0.0, 1.0);', '   }',
      // '   gl_FragColor = vec4(mod(vFilterCoord.x, 1.5), vFilterCoord.y,0.0,1.0);',
      '   gl_FragColor = mix(sample, masky, 0.5);', '   gl_FragColor *= sample.a;', '}'].join('\n');
    }
  }]);

  return Filter;
}();

exports.default = Filter;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Filter2 = __webpack_require__(54);

var _Filter3 = _interopRequireDefault(_Filter2);

var _math = __webpack_require__(2);

var _path = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The SpriteMaskFilter class
 *
 * @class
 * @extends Tiny.Filter
 * @memberof Tiny
 */
var SpriteMaskFilter = function (_Filter) {
  _inherits(SpriteMaskFilter, _Filter);

  /**
   * @param {Tiny.Sprite} sprite - the target sprite
   */
  function SpriteMaskFilter(sprite) {
    _classCallCheck(this, SpriteMaskFilter);

    var maskMatrix = new _math.Matrix();

    var _this = _possibleConstructorReturn(this, (SpriteMaskFilter.__proto__ || Object.getPrototypeOf(SpriteMaskFilter)).call(this, 'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n', 'varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n'));

    sprite.renderable = false;

    _this.maskSprite = sprite;
    _this.maskMatrix = maskMatrix;
    return _this;
  }

  /**
   * Applies the filter
   *
   * @param {Tiny.FilterManager} filterManager - The renderer to retrieve the filter from
   * @param {Tiny.RenderTarget} input - The input render target.
   * @param {Tiny.RenderTarget} output - The target to output to.
   */


  _createClass(SpriteMaskFilter, [{
    key: 'apply',
    value: function apply(filterManager, input, output) {
      var maskSprite = this.maskSprite;

      this.uniforms.mask = maskSprite._texture;
      this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite);
      this.uniforms.alpha = maskSprite.worldAlpha;

      filterManager.applyFilter(this, input, output);
    }
  }]);

  return SpriteMaskFilter;
}(_Filter3.default);

exports.default = SpriteMaskFilter;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixiGlCore = __webpack_require__(4);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

var _createIndicesForQuads = __webpack_require__(64);

var _createIndicesForQuads2 = _interopRequireDefault(_createIndicesForQuads);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Helper class to create a quad
 *
 * @class
 * @memberof Tiny
 */
var Quad = function () {
  /**
   * @param {WebGLRenderingContext} gl - The gl context for this quad to use.
   * @param {object} state - TODO: Description
   */
  function Quad(gl, state) {
    _classCallCheck(this, Quad);

    /**
     * the current WebGL drawing context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    /**
     * An array of vertices
     *
     * @member {Float32Array}
     */
    this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);

    /**
     * The Uvs of the quad
     *
     * @member {Float32Array}
     */
    this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);

    this.interleaved = new Float32Array(8 * 2);

    for (var i = 0; i < 4; i++) {
      this.interleaved[i * 4] = this.vertices[i * 2];
      this.interleaved[i * 4 + 1] = this.vertices[i * 2 + 1];
      this.interleaved[i * 4 + 2] = this.uvs[i * 2];
      this.interleaved[i * 4 + 3] = this.uvs[i * 2 + 1];
    }

    /**
     * An array containing the indices of the vertices
     *
     * @member {Uint16Array} An array containing the indices of the vertices
     */
    this.indices = (0, _createIndicesForQuads2.default)(1);

    /**
     * The vertex buffer
     *
     * @member {glCore.GLBuffer} The vertex buffer
     */
    this.vertexBuffer = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl, this.interleaved, gl.STATIC_DRAW);

    /**
     * The index buffer
     *
     * @member {glCore.GLBuffer} The index buffer
     */
    this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);

    /**
     * The vertex array object
     *
     * @member {glCore.VertexArrayObject} The index buffer
     */
    this.vao = new _pixiGlCore2.default.VertexArrayObject(gl, state);
  }

  /**
   * Initialises the vaos and uses the shader.
   *
   * @param {Tiny.Shader} shader - the shader to use
   */


  _createClass(Quad, [{
    key: 'initVao',
    value: function initVao(shader) {
      this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, shader.attributes.aVertexPosition, this.gl.FLOAT, false, 4 * 4, 0).addAttribute(this.vertexBuffer, shader.attributes.aTextureCoord, this.gl.FLOAT, false, 4 * 4, 2 * 4);
    }

    /**
     * Maps two Rectangle to the quad.
     *
     * @param {Tiny.Rectangle} targetTextureFrame - the first rectangle
     * @param {Tiny.Rectangle} destinationFrame - the second rectangle
     * @return {Tiny.Quad} Returns itself.
     */

  }, {
    key: 'map',
    value: function map(targetTextureFrame, destinationFrame) {
      var x = 0; // destinationFrame.x / targetTextureFrame.width;
      var y = 0; // destinationFrame.y / targetTextureFrame.height;

      this.uvs[0] = x;
      this.uvs[1] = y;

      this.uvs[2] = x + destinationFrame.width / targetTextureFrame.width;
      this.uvs[3] = y;

      this.uvs[4] = x + destinationFrame.width / targetTextureFrame.width;
      this.uvs[5] = y + destinationFrame.height / targetTextureFrame.height;

      this.uvs[6] = x;
      this.uvs[7] = y + destinationFrame.height / targetTextureFrame.height;

      x = destinationFrame.x;
      y = destinationFrame.y;

      this.vertices[0] = x;
      this.vertices[1] = y;

      this.vertices[2] = x + destinationFrame.width;
      this.vertices[3] = y;

      this.vertices[4] = x + destinationFrame.width;
      this.vertices[5] = y + destinationFrame.height;

      this.vertices[6] = x;
      this.vertices[7] = y + destinationFrame.height;

      return this;
    }

    /**
     * Binds the buffer and uploads the data
     *
     * @return {Tiny.Quad} Returns itself.
     */

  }, {
    key: 'upload',
    value: function upload() {
      for (var i = 0; i < 4; i++) {
        this.interleaved[i * 4] = this.vertices[i * 2];
        this.interleaved[i * 4 + 1] = this.vertices[i * 2 + 1];
        this.interleaved[i * 4 + 2] = this.uvs[i * 2];
        this.interleaved[i * 4 + 3] = this.uvs[i * 2 + 1];
      }

      this.vertexBuffer.upload(this.interleaved);

      return this;
    }

    /**
     * Removes this quad from WebGL
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var gl = this.gl;

      gl.deleteBuffer(this.vertexBuffer);
      gl.deleteBuffer(this.indexBuffer);
    }
  }]);

  return Quad;
}();

exports.default = Quad;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _canUseNewCanvasBlendModes = __webpack_require__(53);

var _canUseNewCanvasBlendModes2 = _interopRequireDefault(_canUseNewCanvasBlendModes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Utility methods for Sprite/Texture tinting.
 *
 * @class
 * @memberof Tiny
 */
var CanvasTinter = {
  /**
   * Basically this method just needs a sprite and a color and tints the sprite with the given color.
   *
   * @memberof Tiny.CanvasTinter
   * @param {Tiny.Sprite} sprite - the sprite to tint
   * @param {number} color - the color to use to tint the sprite with
   * @return {HTMLCanvasElement} The tinted canvas
   */
  getTintedTexture: function getTintedTexture(sprite, color) {
    var texture = sprite._texture;

    color = CanvasTinter.roundColor(color);

    var stringColor = '#' + ('00000' + (color | 0).toString(16)).substr(-6);

    texture.tintCache = texture.tintCache || {};

    var cachedTexture = texture.tintCache[stringColor];

    var canvas = void 0;

    if (cachedTexture) {
      if (cachedTexture.tintId === texture._updateID) {
        return texture.tintCache[stringColor];
      }

      canvas = texture.tintCache[stringColor];
    } else {
      canvas = CanvasTinter.canvas || document.createElement('canvas');
    }

    CanvasTinter.tintMethod(texture, color, canvas);

    canvas.tintId = texture._updateID;

    if (CanvasTinter.convertTintToImage) {
      // is this better?
      var tintImage = new Image();

      tintImage.src = canvas.toDataURL();

      texture.tintCache[stringColor] = tintImage;
    } else {
      texture.tintCache[stringColor] = canvas;
      // if we are not converting the texture to an image then we need to lose the reference to the canvas
      CanvasTinter.canvas = null;
    }

    return canvas;
  },

  /**
   * Tint a texture using the 'multiply' operation.
   *
   * @memberof Tiny.CanvasTinter
   * @param {Tiny.Texture} texture - the texture to tint
   * @param {number} color - the color to use to tint the sprite with
   * @param {HTMLCanvasElement} canvas - the current canvas
   */
  tintWithMultiply: function tintWithMultiply(texture, color, canvas) {
    var context = canvas.getContext('2d');
    var crop = texture._frame.clone();
    var resolution = texture.baseTexture.resolution;

    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;

    canvas.width = Math.ceil(crop.width);
    canvas.height = Math.ceil(crop.height);

    context.fillStyle = '#' + ('00000' + (color | 0).toString(16)).substr(-6);

    context.fillRect(0, 0, crop.width, crop.height);

    context.globalCompositeOperation = 'multiply';

    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

    context.globalCompositeOperation = 'destination-atop';

    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);
  },

  /**
   * Tint a texture using the 'overlay' operation.
   *
   * @memberof Tiny.CanvasTinter
   * @param {Tiny.Texture} texture - the texture to tint
   * @param {number} color - the color to use to tint the sprite with
   * @param {HTMLCanvasElement} canvas - the current canvas
   */
  tintWithOverlay: function tintWithOverlay(texture, color, canvas) {
    var context = canvas.getContext('2d');
    var crop = texture._frame.clone();
    var resolution = texture.baseTexture.resolution;

    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;

    canvas.width = Math.ceil(crop.width);
    canvas.height = Math.ceil(crop.height);

    context.globalCompositeOperation = 'copy';
    context.fillStyle = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
    context.fillRect(0, 0, crop.width, crop.height);

    context.globalCompositeOperation = 'destination-atop';
    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

    // context.globalCompositeOperation = 'copy';
  },

  /**
   * Tint a texture pixel per pixel.
   *
   * @memberof Tiny.CanvasTinter
   * @param {Tiny.Texture} texture - the texture to tint
   * @param {number} color - the color to use to tint the sprite with
   * @param {HTMLCanvasElement} canvas - the current canvas
   */
  tintWithPerPixel: function tintWithPerPixel(texture, color, canvas) {
    var context = canvas.getContext('2d');
    var crop = texture._frame.clone();
    var resolution = texture.baseTexture.resolution;

    crop.x *= resolution;
    crop.y *= resolution;
    crop.width *= resolution;
    crop.height *= resolution;

    canvas.width = Math.ceil(crop.width);
    canvas.height = Math.ceil(crop.height);

    context.globalCompositeOperation = 'copy';
    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

    var rgbValues = (0, _utils.hex2rgb)(color);
    var r = rgbValues[0];
    var g = rgbValues[1];
    var b = rgbValues[2];

    var pixelData = context.getImageData(0, 0, crop.width, crop.height);

    var pixels = pixelData.data;

    for (var i = 0; i < pixels.length; i += 4) {
      pixels[i + 0] *= r;
      pixels[i + 1] *= g;
      pixels[i + 2] *= b;
    }

    context.putImageData(pixelData, 0, 0);
  },

  /**
   * Rounds the specified color according to the CanvasTinter.cacheStepsPerColorChannel.
   *
   * @memberof Tiny.CanvasTinter
   * @param {number} color - the color to round, should be a hex color
   * @return {number} The rounded color.
   */
  roundColor: function roundColor(color) {
    var step = CanvasTinter.cacheStepsPerColorChannel;

    var rgbValues = (0, _utils.hex2rgb)(color);

    rgbValues[0] = Math.min(255, rgbValues[0] / step * step);
    rgbValues[1] = Math.min(255, rgbValues[1] / step * step);
    rgbValues[2] = Math.min(255, rgbValues[2] / step * step);

    return (0, _utils.rgb2hex)(rgbValues);
  },

  /**
   * Number of steps which will be used as a cap when rounding colors.
   *
   * @memberof Tiny.CanvasTinter
   * @type {number}
   */
  cacheStepsPerColorChannel: 8,

  /**
   * Tint cache boolean flag.
   *
   * @memberof Tiny.CanvasTinter
   * @type {boolean}
   */
  convertTintToImage: false,

  /**
   * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.
   *
   * @memberof Tiny.CanvasTinter
   * @type {boolean}
   */
  canUseMultiply: (0, _canUseNewCanvasBlendModes2.default)(),

  /**
   * The tinting method that will be used.
   *
   * @memberof Tiny.CanvasTinter
   * @type {tintMethodFunctionType}
   */
  tintMethod: 0
};

CanvasTinter.tintMethod = CanvasTinter.canUseMultiply ? CanvasTinter.tintWithMultiply : CanvasTinter.tintWithPerPixel;

/**
 * The tintMethod type.
 *
 * @memberof Tiny.CanvasTinter
 * @callback tintMethodFunctionType
 * @param texture {Tiny.Texture} the texture to tint
 * @param color {number} the color to use to tint the sprite with
 * @param canvas {HTMLCanvasElement} the current canvas
 */

exports.default = CanvasTinter;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Sprite2 = __webpack_require__(27);

var _Sprite3 = _interopRequireDefault(_Sprite2);

var _Texture = __webpack_require__(7);

var _Texture2 = _interopRequireDefault(_Texture);

var _math = __webpack_require__(2);

var _utils = __webpack_require__(1);

var _const = __webpack_require__(0);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

var _TextStyle = __webpack_require__(60);

var _TextStyle2 = _interopRequireDefault(_TextStyle);

var _TextMetrics = __webpack_require__(59);

var _TextMetrics2 = _interopRequireDefault(_TextMetrics);

var _trimCanvas = __webpack_require__(132);

var _trimCanvas2 = _interopRequireDefault(_trimCanvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-depth: [2, 8] */


var defaultDestroyOptions = {
  texture: true,
  children: false,
  baseTexture: true
};

/**
 * A Text Object will create a line or multiple lines of text. To split a line you can use '\n' in your text string,
 * or add a wordWrap property set to true and and wordWrapWidth property with a value in the style object.
 *
 * A Text can be created directly from a string and a style object
 *
 * ```js
 *  let text = new Tiny.Text('This is a Tiny text', {
 *    fontFamily: 'Arial',
 *    fontSize: 24,
 *    fill: 0xff1010,
 *    align: 'center'
 *  });
 * ```
 *
 * @class
 * @extends Tiny.Sprite
 * @memberof Tiny
 */

var Text = function (_Sprite) {
  _inherits(Text, _Sprite);

  /**
   * @param {string} text - The string that you would like the text to display
   * @param {object|Tiny.TextStyle} [style] - The style parameters
   * @param {HTMLCanvasElement} [canvas] - The canvas element for drawing text
   */
  function Text(text, style, canvas) {
    _classCallCheck(this, Text);

    canvas = canvas || document.createElement('canvas');

    canvas.width = 3;
    canvas.height = 3;

    var texture = _Texture2.default.fromCanvas(canvas, _settings2.default.SCALE_MODE, 'text');

    texture.orig = new _math.Rectangle();
    texture.trim = new _math.Rectangle();

    // base texture is already automatically added to the cache, now adding the actual texture
    var _this = _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, texture));

    _Texture2.default.addToCache(_this._texture, _this._texture.baseTexture.textureCacheIds[0]);

    /**
     * The canvas element that everything is drawn to
     *
     * @member {HTMLCanvasElement}
     */
    _this.canvas = canvas;

    /**
     * The canvas 2d context that everything is drawn with
     * @member {HTMLCanvasElement}
     */
    _this.context = _this.canvas.getContext('2d');

    /**
     * The resolution / device pixel ratio of the canvas. This is set automatically by the renderer.
     * @member {number}
     * @default 1
     */
    _this.resolution = _settings2.default.RESOLUTION;

    /**
     * Private tracker for the current text.
     *
     * @member {string}
     * @private
     */
    _this._text = null;

    /**
     * Private tracker for the current style.
     *
     * @member {object}
     * @private
     */
    _this._style = null;
    /**
     * Private listener to track style changes.
     *
     * @member {Function}
     * @private
     */
    _this._styleListener = null;

    /**
     * Private tracker for the current font.
     *
     * @member {string}
     * @private
     */
    _this._font = '';

    _this.text = text;
    _this.style = style;

    _this.localStyleID = -1;
    return _this;
  }

  /**
   * Renders text and updates it when needed.
   *
   * @private
   * @param {boolean} respectDirty - Whether to abort updating the text if the Text isn't dirty and the function is called.
   */


  _createClass(Text, [{
    key: 'updateText',
    value: function updateText(respectDirty) {
      var style = this._style;

      // check if style has changed..
      if (this.localStyleID !== style.styleID) {
        this.dirty = true;
        this.localStyleID = style.styleID;
      }

      if (!this.dirty && respectDirty) {
        return;
      }

      this._font = this._style.toFontString();

      var context = this.context;
      var measured = _TextMetrics2.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas);
      var width = measured.width;
      var height = measured.height;
      var lines = measured.lines;
      var lineHeight = measured.lineHeight;
      var lineWidths = measured.lineWidths;
      var maxLineWidth = measured.maxLineWidth;
      var fontProperties = measured.fontProperties;

      this.canvas.width = Math.ceil((width + style.padding * 2) * this.resolution);
      this.canvas.height = Math.ceil((height + style.padding * 2) * this.resolution);

      context.scale(this.resolution, this.resolution);

      context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      context.font = this._font;
      context.strokeStyle = style.stroke;
      context.lineWidth = style.strokeThickness;
      context.textBaseline = style.textBaseline;
      context.lineJoin = style.lineJoin;
      context.miterLimit = style.miterLimit;

      var linePositionX = void 0;
      var linePositionY = void 0;

      if (style.dropShadow) {
        context.shadowBlur = style.dropShadowBlur;
        context.globalAlpha = style.dropShadowAlpha;

        if (style.dropShadowBlur > 0) {
          context.shadowColor = style.dropShadowColor;
        } else {
          context.fillStyle = style.dropShadowColor;
        }

        var xShadowOffset = Math.cos(style.dropShadowAngle) * style.dropShadowDistance;
        var yShadowOffset = Math.sin(style.dropShadowAngle) * style.dropShadowDistance;

        for (var i = 0; i < lines.length; i++) {
          linePositionX = style.strokeThickness / 2;
          linePositionY = style.strokeThickness / 2 + i * lineHeight + fontProperties.ascent;

          if (style.align === 'right') {
            linePositionX += maxLineWidth - lineWidths[i];
          } else if (style.align === 'center') {
            linePositionX += (maxLineWidth - lineWidths[i]) / 2;
          }

          if (style.fill) {
            this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding);

            if (style.stroke && style.strokeThickness) {
              context.strokeStyle = style.dropShadowColor;
              this.drawLetterSpacing(lines[i], linePositionX + xShadowOffset + style.padding, linePositionY + yShadowOffset + style.padding, true);
              context.strokeStyle = style.stroke;
            }
          }
        }
      }

      // reset the shadow blur and alpha that was set by the drop shadow, for the regular text
      context.shadowBlur = 0;
      context.globalAlpha = 1;

      // set canvas text styles
      context.fillStyle = this._generateFillStyle(style, lines);

      // draw lines line by line
      for (var _i = 0; _i < lines.length; _i++) {
        linePositionX = style.strokeThickness / 2;
        linePositionY = style.strokeThickness / 2 + _i * lineHeight + fontProperties.ascent;

        if (style.align === 'right') {
          linePositionX += maxLineWidth - lineWidths[_i];
        } else if (style.align === 'center') {
          linePositionX += (maxLineWidth - lineWidths[_i]) / 2;
        }

        if (style.stroke && style.strokeThickness) {
          this.drawLetterSpacing(lines[_i], linePositionX + style.padding, linePositionY + style.padding, true);
        }

        if (style.fill) {
          this.drawLetterSpacing(lines[_i], linePositionX + style.padding, linePositionY + style.padding);
        }
      }

      this.updateTexture();
    }

    /**
     * Render the text with letter-spacing.
     * @param {string} text - The text to draw
     * @param {number} x - Horizontal position to draw the text
     * @param {number} y - Vertical position to draw the text
     * @param {boolean} [isStroke=false] - Is this drawing for the outside stroke of the text? If not, it's for the inside fill
     * @private
     */

  }, {
    key: 'drawLetterSpacing',
    value: function drawLetterSpacing(text, x, y) {
      var isStroke = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var style = this._style;

      // letterSpacing of 0 means normal
      var letterSpacing = style.letterSpacing;

      if (letterSpacing === 0) {
        if (isStroke) {
          this.context.strokeText(text, x, y);
        } else {
          this.context.fillText(text, x, y);
        }

        return;
      }

      var characters = String.prototype.split.call(text, '');
      var currentPosition = x;
      var index = 0;
      var current = '';

      while (index < text.length) {
        current = characters[index++];
        if (isStroke) {
          this.context.strokeText(current, currentPosition, y);
        } else {
          this.context.fillText(current, currentPosition, y);
        }
        currentPosition += this.context.measureText(current).width + letterSpacing;
      }
    }

    /**
     * Updates texture size based on canvas size
     *
     * @private
     */

  }, {
    key: 'updateTexture',
    value: function updateTexture() {
      var canvas = this.canvas;

      if (this._style.trim) {
        var trimmed = (0, _trimCanvas2.default)(canvas);

        canvas.width = trimmed.width;
        canvas.height = trimmed.height;
        this.context.putImageData(trimmed.data, 0, 0);
      }

      var texture = this._texture;
      var style = this._style;
      var padding = style.trim ? 0 : style.padding;
      var baseTexture = texture.baseTexture;

      baseTexture.hasLoaded = true;
      baseTexture.resolution = this.resolution;

      baseTexture.realWidth = canvas.width;
      baseTexture.realHeight = canvas.height;
      baseTexture.width = canvas.width / this.resolution;
      baseTexture.height = canvas.height / this.resolution;

      texture.trim.width = texture._frame.width = canvas.width / this.resolution;
      texture.trim.height = texture._frame.height = canvas.height / this.resolution;
      texture.trim.x = -padding;
      texture.trim.y = -padding;

      texture.orig.width = texture._frame.width - padding * 2;
      texture.orig.height = texture._frame.height - padding * 2;

      // call sprite onTextureUpdate to update scale if _width or _height were set
      this._onTextureUpdate();

      baseTexture.emit('update', baseTexture);

      this.dirty = false;
    }

    /**
     * Renders the object using the WebGL renderer
     *
     * @param {Tiny.WebGLRenderer} renderer - The renderer
     */

  }, {
    key: 'renderWebGL',
    value: function renderWebGL(renderer) {
      if (this.resolution !== renderer.resolution) {
        this.resolution = renderer.resolution;
        this.dirty = true;
      }

      this.updateText(true);

      _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'renderWebGL', this).call(this, renderer);
    }

    /**
     * Renders the object using the Canvas renderer
     *
     * @private
     * @param {Tiny.CanvasRenderer} renderer - The renderer
     */

  }, {
    key: '_renderCanvas',
    value: function _renderCanvas(renderer) {
      if (this.resolution !== renderer.resolution) {
        this.resolution = renderer.resolution;
        this.dirty = true;
      }

      this.updateText(true);

      _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), '_renderCanvas', this).call(this, renderer);
    }

    /**
     * Gets the local bounds of the text object.
     *
     * @param {Rectangle} rect - The output rectangle.
     * @return {Rectangle} The bounds.
     */

  }, {
    key: 'getLocalBounds',
    value: function getLocalBounds(rect) {
      this.updateText(true);

      return _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'getLocalBounds', this).call(this, rect);
    }

    /**
     * calculates the bounds of the Text as a rectangle. The bounds calculation takes the worldTransform into account.
     * @private
     */

  }, {
    key: '_calculateBounds',
    value: function _calculateBounds() {
      this.updateText(true);
      this.calculateVertices();
      // if we have already done this on THIS frame.
      this._bounds.addQuad(this.vertexData);
    }

    /**
     * Method to be called upon a TextStyle change.
     * @private
     */

  }, {
    key: '_onStyleChange',
    value: function _onStyleChange() {
      this.dirty = true;
    }

    /**
     * Generates the fill style. Can automatically generate a gradient based on the fill style being an array
     *
     * @private
     * @param {object} style - The style.
     * @param {string[]} lines - The lines of text.
     * @return {string|number|CanvasGradient} The fill style
     */

  }, {
    key: '_generateFillStyle',
    value: function _generateFillStyle(style, lines) {
      if (!Array.isArray(style.fill)) {
        return style.fill;
      }

      // cocoon on canvas+ cannot generate textures, so use the first colour instead
      if (navigator.isCocoonJS) {
        return style.fill[0];
      }

      // the gradient will be evenly spaced out according to how large the array is.
      // ['#FF0000', '#00FF00', '#0000FF'] would created stops at 0.25, 0.5 and 0.75
      var gradient = void 0;
      var totalIterations = void 0;
      var currentIteration = void 0;
      var stop = void 0;

      var width = this.canvas.width / this.resolution;
      var height = this.canvas.height / this.resolution;

      // make a copy of the style settings, so we can manipulate them later
      var fill = style.fill.slice();
      var fillGradientStops = style.fillGradientStops.slice();

      // wanting to evenly distribute the fills. So an array of 4 colours should give fills of 0.25, 0.5 and 0.75
      if (!fillGradientStops.length) {
        var lengthPlus1 = fill.length + 1;

        for (var i = 1; i < lengthPlus1; ++i) {
          fillGradientStops.push(i / lengthPlus1);
        }
      }

      // stop the bleeding of the last gradient on the line above to the top gradient of the this line
      // by hard defining the first gradient colour at point 0, and last gradient colour at point 1
      fill.unshift(style.fill[0]);
      fillGradientStops.unshift(0);

      fill.push(style.fill[style.fill.length - 1]);
      fillGradientStops.push(1);

      if (style.fillGradientType === _const.TEXT_GRADIENT.LINEAR_VERTICAL) {
        // start the gradient at the top center of the canvas, and end at the bottom middle of the canvas
        gradient = this.context.createLinearGradient(width / 2, 0, width / 2, height);

        // we need to repeat the gradient so that each individual line of text has the same vertical gradient effect
        // ['#FF0000', '#00FF00', '#0000FF'] over 2 lines would create stops at 0.125, 0.25, 0.375, 0.625, 0.75, 0.875
        totalIterations = (fill.length + 1) * lines.length;
        currentIteration = 0;
        for (var _i2 = 0; _i2 < lines.length; _i2++) {
          currentIteration += 1;
          for (var j = 0; j < fill.length; j++) {
            if (typeof fillGradientStops[j] === 'number') {
              stop = fillGradientStops[j] / lines.length + _i2 / lines.length;
            } else {
              stop = currentIteration / totalIterations;
            }
            gradient.addColorStop(stop, fill[j]);
            currentIteration++;
          }
        }
      } else {
        // start the gradient at the center left of the canvas, and end at the center right of the canvas
        gradient = this.context.createLinearGradient(0, height / 2, width, height / 2);

        // can just evenly space out the gradients in this case, as multiple lines makes no difference
        // to an even left to right gradient
        totalIterations = fill.length + 1;
        currentIteration = 1;

        for (var _i3 = 0; _i3 < fill.length; _i3++) {
          if (typeof fillGradientStops[_i3] === 'number') {
            stop = fillGradientStops[_i3];
          } else {
            stop = currentIteration / totalIterations;
          }
          gradient.addColorStop(stop, fill[_i3]);
          currentIteration++;
        }
      }

      return gradient;
    }

    /**
     * Destroys this text object.
     * Note* Unlike a Sprite, a Text object will automatically destroy its baseTexture and texture as
     * the majorety of the time the texture will not be shared with any other Sprites.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their
     *  destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=true] - Should it destroy the current texture of the sprite as well
     * @param {boolean} [options.baseTexture=true] - Should it destroy the base texture of the sprite as well
     */

  }, {
    key: 'destroy',
    value: function destroy(options) {
      if (typeof options === 'boolean') {
        options = { children: options };
      }

      options = Object.assign({}, defaultDestroyOptions, options);

      _get(Text.prototype.__proto__ || Object.getPrototypeOf(Text.prototype), 'destroy', this).call(this, options);

      // make sure to reset the the context and canvas.. dont want this hanging around in memory!
      this.context = null;
      this.canvas = null;

      this._style = null;
    }

    /**
     * The width of the Text, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */

  }, {
    key: 'width',
    get: function get() {
      this.updateText(true);

      return Math.abs(this.scale.x) * this._texture.orig.width;
    },
    set: function set(value) {
      this.updateText(true);

      var s = (0, _utils.sign)(this.scale.x) || 1;

      this.scale.x = s * value / this._texture.orig.width;
      this._width = value;
    }

    /**
     * The height of the Text, setting this will actually modify the scale to achieve the value set
     *
     * @member {number}
     */

  }, {
    key: 'height',
    get: function get() {
      this.updateText(true);

      return Math.abs(this.scale.y) * this._texture.orig.height;
    },
    set: function set(value) {
      this.updateText(true);

      var s = (0, _utils.sign)(this.scale.y) || 1;

      this.scale.y = s * value / this._texture.orig.height;
      this._height = value;
    }

    /**
     * Set the style of the text. Set up an event listener to listen for changes on the style
     * object and mark the text as dirty.
     *
     * @member {object|Tiny.TextStyle}
     */

  }, {
    key: 'style',
    get: function get() {
      return this._style;
    },
    set: function set(style) {
      style = style || {};

      if (style instanceof _TextStyle2.default) {
        this._style = style;
      } else {
        this._style = new _TextStyle2.default(style);
      }

      this.localStyleID = -1;
      this.dirty = true;
    }

    /**
     * Set the copy for the text object. To split a line you can use '\n'.
     *
     * @member {string}
     */

  }, {
    key: 'text',
    get: function get() {
      return this._text;
    },
    set: function set(text) {
      text = String(text === '' || text === null || text === undefined ? ' ' : text);

      if (this._text === text) {
        return;
      }
      this._text = text;
      this.dirty = true;
    }
  }]);

  return Text;
}(_Sprite3.default);

exports.default = Text;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The TextMetrics object represents the measurement of a block of text with a specified style.
 *
 * @class
 * @memberOf Tiny
 */
var TextMetrics = function () {
  /**
   * @param {string} text - the text that was measured
   * @param {Tiny.TextStyle} style - the style that was measured
   * @param {number} width - the measured width of the text
   * @param {number} height - the measured height of the text
   * @param {array} lines - an array of the lines of text broken by new lines and wrapping if specified in style
   * @param {array} lineWidths - an array of the line widths for each line matched to `lines`
   * @param {number} lineHeight - the measured line height for this style
   * @param {number} maxLineWidth - the maximum line width for all measured lines
   * @param {Object} fontProperties - the font properties object from TextMetrics.measureFont
   */
  function TextMetrics(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties) {
    _classCallCheck(this, TextMetrics);

    this.text = text;
    this.style = style;
    this.width = width;
    this.height = height;
    this.lines = lines;
    this.lineWidths = lineWidths;
    this.lineHeight = lineHeight;
    this.maxLineWidth = maxLineWidth;
    this.fontProperties = fontProperties;
  }

  /**
   * Measures the supplied string of text and returns a Rectangle.
   *
   * @param {string} text - the text to measure.
   * @param {Tiny.TextStyle} style - the text style to use for measuring
   * @param {boolean} [wordWrap] - optional override for if word-wrap should be applied to the text.
   * @param {HTMLCanvasElement} [canvas] - optional specification of the canvas to use for measuring.
   * @return {Tiny.TextMetrics} measured width and height of the text.
   */


  _createClass(TextMetrics, null, [{
    key: 'measureText',
    value: function measureText(text, style, wordWrap) {
      var canvas = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : TextMetrics._canvas;

      wordWrap = wordWrap || style.wordWrap;
      var font = style.toFontString();
      var fontProperties = TextMetrics.measureFont(font);
      var context = canvas.getContext('2d');

      context.font = font;

      var outputText = wordWrap ? TextMetrics.wordWrap(text, style, canvas) : text;
      var lines = outputText.split(/(?:\r\n|\r|\n)/);
      var lineWidths = new Array(lines.length);
      var maxLineWidth = 0;

      for (var i = 0; i < lines.length; i++) {
        var lineWidth = context.measureText(lines[i]).width + (lines[i].length - 1) * style.letterSpacing;

        lineWidths[i] = lineWidth;
        maxLineWidth = Math.max(maxLineWidth, lineWidth);
      }
      var width = maxLineWidth + style.strokeThickness;

      if (style.dropShadow) {
        width += style.dropShadowDistance;
      }

      var lineHeight = style.lineHeight || fontProperties.fontSize + style.strokeThickness;
      var height = Math.max(lineHeight, fontProperties.fontSize + style.strokeThickness) + (lines.length - 1) * lineHeight;

      if (style.dropShadow) {
        height += style.dropShadowDistance;
      }

      return new TextMetrics(text, style, width, height, lines, lineWidths, lineHeight, maxLineWidth, fontProperties);
    }

    /**
     * Applies newlines to a string to have it optimally fit into the horizontal
     * bounds set by the Text object's wordWrapWidth property.
     *
     * @private
     * @param {string} text - String to apply word wrapping to
     * @param {Tiny.TextStyle} style - the style to use when wrapping
     * @param {HTMLCanvasElement} [canvas] - optional specification of the canvas to use for measuring.
     * @return {string} New string with new lines applied where required
     */

  }, {
    key: 'wordWrap',
    value: function wordWrap(text, style) {
      var canvas = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TextMetrics._canvas;

      var context = canvas.getContext('2d');

      // Greedy wrapping algorithm that will wrap words as the line grows longer
      // than its horizontal bounds.
      var result = '';
      var lines = text.split('\n');
      var wordWrapWidth = style.wordWrapWidth;
      var characterCache = {};

      for (var i = 0; i < lines.length; i++) {
        var spaceLeft = wordWrapWidth;
        var words = lines[i].split(' ');

        for (var j = 0; j < words.length; j++) {
          var wordWidth = context.measureText(words[j]).width;

          if (style.breakWords && wordWidth > wordWrapWidth) {
            // Word should be split in the middle
            var characters = words[j].split('');

            for (var c = 0; c < characters.length; c++) {
              var character = characters[c];
              var characterWidth = characterCache[character];

              if (characterWidth === undefined) {
                characterWidth = context.measureText(character).width;
                characterCache[character] = characterWidth;
              }

              if (characterWidth > spaceLeft) {
                result += '\n' + character;
                spaceLeft = wordWrapWidth - characterWidth;
              } else {
                if (c === 0) {
                  result += ' ';
                }

                result += character;
                spaceLeft -= characterWidth;
              }
            }
          } else {
            var wordWidthWithSpace = wordWidth + context.measureText(' ').width;

            if (j === 0 || wordWidthWithSpace > spaceLeft) {
              // Skip printing the newline if it's the first word of the line that is
              // greater than the word wrap width.
              if (j > 0) {
                result += '\n';
              }
              result += words[j];
              spaceLeft = wordWrapWidth - wordWidth;
            } else {
              spaceLeft -= wordWidthWithSpace;
              result += ' ' + words[j];
            }
          }
        }

        if (i < lines.length - 1) {
          result += '\n';
        }
      }

      return result;
    }

    /**
     * Calculates the ascent, descent and fontSize of a given font-style
     *
     * @static
     * @param {string} font - String representing the style of the font
     * @return {Tiny.TextMetrics~FontMetrics} Font properties object
     */

  }, {
    key: 'measureFont',
    value: function measureFont(font) {
      // as this method is used for preparing assets, don't recalculate things if we don't need to
      if (TextMetrics._fonts[font]) {
        return TextMetrics._fonts[font];
      }

      var properties = {};

      var canvas = TextMetrics._canvas;
      var context = TextMetrics._context;

      context.font = font;

      var width = Math.ceil(context.measureText('|MÉq').width);
      var baseline = Math.ceil(context.measureText('M').width);
      var height = 2 * baseline;

      baseline = baseline * 1.4 | 0;

      canvas.width = width;
      canvas.height = height;

      context.fillStyle = '#f00';
      context.fillRect(0, 0, width, height);

      context.font = font;

      context.textBaseline = 'alphabetic';
      context.fillStyle = '#000';
      context.fillText('|MÉq', 0, baseline);

      var imagedata = context.getImageData(0, 0, width, height).data;
      var pixels = imagedata.length;
      var line = width * 4;

      var i = 0;
      var idx = 0;
      var stop = false;

      // ascent. scan from top to bottom until we find a non red pixel
      for (i = 0; i < baseline; ++i) {
        for (var j = 0; j < line; j += 4) {
          if (imagedata[idx + j] !== 255) {
            stop = true;
            break;
          }
        }
        if (!stop) {
          idx += line;
        } else {
          break;
        }
      }

      properties.ascent = baseline - i;

      idx = pixels - line;
      stop = false;

      // descent. scan from bottom to top until we find a non red pixel
      for (i = height; i > baseline; --i) {
        for (var _j = 0; _j < line; _j += 4) {
          if (imagedata[idx + _j] !== 255) {
            stop = true;
            break;
          }
        }

        if (!stop) {
          idx -= line;
        } else {
          break;
        }
      }

      properties.descent = i - baseline;
      properties.fontSize = properties.ascent + properties.descent;

      TextMetrics._fonts[font] = properties;

      return properties;
    }
  }]);

  return TextMetrics;
}();

/**
 * Internal return object for {@link Tiny.TextMetrics.measureFont `TextMetrics.measureFont`}.
 * @class FontMetrics
 * @memberof Tiny.TextMetrics~
 * @property {number} ascent - The ascent distance
 * @property {number} descent - The descent distance
 * @property {number} fontSize - Font size from ascent to descent
 */

exports.default = TextMetrics;
var canvas = document.createElement('canvas');

canvas.width = canvas.height = 10;

/**
 * Cached canvas element for measuring text
 * @memberof Tiny.TextMetrics
 * @type {HTMLCanvasElement}
 * @private
 */
TextMetrics._canvas = canvas;

/**
 * Cache for context to use.
 * @memberof Tiny.TextMetrics
 * @type {CanvasRenderingContext2D}
 * @private
 */
TextMetrics._context = canvas.getContext('2d');

/**
 * Cache of Tiny.TextMetrics~FontMetrics objects.
 * @memberof Tiny.TextMetrics
 * @type {Object}
 * @private
 */
TextMetrics._fonts = {};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultStyle = {
  align: 'left',
  breakWords: false,
  dropShadow: false,
  dropShadowAlpha: 1,
  dropShadowAngle: Math.PI / 6,
  dropShadowBlur: 0,
  dropShadowColor: '#000000',
  dropShadowDistance: 5,
  fill: 'black',
  fillGradientType: _const.TEXT_GRADIENT.LINEAR_VERTICAL,
  fillGradientStops: [],
  fontFamily: 'Arial',
  fontSize: 26,
  fontStyle: 'normal',
  fontVariant: 'normal',
  fontWeight: 'normal',
  letterSpacing: 0,
  lineHeight: 0,
  lineJoin: 'miter',
  miterLimit: 10,
  padding: 0,
  stroke: 'black',
  strokeThickness: 0,
  textBaseline: 'alphabetic',
  trim: false,
  wordWrap: false,
  wordWrapWidth: 100
};

/**
 * A TextStyle Object decorates a Text Object. It can be shared between
 * multiple Text objects. Changing the style will update all text objects using it.
 *
 * @class
 * @memberof Tiny
 */

var TextStyle = function () {
  /**
   * @param {object}                                                                  style                                                       - The style parameters
   * @param {string}                                                                  style.align='left'                                          - Alignment for multiline text ('left', 'center' or 'right'), does not affect single line text
   * @param {boolean}                                                                 style.breakWords=false                                      - Indicates if lines can be wrapped within words, it needs wordWrap to be set to true
   * @param {boolean}                                                                 style.dropShadow=false                                      - Set a drop shadow for the text
   * @param {number}                                                                  style.dropShadowAlpha=1                                     - Set alpha for the drop shadow
   * @param {number}                                                                  style.dropShadowAngle=Math.PI/6                             - Set a angle of the drop shadow
   * @param {number}                                                                  style.dropShadowBlur=0                                      - Set a shadow blur radius
   * @param {string}                                                                  style.dropShadowColor='#000000'                             - A fill style to be used on the dropshadow e.g 'red', '#00FF00'
   * @param {number}                                                                  style.dropShadowDistance=5                                  - Set a distance of the drop shadow
   * @param {string|array<string>|number|array<number>|CanvasGradient|CanvasPattern}  style.fill='black'                                          - A canvas fillstyle that will be used on the text e.g 'red', '#00FF00'. Can be an array to create a gradient<br>eg ['#000000','#FFFFFF']<br>{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle|MDN}
   * @param {number}                                                                  style.fillGradientType=Tiny.TEXT_GRADIENT.LINEAR_VERTICAL   - If fill is an array of colours to create a gradient, this can change the type/direction of the gradient. See {@link Tiny.TEXT_GRADIENT}
   * @param {array<number>}                                                           style.fillGradientStops                                     - If fill is an array of colours to create a gradient, this array can set the stop points (numbers between 0 and 1) for the color, overriding the default behaviour of evenly spacing them.
   * @param {string|array<string>}                                                    style.fontFamily='Arial'                                    - The font family
   * @param {number|string}                                                           style.fontSize=26                                           - The font size (as a number it converts to px, but as a string, equivalents are '26px','20pt','160%' or '1.6em')
   * @param {string}                                                                  style.fontStyle='normal'                                    - The font style ('normal', 'italic' or 'oblique')
   * @param {string}                                                                  style.fontVariant='normal'                                  - The font variant ('normal' or 'small-caps')
   * @param {string}                                                                  style.fontWeight='normal'                                   - The font weight ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')
   * @param {number}                                                                  style.letterSpacing=0                                       - The amount of spacing between letters, default is 0
   * @param {number}                                                                  style.lineHeight                                            - The line height, a number that represents the vertical space that a letter uses
   * @param {string}                                                                  style.lineJoin='miter'                                      - The lineJoin property sets the type of corner created, it can resolve spiked text issues. Default is 'miter' (creates a sharp corner).
   * @param {number}                                                                  style.miterLimit=10                                         - The miter limit to use when using the 'miter' lineJoin mode. This can reduce or increase the spikiness of rendered text.
   * @param {number}                                                                  style.padding=0                                             - Occasionally some fonts are cropped. Adding some padding will prevent this from happening by adding padding to all sides of the text.
   * @param {string|number}                                                           style.stroke='black'                                        - A canvas fillstyle that will be used on the text stroke e.g 'blue', '#FCFF00'
   * @param {number}                                                                  style.strokeThickness=0                                     - A number that represents the thickness of the stroke. Default is 0 (no stroke)
   * @param {boolean}                                                                 style.trim=false                                            - Trim transparent borders
   * @param {string}                                                                  style.textBaseline='alphabetic'                             - The baseline of the text that is rendered.
   * @param {boolean}                                                                 style.wordWrap=false                                        - Indicates if word wrap should be used
   * @param {number}                                                                  style.wordWrapWidth=100                                     - The width at which text will wrap, it needs wordWrap to be set to true
   */
  function TextStyle(style) {
    _classCallCheck(this, TextStyle);

    this.styleID = 0;

    Object.assign(this, defaultStyle, style);
  }

  /**
   * Creates a new TextStyle object with the same values as this one.
   * Note that the only the properties of the object are cloned.
   *
   * @return {Tiny.TextStyle} New cloned TextStyle object
   */


  _createClass(TextStyle, [{
    key: 'clone',
    value: function clone() {
      var clonedProperties = {};

      for (var key in defaultStyle) {
        clonedProperties[key] = this[key];
      }

      return new TextStyle(clonedProperties);
    }

    /**
     * Resets all properties to the defaults specified in TextStyle.prototype._default
     */

  }, {
    key: 'reset',
    value: function reset() {
      Object.assign(this, defaultStyle);
    }
  }, {
    key: 'toFontString',


    /**
     * Generates a font style string to use for `TextMetrics.measureFont()`.
     *
     * @return {string} Font style string, for passing to `TextMetrics.measureFont()`
     */
    value: function toFontString() {
      // build canvas api font setting from individual components. Convert a numeric this.fontSize to px
      var fontSizeString = typeof this.fontSize === 'number' ? this.fontSize + 'px' : this.fontSize;

      // Clean-up fontFamily property by quoting each font name
      // this will support font names with spaces
      var fontFamilies = this.fontFamily;

      if (!Array.isArray(this.fontFamily)) {
        fontFamilies = this.fontFamily.split(',');
      }

      for (var i = fontFamilies.length - 1; i >= 0; i--) {
        // Trim any extra white-space
        var fontFamily = fontFamilies[i].trim();

        // Check if font already contains strings
        if (!/([\"\'])[^\'\"]+\1/.test(fontFamily)) {
          // eslint-disable-line
          fontFamily = '"' + fontFamily + '"';
        }
        fontFamilies[i] = fontFamily;
      }

      return this.fontStyle + ' ' + this.fontVariant + ' ' + this.fontWeight + ' ' + fontSizeString + ' ' + fontFamilies.join(',');
    }
  }, {
    key: 'align',
    get: function get() {
      return this._align;
    },
    set: function set(align) {
      if (this._align !== align) {
        this._align = align;
        this.styleID++;
      }
    }
  }, {
    key: 'breakWords',
    get: function get() {
      return this._breakWords;
    },
    set: function set(breakWords) {
      if (this._breakWords !== breakWords) {
        this._breakWords = breakWords;
        this.styleID++;
      }
    }
  }, {
    key: 'dropShadow',
    get: function get() {
      return this._dropShadow;
    },
    set: function set(dropShadow) {
      if (this._dropShadow !== dropShadow) {
        this._dropShadow = dropShadow;
        this.styleID++;
      }
    }
  }, {
    key: 'dropShadowAngle',
    get: function get() {
      return this._dropShadowAngle;
    },
    set: function set(dropShadowAngle) {
      if (this._dropShadowAngle !== dropShadowAngle) {
        this._dropShadowAngle = dropShadowAngle;
        this.styleID++;
      }
    }
  }, {
    key: 'dropShadowBlur',
    get: function get() {
      return this._dropShadowBlur;
    },
    set: function set(dropShadowBlur) {
      if (this._dropShadowBlur !== dropShadowBlur) {
        this._dropShadowBlur = dropShadowBlur;
        this.styleID++;
      }
    }
  }, {
    key: 'dropShadowColor',
    get: function get() {
      return this._dropShadowColor;
    },
    set: function set(dropShadowColor) {
      var outputColor = getColor(dropShadowColor);
      if (this._dropShadowColor !== outputColor) {
        this._dropShadowColor = outputColor;
        this.styleID++;
      }
    }
  }, {
    key: 'dropShadowDistance',
    get: function get() {
      return this._dropShadowDistance;
    },
    set: function set(dropShadowDistance) {
      if (this._dropShadowDistance !== dropShadowDistance) {
        this._dropShadowDistance = dropShadowDistance;
        this.styleID++;
      }
    }
  }, {
    key: 'fill',
    get: function get() {
      return this._fill;
    },
    set: function set(fill) {
      var outputColor = getColor(fill);
      if (this._fill !== outputColor) {
        this._fill = outputColor;
        this.styleID++;
      }
    }
  }, {
    key: 'fillGradientType',
    get: function get() {
      return this._fillGradientType;
    },
    set: function set(fillGradientType) {
      if (this._fillGradientType !== fillGradientType) {
        this._fillGradientType = fillGradientType;
        this.styleID++;
      }
    }
  }, {
    key: 'fillGradientStops',
    get: function get() {
      return this._fillGradientStops;
    },
    set: function set(fillGradientStops) {
      if (!areArraysEqual(this._fillGradientStops, fillGradientStops)) {
        this._fillGradientStops = fillGradientStops;
        this.styleID++;
      }
    }
  }, {
    key: 'fontFamily',
    get: function get() {
      return this._fontFamily;
    },
    set: function set(fontFamily) {
      if (this.fontFamily !== fontFamily) {
        this._fontFamily = fontFamily;
        this.styleID++;
      }
    }
  }, {
    key: 'fontSize',
    get: function get() {
      return this._fontSize;
    },
    set: function set(fontSize) {
      if (this._fontSize !== fontSize) {
        this._fontSize = fontSize;
        this.styleID++;
      }
    }
  }, {
    key: 'fontStyle',
    get: function get() {
      return this._fontStyle;
    },
    set: function set(fontStyle) {
      if (this._fontStyle !== fontStyle) {
        this._fontStyle = fontStyle;
        this.styleID++;
      }
    }
  }, {
    key: 'fontVariant',
    get: function get() {
      return this._fontVariant;
    },
    set: function set(fontVariant) {
      if (this._fontVariant !== fontVariant) {
        this._fontVariant = fontVariant;
        this.styleID++;
      }
    }
  }, {
    key: 'fontWeight',
    get: function get() {
      return this._fontWeight;
    },
    set: function set(fontWeight) {
      if (this._fontWeight !== fontWeight) {
        this._fontWeight = fontWeight;
        this.styleID++;
      }
    }
  }, {
    key: 'letterSpacing',
    get: function get() {
      return this._letterSpacing;
    },
    set: function set(letterSpacing) {
      if (this._letterSpacing !== letterSpacing) {
        this._letterSpacing = letterSpacing;
        this.styleID++;
      }
    }
  }, {
    key: 'lineHeight',
    get: function get() {
      return this._lineHeight;
    },
    set: function set(lineHeight) {
      if (this._lineHeight !== lineHeight) {
        this._lineHeight = lineHeight;
        this.styleID++;
      }
    }
  }, {
    key: 'lineJoin',
    get: function get() {
      return this._lineJoin;
    },
    set: function set(lineJoin) {
      if (this._lineJoin !== lineJoin) {
        this._lineJoin = lineJoin;
        this.styleID++;
      }
    }
  }, {
    key: 'miterLimit',
    get: function get() {
      return this._miterLimit;
    },
    set: function set(miterLimit) {
      if (this._miterLimit !== miterLimit) {
        this._miterLimit = miterLimit;
        this.styleID++;
      }
    }
  }, {
    key: 'padding',
    get: function get() {
      return this._padding;
    },
    set: function set(padding) {
      if (this._padding !== padding) {
        this._padding = padding;
        this.styleID++;
      }
    }
  }, {
    key: 'stroke',
    get: function get() {
      return this._stroke;
    },
    set: function set(stroke) {
      var outputColor = getColor(stroke);
      if (this._stroke !== outputColor) {
        this._stroke = outputColor;
        this.styleID++;
      }
    }
  }, {
    key: 'strokeThickness',
    get: function get() {
      return this._strokeThickness;
    },
    set: function set(strokeThickness) {
      if (this._strokeThickness !== strokeThickness) {
        this._strokeThickness = strokeThickness;
        this.styleID++;
      }
    }
  }, {
    key: 'textBaseline',
    get: function get() {
      return this._textBaseline;
    },
    set: function set(textBaseline) {
      if (this._textBaseline !== textBaseline) {
        this._textBaseline = textBaseline;
        this.styleID++;
      }
    }
  }, {
    key: 'trim',
    get: function get() {
      return this._trim;
    },
    set: function set(trim) {
      if (this._trim !== trim) {
        this._trim = trim;
        this.styleID++;
      }
    }
  }, {
    key: 'wordWrap',
    get: function get() {
      return this._wordWrap;
    },
    set: function set(wordWrap) {
      if (this._wordWrap !== wordWrap) {
        this._wordWrap = wordWrap;
        this.styleID++;
      }
    }
  }, {
    key: 'wordWrapWidth',
    get: function get() {
      return this._wordWrapWidth;
    },
    set: function set(wordWrapWidth) {
      if (this._wordWrapWidth !== wordWrapWidth) {
        this._wordWrapWidth = wordWrapWidth;
        this.styleID++;
      }
    }
  }]);

  return TextStyle;
}();

/**
 * Utility function to convert hexadecimal colors to strings, and simply return the color if it's a string.
 *
 * @param {number|number[]} color
 * @return {string} The color as a string.
 */


exports.default = TextStyle;
function getSingleColor(color) {
  if (typeof color === 'number') {
    return (0, _utils.hex2string)(color);
  } else if (typeof color === 'string') {
    if (color.indexOf('0x') === 0) {
      color = color.replace('0x', '#');
    }
  }

  return color;
}

/**
 * Utility function to convert hexadecimal colors to strings, and simply return the color if it's a string.
 * This version can also convert array of colors
 *
 * @param {number|number[]} color
 * @return {string} The color as a string.
 */
function getColor(color) {
  if (!Array.isArray(color)) {
    return getSingleColor(color);
  } else {
    for (var i = 0; i < color.length; ++i) {
      color[i] = getSingleColor(color[i]);
    }

    return color;
  }
}

/**
 * Utility function to convert hexadecimal colors to strings, and simply return the color if it's a string.
 * This version can also convert array of colors
 *
 * @param {Array} array1 First array to compare
 * @param {Array} array2 Second array to compare
 * @return {boolean} Do the arrays contain the same values in the same order
 */
function areArraysEqual(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }

  if (array1.length !== array2.length) {
    return false;
  }

  for (var i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseTexture2 = __webpack_require__(11);

var _BaseTexture3 = _interopRequireDefault(_BaseTexture2);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A BaseRenderTexture is a special texture that allows any display object to be rendered to it.
 *
 * __Hint__: All DisplayObjects (i.e. Sprites) that render to a BaseRenderTexture should be preloaded
 * otherwise black rectangles will be drawn instead.
 *
 * A BaseRenderTexture takes a snapshot of any Display Object given to its render method. The position
 * and rotation of the given Display Objects is ignored. For example:
 *
 * ```js
 * let baseRenderTexture = new Tiny.BaseRenderTexture(800, 600);
 * let sprite = Tiny.Sprite.fromImage('spinObj_01.png');
 *
 * sprite.position.x = 800/2;
 * sprite.position.y = 600/2;
 * sprite.anchor.x = 0.5;
 * sprite.anchor.y = 0.5;
 *
 * baseRenderTexture.render(sprite);
 * ```
 *
 * The Sprite in this case will be rendered using its local transform. To render this sprite at 0,0
 * you can clear the transform
 *
 * ```js
 * let app = new Tiny.Application();
 * let renderer = app.renderer;
 *
 * sprite.setTransform();
 *
 * let baseRenderTexture = new Tiny.BaseRenderTexture(100, 100);
 * let renderTexture = new Tiny.RenderTexture(baseRenderTexture);
 *
 * renderer.render(sprite, renderTexture);  // Renders to center of RenderTexture
 * ```
 *
 * @class
 * @extends Tiny.BaseTexture
 * @memberof Tiny
 */
var BaseRenderTexture = function (_BaseTexture) {
  _inherits(BaseRenderTexture, _BaseTexture);

  /**
   * @param {number}  width=100                           - The width of the base render texture
   * @param {number}  height=100                          - The height of the base render texture
   * @param {number}  scaleMode=Tiny.settings.SCALE_MODE  - See {@link Tiny.SCALE_MODES} for possible values
   * @param {number}  resolution=1                        - The resolution / device pixel ratio of the texture being generated
   */
  function BaseRenderTexture() {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var scaleMode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var resolution = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

    _classCallCheck(this, BaseRenderTexture);

    var _this = _possibleConstructorReturn(this, (BaseRenderTexture.__proto__ || Object.getPrototypeOf(BaseRenderTexture)).call(this, null, scaleMode));

    _this.resolution = resolution || _settings2.default.RESOLUTION;

    _this.width = width;
    _this.height = height;

    _this.realWidth = _this.width * _this.resolution;
    _this.realHeight = _this.height * _this.resolution;

    _this.scaleMode = scaleMode !== undefined ? scaleMode : _settings2.default.SCALE_MODE;
    _this.hasLoaded = true;

    /**
     * A map of renderer IDs to webgl renderTargets
     *
     * @private
     * @member {object<number, WebGLTexture>}
     */
    _this._glRenderTargets = {};

    /**
     * A reference to the canvas render target (we only need one as this can be shared across renderers)
     *
     * @private
     * @member {object<number, WebGLTexture>}
     */
    _this._canvasRenderTarget = null;

    /**
     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.
     *
     * @member {boolean}
     */
    _this.valid = false;
    return _this;
  }

  /**
   * Resizes the BaseRenderTexture.
   *
   * @param {number} width - The width to resize to.
   * @param {number} height - The height to resize to.
   */


  _createClass(BaseRenderTexture, [{
    key: 'resize',
    value: function resize(width, height) {
      if (width === this.width && height === this.height) {
        return;
      }

      this.valid = width > 0 && height > 0;

      this.width = width;
      this.height = height;

      this.realWidth = this.width * this.resolution;
      this.realHeight = this.height * this.resolution;

      if (!this.valid) {
        return;
      }

      this.emit('update', this);
    }

    /**
     * Destroys this texture
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      _get(BaseRenderTexture.prototype.__proto__ || Object.getPrototypeOf(BaseRenderTexture.prototype), 'destroy', this).call(this, true);
      this.renderer = null;
    }
  }]);

  return BaseRenderTexture;
}(_BaseTexture3.default);

exports.default = BaseRenderTexture;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GroupD = __webpack_require__(50);

var _GroupD2 = _interopRequireDefault(_GroupD);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A standard object to store the Uvs of a texture
 *
 * @class
 * @private
 * @memberof Tiny
 */
var TextureUvs = function () {
  /**
   *
   */
  function TextureUvs() {
    _classCallCheck(this, TextureUvs);

    this.x0 = 0;
    this.y0 = 0;

    this.x1 = 1;
    this.y1 = 0;

    this.x2 = 1;
    this.y2 = 1;

    this.x3 = 0;
    this.y3 = 1;

    this.uvsUint32 = new Uint32Array(4);
  }

  /**
   * Sets the texture Uvs based on the given frame information.
   *
   * @private
   * @param {Tiny.Rectangle} frame      - The frame of the texture
   * @param {Tiny.Rectangle} baseFrame  - The base frame of the texture
   * @param {number}          rotate    - Rotation of frame, see {@link Tiny.GroupD8}
   */


  _createClass(TextureUvs, [{
    key: 'set',
    value: function set(frame, baseFrame, rotate) {
      var tw = baseFrame.width;
      var th = baseFrame.height;

      if (rotate) {
        // width and height div 2 div baseFrame size
        var w2 = frame.width / 2 / tw;
        var h2 = frame.height / 2 / th;

        // coordinates of center
        var cX = frame.x / tw + w2;
        var cY = frame.y / th + h2;

        rotate = _GroupD2.default.add(rotate, _GroupD2.default.NW); // NW is top-left corner
        this.x0 = cX + w2 * _GroupD2.default.uX(rotate);
        this.y0 = cY + h2 * _GroupD2.default.uY(rotate);

        rotate = _GroupD2.default.add(rotate, 2); // rotate 90 degrees clockwise
        this.x1 = cX + w2 * _GroupD2.default.uX(rotate);
        this.y1 = cY + h2 * _GroupD2.default.uY(rotate);

        rotate = _GroupD2.default.add(rotate, 2);
        this.x2 = cX + w2 * _GroupD2.default.uX(rotate);
        this.y2 = cY + h2 * _GroupD2.default.uY(rotate);

        rotate = _GroupD2.default.add(rotate, 2);
        this.x3 = cX + w2 * _GroupD2.default.uX(rotate);
        this.y3 = cY + h2 * _GroupD2.default.uY(rotate);
      } else {
        this.x0 = frame.x / tw;
        this.y0 = frame.y / th;

        this.x1 = (frame.x + frame.width) / tw;
        this.y1 = frame.y / th;

        this.x2 = (frame.x + frame.width) / tw;
        this.y2 = (frame.y + frame.height) / th;

        this.x3 = frame.x / tw;
        this.y3 = (frame.y + frame.height) / th;
      }

      this.uvsUint32[0] = (this.y0 * 65535 & 0xFFFF) << 16 | this.x0 * 65535 & 0xFFFF;
      this.uvsUint32[1] = (this.y1 * 65535 & 0xFFFF) << 16 | this.x1 * 65535 & 0xFFFF;
      this.uvsUint32[2] = (this.y2 * 65535 & 0xFFFF) << 16 | this.x2 * 65535 & 0xFFFF;
      this.uvsUint32[3] = (this.y3 * 65535 & 0xFFFF) << 16 | this.x3 * 65535 & 0xFFFF;
    }
  }]);

  return TextureUvs;
}();

exports.default = TextureUvs;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _BaseTexture2 = __webpack_require__(11);

var _BaseTexture3 = _interopRequireDefault(_BaseTexture2);

var _utils = __webpack_require__(1);

var _ticker = __webpack_require__(29);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A texture of a [playing] Video.
 *
 * Video base textures mimic Tiny BaseTexture.from.... method in their creation process.
 *
 * This can be used in several ways, such as:
 *
 * ```js
 * let texture = Tiny.VideoBaseTexture.fromUrl('http://mydomain.com/video.mp4');
 *
 * let texture = Tiny.VideoBaseTexture.fromUrl({ src: 'http://mydomain.com/video.mp4', mime: 'video/mp4' });
 *
 * let texture = Tiny.VideoBaseTexture.fromUrls(['/video.webm', '/video.mp4']);
 *
 * let texture = Tiny.VideoBaseTexture.fromUrls([
 *     { src: '/video.webm', mime: 'video/webm' },
 *     { src: '/video.mp4', mime: 'video/mp4' }
 * ]);
 * ```
 *
 * See the ["deus" demo](http://www.goodboydigital.com/pixijs/examples/deus/).
 *
 * @class
 * @extends Tiny.BaseTexture
 * @memberof Tiny
 */
var VideoBaseTexture = function (_BaseTexture) {
  _inherits(VideoBaseTexture, _BaseTexture);

  /**
   * @param {HTMLVideoElement} source - Video source
   * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
   */
  function VideoBaseTexture(source, scaleMode) {
    _classCallCheck(this, VideoBaseTexture);

    if (!source) {
      throw new Error('No video source element specified.');
    }

    // hook in here to check if video is already available.
    // BaseTexture looks for a source.complete boolean, plus width & height.

    if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
      source.complete = true;
    }

    var _this = _possibleConstructorReturn(this, (VideoBaseTexture.__proto__ || Object.getPrototypeOf(VideoBaseTexture)).call(this, source, scaleMode));

    _this.width = source.videoWidth;
    _this.height = source.videoHeight;

    _this._autoUpdate = true;
    _this._isAutoUpdating = false;

    /**
     * When set to true will automatically play videos used by this texture once
     * they are loaded. If false, it will not modify the playing state.
     *
     * @member {boolean}
     * @default true
     */
    _this.autoPlay = true;

    _this.update = _this.update.bind(_this);
    _this._onCanPlay = _this._onCanPlay.bind(_this);

    source.addEventListener('play', _this._onPlayStart.bind(_this));
    source.addEventListener('pause', _this._onPlayStop.bind(_this));
    _this.hasLoaded = false;
    _this.__loaded = false;

    if (!_this._isSourceReady()) {
      source.addEventListener('canplay', _this._onCanPlay);
      source.addEventListener('canplaythrough', _this._onCanPlay);
    } else {
      _this._onCanPlay();
    }
    return _this;
  }

  /**
   * Returns true if the underlying source is playing.
   *
   * @private
   * @return {boolean} True if playing.
   */


  _createClass(VideoBaseTexture, [{
    key: '_isSourcePlaying',
    value: function _isSourcePlaying() {
      var source = this.source;

      return source.currentTime > 0 && source.paused === false && source.ended === false && source.readyState > 2;
    }

    /**
     * Returns true if the underlying source is ready for playing.
     *
     * @private
     * @return {boolean} True if ready.
     */

  }, {
    key: '_isSourceReady',
    value: function _isSourceReady() {
      return this.source.readyState === 3 || this.source.readyState === 4;
    }

    /**
     * Runs the update loop when the video is ready to play
     *
     * @private
     */

  }, {
    key: '_onPlayStart',
    value: function _onPlayStart() {
      // Just in case the video has not received its can play even yet..
      if (!this.hasLoaded) {
        this._onCanPlay();
      }

      if (!this._isAutoUpdating && this.autoUpdate) {
        _ticker.shared.add(this.update, this, _const.UPDATE_PRIORITY.HIGH);
        this._isAutoUpdating = true;
      }
    }

    /**
     * Fired when a pause event is triggered, stops the update loop
     *
     * @private
     */

  }, {
    key: '_onPlayStop',
    value: function _onPlayStop() {
      if (this._isAutoUpdating) {
        _ticker.shared.remove(this.update, this);
        this._isAutoUpdating = false;
      }
    }

    /**
     * Fired when the video is loaded and ready to play
     *
     * @private
     */

  }, {
    key: '_onCanPlay',
    value: function _onCanPlay() {
      this.hasLoaded = true;

      if (this.source) {
        this.source.removeEventListener('canplay', this._onCanPlay);
        this.source.removeEventListener('canplaythrough', this._onCanPlay);

        this.width = this.source.videoWidth;
        this.height = this.source.videoHeight;

        // prevent multiple loaded dispatches..
        if (!this.__loaded) {
          this.__loaded = true;
          this.emit('loaded', this);
        }

        if (this._isSourcePlaying()) {
          this._onPlayStart();
        } else if (this.autoPlay) {
          this.source.play();
        }
      }
    }

    /**
     * Destroys this texture
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      if (this._isAutoUpdating) {
        _ticker.shared.remove(this.update, this);
      }

      if (this.source && this.source._tinyId) {
        _BaseTexture3.default.removeFromCache(this.source._tinyId);
        delete this.source._tinyId;
      }

      _get(VideoBaseTexture.prototype.__proto__ || Object.getPrototypeOf(VideoBaseTexture.prototype), 'destroy', this).call(this);
    }

    /**
     * Mimic Tiny BaseTexture.from.... method.
     *
     * @static
     * @param {HTMLVideoElement} video - Video to create texture from
     * @param {number} [scaleMode=Tiny.settings.SCALE_MODE] - See {@link Tiny.SCALE_MODES} for possible values
     * @return {Tiny.VideoBaseTexture} Newly created VideoBaseTexture
     */

  }, {
    key: 'autoUpdate',


    /**
     * Should the base texture automatically update itself, set to true by default
     *
     * @member {boolean}
     */
    get: function get() {
      return this._autoUpdate;
    },
    set: function set(value) {
      if (value !== this._autoUpdate) {
        this._autoUpdate = value;

        if (!this._autoUpdate && this._isAutoUpdating) {
          _ticker.shared.remove(this.update, this);
          this._isAutoUpdating = false;
        } else if (this._autoUpdate && !this._isAutoUpdating) {
          _ticker.shared.add(this.update, this, _const.UPDATE_PRIORITY.HIGH);
          this._isAutoUpdating = true;
        }
      }
    }
  }], [{
    key: 'fromVideo',
    value: function fromVideo(video, scaleMode) {
      if (!video._tinyId) {
        video._tinyId = 'video_' + (0, _utils.uid)();
      }

      var baseTexture = _utils.BaseTextureCache[video._tinyId];

      if (!baseTexture) {
        baseTexture = new VideoBaseTexture(video, scaleMode);
        _BaseTexture3.default.addToCache(baseTexture, video._tinyId);
      }

      return baseTexture;
    }

    /**
     * Helper function that creates a new BaseTexture based on the given video element.
     * This BaseTexture can then be used to create a texture
     *
     * @static
     * @param {string|object|string[]|object[]} videoSrc - The URL(s) for the video.
     * @param {string} [videoSrc.src] - One of the source urls for the video
     * @param {string} [videoSrc.mime] - The mimetype of the video (e.g. 'video/mp4'). If not specified
     *  the url's extension will be used as the second part of the mime type.
     * @param {number} scaleMode - See {@link Tiny.SCALE_MODES} for possible values
     * @return {Tiny.VideoBaseTexture} Newly created VideoBaseTexture
     */

  }, {
    key: 'fromUrl',
    value: function fromUrl(videoSrc, scaleMode) {
      var video = document.createElement('video');

      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('crossOrigin', 'anonymous');

      // array of objects or strings
      if (Array.isArray(videoSrc)) {
        for (var i = 0; i < videoSrc.length; ++i) {
          video.appendChild(createSource(videoSrc[i].src || videoSrc[i], videoSrc[i].mime));
        }
      } else {
        // single object or string
        video.appendChild(createSource(videoSrc.src || videoSrc, videoSrc.mime));
      }

      video.load();

      return VideoBaseTexture.fromVideo(video, scaleMode);
    }
  }]);

  return VideoBaseTexture;
}(_BaseTexture3.default);

exports.default = VideoBaseTexture;


VideoBaseTexture.fromUrls = VideoBaseTexture.fromUrl;

function createSource(path, type) {
  if (!type) {
    type = 'video/' + path.substr(path.lastIndexOf('.') + 1);
  }

  var source = document.createElement('source');

  source.src = path;
  source.type = type;

  return source;
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIndicesForQuads;
/**
 * Generic Mask Stack data structure
 *
 * @memberof Tiny
 * @function createIndicesForQuads
 * @private
 * @param {number} size - Number of quads
 * @return {Uint16Array} indices
 */
function createIndicesForQuads(size) {
  // the total number of indices in our array, there are 6 points per quad.

  var totalIndices = size * 6;

  var indices = new Uint16Array(totalIndices);

  // fill the indices with the quads to draw
  for (var i = 0, j = 0; i < totalIndices; i += 6, j += 4) {
    indices[i + 0] = j + 0;
    indices[i + 1] = j + 1;
    indices[i + 2] = j + 2;
    indices[i + 3] = j + 0;
    indices[i + 4] = j + 2;
    indices[i + 5] = j + 3;
  }

  return indices;
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Holds all information related to an Interaction event
 *
 * @class
 * @private
 * @memberof Tiny.interaction
 */
var InteractionData = function () {
  /**
   *
   */
  function InteractionData() {
    _classCallCheck(this, InteractionData);

    /**
     * This point stores the global coords of where the touch/mouse event happened
     *
     * @member {Tiny.Point}
     */
    this.global = new core.Point();

    /**
     * The target DisplayObject that was interacted with
     *
     * @member {Tiny.DisplayObject}
     */
    this.target = null;

    /**
     * When passed to an event handler, this will be the original DOM Event that was captured
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent
     * @member {MouseEvent|TouchEvent|PointerEvent}
     */
    this.originalEvent = null;

    /**
     * Unique identifier for this interaction
     *
     * @member {number}
     */
    this.identifier = null;

    /**
     * Indicates whether or not the pointer device that created the event is the primary pointer.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/isPrimary
     * @type {Boolean}
     */
    this.isPrimary = false;

    /**
     * Indicates which button was pressed on the mouse or pointer device to trigger the event.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
     * @type {number}
     */
    this.button = 0;

    /**
     * Indicates which buttons are pressed on the mouse or pointer device when the event is triggered.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
     * @type {number}
     */
    this.buttons = 0;

    /**
     * The width of the pointer's contact along the x-axis, measured in CSS pixels.
     * radiusX of TouchEvents will be represented by this value.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/width
     * @type {number}
     */
    this.width = 0;

    /**
     * The height of the pointer's contact along the y-axis, measured in CSS pixels.
     * radiusY of TouchEvents will be represented by this value.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/height
     * @type {number}
     */
    this.height = 0;

    /**
     * The angle, in degrees, between the pointer device and the screen.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltX
     * @type {number}
     */
    this.tiltX = 0;

    /**
     * The angle, in degrees, between the pointer device and the screen.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/tiltY
     * @type {number}
     */
    this.tiltY = 0;

    /**
     * The type of pointer that triggered the event.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerType
     * @type {string}
     */
    this.pointerType = null;

    /**
     * Pressure applied by the pointing device during the event. A Touch's force property
     * will be represented by this value.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pressure
     * @type {number}
     */
    this.pressure = 0;

    /**
     * From TouchEvents (not PointerEvents triggered by touches), the rotationAngle of the Touch.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Touch/rotationAngle
     * @type {number}
     */
    this.rotationAngle = 0;

    /**
     * Twist of a stylus pointer.
     *
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     * @type {number}
     */
    this.twist = 0;

    /**
     * Barrel pressure on a stylus pointer.
     *
     * @see https://w3c.github.io/pointerevents/#pointerevent-interface
     * @type {number}
     */
    this.tangentialPressure = 0;
  }

  /**
   * The unique identifier of the pointer. It will be the same as `identifier`.
   *
   * @readonly
   * @member {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/pointerId
   */


  _createClass(InteractionData, [{
    key: 'getLocalPosition',


    /**
     * This will return the local coordinates of the specified displayObject for this InteractionData
     *
     * @param {Tiny.DisplayObject} displayObject - The DisplayObject that you would like the local
     *  coords off
     * @param {Tiny.Point} [point] - A Point object in which to store the value, optional (otherwise
     *  will create a new point)
     * @param {Tiny.Point} [globalPos] - A Point object containing your custom global coords, optional
     *  (otherwise will use the current global coords)
     * @return {Tiny.Point} A point containing the coordinates of the InteractionData position relative
     *  to the DisplayObject
     */
    value: function getLocalPosition(displayObject, point, globalPos) {
      return displayObject.worldTransform.applyInverse(globalPos || this.global, point);
    }

    /**
     * Copies properties from normalized event data.
     *
     * @param {Touch|MouseEvent|PointerEvent} event The normalized event data
     * @private
     */

  }, {
    key: '_copyEvent',
    value: function _copyEvent(event) {
      // isPrimary should only change on touchstart/pointerdown, so we don't want to overwrite
      // it with "false" on later events when our shim for it on touch events might not be
      // accurate
      if (event.isPrimary) {
        this.isPrimary = true;
      }
      this.button = event.button;
      this.buttons = event.buttons;
      this.width = event.width;
      this.height = event.height;
      this.tiltX = event.tiltX;
      this.tiltY = event.tiltY;
      this.pointerType = event.pointerType;
      this.pressure = event.pressure;
      this.rotationAngle = event.rotationAngle;
      this.twist = event.twist || 0;
      this.tangentialPressure = event.tangentialPressure || 0;
    }

    /**
     * Resets the data for pooling.
     *
     * @private
     */

  }, {
    key: '_reset',
    value: function _reset() {
      // isPrimary is the only property that we really need to reset - everything else is
      // guaranteed to be overwritten
      this.isPrimary = false;
    }
  }, {
    key: 'pointerId',
    get: function get() {
      return this.identifier;
    }
  }]);

  return InteractionData;
}();

exports.default = InteractionData;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default property values of interactive objects
 * Used by {@link Tiny.interaction.InteractionManager} to automatically give all DisplayObjects these properties
 *
 * @private
 * @name interactiveTarget
 * @memberof Tiny.interaction
 * @example
 * function MyObject() {}
 *
 * Object.assign(
 *     MyObject.prototype,
 *     Tiny.interaction.interactiveTarget
 * );
 */
exports.default = {
  /**
   * Enable interaction events for the DisplayObject. Touch, pointer and mouse
   * events will not be emitted unless `interactive` is set to `true`.
   *
   * @example
   * const sprite = new Tiny.Sprite(texture);
   * sprite.interactive = true;
   * sprite.on('tap', (event) => {
   *    //handle event
   * });
   * @member {boolean}
   * @memberof Tiny.DisplayObject#
   */
  interactive: false,

  /**
   * Determines if the children to the displayObject can be clicked/touched
   * Setting this to false allows Tiny to bypass a recursive `hitTest` function
   *
   * @member {boolean}
   * @memberof Tiny.Container#
   */
  interactiveChildren: true,

  /**
   * Interaction shape. Children will be hit first, then this shape will be checked.
   * Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.
   *
   * @example
   * const sprite = new Tiny.Sprite(texture);
   * sprite.interactive = true;
   * sprite.hitArea = new Tiny.Rectangle(0, 0, 100, 100);
   * @member {Tiny.Rectangle|Tiny.Circle|Tiny.Ellipse|Tiny.Polygon|Tiny.RoundedRectangle}
   * @memberof Tiny.DisplayObject#
   */
  hitArea: null,

  /**
   * If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
   * Setting this changes the 'cursor' property to `'pointer'`.
   *
   * @example
   * const sprite = new Tiny.Sprite(texture);
   * sprite.interactive = true;
   * sprite.buttonMode = true;
   * @member {boolean}
   * @memberof Tiny.DisplayObject#
   */
  get buttonMode() {
    return this.cursor === 'pointer';
  },
  set buttonMode(value) {
    if (value) {
      this.cursor = 'pointer';
    } else if (this.cursor === 'pointer') {
      this.cursor = null;
    }
  },

  /**
   * This defines what cursor mode is used when the mouse cursor
   * is hovered over the displayObject.
   *
   * @example
   * const sprite = new Tiny.Sprite(texture);
   * sprite.interactive = true;
   * sprite.cursor = 'wait';
   * @see https://developer.mozilla.org/en/docs/Web/CSS/cursor
   *
   * @member {string}
   * @memberof Tiny.DisplayObject#
   */
  cursor: null,

  /**
   * Internal set of all active pointers, by identifier
   *
   * @member {Map<number, InteractionTrackingData>}
   * @memberof Tiny.DisplayObject#
   * @private
   */
  get trackedPointers() {
    if (this._trackedPointers === undefined) this._trackedPointers = {};

    return this._trackedPointers;
  },

  /**
   * Map of all tracked pointers, by identifier. Use trackedPointers to access.
   *
   * @private
   * @type {Map<number, InteractionTrackingData>}
   */
  _trackedPointers: undefined
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Action = __webpack_require__(21);

Object.defineProperty(exports, 'Action', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Action).default;
  }
});

var _ActionInterval = __webpack_require__(45);

Object.keys(_ActionInterval).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ActionInterval[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _InteractionData = __webpack_require__(65);

Object.defineProperty(exports, 'InteractionData', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InteractionData).default;
  }
});

var _InteractionManager = __webpack_require__(134);

Object.defineProperty(exports, 'InteractionManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_InteractionManager).default;
  }
});

var _interactiveTarget = __webpack_require__(66);

Object.defineProperty(exports, 'interactiveTarget', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_interactiveTarget).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(137);

__webpack_require__(138);

__webpack_require__(136);

if (!window.ArrayBuffer) {
  window.ArrayBuffer = Array;
}

if (!window.Float32Array) {
  window.Float32Array = Array;
}

if (!window.Uint32Array) {
  window.Uint32Array = Array;
}

if (!window.Uint16Array) {
  window.Uint16Array = Array;
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var punycode = __webpack_require__(83);
var util = __webpack_require__(72);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,


// Special case for a simple path URL
simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,


// RFC 2396: characters reserved for delimiting URLs.
// We actually just auto-escape these.
delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],


// RFC 2396: characters not allowed for various reasons.
unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),


// Allowed by RFCs, but cause of XSS attacks.  Always escape these.
autoEscape = ['\''].concat(unwise),

// Characters that are never ever allowed in a hostname.
// Note that any invalid chars are also handled, but these
// are the ones that are *expected* to be seen, so we fast-path
// them.
nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,

// protocols that can allow "unsafe" and "unwise" chars.
unsafeProtocol = {
  'javascript': true,
  'javascript:': true
},

// protocols that never have a hostname.
hostlessProtocol = {
  'javascript': true,
  'javascript:': true
},

// protocols that always contain a // bit.
slashedProtocol = {
  'http': true,
  'https': true,
  'ftp': true,
  'gopher': true,
  'file': true,
  'http:': true,
  'https:': true,
  'ftp:': true,
  'gopher:': true,
  'file:': true
},
    querystring = __webpack_require__(75);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url();
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + (typeof url === 'undefined' ? 'undefined' : _typeof(url)));
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter = queryIndex !== -1 && queryIndex < url.indexOf('#') ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1) hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1) continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }

  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function () {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || query && '?' + query || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function (relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function (relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol') result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift())) {}
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
      isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
      mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = relative.host || relative.host === '' ? relative.host : result.host;
    result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === '.' || last === '..') || last === '';

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || result.host && srcPath.length;

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function () {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

/***/ }),
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = {
  isString: function isString(arg) {
    return typeof arg === 'string';
  },
  isObject: function isObject(arg) {
    return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
  },
  isNull: function isNull(arg) {
    return arg === null;
  },
  isNullOrUndefined: function isNullOrUndefined(arg) {
    return arg == null;
  }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function (qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr,
        vstr,
        k,
        v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function (obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    return map(objectKeys(obj), function (k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function (v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);
  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map(xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(73);
exports.encode = exports.stringify = __webpack_require__(74);

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */

module.exports = function removeItems(arr, startIdx, removeCount) {
  var i,
      length = arr.length;

  if (startIdx >= length || removeCount === 0) {
    return;
  }

  removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;

  var len = length - removeCount;

  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount];
  }

  arr.length = len;
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EMPTY_ARRAY_BUFFER = new ArrayBuffer(0);

/**
 * Helper class to create a webGL buffer
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param type {gl.ARRAY_BUFFER | gl.ELEMENT_ARRAY_BUFFER} @mat
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 * @param drawType {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
 */
var Buffer = function Buffer(gl, type, data, drawType) {

  /**
      * The current WebGL rendering context
      *
      * @member {WebGLRenderingContext}
      */
  this.gl = gl;

  /**
      * The WebGL buffer, created upon instantiation
      *
      * @member {WebGLBuffer}
      */
  this.buffer = gl.createBuffer();

  /**
      * The type of the buffer
      *
      * @member {gl.ARRAY_BUFFER|gl.ELEMENT_ARRAY_BUFFER}
      */
  this.type = type || gl.ARRAY_BUFFER;

  /**
      * The draw type of the buffer
      *
      * @member {gl.STATIC_DRAW|gl.DYNAMIC_DRAW|gl.STREAM_DRAW}
      */
  this.drawType = drawType || gl.STATIC_DRAW;

  /**
      * The data in the buffer, as a typed array
      *
      * @member {ArrayBuffer| SharedArrayBuffer|ArrayBufferView}
      */
  this.data = EMPTY_ARRAY_BUFFER;

  if (data) {
    this.upload(data);
  }

  this._updateID = 0;
};

/**
 * Uploads the buffer to the GPU
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data to upload
 * @param offset {Number} if only a subset of the data should be uploaded, this is the amount of data to subtract
 * @param dontBind {Boolean} whether to bind the buffer before uploading it
 */
Buffer.prototype.upload = function (data, offset, dontBind) {
  // todo - needed?
  if (!dontBind) this.bind();

  var gl = this.gl;

  data = data || this.data;
  offset = offset || 0;

  if (this.data.byteLength >= data.byteLength) {
    gl.bufferSubData(this.type, offset, data);
  } else {
    gl.bufferData(this.type, data, this.drawType);
  }

  this.data = data;
};
/**
 * Binds the buffer
 *
 */
Buffer.prototype.bind = function () {
  var gl = this.gl;
  gl.bindBuffer(this.type, this.buffer);
};

Buffer.createVertexBuffer = function (gl, data, drawType) {
  return new Buffer(gl, gl.ARRAY_BUFFER, data, drawType);
};

Buffer.createIndexBuffer = function (gl, data, drawType) {
  return new Buffer(gl, gl.ELEMENT_ARRAY_BUFFER, data, drawType);
};

Buffer.create = function (gl, type, data, drawType) {
  return new Buffer(gl, type, data, drawType);
};

/**
 * Destroys the buffer
 *
 */
Buffer.prototype.destroy = function () {
  this.gl.deleteBuffer(this.buffer);
};

module.exports = Buffer;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Texture = __webpack_require__(34);

/**
 * Helper class to create a webGL Framebuffer
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param width {Number} the width of the drawing area of the frame buffer
 * @param height {Number} the height of the drawing area of the frame buffer
 */
var Framebuffer = function Framebuffer(gl, width, height) {
  /**
   * The current WebGL rendering context
   *
   * @member {WebGLRenderingContext}
   */
  this.gl = gl;

  /**
   * The frame buffer
   *
   * @member {WebGLFramebuffer}
   */
  this.framebuffer = gl.createFramebuffer();

  /**
   * The stencil buffer
   *
   * @member {WebGLRenderbuffer}
   */
  this.stencil = null;

  /**
   * The stencil buffer
   *
   * @member {PIXI.glCore.GLTexture}
   */
  this.texture = null;

  /**
   * The width of the drawing area of the buffer
   *
   * @member {Number}
   */
  this.width = width || 100;
  /**
   * The height of the drawing area of the buffer
   *
   * @member {Number}
   */
  this.height = height || 100;
};

/**
 * Adds a texture to the frame buffer
 * @param texture {PIXI.glCore.GLTexture}
 */
Framebuffer.prototype.enableTexture = function (texture) {
  var gl = this.gl;

  this.texture = texture || new Texture(gl);

  this.texture.bind();

  //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  this.width, this.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

  this.bind();

  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture.texture, 0);
};

/**
 * Initialises the stencil buffer
 */
Framebuffer.prototype.enableStencil = function () {
  if (this.stencil) return;

  var gl = this.gl;

  this.stencil = gl.createRenderbuffer();

  gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);

  // TODO.. this is depth AND stencil?
  gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.stencil);
  gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, this.width, this.height);
};

/**
 * Erases the drawing area and fills it with a colour
 * @param  r {Number} the red value of the clearing colour
 * @param  g {Number} the green value of the clearing colour
 * @param  b {Number} the blue value of the clearing colour
 * @param  a {Number} the alpha value of the clearing colour
 */
Framebuffer.prototype.clear = function (r, g, b, a) {
  this.bind();

  var gl = this.gl;

  gl.clearColor(r, g, b, a);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
};

/**
 * Binds the frame buffer to the WebGL context
 */
Framebuffer.prototype.bind = function () {
  var gl = this.gl;
  gl.bindFramebuffer(gl.FRAMEBUFFER, this.framebuffer);
};

/**
 * Unbinds the frame buffer to the WebGL context
 */
Framebuffer.prototype.unbind = function () {
  var gl = this.gl;
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
};
/**
 * Resizes the drawing area of the buffer to the given width and height
 * @param  width  {Number} the new width
 * @param  height {Number} the new height
 */
Framebuffer.prototype.resize = function (width, height) {
  var gl = this.gl;

  this.width = width;
  this.height = height;

  if (this.texture) {
    this.texture.uploadData(null, width, height);
  }

  if (this.stencil) {
    // update the stencil buffer width and height
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.stencil);
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width, height);
  }
};

/**
 * Destroys this buffer
 */
Framebuffer.prototype.destroy = function () {
  var gl = this.gl;

  //TODO
  if (this.texture) {
    this.texture.destroy();
  }

  gl.deleteFramebuffer(this.framebuffer);

  this.gl = null;

  this.stencil = null;
  this.texture = null;
};

/**
 * Creates a frame buffer with a texture containing the given data
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param width {Number} the width of the drawing area of the frame buffer
 * @param height {Number} the height of the drawing area of the frame buffer
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 */
Framebuffer.createRGBA = function (gl, width, height, data) {
  var texture = Texture.fromData(gl, null, width, height);
  texture.enableNearestScaling();
  texture.enableWrapClamp();

  //now create the framebuffer object and attach the texture to it.
  var fbo = new Framebuffer(gl, width, height);
  fbo.enableTexture(texture);

  //fbo.enableStencil(); // get this back on soon!

  fbo.unbind();

  return fbo;
};

/**
 * Creates a frame buffer with a texture containing the given data
 * @static
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 * @param width {Number} the width of the drawing area of the frame buffer
 * @param height {Number} the height of the drawing area of the frame buffer
 * @param data {ArrayBuffer| SharedArrayBuffer|ArrayBufferView} an array of data
 */
Framebuffer.createFloat32 = function (gl, width, height, data) {
  // create a new texture..
  var texture = new Texture.fromData(gl, data, width, height);
  texture.enableNearestScaling();
  texture.enableWrapClamp();

  //now create the framebuffer object and attach the texture to it.
  var fbo = new Framebuffer(gl, width, height);
  fbo.enableTexture(texture);

  fbo.unbind();

  return fbo;
};

module.exports = Framebuffer;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compileProgram = __webpack_require__(36),
    extractAttributes = __webpack_require__(38),
    extractUniforms = __webpack_require__(39),
    setPrecision = __webpack_require__(42),
    generateUniformAccessObject = __webpack_require__(40);

/**
 * Helper class to create a webGL Shader
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext}
 * @param vertexSrc {string|string[]} The vertex shader source as an array of strings.
 * @param fragmentSrc {string|string[]} The fragment shader source as an array of strings.
 * @param precision {precision]} The float precision of the shader. Options are 'lowp', 'mediump' or 'highp'.
 * @param attributeLocations {object} A key value pair showing which location eact attribute should sit eg {position:0, uvs:1}
 */
var Shader = function Shader(gl, vertexSrc, fragmentSrc, precision, attributeLocations) {
	/**
  * The current WebGL rendering context
  *
  * @member {WebGLRenderingContext}
  */
	this.gl = gl;

	if (precision) {
		vertexSrc = setPrecision(vertexSrc, precision);
		fragmentSrc = setPrecision(fragmentSrc, precision);
	}

	/**
  * The shader program
  *
  * @member {WebGLProgram}
  */
	// First compile the program..
	this.program = compileProgram(gl, vertexSrc, fragmentSrc, attributeLocations);

	/**
  * The attributes of the shader as an object containing the following properties
  * {
  * 	type,
  * 	size,
  * 	location,
  * 	pointer
  * }
  * @member {Object}
  */
	// next extract the attributes
	this.attributes = extractAttributes(gl, this.program);

	this.uniformData = extractUniforms(gl, this.program);

	/**
  * The uniforms of the shader as an object containing the following properties
  * {
  * 	gl,
  * 	data
  * }
  * @member {Object}
  */
	this.uniforms = generateUniformAccessObject(gl, this.uniformData);
};
/**
 * Uses this shader
 */
Shader.prototype.bind = function () {
	this.gl.useProgram(this.program);
};

/**
 * Destroys this shader
 * TODO
 */
Shader.prototype.destroy = function () {
	this.attributes = null;
	this.uniformData = null;
	this.uniforms = null;

	var gl = this.gl;
	gl.deleteProgram(this.program);
};

module.exports = Shader;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// state object//
var setVertexAttribArrays = __webpack_require__(35);

/**
 * Helper class to work with WebGL VertexArrayObjects (vaos)
 * Only works if WebGL extensions are enabled (they usually are)
 *
 * @class
 * @memberof PIXI.glCore
 * @param gl {WebGLRenderingContext} The current WebGL rendering context
 */
function VertexArrayObject(gl, state) {
    this.nativeVaoExtension = null;

    if (!VertexArrayObject.FORCE_NATIVE) {
        this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
    }

    this.nativeState = state;

    if (this.nativeVaoExtension) {
        this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();

        var maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);

        // VAO - overwrite the state..
        this.nativeState = {
            tempAttribState: new Array(maxAttribs),
            attribState: new Array(maxAttribs)
        };
    }

    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    /**
     * An array of attributes
     *
     * @member {Array}
     */
    this.attributes = [];

    /**
     * @member {PIXI.glCore.GLBuffer}
     */
    this.indexBuffer = null;

    /**
     * A boolean flag
     *
     * @member {Boolean}
     */
    this.dirty = false;
}

VertexArrayObject.prototype.constructor = VertexArrayObject;
module.exports = VertexArrayObject;

/**
* Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
* If you find on older devices that things have gone a bit weird then set this to true.
*/
/**
 * Lets the VAO know if you should use the WebGL extension or the native methods.
 * Some devices behave a bit funny when using the newer extensions (im looking at you ipad 2!)
 * If you find on older devices that things have gone a bit weird then set this to true.
 * @static
 * @property {Boolean} FORCE_NATIVE
 */
VertexArrayObject.FORCE_NATIVE = false;

/**
 * Binds the buffer
 */
VertexArrayObject.prototype.bind = function () {
    if (this.nativeVao) {
        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);

        if (this.dirty) {
            this.dirty = false;
            this.activate();
        }
    } else {

        this.activate();
    }

    return this;
};

/**
 * Unbinds the buffer
 */
VertexArrayObject.prototype.unbind = function () {
    if (this.nativeVao) {
        this.nativeVaoExtension.bindVertexArrayOES(null);
    }

    return this;
};

/**
 * Uses this vao
 */
VertexArrayObject.prototype.activate = function () {

    var gl = this.gl;
    var lastBuffer = null;

    for (var i = 0; i < this.attributes.length; i++) {
        var attrib = this.attributes[i];

        if (lastBuffer !== attrib.buffer) {
            attrib.buffer.bind();
            lastBuffer = attrib.buffer;
        }

        gl.vertexAttribPointer(attrib.attribute.location, attrib.attribute.size, attrib.type || gl.FLOAT, attrib.normalized || false, attrib.stride || 0, attrib.start || 0);
    }

    setVertexAttribArrays(gl, this.attributes, this.nativeState);

    if (this.indexBuffer) {
        this.indexBuffer.bind();
    }

    return this;
};

/**
 *
 * @param buffer     {PIXI.gl.GLBuffer}
 * @param attribute  {*}
 * @param type       {String}
 * @param normalized {Boolean}
 * @param stride     {Number}
 * @param start      {Number}
 */
VertexArrayObject.prototype.addAttribute = function (buffer, attribute, type, normalized, stride, start) {
    this.attributes.push({
        buffer: buffer,
        attribute: attribute,

        location: attribute.location,
        type: type || this.gl.FLOAT,
        normalized: normalized || false,
        stride: stride || 0,
        start: start || 0
    });

    this.dirty = true;

    return this;
};

/**
 *
 * @param buffer   {PIXI.gl.GLBuffer}
 */
VertexArrayObject.prototype.addIndex = function (buffer /*, options*/) {
    this.indexBuffer = buffer;

    this.dirty = true;

    return this;
};

/**
 * Unbinds this vao and disables it
 */
VertexArrayObject.prototype.clear = function () {
    // var gl = this.gl;

    // TODO - should this function unbind after clear?
    // for now, no but lets see what happens in the real world!
    if (this.nativeVao) {
        this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao);
    }

    this.attributes.length = 0;
    this.indexBuffer = null;

    return this;
};

/**
 * @param type  {Number}
 * @param size  {Number}
 * @param start {Number}
 */
VertexArrayObject.prototype.draw = function (type, size, start) {
    var gl = this.gl;

    if (this.indexBuffer) {
        gl.drawElements(type, size || this.indexBuffer.data.length, gl.UNSIGNED_SHORT, (start || 0) * 2);
    } else {
        // TODO need a better way to calculate size..
        gl.drawArrays(type, start, size || this.getSize());
    }

    return this;
};

/**
 * Destroy this vao
 */
VertexArrayObject.prototype.destroy = function () {
    // lose references
    this.gl = null;
    this.indexBuffer = null;
    this.attributes = null;
    this.nativeState = null;

    if (this.nativeVao) {
        this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao);
    }

    this.nativeVaoExtension = null;
    this.nativeVao = null;
};

VertexArrayObject.prototype.getSize = function () {
    var attrib = this.attributes[0];
    return attrib.buffer.data.length / (attrib.stride / 4 || attrib.attribute.size);
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Helper class to create a webGL Context
 *
 * @class
 * @memberof PIXI.glCore
 * @param canvas {HTMLCanvasElement} the canvas element that we will get the context from
 * @param options {Object} An options object that gets passed in to the canvas element containing the context attributes,
 *                         see https://developer.mozilla.org/en/docs/Web/API/HTMLCanvasElement/getContext for the options available
 * @return {WebGLRenderingContext} the WebGL context
 */
var createContext = function createContext(canvas, options) {
    var gl = canvas.getContext('webgl', options) || canvas.getContext('experimental-webgl', options);

    if (!gl) {
        // fail, not able to get a context
        throw new Error('This browser does not support webGL. Try using the canvas renderer');
    }

    return gl;
};

module.exports = createContext;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    compileProgram: __webpack_require__(36),
    defaultValue: __webpack_require__(37),
    extractAttributes: __webpack_require__(38),
    extractUniforms: __webpack_require__(39),
    generateUniformAccessObject: __webpack_require__(40),
    setPrecision: __webpack_require__(42),
    mapSize: __webpack_require__(41),
    mapType: __webpack_require__(20)
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function (root) {

	/** Detect free variables */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
	var freeModule = ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
		root = freeGlobal;
	}

	/**
  * The `punycode` object.
  * @name punycode
  * @type Object
  */
	var punycode,


	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647,
	    // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	    tMin = 1,
	    tMax = 26,
	    skew = 38,
	    damp = 700,
	    initialBias = 72,
	    initialN = 128,
	    // 0x80
	delimiter = '-',
	    // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	    regexNonASCII = /[^\x20-\x7E]/,
	    // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
	    // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},


	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	    floor = Math.floor,
	    stringFromCharCode = String.fromCharCode,


	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
  * A generic error utility function.
  * @private
  * @param {String} type The error type.
  * @returns {Error} Throws a `RangeError` with the applicable error message.
  */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
  * A generic `Array#map` utility function.
  * @private
  * @param {Array} array The array to iterate over.
  * @param {Function} callback The function that gets called for every array
  * item.
  * @returns {Array} A new array of values returned by the callback function.
  */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
  * A simple `Array#map`-like wrapper to work with domain name strings or email
  * addresses.
  * @private
  * @param {String} domain The domain name or email address.
  * @param {Function} callback The function that gets called for every
  * character.
  * @returns {Array} A new string of characters returned by the callback
  * function.
  */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
  * Creates an array containing the numeric code points of each Unicode
  * character in the string. While JavaScript uses UCS-2 internally,
  * this function will convert a pair of surrogate halves (each of which
  * UCS-2 exposes as separate characters) into a single code point,
  * matching UTF-16.
  * @see `punycode.ucs2.encode`
  * @see <https://mathiasbynens.be/notes/javascript-encoding>
  * @memberOf punycode.ucs2
  * @name decode
  * @param {String} string The Unicode input string (UCS-2).
  * @returns {Array} The new array of code points.
  */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) {
					// low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
  * Creates a string based on an array of numeric code points.
  * @see `punycode.ucs2.decode`
  * @memberOf punycode.ucs2
  * @name encode
  * @param {Array} codePoints The array of numeric code points.
  * @returns {String} The new Unicode string (UCS-2).
  */
	function ucs2encode(array) {
		return map(array, function (value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
  * Converts a basic code point into a digit/integer.
  * @see `digitToBasic()`
  * @private
  * @param {Number} codePoint The basic numeric code point value.
  * @returns {Number} The numeric value of a basic code point (for use in
  * representing integers) in the range `0` to `base - 1`, or `base` if
  * the code point does not represent a value.
  */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
  * Converts a digit/integer into a basic code point.
  * @see `basicToDigit()`
  * @private
  * @param {Number} digit The numeric value of a basic code point.
  * @returns {Number} The basic code point whose value (when used for
  * representing integers) is `digit`, which needs to be in the range
  * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
  * used; else, the lowercase form is used. The behavior is undefined
  * if `flag` is non-zero and `digit` has no uppercase form.
  */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
  * Bias adaptation function as per section 3.4 of RFC 3492.
  * https://tools.ietf.org/html/rfc3492#section-3.4
  * @private
  */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
  * Converts a Punycode string of ASCII-only symbols to a string of Unicode
  * symbols.
  * @memberOf punycode
  * @param {String} input The Punycode string of ASCII-only symbols.
  * @returns {String} The resulting string of Unicode symbols.
  */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,

		/** Cached calculation results */
		baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base;; /* no condition */k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;
			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);
		}

		return ucs2encode(output);
	}

	/**
  * Converts a string of Unicode symbols (e.g. a domain name label) to a
  * Punycode string of ASCII-only symbols.
  * @memberOf punycode
  * @param {String} input The string of Unicode symbols.
  * @returns {String} The resulting Punycode string of ASCII-only symbols.
  */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],

		/** `inputLength` will hold the number of code points in `input`. */
		inputLength,

		/** Cached calculation results */
		handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base;; /* no condition */k += base) {
						t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;
		}
		return output.join('');
	}

	/**
  * Converts a Punycode string representing a domain name or an email address
  * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
  * it doesn't matter if you call it on a string that has already been
  * converted to Unicode.
  * @memberOf punycode
  * @param {String} input The Punycoded domain name or email address to
  * convert to Unicode.
  * @returns {String} The Unicode representation of the given Punycode
  * string.
  */
	function toUnicode(input) {
		return mapDomain(input, function (string) {
			return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
		});
	}

	/**
  * Converts a Unicode string representing a domain name or an email address to
  * Punycode. Only the non-ASCII parts of the domain name will be converted,
  * i.e. it doesn't matter if you call it with a domain that's already in
  * ASCII.
  * @memberOf punycode
  * @param {String} input The domain name or email address to convert, as a
  * Unicode string.
  * @returns {String} The Punycode representation of the given domain name or
  * email address.
  */
	function toASCII(input) {
		return mapDomain(input, function (string) {
			return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
		'version': '1.4.1',
		/**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if ("function" == 'function' && _typeof(__webpack_require__(31)) == 'object' && __webpack_require__(31)) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}
})(undefined);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(85)(module), __webpack_require__(44)))

/***/ }),
/* 84 */,
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // eslint-disable-line


var _ismobilejs = __webpack_require__(18);

var _ismobilejs2 = _interopRequireDefault(_ismobilejs);

var _tween = __webpack_require__(12);

var _tween2 = _interopRequireDefault(_tween);

var _Container = __webpack_require__(8);

var _Container2 = _interopRequireDefault(_Container);

var _ticker = __webpack_require__(29);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

var _const = __webpack_require__(0);

var _utils = __webpack_require__(1);

var utils = _interopRequireWildcard(_utils);

var _Text = __webpack_require__(58);

var _Text2 = _interopRequireDefault(_Text);

var _Transition = __webpack_require__(30);

var _Transition2 = _interopRequireDefault(_Transition);

var _CanvasRenderer = __webpack_require__(9);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _WebGLRenderer = __webpack_require__(15);

var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 故事从这里开始
 *
 * @example
 *
 * // 定义启动参数
 * var config = {
 *   showFPS: true,
 *   renderOptions: {
 *     backgroundColor: 0x2a3145
 *   }
 * };
 * // 新建App
 * var app = new Tiny.Application(config);
 * // 通过 fromImage 实例化精灵
 * var sprite = Tiny.Sprite.fromImage('https://zos.alipayobjects.com/rmsportal/nJBojwdMJfUqpCWvwyoA.png');
 * // 启动
 * app.run(sprite);
 *
 * @class
 * @memberof Tiny
 */
var Application = function () {
  /**
   * @param {Tiny.config} conf 启动参数
   */
  function Application(conf) {
    _classCallCheck(this, Application);

    this._accumDt = 0.0;

    //游戏是否已经停止
    this._paused = true;

    this._updatePoll = {};

    /**
     * 所有显示类的根容器
     *
     * @member {Tiny.Container}
     */
    this.camera = new _Container2.default();

    /**
     * 舞台对象，用户创建的显示类都会添加到这个对象中
     *
     * @member {Tiny.Container}
     */
    this.stage = new _Container2.default();
    this.camera.addChild(this.stage);

    this.setup(conf);

    if (_settings.config.showFPS) {
      this._createStatsLabel();
    }

    /**
     * WebGL renderer if available, otherwise CanvasRenderer
     * @member {Tiny.WebGLRenderer|Tiny.CanvasRenderer}
     * @example
     * var renderer = app.renderer
     */
    this.renderer = this.autoDetectRenderer(_settings.config.newWidth, _settings.config.newHeight, {
      view: this.view
    });

    _const.WIN_SIZE.width = Math.round(this.renderer.width);
    _const.WIN_SIZE.height = Math.round(this.renderer.height);
  }

  /**
   * Render the current camera.
   */


  _createClass(Application, [{
    key: 'render',
    value: function render() {
      this.renderer.render(this.camera);
    }

    /**
     * 停止
     */

  }, {
    key: 'stop',
    value: function stop() {
      this._paused = true;
      if (this.ticker) {
        this.ticker.remove(Application._tweenUpdateFn);
        this.ticker.stop();
      }
      Tiny.TWEEN.pause();
      try {
        Tiny.audio.manager.pause();
      } catch (e) {}
    }

    /**
     * 开始
     */

  }, {
    key: 'start',
    value: function start() {
      this._paused = false;
      if (this.ticker) {
        this.ticker.add(Application._tweenUpdateFn);
        this.ticker.start();
      }
      Tiny.TWEEN.resume();
      try {
        Tiny.audio.manager.resume();
      } catch (e) {}
    }

    /**
     * 恢复
     *
     * @see Tiny.Application.start
     */

  }, {
    key: 'resume',
    value: function resume() {
      if (!this._paused) {
        return;
      }
      this.start();
    }

    /**
     * 暂停
     *
     * @see Tiny.Application.stop
     */

  }, {
    key: 'pause',
    value: function pause() {
      if (this._paused) {
        return;
      }
      this.stop();
    }

    /**
     * 是否暂停中
     *
     * @returns {boolean}
     */

  }, {
    key: 'isPaused',
    value: function isPaused() {
      return this._paused;
    }

    /**
     *
     * @private
     * @param {number}                width     - the width of the renderers view
     * @param {number}                height    - the height of the renderers view
     * @param {Tiny.RENDER_OPTIONS}   options   - The optional renderer parameters
     * @return {Tiny.WebGLRenderer|Tiny.CanvasRenderer} - Returns WebGL renderer if available, otherwise CanvasRenderer
     */

  }, {
    key: 'autoDetectRenderer',
    value: function autoDetectRenderer() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 320;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 568;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      Object.assign(options, _settings.config.renderOptions);

      if (utils.isWebGLSupported()) {
        if (_settings.config.renderType !== _const.RENDERER_TYPE.CANVAS) {
          // console.log('WebGLRenderer');
          return new _WebGLRenderer2.default(width, height, options);
        }
      }
      // console.log('CanvasRenderer');
      return new _CanvasRenderer2.default(width, height, options);
    }

    /**
     * 启动某个场景
     *
     * @param {Tiny.DisplayObject}  startScene
     */

  }, {
    key: 'run',
    value: function run(startScene) {
      this.replaceScene(startScene);

      if (_settings.config.autoRender) {
        this.mainLoop();
      } else {
        //手动渲染一次
        this.render();
      }
    }

    /**
     * 切换场景，如果你想切换下一个场景，使用 replaceScene，还可以使用转场动画
     *
     * @example
     *
     * var app = new Tiny.Application({..});
     * app.replaceScene(scene, 'SlideInR', 800);
     *
     * @param {Tiny.DisplayObject}  scene         场景对象
     * @param {string}              transition    转场动画的字符，比如：Fade、MoveIn等。更多参照 {@link Tiny.Transition}
     * @param {number}              duration      转场动画时长（单位：ms）
     */

  }, {
    key: 'replaceScene',
    value: function replaceScene(scene, transition, duration) {
      if (transition) {
        var instance = new _Transition2.default(this.stage, scene, duration);
        var trans = transition;
        Array.prototype.splice.call(arguments, 0, 3);
        instance[trans](arguments);
      } else {
        this.stage.removeChildren();
        this.stage.addChild(scene);
      }
    }

    /**
     * @private
     */

  }, {
    key: 'mainLoop',
    value: function mainLoop() {
      /**
       * Ticker for doing render updates.
       * @member {Tiny.ticker.Ticker}
       */
      this.ticker = new _ticker.Ticker();

      this.ticker.add(function (t) {
        this.render();

        for (var key in this._updatePoll) {
          if (this._updatePoll.hasOwnProperty(key)) {
            this._updatePoll[key].call(this, t);
          }
        }
      }, this);
      this.ticker.add(function (t) {
        this._accumDt += t;
        if (this._label && this._accumDt > _settings2.default.TARGET_FPMS * 1000) {
          this._accumDt = 0;
          this._label.text = 'SPF: ' + (1 / this.ticker.FPS).toFixed(3) + '\nFPS: ' + this.ticker.FPS.toFixed(1);
        }
      }, this);

      // Start the rendering
      this.start();
    }
  }, {
    key: 'onUpdate',


    /**
     * 游戏的主调度
     *
     * @example
     *
     * var app = new Tiny.Application();
     * var fn = function() {
     *  console.log('update.');
     * }
     *
     * app.onUpdate(fn);
     *
     * @param {function}  fn
     * @param {boolean}   force 是否强制覆盖方法池中同一个方法
     */
    value: function onUpdate(fn) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var key = fn.toString();
      if (!this._updatePoll[key] || force) {
        this._updatePoll[key] = fn;
      }
    }

    /**
     * 移除主调度中的某个方法
     *
     * @example
     *
     * var app = new Tiny.Application();
     * var fn = function() {
     *  console.log('update.');
     * }
     *
     * app.onUpdate(fn);
     *
     * // 5秒后移除fn
     * Tiny.ticker.shared.countDown({
     *  duration: 1e3,
     *  times: 5,
     *  complete: function () {
     *    app.offUpdate(fn);
     *  }
     * });
     *
     * @version 1.0.2
     * @param fn
     */

  }, {
    key: 'offUpdate',
    value: function offUpdate(fn) {
      var key = fn.toString();
      delete this._updatePoll[key];
    }

    /**
     *
     * @private
     * @param conf
     */

  }, {
    key: 'setup',
    value: function setup(conf) {
      Object.assign(_settings.config, conf);

      if (_ismobilejs2.default.tablet || _ismobilejs2.default.phone) {
        //style设置
        var fontStyle = document.createElement('style');
        fontStyle.type = 'text/css';
        document.body.appendChild(fontStyle);

        fontStyle.textContent = 'body,canvas,div{ -moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;-webkit-tap-highlight-color:rgba(0,0,0,0);}';
      }
      var view = document.getElementById(_settings.config.canvasId);
      if (!view) {
        view = document.createElement('canvas');
        view.setAttribute('tabindex', 99);
        view.id = _settings.config.canvasId;
        view.style.outline = 'none';
        document.body.appendChild(view);
      }

      /**
       * 就是那个用于渲染故事的普通 `<canvas>` 画布对象
       *
       * @property view
       * @type {HTMLCanvasElement}
       */
      this.view = view;
      this.resize();
    }

    /**
     * @private
     */

  }, {
    key: 'resize',
    value: function resize() {
      var multiplier = void 0;
      var winH = _settings.config.fixSize ? _settings.config.height : window.innerHeight;
      var winW = _settings.config.fixSize ? _settings.config.width : window.innerWidth;
      var cWidth = _settings.config.fixSize ? _settings.config.width || winW : _settings.config.referWidth;
      var radio = +_settings.config.orientation ? winH / cWidth : winW / cWidth;
      var isFullScreen = _settings.config.width === winW && _settings.config.height === winH;
      isFullScreen && (radio = 1);
      var width = _settings.config.width * radio || winW;
      var height = _settings.config.height * radio || winH;
      var cHeight = cWidth * (+_settings.config.orientation ? width / height : height / width);

      if (_settings.config.listenRotation) {
        var orientation = window.orientation || window.screen.orientation;
        if (!utils.isUndefined(orientation)) {
          var angle = orientation.angle || orientation;
          if (+_settings.config.orientation) {
            // 横屏
            if (Math.abs(angle / 90) !== 1) {
              // console.log('纵向');
              this.onRotationChange();
            } else {
              // console.log('横向');
              this.offRotationChange();
            }
          } else {
            // 竖屏
            if (Math.abs(angle / 90) !== 1) {
              // console.log('纵向');
              this.offRotationChange();
            } else {
              // console.log('横向');
              this.onRotationChange();
            }
          }
        }
      }
      if (+_settings.config.orientation) {
        var w = cWidth;
        cWidth = cHeight;
        cHeight = w;
      } else {
        // 竖屏
      }

      cWidth = cWidth * _settings.config.dpi;
      cHeight = cHeight * _settings.config.dpi;

      multiplier = Math.min(height / cHeight, width / cWidth);
      multiplier = Number(multiplier.toFixed(4));

      _settings.config.renderOptions.resolution = Number((1 / multiplier).toFixed(4));
      _settings.config.renderOptions.autoResize = true;
      _settings.config.newWidth = Math.round(cWidth * multiplier);
      _settings.config.newHeight = Math.round(cHeight * multiplier);
      this.stage.setScale(multiplier);
    }
  }, {
    key: 'onRotationChange',
    value: function onRotationChange() {
      this.pause();
    }
  }, {
    key: 'offRotationChange',
    value: function offRotationChange() {
      this.resume();
    }

    /**
     *
     * @method _createStatsLabel
     * @return {HTMLElement}
     * @private
     */

  }, {
    key: '_createStatsLabel',
    value: function _createStatsLabel() {
      this._label = new _Text2.default('SPF: -\nFPS: -', {
        fontSize: 18,
        fontFamily: 'Helvetica',
        fill: '#ffffff',
        stroke: '#666666',
        strokeThickness: 0.2
      });

      this._label.position.set(10, _settings.config.newHeight - this._label.height - 10);
      this.camera.addChild(this._label);
    }

    /**
     * Destroy and don't use after this.
     * @param {Boolean} [removeView=false] Automatically remove canvas from DOM.
     */

  }, {
    key: 'destroy',
    value: function destroy(removeView) {
      _tween2.default.removeAll();

      this.stage.destroy();
      this.stage = null;

      this.camera.destroy();
      this.camera = null;

      this.renderer.destroy(removeView);
      this.renderer = null;

      this.ticker.destroy();
    }
  }], [{
    key: '_tweenUpdateFn',
    value: function _tweenUpdateFn() {
      _tween2.default.update();
    }
  }]);

  return Application;
}();

exports.default = Application;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Container2 = __webpack_require__(8);

var _Container3 = _interopRequireDefault(_Container2);

var _RenderTexture = __webpack_require__(28);

var _RenderTexture2 = _interopRequireDefault(_RenderTexture);

var _Texture = __webpack_require__(7);

var _Texture2 = _interopRequireDefault(_Texture);

var _GraphicsData = __webpack_require__(49);

var _GraphicsData2 = _interopRequireDefault(_GraphicsData);

var _Sprite = __webpack_require__(27);

var _Sprite2 = _interopRequireDefault(_Sprite);

var _math = __webpack_require__(2);

var _utils = __webpack_require__(1);

var _const = __webpack_require__(0);

var _Bounds = __webpack_require__(22);

var _Bounds2 = _interopRequireDefault(_Bounds);

var _bezierCurveTo2 = __webpack_require__(90);

var _bezierCurveTo3 = _interopRequireDefault(_bezierCurveTo2);

var _CanvasRenderer = __webpack_require__(9);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var canvasRenderer = void 0;
var tempMatrix = new _math.Matrix();
var tempPoint = new _math.Point();
var tempColor1 = new Float32Array(4);
var tempColor2 = new Float32Array(4);

/**
 * The Graphics class contains methods used to draw primitive shapes such as lines, circles and
 * rectangles to the display, and to color and fill them.
 *
 * @class
 * @extends Tiny.Container
 * @memberof Tiny
 */

var Graphics = function (_Container) {
  _inherits(Graphics, _Container);

  /**
   * @param {boolean} nativeLines=false   - If true the lines will be draw using LINES instead of TRIANGLE_STRIP
   */
  function Graphics() {
    var nativeLines = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, Graphics);

    /**
     * The alpha value used when filling the Graphics object.
     *
     * @member {number}
     * @default 1
     */
    var _this = _possibleConstructorReturn(this, (Graphics.__proto__ || Object.getPrototypeOf(Graphics)).call(this));

    _this.fillAlpha = 1;

    /**
     * The width (thickness) of any lines drawn.
     *
     * @member {number}
     * @default 0
     */
    _this.lineWidth = 0;

    /**
     * If true the lines will be draw using LINES instead of TRIANGLE_STRIP
     *
     * @member {boolean}
     */
    _this.nativeLines = nativeLines;

    /**
     * The color of any lines drawn.
     *
     * @member {string}
     * @default 0
     */
    _this.lineColor = 0;

    /**
     * Graphics data
     *
     * @member {Tiny.GraphicsData[]}
     * @private
     */
    _this.graphicsData = [];

    /**
     * The tint applied to the graphic shape. This is a hex value. Apply a value of 0xFFFFFF to
     * reset the tint.
     *
     * @member {number}
     * @default 0xFFFFFF
     */
    _this.tint = 0xFFFFFF;

    /**
     * The previous tint applied to the graphic shape. Used to compare to the current tint and
     * check if theres change.
     *
     * @member {number}
     * @private
     * @default 0xFFFFFF
     */
    _this._prevTint = 0xFFFFFF;

    /**
     * The blend mode to be applied to the graphic shape. Apply a value of
     * `Tiny.BLEND_MODES.NORMAL` to reset the blend mode.
     *
     * @member {number}
     * @default Tiny.BLEND_MODES.NORMAL;
     * @see Tiny.BLEND_MODES
     */
    _this.blendMode = _const.BLEND_MODES.NORMAL;

    /**
     * Current path
     *
     * @member {Tiny.GraphicsData}
     * @private
     */
    _this.currentPath = null;

    /**
     * Array containing some WebGL-related properties used by the WebGL renderer.
     *
     * @member {object<number, object>}
     * @private
     */
    // TODO - _webgl should use a prototype object, not a random undocumented object...
    _this._webGL = {};

    /**
     * Whether this shape is being used as a mask.
     *
     * @member {boolean}
     */
    _this.isMask = false;

    /**
     * The bounds' padding used for bounds calculation.
     *
     * @member {number}
     */
    _this.boundsPadding = 0;

    /**
     * A cache of the local bounds to prevent recalculation.
     *
     * @member {Tiny.Rectangle}
     * @private
     */
    _this._localBounds = new _Bounds2.default();

    /**
     * Used to detect if the graphics object has changed. If this is set to true then the graphics
     * object will be recalculated.
     *
     * @member {boolean}
     * @private
     */
    _this.dirty = 0;

    /**
     * Used to detect if we need to do a fast rect check using the id compare method
     * @type {Number}
     */
    _this.fastRectDirty = -1;

    /**
     * Used to detect if we clear the graphics webGL data
     * @type {Number}
     */
    _this.clearDirty = 0;

    /**
     * Used to detect if we we need to recalculate local bounds
     * @type {Number}
     */
    _this.boundsDirty = -1;

    /**
     * Used to detect if the cached sprite object needs to be updated.
     *
     * @member {boolean}
     * @private
     */
    _this.cachedSpriteDirty = false;

    _this._spriteRect = null;
    _this._fastRect = false;

    /**
     * When cacheAsBitmap is set to true the graphics object will be rendered as if it was a sprite.
     * This is useful if your graphics element does not change often, as it will speed up the rendering
     * of the object in exchange for taking up texture memory. It is also useful if you need the graphics
     * object to be anti-aliased, because it will be rendered using canvas. This is not recommended if
     * you are constantly redrawing the graphics element.
     *
     * @name cacheAsBitmap
     * @member {boolean}
     * @memberof Tiny.Graphics#
     * @default false
     */
    return _this;
  }

  /**
   * Creates a new Graphics object with the same values as this one.
   * Note that the only the properties of the object are cloned, not its transform (position,scale,etc)
   *
   * @return {Tiny.Graphics} A clone of the graphics object
   */


  _createClass(Graphics, [{
    key: 'clone',
    value: function clone() {
      var clone = new Graphics();

      clone.renderable = this.renderable;
      clone.fillAlpha = this.fillAlpha;
      clone.lineWidth = this.lineWidth;
      clone.lineColor = this.lineColor;
      clone.tint = this.tint;
      clone.blendMode = this.blendMode;
      clone.isMask = this.isMask;
      clone.boundsPadding = this.boundsPadding;
      clone.dirty = 0;
      clone.cachedSpriteDirty = this.cachedSpriteDirty;

      // copy graphics data
      for (var i = 0; i < this.graphicsData.length; ++i) {
        clone.graphicsData.push(this.graphicsData[i].clone());
      }

      clone.currentPath = clone.graphicsData[clone.graphicsData.length - 1];

      clone.updateLocalBounds();

      return clone;
    }

    /**
     * Specifies the line style used for subsequent calls to Graphics methods such as the lineTo()
     * method or the drawCircle() method.
     *
     * @param {number} [lineWidth=0] - width of the line to draw, will update the objects stored style
     * @param {number} [color=0] - color of the line to draw, will update the objects stored style
     * @param {number} [alpha=1] - alpha of the line to draw, will update the objects stored style
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'lineStyle',
    value: function lineStyle() {
      var lineWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var alpha = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      this.lineWidth = lineWidth;
      this.lineColor = color;
      this.lineAlpha = alpha;

      if (this.currentPath) {
        if (this.currentPath.shape.points.length) {
          // halfway through a line? start a new one!
          var shape = new _math.Polygon(this.currentPath.shape.points.slice(-2));

          shape.closed = false;

          this.drawShape(shape);
        } else {
          // otherwise its empty so lets just set the line properties
          this.currentPath.lineWidth = this.lineWidth;
          this.currentPath.lineColor = this.lineColor;
          this.currentPath.lineAlpha = this.lineAlpha;
        }
      }

      return this;
    }

    /**
     * Moves the current drawing position to x, y.
     *
     * @param {number} x - the X coordinate to move to
     * @param {number} y - the Y coordinate to move to
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'moveTo',
    value: function moveTo(x, y) {
      var shape = new _math.Polygon([x, y]);

      shape.closed = false;
      this.drawShape(shape);

      return this;
    }

    /**
     * Draws a line using the current line style from the current drawing position to (x, y);
     * The current drawing position is then set to (x, y).
     *
     * @param {number} x - the X coordinate to draw to
     * @param {number} y - the Y coordinate to draw to
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'lineTo',
    value: function lineTo(x, y) {
      this.currentPath.shape.points.push(x, y);
      this.dirty++;

      return this;
    }

    /**
     * Calculate the points for a quadratic bezier curve and then draws it.
     * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'quadraticCurveTo',
    value: function quadraticCurveTo(cpX, cpY, toX, toY) {
      if (this.currentPath) {
        if (this.currentPath.shape.points.length === 0) {
          this.currentPath.shape.points = [0, 0];
        }
      } else {
        this.moveTo(0, 0);
      }

      var n = 20;
      var points = this.currentPath.shape.points;
      var xa = 0;
      var ya = 0;

      if (points.length === 0) {
        this.moveTo(0, 0);
      }

      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];

      for (var i = 1; i <= n; ++i) {
        var j = i / n;

        xa = fromX + (cpX - fromX) * j;
        ya = fromY + (cpY - fromY) * j;

        points.push(xa + (cpX + (toX - cpX) * j - xa) * j, ya + (cpY + (toY - cpY) * j - ya) * j);
      }

      this.dirty++;

      return this;
    }

    /**
     * Calculate the points for a bezier curve and then draws it.
     *
     * @param {number} cpX - Control point x
     * @param {number} cpY - Control point y
     * @param {number} cpX2 - Second Control point x
     * @param {number} cpY2 - Second Control point y
     * @param {number} toX - Destination point x
     * @param {number} toY - Destination point y
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'bezierCurveTo',
    value: function bezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY) {
      if (this.currentPath) {
        if (this.currentPath.shape.points.length === 0) {
          this.currentPath.shape.points = [0, 0];
        }
      } else {
        this.moveTo(0, 0);
      }

      var points = this.currentPath.shape.points;

      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];

      points.length -= 2;

      (0, _bezierCurveTo3.default)(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY, points);

      this.dirty++;

      return this;
    }

    /**
     * The arcTo() method creates an arc/curve between two tangents on the canvas.
     *
     * "borrowed" from https://code.google.com/p/fxcanvas/ - thanks google!
     *
     * @param {number}  x1      - The x-coordinate of the beginning of the arc
     * @param {number}  y1      - The y-coordinate of the beginning of the arc
     * @param {number}  x2      - The x-coordinate of the end of the arc
     * @param {number}  y2      - The y-coordinate of the end of the arc
     * @param {number}  radius  - The radius of the arc
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'arcTo',
    value: function arcTo(x1, y1, x2, y2, radius) {
      if (this.currentPath) {
        if (this.currentPath.shape.points.length === 0) {
          this.currentPath.shape.points.push(x1, y1);
        }
      } else {
        this.moveTo(x1, y1);
      }

      var points = this.currentPath.shape.points;
      var fromX = points[points.length - 2];
      var fromY = points[points.length - 1];
      var a1 = fromY - y1;
      var b1 = fromX - x1;
      var a2 = y2 - y1;
      var b2 = x2 - x1;
      var mm = Math.abs(a1 * b2 - b1 * a2);

      if (mm < 1.0e-8 || radius === 0) {
        if (points[points.length - 2] !== x1 || points[points.length - 1] !== y1) {
          points.push(x1, y1);
        }
      } else {
        var dd = a1 * a1 + b1 * b1;
        var cc = a2 * a2 + b2 * b2;
        var tt = a1 * a2 + b1 * b2;
        var k1 = radius * Math.sqrt(dd) / mm;
        var k2 = radius * Math.sqrt(cc) / mm;
        var j1 = k1 * tt / dd;
        var j2 = k2 * tt / cc;
        var cx = k1 * b2 + k2 * b1;
        var cy = k1 * a2 + k2 * a1;
        var px = b1 * (k2 + j1);
        var py = a1 * (k2 + j1);
        var qx = b2 * (k1 + j2);
        var qy = a2 * (k1 + j2);
        var startAngle = Math.atan2(py - cy, px - cx);
        var endAngle = Math.atan2(qy - cy, qx - cx);

        this.arc(cx + x1, cy + y1, radius, startAngle, endAngle, b1 * a2 > b2 * a1);
      }

      this.dirty++;

      return this;
    }

    /**
     * The arc method creates an arc/curve (used to create circles, or parts of circles).
     *
     * @param {number}    cx                  - The x-coordinate of the center of the circle
     * @param {number}    cy                  - The y-coordinate of the center of the circle
     * @param {number}    radius              - The radius of the circle
     * @param {number}    startAngle          - The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
     * @param {number}    endAngle            - The ending angle, in radians
     * @param {boolean}   anticlockwise=false - Specifies whether the drawing should be counter-clockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'arc',
    value: function arc(cx, cy, radius, startAngle, endAngle) {
      var anticlockwise = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

      if (startAngle === endAngle) {
        return this;
      }

      if (!anticlockwise && endAngle <= startAngle) {
        endAngle += Math.PI * 2;
      } else if (anticlockwise && startAngle <= endAngle) {
        startAngle += Math.PI * 2;
      }

      var sweep = endAngle - startAngle;
      var segs = Math.ceil(Math.abs(sweep) / (Math.PI * 2)) * 40;

      if (sweep === 0) {
        return this;
      }

      var startX = cx + Math.cos(startAngle) * radius;
      var startY = cy + Math.sin(startAngle) * radius;

      // If the currentPath exists, take its points. Otherwise call `moveTo` to start a path.
      var points = this.currentPath ? this.currentPath.shape.points : null;

      if (points) {
        if (points[points.length - 2] !== startX || points[points.length - 1] !== startY) {
          points.push(startX, startY);
        }
      } else {
        this.moveTo(startX, startY);
        points = this.currentPath.shape.points;
      }

      var theta = sweep / (segs * 2);
      var theta2 = theta * 2;

      var cTheta = Math.cos(theta);
      var sTheta = Math.sin(theta);

      var segMinus = segs - 1;

      var remainder = segMinus % 1 / segMinus;

      for (var i = 0; i <= segMinus; ++i) {
        var real = i + remainder * i;

        var angle = theta + startAngle + theta2 * real;

        var c = Math.cos(angle);
        var s = -Math.sin(angle);

        points.push((cTheta * c + sTheta * s) * radius + cx, (cTheta * -s + sTheta * c) * radius + cy);
      }

      this.dirty++;

      return this;
    }

    /**
     * Specifies a simple one-color fill that subsequent calls to other Graphics methods
     * (such as lineTo() or drawCircle()) use when drawing.
     *
     * @param {number}  color=0   - the color of the fill
     * @param {number}  alpha=1   - the alpha of the fill
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'beginFill',
    value: function beginFill() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.filling = true;
      this.fillColor = color;
      this.fillAlpha = alpha;

      if (this.currentPath) {
        if (this.currentPath.shape.points.length <= 2) {
          this.currentPath.fill = this.filling;
          this.currentPath.fillColor = this.fillColor;
          this.currentPath.fillAlpha = this.fillAlpha;
        }
      }

      return this;
    }

    /**
     * Applies a fill to the lines and shapes that were added since the last call to the beginFill() method.
     *
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'endFill',
    value: function endFill() {
      this.filling = false;
      this.fillColor = null;
      this.fillAlpha = 1;

      return this;
    }

    /**
     *
     * @param {number}  x       - The X coord of the top-left of the rectangle
     * @param {number}  y       - The Y coord of the top-left of the rectangle
     * @param {number}  width   - The width of the rectangle
     * @param {number}  height  - The height of the rectangle
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'drawRect',
    value: function drawRect(x, y, width, height) {
      this.drawShape(new _math.Rectangle(x, y, width, height));

      return this;
    }

    /**
     *
     * @param {number}  x       - The X coord of the top-left of the rectangle
     * @param {number}  y       - The Y coord of the top-left of the rectangle
     * @param {number}  width   - The width of the rectangle
     * @param {number}  height  - The height of the rectangle
     * @param {number}  radius  - Radius of the rectangle corners
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'drawRoundedRect',
    value: function drawRoundedRect(x, y, width, height, radius) {
      this.drawShape(new _math.RoundedRectangle(x, y, width, height, radius));

      return this;
    }

    /**
     * Draws a circle.
     *
     * @param {number}  x       - The X coordinate of the center of the circle
     * @param {number}  y       - The Y coordinate of the center of the circle
     * @param {number}  radius  - The radius of the circle
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'drawCircle',
    value: function drawCircle(x, y, radius) {
      this.drawShape(new _math.Circle(x, y, radius));

      return this;
    }

    /**
     * Draws an ellipse.
     *
     * @param {number}  x       - The X coordinate of the center of the ellipse
     * @param {number}  y       - The Y coordinate of the center of the ellipse
     * @param {number}  width   - The half width of the ellipse
     * @param {number}  height  - The half height of the ellipse
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'drawEllipse',
    value: function drawEllipse(x, y, width, height) {
      this.drawShape(new _math.Ellipse(x, y, width, height));

      return this;
    }

    /**
     * Draws a polygon using the given path.
     *
     * @param {array<number>|array<Tiny.Point>} path - The path data used to construct the polygon.
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'drawPolygon',
    value: function drawPolygon(path) {
      // prevents an argument assignment deopt
      // see section 3.1: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
      var points = path;

      var closed = true;

      if (points instanceof _math.Polygon) {
        closed = points.closed;
        points = points.points;
      }

      if (!Array.isArray(points)) {
        // prevents an argument leak deopt
        // see section 3.2: https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#3-managing-arguments
        points = new Array(arguments.length);

        for (var i = 0; i < points.length; ++i) {
          points[i] = arguments[i]; // eslint-disable-line prefer-rest-params
        }
      }

      var shape = new _math.Polygon(points);

      shape.closed = closed;

      this.drawShape(shape);

      return this;
    }

    /**
     * Clears the graphics that were drawn to this Graphics object, and resets fill and line style settings.
     *
     * @return {Tiny.Graphics} This Graphics object. Good for chaining method calls
     */

  }, {
    key: 'clear',
    value: function clear() {
      if (this.lineWidth || this.filling || this.graphicsData.length > 0) {
        this.lineWidth = 0;
        this.filling = false;

        this.boundsDirty = -1;
        this.dirty++;
        this.clearDirty++;
        this.graphicsData.length = 0;
      }

      this.currentPath = null;
      this._spriteRect = null;

      return this;
    }

    /**
     * True if graphics consists of one rectangle, and thus, can be drawn like a Sprite and
     * masked with gl.scissor.
     *
     * @return {boolean} True if only 1 rect.
     */

  }, {
    key: 'isFastRect',
    value: function isFastRect() {
      return this.graphicsData.length === 1 && this.graphicsData[0].shape.type === _const.SHAPES.RECT && !this.graphicsData[0].lineWidth;
    }

    /**
     * Renders the object using the WebGL renderer
     *
     * @private
     * @param {Tiny.WebGLRenderer} renderer - The renderer
     */

  }, {
    key: '_renderWebGL',
    value: function _renderWebGL(renderer) {
      // if the sprite is not visible or the alpha is 0 then no need to render this element
      if (this.dirty !== this.fastRectDirty) {
        this.fastRectDirty = this.dirty;
        this._fastRect = this.isFastRect();
      }

      // TODO this check can be moved to dirty?
      if (this._fastRect) {
        this._renderSpriteRect(renderer);
      } else {
        renderer.setObjectRenderer(renderer.plugins.graphics);
        renderer.plugins.graphics.render(this);
      }
    }

    /**
     * Renders a sprite rectangle.
     *
     * @private
     * @param {Tiny.WebGLRenderer} renderer - The renderer
     */

  }, {
    key: '_renderSpriteRect',
    value: function _renderSpriteRect(renderer) {
      var rect = this.graphicsData[0].shape;

      if (!this._spriteRect) {
        this._spriteRect = new _Sprite2.default(new _Texture2.default(_Texture2.default.WHITE));
      }

      var sprite = this._spriteRect;

      if (this.tint === 0xffffff) {
        sprite.tint = this.graphicsData[0].fillColor;
      } else {
        var t1 = tempColor1;
        var t2 = tempColor2;

        (0, _utils.hex2rgb)(this.graphicsData[0].fillColor, t1);
        (0, _utils.hex2rgb)(this.tint, t2);

        t1[0] *= t2[0];
        t1[1] *= t2[1];
        t1[2] *= t2[2];

        sprite.tint = (0, _utils.rgb2hex)(t1);
      }
      sprite.alpha = this.graphicsData[0].fillAlpha;
      sprite.worldAlpha = this.worldAlpha * sprite.alpha;
      sprite.blendMode = this.blendMode;

      sprite._texture._frame.width = rect.width;
      sprite._texture._frame.height = rect.height;

      sprite.transform.worldTransform = this.transform.worldTransform;

      sprite.anchor.set(-rect.x / rect.width, -rect.y / rect.height);
      sprite._onAnchorUpdate();

      sprite._renderWebGL(renderer);
    }

    /**
     * Renders the object using the Canvas renderer
     *
     * @private
     * @param {Tiny.CanvasRenderer} renderer - The renderer
     */

  }, {
    key: '_renderCanvas',
    value: function _renderCanvas(renderer) {
      if (this.isMask === true) {
        return;
      }

      renderer.plugins.graphics.render(this);
    }

    /**
     * Retrieves the bounds of the graphic shape as a rectangle object
     *
     * @private
     */

  }, {
    key: '_calculateBounds',
    value: function _calculateBounds() {
      if (this.boundsDirty !== this.dirty) {
        this.boundsDirty = this.dirty;
        this.updateLocalBounds();

        this.cachedSpriteDirty = true;
      }

      var lb = this._localBounds;

      this._bounds.addFrame(this.transform, lb.minX, lb.minY, lb.maxX, lb.maxY);
    }

    /**
     * Tests if a point is inside this graphics object
     *
     * @param {Tiny.Point} point - the point to test
     * @return {boolean} the result of the test
     */

  }, {
    key: 'containsPoint',
    value: function containsPoint(point) {
      this.worldTransform.applyInverse(point, tempPoint);

      var graphicsData = this.graphicsData;

      for (var i = 0; i < graphicsData.length; ++i) {
        var data = graphicsData[i];

        if (!data.fill) {
          continue;
        }

        // only deal with fills..
        if (data.shape) {
          if (data.shape.contains(tempPoint.x, tempPoint.y)) {
            if (data.holes) {
              for (var _i = 0; _i < data.holes.length; _i++) {
                var hole = data.holes[_i];

                if (hole.contains(tempPoint.x, tempPoint.y)) {
                  return false;
                }
              }
            }
            return true;
          }
        }
      }

      return false;
    }

    /**
     * Update the bounds of the object
     *
     */

  }, {
    key: 'updateLocalBounds',
    value: function updateLocalBounds() {
      var minX = Infinity;
      var maxX = -Infinity;

      var minY = Infinity;
      var maxY = -Infinity;

      if (this.graphicsData.length) {
        var shape = 0;
        var x = 0;
        var y = 0;
        var w = 0;
        var h = 0;

        for (var i = 0; i < this.graphicsData.length; i++) {
          var data = this.graphicsData[i];
          var type = data.type;
          var lineWidth = data.lineWidth;

          shape = data.shape;

          if (type === _const.SHAPES.RECT || type === _const.SHAPES.RREC) {
            x = shape.x - lineWidth / 2;
            y = shape.y - lineWidth / 2;
            w = shape.width + lineWidth;
            h = shape.height + lineWidth;

            minX = x < minX ? x : minX;
            maxX = x + w > maxX ? x + w : maxX;

            minY = y < minY ? y : minY;
            maxY = y + h > maxY ? y + h : maxY;
          } else if (type === _const.SHAPES.CIRC) {
            x = shape.x;
            y = shape.y;
            w = shape.radius + lineWidth / 2;
            h = shape.radius + lineWidth / 2;

            minX = x - w < minX ? x - w : minX;
            maxX = x + w > maxX ? x + w : maxX;

            minY = y - h < minY ? y - h : minY;
            maxY = y + h > maxY ? y + h : maxY;
          } else if (type === _const.SHAPES.ELIP) {
            x = shape.x;
            y = shape.y;
            w = shape.width + lineWidth / 2;
            h = shape.height + lineWidth / 2;

            minX = x - w < minX ? x - w : minX;
            maxX = x + w > maxX ? x + w : maxX;

            minY = y - h < minY ? y - h : minY;
            maxY = y + h > maxY ? y + h : maxY;
          } else {
            // POLY
            var points = shape.points;
            var x2 = 0;
            var y2 = 0;
            var dx = 0;
            var dy = 0;
            var rw = 0;
            var rh = 0;
            var cx = 0;
            var cy = 0;

            for (var j = 0; j + 2 < points.length; j += 2) {
              x = points[j];
              y = points[j + 1];
              x2 = points[j + 2];
              y2 = points[j + 3];
              dx = Math.abs(x2 - x);
              dy = Math.abs(y2 - y);
              h = lineWidth;
              w = Math.sqrt(dx * dx + dy * dy);

              if (w < 1e-9) {
                continue;
              }

              rw = (h / w * dy + dx) / 2;
              rh = (h / w * dx + dy) / 2;
              cx = (x2 + x) / 2;
              cy = (y2 + y) / 2;

              minX = cx - rw < minX ? cx - rw : minX;
              maxX = cx + rw > maxX ? cx + rw : maxX;

              minY = cy - rh < minY ? cy - rh : minY;
              maxY = cy + rh > maxY ? cy + rh : maxY;
            }
          }
        }
      } else {
        minX = 0;
        maxX = 0;
        minY = 0;
        maxY = 0;
      }

      var padding = this.boundsPadding;

      this._localBounds.minX = minX - padding;
      this._localBounds.maxX = maxX + padding;

      this._localBounds.minY = minY - padding;
      this._localBounds.maxY = maxY + padding;
    }

    /**
     * Draws the given shape to this Graphics object. Can be any of Circle, Rectangle, Ellipse, Line or Polygon.
     *
     * @param {Tiny.Circle|Tiny.Ellipse|Tiny.Polygon|Tiny.Rectangle|Tiny.RoundedRectangle} shape - The shape object to draw.
     * @return {Tiny.GraphicsData} The generated GraphicsData object.
     */

  }, {
    key: 'drawShape',
    value: function drawShape(shape) {
      if (this.currentPath) {
        // check current path!
        if (this.currentPath.shape.points.length <= 2) {
          this.graphicsData.pop();
        }
      }

      this.currentPath = null;

      var data = new _GraphicsData2.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, shape);

      this.graphicsData.push(data);

      if (data.type === _const.SHAPES.POLY) {
        data.shape.closed = data.shape.closed || this.filling;
        this.currentPath = data;
      }

      this.dirty++;

      return data;
    }

    /**
     * Generates a canvas texture.
     *
     * @param {number} scaleMode - The scale mode of the texture.
     * @param {number} resolution - The resolution of the texture.
     * @return {Tiny.Texture} The new texture.
     */

  }, {
    key: 'generateCanvasTexture',
    value: function generateCanvasTexture(scaleMode) {
      var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      var bounds = this.getLocalBounds();

      var canvasBuffer = _RenderTexture2.default.create(bounds.width, bounds.height, scaleMode, resolution);

      if (!canvasRenderer) {
        canvasRenderer = new _CanvasRenderer2.default();
      }

      this.transform.updateLocalTransform();
      this.transform.localTransform.copy(tempMatrix);

      tempMatrix.invert();

      tempMatrix.tx -= bounds.x;
      tempMatrix.ty -= bounds.y;

      canvasRenderer.render(this, canvasBuffer, true, tempMatrix);

      var texture = _Texture2.default.fromCanvas(canvasBuffer.baseTexture._canvasRenderTarget.canvas, scaleMode, 'graphics');

      texture.baseTexture.resolution = resolution;
      texture.baseTexture.update();

      return texture;
    }

    /**
     * Closes the current path.
     *
     * @return {Tiny.Graphics} Returns itself.
     */

  }, {
    key: 'closePath',
    value: function closePath() {
      // ok so close path assumes next one is a hole!
      var currentPath = this.currentPath;

      if (currentPath && currentPath.shape) {
        currentPath.shape.close();
      }

      return this;
    }

    /**
     * Adds a hole in the current path.
     *
     * @return {Tiny.Graphics} Returns itself.
     */

  }, {
    key: 'addHole',
    value: function addHole() {
      // this is a hole!
      var hole = this.graphicsData.pop();

      this.currentPath = this.graphicsData[this.graphicsData.length - 1];

      this.currentPath.addHole(hole.shape);
      this.currentPath = null;

      return this;
    }

    /**
     * Destroys the Graphics object.
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all
     *  options have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have
     *  their destroy method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the texture of the child sprite
     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
     *  Should it destroy the base texture of the child sprite
     */

  }, {
    key: 'destroy',
    value: function destroy(options) {
      _get(Graphics.prototype.__proto__ || Object.getPrototypeOf(Graphics.prototype), 'destroy', this).call(this, options);

      // destroy each of the GraphicsData objects
      for (var i = 0; i < this.graphicsData.length; ++i) {
        this.graphicsData[i].destroy();
      }

      // for each webgl data entry, destroy the WebGLGraphicsData
      for (var id in this._webgl) {
        for (var j = 0; j < this._webgl[id].data.length; ++j) {
          this._webgl[id].data[j].destroy();
        }
      }

      if (this._spriteRect) {
        this._spriteRect.destroy();
      }

      this.graphicsData = null;

      this.currentPath = null;
      this._webgl = null;
      this._localBounds = null;
    }
  }]);

  return Graphics;
}(_Container3.default);

exports.default = Graphics;


Graphics._SPRITE_TEXTURE = null;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasRenderer = __webpack_require__(9);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they
 * now share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's CanvasGraphicsRenderer:
 * https://github.com/libgdx/libgdx/blob/1.0.0/gdx/src/com/badlogic/gdx/graphics/glutils/ShapeRenderer.java
 */

/**
 * Renderer dedicated to drawing and batching graphics objects.
 *
 * @class
 * @private
 * @memberof Tiny
 */
var CanvasGraphicsRenderer = function () {
  /**
   * @param {Tiny.CanvasRenderer} renderer - The current Tiny renderer.
   */
  function CanvasGraphicsRenderer(renderer) {
    _classCallCheck(this, CanvasGraphicsRenderer);

    this.renderer = renderer;
  }

  /**
   * Renders a Graphics object to a canvas.
   *
   * @param {Tiny.Graphics} graphics - the actual graphics object to render
   */


  _createClass(CanvasGraphicsRenderer, [{
    key: 'render',
    value: function render(graphics) {
      var renderer = this.renderer;
      var context = renderer.context;
      var worldAlpha = graphics.worldAlpha;
      var transform = graphics.transform.worldTransform;
      var resolution = renderer.resolution;

      // if the tint has changed, set the graphics object to dirty.
      if (this._prevTint !== this.tint) {
        this.dirty = true;
      }

      context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

      if (graphics.dirty) {
        this.updateGraphicsTint(graphics);
        graphics.dirty = false;
      }

      renderer.setBlendMode(graphics.blendMode);

      for (var i = 0; i < graphics.graphicsData.length; i++) {
        var data = graphics.graphicsData[i];
        var shape = data.shape;

        var fillColor = data._fillTint;
        var lineColor = data._lineTint;

        context.lineWidth = data.lineWidth;

        if (data.type === _const.SHAPES.POLY) {
          context.beginPath();

          this.renderPolygon(shape.points, shape.closed, context);

          for (var j = 0; j < data.holes.length; j++) {
            this.renderPolygon(data.holes[j].points, true, context);
          }

          if (data.fill) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
            context.fill();
          }
          if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
            context.stroke();
          }
        } else if (data.type === _const.SHAPES.RECT) {
          if (data.fillColor || data.fillColor === 0) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
            context.fillRect(shape.x, shape.y, shape.width, shape.height);
          }
          if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
            context.strokeRect(shape.x, shape.y, shape.width, shape.height);
          }
        } else if (data.type === _const.SHAPES.CIRC) {
          // TODO - need to be Undefined!
          context.beginPath();
          context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
          context.closePath();

          if (data.fill) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
            context.fill();
          }
          if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
            context.stroke();
          }
        } else if (data.type === _const.SHAPES.ELIP) {
          // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

          var w = shape.width * 2;
          var h = shape.height * 2;

          var x = shape.x - w / 2;
          var y = shape.y - h / 2;

          context.beginPath();

          var kappa = 0.5522848;
          var ox = w / 2 * kappa; // control point offset horizontal
          var oy = h / 2 * kappa; // control point offset vertical
          var xe = x + w; // x-end
          var ye = y + h; // y-end
          var xm = x + w / 2; // x-middle
          var ym = y + h / 2; // y-middle

          context.moveTo(x, ym);
          context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
          context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
          context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
          context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);

          context.closePath();

          if (data.fill) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
            context.fill();
          }
          if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
            context.stroke();
          }
        } else if (data.type === _const.SHAPES.RREC) {
          var rx = shape.x;
          var ry = shape.y;
          var width = shape.width;
          var height = shape.height;
          var radius = shape.radius;

          var maxRadius = Math.min(width, height) / 2 | 0;

          radius = radius > maxRadius ? maxRadius : radius;

          context.beginPath();
          context.moveTo(rx, ry + radius);
          context.lineTo(rx, ry + height - radius);
          context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
          context.lineTo(rx + width - radius, ry + height);
          context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
          context.lineTo(rx + width, ry + radius);
          context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
          context.lineTo(rx + radius, ry);
          context.quadraticCurveTo(rx, ry, rx, ry + radius);
          context.closePath();

          if (data.fillColor || data.fillColor === 0) {
            context.globalAlpha = data.fillAlpha * worldAlpha;
            context.fillStyle = '#' + ('00000' + (fillColor | 0).toString(16)).substr(-6);
            context.fill();
          }

          if (data.lineWidth) {
            context.globalAlpha = data.lineAlpha * worldAlpha;
            context.strokeStyle = '#' + ('00000' + (lineColor | 0).toString(16)).substr(-6);
            context.stroke();
          }
        }
      }
    }

    /**
     * Updates the tint of a graphics object
     *
     * @private
     * @param {Tiny.Graphics} graphics - the graphics that will have its tint updated
     */

  }, {
    key: 'updateGraphicsTint',
    value: function updateGraphicsTint(graphics) {
      graphics._prevTint = graphics.tint;

      var tintR = (graphics.tint >> 16 & 0xFF) / 255;
      var tintG = (graphics.tint >> 8 & 0xFF) / 255;
      var tintB = (graphics.tint & 0xFF) / 255;

      for (var i = 0; i < graphics.graphicsData.length; ++i) {
        var data = graphics.graphicsData[i];

        var fillColor = data.fillColor | 0;
        var lineColor = data.lineColor | 0;

        // super inline cos im an optimization NAZI :)
        data._fillTint = ((fillColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((fillColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (fillColor & 0xFF) / 255 * tintB * 255;

        data._lineTint = ((lineColor >> 16 & 0xFF) / 255 * tintR * 255 << 16) + ((lineColor >> 8 & 0xFF) / 255 * tintG * 255 << 8) + (lineColor & 0xFF) / 255 * tintB * 255;
      }
    }

    /**
     * Renders a polygon.
     *
     * @param {Tiny.Point[]} points - The points to render
     * @param {boolean} close - Should the polygon be closed
     * @param {CanvasRenderingContext2D} context - The rendering context to use
     */

  }, {
    key: 'renderPolygon',
    value: function renderPolygon(points, close, context) {
      context.moveTo(points[0], points[1]);

      for (var j = 1; j < points.length / 2; ++j) {
        context.lineTo(points[j * 2], points[j * 2 + 1]);
      }

      if (close) {
        context.closePath();
      }
    }

    /**
     * destroy graphics object
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.renderer = null;
    }
  }]);

  return CanvasGraphicsRenderer;
}();

exports.default = CanvasGraphicsRenderer;


_CanvasRenderer2.default.registerPlugin('graphics', CanvasGraphicsRenderer);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bezierCurveTo;
/**
 * Calculate the points for a bezier curve and then draws it.
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @param {number}          fromX     - Starting point x
 * @param {number}          fromY     - Starting point y
 * @param {number}          cpX       - Control point x
 * @param {number}          cpY       - Control point y
 * @param {number}          cpX2      - Second Control point x
 * @param {number}          cpY2      - Second Control point y
 * @param {number}          toX       - Destination point x
 * @param {number}          toY       - Destination point y
 * @param {array<number>}   path=[]   - Path array to push points into
 * @return {array<number>} Array of points of the curve
 */
function bezierCurveTo(fromX, fromY, cpX, cpY, cpX2, cpY2, toX, toY) {
  var path = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];

  var n = 20;
  var dt = 0;
  var dt2 = 0;
  var dt3 = 0;
  var t2 = 0;
  var t3 = 0;

  path.push(fromX, fromY);

  for (var i = 1, j = 0; i <= n; ++i) {
    j = i / n;

    dt = 1 - j;
    dt2 = dt * dt;
    dt3 = dt2 * dt;

    t2 = j * j;
    t3 = t2 * j;

    path.push(dt3 * fromX + 3 * dt2 * j * cpX + 3 * dt * t2 * cpX2 + t3 * toX, dt3 * fromY + 3 * dt2 * j * cpY + 3 * dt * t2 * cpY2 + t3 * toY);
  }

  return path;
}

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(1);

var _const = __webpack_require__(0);

var _ObjectRenderer2 = __webpack_require__(16);

var _ObjectRenderer3 = _interopRequireDefault(_ObjectRenderer2);

var _WebGLRenderer = __webpack_require__(15);

var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);

var _WebGLGraphicsData = __webpack_require__(92);

var _WebGLGraphicsData2 = _interopRequireDefault(_WebGLGraphicsData);

var _PrimitiveShader = __webpack_require__(93);

var _PrimitiveShader2 = _interopRequireDefault(_PrimitiveShader);

var _buildPoly = __webpack_require__(95);

var _buildPoly2 = _interopRequireDefault(_buildPoly);

var _buildRectangle = __webpack_require__(96);

var _buildRectangle2 = _interopRequireDefault(_buildRectangle);

var _buildRoundedRectangle = __webpack_require__(97);

var _buildRoundedRectangle2 = _interopRequireDefault(_buildRoundedRectangle);

var _buildCircle = __webpack_require__(94);

var _buildCircle2 = _interopRequireDefault(_buildCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Renders the graphics object.
 *
 * @class
 * @memberof Tiny
 * @extends Tiny.ObjectRenderer
 */
var GraphicsRenderer = function (_ObjectRenderer) {
  _inherits(GraphicsRenderer, _ObjectRenderer);

  /**
   * @param {Tiny.WebGLRenderer} renderer - The renderer this object renderer works for.
   */
  function GraphicsRenderer(renderer) {
    _classCallCheck(this, GraphicsRenderer);

    var _this = _possibleConstructorReturn(this, (GraphicsRenderer.__proto__ || Object.getPrototypeOf(GraphicsRenderer)).call(this, renderer));

    _this.graphicsDataPool = [];

    _this.primitiveShader = null;

    _this.gl = renderer.gl;

    // easy access!
    _this.CONTEXT_UID = 0;
    return _this;
  }

  /**
   * Called when there is a WebGL context change
   *
   * @private
   *
   */


  _createClass(GraphicsRenderer, [{
    key: 'onContextChange',
    value: function onContextChange() {
      this.gl = this.renderer.gl;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
      this.primitiveShader = new _PrimitiveShader2.default(this.gl);
    }

    /**
     * Destroys this renderer.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      _ObjectRenderer3.default.prototype.destroy.call(this);

      for (var i = 0; i < this.graphicsDataPool.length; ++i) {
        this.graphicsDataPool[i].destroy();
      }

      this.graphicsDataPool = null;
    }

    /**
     * Renders a graphics object.
     *
     * @param {Tiny.Graphics} graphics - The graphics object to render.
     */

  }, {
    key: 'render',
    value: function render(graphics) {
      var renderer = this.renderer;
      var gl = renderer.gl;

      var webGLData = void 0;
      var webGL = graphics._webGL[this.CONTEXT_UID];

      if (!webGL || graphics.dirty !== webGL.dirty) {
        this.updateGraphics(graphics);

        webGL = graphics._webGL[this.CONTEXT_UID];
      }

      // This  could be speeded up for sure!
      var shader = this.primitiveShader;

      renderer.bindShader(shader);
      renderer.state.setBlendMode(graphics.blendMode);

      for (var i = 0, n = webGL.data.length; i < n; i++) {
        webGLData = webGL.data[i];
        var shaderTemp = webGLData.shader;

        renderer.bindShader(shaderTemp);
        shaderTemp.uniforms.translationMatrix = graphics.transform.worldTransform.toArray(true);
        shaderTemp.uniforms.tint = (0, _utils.hex2rgb)(graphics.tint);
        shaderTemp.uniforms.alpha = graphics.worldAlpha;

        renderer.bindVao(webGLData.vao);

        if (webGLData.nativeLines) {
          gl.drawArrays(gl.LINES, 0, webGLData.points.length / 6);
        } else {
          webGLData.vao.draw(gl.TRIANGLE_STRIP, webGLData.indices.length);
        }
      }
    }

    /**
     * Updates the graphics object
     *
     * @private
     * @param {Tiny.Graphics} graphics - The graphics object to update
     */

  }, {
    key: 'updateGraphics',
    value: function updateGraphics(graphics) {
      var gl = this.renderer.gl;

      // get the contexts graphics object
      var webGL = graphics._webGL[this.CONTEXT_UID];

      // if the graphics object does not exist in the webGL context time to create it!
      if (!webGL) {
        webGL = graphics._webGL[this.CONTEXT_UID] = { lastIndex: 0, data: [], gl: gl, clearDirty: -1, dirty: -1 };
      }

      // flag the graphics as not dirty as we are about to update it...
      webGL.dirty = graphics.dirty;

      // if the user cleared the graphics object we will need to clear every object
      if (graphics.clearDirty !== webGL.clearDirty) {
        webGL.clearDirty = graphics.clearDirty;

        // loop through and return all the webGLDatas to the object pool so than can be reused later on
        for (var i = 0; i < webGL.data.length; i++) {
          this.graphicsDataPool.push(webGL.data[i]);
        }

        // clear the array and reset the index..
        webGL.data.length = 0;
        webGL.lastIndex = 0;
      }

      var webGLData = void 0;
      var webGLDataNativeLines = void 0;

      // loop through the graphics datas and construct each one..
      // if the object is a complex fill then the new stencil buffer technique will be used
      // other wise graphics objects will be pushed into a batch..
      for (var _i = webGL.lastIndex; _i < graphics.graphicsData.length; _i++) {
        var data = graphics.graphicsData[_i];

        // TODO - this can be simplified
        webGLData = this.getWebGLData(webGL, 0);

        if (data.nativeLines && data.lineWidth) {
          webGLDataNativeLines = this.getWebGLData(webGL, 0, true);
          webGL.lastIndex++;
        }

        if (data.type === _const.SHAPES.POLY) {
          (0, _buildPoly2.default)(data, webGLData, webGLDataNativeLines);
        }
        if (data.type === _const.SHAPES.RECT) {
          (0, _buildRectangle2.default)(data, webGLData, webGLDataNativeLines);
        } else if (data.type === _const.SHAPES.CIRC || data.type === _const.SHAPES.ELIP) {
          (0, _buildCircle2.default)(data, webGLData, webGLDataNativeLines);
        } else if (data.type === _const.SHAPES.RREC) {
          (0, _buildRoundedRectangle2.default)(data, webGLData, webGLDataNativeLines);
        }

        webGL.lastIndex++;
      }

      this.renderer.bindVao(null);

      // upload all the dirty data...
      for (var _i2 = 0; _i2 < webGL.data.length; _i2++) {
        webGLData = webGL.data[_i2];

        if (webGLData.dirty) {
          webGLData.upload();
        }
      }
    }

    /**
     *
     * @private
     * @param {WebGLRenderingContext} gl - the current WebGL drawing context
     * @param {number} type - TODO @Alvin
     * @param {number} nativeLines - indicate whether the webGLData use for nativeLines.
     * @return {*} TODO
     */

  }, {
    key: 'getWebGLData',
    value: function getWebGLData(gl, type, nativeLines) {
      var webGLData = gl.data[gl.data.length - 1];

      if (!webGLData || webGLData.nativeLines !== nativeLines || webGLData.points.length > 320000) {
        webGLData = this.graphicsDataPool.pop() || new _WebGLGraphicsData2.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState);
        webGLData.nativeLines = nativeLines;
        webGLData.reset(type);
        gl.data.push(webGLData);
      }

      webGLData.dirty = true;

      return webGLData;
    }
  }]);

  return GraphicsRenderer;
}(_ObjectRenderer3.default);

exports.default = GraphicsRenderer;


_WebGLRenderer2.default.registerPlugin('graphics', GraphicsRenderer);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixiGlCore = __webpack_require__(4);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * An object containing WebGL specific properties to be used by the WebGL renderer
 *
 * @class
 * @private
 * @memberof Tiny
 */
var WebGLGraphicsData = function () {
  /**
   * @param {WebGLRenderingContext} gl - The current WebGL drawing context
   * @param {Tiny.Shader} shader - The shader
   * @param {object} attribsState - The state for the VAO
   */
  function WebGLGraphicsData(gl, shader, attribsState) {
    _classCallCheck(this, WebGLGraphicsData);

    /**
     * The current WebGL drawing context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    // TODO does this need to be split before uploading??
    /**
     * An array of color components (r,g,b)
     * @member {number[]}
     */
    this.color = [0, 0, 0]; // color split!

    /**
     * An array of points to draw
     * @member {Tiny.Point[]}
     */
    this.points = [];

    /**
     * The indices of the vertices
     * @member {number[]}
     */
    this.indices = [];
    /**
     * The main buffer
     * @member {WebGLBuffer}
     */
    this.buffer = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl);

    /**
     * The index buffer
     * @member {WebGLBuffer}
     */
    this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl);

    /**
     * Whether this graphics is dirty or not
     * @member {boolean}
     */
    this.dirty = true;

    /**
     * Whether this graphics is nativeLines or not
     * @member {boolean}
     */
    this.nativeLines = false;

    this.glPoints = null;
    this.glIndices = null;

    /**
     *
     * @member {Tiny.Shader}
     */
    this.shader = shader;

    this.vao = new _pixiGlCore2.default.VertexArrayObject(gl, attribsState).addIndex(this.indexBuffer).addAttribute(this.buffer, shader.attributes.aVertexPosition, gl.FLOAT, false, 4 * 6, 0).addAttribute(this.buffer, shader.attributes.aColor, gl.FLOAT, false, 4 * 6, 2 * 4);
  }

  /**
   * Resets the vertices and the indices
   */


  _createClass(WebGLGraphicsData, [{
    key: 'reset',
    value: function reset() {
      this.points.length = 0;
      this.indices.length = 0;
    }

    /**
     * Binds the buffers and uploads the data
     */

  }, {
    key: 'upload',
    value: function upload() {
      this.glPoints = new Float32Array(this.points);
      this.buffer.upload(this.glPoints);

      this.glIndices = new Uint16Array(this.indices);
      this.indexBuffer.upload(this.glIndices);

      this.dirty = false;
    }

    /**
     * Empties all the data
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.color = null;
      this.points = null;
      this.indices = null;

      this.vao.destroy();
      this.buffer.destroy();
      this.indexBuffer.destroy();

      this.gl = null;

      this.buffer = null;
      this.indexBuffer = null;

      this.glPoints = null;
      this.glIndices = null;
    }
  }]);

  return WebGLGraphicsData;
}();

exports.default = WebGLGraphicsData;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Shader2 = __webpack_require__(13);

var _Shader3 = _interopRequireDefault(_Shader2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This shader is used to draw simple primitive shapes for {@link Tiny.Graphics}.
 *
 * @class
 * @private
 * @memberof Tiny
 * @extends Tiny.Shader
 */
var PrimitiveShader = function (_Shader) {
  _inherits(PrimitiveShader, _Shader);

  /**
   * @param {WebGLRenderingContext} gl - The webgl shader manager this shader works for.
   */
  function PrimitiveShader(gl) {
    _classCallCheck(this, PrimitiveShader);

    return _possibleConstructorReturn(this, (PrimitiveShader.__proto__ || Object.getPrototypeOf(PrimitiveShader)).call(this, gl,
    // vertex shader
    ['attribute vec2 aVertexPosition;', 'attribute vec4 aColor;', 'uniform mat3 translationMatrix;', 'uniform mat3 projectionMatrix;', 'uniform float alpha;', 'uniform vec3 tint;', 'varying vec4 vColor;', 'void main(void){', '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);', '   vColor = aColor * vec4(tint * alpha, alpha);', '}'].join('\n'),
    // fragment shader
    ['varying vec4 vColor;', 'void main(void){', '   gl_FragColor = vColor;', '}'].join('\n')));
  }

  return PrimitiveShader;
}(_Shader3.default);

exports.default = PrimitiveShader;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildCircle;

var _buildLine = __webpack_require__(14);

var _buildLine2 = _interopRequireDefault(_buildLine);

var _const = __webpack_require__(0);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a circle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {Tiny.WebGLGraphicsData} graphicsData - The graphics object to draw
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildCircle(graphicsData, webGLData, webGLDataNativeLines) {
  // need to convert points to a nice regular data
  var circleData = graphicsData.shape;
  var x = circleData.x;
  var y = circleData.y;
  var width = void 0;
  var height = void 0;

  // TODO - bit hacky??
  if (graphicsData.type === _const.SHAPES.CIRC) {
    width = circleData.radius;
    height = circleData.radius;
  } else {
    width = circleData.width;
    height = circleData.height;
  }

  if (width === 0 || height === 0) {
    return;
  }

  var totalSegs = Math.floor(30 * Math.sqrt(circleData.radius)) || Math.floor(15 * Math.sqrt(circleData.width + circleData.height));

  var seg = Math.PI * 2 / totalSegs;

  if (graphicsData.fill) {
    var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
    var alpha = graphicsData.fillAlpha;

    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var verts = webGLData.points;
    var indices = webGLData.indices;

    var vecPos = verts.length / 6;

    indices.push(vecPos);

    for (var i = 0; i < totalSegs + 1; i++) {
      verts.push(x, y, r, g, b, alpha);

      verts.push(x + Math.sin(seg * i) * width, y + Math.cos(seg * i) * height, r, g, b, alpha);

      indices.push(vecPos++, vecPos++);
    }

    indices.push(vecPos - 1);
  }

  if (graphicsData.lineWidth) {
    var tempPoints = graphicsData.points;

    graphicsData.points = [];

    for (var _i = 0; _i < totalSegs + 1; _i++) {
      graphicsData.points.push(x + Math.sin(seg * _i) * width, y + Math.cos(seg * _i) * height);
    }

    (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);

    graphicsData.points = tempPoints;
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildPoly;

var _buildLine = __webpack_require__(14);

var _buildLine2 = _interopRequireDefault(_buildLine);

var _utils = __webpack_require__(1);

var _earcut = __webpack_require__(43);

var _earcut2 = _interopRequireDefault(_earcut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a polygon to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {Tiny.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildPoly(graphicsData, webGLData, webGLDataNativeLines) {
  graphicsData.points = graphicsData.shape.points.slice();

  var points = graphicsData.points;

  if (graphicsData.fill && points.length >= 6) {
    var holeArray = [];
    // Process holes..
    var holes = graphicsData.holes;

    for (var i = 0; i < holes.length; i++) {
      var hole = holes[i];

      holeArray.push(points.length / 2);

      points = points.concat(hole.points);
    }

    // get first and last point.. figure out the middle!
    var verts = webGLData.points;
    var indices = webGLData.indices;

    var length = points.length / 2;

    // sort color
    var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
    var alpha = graphicsData.fillAlpha;
    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var triangles = (0, _earcut2.default)(points, holeArray, 2);

    if (!triangles) {
      return;
    }

    var vertPos = verts.length / 6;

    for (var _i = 0; _i < triangles.length; _i += 3) {
      indices.push(triangles[_i] + vertPos);
      indices.push(triangles[_i] + vertPos);
      indices.push(triangles[_i + 1] + vertPos);
      indices.push(triangles[_i + 2] + vertPos);
      indices.push(triangles[_i + 2] + vertPos);
    }

    for (var _i2 = 0; _i2 < length; _i2++) {
      verts.push(points[_i2 * 2], points[_i2 * 2 + 1], r, g, b, alpha);
    }
  }

  if (graphicsData.lineWidth > 0) {
    (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildRectangle;

var _buildLine = __webpack_require__(14);

var _buildLine2 = _interopRequireDefault(_buildLine);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a rectangle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {Tiny.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildRectangle(graphicsData, webGLData, webGLDataNativeLines) {
  // --- //
  // need to convert points to a nice regular data
  //
  var rectData = graphicsData.shape;
  var x = rectData.x;
  var y = rectData.y;
  var width = rectData.width;
  var height = rectData.height;

  if (graphicsData.fill) {
    var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
    var alpha = graphicsData.fillAlpha;

    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var verts = webGLData.points;
    var indices = webGLData.indices;

    var vertPos = verts.length / 6;

    // start
    verts.push(x, y);
    verts.push(r, g, b, alpha);

    verts.push(x + width, y);
    verts.push(r, g, b, alpha);

    verts.push(x, y + height);
    verts.push(r, g, b, alpha);

    verts.push(x + width, y + height);
    verts.push(r, g, b, alpha);

    // insert 2 dead triangles..
    indices.push(vertPos, vertPos, vertPos + 1, vertPos + 2, vertPos + 3, vertPos + 3);
  }

  if (graphicsData.lineWidth) {
    var tempPoints = graphicsData.points;

    graphicsData.points = [x, y, x + width, y, x + width, y + height, x, y + height, x, y];

    (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);

    graphicsData.points = tempPoints;
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildRoundedRectangle;

var _earcut = __webpack_require__(43);

var _earcut2 = _interopRequireDefault(_earcut);

var _buildLine = __webpack_require__(14);

var _buildLine2 = _interopRequireDefault(_buildLine);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Builds a rounded rectangle to draw
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {Tiny.WebGLGraphicsData} graphicsData - The graphics object containing all the necessary properties
 * @param {object} webGLData - an object containing all the webGL-specific information to create this shape
 * @param {object} webGLDataNativeLines - an object containing all the webGL-specific information to create nativeLines
 */
function buildRoundedRectangle(graphicsData, webGLData, webGLDataNativeLines) {
  var rrectData = graphicsData.shape;
  var x = rrectData.x;
  var y = rrectData.y;
  var width = rrectData.width;
  var height = rrectData.height;

  var radius = rrectData.radius;

  var recPoints = [];

  recPoints.push(x, y + radius);
  quadraticBezierCurve(x, y + height - radius, x, y + height, x + radius, y + height, recPoints);
  quadraticBezierCurve(x + width - radius, y + height, x + width, y + height, x + width, y + height - radius, recPoints);
  quadraticBezierCurve(x + width, y + radius, x + width, y, x + width - radius, y, recPoints);
  quadraticBezierCurve(x + radius, y, x, y, x, y + radius + 0.0000000001, recPoints);

  // this tiny number deals with the issue that occurs when points overlap and earcut fails to triangulate the item.
  // TODO - fix this properly, this is not very elegant.. but it works for now.

  if (graphicsData.fill) {
    var color = (0, _utils.hex2rgb)(graphicsData.fillColor);
    var alpha = graphicsData.fillAlpha;

    var r = color[0] * alpha;
    var g = color[1] * alpha;
    var b = color[2] * alpha;

    var verts = webGLData.points;
    var indices = webGLData.indices;

    var vecPos = verts.length / 6;

    var triangles = (0, _earcut2.default)(recPoints, null, 2);

    for (var i = 0, j = triangles.length; i < j; i += 3) {
      indices.push(triangles[i] + vecPos);
      indices.push(triangles[i] + vecPos);
      indices.push(triangles[i + 1] + vecPos);
      indices.push(triangles[i + 2] + vecPos);
      indices.push(triangles[i + 2] + vecPos);
    }

    for (var _i = 0, _j = recPoints.length; _i < _j; _i++) {
      verts.push(recPoints[_i], recPoints[++_i], r, g, b, alpha);
    }
  }

  if (graphicsData.lineWidth) {
    var tempPoints = graphicsData.points;

    graphicsData.points = recPoints;

    (0, _buildLine2.default)(graphicsData, webGLData, webGLDataNativeLines);

    graphicsData.points = tempPoints;
  }
}

/**
 * Calculate a single point for a quadratic bezier curve.
 * Utility function used by quadraticBezierCurve.
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} n1 - first number
 * @param {number} n2 - second number
 * @param {number} perc - percentage
 * @return {number} the result
 *
 */
function getPt(n1, n2, perc) {
  var diff = n2 - n1;

  return n1 + diff * perc;
}

/**
 * Calculate the points for a quadratic bezier curve. (helper function..)
 * Based on: https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c
 *
 * Ignored from docs since it is not directly exposed.
 *
 * @ignore
 * @private
 * @param {number} fromX - Origin point x
 * @param {number} fromY - Origin point x
 * @param {number} cpX - Control point x
 * @param {number} cpY - Control point y
 * @param {number} toX - Destination point x
 * @param {number} toY - Destination point y
 * @param {number[]} [out=[]] - The output array to add points into. If not passed, a new array is created.
 * @return {number[]} an array of points
 */
function quadraticBezierCurve(fromX, fromY, cpX, cpY, toX, toY) {
  var out = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

  var n = 20;
  var points = out;

  var xa = 0;
  var ya = 0;
  var xb = 0;
  var yb = 0;
  var x = 0;
  var y = 0;

  for (var i = 0, j = 0; i <= n; ++i) {
    j = i / n;

    // The Green Line
    xa = getPt(fromX, cpX, j);
    ya = getPt(fromY, cpY, j);
    xb = getPt(cpX, toX, j);
    yb = getPt(cpY, toY, j);

    // The Black Dot
    x = getPt(xa, xb, j);
    y = getPt(ya, yb, j);

    points.push(x, y);
  }

  return points;
}

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Point object represents a location in a two-dimensional coordinate system, where x represents
 * the horizontal axis and y represents the vertical axis.
 * An observable point is a point that triggers a callback when the point's position is changed.
 *
 * @class
 * @memberof Tiny
 */
var ObservablePoint = function () {
  /**
   * @param {Function} cb - callback when changed
   * @param {object} scope - owner of callback
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */
  function ObservablePoint(cb, scope) {
    var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var y = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, ObservablePoint);

    this._x = x;
    this._y = y;

    this.cb = cb;
    this.scope = scope;
  }

  /**
   * Sets the point to a new x and y position.
   * If y is omitted, both x and y will be set to x.
   *
   * @param {number} [x=0] - position of the point on the x axis
   * @param {number} [y=0] - position of the point on the y axis
   */


  _createClass(ObservablePoint, [{
    key: "set",
    value: function set(x, y) {
      var _x = x || 0;
      var _y = y || (y !== 0 ? _x : 0);

      if (this._x !== _x || this._y !== _y) {
        this._x = _x;
        this._y = _y;
        this.cb.call(this.scope);
      }
    }

    /**
     * Copies the data from another point
     *
     * @param {Tiny.Point|Tiny.ObservablePoint} point - point to copy from
     */

  }, {
    key: "copy",
    value: function copy(point) {
      if (this._x !== point.x || this._y !== point.y) {
        this._x = point.x;
        this._y = point.y;
        this.cb.call(this.scope);
      }
    }

    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     *
     * @member {number}
     */

  }, {
    key: "x",
    get: function get() {
      return this._x;
    },
    set: function set(value) {
      if (this._x !== value) {
        this._x = value;
        this.cb.call(this.scope);
      }
    }

    /**
     * The position of the displayObject on the x axis relative to the local coordinates of the parent.
     *
     * @member {number}
     */

  }, {
    key: "y",
    get: function get() {
      return this._y;
    },
    set: function set(value) {
      if (this._y !== value) {
        this._y = value;
        this.cb.call(this.scope);
      }
    }
  }]);

  return ObservablePoint;
}();

exports.default = ObservablePoint;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rectangle = __webpack_require__(26);

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Circle object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof Tiny
 */
var Circle = function () {
  /**
   * @param {number} [x=0] - The X coordinate of the center of this circle
   * @param {number} [y=0] - The Y coordinate of the center of this circle
   * @param {number} [radius=0] - The radius of the circle
   */
  function Circle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Circle);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;

    /**
     * @member {number}
     * @default 0
     */
    this.radius = radius;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default Tiny.SHAPES.CIRC
     * @see Tiny.SHAPES
     */
    this.type = _const.SHAPES.CIRC;
  }

  /**
   * Creates a clone of this Circle instance
   *
   * @return {Tiny.Circle} a copy of the Circle
   */


  _createClass(Circle, [{
    key: 'clone',
    value: function clone() {
      return new Circle(this.x, this.y, this.radius);
    }

    /**
     * Checks whether the x and y coordinates given are contained within this circle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Circle
     */

  }, {
    key: 'contains',
    value: function contains(x, y) {
      if (this.radius <= 0) {
        return false;
      }

      var r2 = this.radius * this.radius;
      var dx = this.x - x;
      var dy = this.y - y;

      dx *= dx;
      dy *= dy;

      return dx + dy <= r2;
    }

    /**
     * Returns the framing rectangle of the circle as a Rectangle object
     *
     * @return {Tiny.Rectangle} the framing rectangle
     */

  }, {
    key: 'getBounds',
    value: function getBounds() {
      return new _Rectangle2.default(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    }
  }]);

  return Circle;
}();

exports.default = Circle;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Rectangle = __webpack_require__(26);

var _Rectangle2 = _interopRequireDefault(_Rectangle);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Ellipse object can be used to specify a hit area for displayObjects
 *
 * @class
 * @memberof Tiny
 */
var Ellipse = function () {
  /**
   * @param {number} [x=0] - The X coordinate of the center of this circle
   * @param {number} [y=0] - The Y coordinate of the center of this circle
   * @param {number} [width=0] - The half width of this ellipse
   * @param {number} [height=0] - The half height of this ellipse
   */
  function Ellipse() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Ellipse);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default Tiny.SHAPES.ELIP
     * @see Tiny.SHAPES
     */
    this.type = _const.SHAPES.ELIP;
  }

  /**
   * Creates a clone of this Ellipse instance
   *
   * @return {Tiny.Ellipse} a copy of the ellipse
   */


  _createClass(Ellipse, [{
    key: 'clone',
    value: function clone() {
      return new Ellipse(this.x, this.y, this.width, this.height);
    }

    /**
     * Checks whether the x and y coordinates given are contained within this ellipse
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coords are within this ellipse
     */

  }, {
    key: 'contains',
    value: function contains(x, y) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }

      // normalize the coords to an ellipse with center 0,0
      var normx = (x - this.x) / this.width;
      var normy = (y - this.y) / this.height;

      normx *= normx;
      normy *= normy;

      return normx + normy <= 1;
    }

    /**
     * Returns the framing rectangle of the ellipse as a Rectangle object
     *
     * @return {Tiny.Rectangle} the framing rectangle
     */

  }, {
    key: 'getBounds',
    value: function getBounds() {
      return new _Rectangle2.default(this.x - this.width, this.y - this.height, this.width, this.height);
    }
  }]);

  return Ellipse;
}();

exports.default = Ellipse;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Point = __webpack_require__(25);

var _Point2 = _interopRequireDefault(_Point);

var _const = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class
 * @memberof Tiny
 */
var Polygon = function () {
  /**
   * @param {Tiny.Point[]|number[]} points - This can be an array of Points
   *  that form the polygon, a flat array of numbers that will be interpreted as [x,y, x,y, ...], or
   *  the arguments passed can be all the points of the polygon e.g.
   *  `new Tiny.Polygon(new Tiny.Point(), new Tiny.Point(), ...)`, or the arguments passed can be flat
   *  x,y values e.g. `new Polygon(x,y, x,y, x,y, ...)` where `x` and `y` are Numbers.
   */
  function Polygon() {
    for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
      points[_key] = arguments[_key];
    }

    _classCallCheck(this, Polygon);

    if (Array.isArray(points[0])) {
      points = points[0];
    }

    // if this is an array of points, convert it to a flat array of numbers
    if (points[0] instanceof _Point2.default) {
      var p = [];

      for (var i = 0, il = points.length; i < il; i++) {
        p.push(points[i].x, points[i].y);
      }

      points = p;
    }

    this.closed = true;

    /**
     * An array of the points of this polygon
     *
     * @member {number[]}
     */
    this.points = points;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readOnly
     * @default Tiny.SHAPES.POLY
     * @see Tiny.SHAPES
     */
    this.type = _const.SHAPES.POLY;
  }

  /**
   * Creates a clone of this polygon
   *
   * @return {Tiny.Polygon} a copy of the polygon
   */


  _createClass(Polygon, [{
    key: 'clone',
    value: function clone() {
      return new Polygon(this.points.slice());
    }

    /**
     * Closes the polygon, adding points if necessary.
     *
     */

  }, {
    key: 'close',
    value: function close() {
      var points = this.points;

      // close the poly if the value is true!
      if (points[0] !== points[points.length - 2] || points[1] !== points[points.length - 1]) {
        points.push(points[0], points[1]);
      }
    }

    /**
     * Checks whether the x and y coordinates passed to this function are contained within this polygon
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this polygon
     */

  }, {
    key: 'contains',
    value: function contains(x, y) {
      var inside = false;

      // use some raycasting to test hits
      // https://github.com/substack/point-in-polygon/blob/master/index.js
      var length = this.points.length / 2;

      for (var i = 0, j = length - 1; i < length; j = i++) {
        var xi = this.points[i * 2];
        var yi = this.points[i * 2 + 1];
        var xj = this.points[j * 2];
        var yj = this.points[j * 2 + 1];
        var intersect = yi > y !== yj > y && x < (xj - xi) * ((y - yi) / (yj - yi)) + xi;

        if (intersect) {
          inside = !inside;
        }
      }

      return inside;
    }
  }]);

  return Polygon;
}();

exports.default = Polygon;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The Rounded Rectangle object is an area that has nice rounded corners, as indicated by its
 * top-left corner point (x, y) and by its width and its height and its radius.
 *
 * @class
 * @memberof Tiny
 */
var RoundedRectangle = function () {
  /**
   * @param {number} [x=0] - The X coordinate of the upper-left corner of the rounded rectangle
   * @param {number} [y=0] - The Y coordinate of the upper-left corner of the rounded rectangle
   * @param {number} [width=0] - The overall width of this rounded rectangle
   * @param {number} [height=0] - The overall height of this rounded rectangle
   * @param {number} [radius=20] - Controls the radius of the rounded corners
   */
  function RoundedRectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 20;

    _classCallCheck(this, RoundedRectangle);

    /**
     * @member {number}
     * @default 0
     */
    this.x = x;

    /**
     * @member {number}
     * @default 0
     */
    this.y = y;

    /**
     * @member {number}
     * @default 0
     */
    this.width = width;

    /**
     * @member {number}
     * @default 0
     */
    this.height = height;

    /**
     * @member {number}
     * @default 20
     */
    this.radius = radius;

    /**
     * The type of the object, mainly used to avoid `instanceof` checks
     *
     * @member {number}
     * @readonly
     * @default Tiny.SHAPES.RREC
     * @see Tiny.SHAPES
     */
    this.type = _const.SHAPES.RREC;
  }

  /**
   * Creates a clone of this Rounded Rectangle
   *
   * @return {Tiny.RoundedRectangle} a copy of the rounded rectangle
   */


  _createClass(RoundedRectangle, [{
    key: 'clone',
    value: function clone() {
      return new RoundedRectangle(this.x, this.y, this.width, this.height, this.radius);
    }

    /**
     * Checks whether the x and y coordinates given are contained within this Rounded Rectangle
     *
     * @param {number} x - The X coordinate of the point to test
     * @param {number} y - The Y coordinate of the point to test
     * @return {boolean} Whether the x/y coordinates are within this Rounded Rectangle
     */

  }, {
    key: 'contains',
    value: function contains(x, y) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }
      if (x >= this.x && x <= this.x + this.width) {
        if (y >= this.y && y <= this.y + this.height) {
          if (y >= this.y + this.radius && y <= this.y + this.height - this.radius || x >= this.x + this.radius && x <= this.x + this.width - this.radius) {
            return true;
          }
          var dx = x - (this.x + this.radius);
          var dy = y - (this.y + this.radius);
          var radius2 = this.radius * this.radius;

          if (dx * dx + dy * dy <= radius2) {
            return true;
          }
          dx = x - (this.x + this.width - this.radius);
          if (dx * dx + dy * dy <= radius2) {
            return true;
          }
          dy = y - (this.y + this.height - this.radius);
          if (dx * dx + dy * dy <= radius2) {
            return true;
          }
          dx = x - (this.x + this.radius);
          if (dx * dx + dy * dy <= radius2) {
            return true;
          }
        }
      }

      return false;
    }
  }]);

  return RoundedRectangle;
}();

exports.default = RoundedRectangle;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A set of functions used to handle masking.
 *
 * @class
 * @memberof Tiny
 */
var CanvasMaskManager = function () {
  /**
   * @param {Tiny.CanvasRenderer} renderer - The canvas renderer.
   */
  function CanvasMaskManager(renderer) {
    _classCallCheck(this, CanvasMaskManager);

    this.renderer = renderer;
  }

  /**
   * This method adds it to the current stack of masks.
   *
   * @param {object} maskData - the maskData that will be pushed
   */


  _createClass(CanvasMaskManager, [{
    key: 'pushMask',
    value: function pushMask(maskData) {
      var renderer = this.renderer;

      renderer.context.save();

      var cacheAlpha = maskData.alpha;
      var transform = maskData.transform.worldTransform;
      var resolution = renderer.resolution;

      renderer.context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

      // TODO suport sprite alpha masks??
      // lots of effort required. If demand is great enough..
      if (!maskData._texture) {
        this.renderGraphicsShape(maskData);
        renderer.context.clip();
      }

      maskData.worldAlpha = cacheAlpha;
    }

    /**
     * Renders a Tiny.Graphics shape.
     *
     * @param {Tiny.Graphics} graphics - The object to render.
     */

  }, {
    key: 'renderGraphicsShape',
    value: function renderGraphicsShape(graphics) {
      var context = this.renderer.context;
      var len = graphics.graphicsData.length;

      if (len === 0) {
        return;
      }

      context.beginPath();

      for (var i = 0; i < len; i++) {
        var data = graphics.graphicsData[i];
        var shape = data.shape;

        if (data.type === _const.SHAPES.POLY) {
          var points = shape.points;

          context.moveTo(points[0], points[1]);

          for (var j = 1; j < points.length / 2; j++) {
            context.lineTo(points[j * 2], points[j * 2 + 1]);
          }

          // if the first and last point are the same close the path - much neater :)
          if (points[0] === points[points.length - 2] && points[1] === points[points.length - 1]) {
            context.closePath();
          }
        } else if (data.type === _const.SHAPES.RECT) {
          context.rect(shape.x, shape.y, shape.width, shape.height);
          context.closePath();
        } else if (data.type === _const.SHAPES.CIRC) {
          // TODO - need to be Undefined!
          context.arc(shape.x, shape.y, shape.radius, 0, 2 * Math.PI);
          context.closePath();
        } else if (data.type === _const.SHAPES.ELIP) {
          // ellipse code taken from: http://stackoverflow.com/questions/2172798/how-to-draw-an-oval-in-html5-canvas

          var w = shape.width * 2;
          var h = shape.height * 2;

          var x = shape.x - w / 2;
          var y = shape.y - h / 2;

          var kappa = 0.5522848;
          var ox = w / 2 * kappa; // control point offset horizontal
          var oy = h / 2 * kappa; // control point offset vertical
          var xe = x + w; // x-end
          var ye = y + h; // y-end
          var xm = x + w / 2; // x-middle
          var ym = y + h / 2; // y-middle

          context.moveTo(x, ym);
          context.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
          context.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
          context.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
          context.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
          context.closePath();
        } else if (data.type === _const.SHAPES.RREC) {
          var rx = shape.x;
          var ry = shape.y;
          var width = shape.width;
          var height = shape.height;
          var radius = shape.radius;

          var maxRadius = Math.min(width, height) / 2 | 0;

          radius = radius > maxRadius ? maxRadius : radius;

          context.moveTo(rx, ry + radius);
          context.lineTo(rx, ry + height - radius);
          context.quadraticCurveTo(rx, ry + height, rx + radius, ry + height);
          context.lineTo(rx + width - radius, ry + height);
          context.quadraticCurveTo(rx + width, ry + height, rx + width, ry + height - radius);
          context.lineTo(rx + width, ry + radius);
          context.quadraticCurveTo(rx + width, ry, rx + width - radius, ry);
          context.lineTo(rx + radius, ry);
          context.quadraticCurveTo(rx, ry, rx, ry + radius);
          context.closePath();
        }
      }
    }

    /**
     * Restores the current drawing context to the state it was before the mask was applied.
     *
     * @param {Tiny.CanvasRenderer} renderer - The renderer context to use.
     */

  }, {
    key: 'popMask',
    value: function popMask(renderer) {
      renderer.context.restore();
    }

    /**
     * Destroys this canvas mask manager.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      /* empty */
    }
  }]);

  return CanvasMaskManager;
}();

exports.default = CanvasMaskManager;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapCanvasBlendModesToTiny;

var _const = __webpack_require__(0);

var _canUseNewCanvasBlendModes = __webpack_require__(53);

var _canUseNewCanvasBlendModes2 = _interopRequireDefault(_canUseNewCanvasBlendModes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Maps blend combinations to Canvas.
 *
 * @memberof Tiny
 * @function mapCanvasBlendModesToTiny
 * @private
 * @param {string[]} [array=[]] - The array to output into.
 * @return {string[]} Mapped modes.
 */
function mapCanvasBlendModesToTiny() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  if ((0, _canUseNewCanvasBlendModes2.default)()) {
    array[_const.BLEND_MODES.NORMAL] = 'source-over';
    array[_const.BLEND_MODES.ADD] = 'lighter'; // IS THIS OK???
    array[_const.BLEND_MODES.MULTIPLY] = 'multiply';
    array[_const.BLEND_MODES.SCREEN] = 'screen';
    array[_const.BLEND_MODES.OVERLAY] = 'overlay';
    array[_const.BLEND_MODES.DARKEN] = 'darken';
    array[_const.BLEND_MODES.LIGHTEN] = 'lighten';
    array[_const.BLEND_MODES.COLOR_DODGE] = 'color-dodge';
    array[_const.BLEND_MODES.COLOR_BURN] = 'color-burn';
    array[_const.BLEND_MODES.HARD_LIGHT] = 'hard-light';
    array[_const.BLEND_MODES.SOFT_LIGHT] = 'soft-light';
    array[_const.BLEND_MODES.DIFFERENCE] = 'difference';
    array[_const.BLEND_MODES.EXCLUSION] = 'exclusion';
    array[_const.BLEND_MODES.HUE] = 'hue';
    array[_const.BLEND_MODES.SATURATION] = 'saturate';
    array[_const.BLEND_MODES.COLOR] = 'color';
    array[_const.BLEND_MODES.LUMINOSITY] = 'luminosity';
  } else {
    // this means that the browser does not support the cool new blend modes in canvas 'cough' ie 'cough'
    array[_const.BLEND_MODES.NORMAL] = 'source-over';
    array[_const.BLEND_MODES.ADD] = 'lighter'; // IS THIS OK???
    array[_const.BLEND_MODES.MULTIPLY] = 'source-over';
    array[_const.BLEND_MODES.SCREEN] = 'source-over';
    array[_const.BLEND_MODES.OVERLAY] = 'source-over';
    array[_const.BLEND_MODES.DARKEN] = 'source-over';
    array[_const.BLEND_MODES.LIGHTEN] = 'source-over';
    array[_const.BLEND_MODES.COLOR_DODGE] = 'source-over';
    array[_const.BLEND_MODES.COLOR_BURN] = 'source-over';
    array[_const.BLEND_MODES.HARD_LIGHT] = 'source-over';
    array[_const.BLEND_MODES.SOFT_LIGHT] = 'source-over';
    array[_const.BLEND_MODES.DIFFERENCE] = 'source-over';
    array[_const.BLEND_MODES.EXCLUSION] = 'source-over';
    array[_const.BLEND_MODES.HUE] = 'source-over';
    array[_const.BLEND_MODES.SATURATION] = 'source-over';
    array[_const.BLEND_MODES.COLOR] = 'source-over';
    array[_const.BLEND_MODES.LUMINOSITY] = 'source-over';
  }

  return array;
}

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _const = __webpack_require__(0);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * TextureGarbageCollector. This class manages the GPU and ensures that it does not get clogged
 * up with textures that are no longer being used.
 *
 * @class
 * @memberof Tiny
 */
var TextureGarbageCollector = function () {
  /**
   * @param {Tiny.WebGLRenderer} renderer - The renderer this manager works for.
   */
  function TextureGarbageCollector(renderer) {
    _classCallCheck(this, TextureGarbageCollector);

    this.renderer = renderer;

    this.count = 0;
    this.checkCount = 0;
    this.maxIdle = _settings2.default.GC_MAX_IDLE;
    this.checkCountMax = _settings2.default.GC_MAX_CHECK_COUNT;
    this.mode = _settings2.default.GC_MODE;
  }

  /**
   * Checks to see when the last time a texture was used
   * if the texture has not been used for a specified amount of time it will be removed from the GPU
   */


  _createClass(TextureGarbageCollector, [{
    key: 'update',
    value: function update() {
      this.count++;

      if (this.mode === _const.GC_MODES.MANUAL) {
        return;
      }

      this.checkCount++;

      if (this.checkCount > this.checkCountMax) {
        this.checkCount = 0;

        this.run();
      }
    }

    /**
     * Checks to see when the last time a texture was used
     * if the texture has not been used for a specified amount of time it will be removed from the GPU
     */

  }, {
    key: 'run',
    value: function run() {
      var tm = this.renderer.textureManager;
      var managedTextures = tm._managedTextures;
      var wasRemoved = false;

      for (var i = 0; i < managedTextures.length; i++) {
        var texture = managedTextures[i];

        // only supports non generated textures at the moment!
        if (!texture._glRenderTargets && this.count - texture.touched > this.maxIdle) {
          tm.destroyTexture(texture, true);
          managedTextures[i] = null;
          wasRemoved = true;
        }
      }

      if (wasRemoved) {
        var j = 0;

        for (var _i = 0; _i < managedTextures.length; _i++) {
          if (managedTextures[_i] !== null) {
            managedTextures[j++] = managedTextures[_i];
          }
        }

        managedTextures.length = j;
      }
    }

    /**
     * Removes all the textures within the specified displayObject and its children from the GPU
     *
     * @param {Tiny.DisplayObject} displayObject - the displayObject to remove the textures from.
     */

  }, {
    key: 'unload',
    value: function unload(displayObject) {
      var tm = this.renderer.textureManager;

      // only destroy non generated textures
      if (displayObject._texture && displayObject._texture._glRenderTargets) {
        tm.destroyTexture(displayObject._texture, true);
      }

      for (var i = displayObject.children.length - 1; i >= 0; i--) {
        this.unload(displayObject.children[i]);
      }
    }
  }]);

  return TextureGarbageCollector;
}();

exports.default = TextureGarbageCollector;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pixiGlCore = __webpack_require__(4);

var _const = __webpack_require__(0);

var _RenderTarget = __webpack_require__(17);

var _RenderTarget2 = _interopRequireDefault(_RenderTarget);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Helper class to create a webGL Texture
 *
 * @class
 * @memberof Tiny
 */
var TextureManager = function () {
  /**
   * @param {Tiny.WebGLRenderer} renderer - A reference to the current renderer
   */
  function TextureManager(renderer) {
    _classCallCheck(this, TextureManager);

    /**
     * A reference to the current renderer
     *
     * @member {Tiny.WebGLRenderer}
     */
    this.renderer = renderer;

    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = renderer.gl;

    /**
     * Track textures in the renderer so we can no longer listen to them on destruction.
     *
     * @member {Array<*>}
     * @private
     */
    this._managedTextures = [];
  }

  /**
   * Binds a texture.
   *
   */


  _createClass(TextureManager, [{
    key: 'bindTexture',
    value: function bindTexture() {}
    // empty


    /**
     * Gets a texture.
     *
     */

  }, {
    key: 'getTexture',
    value: function getTexture() {}
    // empty


    /**
     * Updates and/or Creates a WebGL texture for the renderer's context.
     *
     * @param {Tiny.BaseTexture|Tiny.Texture} texture - the texture to update
     * @param {number} location - the location the texture will be bound to.
     * @return {GLTexture} The gl texture.
     */

  }, {
    key: 'updateTexture',
    value: function updateTexture(texture, location) {
      // assume it good!
      // texture = texture.baseTexture || texture;

      var gl = this.gl;

      var isRenderTexture = !!texture._glRenderTargets;

      if (!texture.hasLoaded) {
        return null;
      }

      var boundTextures = this.renderer.boundTextures;

      // if the location is undefined then this may have been called by n event.
      // this being the case the texture may already be bound to a slot. As a texture can only be bound once
      // we need to find its current location if it exists.
      if (location === undefined) {
        location = 0;

        // TODO maybe we can use texture bound ids later on...
        // check if texture is already bound..
        for (var i = 0; i < boundTextures.length; ++i) {
          if (boundTextures[i] === texture) {
            location = i;
            break;
          }
        }
      }

      boundTextures[location] = texture;

      gl.activeTexture(gl.TEXTURE0 + location);

      var glTexture = texture._glTextures[this.renderer.CONTEXT_UID];

      if (!glTexture) {
        if (isRenderTexture) {
          var renderTarget = new _RenderTarget2.default(this.gl, texture.width, texture.height, texture.scaleMode, texture.resolution);

          renderTarget.resize(texture.width, texture.height);
          texture._glRenderTargets[this.renderer.CONTEXT_UID] = renderTarget;
          glTexture = renderTarget.texture;
        } else {
          glTexture = new _pixiGlCore.GLTexture(this.gl, null, null, null, null);
          glTexture.bind(location);
          glTexture.premultiplyAlpha = true;
          glTexture.upload(texture.source);
        }

        texture._glTextures[this.renderer.CONTEXT_UID] = glTexture;

        texture.on('update', this.updateTexture, this);
        texture.on('dispose', this.destroyTexture, this);

        this._managedTextures.push(texture);

        if (texture.isPowerOfTwo) {
          if (texture.mipmap) {
            glTexture.enableMipmap();
          }

          if (texture.wrapMode === _const.WRAP_MODES.CLAMP) {
            glTexture.enableWrapClamp();
          } else if (texture.wrapMode === _const.WRAP_MODES.REPEAT) {
            glTexture.enableWrapRepeat();
          } else {
            glTexture.enableWrapMirrorRepeat();
          }
        } else {
          glTexture.enableWrapClamp();
        }

        if (texture.scaleMode === _const.SCALE_MODES.NEAREST) {
          glTexture.enableNearestScaling();
        } else {
          glTexture.enableLinearScaling();
        }
      } else if (isRenderTexture) {
        // the texture already exists so we only need to update it..
        texture._glRenderTargets[this.renderer.CONTEXT_UID].resize(texture.width, texture.height);
      } else {
        glTexture.upload(texture.source);
      }

      return glTexture;
    }

    /**
     * Deletes the texture from WebGL
     *
     * @param {Tiny.BaseTexture|Tiny.Texture} texture - the texture to destroy
     * @param {boolean} [skipRemove=false] - Whether to skip removing the texture from the TextureManager.
     */

  }, {
    key: 'destroyTexture',
    value: function destroyTexture(texture, skipRemove) {
      texture = texture.baseTexture || texture;

      if (!texture.hasLoaded) {
        return;
      }

      if (texture._glTextures[this.renderer.CONTEXT_UID]) {
        this.renderer.unbindTexture(texture);

        texture._glTextures[this.renderer.CONTEXT_UID].destroy();
        texture.off('update', this.updateTexture, this);
        texture.off('dispose', this.destroyTexture, this);

        delete texture._glTextures[this.renderer.CONTEXT_UID];

        if (!skipRemove) {
          var i = this._managedTextures.indexOf(texture);

          if (i !== -1) {
            (0, _utils.removeItems)(this._managedTextures, i, 1);
          }
        }
      }
    }

    /**
     * Deletes all the textures from WebGL
     */

  }, {
    key: 'removeAll',
    value: function removeAll() {
      // empty all the old gl textures as they are useless now
      for (var i = 0; i < this._managedTextures.length; ++i) {
        var texture = this._managedTextures[i];

        if (texture._glTextures[this.renderer.CONTEXT_UID]) {
          delete texture._glTextures[this.renderer.CONTEXT_UID];
        }
      }
    }

    /**
     * Destroys this manager and removes all its textures
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      // destroy managed textures
      for (var i = 0; i < this._managedTextures.length; ++i) {
        var texture = this._managedTextures[i];

        this.destroyTexture(texture, true);

        texture.off('update', this.updateTexture, this);
        texture.off('dispose', this.destroyTexture, this);
      }

      this._managedTextures = null;
    }
  }]);

  return TextureManager;
}();

exports.default = TextureManager;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mapWebGLBlendModesToTiny = __webpack_require__(114);

var _mapWebGLBlendModesToTiny2 = _interopRequireDefault(_mapWebGLBlendModesToTiny);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BLEND = 0;
var DEPTH_TEST = 1;
var FRONT_FACE = 2;
var CULL_FACE = 3;
var BLEND_FUNC = 4;

/**
 * A WebGL state machines
 *
 * @memberof Tiny
 * @class
 */

var WebGLState = function () {
  /**
   * @param {WebGLRenderingContext} gl - The current WebGL rendering context
   */
  function WebGLState(gl) {
    _classCallCheck(this, WebGLState);

    /**
     * The current active state
     *
     * @member {Uint8Array}
     */
    this.activeState = new Uint8Array(16);

    /**
     * The default state
     *
     * @member {Uint8Array}
     */
    this.defaultState = new Uint8Array(16);

    // default blend mode..
    this.defaultState[0] = 1;

    /**
     * The current state index in the stack
     *
     * @member {number}
     * @private
     */
    this.stackIndex = 0;

    /**
     * The stack holding all the different states
     *
     * @member {Array<*>}
     * @private
     */
    this.stack = [];

    /**
     * The current WebGL rendering context
     *
     * @member {WebGLRenderingContext}
     */
    this.gl = gl;

    this.maxAttribs = gl.getParameter(gl.MAX_VERTEX_ATTRIBS);

    this.attribState = {
      tempAttribState: new Array(this.maxAttribs),
      attribState: new Array(this.maxAttribs)
    };

    this.blendModes = (0, _mapWebGLBlendModesToTiny2.default)(gl);

    // check we have vao..
    this.nativeVaoExtension = gl.getExtension('OES_vertex_array_object') || gl.getExtension('MOZ_OES_vertex_array_object') || gl.getExtension('WEBKIT_OES_vertex_array_object');
  }

  /**
   * Pushes a new active state
   */


  _createClass(WebGLState, [{
    key: 'push',
    value: function push() {
      // next state..
      var state = this.stack[this.stackIndex];

      if (!state) {
        state = this.stack[this.stackIndex] = new Uint8Array(16);
      }

      ++this.stackIndex;

      // copy state..
      // set active state so we can force overrides of gl state
      for (var i = 0; i < this.activeState.length; i++) {
        state[i] = this.activeState[i];
      }
    }

    /**
     * Pops a state out
     */

  }, {
    key: 'pop',
    value: function pop() {
      var state = this.stack[--this.stackIndex];

      this.setState(state);
    }

    /**
     * Sets the current state
     *
     * @param {*} state - The state to set.
     */

  }, {
    key: 'setState',
    value: function setState(state) {
      this.setBlend(state[BLEND]);
      this.setDepthTest(state[DEPTH_TEST]);
      this.setFrontFace(state[FRONT_FACE]);
      this.setCullFace(state[CULL_FACE]);
      this.setBlendMode(state[BLEND_FUNC]);
    }

    /**
     * Enables or disabled blending.
     *
     * @param {boolean} value - Turn on or off webgl blending.
     */

  }, {
    key: 'setBlend',
    value: function setBlend(value) {
      value = value ? 1 : 0;

      if (this.activeState[BLEND] === value) {
        return;
      }

      this.activeState[BLEND] = value;
      this.gl[value ? 'enable' : 'disable'](this.gl.BLEND);
    }

    /**
     * Sets the blend mode.
     *
     * @param {number} value - The blend mode to set to.
     */

  }, {
    key: 'setBlendMode',
    value: function setBlendMode(value) {
      if (value === this.activeState[BLEND_FUNC]) {
        return;
      }

      this.activeState[BLEND_FUNC] = value;

      this.gl.blendFunc(this.blendModes[value][0], this.blendModes[value][1]);
    }

    /**
     * Sets whether to enable or disable depth test.
     *
     * @param {boolean} value - Turn on or off webgl depth testing.
     */

  }, {
    key: 'setDepthTest',
    value: function setDepthTest(value) {
      value = value ? 1 : 0;

      if (this.activeState[DEPTH_TEST] === value) {
        return;
      }

      this.activeState[DEPTH_TEST] = value;
      this.gl[value ? 'enable' : 'disable'](this.gl.DEPTH_TEST);
    }

    /**
     * Sets whether to enable or disable cull face.
     *
     * @param {boolean} value - Turn on or off webgl cull face.
     */

  }, {
    key: 'setCullFace',
    value: function setCullFace(value) {
      value = value ? 1 : 0;

      if (this.activeState[CULL_FACE] === value) {
        return;
      }

      this.activeState[CULL_FACE] = value;
      this.gl[value ? 'enable' : 'disable'](this.gl.CULL_FACE);
    }

    /**
     * Sets the gl front face.
     *
     * @param {boolean} value - true is clockwise and false is counter-clockwise
     */

  }, {
    key: 'setFrontFace',
    value: function setFrontFace(value) {
      value = value ? 1 : 0;

      if (this.activeState[FRONT_FACE] === value) {
        return;
      }

      this.activeState[FRONT_FACE] = value;
      this.gl.frontFace(this.gl[value ? 'CW' : 'CCW']);
    }

    /**
     * Disables all the vaos in use
     *
     */

  }, {
    key: 'resetAttributes',
    value: function resetAttributes() {
      for (var i = 0; i < this.attribState.tempAttribState.length; i++) {
        this.attribState.tempAttribState[i] = 0;
      }

      for (var _i = 0; _i < this.attribState.attribState.length; _i++) {
        this.attribState.attribState[_i] = 0;
      }

      // im going to assume one is always active for performance reasons.
      for (var _i2 = 1; _i2 < this.maxAttribs; _i2++) {
        this.gl.disableVertexAttribArray(_i2);
      }
    }

    // used
    /**
     * Resets all the logic and disables the vaos
     */

  }, {
    key: 'resetToDefault',
    value: function resetToDefault() {
      // unbind any VAO if they exist..
      if (this.nativeVaoExtension) {
        this.nativeVaoExtension.bindVertexArrayOES(null);
      }

      // reset all attributes..
      this.resetAttributes();

      // set active state so we can force overrides of gl state
      for (var i = 0; i < this.activeState.length; ++i) {
        this.activeState[i] = 32;
      }

      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);

      this.setState(this.defaultState);
    }
  }]);

  return WebGLState;
}();

exports.default = WebGLState;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractUniformsFromSrc;

var _pixiGlCore = __webpack_require__(4);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultValue = _pixiGlCore2.default.shader.defaultValue;

function extractUniformsFromSrc(vertexSrc, fragmentSrc, mask) {
  var vertUniforms = extractUniformsFromString(vertexSrc, mask);
  var fragUniforms = extractUniformsFromString(fragmentSrc, mask);

  return Object.assign(vertUniforms, fragUniforms);
}

function extractUniformsFromString(string) {
  var maskRegex = new RegExp('^(projectionMatrix|uSampler|filterArea|filterClamp)$');

  var uniforms = {};
  var nameSplit = void 0;

  // clean the lines a little - remove extra spaces / tabs etc
  // then split along ';'
  var lines = string.replace(/\s+/g, ' ').split(/\s*;\s*/);

  // loop through..
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    if (line.indexOf('uniform') > -1) {
      var splitLine = line.split(' ');
      var type = splitLine[1];

      var name = splitLine[2];
      var size = 1;

      if (name.indexOf('[') > -1) {
        // array!
        nameSplit = name.split(/\[|]/);
        name = nameSplit[0];
        size *= Number(nameSplit[1]);
      }

      if (!name.match(maskRegex)) {
        uniforms[name] = {
          value: defaultValue(type, size),
          name: name,
          type: type
        };
      }
    }
  }

  return uniforms;
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateScreenSpaceMatrix = calculateScreenSpaceMatrix;
exports.calculateNormalizedScreenSpaceMatrix = calculateNormalizedScreenSpaceMatrix;
exports.calculateSpriteMatrix = calculateSpriteMatrix;

var _math = __webpack_require__(2);

/**
 * Calculates the mapped matrix
 * @param filterArea {Rectangle} The filter area
 * @param sprite {Sprite} the target sprite
 * @param outputMatrix {Matrix} @alvin
 */
// TODO playing around here.. this is temporary - (will end up in the shader)
// this returns a matrix that will normalise map filter cords in the filter to screen space
function calculateScreenSpaceMatrix(outputMatrix, filterArea, textureSize) {
  // let worldTransform = sprite.worldTransform.copy(Matrix.TEMP_MATRIX),
  // let texture = {width:1136, height:700};//sprite._texture.baseTexture;

  // TODO unwrap?
  var mappedMatrix = outputMatrix.identity();

  mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);

  mappedMatrix.scale(textureSize.width, textureSize.height);

  return mappedMatrix;
}

function calculateNormalizedScreenSpaceMatrix(outputMatrix, filterArea, textureSize) {
  var mappedMatrix = outputMatrix.identity();

  mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);

  var translateScaleX = textureSize.width / filterArea.width;
  var translateScaleY = textureSize.height / filterArea.height;

  mappedMatrix.scale(translateScaleX, translateScaleY);

  return mappedMatrix;
}

// this will map the filter coord so that a texture can be used based on the transform of a sprite
function calculateSpriteMatrix(outputMatrix, filterArea, textureSize, sprite) {
  var worldTransform = sprite.worldTransform.copy(_math.Matrix.TEMP_MATRIX);
  var texture = sprite._texture.baseTexture;

  // TODO unwrap?
  var mappedMatrix = outputMatrix.identity();

  // scale..
  var ratio = textureSize.height / textureSize.width;

  mappedMatrix.translate(filterArea.x / textureSize.width, filterArea.y / textureSize.height);

  mappedMatrix.scale(1, ratio);

  var translateScaleX = textureSize.width / texture.width;
  var translateScaleY = textureSize.height / texture.height;

  worldTransform.tx /= texture.width * translateScaleX;

  // this...?  free beer for anyone who can explain why this makes sense!
  worldTransform.ty /= texture.width * translateScaleX;
  // worldTransform.ty /= texture.height * translateScaleY;

  worldTransform.invert();
  mappedMatrix.prepend(worldTransform);

  // apply inverse scale..
  mappedMatrix.scale(1, 1 / ratio);

  mappedMatrix.scale(translateScaleX, translateScaleY);

  mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);

  return mappedMatrix;
}

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebGLManager2 = __webpack_require__(10);

var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);

var _RenderTarget = __webpack_require__(17);

var _RenderTarget2 = _interopRequireDefault(_RenderTarget);

var _Quad = __webpack_require__(56);

var _Quad2 = _interopRequireDefault(_Quad);

var _math = __webpack_require__(2);

var _Shader = __webpack_require__(13);

var _Shader2 = _interopRequireDefault(_Shader);

var _filterTransforms = __webpack_require__(109);

var filterTransforms = _interopRequireWildcard(_filterTransforms);

var _bitTwiddle = __webpack_require__(19);

var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @ignore
 * @class
 */
var FilterState =
/**
 *
 */
function FilterState() {
  _classCallCheck(this, FilterState);

  this.renderTarget = null;
  this.sourceFrame = new _math.Rectangle();
  this.destinationFrame = new _math.Rectangle();
  this.filters = [];
  this.target = null;
  this.resolution = 1;
};

/**
 * @class
 * @memberof Tiny
 * @extends Tiny.WebGLManager
 */


var FilterManager = function (_WebGLManager) {
  _inherits(FilterManager, _WebGLManager);

  /**
   * @param {Tiny.WebGLRenderer} renderer - The renderer this manager works for.
   */
  function FilterManager(renderer) {
    _classCallCheck(this, FilterManager);

    var _this = _possibleConstructorReturn(this, (FilterManager.__proto__ || Object.getPrototypeOf(FilterManager)).call(this, renderer));

    _this.gl = _this.renderer.gl;
    // know about sprites!
    _this.quad = new _Quad2.default(_this.gl, renderer.state.attribState);

    _this.shaderCache = {};
    // todo add default!
    _this.pool = {};

    _this.filterData = null;
    return _this;
  }

  /**
   * Adds a new filter to the manager.
   *
   * @param {Tiny.DisplayObject} target - The target of the filter to render.
   * @param {Tiny.Filter[]} filters - The filters to apply.
   */


  _createClass(FilterManager, [{
    key: 'pushFilter',
    value: function pushFilter(target, filters) {
      var renderer = this.renderer;

      var filterData = this.filterData;

      if (!filterData) {
        filterData = this.renderer._activeRenderTarget.filterStack;

        // add new stack
        var filterState = new FilterState();

        filterState.sourceFrame = filterState.destinationFrame = this.renderer._activeRenderTarget.size;
        filterState.renderTarget = renderer._activeRenderTarget;

        this.renderer._activeRenderTarget.filterData = filterData = {
          index: 0,
          stack: [filterState]
        };

        this.filterData = filterData;
      }

      // get the current filter state..
      var currentState = filterData.stack[++filterData.index];

      if (!currentState) {
        currentState = filterData.stack[filterData.index] = new FilterState();
      }

      // for now we go off the filter of the first resolution..
      var resolution = filters[0].resolution;
      var padding = filters[0].padding | 0;
      var targetBounds = target.filterArea || target.getBounds(true);
      var sourceFrame = currentState.sourceFrame;
      var destinationFrame = currentState.destinationFrame;

      sourceFrame.x = (targetBounds.x * resolution | 0) / resolution;
      sourceFrame.y = (targetBounds.y * resolution | 0) / resolution;
      sourceFrame.width = (targetBounds.width * resolution | 0) / resolution;
      sourceFrame.height = (targetBounds.height * resolution | 0) / resolution;

      if (filterData.stack[0].renderTarget.transform) {//

        // TODO we should fit the rect around the transform..
      } else if (filters[0].autoFit) {
        sourceFrame.fit(filterData.stack[0].destinationFrame);
      }

      // lets apply the padding After we fit the element to the screen.
      // this should stop the strange side effects that can occur when cropping to the edges
      sourceFrame.pad(padding);

      destinationFrame.width = sourceFrame.width;
      destinationFrame.height = sourceFrame.height;

      // lets play the padding after we fit the element to the screen.
      // this should stop the strange side effects that can occur when cropping to the edges

      var renderTarget = this.getPotRenderTarget(renderer.gl, sourceFrame.width, sourceFrame.height, resolution);

      currentState.target = target;
      currentState.filters = filters;
      currentState.resolution = resolution;
      currentState.renderTarget = renderTarget;

      // bind the render target to draw the shape in the top corner..

      renderTarget.setFrame(destinationFrame, sourceFrame);

      // bind the render target
      renderer.bindRenderTarget(renderTarget);
      renderTarget.clear();
    }

    /**
     * Pops off the filter and applies it.
     *
     */

  }, {
    key: 'popFilter',
    value: function popFilter() {
      var filterData = this.filterData;

      var lastState = filterData.stack[filterData.index - 1];
      var currentState = filterData.stack[filterData.index];

      this.quad.map(currentState.renderTarget.size, currentState.sourceFrame).upload();

      var filters = currentState.filters;

      if (filters.length === 1) {
        filters[0].apply(this, currentState.renderTarget, lastState.renderTarget, false, currentState);
        this.freePotRenderTarget(currentState.renderTarget);
      } else {
        var flip = currentState.renderTarget;
        var flop = this.getPotRenderTarget(this.renderer.gl, currentState.sourceFrame.width, currentState.sourceFrame.height, currentState.resolution);

        flop.setFrame(currentState.destinationFrame, currentState.sourceFrame);

        // finally lets clear the render target before drawing to it..
        flop.clear();

        var i = 0;

        for (i = 0; i < filters.length - 1; ++i) {
          filters[i].apply(this, flip, flop, true, currentState);

          var t = flip;

          flip = flop;
          flop = t;
        }

        filters[i].apply(this, flip, lastState.renderTarget, false, currentState);

        this.freePotRenderTarget(flip);
        this.freePotRenderTarget(flop);
      }

      filterData.index--;

      if (filterData.index === 0) {
        this.filterData = null;
      }
    }

    /**
     * Draws a filter.
     *
     * @param {Tiny.Filter} filter - The filter to draw.
     * @param {Tiny.RenderTarget} input - The input render target.
     * @param {Tiny.RenderTarget} output - The target to output to.
     * @param {boolean} clear - Should the output be cleared before rendering to it
     */

  }, {
    key: 'applyFilter',
    value: function applyFilter(filter, input, output, clear) {
      var renderer = this.renderer;
      var gl = renderer.gl;

      var shader = filter.glShaders[renderer.CONTEXT_UID];

      // cacheing..
      if (!shader) {
        if (filter.glShaderKey) {
          shader = this.shaderCache[filter.glShaderKey];

          if (!shader) {
            shader = new _Shader2.default(this.gl, filter.vertexSrc, filter.fragmentSrc);

            filter.glShaders[renderer.CONTEXT_UID] = this.shaderCache[filter.glShaderKey] = shader;
          }
        } else {
          shader = filter.glShaders[renderer.CONTEXT_UID] = new _Shader2.default(this.gl, filter.vertexSrc, filter.fragmentSrc);
        }

        // TODO - this only needs to be done once?
        renderer.bindVao(null);

        this.quad.initVao(shader);
      }

      renderer.bindVao(this.quad.vao);

      renderer.bindRenderTarget(output);

      if (clear) {
        gl.disable(gl.SCISSOR_TEST);
        renderer.clear(); // [1, 1, 1, 1]);
        gl.enable(gl.SCISSOR_TEST);
      }

      // in case the render target is being masked using a scissor rect
      if (output === renderer.maskManager.scissorRenderTarget) {
        renderer.maskManager.pushScissorMask(null, renderer.maskManager.scissorData);
      }

      renderer.bindShader(shader);

      // free unit 0 for us, doesn't matter what was there
      // don't try to restore it, because syncUniforms can upload it to another slot
      // and it'll be a problem
      var tex = this.renderer.emptyTextures[0];

      this.renderer.boundTextures[0] = tex;
      // this syncs the Tiny filters  uniforms with glsl uniforms
      this.syncUniforms(shader, filter);

      renderer.state.setBlendMode(filter.blendMode);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, input.texture.texture);

      this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0);

      gl.bindTexture(gl.TEXTURE_2D, tex._glTextures[this.renderer.CONTEXT_UID].texture);
    }

    /**
     * Uploads the uniforms of the filter.
     *
     * @param {GLShader} shader - The underlying gl shader.
     * @param {Tiny.Filter} filter - The filter we are synchronizing.
     */

  }, {
    key: 'syncUniforms',
    value: function syncUniforms(shader, filter) {
      var uniformData = filter.uniformData;
      var uniforms = filter.uniforms;

      // 0 is reserved for the pixi texture so we start at 1!
      var textureCount = 1;
      var currentState = void 0;

      // filterArea and filterClamp that are handled by FilterManager directly
      // they must not appear in uniformData

      if (shader.uniforms.data.filterArea) {
        currentState = this.filterData.stack[this.filterData.index];

        var filterArea = shader.uniforms.filterArea;

        filterArea[0] = currentState.renderTarget.size.width;
        filterArea[1] = currentState.renderTarget.size.height;
        filterArea[2] = currentState.sourceFrame.x;
        filterArea[3] = currentState.sourceFrame.y;

        shader.uniforms.filterArea = filterArea;
      }

      // use this to clamp displaced texture coords so they belong to filterArea
      // see displacementFilter fragment shader for an example
      if (shader.uniforms.filterClamp) {
        currentState = this.filterData.stack[this.filterData.index];

        var filterClamp = shader.uniforms.filterClamp;

        filterClamp[0] = 0;
        filterClamp[1] = 0;
        filterClamp[2] = (currentState.sourceFrame.width - 1) / currentState.renderTarget.size.width;
        filterClamp[3] = (currentState.sourceFrame.height - 1) / currentState.renderTarget.size.height;

        shader.uniforms.filterClamp = filterClamp;
      }

      // TODO Cacheing layer..
      for (var i in uniformData) {
        if (uniformData[i].type === 'sampler2D' && uniforms[i] !== 0) {
          if (uniforms[i].baseTexture) {
            shader.uniforms[i] = this.renderer.bindTexture(uniforms[i].baseTexture, textureCount);
          } else {
            shader.uniforms[i] = textureCount;

            // TODO
            // this is helpful as renderTargets can also be set.
            // Although thinking about it, we could probably
            // make the filter texture cache return a RenderTexture
            // rather than a renderTarget
            var gl = this.renderer.gl;

            this.renderer.boundTextures[textureCount] = this.renderer.emptyTextures[textureCount];
            gl.activeTexture(gl.TEXTURE0 + textureCount);

            uniforms[i].texture.bind();
          }

          textureCount++;
        } else if (uniformData[i].type === 'mat3') {
          // check if its Tiny matrix..
          if (uniforms[i].a !== undefined) {
            shader.uniforms[i] = uniforms[i].toArray(true);
          } else {
            shader.uniforms[i] = uniforms[i];
          }
        } else if (uniformData[i].type === 'vec2') {
          // check if its a point..
          if (uniforms[i].x !== undefined) {
            var val = shader.uniforms[i] || new Float32Array(2);

            val[0] = uniforms[i].x;
            val[1] = uniforms[i].y;
            shader.uniforms[i] = val;
          } else {
            shader.uniforms[i] = uniforms[i];
          }
        } else if (uniformData[i].type === 'float') {
          if (shader.uniforms.data[i].value !== uniformData[i]) {
            shader.uniforms[i] = uniforms[i];
          }
        } else {
          shader.uniforms[i] = uniforms[i];
        }
      }
    }

    /**
     * Gets a render target from the pool, or creates a new one.
     *
     * @param {boolean} clear - Should we clear the render texture when we get it?
     * @param {number} resolution - The resolution of the target.
     * @return {Tiny.RenderTarget} The new render target
     */

  }, {
    key: 'getRenderTarget',
    value: function getRenderTarget(clear, resolution) {
      var currentState = this.filterData.stack[this.filterData.index];
      var renderTarget = this.getPotRenderTarget(this.renderer.gl, currentState.sourceFrame.width, currentState.sourceFrame.height, resolution || currentState.resolution);

      renderTarget.setFrame(currentState.destinationFrame, currentState.sourceFrame);

      return renderTarget;
    }

    /**
     * Returns a render target to the pool.
     *
     * @param {Tiny.RenderTarget} renderTarget - The render target to return.
     */

  }, {
    key: 'returnRenderTarget',
    value: function returnRenderTarget(renderTarget) {
      this.freePotRenderTarget(renderTarget);
    }

    /**
     * Calculates the mapped matrix.
     *
     * TODO playing around here.. this is temporary - (will end up in the shader)
     * this returns a matrix that will normalise map filter cords in the filter to screen space
     *
     * @param {Tiny.Matrix} outputMatrix - the matrix to output to.
     * @return {Tiny.Matrix} The mapped matrix.
     */

  }, {
    key: 'calculateScreenSpaceMatrix',
    value: function calculateScreenSpaceMatrix(outputMatrix) {
      var currentState = this.filterData.stack[this.filterData.index];

      return filterTransforms.calculateScreenSpaceMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size);
    }

    /**
     * Multiply vTextureCoord to this matrix to achieve (0,0,1,1) for filterArea
     *
     * @param {Tiny.Matrix} outputMatrix - The matrix to output to.
     * @return {Tiny.Matrix} The mapped matrix.
     */

  }, {
    key: 'calculateNormalizedScreenSpaceMatrix',
    value: function calculateNormalizedScreenSpaceMatrix(outputMatrix) {
      var currentState = this.filterData.stack[this.filterData.index];

      return filterTransforms.calculateNormalizedScreenSpaceMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size, currentState.destinationFrame);
    }

    /**
     * This will map the filter coord so that a texture can be used based on the transform of a sprite
     *
     * @param {Tiny.Matrix} outputMatrix - The matrix to output to.
     * @param {Tiny.Sprite} sprite - The sprite to map to.
     * @return {Tiny.Matrix} The mapped matrix.
     */

  }, {
    key: 'calculateSpriteMatrix',
    value: function calculateSpriteMatrix(outputMatrix, sprite) {
      var currentState = this.filterData.stack[this.filterData.index];

      return filterTransforms.calculateSpriteMatrix(outputMatrix, currentState.sourceFrame, currentState.renderTarget.size, sprite);
    }

    /**
     * Destroys this Filter Manager.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.shaderCache = {};
      this.emptyPool();
    }

    /**
     * Gets a Power-of-Two render texture.
     *
     * TODO move to a seperate class could be on renderer?
     * also - could cause issue with multiple contexts?
     *
     * @private
     * @param {WebGLRenderingContext} gl - The webgl rendering context
     * @param {number} minWidth - The minimum width of the render target.
     * @param {number} minHeight - The minimum height of the render target.
     * @param {number} resolution - The resolution of the render target.
     * @return {Tiny.RenderTarget} The new render target.
     */

  }, {
    key: 'getPotRenderTarget',
    value: function getPotRenderTarget(gl, minWidth, minHeight, resolution) {
      // TODO you could return a bigger texture if there is not one in the pool?
      minWidth = _bitTwiddle2.default.nextPow2(minWidth * resolution);
      minHeight = _bitTwiddle2.default.nextPow2(minHeight * resolution);

      var key = (minWidth & 0xFFFF) << 16 | minHeight & 0xFFFF;

      if (!this.pool[key]) {
        this.pool[key] = [];
      }

      var renderTarget = this.pool[key].pop();

      // creating render target will cause texture to be bound!
      if (!renderTarget) {
        // temporary bypass cache..
        var tex = this.renderer.boundTextures[0];

        gl.activeTexture(gl.TEXTURE0);

        // internally - this will cause a texture to be bound..
        renderTarget = new _RenderTarget2.default(gl, minWidth, minHeight, null, 1);

        // set the current one back
        gl.bindTexture(gl.TEXTURE_2D, tex._glTextures[this.renderer.CONTEXT_UID].texture);
      }

      // manually tweak the resolution...
      // this will not modify the size of the frame buffer, just its resolution.
      renderTarget.resolution = resolution;
      renderTarget.defaultFrame.width = renderTarget.size.width = minWidth / resolution;
      renderTarget.defaultFrame.height = renderTarget.size.height = minHeight / resolution;

      return renderTarget;
    }

    /**
     * Empties the texture pool.
     *
     */

  }, {
    key: 'emptyPool',
    value: function emptyPool() {
      for (var i in this.pool) {
        var textures = this.pool[i];

        if (textures) {
          for (var j = 0; j < textures.length; j++) {
            textures[j].destroy(true);
          }
        }
      }

      this.pool = {};
    }

    /**
     * Frees a render target back into the pool.
     *
     * @param {Tiny.RenderTarget} renderTarget - The renderTarget to free
     */

  }, {
    key: 'freePotRenderTarget',
    value: function freePotRenderTarget(renderTarget) {
      var minWidth = renderTarget.size.width * renderTarget.resolution;
      var minHeight = renderTarget.size.height * renderTarget.resolution;
      var key = (minWidth & 0xFFFF) << 16 | minHeight & 0xFFFF;

      this.pool[key].push(renderTarget);
    }
  }]);

  return FilterManager;
}(_WebGLManager3.default);

exports.default = FilterManager;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebGLManager2 = __webpack_require__(10);

var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);

var _SpriteMaskFilter = __webpack_require__(55);

var _SpriteMaskFilter2 = _interopRequireDefault(_SpriteMaskFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class
 * @extends Tiny.WebGLManager
 * @memberof Tiny
 */
var MaskManager = function (_WebGLManager) {
  _inherits(MaskManager, _WebGLManager);

  /**
   * @param {Tiny.WebGLRenderer} renderer - The renderer this manager works for.
   */
  function MaskManager(renderer) {
    _classCallCheck(this, MaskManager);

    // TODO - we don't need both!
    var _this = _possibleConstructorReturn(this, (MaskManager.__proto__ || Object.getPrototypeOf(MaskManager)).call(this, renderer));

    _this.scissor = false;
    _this.scissorData = null;
    _this.scissorRenderTarget = null;

    _this.enableScissor = true;

    _this.alphaMaskPool = [];
    _this.alphaMaskIndex = 0;
    return _this;
  }

  /**
   * Applies the Mask and adds it to the current filter stack.
   *
   * @param {Tiny.DisplayObject} target - Display Object to push the mask to
   * @param {Tiny.Sprite|Tiny.Graphics} maskData - The masking data.
   */


  _createClass(MaskManager, [{
    key: 'pushMask',
    value: function pushMask(target, maskData) {
      // TODO the root check means scissor rect will not
      // be used on render textures more info here:
      // https://github.com/pixijs/pixi.js/pull/3545

      if (maskData.texture) {
        this.pushSpriteMask(target, maskData);
      } else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && maskData.isFastRect()) {
        var matrix = maskData.worldTransform;

        var rot = Math.atan2(matrix.b, matrix.a);

        // use the nearest degree!
        rot = Math.round(rot * (180 / Math.PI));

        if (rot % 90) {
          this.pushStencilMask(maskData);
        } else {
          this.pushScissorMask(target, maskData);
        }
      } else {
        this.pushStencilMask(maskData);
      }
    }

    /**
     * Removes the last mask from the mask stack and doesn't return it.
     *
     * @param {Tiny.DisplayObject} target - Display Object to pop the mask from
     * @param {Tiny.Sprite|Tiny.Graphics} maskData - The masking data.
     */

  }, {
    key: 'popMask',
    value: function popMask(target, maskData) {
      if (maskData.texture) {
        this.popSpriteMask(target, maskData);
      } else if (this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length) {
        this.popScissorMask(target, maskData);
      } else {
        this.popStencilMask(target, maskData);
      }
    }

    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {Tiny.RenderTarget} target - Display Object to push the sprite mask to
     * @param {Tiny.Sprite} maskData - Sprite to be used as the mask
     */

  }, {
    key: 'pushSpriteMask',
    value: function pushSpriteMask(target, maskData) {
      var alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];

      if (!alphaMaskFilter) {
        alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new _SpriteMaskFilter2.default(maskData)];
      }

      alphaMaskFilter[0].resolution = this.renderer.resolution;
      alphaMaskFilter[0].maskSprite = maskData;

      // TODO - may cause issues!
      target.filterArea = maskData.getBounds(true);

      this.renderer.filterManager.pushFilter(target, alphaMaskFilter);

      this.alphaMaskIndex++;
    }

    /**
     * Removes the last filter from the filter stack and doesn't return it.
     *
     */

  }, {
    key: 'popSpriteMask',
    value: function popSpriteMask() {
      this.renderer.filterManager.popFilter();
      this.alphaMaskIndex--;
    }

    /**
     * Applies the Mask and adds it to the current filter stack.
     *
     * @param {Tiny.Sprite|Tiny.Graphics} maskData - The masking data.
     */

  }, {
    key: 'pushStencilMask',
    value: function pushStencilMask(maskData) {
      this.renderer.currentRenderer.stop();
      this.renderer.stencilManager.pushStencil(maskData);
    }

    /**
     * Removes the last filter from the filter stack and doesn't return it.
     *
     */

  }, {
    key: 'popStencilMask',
    value: function popStencilMask() {
      this.renderer.currentRenderer.stop();
      this.renderer.stencilManager.popStencil();
    }

    /**
     *
     * @param {Tiny.DisplayObject} target - Display Object to push the mask to
     * @param {Tiny.Graphics} maskData - The masking data.
     */

  }, {
    key: 'pushScissorMask',
    value: function pushScissorMask(target, maskData) {
      maskData.renderable = true;

      var renderTarget = this.renderer._activeRenderTarget;

      var bounds = maskData.getBounds();

      bounds.fit(renderTarget.size);
      maskData.renderable = false;

      this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);

      var resolution = this.renderer.resolution;

      this.renderer.gl.scissor(bounds.x * resolution, (renderTarget.root ? renderTarget.size.height - bounds.y - bounds.height : bounds.y) * resolution, bounds.width * resolution, bounds.height * resolution);

      this.scissorRenderTarget = renderTarget;
      this.scissorData = maskData;
      this.scissor = true;
    }

    /**
     *
     *
     */

  }, {
    key: 'popScissorMask',
    value: function popScissorMask() {
      this.scissorRenderTarget = null;
      this.scissorData = null;
      this.scissor = false;

      // must be scissor!
      var gl = this.renderer.gl;

      gl.disable(gl.SCISSOR_TEST);
    }
  }]);

  return MaskManager;
}(_WebGLManager3.default);

exports.default = MaskManager;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _WebGLManager2 = __webpack_require__(10);

var _WebGLManager3 = _interopRequireDefault(_WebGLManager2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @class
 * @extends Tiny.WebGLManager
 * @memberof Tiny
 */
var StencilManager = function (_WebGLManager) {
  _inherits(StencilManager, _WebGLManager);

  /**
   * @param {Tiny.WebGLRenderer} renderer - The renderer this manager works for.
   */
  function StencilManager(renderer) {
    _classCallCheck(this, StencilManager);

    var _this = _possibleConstructorReturn(this, (StencilManager.__proto__ || Object.getPrototypeOf(StencilManager)).call(this, renderer));

    _this.stencilMaskStack = null;
    return _this;
  }

  /**
   * Changes the mask stack that is used by this manager.
   *
   * @param {Tiny.Graphics[]} stencilMaskStack - The mask stack
   */


  _createClass(StencilManager, [{
    key: 'setMaskStack',
    value: function setMaskStack(stencilMaskStack) {
      this.stencilMaskStack = stencilMaskStack;

      var gl = this.renderer.gl;

      if (stencilMaskStack.length === 0) {
        gl.disable(gl.STENCIL_TEST);
      } else {
        gl.enable(gl.STENCIL_TEST);
      }
    }

    /**
     * Applies the Mask and adds it to the current filter stack. @alvin
     *
     * @param {Tiny.Graphics} graphics - The mask
     */

  }, {
    key: 'pushStencil',
    value: function pushStencil(graphics) {
      this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

      this.renderer._activeRenderTarget.attachStencilBuffer();

      var gl = this.renderer.gl;
      var sms = this.stencilMaskStack;

      if (sms.length === 0) {
        gl.enable(gl.STENCIL_TEST);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        gl.stencilFunc(gl.ALWAYS, 1, 1);
      }

      sms.push(graphics);

      gl.colorMask(false, false, false, false);
      gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);

      this.renderer.plugins.graphics.render(graphics);

      gl.colorMask(true, true, true, true);
      gl.stencilFunc(gl.NOTEQUAL, 0, sms.length);
      gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    }

    /**
     * TODO @alvin
     */

  }, {
    key: 'popStencil',
    value: function popStencil() {
      this.renderer.setObjectRenderer(this.renderer.plugins.graphics);

      var gl = this.renderer.gl;
      var sms = this.stencilMaskStack;

      var graphics = sms.pop();

      if (sms.length === 0) {
        // the stack is empty!
        gl.disable(gl.STENCIL_TEST);
      } else {
        gl.colorMask(false, false, false, false);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);

        this.renderer.plugins.graphics.render(graphics);

        gl.colorMask(true, true, true, true);
        gl.stencilFunc(gl.NOTEQUAL, 0, sms.length);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
      }
    }

    /**
     * Destroys the mask stack.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      _WebGLManager3.default.prototype.destroy.call(this);

      this.stencilMaskStack.stencilStack = null;
    }
  }]);

  return StencilManager;
}(_WebGLManager3.default);

exports.default = StencilManager;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = checkMaxIfStatmentsInShader;

var _pixiGlCore = __webpack_require__(4);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragTemplate = ['precision mediump float;', 'void main(void){', 'float test = 0.1;', '%forloop%', 'gl_FragColor = vec4(0.0);', '}'].join('\n');

function checkMaxIfStatmentsInShader(maxIfs, gl) {
  var createTempContext = !gl;

  // @if DEBUG
  if (maxIfs === 0) {
    throw new Error('Invalid value of `0` passed to `checkMaxIfStatementsInShader`');
  }
  // @endif

  if (createTempContext) {
    var tinyCanvas = document.createElement('canvas');

    tinyCanvas.width = 1;
    tinyCanvas.height = 1;

    gl = _pixiGlCore2.default.createContext(tinyCanvas);
  }

  var shader = gl.createShader(gl.FRAGMENT_SHADER);

  while (true) {
    var fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));

    gl.shaderSource(shader, fragmentSrc);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      maxIfs = maxIfs / 2 | 0;
    } else {
      // valid!
      break;
    }
  }

  if (createTempContext) {
    // get rid of context
    if (gl.getExtension('WEBGL_lose_context')) {
      gl.getExtension('WEBGL_lose_context').loseContext();
    }
  }

  return maxIfs;
}

function generateIfTestSrc(maxIfs) {
  var src = '';

  for (var i = 0; i < maxIfs; ++i) {
    if (i > 0) {
      src += '\nelse ';
    }

    if (i < maxIfs - 1) {
      src += 'if(test == ' + i + '.0){}';
    }
  }

  return src;
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapWebGLBlendModesToTiny;

var _const = __webpack_require__(0);

/**
 * Maps gl blend combinations to WebGL.
 *
 * @memberof Tiny
 * @function mapWebGLBlendModesToTiny
 * @private
 * @param {WebGLRenderingContext} gl - The rendering context.
 * @param {string[]} [array=[]] - The array to output into.
 * @return {string[]} Mapped modes.
 */
function mapWebGLBlendModesToTiny(gl) {
  var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  // TODO - premultiply alpha would be different.
  // add a boolean for that!
  array[_const.BLEND_MODES.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.ADD] = [gl.ONE, gl.DST_ALPHA];
  array[_const.BLEND_MODES.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR];
  array[_const.BLEND_MODES.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[_const.BLEND_MODES.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];

  return array;
}

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mapWebGLDrawModesToTiny;

var _const = __webpack_require__(0);

/**
 * Generic Mask Stack data structure.
 *
 * @memberof Tiny
 * @function mapWebGLDrawModesToTiny
 * @private
 * @param {WebGLRenderingContext} gl - The current WebGL drawing context
 * @param {object} [object={}] - The object to map into
 * @return {object} The mapped draw modes.
 */
function mapWebGLDrawModesToTiny(gl) {
  var object = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  object[_const.DRAW_MODES.POINTS] = gl.POINTS;
  object[_const.DRAW_MODES.LINES] = gl.LINES;
  object[_const.DRAW_MODES.LINE_LOOP] = gl.LINE_LOOP;
  object[_const.DRAW_MODES.LINE_STRIP] = gl.LINE_STRIP;
  object[_const.DRAW_MODES.TRIANGLES] = gl.TRIANGLES;
  object[_const.DRAW_MODES.TRIANGLE_STRIP] = gl.TRIANGLE_STRIP;
  object[_const.DRAW_MODES.TRIANGLE_FAN] = gl.TRIANGLE_FAN;

  return object;
}

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateContext;
function validateContext(gl) {
  var attributes = gl.getContextAttributes();

  // this is going to be fairly simple for now.. but at least we have room to grow!
  if (!attributes.stencil) {
    /* eslint-disable no-console */
    console.warn('Provided WebGL context does not have a stencil buffer, masks may not render correctly');
    /* eslint-enable no-console */
  }
}

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @typedef FrameObject
 * @type {object}
 * @property {Tiny.Texture} texture - The {@link Tiny.Texture} of the frame
 * @property {number} time - the duration of the frame in ms
 */

/**
 * An AnimatedSprite is a simple way to display an animation depicted by a list of textures.
 *
 *  ```js
 *  let alienImages = ['image_sequence_01.png','image_sequence_02.png','image_sequence_03.png','image_sequence_04.png'];
 *  let textureArray = [];
 *
 *  for (let i=0; i < 4; i++) {
 *    let texture = Tiny.Texture.fromImage(alienImages[i]);
 *    textureArray.push(texture);
 *  };
 *
 *  let mc = new Tiny.AnimatedSprite(textureArray);
 *  ```
 *
 * @class
 * @extends Tiny.Sprite
 * @memberof Tiny
 */
var AnimatedSprite = function (_core$Sprite) {
  _inherits(AnimatedSprite, _core$Sprite);

  /**
   * @param {Tiny.Texture[]|FrameObject[]}  textures          an array of {@link Tiny.Texture} or frame objects that make up the animation
   * @param {boolean}                       autoUpdate=true   Whether use Tiny.ticker.shared to auto update animation time.
   */
  function AnimatedSprite(textures, autoUpdate) {
    _classCallCheck(this, AnimatedSprite);

    /**
     * @private
     */
    var _this = _possibleConstructorReturn(this, (AnimatedSprite.__proto__ || Object.getPrototypeOf(AnimatedSprite)).call(this, textures[0] instanceof core.Texture ? textures[0] : textures[0].texture));

    _this._textures = null;

    /**
     * @private
     */
    _this._durations = null;

    _this.textures = textures;

    /**
     * `true` uses Tiny.ticker.shared to auto update animation time.
     * @type {boolean}
     * @default true
     * @private
     */
    _this._autoUpdate = autoUpdate !== false;

    /**
     * The speed that the AnimatedSprite will play at. Higher is faster, lower is slower
     *
     * @member {number}
     * @default 1
     */
    _this.animationSpeed = 1;

    /**
     * Whether or not the animate sprite repeats after playing.
     *
     * @member {boolean}
     * @default true
     */
    _this.loop = true;

    /**
     * Function to call when a AnimatedSprite finishes playing
     *
     * @member {Function}
     */
    _this.onComplete = null;

    /**
     * Function to call when a AnimatedSprite changes which texture is being rendered
     *
     * @member {Function}
     */
    _this.onFrameChange = null;

    /**
     * Elapsed time since animation has been started, used internally to display current texture
     *
     * @member {number}
     * @private
     */
    _this._currentTime = 0;

    /**
     * Indicates if the AnimatedSprite is currently playing
     *
     * @member {boolean}
     * @readonly
     */
    _this.playing = false;
    return _this;
  }

  /**
   * Stops the AnimatedSprite
   *
   */


  _createClass(AnimatedSprite, [{
    key: 'stop',
    value: function stop() {
      if (!this.playing) {
        return;
      }

      this.playing = false;
      if (this._autoUpdate) {
        core.ticker.shared.remove(this._update, this);
      }
    }

    /**
     * Plays the AnimatedSprite
     *
     */

  }, {
    key: 'play',
    value: function play() {
      if (this.playing) {
        return;
      }

      this.playing = true;
      if (this._autoUpdate) {
        core.ticker.shared.add(this._update, this, core.UPDATE_PRIORITY.HIGH);
      }
    }

    /**
     * Stops the AnimatedSprite and goes to a specific frame
     *
     * @param {number} frameNumber - frame index to stop at
     */

  }, {
    key: 'gotoAndStop',
    value: function gotoAndStop(frameNumber) {
      this.stop();

      var previousFrame = this.currentFrame;

      this._currentTime = frameNumber;

      if (previousFrame !== this.currentFrame) {
        this.updateTexture();
      }
    }

    /**
     * Goes to a specific frame and begins playing the AnimatedSprite
     *
     * @param {number} frameNumber - frame index to start at
     */

  }, {
    key: 'gotoAndPlay',
    value: function gotoAndPlay(frameNumber) {
      var previousFrame = this.currentFrame;

      this._currentTime = frameNumber;

      if (previousFrame !== this.currentFrame) {
        this.updateTexture();
      }

      this.play();
    }

    /**
     * Updates the object transform for rendering.
     *
     * @private
     * @param {number} deltaTime - Time since last tick.
     */

  }, {
    key: '_update',
    value: function _update(deltaTime) {
      var elapsed = this.animationSpeed * deltaTime;
      var previousFrame = this.currentFrame;

      if (this._durations !== null) {
        var lag = this._currentTime % 1 * this._durations[this.currentFrame];

        lag += elapsed / 60 * 1000;

        while (lag < 0) {
          this._currentTime--;
          lag += this._durations[this.currentFrame];
        }

        var sign = Math.sign(this.animationSpeed * deltaTime);

        this._currentTime = Math.floor(this._currentTime);

        while (lag >= this._durations[this.currentFrame]) {
          lag -= this._durations[this.currentFrame] * sign;
          this._currentTime += sign;
        }

        this._currentTime += lag / this._durations[this.currentFrame];
      } else {
        this._currentTime += elapsed;
      }
      if (this._currentTime < 0 && !this.loop) {
        this.gotoAndStop(0);

        if (this.onComplete) {
          this.onComplete();
        }
      } else if (this._currentTime >= this._textures.length && !this.loop) {
        this.gotoAndStop(this._textures.length - 1);

        if (this.onComplete) {
          this.onComplete();
        }
      } else if (previousFrame !== this.currentFrame) {
        this.updateTexture();
      }
    }

    /**
     * Updates the displayed texture to match the current frame index
     *
     * @private
     */

  }, {
    key: 'updateTexture',
    value: function updateTexture() {
      this._texture = this._textures[this.currentFrame];
      this._textureID = -1;

      if (this.onFrameChange) {
        this.onFrameChange(this.currentFrame);
      }
    }

    /**
     * 动画反转
     *
     * @version 1.0.2
     */

  }, {
    key: 'reverse',
    value: function reverse() {
      this._currentTime = this._textures.length - this.currentFrame - 1;
      this._textures.reverse();
    }

    /**
     * Stops the AnimatedSprite and destroys it
     *
     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
     *  have been set to that value
     * @param {boolean} [options.children=false] - if set to true, all the children will have their destroy
     *      method called as well. 'options' will be passed on to those calls.
     * @param {boolean} [options.texture=false] - Should it destroy the current texture of the sprite as well
     * @param {boolean} [options.baseTexture=false] - Should it destroy the base texture of the sprite as well
     */

  }, {
    key: 'destroy',
    value: function destroy(options) {
      this.stop();
      _get(AnimatedSprite.prototype.__proto__ || Object.getPrototypeOf(AnimatedSprite.prototype), 'destroy', this).call(this, options);
    }

    /**
     * A short hand way of creating a movieclip from an array of frame ids
     *
     * @static
     * @param {string[]} frames - The array of frames ids the movieclip will use as its texture frames
     * @return {AnimatedSprite} The new animated sprite with the specified frames.
     */

  }, {
    key: 'totalFrames',


    /**
     * totalFrames is the total number of frames in the AnimatedSprite. This is the same as number of textures
     * assigned to the AnimatedSprite.
     *
     * @readonly
     * @member {number}
     * @default 0
     */
    get: function get() {
      return this._textures.length;
    }

    /**
     * The array of textures used for this AnimatedSprite
     *
     * @member {Tiny.Texture[]}
     */

  }, {
    key: 'textures',
    get: function get() {
      return this._textures;
    },
    set: function set(value) {
      if (value[0] instanceof core.Texture) {
        this._textures = value;
        this._durations = null;
      } else {
        this._textures = [];
        this._durations = [];

        for (var i = 0; i < value.length; i++) {
          this._textures.push(value[i].texture);
          this._durations.push(value[i].time);
        }
      }
      this.gotoAndPlay(0);
      this.updateTexture();
    }

    /**
     * The AnimatedSprites current frame index
     *
     * @member {number}
     * @readonly
     */

  }, {
    key: 'currentFrame',
    get: function get() {
      var currentFrame = Math.floor(this._currentTime) % this._textures.length;

      if (currentFrame < 0) {
        currentFrame += this._textures.length;
      }

      return currentFrame;
    }
  }], [{
    key: 'fromFrames',
    value: function fromFrames(frames) {
      var textures = [];

      for (var i = 0; i < frames.length; ++i) {
        textures.push(core.Texture.fromFrame(frames[i]));
      }

      return new AnimatedSprite(textures);
    }

    /**
     * A short hand way of creating a movieclip from an array of image ids
     *
     * @static
     * @param {string[]} images - the array of image urls the movieclip will use as its texture frames
     * @return {AnimatedSprite} The new animate sprite with the specified images as frames.
     */

  }, {
    key: 'fromImages',
    value: function fromImages(images) {
      var textures = [];

      for (var i = 0; i < images.length; ++i) {
        textures.push(core.Texture.fromImage(images[i]));
      }

      return new AnimatedSprite(textures);
    }
  }]);

  return AnimatedSprite;
}(core.Sprite);

exports.default = AnimatedSprite;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CanvasRenderer = __webpack_require__(9);

var _CanvasRenderer2 = _interopRequireDefault(_CanvasRenderer);

var _const = __webpack_require__(0);

var _math = __webpack_require__(2);

var _CanvasTinter = __webpack_require__(57);

var _CanvasTinter2 = _interopRequireDefault(_CanvasTinter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var canvasRenderWorldTransform = new _math.Matrix();

/**
 * @author Mat Groves
 *
 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
 * for creating the original pixi version!
 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now
 * share 4 bytes on the vertex buffer
 *
 * Heavily inspired by LibGDX's CanvasSpriteRenderer:
 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/CanvasSpriteRenderer.java
 */

/**
 * Renderer dedicated to drawing and batching sprites.
 *
 * @class
 * @private
 * @memberof Tiny
 */

var CanvasSpriteRenderer = function () {
  /**
   * @param {Tiny.WebGLRenderer} renderer -The renderer sprite this batch works for.
   */
  function CanvasSpriteRenderer(renderer) {
    _classCallCheck(this, CanvasSpriteRenderer);

    this.renderer = renderer;
  }

  /**
   * Renders the sprite object.
   *
   * @param {Tiny.Sprite} sprite - the sprite to render when using this spritebatch
   */


  _createClass(CanvasSpriteRenderer, [{
    key: 'render',
    value: function render(sprite) {
      var texture = sprite._texture;
      var renderer = this.renderer;

      var width = texture._frame.width;
      var height = texture._frame.height;

      var wt = sprite.transform.worldTransform;
      var dx = 0;
      var dy = 0;

      if (texture.orig.width <= 0 || texture.orig.height <= 0 || !texture.baseTexture.source) {
        return;
      }

      renderer.setBlendMode(sprite.blendMode);

      //  Ignore null sources
      if (texture.valid) {
        renderer.context.globalAlpha = sprite.worldAlpha;

        // If smoothingEnabled is supported and we need to change the smoothing property for sprite texture
        var smoothingEnabled = texture.baseTexture.scaleMode === _const.SCALE_MODES.LINEAR;

        if (renderer.smoothProperty && renderer.context[renderer.smoothProperty] !== smoothingEnabled) {
          renderer.context[renderer.smoothProperty] = smoothingEnabled;
        }

        if (texture.trim) {
          dx = texture.trim.width / 2 + texture.trim.x - sprite.anchor.x * texture.orig.width;
          dy = texture.trim.height / 2 + texture.trim.y - sprite.anchor.y * texture.orig.height;
        } else {
          dx = (0.5 - sprite.anchor.x) * texture.orig.width;
          dy = (0.5 - sprite.anchor.y) * texture.orig.height;
        }

        if (texture.rotate) {
          wt.copy(canvasRenderWorldTransform);
          wt = canvasRenderWorldTransform;
          _math.GroupD8.matrixAppendRotationInv(wt, texture.rotate, dx, dy);
          // the anchor has already been applied above, so lets set it to zero
          dx = 0;
          dy = 0;
        }

        dx -= width / 2;
        dy -= height / 2;

        // Allow for pixel rounding
        if (renderer.roundPixels) {
          renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * renderer.resolution | 0, wt.ty * renderer.resolution | 0);

          dx = dx | 0;
          dy = dy | 0;
        } else {
          renderer.context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.tx * renderer.resolution, wt.ty * renderer.resolution);
        }

        var resolution = texture.baseTexture.resolution;

        if (sprite.tint !== 0xFFFFFF) {
          if (sprite.cachedTint !== sprite.tint || sprite.tintedTexture.tintId !== sprite._texture._updateID) {
            sprite.cachedTint = sprite.tint;

            // TODO clean up caching - how to clean up the caches?
            sprite.tintedTexture = _CanvasTinter2.default.getTintedTexture(sprite, sprite.tint);
          }

          renderer.context.drawImage(sprite.tintedTexture, 0, 0, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
        } else {
          renderer.context.drawImage(texture.baseTexture.source, texture._frame.x * resolution, texture._frame.y * resolution, width * resolution, height * resolution, dx * renderer.resolution, dy * renderer.resolution, width * renderer.resolution, height * renderer.resolution);
        }
      }
    }

    /**
     * destroy the sprite object.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.renderer = null;
    }
  }]);

  return CanvasSpriteRenderer;
}();

exports.default = CanvasSpriteRenderer;


_CanvasRenderer2.default.registerPlugin('sprite', CanvasSpriteRenderer);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class
 * @memberof Tiny
 */
var Buffer = function () {
  /**
   * @param {number} size - The size of the buffer in bytes.
   */
  function Buffer(size) {
    _classCallCheck(this, Buffer);

    this.vertices = new ArrayBuffer(size);

    /**
     * View on the vertices as a Float32Array for positions
     *
     * @member {Float32Array}
     */
    this.float32View = new Float32Array(this.vertices);

    /**
     * View on the vertices as a Uint32Array for uvs
     *
     * @member {Float32Array}
     */
    this.uint32View = new Uint32Array(this.vertices);
  }

  /**
   * Destroys the buffer.
   *
   */


  _createClass(Buffer, [{
    key: "destroy",
    value: function destroy() {
      this.vertices = null;
      this.positions = null;
      this.uvs = null;
      this.colors = null;
    }
  }]);

  return Buffer;
}();

exports.default = Buffer;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _ObjectRenderer2 = __webpack_require__(16);

var _ObjectRenderer3 = _interopRequireDefault(_ObjectRenderer2);

var _WebGLRenderer = __webpack_require__(15);

var _WebGLRenderer2 = _interopRequireDefault(_WebGLRenderer);

var _createIndicesForQuads = __webpack_require__(64);

var _createIndicesForQuads2 = _interopRequireDefault(_createIndicesForQuads);

var _generateMultiTextureShader = __webpack_require__(121);

var _generateMultiTextureShader2 = _interopRequireDefault(_generateMultiTextureShader);

var _checkMaxIfStatmentsInShader = __webpack_require__(113);

var _checkMaxIfStatmentsInShader2 = _interopRequireDefault(_checkMaxIfStatmentsInShader);

var _BatchBuffer = __webpack_require__(119);

var _BatchBuffer2 = _interopRequireDefault(_BatchBuffer);

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

var _pixiGlCore = __webpack_require__(4);

var _pixiGlCore2 = _interopRequireDefault(_pixiGlCore);

var _bitTwiddle = __webpack_require__(19);

var _bitTwiddle2 = _interopRequireDefault(_bitTwiddle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TICK = 0;
var TEXTURE_TICK = 0;

/**
 * Renderer dedicated to drawing and batching sprites.
 *
 * @class
 * @private
 * @memberof Tiny
 * @extends Tiny.ObjectRenderer
 */

var SpriteRenderer = function (_ObjectRenderer) {
  _inherits(SpriteRenderer, _ObjectRenderer);

  /**
   * @param {Tiny.WebGLRenderer} renderer - The renderer this sprite batch works for.
   */
  function SpriteRenderer(renderer) {
    _classCallCheck(this, SpriteRenderer);

    /**
     * Number of values sent in the vertex buffer.
     * aVertexPosition(2), aTextureCoord(1), aColor(1), aTextureId(1) = 5
     *
     * @member {number}
     */
    var _this = _possibleConstructorReturn(this, (SpriteRenderer.__proto__ || Object.getPrototypeOf(SpriteRenderer)).call(this, renderer));

    _this.vertSize = 5;

    /**
     * The size of the vertex information in bytes.
     *
     * @member {number}
     */
    _this.vertByteSize = _this.vertSize * 4;

    /**
     * The number of images in the SpriteRenderer before it flushes.
     *
     * @member {number}
     */
    _this.size = _settings2.default.SPRITE_BATCH_SIZE; // 2000 is a nice balance between mobile / desktop

    // the total number of bytes in our batch
    // let numVerts = this.size * 4 * this.vertByteSize;

    _this.buffers = [];
    for (var i = 1; i <= _bitTwiddle2.default.nextPow2(_this.size); i *= 2) {
      _this.buffers.push(new _BatchBuffer2.default(i * 4 * _this.vertByteSize));
    }

    /**
     * Holds the indices of the geometry (quads) to draw
     *
     * @member {Uint16Array}
     */
    _this.indices = (0, _createIndicesForQuads2.default)(_this.size);

    /**
     * The default shaders that is used if a sprite doesn't have a more specific one.
     * there is a shader for each number of textures that can be rendererd.
     * These shaders will also be generated on the fly as required.
     * @member {Tiny.Shader[]}
     */
    _this.shader = null;

    _this.currentIndex = 0;
    _this.groups = [];

    for (var k = 0; k < _this.size; k++) {
      _this.groups[k] = { textures: [], textureCount: 0, ids: [], size: 0, start: 0, blend: 0 };
    }

    _this.sprites = [];

    _this.vertexBuffers = [];
    _this.vaos = [];

    _this.vaoMax = 2;
    _this.vertexCount = 0;

    _this.renderer.on('prerender', _this.onPrerender, _this);
    return _this;
  }

  /**
   * Sets up the renderer context and necessary buffers.
   *
   * @private
   */


  _createClass(SpriteRenderer, [{
    key: 'onContextChange',
    value: function onContextChange() {
      var gl = this.renderer.gl;

      if (this.renderer.legacy) {
        this.MAX_TEXTURES = 1;
      } else {
        // step 1: first check max textures the GPU can handle.
        this.MAX_TEXTURES = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), _settings2.default.SPRITE_MAX_TEXTURES);

        // step 2: check the maximum number of if statements the shader can have too..
        this.MAX_TEXTURES = (0, _checkMaxIfStatmentsInShader2.default)(this.MAX_TEXTURES, gl);
      }

      this.shader = (0, _generateMultiTextureShader2.default)(gl, this.MAX_TEXTURES);

      // create a couple of buffers
      this.indexBuffer = _pixiGlCore2.default.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);

      // we use the second shader as the first one depending on your browser may omit aTextureId
      // as it is not used by the shader so is optimized out.

      this.renderer.bindVao(null);

      var attrs = this.shader.attributes;

      for (var i = 0; i < this.vaoMax; i++) {
        /* eslint-disable max-len */
        var vertexBuffer = this.vertexBuffers[i] = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl, null, gl.STREAM_DRAW);
        /* eslint-enable max-len */

        // build the vao object that will render..
        var vao = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(vertexBuffer, attrs.aVertexPosition, gl.FLOAT, false, this.vertByteSize, 0).addAttribute(vertexBuffer, attrs.aTextureCoord, gl.UNSIGNED_SHORT, true, this.vertByteSize, 2 * 4).addAttribute(vertexBuffer, attrs.aColor, gl.UNSIGNED_BYTE, true, this.vertByteSize, 3 * 4);

        if (attrs.aTextureId) {
          vao.addAttribute(vertexBuffer, attrs.aTextureId, gl.FLOAT, false, this.vertByteSize, 4 * 4);
        }

        this.vaos[i] = vao;
      }

      this.vao = this.vaos[0];
      this.currentBlendMode = 99999;

      this.boundTextures = new Array(this.MAX_TEXTURES);
    }

    /**
     * Called before the renderer starts rendering.
     *
     */

  }, {
    key: 'onPrerender',
    value: function onPrerender() {
      this.vertexCount = 0;
    }

    /**
     * Renders the sprite object.
     *
     * @param {Tiny.Sprite} sprite - the sprite to render when using this spritebatch
     */

  }, {
    key: 'render',
    value: function render(sprite) {
      // TODO set blend modes..
      // check texture..
      if (this.currentIndex >= this.size) {
        this.flush();
      }

      // get the uvs for the texture

      // if the uvs have not updated then no point rendering just yet!
      if (!sprite._texture._uvs) {
        return;
      }

      // push a texture.
      // increment the batchsize
      this.sprites[this.currentIndex++] = sprite;
    }

    /**
     * Renders the content and empties the current batch.
     *
     */

  }, {
    key: 'flush',
    value: function flush() {
      if (this.currentIndex === 0) {
        return;
      }

      var gl = this.renderer.gl;
      var MAX_TEXTURES = this.MAX_TEXTURES;

      var np2 = _bitTwiddle2.default.nextPow2(this.currentIndex);
      var log2 = _bitTwiddle2.default.log2(np2);
      var buffer = this.buffers[log2];

      var sprites = this.sprites;
      var groups = this.groups;

      var float32View = buffer.float32View;
      var uint32View = buffer.uint32View;

      var boundTextures = this.boundTextures;
      var rendererBoundTextures = this.renderer.boundTextures;
      var touch = this.renderer.textureGC.count;

      var index = 0;
      var nextTexture = void 0;
      var currentTexture = void 0;
      var groupCount = 1;
      var textureCount = 0;
      var currentGroup = groups[0];
      var vertexData = void 0;
      var uvs = void 0;
      var blendMode = sprites[0].blendMode;

      currentGroup.textureCount = 0;
      currentGroup.start = 0;
      currentGroup.blend = blendMode;

      TICK++;

      var i = void 0;

      // copy textures..
      for (i = 0; i < MAX_TEXTURES; ++i) {
        boundTextures[i] = rendererBoundTextures[i];
        boundTextures[i]._virtalBoundId = i;
      }

      for (i = 0; i < this.currentIndex; ++i) {
        // upload the sprite elemetns...
        // they have all ready been calculated so we just need to push them into the buffer.
        var sprite = sprites[i];

        nextTexture = sprite._texture.baseTexture;

        if (blendMode !== sprite.blendMode) {
          // finish a group..
          blendMode = sprite.blendMode;

          // force the batch to break!
          currentTexture = null;
          textureCount = MAX_TEXTURES;
          TICK++;
        }

        if (currentTexture !== nextTexture) {
          currentTexture = nextTexture;

          if (nextTexture._enabled !== TICK) {
            if (textureCount === MAX_TEXTURES) {
              TICK++;

              currentGroup.size = i - currentGroup.start;

              textureCount = 0;

              currentGroup = groups[groupCount++];
              currentGroup.blend = blendMode;
              currentGroup.textureCount = 0;
              currentGroup.start = i;
            }

            nextTexture.touched = touch;

            if (nextTexture._virtalBoundId === -1) {
              for (var j = 0; j < MAX_TEXTURES; ++j) {
                var tIndex = (j + TEXTURE_TICK) % MAX_TEXTURES;

                var t = boundTextures[tIndex];

                if (t._enabled !== TICK) {
                  TEXTURE_TICK++;

                  t._virtalBoundId = -1;

                  nextTexture._virtalBoundId = tIndex;

                  boundTextures[tIndex] = nextTexture;
                  break;
                }
              }
            }

            nextTexture._enabled = TICK;

            currentGroup.textureCount++;
            currentGroup.ids[textureCount] = nextTexture._virtalBoundId;
            currentGroup.textures[textureCount++] = nextTexture;
          }
        }

        vertexData = sprite.vertexData;

        // TODO this sum does not need to be set each frame..
        uvs = sprite._texture._uvs.uvsUint32;

        if (this.renderer.roundPixels) {
          var resolution = this.renderer.resolution;

          // xy
          float32View[index] = (vertexData[0] * resolution | 0) / resolution;
          float32View[index + 1] = (vertexData[1] * resolution | 0) / resolution;

          // xy
          float32View[index + 5] = (vertexData[2] * resolution | 0) / resolution;
          float32View[index + 6] = (vertexData[3] * resolution | 0) / resolution;

          // xy
          float32View[index + 10] = (vertexData[4] * resolution | 0) / resolution;
          float32View[index + 11] = (vertexData[5] * resolution | 0) / resolution;

          // xy
          float32View[index + 15] = (vertexData[6] * resolution | 0) / resolution;
          float32View[index + 16] = (vertexData[7] * resolution | 0) / resolution;
        } else {
          // xy
          float32View[index] = vertexData[0];
          float32View[index + 1] = vertexData[1];

          // xy
          float32View[index + 5] = vertexData[2];
          float32View[index + 6] = vertexData[3];

          // xy
          float32View[index + 10] = vertexData[4];
          float32View[index + 11] = vertexData[5];

          // xy
          float32View[index + 15] = vertexData[6];
          float32View[index + 16] = vertexData[7];
        }

        uint32View[index + 2] = uvs[0];
        uint32View[index + 7] = uvs[1];
        uint32View[index + 12] = uvs[2];
        uint32View[index + 17] = uvs[3];

        /* eslint-disable max-len */
        uint32View[index + 3] = uint32View[index + 8] = uint32View[index + 13] = uint32View[index + 18] = sprite._tintRGB + (Math.min(sprite.worldAlpha, 1) * 255 << 24);

        float32View[index + 4] = float32View[index + 9] = float32View[index + 14] = float32View[index + 19] = nextTexture._virtalBoundId;
        /* eslint-enable max-len */

        index += 20;
      }

      currentGroup.size = i - currentGroup.start;

      if (!_settings2.default.CAN_UPLOAD_SAME_BUFFER) {
        // this is still needed for IOS performance..
        // it really does not like uploading to the same buffer in a single frame!
        if (this.vaoMax <= this.vertexCount) {
          this.vaoMax++;

          var attrs = this.shader.attributes;

          /* eslint-disable max-len */
          var vertexBuffer = this.vertexBuffers[this.vertexCount] = _pixiGlCore2.default.GLBuffer.createVertexBuffer(gl, null, gl.STREAM_DRAW);
          /* eslint-enable max-len */

          // build the vao object that will render..
          var vao = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(vertexBuffer, attrs.aVertexPosition, gl.FLOAT, false, this.vertByteSize, 0).addAttribute(vertexBuffer, attrs.aTextureCoord, gl.UNSIGNED_SHORT, true, this.vertByteSize, 2 * 4).addAttribute(vertexBuffer, attrs.aColor, gl.UNSIGNED_BYTE, true, this.vertByteSize, 3 * 4);

          if (attrs.aTextureId) {
            vao.addAttribute(vertexBuffer, attrs.aTextureId, gl.FLOAT, false, this.vertByteSize, 4 * 4);
          }

          this.vaos[this.vertexCount] = vao;
        }

        this.renderer.bindVao(this.vaos[this.vertexCount]);

        this.vertexBuffers[this.vertexCount].upload(buffer.vertices, 0, false);

        this.vertexCount++;
      } else {
        // lets use the faster option, always use buffer number 0
        this.vertexBuffers[this.vertexCount].upload(buffer.vertices, 0, true);
      }

      for (i = 0; i < MAX_TEXTURES; ++i) {
        rendererBoundTextures[i]._virtalBoundId = -1;
      }

      // render the groups..
      for (i = 0; i < groupCount; ++i) {
        var group = groups[i];
        var groupTextureCount = group.textureCount;

        for (var _j = 0; _j < groupTextureCount; _j++) {
          currentTexture = group.textures[_j];

          // reset virtual ids..
          // lets do a quick check..
          if (rendererBoundTextures[group.ids[_j]] !== currentTexture) {
            this.renderer.bindTexture(currentTexture, group.ids[_j], true);
          }

          // reset the virtualId..
          currentTexture._virtalBoundId = -1;
        }

        // set the blend mode..
        this.renderer.state.setBlendMode(group.blend);

        gl.drawElements(gl.TRIANGLES, group.size * 6, gl.UNSIGNED_SHORT, group.start * 6 * 2);
      }

      // reset elements for the next flush
      this.currentIndex = 0;
    }

    /**
     * Starts a new sprite batch.
     */

  }, {
    key: 'start',
    value: function start() {
      this.renderer.bindShader(this.shader);

      if (_settings2.default.CAN_UPLOAD_SAME_BUFFER) {
        // bind buffer #0, we don't need others
        this.renderer.bindVao(this.vaos[this.vertexCount]);

        this.vertexBuffers[this.vertexCount].bind();
      }
    }

    /**
     * Stops and flushes the current batch.
     *
     */

  }, {
    key: 'stop',
    value: function stop() {
      this.flush();
    }

    /**
     * Destroys the SpriteRenderer.
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      for (var i = 0; i < this.vaoMax; i++) {
        if (this.vertexBuffers[i]) {
          this.vertexBuffers[i].destroy();
        }
        if (this.vaos[i]) {
          this.vaos[i].destroy();
        }
      }

      if (this.indexBuffer) {
        this.indexBuffer.destroy();
      }

      this.renderer.off('prerender', this.onPrerender, this);

      _get(SpriteRenderer.prototype.__proto__ || Object.getPrototypeOf(SpriteRenderer.prototype), 'destroy', this).call(this);

      if (this.shader) {
        this.shader.destroy();
        this.shader = null;
      }

      this.vertexBuffers = null;
      this.vaos = null;
      this.indexBuffer = null;
      this.indices = null;

      this.sprites = null;

      for (var _i = 0; _i < this.buffers.length; ++_i) {
        this.buffers[_i].destroy();
      }
    }
  }]);

  return SpriteRenderer;
}(_ObjectRenderer3.default);

exports.default = SpriteRenderer;


_WebGLRenderer2.default.registerPlugin('sprite', SpriteRenderer);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = generateMultiTextureShader;

var _Shader = __webpack_require__(13);

var _Shader2 = _interopRequireDefault(_Shader);

var _path = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fragTemplate = ['varying vec2 vTextureCoord;', 'varying vec4 vColor;', 'varying float vTextureId;', 'uniform sampler2D uSamplers[%count%];', 'void main(void){', 'vec4 color;', 'float textureId = floor(vTextureId+0.5);', '%forloop%', 'gl_FragColor = color * vColor;', '}'].join('\n');

function generateMultiTextureShader(gl, maxTextures) {
  var vertexSrc = 'precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n';
  var fragmentSrc = fragTemplate;

  fragmentSrc = fragmentSrc.replace(/%count%/gi, maxTextures);
  fragmentSrc = fragmentSrc.replace(/%forloop%/gi, generateSampleSrc(maxTextures));

  var shader = new _Shader2.default(gl, vertexSrc, fragmentSrc);

  var sampleValues = [];

  for (var i = 0; i < maxTextures; i++) {
    sampleValues[i] = i;
  }

  shader.bind();
  shader.uniforms.uSamplers = sampleValues;

  return shader;
}

function generateSampleSrc(maxTextures) {
  var src = '';

  src += '\n';
  src += '\n';

  for (var i = 0; i < maxTextures; i++) {
    if (i > 0) {
      src += '\nelse ';
    }

    if (i < maxTextures - 1) {
      src += 'if(textureId == ' + i + '.0)';
    }

    src += '\n{';
    src += '\n\tcolor = texture2D(uSamplers[' + i + '], vTextureCoord);';
    src += '\n}';
  }

  src += '\n';
  src += '\n';

  return src;
}

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = __webpack_require__(5);

var _utils = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Utility class for maintaining reference to a collection
 * of Textures on a single Spritesheet.
 *
 * @class
 * @memberof Tiny
 */
var Spritesheet = function () {
  _createClass(Spritesheet, null, [{
    key: 'BATCH_SIZE',

    /**
     * The maximum number of Textures to build per process.
     *
     * @type {number}
     * @default 1000
     */
    get: function get() {
      return 1000;
    }

    /**
     * @param {Tiny.BaseTexture}  baseTexture         - Reference to the source BaseTexture object.
     * @param {Object}            data                - Spritesheet image data.
     * @param {string}            resolutionFilename  - The filename to consider when determining the resolution of the spritesheet. If not provided, the imageUrl will be used on the BaseTexture.
     */

  }]);

  function Spritesheet(baseTexture, data) {
    var resolutionFilename = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    _classCallCheck(this, Spritesheet);

    /**
     * Reference to ths source texture
     * @type {Tiny.BaseTexture}
     */
    this.baseTexture = baseTexture;

    /**
     * Map of spritesheet textures.
     * @type {Object}
     */
    this.textures = {};

    /**
     * Reference to the original JSON data.
     * @type {Object}
     */
    this.data = data;

    /**
     * The resolution of the spritesheet.
     * @type {number}
     */
    this.resolution = this._updateResolution(resolutionFilename || this.baseTexture.imageUrl);

    /**
     * Map of spritesheet frames.
     * @type {Object}
     * @private
     */
    this._frames = this.data.frames;

    /**
     * Collection of frame names.
     * @type {string[]}
     * @private
     */
    this._frameKeys = Object.keys(this._frames);

    /**
     * Current batch index being processed.
     * @type {number}
     * @private
     */
    this._batchIndex = 0;

    /**
     * Callback when parse is completed.
     * @type {Function}
     * @private
     */
    this._callback = null;
  }

  /**
   * Generate the resolution from the filename or fallback
   * to the meta.scale field of the JSON data.
   *
   * @private
   * @param {string} resolutionFilename - The filename to use for resolving
   *        the default resolution.
   * @return {number} Resolution to use for spritesheet.
   */


  _createClass(Spritesheet, [{
    key: '_updateResolution',
    value: function _updateResolution(resolutionFilename) {
      var scale = this.data.meta.scale;

      // Use a defaultValue of `null` to check if a url-based resolution is set
      var resolution = (0, _utils.getResolutionOfUrl)(resolutionFilename, null);

      // No resolution found via URL
      if (resolution === null) {
        // Use the scale value or default to 1
        resolution = scale !== undefined ? parseFloat(scale) : 1;
      }

      // For non-1 resolutions, update baseTexture
      if (resolution !== 1) {
        this.baseTexture.resolution = resolution;
        this.baseTexture.update();
      }

      return resolution;
    }

    /**
     * Parser spritesheet from loaded data. This is done asynchronously
     * to prevent creating too many Texture within a single process.
     *
     * @param {Function} callback - Callback when complete returns
     *        a map of the Textures for this spritesheet.
     */

  }, {
    key: 'parse',
    value: function parse(callback) {
      this._batchIndex = 0;
      this._callback = callback;

      if (this._frameKeys.length <= Spritesheet.BATCH_SIZE) {
        this._processFrames(0);
        this._parseComplete();
      } else {
        this._nextBatch();
      }
    }

    /**
     * Process a batch of frames
     *
     * @private
     * @param {number} initialFrameIndex - The index of frame to start.
     */

  }, {
    key: '_processFrames',
    value: function _processFrames(initialFrameIndex) {
      var frameIndex = initialFrameIndex;
      var maxFrames = Spritesheet.BATCH_SIZE;

      while (frameIndex - initialFrameIndex < maxFrames && frameIndex < this._frameKeys.length) {
        var i = this._frameKeys[frameIndex];
        var rect = this._frames[i].frame;

        if (rect) {
          var frame = null;
          var trim = null;
          var orig = new _.Rectangle(0, 0, this._frames[i].sourceSize.w / this.resolution, this._frames[i].sourceSize.h / this.resolution);

          if (this._frames[i].rotated) {
            frame = new _.Rectangle(rect.x / this.resolution, rect.y / this.resolution, rect.h / this.resolution, rect.w / this.resolution);
          } else {
            frame = new _.Rectangle(rect.x / this.resolution, rect.y / this.resolution, rect.w / this.resolution, rect.h / this.resolution);
          }

          //  Check to see if the sprite is trimmed
          if (this._frames[i].trimmed) {
            trim = new _.Rectangle(this._frames[i].spriteSourceSize.x / this.resolution, this._frames[i].spriteSourceSize.y / this.resolution, rect.w / this.resolution, rect.h / this.resolution);
          }

          this.textures[i] = new _.Texture(this.baseTexture, frame, orig, trim, this._frames[i].rotated ? 2 : 0);

          // lets also add the frame to pixi's global cache for fromFrame and fromImage functions
          _.Texture.addToCache(this.textures[i], i);
        }

        frameIndex++;
      }
    }

    /**
     * The parse has completed.
     *
     * @private
     */

  }, {
    key: '_parseComplete',
    value: function _parseComplete() {
      var callback = this._callback;

      this._callback = null;
      this._batchIndex = 0;
      callback.call(this, this.textures);
    }

    /**
     * Begin the next batch of textures.
     *
     * @private
     */

  }, {
    key: '_nextBatch',
    value: function _nextBatch() {
      var _this = this;

      this._processFrames(this._batchIndex * Spritesheet.BATCH_SIZE);
      this._batchIndex++;
      setTimeout(function () {
        if (_this._batchIndex * Spritesheet.BATCH_SIZE < _this._frameKeys.length) {
          _this._nextBatch();
        } else {
          _this._parseComplete();
        }
      }, 0);
    }

    /**
     * Destroy Spritesheet and don't use after this.
     *
     * @param {boolean} [destroyBase=false] Whether to destroy the base texture as well
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var destroyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      for (var i in this.textures) {
        this.textures[i].destroy();
      }
      this._frames = null;
      this._frameKeys = null;
      this.data = null;
      this.textures = null;
      if (destroyBase) {
        this.baseTexture.destroy();
      }
      this.baseTexture = null;
    }
  }]);

  return Spritesheet;
}();

exports.default = Spritesheet;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Matrix = __webpack_require__(24);

var _Matrix2 = _interopRequireDefault(_Matrix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tempMat = new _Matrix2.default();

/**
 * class controls uv transform and frame clamp for texture
 *
 * @class
 * @version 1.0.2
 * @memberof Tiny
 */

var TextureTransform = function () {
  /**
   *
   * @param {Tiny.Texture} texture observed texture
   * @param {number} [clampMargin] Changes frame clamping, 0.5 by default. Use -0.5 for extra border.
   * @constructor
   */
  function TextureTransform(texture, clampMargin) {
    _classCallCheck(this, TextureTransform);

    this._texture = texture;

    this.mapCoord = new _Matrix2.default();

    this.uClampFrame = new Float32Array(4);

    this.uClampOffset = new Float32Array(2);

    this._lastTextureID = -1;

    /**
     * Changes frame clamping
     * Works with TilingSprite and Mesh
     * Change to 1.5 if you texture has repeated right and bottom lines, that leads to smoother borders
     *
     * @default 0
     * @member {number}
     */
    this.clampOffset = 0;

    /**
     * Changes frame clamping
     * Works with TilingSprite and Mesh
     * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
     *
     * @default 0.5
     * @member {number}
     */
    this.clampMargin = typeof clampMargin === 'undefined' ? 0.5 : clampMargin;
  }

  /**
   * texture property
   * @member {Tiny.Texture}
   */


  _createClass(TextureTransform, [{
    key: 'multiplyUvs',


    /**
     * Multiplies uvs array to transform
     * @param {Float32Array} uvs mesh uvs
     * @param {Float32Array} [out=uvs] output
     * @returns {Float32Array} output
     */
    value: function multiplyUvs(uvs, out) {
      if (out === undefined) {
        out = uvs;
      }

      var mat = this.mapCoord;

      for (var i = 0; i < uvs.length; i += 2) {
        var x = uvs[i];
        var y = uvs[i + 1];

        out[i] = x * mat.a + y * mat.c + mat.tx;
        out[i + 1] = x * mat.b + y * mat.d + mat.ty;
      }

      return out;
    }

    /**
     * updates matrices if texture was changed
     * @param {boolean} forceUpdate if true, matrices will be updated any case
     * @returns {boolean} whether or not it was updated
     */

  }, {
    key: 'update',
    value: function update(forceUpdate) {
      var tex = this._texture;

      if (!tex || !tex.valid) {
        return false;
      }

      if (!forceUpdate && this._lastTextureID === tex._updateID) {
        return false;
      }

      this._lastTextureID = tex._updateID;

      var uvs = tex._uvs;

      this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);

      var orig = tex.orig;
      var trim = tex.trim;

      if (trim) {
        tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height, -trim.x / trim.width, -trim.y / trim.height);
        this.mapCoord.append(tempMat);
      }

      var texBase = tex.baseTexture;
      var frame = this.uClampFrame;
      var margin = this.clampMargin / texBase.resolution;
      var offset = this.clampOffset;

      frame[0] = (tex._frame.x + margin + offset) / texBase.width;
      frame[1] = (tex._frame.y + margin + offset) / texBase.height;
      frame[2] = (tex._frame.x + tex._frame.width - margin + offset) / texBase.width;
      frame[3] = (tex._frame.y + tex._frame.height - margin + offset) / texBase.height;
      this.uClampOffset[0] = offset / texBase.realWidth;
      this.uClampOffset[1] = offset / texBase.realHeight;

      return true;
    }
  }, {
    key: 'texture',
    get: function get() {
      return this._texture;
    },
    set: function set(value) {
      this._texture = value;
      this._lastTextureID = -1;
    }
  }]);

  return TextureTransform;
}();

exports.default = TextureTransform;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(3);

var _settings2 = _interopRequireDefault(_settings);

var _utils = __webpack_require__(1);

var utils = _interopRequireWildcard(_utils);

var _const = __webpack_require__(0);

var _TickerListener = __webpack_require__(125);

var _TickerListener2 = _interopRequireDefault(_TickerListener);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A Ticker class that runs an update loop that other objects listen to.
 * This class is composed around listeners meant for execution on the next requested animation frame.
 * Animation frames are requested only when necessary,
 * e.g. When the ticker is started and the emitter has listeners.
 *
 * @class
 * @memberof Tiny.ticker
 */
var Ticker = function () {
  /**
   *
   */
  function Ticker() {
    var _this = this;

    _classCallCheck(this, Ticker);

    /**
     * The first listener. All new listeners added are chained on this.
     * @private
     * @type {TickerListener}
     */
    this._head = new _TickerListener2.default(null, null, Infinity);

    /**
     * Internal current frame request ID
     * @private
     */
    this._requestId = null;

    /**
     * Internal value managed by minFPS property setter and getter.
     * This is the maximum allowed milliseconds between updates.
     * @private
     */
    this._maxElapsedMS = 100;

    /**
     * Whether or not this ticker should invoke the method {@link Tiny.ticker.Ticker#start} automatically when a listener is added.
     *
     * @member {boolean}
     * @default false
     */
    this.autoStart = false;

    /**
     * Scalar time value from last frame to this frame.
     * This value is capped by setting {@link Tiny.ticker.Ticker#minFPS} and is scaled with {@link Tiny.ticker.Ticker#speed}.
     * **Note:** The cap may be exceeded by scaling.
     *
     * @member {number}
     * @default 1
     */
    this.deltaTime = 1;

    /**
     * Time elapsed in milliseconds from last frame to this frame.
     * Opposed to what the scalar {@link Tiny.ticker.Ticker#deltaTime} is based, this value is neither capped nor scaled.
     * If the platform supports DOMHighResTimeStamp, this value will have a precision of 1 µs.
     * Defaults to target frame time
     *
     * @member {number}
     * @default 16.66
     */
    this.elapsedMS = 1 / _settings2.default.TARGET_FPMS;

    /**
     * The last time {@link Tiny.ticker.Ticker#update} was invoked.
     * This value is also reset internally outside of invoking update, but only when a new animation frame is requested.
     * If the platform supports DOMHighResTimeStamp, this value will have a precision of 1 µs.
     *
     * @member {number}
     * @default 0
     */
    this.lastTime = 0;

    /**
     * Factor of current {@link Tiny.ticker.Ticker#deltaTime}.
     * @example
     * // Scales ticker.deltaTime to what would be the equivalent of approximately 120 FPS
     * ticker.speed = 2;
     *
     * @member {number}
     * @default 1
     */
    this.speed = 1;

    /**
     * Whether or not this ticker has been started. `true` if {@link Tiny.ticker.Ticker#start} has been called. `false` if {@link Tiny.ticker.Ticker#stop} has been called.
     * While `false`, this value may change to `true` in the event of {@link Tiny.ticker.Ticker#autoStart} being `true`
     * and a listener is added.
     *
     * @member {boolean}
     * @default false
     */
    this.started = false;

    /**
     * Internal tick method bound to ticker instance.
     * This is because in early 2015, Function.bind
     * is still 60% slower in high performance scenarios.
     * Also separating frame requests from update method
     * so listeners may be called at any time and with
     * any animation API, just invoke ticker.update(time).
     *
     * @private
     * @param {number} time - Time since last tick.
     */
    this._tick = function (time) {
      _this._requestId = null;

      if (_this.started) {
        // Invoke listeners now
        _this.update(time);
        // Listener side effects may have modified ticker state.
        if (_this.started && _this._requestId === null && _this._head.next) {
          _this._requestId = requestAnimationFrame(_this._tick);
        }
      }
    };
  }

  /**
   * Conditionally requests a new animation frame.
   * If a frame has not already been requested, and if the internal
   * emitter has listeners, a new frame is requested.
   *
   * @private
   */


  _createClass(Ticker, [{
    key: '_requestIfNeeded',
    value: function _requestIfNeeded() {
      if (this._requestId === null && this._head.next) {
        // ensure callbacks get correct delta
        this.lastTime = performance.now();
        this._requestId = requestAnimationFrame(this._tick);
      }
    }

    /**
     * Conditionally cancels a pending animation frame.
     *
     * @private
     */

  }, {
    key: '_cancelIfNeeded',
    value: function _cancelIfNeeded() {
      if (this._requestId !== null) {
        cancelAnimationFrame(this._requestId);
        this._requestId = null;
      }
    }

    /**
     * Conditionally requests a new animation frame.
     * If the ticker has been started it checks if a frame has not already
     * been requested, and if the internal emitter has listeners. If these
     * conditions are met, a new frame is requested. If the ticker has not
     * been started, but autoStart is `true`, then the ticker starts now,
     * and continues with the previous conditions to request a new frame.
     *
     * @private
     */

  }, {
    key: '_startIfPossible',
    value: function _startIfPossible() {
      if (this.started) {
        this._requestIfNeeded();
      } else if (this.autoStart) {
        this.start();
      }
    }

    /**
     * Register a handler for tick events. Calls continuously unless
     * it is removed or the ticker is stopped.
     *
     * @param {Function} fn - The listener function to be added for updates
     * @param {Function} [context] - The listener context
     * @param {number} [priority=Tiny.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns {Tiny.ticker.Ticker} This instance of a ticker
     */

  }, {
    key: 'add',
    value: function add(fn, context) {
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const.UPDATE_PRIORITY.NORMAL;

      return this._addListener(new _TickerListener2.default(fn, context, priority));
    }

    /**
     * Add a handler for the tick event which is only execute once.
     *
     * @param {Function} fn - The listener function to be added for one update
     * @param {Function} [context] - The listener context
     * @param {number} [priority=Tiny.UPDATE_PRIORITY.NORMAL] - The priority for emitting
     * @returns {Tiny.ticker.Ticker} This instance of a ticker
     */

  }, {
    key: 'addOnce',
    value: function addOnce(fn, context) {
      var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _const.UPDATE_PRIORITY.NORMAL;

      return this._addListener(new _TickerListener2.default(fn, context, priority, true));
    }

    /**
     * Internally adds the event handler so that it can be sorted by priority.
     * Priority allows certain handler (user, AnimatedSprite, Interaction) to be run
     * before the rendering.
     *
     * @private
     * @param {TickerListener} listener - Current listener being added.
     * @returns {Tiny.ticker.Ticker} This instance of a ticker
     */

  }, {
    key: '_addListener',
    value: function _addListener(listener) {
      // For attaching to head
      var current = this._head.next;
      var previous = this._head;

      // Add the first item
      if (!current) {
        listener.connect(previous);
      } else {
        // Go from highest to lowest priority
        while (current) {
          if (listener.priority > current.priority) {
            listener.connect(previous);
            break;
          }
          previous = current;
          current = current.next;
        }

        // Not yet connected
        if (!listener.previous) {
          listener.connect(previous);
        }
      }

      this._startIfPossible();

      return this;
    }

    /**
     * Removes any handlers matching the function and context parameters.
     * If no handlers are left after removing, then it cancels the animation frame.
     *
     * @param {Function} fn - The listener function to be removed
     * @param {Function} [context] - The listener context to be removed
     * @returns {Tiny.ticker.Ticker} This instance of a ticker
     */

  }, {
    key: 'remove',
    value: function remove(fn, context) {
      var listener = this._head.next;

      while (listener) {
        // We found a match, lets remove it
        // no break to delete all possible matches
        // incase a listener was added 2+ times
        if (listener.match(fn, context)) {
          listener = listener.destroy();
        } else {
          listener = listener.next;
        }
      }

      if (!this._head.next) {
        this._cancelIfNeeded();
      }

      return this;
    }

    /**
     * Starts the ticker. If the ticker has listeners
     * a new animation frame is requested at this point.
     */

  }, {
    key: 'start',
    value: function start() {
      if (!this.started) {
        this.started = true;
        this._requestIfNeeded();
      }
    }

    /**
     * Stops the ticker. If the ticker has requested
     * an animation frame it is canceled at this point.
     */

  }, {
    key: 'stop',
    value: function stop() {
      if (this.started) {
        this.started = false;
        this._cancelIfNeeded();
      }
    }

    /**
     * Destroy the ticker and don't use after this. Calling
     * this method removes all references to internal events.
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.stop();

      var listener = this._head.next;

      while (listener) {
        listener = listener.destroy(true);
      }

      this._head.destroy();
      this._head = null;
    }

    /**
     * 定时触发
     *
     * @example
     *
     * Tiny.ticker.shared.countDown({
     *   duration: 5e3,
     *   callback: function () {
     *     console.log('每五秒打印一次，共打印三次');
     *   },
     *   times: 3,
     *   complete: function () {
     *     console.log('Done');
     *   }
     * });
     *
     * @example
     *
     * var ticker = new Tiny.ticker.Ticker();
     * ticker.countDown({
     *   duration: 3e3,
     *   callback: function () {
     *     console.log('每三秒打印一次');
     *   }
     * });
     * ticker.start();
     *
     * @version 1.0.2
     * @param {object}    opts
     * @param {number}    opts.duration   - 间隔时长（单位：ms）
     * @param {function}  opts.callback
     * @param {number}    opts.times      - 次数，不传即无限次
     * @param {function}  opts.complete   - 完成后的回调
     */

  }, {
    key: 'countDown',
    value: function countDown(opts) {
      var duration = opts.duration || 1e3;
      var times = opts.times || Infinity;
      var callback = opts.callback || function () {};
      var complete = opts.complete || function () {};
      var start = utils.getTime();
      var count = 0;
      var self = this;
      var fn = function fn(time) {
        if (count >= times) {
          self.remove(fn);
          complete(time);
          return;
        }
        if (utils.getTime() - start >= duration) {
          callback(time);
          start += duration;
          count++;
        }
      };
      this.add(fn);
    }

    /**
     * Triggers an update. An update entails setting the
     * current {@link Tiny.ticker.Ticker#elapsedMS},
     * the current {@link Tiny.ticker.Ticker#deltaTime},
     * invoking all listeners with current deltaTime,
     * and then finally setting {@link Tiny.ticker.Ticker#lastTime}
     * with the value of currentTime that was provided.
     * This method will be called automatically by animation
     * frame callbacks if the ticker instance has been started
     * and listeners are added.
     *
     * @param {number} [currentTime=performance.now()] - the current time of execution
     */

  }, {
    key: 'update',
    value: function update() {
      var currentTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : performance.now();

      var elapsedMS = void 0;

      // If the difference in time is zero or negative, we ignore most of the work done here.
      // If there is no valid difference, then should be no reason to let anyone know about it.
      // A zero delta, is exactly that, nothing should update.
      //
      // The difference in time can be negative, and no this does not mean time traveling.
      // This can be the result of a race condition between when an animation frame is requested
      // on the current JavaScript engine event loop, and when the ticker's start method is invoked
      // (which invokes the internal _requestIfNeeded method). If a frame is requested before
      // _requestIfNeeded is invoked, then the callback for the animation frame the ticker requests,
      // can receive a time argument that can be less than the lastTime value that was set within
      // _requestIfNeeded. This difference is in microseconds, but this is enough to cause problems.
      //
      // This check covers this browser engine timing issue, as well as if consumers pass an invalid
      // currentTime value. This may happen if consumers opt-out of the autoStart, and update themselves.
      if (currentTime > this.lastTime) {
        // Save uncapped elapsedMS for measurement
        elapsedMS = this.elapsedMS = currentTime - this.lastTime;

        // cap the milliseconds elapsed used for deltaTime
        if (elapsedMS > this._maxElapsedMS) {
          elapsedMS = this._maxElapsedMS;
        }

        this.deltaTime = elapsedMS * _settings2.default.TARGET_FPMS * this.speed;

        // Cache a local reference, in-case ticker is destroyed
        // during the emit, we can still check for head.next
        var head = this._head;

        // Invoke listeners added to internal emitter
        var listener = head.next;

        while (listener) {
          listener = listener.emit(this.deltaTime);
        }

        if (!head.next) {
          this._cancelIfNeeded();
        }
      } else {
        this.deltaTime = this.elapsedMS = 0;
      }

      this.lastTime = currentTime;
    }

    /**
     * The frames per second at which this ticker is running.
     * The default is approximately 60 in most modern browsers.
     * **Note:** This does not factor in the value of
     * {@link Tiny.ticker.Ticker#speed}, which is specific
     * to scaling {@link Tiny.ticker.Ticker#deltaTime}.
     *
     * @member {number}
     * @readonly
     */

  }, {
    key: 'FPS',
    get: function get() {
      return 1000 / this.elapsedMS;
    }

    /**
     * Manages the maximum amount of milliseconds allowed to
     * elapse between invoking {@link Tiny.ticker.Ticker#update}.
     * This value is used to cap {@link Tiny.ticker.Ticker#deltaTime},
     * but does not effect the measured value of {@link Tiny.ticker.Ticker#FPS}.
     * When setting this property it is clamped to a value between
     * `0` and `Tiny.settings.TARGET_FPMS * 1000`.
     *
     * @member {number}
     * @default 10
     */

  }, {
    key: 'minFPS',
    get: function get() {
      return 1000 / this._maxElapsedMS;
    },
    set: function set(fps) {
      // Clamp: 0 to TARGET_FPMS
      var minFPMS = Math.min(Math.max(0, fps) / 1000, _settings2.default.TARGET_FPMS);

      this._maxElapsedMS = 1 / minFPMS;
    }
  }]);

  return Ticker;
}();

exports.default = Ticker;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Internal class for handling the priority sorting of ticker handlers.
 *
 * @private
 * @class
 * @memberof Tiny.ticker
 */
var TickerListener = function () {
  /**
   * Constructor
   *
   * @param {Function}  fn              - The listener function to be added for one update
   * @param {Function}  [context=null]  - The listener context
   * @param {number}    [priority=0]    - The priority for emitting
   * @param {boolean}   [once=false]    - If the handler should fire once
   */
  function TickerListener(fn) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var once = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck(this, TickerListener);

    /**
     * The handler function to execute.
     * @member {Function}
     */
    this.fn = fn;

    /**
     * The calling to execute.
     * @member {Function}
     */
    this.context = context;

    /**
     * The current priority.
     * @member {number}
     */
    this.priority = priority;

    /**
     * If this should only execute once.
     * @member {boolean}
     */
    this.once = once;

    /**
     * The next item in chain.
     * @member {TickerListener}
     */
    this.next = null;

    /**
     * The previous item in chain.
     * @member {TickerListener}
     */
    this.previous = null;

    /**
     * `true` if this listener has been destroyed already.
     * @member {boolean}
     * @private
     */
    this._destroyed = false;
  }

  /**
   * Simple compare function to figure out if a function and context match.
   *
   * @param {Function}  fn       - The listener function to be added for one update
   * @param {Function}  context  - The listener context
   * @return {boolean} `true` if the listener match the arguments
   */


  _createClass(TickerListener, [{
    key: "match",
    value: function match(fn, context) {
      context = context || null;

      return this.fn === fn && this.context === context;
    }

    /**
     * Emit by calling the current function.
     * @param {number}  deltaTime - time since the last emit.
     * @return {TickerListener} Next ticker
     */

  }, {
    key: "emit",
    value: function emit(deltaTime) {
      if (this.fn) {
        if (this.context) {
          this.fn.call(this.context, deltaTime);
        } else {
          this.fn(deltaTime);
        }
      }

      var redirect = this.next;

      if (this.once) {
        this.destroy(true);
      }

      // Soft-destroying should remove
      // the next reference
      if (this._destroyed) {
        this.next = null;
      }

      return redirect;
    }

    /**
     * Connect to the list.
     * @param {TickerListener}  previous - Input node, previous listener
     */

  }, {
    key: "connect",
    value: function connect(previous) {
      this.previous = previous;
      if (previous.next) {
        previous.next.previous = this;
      }
      this.next = previous.next;
      previous.next = this;
    }

    /**
     * Destroy and don't use after this.
     * @param {boolean} [hard = false]  - `true` to remove the `next` reference, this is considered a hard destroy. Soft destroy maintains the next reference.
     * @return {TickerListener} The listener to redirect while emitting or removing.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._destroyed = true;
      this.fn = null;
      this.context = null;

      // Disconnect, hook up next and previous
      if (this.previous) {
        this.previous.next = this.next;
      }

      if (this.next) {
        this.next.previous = this.previous;
      }

      // Redirect to the next item
      var redirect = this.previous;

      // Remove references
      this.next = hard ? null : redirect;
      this.previous = null;

      return redirect;
    }
  }]);

  return TickerListener;
}();

exports.default = TickerListener;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canUploadSameBuffer;
function canUploadSameBuffer() {
  // Uploading the same buffer multiple times in a single frame can cause perf issues.
  // Apparent on IOS so only check for that at the moment
  // this check may become more complex if this issue pops up elsewhere.
  var ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  return !ios;
}

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rectContainsRect = rectContainsRect;
exports.rectGetMaxX = rectGetMaxX;
exports.rectGetMidX = rectGetMidX;
exports.rectGetMinX = rectGetMinX;
exports.rectGetMaxY = rectGetMaxY;
exports.rectGetMidY = rectGetMidY;
exports.rectGetMinY = rectGetMinY;
exports.rectContainsPoint = rectContainsPoint;
exports.rectIntersectsRect = rectIntersectsRect;
exports.rectUnion = rectUnion;
exports.isPixelCollision = isPixelCollision;

var _math = __webpack_require__(2);

/**
 *
 * 检测一个显示对象是否在另一个显示对象内部
 *
 * ![rectContainsRect](http://tfs.alipayobjects.com/images/rmsweb/T1hoXgXXNfXXXXXXXX.png)
 *
 * 注意：边缘重叠始终返回fasle
 *
 * @example
 *
 * var rect1 = new Tiny.Rectangle(10, 10, 100, 100);
 * var rect2 = new Tiny.Rectangle(30, 30, 50, 50);
 * Tiny.rectContainsRect(rect1, rect2);
 * //=> true
 *
 * @static
 * @memberof Tiny
 * @function rectContainsRect
 * @param {Tiny.Rectangle}  rect1
 * @param {Tiny.Rectangle}  rect2
 * @return {boolean}
 */
function rectContainsRect(rect1, rect2) {
  if (!rect1 || !rect2) {
    return false;
  }

  return !(rect1.x >= rect2.x || rect1.y >= rect2.y || rect1.x + rect1.width <= rect2.x + rect2.width || rect1.y + rect1.height <= rect2.y + rect2.height);
}

/**
 * 获取显示对象的横向最大值
 *
 * @static
 * @memberof Tiny
 * @function rectGetMaxX
 * @param {Tiny.Rectangle}  rect
 * @return {number}
 */
function rectGetMaxX(rect) {
  return rect.x + rect.width;
}

/**
 * 获取显示对象的横向中心值
 *
 * @static
 * @memberof Tiny
 * @function rectGetMidX
 * @param {Tiny.Rectangle}  rect
 * @return {number}
 */
function rectGetMidX(rect) {
  return rect.x + rect.width / 2.0;
}

/**
 * 获取显示对象的横向最小值
 *
 * @static
 * @memberof Tiny
 * @function rectGetMinX
 * @param {Tiny.Rectangle}  rect
 * @return {number}
 */
function rectGetMinX(rect) {
  return rect.x;
}

/**
 * 获取显示对象的纵向最大值
 *
 * @static
 * @memberof Tiny
 * @function rectGetMaxY
 * @param {Tiny.Rectangle}  rect
 * @return {number}
 */
function rectGetMaxY(rect) {
  return rect.y + rect.height;
}

/**
 * 获取显示对象的纵向中心值
 *
 * @static
 * @memberof Tiny
 * @function rectGetMidY
 * @param {Tiny.Rectangle}  rect
 * @return {number}
 */
function rectGetMidY(rect) {
  return rect.y + rect.height / 2.0;
}

/**
 * 获取显示对象的纵向最小值
 *
 * @static
 * @memberof Tiny
 * @function rectGetMinY
 * @param {Tiny.Rectangle}  rect
 * @return {number}
 */
function rectGetMinY(rect) {
  return rect.y;
}

/**
 * 检测一个点是否在一个显示对象内部
 *
 * ![rectContainsPoint](http://tfs.alipayobjects.com/images/rmsweb/T1GENgXkRaXXXXXXXX.png)
 *
 * 注意：边缘重叠始终返回fasle
 *
 * @example
 *
 * var rect = new Tiny.Rectangle(10, 10, 50, 50);
 * var p = new Tiny.Point(49, 62);
 * Tiny.rectContainsPoint(rect, p);
 * //=> true
 *
 * @static
 * @memberof Tiny
 * @function rectContainsPoint
 * @param {Tiny.Rectangle}  rect
 * @param {Tiny.Point}      point
 * @return {boolean}
 */
function rectContainsPoint(rect, point) {
  return point.x >= rectGetMinX(rect) && point.x <= rectGetMaxX(rect) && point.y >= rectGetMinY(rect) && point.y <= rectGetMaxY(rect);
}

/**
 * 检测两个显示对象是否相交，一般用于检测碰撞
 *
 * ![rectIntersectsRect](http://tfs.alipayobjects.com/images/rmsweb/T18.hgXoddXXXXXXXX.png)
 *
 * 注意：边缘重叠始终返回true
 *
 * @example
 *
 * var rect1 = new Tiny.Rectangle(10, 10, 50, 50);
 * var rect2 = new Tiny.Rectangle(50, 30, 50, 50);
 * Tiny.rectIntersectsRect(rect1, rect2);
 * //=> true
 *
 * @static
 * @memberof Tiny
 * @function rectIntersectsRect
 * @param {Tiny.Rectangle}  rectA
 * @param {Tiny.Rectangle}  rectB
 * @return {boolean}
 */
function rectIntersectsRect(rectA, rectB) {
  return !(rectGetMaxX(rectA) < rectGetMinX(rectB) || rectGetMaxX(rectB) < rectGetMinX(rectA) || rectGetMaxY(rectA) < rectGetMinY(rectB) || rectGetMaxY(rectB) < rectGetMinY(rectA));
}

/**
 * 返回两个显示对象的总区域
 *
 * ![rectUnion](http://tfs.alipayobjects.com/images/rmsweb/T1JD4gXhlfXXXXXXXX.png)
 *
 * @example
 *
 * var rect1 = new Tiny.Rectangle(10, 10, 50, 50);
 * var rect2 = new Tiny.Rectangle(33, 34, 50, 50);
 * Tiny.rectUnion(rect1, rect2);
 * //=> Tiny.Rectangle(10, 10, 73, 74)
 *
 * @static
 * @memberof Tiny
 * @function rectUnion
 * @param {Tiny.Rectangle}  rectA
 * @param {Tiny.Rectangle}  rectB
 * @return {Tiny.Rectangle}
 */
function rectUnion(rectA, rectB) {
  var rect = _math.Rectangle.EMPTY;
  rect.x = Math.min(rectA.x, rectB.x);
  rect.y = Math.min(rectA.y, rectB.y);
  rect.width = Math.max(rectA.x + rectA.width, rectB.x + rectB.width) - rect.x;
  rect.height = Math.max(rectA.y + rectA.height, rectB.y + rectB.height) - rect.y;
  return rect;
}

/**
 * 像素检测判断是否碰撞
 *
 * Tiny.js 的这个方法用于JavaScript HTML5 Canvas Image 纯像素级的碰撞检测。
 * 作者是：JOE
 *
 * @see http://www.playmycode.com/blog/2011/08/javascript-per-pixel-html5-canvas-image-collision-detection/
 *
 * @static
 * @memberof Tiny
 * @function isPixelCollision
 * @param {Tiny.DisplayObject}  first
 * @param {number}              x
 * @param {number}              y
 * @param {boolean}             isFirstCentred
 * @param {Tiny.DisplayObject}  other
 * @param {number}              x2
 * @param {number}              y2
 * @param {boolean}             isOtherCentred
 * @return {boolean}
 */
function isPixelCollision(first, x, y, isFirstCentred, other, x2, y2, isOtherCentred) {
  // we need to avoid using floats, as were doing array lookups
  x = Math.round(x);
  y = Math.round(y);
  x2 = Math.round(x2);
  y2 = Math.round(y2);

  var w = first.collisionWidth || first.width;
  var h = first.collisionHeight || first.height;
  var w2 = other.collisionWidth || other.width;
  var h2 = other.collisionHeight || other.height;

  // deal with the image being centred
  if (isFirstCentred) {
    // fast rounding, but positive only
    x -= w / 2 + 0.5 << 0;
    y -= h / 2 + 0.5 << 0;
  }
  if (isOtherCentred) {
    x2 -= w2 / 2 + 0.5 << 0;
    y2 -= h2 / 2 + 0.5 << 0;
  }

  // find the top left and bottom right corners of overlapping area
  var xMin = Math.max(x, x2);
  var yMin = Math.max(y, y2);
  var xMax = Math.min(x + w, x2 + w2);
  var yMax = Math.min(y + h, y2 + h2);

  // Sanity collision check, we ensure that the top-left corner is both
  // above and to the left of the bottom-right corner.
  if (xMin >= xMax || yMin >= yMax) {
    return false;
  }

  var xDiff = xMax - xMin;
  var yDiff = yMax - yMin;

  // get the pixels out from the images
  var pixels = first.data;
  var pixels2 = other.data;

  if (!pixels || !pixels2) {
    throw new Error('The Sprit\'s data cannot be null' + (!pixels && ', first.data is ' + pixels) + (!pixels2 && ', other.data is ' + pixels2 + '.')); // eslint-disable-line
  }

  // if the area is really small,
  // then just perform a normal image collision check
  if (xDiff < 4 && yDiff < 4) {
    for (var pixelX = xMin; pixelX < xMax; pixelX++) {
      for (var pixelY = yMin; pixelY < yMax; pixelY++) {
        if (pixels[(pixelX - x + (pixelY - y) * w) * 4 + 3] !== 0 && pixels2[(pixelX - x2 + (pixelY - y2) * w2) * 4 + 3] !== 0) {
          return true;
        }
      }
    }
  } else {
    /* What is this doing?
     * It is iterating over the overlapping area,
     * across the x then y the,
     * checking if the pixels are on top of this.
     *
     * What is special is that it increments by incX or incY,
     * allowing it to quickly jump across the image in large increments
     * rather then slowly going pixel by pixel.
     *
     * This makes it more likely to find a colliding pixel early.
     */

    // Work out the increments,
    // it's a third, but ensure we don't get a tiny
    // slither of an area for the last iteration (using fast ceil).
    var incX = xDiff / 3.0;
    var incY = yDiff / 3.0;
    incX = ~~incX === incX ? incX : incX + 1 | 0;
    incY = ~~incY === incY ? incY : incY + 1 | 0;

    for (var offsetY = 0; offsetY < incY; offsetY++) {
      for (var offsetX = 0; offsetX < incX; offsetX++) {
        for (var _pixelY = yMin + offsetY; _pixelY < yMax; _pixelY += incY) {
          for (var _pixelX = xMin + offsetX; _pixelX < xMax; _pixelX += incX) {
            if (pixels[(_pixelX - x + (_pixelY - y) * w) * 4 + 3] !== 0 && pixels2[(_pixelX - x2 + (_pixelY - y2) * w2) * 4 + 3] !== 0) {
              return true;
            }
          }
        }
      }
    }
  }

  return false;
}

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = determineCrossOrigin;

var _url2 = __webpack_require__(70);

var _url3 = _interopRequireDefault(_url2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tempAnchor = void 0;

/**
 * Sets the `crossOrigin` property for this resource based on if the url
 * for this resource is cross-origin. If crossOrigin was manually set, this
 * function does nothing.
 * Nipped from the resource loader!
 *
 * @ignore
 * @param {string} url - The url to test.
 * @param {object} [loc=window.location] - The location object to test against.
 * @return {string} The crossOrigin value to use (or empty string for none).
 */
function determineCrossOrigin(url) {
  var loc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location;

  // data: and javascript: urls are considered same-origin
  if (url.indexOf('data:') === 0) {
    return '';
  }

  // default is window.location
  loc = loc || window.location;

  if (!tempAnchor) {
    tempAnchor = document.createElement('a');
  }

  // let the browser determine the full href for the url of this resource and then
  // parse with the node url lib, we can't use the properties of the anchor element
  // because they don't work in IE9 :(
  tempAnchor.href = url;
  url = _url3.default.parse(tempAnchor.href);

  var samePort = !url.port && loc.port === '' || url.port === loc.port;

  // if cross origin
  if (url.hostname !== loc.hostname || !samePort || url.protocol !== loc.protocol) {
    return 'anonymous';
  }

  return '';
}

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = maxRecommendedTextures;

var _ismobilejs = __webpack_require__(18);

var _ismobilejs2 = _interopRequireDefault(_ismobilejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function maxRecommendedTextures(max) {
  if (_ismobilejs2.default.tablet || _ismobilejs2.default.phone) {
    // check if the res is iphone 6 or higher..
    return 4;
  }

  // desktop should be ok
  return max;
}

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = mixin;
exports.delayMixin = delayMixin;
exports.performMixins = performMixins;
/**
 * Mixes all enumerable properties and methods from a source object to a target object.
 *
 * @memberof Tiny.mixins
 * @function mixin
 * @param {object} target - The prototype or instance that properties and methods should be added to.
 * @param {object} source - The source of properties and methods to mix in.
 */
function mixin(target, source) {
  if (!target || !source) return;
  // in ES8/ES2017, this would be really easy:
  // Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));

  // get all the enumerable property keys
  var keys = Object.keys(source);

  // loop through properties
  for (var i = 0; i < keys.length; ++i) {
    var propertyName = keys[i];

    // Set the property using the property descriptor - this works for accessors and normal value properties
    Object.defineProperty(target, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
  }
}

var mixins = [];

/**
 * Queues a mixin to be handled towards the end of the initialization of Tiny, so that deprecation
 * can take effect.
 *
 * @memberof Tiny.mixins
 * @function delayMixin
 * @private
 * @param {object} target - The prototype or instance that properties and methods should be added to.
 * @param {object} source - The source of properties and methods to mix in.
 */
function delayMixin(target, source) {
  mixins.push(target, source);
}

/**
 * Handles all mixins queued via delayMixin().
 *
 * @memberof Tiny.mixins
 * @function performMixins
 * @private
 */
function performMixins() {
  for (var i = 0; i < mixins.length; i += 2) {
    mixin(mixins[i], mixins[i + 1]);
  }
  mixins.length = 0;
}

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Mixins functionality to make an object have "plugins".
 *
 * @example
 *  function MyObject() {}
 *
 *  pluginTarget.mixin(MyObject);
 *
 * @mixin
 * @memberof Tiny
 * @param {object}  obj  - The object to mix into.
 */
function pluginTarget(obj) {
  obj.__plugins = {};

  /**
   * Adds a plugin to an object
   *
   * @param {string}    pluginName - The events that should be listed.
   * @param {Function}  ctor - The constructor function for the plugin.
   */
  obj.registerPlugin = function registerPlugin(pluginName, ctor) {
    obj.__plugins[pluginName] = ctor;
  };

  /**
   * Instantiates all the plugins of this object
   *
   */
  obj.prototype.initPlugins = function initPlugins() {
    this.plugins = this.plugins || {};

    for (var o in obj.__plugins) {
      this.plugins[o] = new obj.__plugins[o](this);
    }
  };

  /**
   * Removes all the plugins of this object
   *
   */
  obj.prototype.destroyPlugins = function destroyPlugins() {
    for (var o in this.plugins) {
      this.plugins[o].destroy();
      this.plugins[o] = null;
    }

    this.plugins = null;
  };
}

exports.default = {
  /**
   * Mixes in the properties of the pluginTarget into another object
   *
   * @param {object}  obj  - The obj to mix into
   */
  mixin: function mixin(obj) {
    pluginTarget(obj);
  }
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trimCanvas;
/**
 * Trim transparent borders from a canvas
 *
 * @memberof Tiny
 * @function trimCanvas
 * @private
 * @param {HTMLCanvasElement} canvas  - the canvas to trim
 * @returns {object} Trim data
 */
function trimCanvas(canvas) {
  // https://gist.github.com/remy/784508

  var width = canvas.width;
  var height = canvas.height;

  var context = canvas.getContext('2d');
  var imageData = context.getImageData(0, 0, width, height);
  var pixels = imageData.data;
  var len = pixels.length;

  var bound = {
    top: null,
    left: null,
    right: null,
    bottom: null
  };
  var i = void 0;
  var x = void 0;
  var y = void 0;

  for (i = 0; i < len; i += 4) {
    if (pixels[i + 3] !== 0) {
      x = i / 4 % width;
      y = ~~(i / 4 / width);

      if (bound.top === null) {
        bound.top = y;
      }

      if (bound.left === null) {
        bound.left = x;
      } else if (x < bound.left) {
        bound.left = x;
      }

      if (bound.right === null) {
        bound.right = x + 1;
      } else if (bound.right < x) {
        bound.right = x + 1;
      }

      if (bound.bottom === null) {
        bound.bottom = y;
      } else if (bound.bottom < y) {
        bound.bottom = y;
      }
    }
  }

  width = bound.right - bound.left;
  height = bound.bottom - bound.top + 1;

  var data = context.getImageData(bound.left, bound.top, width, height);

  return {
    height: height,
    width: width,
    data: data
  };
}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Event class that mimics native DOM events.
 *
 * @class
 * @memberof Tiny.interaction
 * @private
 */
var InteractionEvent = function () {
  /**
   *
   */
  function InteractionEvent() {
    _classCallCheck(this, InteractionEvent);

    /**
     * Whether this event will continue propagating in the tree
     *
     * @member {boolean}
     */
    this.stopped = false;

    /**
     * The object which caused this event to be dispatched.
     * For listener callback see {@link Tiny.interaction.InteractionEvent.currentTarget}.
     *
     * @member {Tiny.DisplayObject}
     */
    this.target = null;

    /**
     * The object whose event listener’s callback is currently being invoked.
     *
     * @member {Tiny.DisplayObject}
     */
    this.currentTarget = null;

    /**
     * Type of the event
     *
     * @member {string}
     */
    this.type = null;

    /**
     * InteractionData related to this event
     *
     * @member {Tiny.interaction.InteractionData}
     */
    this.data = null;
  }

  /**
   * Prevents event from reaching any objects other than the current object.
   *
   */


  _createClass(InteractionEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this.stopped = true;
    }

    /**
     * Prevents event from reaching any objects other than the current object.
     *
     * @private
     */

  }, {
    key: "_reset",
    value: function _reset() {
      this.stopped = false;
      this.currentTarget = null;
      this.target = null;
    }
  }]);

  return InteractionEvent;
}();

exports.default = InteractionEvent;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _core = __webpack_require__(5);

var core = _interopRequireWildcard(_core);

var _InteractionData = __webpack_require__(65);

var _InteractionData2 = _interopRequireDefault(_InteractionData);

var _InteractionEvent = __webpack_require__(133);

var _InteractionEvent2 = _interopRequireDefault(_InteractionEvent);

var _InteractionTrackingData = __webpack_require__(135);

var _InteractionTrackingData2 = _interopRequireDefault(_InteractionTrackingData);

var _eventemitter = __webpack_require__(6);

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _interactiveTarget = __webpack_require__(66);

var _interactiveTarget2 = _interopRequireDefault(_interactiveTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Mix interactiveTarget into core.DisplayObject.prototype, after deprecation has been handled
core.mixins.delayMixin(core.DisplayObject.prototype, _interactiveTarget2.default);

var MOUSE_POINTER_ID = 'MOUSE';

// helpers for hitTest() - only used inside hitTest()
var hitTestEvent = {
  target: null,
  data: {
    global: null
  }
};

/**
 * The interaction manager deals with mouse, touch and pointer events. Any DisplayObject can be interactive
 * if its interactive parameter is set to true
 * This manager also supports multitouch.
 *
 * An instance of this class is automatically created by default, and can be found at renderer.plugins.interaction
 *
 * @class
 * @extends EventEmitter
 * @memberof Tiny.interaction
 * @private
 */

var InteractionManager = function (_EventEmitter) {
  _inherits(InteractionManager, _EventEmitter);

  /**
   * @param {Tiny.CanvasRenderer|Tiny.WebGLRenderer} renderer - A reference to the current renderer
   * @param {object} [options] - The options for the manager.
   * @param {boolean} [options.autoPreventDefault=true] - Should the manager automatically prevent default browser actions.
   * @param {number} [options.interactionFrequency=10] - Frequency increases the interaction events will be checked.
   */
  function InteractionManager(renderer, options) {
    _classCallCheck(this, InteractionManager);

    var _this = _possibleConstructorReturn(this, (InteractionManager.__proto__ || Object.getPrototypeOf(InteractionManager)).call(this));

    options = options || {};

    /**
     * The renderer this interaction manager works for.
     *
     * @member {Tiny.SystemRenderer}
     */
    _this.renderer = renderer;

    /**
     * Should default browser actions automatically be prevented.
     * Does not apply to pointer events for backwards compatibility
     * preventDefault on pointer events stops mouse events from firing
     * Thus, for every pointer event, there will always be either a mouse of touch event alongside it.
     *
     * @member {boolean}
     * @default true
     */
    _this.autoPreventDefault = options.autoPreventDefault !== undefined ? options.autoPreventDefault : true;

    /**
     * Frequency in milliseconds that the mousemove, moveover & mouseout interaction events will be checked.
     *
     * @member {number}
     * @default 10
     */
    _this.interactionFrequency = options.interactionFrequency || 10;

    /**
     * The mouse data
     *
     * @member {Tiny.interaction.InteractionData}
     */
    _this.mouse = new _InteractionData2.default();
    _this.mouse.identifier = MOUSE_POINTER_ID;

    // setting the mouse to start off far off screen will mean that mouse over does
    //  not get called before we even move the mouse.
    _this.mouse.global.set(-999999);

    /**
     * Actively tracked InteractionData
     *
     * @private
     * @member {Object.<number,Tiny.interation.InteractionData>}
     */
    _this.activeInteractionData = {};
    _this.activeInteractionData[MOUSE_POINTER_ID] = _this.mouse;

    /**
     * Pool of unused InteractionData
     *
     * @private
     * @member {Tiny.interation.InteractionData[]}
     */
    _this.interactionDataPool = [];

    /**
     * An event data object to handle all the event tracking/dispatching
     *
     * @member {object}
     */
    _this.eventData = new _InteractionEvent2.default();

    /**
     * The DOM element to bind to.
     *
     * @private
     * @member {HTMLElement}
     */
    _this.interactionDOMElement = null;

    /**
     * This property determines if mousemove and touchmove events are fired only when the cursor
     * is over the object.
     * Setting to true will make things work more in line with how the DOM verison works.
     * Setting to false can make things easier for things like dragging
     * It is currently set to false as this is how Tiny used to work. This will be set to true in
     * future versions of Tiny.
     *
     * @member {boolean}
     * @default false
     */
    _this.moveWhenInside = false;

    /**
     * Have events been attached to the dom element?
     *
     * @private
     * @member {boolean}
     */
    _this.eventsAdded = false;

    /**
     * Is the mouse hovering over the renderer?
     *
     * @private
     * @member {boolean}
     */
    _this.mouseOverRenderer = false;

    /**
     * Does the device support touch events
     * https://www.w3.org/TR/touch-events/
     *
     * @readonly
     * @member {boolean}
     */
    _this.supportsTouchEvents = 'ontouchstart' in window;

    /**
     * Does the device support pointer events
     * https://www.w3.org/Submission/pointer-events/
     *
     * @readonly
     * @member {boolean}
     */
    _this.supportsPointerEvents = !!window.PointerEvent;

    // this will make it so that you don't have to call bind all the time

    /**
     * @private
     * @member {Function}
     */
    _this.onPointerUp = _this.onPointerUp.bind(_this);
    _this.processPointerUp = _this.processPointerUp.bind(_this);

    /**
     * @private
     * @member {Function}
     */
    _this.onPointerCancel = _this.onPointerCancel.bind(_this);
    _this.processPointerCancel = _this.processPointerCancel.bind(_this);

    /**
     * @private
     * @member {Function}
     */
    _this.onPointerDown = _this.onPointerDown.bind(_this);
    _this.processPointerDown = _this.processPointerDown.bind(_this);

    /**
     * @private
     * @member {Function}
     */
    _this.onPointerMove = _this.onPointerMove.bind(_this);
    _this.processPointerMove = _this.processPointerMove.bind(_this);

    /**
     * @private
     * @member {Function}
     */
    _this.onPointerOut = _this.onPointerOut.bind(_this);
    _this.processPointerOverOut = _this.processPointerOverOut.bind(_this);

    /**
     * @private
     * @member {Function}
     */
    _this.onPointerOver = _this.onPointerOver.bind(_this);

    /**
     * Dictionary of how different cursor modes are handled. Strings are handled as CSS cursor
     * values, objects are handled as dictionaries of CSS values for interactionDOMElement,
     * and functions are called instead of changing the CSS.
     * Default CSS cursor values are provided for 'default' and 'pointer' modes.
     *
     * @member {Object.<string, (string|Function|Object.<string, string>)>}
     */
    _this.cursorStyles = {
      default: 'inherit',
      pointer: 'pointer'
    };

    /**
     * The mode of the cursor that is being used.
     * The value of this is a key from the cursorStyles dictionary.
     *
     * @member {string}
     */
    _this.currentCursorMode = null;

    /**
     * Internal cached let.
     *
     * @private
     * @member {string}
     */
    _this.cursor = null;

    /**
     * Internal cached let.
     *
     * @private
     * @member {Tiny.Point}
     */
    _this._tempPoint = new core.Point();

    /**
     * The current resolution / device pixel ratio.
     *
     * @member {number}
     * @default 1
     */
    _this.resolution = 1;

    _this.setTargetElement(_this.renderer.view, _this.renderer.resolution);

    /**
     * Fired when a pointer device button (usually a mouse left-button) is pressed on the display
     * object.
     *
     * @event Tiny.interaction.InteractionManager#mousedown
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
     * on the display object.
     *
     * @event Tiny.interaction.InteractionManager#rightdown
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button (usually a mouse left-button) is released over the display
     * object.
     *
     * @event Tiny.interaction.InteractionManager#mouseup
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device secondary button (usually a mouse right-button) is released
     * over the display object.
     *
     * @event Tiny.interaction.InteractionManager#rightup
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button (usually a mouse left-button) is pressed and released on
     * the display object.
     *
     * @event Tiny.interaction.InteractionManager#click
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
     * and released on the display object.
     *
     * @event Tiny.interaction.InteractionManager#rightclick
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button (usually a mouse left-button) is released outside the
     * display object that initially registered a
     * [mousedown]{@link Tiny.interaction.InteractionManager#event:mousedown}.
     *
     * @event Tiny.interaction.InteractionManager#mouseupoutside
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device secondary button (usually a mouse right-button) is released
     * outside the display object that initially registered a
     * [rightdown]{@link Tiny.interaction.InteractionManager#event:rightdown}.
     *
     * @event Tiny.interaction.InteractionManager#rightupoutside
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device (usually a mouse) is moved while over the display object
     *
     * @event Tiny.interaction.InteractionManager#mousemove
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device (usually a mouse) is moved onto the display object
     *
     * @event Tiny.interaction.InteractionManager#mouseover
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device (usually a mouse) is moved off the display object
     *
     * @event Tiny.interaction.InteractionManager#mouseout
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button is pressed on the display object.
     *
     * @event Tiny.interaction.InteractionManager#pointerdown
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button is released over the display object.
     *
     * @event Tiny.interaction.InteractionManager#pointerup
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when the operating system cancels a pointer event
     *
     * @event Tiny.interaction.InteractionManager#pointercancel
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button is pressed and released on the display object.
     *
     * @event Tiny.interaction.InteractionManager#pointertap
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button is released outside the display object that initially
     * registered a [pointerdown]{@link Tiny.interaction.InteractionManager#event:pointerdown}.
     *
     * @event Tiny.interaction.InteractionManager#pointerupoutside
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device is moved while over the display object
     *
     * @event Tiny.interaction.InteractionManager#pointermove
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device is moved onto the display object
     *
     * @event Tiny.interaction.InteractionManager#pointerover
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device is moved off the display object
     *
     * @event Tiny.interaction.InteractionManager#pointerout
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is placed on the display object.
     *
     * @event Tiny.interaction.InteractionManager#touchstart
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is removed from the display object.
     *
     * @event Tiny.interaction.InteractionManager#touchend
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when the operating system cancels a touch
     *
     * @event Tiny.interaction.InteractionManager#touchcancel
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is placed and removed from the display object.
     *
     * @event Tiny.interaction.InteractionManager#tap
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is removed outside of the display object that initially
     * registered a [touchstart]{@link Tiny.interaction.InteractionManager#event:touchstart}.
     *
     * @event Tiny.interaction.InteractionManager#touchendoutside
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is moved along the display object.
     *
     * @event Tiny.interaction.InteractionManager#touchmove
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button (usually a mouse left-button) is pressed on the display.
     * object. DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#mousedown
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
     * on the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#rightdown
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button (usually a mouse left-button) is released over the display
     * object. DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#mouseup
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device secondary button (usually a mouse right-button) is released
     * over the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#rightup
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button (usually a mouse left-button) is pressed and released on
     * the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#click
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device secondary button (usually a mouse right-button) is pressed
     * and released on the display object. DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#rightclick
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button (usually a mouse left-button) is released outside the
     * display object that initially registered a
     * [mousedown]{@link Tiny.DisplayObject#event:mousedown}.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#mouseupoutside
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device secondary button (usually a mouse right-button) is released
     * outside the display object that initially registered a
     * [rightdown]{@link Tiny.DisplayObject#event:rightdown}.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#rightupoutside
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device (usually a mouse) is moved while over the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#mousemove
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device (usually a mouse) is moved onto the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#mouseover
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device (usually a mouse) is moved off the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#mouseout
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button is pressed on the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#pointerdown
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button is released over the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#pointerup
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when the operating system cancels a pointer event.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#pointercancel
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button is pressed and released on the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#pointertap
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device button is released outside the display object that initially
     * registered a [pointerdown]{@link Tiny.DisplayObject#event:pointerdown}.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#pointerupoutside
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device is moved while over the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#pointermove
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device is moved onto the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#pointerover
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a pointer device is moved off the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#pointerout
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is placed on the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#touchstart
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is removed from the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#touchend
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when the operating system cancels a touch.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#touchcancel
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is placed and removed from the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#tap
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is removed outside of the display object that initially
     * registered a [touchstart]{@link Tiny.DisplayObject#event:touchstart}.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#touchendoutside
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */

    /**
     * Fired when a touch point is moved along the display object.
     * DisplayObject's `interactive` property must be set to `true` to fire event.
     *
     * @event Tiny.DisplayObject#touchmove
     * @param {Tiny.interaction.InteractionEvent} event - Interaction event
     */
    return _this;
  }

  /**
   * Hit tests a point against the display tree, returning the first interactive object that is hit.
   *
   * @param {Tiny.Point} globalPoint - A point to hit test with, in global space.
   * @param {Tiny.Container} [root] - The root display object to start from. If omitted, defaults
   * to the last rendered root of the associated renderer.
   * @return {Tiny.DisplayObject} The hit display object, if any.
   */


  _createClass(InteractionManager, [{
    key: 'hitTest',
    value: function hitTest(globalPoint, root) {
      // clear the target for our hit test
      hitTestEvent.target = null;
      // assign the global point
      hitTestEvent.data.global = globalPoint;
      // ensure safety of the root
      if (!root) {
        root = this.renderer._lastObjectRendered;
      }
      // run the hit test
      this.processInteractive(hitTestEvent, root, null, true);
      // return our found object - it'll be null if we didn't hit anything

      return hitTestEvent.target;
    }

    /**
     * Sets the DOM element which will receive mouse/touch events. This is useful for when you have
     * other DOM elements on top of the renderers Canvas element. With this you'll be bale to deletegate
     * another DOM element to receive those events.
     *
     * @param {HTMLCanvasElement} element - the DOM element which will receive mouse and touch events.
     * @param {number} [resolution=1] - The resolution / device pixel ratio of the new element (relative to the canvas).
     * @private
     */

  }, {
    key: 'setTargetElement',
    value: function setTargetElement(element) {
      var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this.removeEvents();

      this.interactionDOMElement = element;

      this.resolution = resolution;

      this.addEvents();
    }

    /**
     * Registers all the DOM events
     *
     * @private
     */

  }, {
    key: 'addEvents',
    value: function addEvents() {
      if (!this.interactionDOMElement) {
        return;
      }

      core.ticker.shared.add(this.update, this, core.UPDATE_PRIORITY.INTERACTION);

      if (window.navigator.msPointerEnabled) {
        this.interactionDOMElement.style['-ms-content-zooming'] = 'none';
        this.interactionDOMElement.style['-ms-touch-action'] = 'none';
      } else if (this.supportsPointerEvents) {
        this.interactionDOMElement.style['touch-action'] = 'none';
      }

      /**
       * These events are added first, so that if pointer events are normalised, they are fired
       * in the same order as non-normalised events. ie. pointer event 1st, mouse / touch 2nd
       */
      if (this.supportsPointerEvents) {
        window.document.addEventListener('pointermove', this.onPointerMove, true);
        this.interactionDOMElement.addEventListener('pointerdown', this.onPointerDown, true);
        // pointerout is fired in addition to pointerup (for touch events) and pointercancel
        // we already handle those, so for the purposes of what we do in onPointerOut, we only
        // care about the pointerleave event
        this.interactionDOMElement.addEventListener('pointerleave', this.onPointerOut, true);
        this.interactionDOMElement.addEventListener('pointerover', this.onPointerOver, true);
        window.addEventListener('pointercancel', this.onPointerCancel, true);
        window.addEventListener('pointerup', this.onPointerUp, true);
      } else {
        window.document.addEventListener('mousemove', this.onPointerMove, true);
        this.interactionDOMElement.addEventListener('mousedown', this.onPointerDown, true);
        this.interactionDOMElement.addEventListener('mouseout', this.onPointerOut, true);
        this.interactionDOMElement.addEventListener('mouseover', this.onPointerOver, true);
        window.addEventListener('mouseup', this.onPointerUp, true);
      }

      // always look directly for touch events so that we can provide original data
      // In a future version we should change this to being just a fallback and rely solely on
      // PointerEvents whenever available
      if (this.supportsTouchEvents) {
        this.interactionDOMElement.addEventListener('touchstart', this.onPointerDown, true);
        this.interactionDOMElement.addEventListener('touchcancel', this.onPointerCancel, true);
        this.interactionDOMElement.addEventListener('touchend', this.onPointerUp, true);
        this.interactionDOMElement.addEventListener('touchmove', this.onPointerMove, true);
      }

      this.eventsAdded = true;
    }

    /**
     * Removes all the DOM events that were previously registered
     *
     * @private
     */

  }, {
    key: 'removeEvents',
    value: function removeEvents() {
      if (!this.interactionDOMElement) {
        return;
      }

      core.ticker.shared.remove(this.update, this);

      if (window.navigator.msPointerEnabled) {
        this.interactionDOMElement.style['-ms-content-zooming'] = '';
        this.interactionDOMElement.style['-ms-touch-action'] = '';
      } else if (this.supportsPointerEvents) {
        this.interactionDOMElement.style['touch-action'] = '';
      }

      if (this.supportsPointerEvents) {
        window.document.removeEventListener('pointermove', this.onPointerMove, true);
        this.interactionDOMElement.removeEventListener('pointerdown', this.onPointerDown, true);
        this.interactionDOMElement.removeEventListener('pointerleave', this.onPointerOut, true);
        this.interactionDOMElement.removeEventListener('pointerover', this.onPointerOver, true);
        window.removeEventListener('pointercancel', this.onPointerCancel, true);
        window.removeEventListener('pointerup', this.onPointerUp, true);
      } else {
        window.document.removeEventListener('mousemove', this.onPointerMove, true);
        this.interactionDOMElement.removeEventListener('mousedown', this.onPointerDown, true);
        this.interactionDOMElement.removeEventListener('mouseout', this.onPointerOut, true);
        this.interactionDOMElement.removeEventListener('mouseover', this.onPointerOver, true);
        window.removeEventListener('mouseup', this.onPointerUp, true);
      }

      if (this.supportsTouchEvents) {
        this.interactionDOMElement.removeEventListener('touchstart', this.onPointerDown, true);
        this.interactionDOMElement.removeEventListener('touchcancel', this.onPointerCancel, true);
        this.interactionDOMElement.removeEventListener('touchend', this.onPointerUp, true);
        this.interactionDOMElement.removeEventListener('touchmove', this.onPointerMove, true);
      }

      this.interactionDOMElement = null;

      this.eventsAdded = false;
    }

    /**
     * Updates the state of interactive objects.
     * Invoked by a throttled ticker update from {@link Tiny.ticker.shared}.
     *
     * @param {number} deltaTime - time delta since last tick
     */

  }, {
    key: 'update',
    value: function update(deltaTime) {
      this._deltaTime += deltaTime;

      if (this._deltaTime < this.interactionFrequency) {
        return;
      }

      this._deltaTime = 0;

      if (!this.interactionDOMElement) {
        return;
      }

      // if the user move the mouse this check has already been done using the mouse move!
      if (this.didMove) {
        this.didMove = false;

        return;
      }

      this.cursor = null;

      // Resets the flag as set by a stopPropagation call. This flag is usually reset by a user interaction of any kind,
      // but there was a scenario of a display object moving under a static mouse cursor.
      // In this case, mouseover and mouseevents would not pass the flag test in dispatchEvent function
      for (var k in this.activeInteractionData) {
        // eslint-disable-next-line no-prototype-builtins
        if (this.activeInteractionData.hasOwnProperty(k)) {
          var interactionData = this.activeInteractionData[k];

          if (interactionData.originalEvent && interactionData.pointerType !== 'touch') {
            var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, interactionData.originalEvent, interactionData);

            this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerOverOut, true);
          }
        }
      }

      this.setCursorMode(this.cursor);

      // TODO
    }

    /**
     * Sets the current cursor mode, handling any callbacks or CSS style changes.
     *
     * @param {string} mode - cursor mode, a key from the cursorStyles dictionary
     */

  }, {
    key: 'setCursorMode',
    value: function setCursorMode(mode) {
      mode = mode || 'default';
      // if the mode didn't actually change, bail early
      if (this.currentCursorMode === mode) {
        return;
      }
      this.currentCursorMode = mode;
      var style = this.cursorStyles[mode];

      // only do things if there is a cursor style for it
      if (style) {
        switch (typeof style === 'undefined' ? 'undefined' : _typeof(style)) {
          case 'string':
            // string styles are handled as cursor CSS
            this.interactionDOMElement.style.cursor = style;
            break;
          case 'function':
            // functions are just called, and passed the cursor mode
            style(mode);
            break;
          case 'object':
            // if it is an object, assume that it is a dictionary of CSS styles,
            // apply it to the interactionDOMElement
            Object.assign(this.interactionDOMElement.style, style);
            break;
        }
      } else if (typeof mode === 'string' && !Object.prototype.hasOwnProperty.call(this.cursorStyles, mode)) {
        // if it mode is a string (not a Symbol) and cursorStyles doesn't have any entry
        // for the mode, then assume that the dev wants it to be CSS for the cursor.
        this.interactionDOMElement.style.cursor = mode;
      }
    }

    /**
     * Dispatches an event on the display object that was interacted with
     *
     * @param {Tiny.Container|Tiny.Sprite|Tiny.TilingSprite} displayObject - the display object in question
     * @param {string} eventString - the name of the event (e.g, mousedown)
     * @param {object} eventData - the event data object
     * @private
     */

  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(displayObject, eventString, eventData) {
      if (!eventData.stopped) {
        eventData.currentTarget = displayObject;
        eventData.type = eventString;

        displayObject.emit(eventString, eventData);

        if (displayObject[eventString]) {
          displayObject[eventString](eventData);
        }
      }
    }

    /**
     * Maps x and y coords from a DOM object and maps them correctly to the Tiny view. The
     * resulting value is stored in the point. This takes into account the fact that the DOM
     * element could be scaled and positioned anywhere on the screen.
     *
     * @param  {Tiny.Point} point - the point that the result will be stored in
     * @param  {number} x - the x coord of the position to map
     * @param  {number} y - the y coord of the position to map
     */

  }, {
    key: 'mapPositionToPoint',
    value: function mapPositionToPoint(point, x, y) {
      var rect = void 0;

      // IE 11 fix
      if (!this.interactionDOMElement.parentElement) {
        rect = { x: 0, y: 0, width: 0, height: 0 };
      } else {
        rect = this.interactionDOMElement.getBoundingClientRect();
      }

      var resolutionMultiplier = navigator.isCocoonJS ? this.resolution : 1.0 / this.resolution;

      point.x = (x - rect.left) * (this.interactionDOMElement.width / rect.width) * resolutionMultiplier;
      point.y = (y - rect.top) * (this.interactionDOMElement.height / rect.height) * resolutionMultiplier;
    }

    /**
     * This function is provides a neat way of crawling through the scene graph and running a
     * specified function on all interactive objects it finds. It will also take care of hit
     * testing the interactive objects and passes the hit across in the function.
     *
     * @private
     * @param {Tiny.interaction.InteractionEvent} interactionEvent - event containing the point that
     *  is tested for collision
     * @param {Tiny.Container|Tiny.Sprite|Tiny.TilingSprite} displayObject - the displayObject
     *  that will be hit test (recursively crawls its children)
     * @param {Function} [func] - the function that will be called on each interactive object. The
     *  interactionEvent, displayObject and hit will be passed to the function
     * @param {boolean} [hitTest] - this indicates if the objects inside should be hit test against the point
     * @param {boolean} [interactive] - Whether the displayObject is interactive
     * @return {boolean} returns true if the displayObject hit the point
     */

  }, {
    key: 'processInteractive',
    value: function processInteractive(interactionEvent, displayObject, func, hitTest, interactive) {
      if (!displayObject || !displayObject.visible) {
        return false;
      }

      var point = interactionEvent.data.global;

      // Took a little while to rework this function correctly! But now it is done and nice and optimised. ^_^
      //
      // This function will now loop through all objects and then only hit test the objects it HAS
      // to, not all of them. MUCH faster..
      // An object will be hit test if the following is true:
      //
      // 1: It is interactive.
      // 2: It belongs to a parent that is interactive AND one of the parents children have not already been hit.
      //
      // As another little optimisation once an interactive object has been hit we can carry on
      // through the scenegraph, but we know that there will be no more hits! So we can avoid extra hit tests
      // A final optimisation is that an object is not hit test directly if a child has already been hit.

      interactive = displayObject.interactive || interactive;

      var hit = false;
      var interactiveParent = interactive;

      // if the displayobject has a hitArea, then it does not need to hitTest children.
      if (displayObject.hitArea) {
        interactiveParent = false;
      } else if (hitTest && displayObject._mask) {
        // it has a mask! Then lets hit test that before continuing
        if (!displayObject._mask.containsPoint(point)) {
          hitTest = false;
        }
      }

      // ** FREE TIP **! If an object is not interactive or has no buttons in it
      // (such as a game scene!) set interactiveChildren to false for that displayObject.
      // This will allow Tiny to completely ignore and bypass checking the displayObjects children.
      if (displayObject.interactiveChildren && displayObject.children) {
        var children = displayObject.children;

        for (var i = children.length - 1; i >= 0; i--) {
          var child = children[i];

          // time to get recursive.. if this function will return if something is hit..
          var childHit = this.processInteractive(interactionEvent, child, func, hitTest, interactiveParent);

          if (childHit) {
            // its a good idea to check if a child has lost its parent.
            // this means it has been removed whilst looping so its best
            if (!child.parent) {
              continue;
            }

            // we no longer need to hit test any more objects in this container as we we
            // now know the parent has been hit
            interactiveParent = false;

            // If the child is interactive , that means that the object hit was actually
            // interactive and not just the child of an interactive object.
            // This means we no longer need to hit test anything else. We still need to run
            // through all objects, but we don't need to perform any hit tests.

            if (childHit) {
              if (interactionEvent.target) {
                hitTest = false;
              }
              hit = true;
            }
          }
        }
      }

      // no point running this if the item is not interactive or does not have an interactive parent.
      if (interactive) {
        // if we are hit testing (as in we have no hit any objects yet)
        // We also don't need to worry about hit testing if once of the displayObjects children
        // has already been hit - but only if it was interactive, otherwise we need to keep
        // looking for an interactive child, just in case we hit one
        if (hitTest && !interactionEvent.target) {
          if (displayObject.hitArea) {
            displayObject.worldTransform.applyInverse(point, this._tempPoint);
            if (displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) {
              hit = true;
            }
          } else if (displayObject.containsPoint) {
            if (displayObject.containsPoint(point)) {
              hit = true;
            }
          }
        }

        if (displayObject.interactive) {
          if (hit && !interactionEvent.target) {
            interactionEvent.target = displayObject;
          }

          if (func) {
            func(interactionEvent, displayObject, !!hit);
          }
        }
      }

      return hit;
    }

    /**
     * Is called when the pointer button is pressed down on the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer button being pressed down
     */

  }, {
    key: 'onPointerDown',
    value: function onPointerDown(originalEvent) {
      // if we support touch events, then only use those for touch events, not pointer events
      if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') return;

      var events = this.normalizeToPointerData(originalEvent);

      /**
       * No need to prevent default on natural pointer events, as there are no side effects
       * Normalized events, however, may have the double mousedown/touchstart issue on the native android browser,
       * so still need to be prevented.
       */

      // Guaranteed that there will be at least one event in events, and all events must have the same pointer type

      if (this.autoPreventDefault && events[0].isNormalized) {
        originalEvent.preventDefault();
      }

      var eventLen = events.length;

      for (var i = 0; i < eventLen; i++) {
        var event = events[i];

        var interactionData = this.getInteractionDataForPointerId(event);

        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

        interactionEvent.data.originalEvent = originalEvent;

        this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerDown, true);

        this.emit('pointerdown', interactionEvent);
        if (event.pointerType === 'touch') {
          this.emit('touchstart', interactionEvent);
        } else if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
          // emit a mouse event for "pen" pointers, the way a browser would emit a fallback event
          var isRightButton = event.button === 2;

          this.emit(isRightButton ? 'rightdown' : 'mousedown', this.eventData);
        }
      }
    }

    /**
     * Processes the result of the pointer down check and dispatches the event if need be
     *
     * @private
     * @param {Tiny.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {Tiny.Container|Tiny.Sprite|Tiny.TilingSprite} displayObject - The display object that was tested
     * @param {boolean} hit - the result of the hit test on the display object
     */

  }, {
    key: 'processPointerDown',
    value: function processPointerDown(interactionEvent, displayObject, hit) {
      var data = interactionEvent.data;
      var id = interactionEvent.data.identifier;

      if (hit) {
        if (!displayObject.trackedPointers[id]) {
          displayObject.trackedPointers[id] = new _InteractionTrackingData2.default(id);
        }
        this.dispatchEvent(displayObject, 'pointerdown', interactionEvent);

        if (data.pointerType === 'touch') {
          this.dispatchEvent(displayObject, 'touchstart', interactionEvent);
        } else if (data.pointerType === 'mouse' || data.pointerType === 'pen') {
          var isRightButton = data.button === 2;

          if (isRightButton) {
            displayObject.trackedPointers[id].rightDown = true;
          } else {
            displayObject.trackedPointers[id].leftDown = true;
          }

          this.dispatchEvent(displayObject, isRightButton ? 'rightdown' : 'mousedown', interactionEvent);
        }
      }
    }

    /**
     * Is called when the pointer button is released on the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer button being released
     * @param {boolean} cancelled - true if the pointer is cancelled
     * @param {Function} func - Function passed to {@link processInteractive}
     */

  }, {
    key: 'onPointerComplete',
    value: function onPointerComplete(originalEvent, cancelled, func) {
      var events = this.normalizeToPointerData(originalEvent);

      var eventLen = events.length;

      // if the event wasn't targeting our canvas, then consider it to be pointerupoutside
      // in all cases (unless it was a pointercancel)
      var eventAppend = originalEvent.target !== this.interactionDOMElement ? 'outside' : '';

      for (var i = 0; i < eventLen; i++) {
        var event = events[i];

        var interactionData = this.getInteractionDataForPointerId(event);

        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

        interactionEvent.data.originalEvent = originalEvent;

        // perform hit testing for events targeting our canvas or cancel events
        this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, func, cancelled || !eventAppend);

        this.emit(cancelled ? 'pointercancel' : 'pointerup' + eventAppend, interactionEvent);

        if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
          var isRightButton = event.button === 2;

          this.emit(isRightButton ? 'rightup' + eventAppend : 'mouseup' + eventAppend, interactionEvent);
        } else if (event.pointerType === 'touch') {
          this.emit(cancelled ? 'touchcancel' : 'touchend' + eventAppend, interactionEvent);
          this.releaseInteractionDataForPointerId(event.pointerId, interactionData);
        }
      }
    }

    /**
     * Is called when the pointer button is cancelled
     *
     * @private
     * @param {PointerEvent} event - The DOM event of a pointer button being released
     */

  }, {
    key: 'onPointerCancel',
    value: function onPointerCancel(event) {
      // if we support touch events, then only use those for touch events, not pointer events
      if (this.supportsTouchEvents && event.pointerType === 'touch') return;

      this.onPointerComplete(event, true, this.processPointerCancel);
    }

    /**
     * Processes the result of the pointer cancel check and dispatches the event if need be
     *
     * @private
     * @param {Tiny.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {Tiny.Container|Tiny.Sprite|Tiny.TilingSprite} displayObject - The display object that was tested
     */

  }, {
    key: 'processPointerCancel',
    value: function processPointerCancel(interactionEvent, displayObject) {
      var data = interactionEvent.data;

      var id = interactionEvent.data.identifier;

      if (displayObject.trackedPointers[id] !== undefined) {
        delete displayObject.trackedPointers[id];
        this.dispatchEvent(displayObject, 'pointercancel', interactionEvent);

        if (data.pointerType === 'touch') {
          this.dispatchEvent(displayObject, 'touchcancel', interactionEvent);
        }
      }
    }

    /**
     * Is called when the pointer button is released on the renderer element
     *
     * @private
     * @param {PointerEvent} event - The DOM event of a pointer button being released
     */

  }, {
    key: 'onPointerUp',
    value: function onPointerUp(event) {
      // if we support touch events, then only use those for touch events, not pointer events
      if (this.supportsTouchEvents && event.pointerType === 'touch') return;

      this.onPointerComplete(event, false, this.processPointerUp);
    }

    /**
     * Processes the result of the pointer up check and dispatches the event if need be
     *
     * @private
     * @param {Tiny.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {Tiny.Container|Tiny.Sprite|Tiny.TilingSprite} displayObject - The display object that was tested
     * @param {boolean} hit - the result of the hit test on the display object
     */

  }, {
    key: 'processPointerUp',
    value: function processPointerUp(interactionEvent, displayObject, hit) {
      var data = interactionEvent.data;

      var id = interactionEvent.data.identifier;

      var trackingData = displayObject.trackedPointers[id];

      var isTouch = data.pointerType === 'touch';

      var isMouse = data.pointerType === 'mouse' || data.pointerType === 'pen';

      // Mouse only
      if (isMouse) {
        var isRightButton = data.button === 2;

        var flags = _InteractionTrackingData2.default.FLAGS;

        var test = isRightButton ? flags.RIGHT_DOWN : flags.LEFT_DOWN;

        var isDown = trackingData !== undefined && trackingData.flags & test;

        if (hit) {
          this.dispatchEvent(displayObject, isRightButton ? 'rightup' : 'mouseup', interactionEvent);

          if (isDown) {
            this.dispatchEvent(displayObject, isRightButton ? 'rightclick' : 'click', interactionEvent);
          }
        } else if (isDown) {
          this.dispatchEvent(displayObject, isRightButton ? 'rightupoutside' : 'mouseupoutside', interactionEvent);
        }
        // update the down state of the tracking data
        if (trackingData) {
          if (isRightButton) {
            trackingData.rightDown = false;
          } else {
            trackingData.leftDown = false;
          }
        }
      }

      // Pointers and Touches, and Mouse
      if (hit) {
        this.dispatchEvent(displayObject, 'pointerup', interactionEvent);
        if (isTouch) this.dispatchEvent(displayObject, 'touchend', interactionEvent);

        if (trackingData) {
          this.dispatchEvent(displayObject, 'pointertap', interactionEvent);
          if (isTouch) {
            this.dispatchEvent(displayObject, 'tap', interactionEvent);
            // touches are no longer over (if they ever were) when we get the touchend
            // so we should ensure that we don't keep pretending that they are
            trackingData.over = false;
          }
        }
      } else if (trackingData) {
        this.dispatchEvent(displayObject, 'pointerupoutside', interactionEvent);
        if (isTouch) this.dispatchEvent(displayObject, 'touchendoutside', interactionEvent);
      }
      // Only remove the tracking data if there is no over/down state still associated with it
      if (trackingData && trackingData.none) {
        delete displayObject.trackedPointers[id];
      }
    }

    /**
     * Is called when the pointer moves across the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer moving
     */

  }, {
    key: 'onPointerMove',
    value: function onPointerMove(originalEvent) {
      // if we support touch events, then only use those for touch events, not pointer events
      if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') return;

      var events = this.normalizeToPointerData(originalEvent);

      if (events[0].pointerType === 'mouse') {
        this.didMove = true;

        this.cursor = null;
      }

      var eventLen = events.length;

      for (var i = 0; i < eventLen; i++) {
        var event = events[i];

        var interactionData = this.getInteractionDataForPointerId(event);

        var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

        interactionEvent.data.originalEvent = originalEvent;

        var interactive = event.pointerType === 'touch' ? this.moveWhenInside : true;

        this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerMove, interactive);
        this.emit('pointermove', interactionEvent);
        if (event.pointerType === 'touch') this.emit('touchmove', interactionEvent);
        if (event.pointerType === 'mouse' || event.pointerType === 'pen') this.emit('mousemove', interactionEvent);
      }

      if (events[0].pointerType === 'mouse') {
        this.setCursorMode(this.cursor);

        // TODO BUG for parents interactive object (border order issue)
      }
    }

    /**
     * Processes the result of the pointer move check and dispatches the event if need be
     *
     * @private
     * @param {Tiny.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {Tiny.Container|Tiny.Sprite|Tiny.TilingSprite} displayObject - The display object that was tested
     * @param {boolean} hit - the result of the hit test on the display object
     */

  }, {
    key: 'processPointerMove',
    value: function processPointerMove(interactionEvent, displayObject, hit) {
      var data = interactionEvent.data;

      var isTouch = data.pointerType === 'touch';

      var isMouse = data.pointerType === 'mouse' || data.pointerType === 'pen';

      if (isMouse) {
        this.processPointerOverOut(interactionEvent, displayObject, hit);
      }

      if (!this.moveWhenInside || hit) {
        this.dispatchEvent(displayObject, 'pointermove', interactionEvent);
        if (isTouch) this.dispatchEvent(displayObject, 'touchmove', interactionEvent);
        if (isMouse) this.dispatchEvent(displayObject, 'mousemove', interactionEvent);
      }
    }

    /**
     * Is called when the pointer is moved out of the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer being moved out
     */

  }, {
    key: 'onPointerOut',
    value: function onPointerOut(originalEvent) {
      // if we support touch events, then only use those for touch events, not pointer events
      if (this.supportsTouchEvents && originalEvent.pointerType === 'touch') return;

      var events = this.normalizeToPointerData(originalEvent);

      // Only mouse and pointer can call onPointerOut, so events will always be length 1
      var event = events[0];

      if (event.pointerType === 'mouse') {
        this.mouseOverRenderer = false;
        this.setCursorMode(null);
      }

      var interactionData = this.getInteractionDataForPointerId(event);

      var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

      interactionEvent.data.originalEvent = event;

      this.processInteractive(interactionEvent, this.renderer._lastObjectRendered, this.processPointerOverOut, false);

      this.emit('pointerout', interactionEvent);
      if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
        this.emit('mouseout', interactionEvent);
      } else {
        // we can get touchleave events after touchend, so we want to make sure we don't
        // introduce memory leaks
        this.releaseInteractionDataForPointerId(interactionData.identifier);
      }
    }

    /**
     * Processes the result of the pointer over/out check and dispatches the event if need be
     *
     * @private
     * @param {Tiny.interaction.InteractionEvent} interactionEvent - The interaction event wrapping the DOM event
     * @param {Tiny.Container|Tiny.Sprite|Tiny.TilingSprite} displayObject - The display object that was tested
     * @param {boolean} hit - the result of the hit test on the display object
     */

  }, {
    key: 'processPointerOverOut',
    value: function processPointerOverOut(interactionEvent, displayObject, hit) {
      var data = interactionEvent.data;

      var id = interactionEvent.data.identifier;

      var isMouse = data.pointerType === 'mouse' || data.pointerType === 'pen';

      var trackingData = displayObject.trackedPointers[id];

      // if we just moused over the display object, then we need to track that state
      if (hit && !trackingData) {
        trackingData = displayObject.trackedPointers[id] = new _InteractionTrackingData2.default(id);
      }

      if (trackingData === undefined) return;

      if (hit && this.mouseOverRenderer) {
        if (!trackingData.over) {
          trackingData.over = true;
          this.dispatchEvent(displayObject, 'pointerover', interactionEvent);
          if (isMouse) {
            this.dispatchEvent(displayObject, 'mouseover', interactionEvent);
          }
        }

        // only change the cursor if it has not already been changed (by something deeper in the
        // display tree)
        if (isMouse && this.cursor === null) {
          this.cursor = displayObject.cursor;
        }
      } else if (trackingData.over) {
        trackingData.over = false;
        this.dispatchEvent(displayObject, 'pointerout', this.eventData);
        if (isMouse) {
          this.dispatchEvent(displayObject, 'mouseout', interactionEvent);
        }
        // if there is no mouse down information for the pointer, then it is safe to delete
        if (trackingData.none) {
          delete displayObject.trackedPointers[id];
        }
      }
    }

    /**
     * Is called when the pointer is moved into the renderer element
     *
     * @private
     * @param {PointerEvent} originalEvent - The DOM event of a pointer button being moved into the renderer view
     */

  }, {
    key: 'onPointerOver',
    value: function onPointerOver(originalEvent) {
      var events = this.normalizeToPointerData(originalEvent);

      // Only mouse and pointer can call onPointerOver, so events will always be length 1
      var event = events[0];

      var interactionData = this.getInteractionDataForPointerId(event);

      var interactionEvent = this.configureInteractionEventForDOMEvent(this.eventData, event, interactionData);

      interactionEvent.data.originalEvent = event;

      if (event.pointerType === 'mouse') {
        this.mouseOverRenderer = true;
      }

      this.emit('pointerover', interactionEvent);
      if (event.pointerType === 'mouse' || event.pointerType === 'pen') {
        this.emit('mouseover', interactionEvent);
      }
    }

    /**
     * Get InteractionData for a given pointerId. Store that data as well
     *
     * @private
     * @param {PointerEvent} event - Normalized pointer event, output from normalizeToPointerData
     * @return {Tiny.interaction.InteractionData} - Interaction data for the given pointer identifier
     */

  }, {
    key: 'getInteractionDataForPointerId',
    value: function getInteractionDataForPointerId(event) {
      var pointerId = event.pointerId;

      var interactionData = void 0;

      if (pointerId === MOUSE_POINTER_ID || event.pointerType === 'mouse') {
        interactionData = this.mouse;
      } else if (this.activeInteractionData[pointerId]) {
        interactionData = this.activeInteractionData[pointerId];
      } else {
        interactionData = this.interactionDataPool.pop() || new _InteractionData2.default();
        interactionData.identifier = pointerId;
        this.activeInteractionData[pointerId] = interactionData;
      }
      // copy properties from the event, so that we can make sure that touch/pointer specific
      // data is available
      interactionData._copyEvent(event);

      return interactionData;
    }

    /**
     * Return unused InteractionData to the pool, for a given pointerId
     *
     * @private
     * @param {number} pointerId - Identifier from a pointer event
     */

  }, {
    key: 'releaseInteractionDataForPointerId',
    value: function releaseInteractionDataForPointerId(pointerId) {
      var interactionData = this.activeInteractionData[pointerId];

      if (interactionData) {
        delete this.activeInteractionData[pointerId];
        interactionData._reset();
        this.interactionDataPool.push(interactionData);
      }
    }

    /**
     * Configure an InteractionEvent to wrap a DOM PointerEvent and InteractionData
     *
     * @private
     * @param {Tiny.interaction.InteractionEvent} interactionEvent - The event to be configured
     * @param {PointerEvent} pointerEvent - The DOM event that will be paired with the InteractionEvent
     * @param {Tiny.interaction.InteractionData} interactionData - The InteractionData that will be paired
     *        with the InteractionEvent
     * @return {Tiny.interaction.InteractionEvent} the interaction event that was passed in
     */

  }, {
    key: 'configureInteractionEventForDOMEvent',
    value: function configureInteractionEventForDOMEvent(interactionEvent, pointerEvent, interactionData) {
      interactionEvent.data = interactionData;

      this.mapPositionToPoint(interactionData.global, pointerEvent.clientX, pointerEvent.clientY);

      // This is the way InteractionManager processed touch events before the refactoring, so I've kept
      // it here. But it doesn't make that much sense to me, since mapPositionToPoint already factors
      // in this.resolution, so this just divides by this.resolution twice for touch events...
      if (navigator.isCocoonJS && pointerEvent.pointerType === 'touch') {
        interactionData.global.x = interactionData.global.x / this.resolution;
        interactionData.global.y = interactionData.global.y / this.resolution;
      }

      // Not really sure why this is happening, but it's how a previous version handled things
      if (pointerEvent.pointerType === 'touch') {
        pointerEvent.globalX = interactionData.global.x;
        pointerEvent.globalY = interactionData.global.y;
      }

      interactionData.originalEvent = pointerEvent;
      interactionEvent._reset();

      return interactionEvent;
    }

    /**
     * Ensures that the original event object contains all data that a regular pointer event would have
     *
     * @private
     * @param {TouchEvent|MouseEvent|PointerEvent} event - The original event data from a touch or mouse event
     * @return {PointerEvent[]} An array containing a single normalized pointer event, in the case of a pointer
     *  or mouse event, or a multiple normalized pointer events if there are multiple changed touches
     */

  }, {
    key: 'normalizeToPointerData',
    value: function normalizeToPointerData(event) {
      var normalizedEvents = [];

      if (this.supportsTouchEvents && event instanceof TouchEvent) {
        for (var i = 0, li = event.changedTouches.length; i < li; i++) {
          var touch = event.changedTouches[i];

          if (typeof touch.button === 'undefined') touch.button = event.touches.length ? 1 : 0;
          if (typeof touch.buttons === 'undefined') touch.buttons = event.touches.length ? 1 : 0;
          if (typeof touch.isPrimary === 'undefined') {
            touch.isPrimary = event.touches.length === 1 && event.type === 'touchstart';
          }
          if (typeof touch.width === 'undefined') touch.width = touch.radiusX || 1;
          if (typeof touch.height === 'undefined') touch.height = touch.radiusY || 1;
          if (typeof touch.tiltX === 'undefined') touch.tiltX = 0;
          if (typeof touch.tiltY === 'undefined') touch.tiltY = 0;
          if (typeof touch.pointerType === 'undefined') touch.pointerType = 'touch';
          if (typeof touch.pointerId === 'undefined') touch.pointerId = touch.identifier || 0;
          if (typeof touch.pressure === 'undefined') touch.pressure = touch.force || 0.5;
          touch.twist = 0;
          touch.tangentialPressure = 0;
          // TODO: Remove these, as layerX/Y is not a standard, is deprecated, has uneven
          // support, and the fill ins are not quite the same
          // offsetX/Y might be okay, but is not the same as clientX/Y when the canvas's top
          // left is not 0,0 on the page
          if (typeof touch.layerX === 'undefined') touch.layerX = touch.offsetX = touch.clientX;
          if (typeof touch.layerY === 'undefined') touch.layerY = touch.offsetY = touch.clientY;

          // mark the touch as normalized, just so that we know we did it
          touch.isNormalized = true;

          normalizedEvents.push(touch);
        }
      } else if (event instanceof MouseEvent && (!this.supportsPointerEvents || !(event instanceof window.PointerEvent))) {
        // apparently PointerEvent subclasses MouseEvent, so yay
        if (typeof event.isPrimary === 'undefined') event.isPrimary = true;
        if (typeof event.width === 'undefined') event.width = 1;
        if (typeof event.height === 'undefined') event.height = 1;
        if (typeof event.tiltX === 'undefined') event.tiltX = 0;
        if (typeof event.tiltY === 'undefined') event.tiltY = 0;
        if (typeof event.pointerType === 'undefined') event.pointerType = 'mouse';
        if (typeof event.pointerId === 'undefined') event.pointerId = MOUSE_POINTER_ID;
        if (typeof event.pressure === 'undefined') event.pressure = 0.5;
        event.twist = 0;
        event.tangentialPressure = 0;

        // mark the mouse event as normalized, just so that we know we did it
        event.isNormalized = true;

        normalizedEvents.push(event);
      } else {
        normalizedEvents.push(event);
      }

      return normalizedEvents;
    }

    /**
     * Destroys the interaction manager
     *
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.removeEvents();

      this.removeAllListeners();

      this.renderer = null;

      this.mouse = null;

      this.eventData = null;

      this.interactionDOMElement = null;

      this.onPointerDown = null;
      this.processPointerDown = null;

      this.onPointerUp = null;
      this.processPointerUp = null;

      this.onPointerCancel = null;
      this.processPointerCancel = null;

      this.onPointerMove = null;
      this.processPointerMove = null;

      this.onPointerOut = null;
      this.processPointerOverOut = null;

      this.onPointerOver = null;

      this._tempPoint = null;
    }
  }]);

  return InteractionManager;
}(_eventemitter2.default);

exports.default = InteractionManager;


core.WebGLRenderer.registerPlugin('interaction', InteractionManager);
core.CanvasRenderer.registerPlugin('interaction', InteractionManager);

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DisplayObjects with the {@link Tiny.interaction.interactiveTarget} mixin use this class to track interactions
 *
 * @class
 * @memberof Tiny.interaction
 * @private
 */
var InteractionTrackingData = function () {
  /**
   * @param {number} pointerId - Unique pointer id of the event
   */
  function InteractionTrackingData(pointerId) {
    _classCallCheck(this, InteractionTrackingData);

    this._pointerId = pointerId;
    this._flags = InteractionTrackingData.FLAGS.NONE;
  }

  /**
   *
   * @private
   * @param {number} flag - The interaction flag to set
   * @param {boolean} yn - Should the flag be set or unset
   */


  _createClass(InteractionTrackingData, [{
    key: "_doSet",
    value: function _doSet(flag, yn) {
      if (yn) {
        this._flags = this._flags | flag;
      } else {
        this._flags = this._flags & ~flag;
      }
    }

    /**
     * Unique pointer id of the event
     *
     * @readonly
     * @member {number}
     */

  }, {
    key: "pointerId",
    get: function get() {
      return this._pointerId;
    }

    /**
     * State of the tracking data, expressed as bit flags
     *
     * @member {number}
     * @memberof Tiny.interaction.InteractionTrackingData#
     */

  }, {
    key: "flags",
    get: function get() {
      return this._flags;
    }

    /**
     * Set the flags for the tracking data
     *
     * @param flags - Flags to set
     */
    ,
    set: function set(flags) {
      this._flags = flags;
    }

    /**
     * Is the tracked event inactive (not over or down)?
     *
     * @member {number}
     * @memberof Tiny.interaction.InteractionTrackingData#
     */

  }, {
    key: "none",
    get: function get() {
      return this._flags === this.constructor.FLAGS.NONE;
    }

    /**
     * Is the tracked event over the DisplayObject?
     *
     * @member {boolean}
     * @memberof Tiny.interaction.InteractionTrackingData#
     */

  }, {
    key: "over",
    get: function get() {
      return (this._flags & this.constructor.FLAGS.OVER) !== 0;
    }

    /**
     * Set the over flag
     *
     * @param yn  Is the event over?
     */
    ,
    set: function set(yn) {
      this._doSet(this.constructor.FLAGS.OVER, yn);
    }

    /**
     * Did the right mouse button come down in the DisplayObject?
     *
     * @member {boolean}
     * @memberof Tiny.interaction.InteractionTrackingData#
     */

  }, {
    key: "rightDown",
    get: function get() {
      return (this._flags & this.constructor.FLAGS.RIGHT_DOWN) !== 0;
    }

    /**
     * Set the right down flag
     *
     * @param yn - Is the right mouse button down?
     */
    ,
    set: function set(yn) {
      this._doSet(this.constructor.FLAGS.RIGHT_DOWN, yn);
    }

    /**
     * Did the left mouse button come down in the DisplayObject?
     *
     * @member {boolean}
     * @memberof Tiny.interaction.InteractionTrackingData#
     */

  }, {
    key: "leftDown",
    get: function get() {
      return (this._flags & this.constructor.FLAGS.LEFT_DOWN) !== 0;
    }

    /**
     * Set the left down flag
     *
     * @param yn - Is the left mouse button down?
     */
    ,
    set: function set(yn) {
      this._doSet(this.constructor.FLAGS.LEFT_DOWN, yn);
    }
  }]);

  return InteractionTrackingData;
}();

exports.default = InteractionTrackingData;


InteractionTrackingData.FLAGS = Object.freeze({
  NONE: 0,
  OVER: 1 << 0,
  LEFT_DOWN: 1 << 1,
  RIGHT_DOWN: 1 << 2
});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// References:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign

if (!Math.sign) {
  Math.sign = function mathSign(x) {
    x = Number(x);

    if (x === 0 || isNaN(x)) {
      return x;
    }

    return x > 0 ? 1 : -1;
  };
}

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _objectAssign = __webpack_require__(86);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!Object.assign) {
  Object.assign = _objectAssign2.default;
} // References:
// https://github.com/sindresorhus/object-assign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// References:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// https://gist.github.com/1579671
// http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
// https://gist.github.com/timhall/4078614
// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/requestAnimationFrame

// Expected to be used with Browserfiy
// Browserify automatically detects the use of `global` and passes the
// correct reference of `global`, `self`, and finally `window`

var ONE_FRAME_TIME = 16;

// Date.now
if (!(Date.now && Date.prototype.getTime)) {
  Date.now = function now() {
    return new Date().getTime();
  };
}

// performance.now
if (!(global.performance && global.performance.now)) {
  var startTime = null;

  if (!global.performance) {
    global.performance = {};
  }

  if (global.performance.timing && global.performance.timing.navigationStart) {
    startTime = global.performance.timing.navigationStart;
  } else {
    startTime = Date.now();
    global.performance.timing = {
      navigationStart: startTime
    };
  }

  global.performance.now = function () {
    return Date.now() - startTime;
  };
}

// requestAnimationFrame
var lastTime = Date.now();
var vendors = ['ms', 'moz', 'webkit', 'o'];

for (var x = 0; x < vendors.length && !global.requestAnimationFrame; ++x) {
  var p = vendors[x];

  global.requestAnimationFrame = global[p + 'RequestAnimationFrame'];
  global.cancelAnimationFrame = global[p + 'CancelAnimationFrame'] || global[p + 'CancelRequestAnimationFrame'];
}

if (!global.requestAnimationFrame) {
  global.requestAnimationFrame = function (callback) {
    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function');
    }

    var currentTime = Date.now();
    var delay = ONE_FRAME_TIME + lastTime - currentTime;

    if (delay < 0) {
      delay = 0;
    }

    lastTime = currentTime;

    return setTimeout(function () {
      lastTime = Date.now();
      callback(performance.now());
    }, delay);
  };
}

if (!global.cancelAnimationFrame) {
  global.cancelAnimationFrame = function (id) {
    return clearTimeout(id);
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44)))

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interaction = exports.Transition = undefined;

var _polyfill = __webpack_require__(69);

Object.keys(_polyfill).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _polyfill[key];
    }
  });
});

var _core = __webpack_require__(5);

Object.keys(_core).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _core[key];
    }
  });
});

var _actions = __webpack_require__(67);

Object.keys(_actions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _actions[key];
    }
  });
});

var _Transition = __webpack_require__(30);

var _Transition2 = _interopRequireDefault(_Transition);

var _interaction = __webpack_require__(68);

var interaction = _interopRequireWildcard(_interaction);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core.mixins.performMixins();

// export libs
exports.Transition = _Transition2.default;
exports.interaction = interaction;

/***/ })
/******/ ]);
});