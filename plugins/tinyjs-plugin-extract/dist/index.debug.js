/*!
 * tinyjs-plugin-extract
 * Description: 画布扩展，获取画布的：Image 对象、base64 格式的图片、像素值等等
 * Author: yiqi
 * Version: v1.0.6
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extract"] = factory();
	else
		root["Tiny"] = root["Tiny"] || {}, root["Tiny"]["extract"] = factory();
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.canvas = exports.webgl = undefined;

	var _WebGLExtract = __webpack_require__(2);

	var _WebGLExtract2 = _interopRequireDefault(_WebGLExtract);

	var _CanvasExtract = __webpack_require__(3);

	var _CanvasExtract2 = _interopRequireDefault(_CanvasExtract);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * It provides renderer-specific plugins for exporting content from a renderer.
	 * For instance, these plugins can be used for saving an Image, Canvas element or for exporting the raw image data (pixels).
	 *
	 * Do not instantiate these plugins directly. It is available from the `renderer.plugins` property.
	 * See {@link Tiny.CanvasRenderer#plugins} or {@link Tiny.WebGLRenderer#plugins}.
	 * @example
	 * // Create a new app (will auto-add extract plugin to renderer)
	 * const app = new Tiny.Application();
	 *
	 * // Draw a red circle
	 * const graphics = new Tiny.Graphics()
	 *     .beginFill(0xFF0000)
	 *     .drawCircle(0, 0, 50);
	 *
	 * // Render the graphics as an HTMLImageElement
	 * const image = app.renderer.plugins.extract.image(graphics);
	 * document.body.appendChild(image);
	 * @namespace extract
	 */
	exports.webgl = _WebGLExtract2.default;
	exports.canvas = _CanvasExtract2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TEMP_RECT = new Tiny.Rectangle();
	var BYTES_PER_PIXEL = 4;

	/**
	 * The extract manager provides functionality to export content from the renderers.
	 *
	 * An instance of this class is automatically created by default, and can be found at renderer.plugins.extract
	 */

	var WebGLExtract = function () {
	  /**
	   * @param {Tiny.WebGLRenderer} renderer - A reference to the current renderer
	   */
	  function WebGLExtract(renderer) {
	    _classCallCheck(this, WebGLExtract);

	    this.renderer = renderer;
	    /**
	     * Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
	     *
	     * @member {Tiny.extract.WebGLExtract} extract
	     * @memberof Tiny.WebGLRenderer#
	     * @see Tiny.extract.WebGLExtract
	     */
	    renderer.extract = this;
	  }

	  /**
	   * Will return a HTML Image of the target
	   *
	   * @param {Tiny.DisplayObject|Tiny.RenderTexture} target - A displayObject or renderTexture
	   *  to convert. If left empty will use use the main renderer
	   * @return {HTMLImageElement} HTML Image of the target
	   */


	  _createClass(WebGLExtract, [{
	    key: 'image',
	    value: function image(target) {
	      var image = new Image();

	      image.src = this.base64(target);

	      return image;
	    }

	    /**
	     * Will return a a base64 encoded string of this target. It works by calling
	     *  `WebGLExtract.getCanvas` and then running toDataURL on that.
	     *
	     * @param {Tiny.DisplayObject|Tiny.RenderTexture} target - A displayObject or renderTexture
	     *  to convert. If left empty will use use the main renderer
	     * @return {string} A base64 encoded string of the texture.
	     */

	  }, {
	    key: 'base64',
	    value: function base64(target) {
	      return this.canvas(target).toDataURL();
	    }

	    /**
	     * Creates a Canvas element, renders this target to it and then returns it.
	     *
	     * @param {Tiny.DisplayObject|Tiny.RenderTexture} target - A displayObject or renderTexture
	     *  to convert. If left empty will use use the main renderer
	     * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
	     */

	  }, {
	    key: 'canvas',
	    value: function canvas(target) {
	      var renderer = this.renderer;
	      var textureBuffer = void 0;
	      var resolution = void 0;
	      var frame = void 0;
	      var flipY = false;
	      var renderTexture = void 0;

	      if (target) {
	        if (target instanceof Tiny.RenderTexture) {
	          renderTexture = target;
	        } else {
	          renderTexture = this.renderer.generateTexture(target);
	        }
	      }

	      if (renderTexture) {
	        textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
	        resolution = textureBuffer.resolution;
	        frame = renderTexture.frame;
	        flipY = false;
	      } else {
	        textureBuffer = this.renderer.rootRenderTarget;
	        resolution = textureBuffer.resolution;
	        flipY = true;

	        frame = TEMP_RECT;
	        frame.width = textureBuffer.size.width;
	        frame.height = textureBuffer.size.height;
	      }

	      var width = frame.width * resolution;
	      var height = frame.height * resolution;

	      var canvasBuffer = new Tiny.CanvasRenderTarget(width, height);

	      if (textureBuffer) {
	        // bind the buffer
	        renderer.bindRenderTarget(textureBuffer);

	        // set up an array of pixels
	        var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);

	        // read pixels to the array
	        var gl = renderer.gl;

	        gl.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webglPixels);

	        // add the pixels to the canvas
	        var canvasData = canvasBuffer.context.getImageData(0, 0, width, height);

	        canvasData.data.set(webglPixels);

	        canvasBuffer.context.putImageData(canvasData, 0, 0);

	        // pulling pixels
	        if (flipY) {
	          canvasBuffer.context.scale(1, -1);
	          canvasBuffer.context.drawImage(canvasBuffer.canvas, 0, -height);
	        }
	      }

	      // send the canvas back..
	      return canvasBuffer.canvas;
	    }

	    /**
	     * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
	     * order, with integer values between 0 and 255 (included).
	     *
	     * @param {Tiny.DisplayObject|Tiny.RenderTexture} target - A displayObject or renderTexture
	     *  to convert. If left empty will use use the main renderer
	     * @return {Uint8ClampedArray} One-dimensional array containing the pixel data of the entire texture
	     */

	  }, {
	    key: 'pixels',
	    value: function pixels(target) {
	      var renderer = this.renderer;
	      var textureBuffer = void 0;
	      var resolution = void 0;
	      var frame = void 0;
	      var renderTexture = void 0;

	      if (target) {
	        if (target instanceof Tiny.RenderTexture) {
	          renderTexture = target;
	        } else {
	          renderTexture = this.renderer.generateTexture(target);
	        }
	      }

	      if (renderTexture) {
	        textureBuffer = renderTexture.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID];
	        resolution = textureBuffer.resolution;
	        frame = renderTexture.frame;
	      } else {
	        textureBuffer = this.renderer.rootRenderTarget;
	        resolution = textureBuffer.resolution;

	        frame = TEMP_RECT;
	        frame.width = textureBuffer.size.width;
	        frame.height = textureBuffer.size.height;
	      }

	      var width = frame.width * resolution;
	      var height = frame.height * resolution;

	      var webglPixels = new Uint8Array(BYTES_PER_PIXEL * width * height);

	      if (textureBuffer) {
	        // bind the buffer
	        renderer.bindRenderTarget(textureBuffer);
	        // read pixels to the array
	        var gl = renderer.gl;

	        gl.readPixels(frame.x * resolution, frame.y * resolution, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webglPixels);
	      }

	      return webglPixels;
	    }

	    /**
	     * Destroys the extract
	     *
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.renderer.extract = null;
	      this.renderer = null;
	    }
	  }]);

	  return WebGLExtract;
	}();

	Tiny.WebGLRenderer.registerPlugin('extract', WebGLExtract);

	exports.default = WebGLExtract;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TEMP_RECT = new Tiny.Rectangle();

	/**
	 * The extract manager provides functionality to export content from the renderers.
	 *
	 * An instance of this class is automatically created by default, and can be found at renderer.plugins.extract
	 */

	var CanvasExtract = function () {
	  /**
	   * @param {Tiny.CanvasRenderer} renderer - A reference to the current renderer
	   */
	  function CanvasExtract(renderer) {
	    _classCallCheck(this, CanvasExtract);

	    this.renderer = renderer;
	    /**
	     * Collection of methods for extracting data (image, pixels, etc.) from a display object or render texture
	     *
	     * @member {Tiny.extract.CanvasExtract} extract
	     * @memberof Tiny.CanvasRenderer#
	     * @see Tiny.extract.CanvasExtract
	     */
	    renderer.extract = this;
	  }

	  /**
	   * Will return a HTML Image of the target
	   *
	   * @param {Tiny.DisplayObject|Tiny.RenderTexture} target - A displayObject or renderTexture
	   *  to convert. If left empty will use use the main renderer
	   * @return {HTMLImageElement} HTML Image of the target
	   */


	  _createClass(CanvasExtract, [{
	    key: 'image',
	    value: function image(target) {
	      var image = new Image();

	      image.src = this.base64(target);

	      return image;
	    }

	    /**
	     * Will return a a base64 encoded string of this target. It works by calling
	     *  `CanvasExtract.getCanvas` and then running toDataURL on that.
	     *
	     * @param {Tiny.DisplayObject|Tiny.RenderTexture} target - A displayObject or renderTexture
	     *  to convert. If left empty will use use the main renderer
	     * @return {string} A base64 encoded string of the texture.
	     */

	  }, {
	    key: 'base64',
	    value: function base64(target) {
	      return this.canvas(target).toDataURL();
	    }

	    /**
	     * Creates a Canvas element, renders this target to it and then returns it.
	     *
	     * @param {Tiny.DisplayObject|Tiny.RenderTexture} target - A displayObject or renderTexture
	     *  to convert. If left empty will use use the main renderer
	     * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.
	     */

	  }, {
	    key: 'canvas',
	    value: function canvas(target) {
	      var renderer = this.renderer;
	      var context = void 0;
	      var resolution = void 0;
	      var frame = void 0;
	      var renderTexture = void 0;

	      if (target) {
	        if (target instanceof Tiny.RenderTexture) {
	          renderTexture = target;
	        } else {
	          renderTexture = renderer.generateTexture(target);
	        }
	      }

	      if (renderTexture) {
	        context = renderTexture.baseTexture._canvasRenderTarget.context;
	        resolution = renderTexture.baseTexture._canvasRenderTarget.resolution;
	        frame = renderTexture.frame;
	      } else {
	        context = renderer.rootContext;

	        frame = TEMP_RECT;
	        frame.width = this.renderer.width;
	        frame.height = this.renderer.height;
	      }

	      var width = frame.width * resolution;
	      var height = frame.height * resolution;

	      var canvasBuffer = new Tiny.CanvasRenderTarget(width, height);
	      var canvasData = context.getImageData(frame.x * resolution, frame.y * resolution, width, height);

	      canvasBuffer.context.putImageData(canvasData, 0, 0);

	      // send the canvas back..
	      return canvasBuffer.canvas;
	    }

	    /**
	     * Will return a one-dimensional array containing the pixel data of the entire texture in RGBA
	     * order, with integer values between 0 and 255 (included).
	     *
	     * @param {Tiny.DisplayObject|Tiny.RenderTexture} target - A displayObject or renderTexture
	     *  to convert. If left empty will use use the main renderer
	     * @return {Uint8ClampedArray} One-dimensional array containing the pixel data of the entire texture
	     */

	  }, {
	    key: 'pixels',
	    value: function pixels(target) {
	      var renderer = this.renderer;
	      var context = void 0;
	      var resolution = void 0;
	      var frame = void 0;
	      var renderTexture = void 0;

	      if (target) {
	        if (target instanceof Tiny.RenderTexture) {
	          renderTexture = target;
	        } else {
	          renderTexture = renderer.generateTexture(target);
	        }
	      }

	      if (renderTexture) {
	        context = renderTexture.baseTexture._canvasRenderTarget.context;
	        resolution = renderTexture.baseTexture._canvasRenderTarget.resolution;
	        frame = renderTexture.frame;
	      } else {
	        context = renderer.rootContext;

	        frame = TEMP_RECT;
	        frame.width = renderer.width;
	        frame.height = renderer.height;
	      }

	      return context.getImageData(0, 0, frame.width * resolution, frame.height * resolution).data;
	    }

	    /**
	     * Destroys the extract
	     *
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.renderer.extract = null;
	      this.renderer = null;
	    }
	  }]);

	  return CanvasExtract;
	}();

	Tiny.CanvasRenderer.registerPlugin('extract', CanvasExtract);

	exports.default = CanvasExtract;

/***/ })
/******/ ])
});
;