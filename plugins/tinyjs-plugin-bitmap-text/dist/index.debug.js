/*!
 * tinyjs-plugin-bitmap-text
 * Description: Create a line or multiple lines of text using bitmap font
 * Author: fangjun.yfj
 * Version: v0.0.3
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BitmapText"] = factory();
	else
		root["Tiny"] = root["Tiny"] || {}, root["Tiny"]["BitmapText"] = factory();
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

	var _bitmapFontParser = __webpack_require__(2);

	var _bitmapFontParser2 = _interopRequireDefault(_bitmapFontParser);

	var _BitmapText = __webpack_require__(5);

	var _BitmapText2 = _interopRequireDefault(_BitmapText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @file        Create a line or multiple lines of text using bitmap font
	 * @author      fangjun.yfj
	 */

	/**
	 * Tiny.js
	 * @external Tiny
	 * @see {@link http://tinyjs.net/}
	 */

	var loader = Tiny.loaders.Loader;
	loader.addTinyMiddleware(_bitmapFontParser2.default);

	// 覆盖 Loader
	if (Tiny.Loader) {
	  Tiny.Loader = loader ? new loader() : null; // eslint-disable-line
	}

	module.exports = _BitmapText2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.parse = parse;

	exports.default = function () {
	  return function bitmapFontParser(resource, next) {
	    // skip if no data or not xml data
	    if (!resource.data || resource.type !== Resource.TYPE.XML) {
	      next();

	      return;
	    }

	    // skip if not bitmap font data, using some silly duck-typing
	    if (resource.data.getElementsByTagName('page').length === 0 || resource.data.getElementsByTagName('info').length === 0 || resource.data.getElementsByTagName('info')[0].getAttribute('face') === null) {
	      next();

	      return;
	    }

	    var xmlUrl = !resource.isDataUrl ? path.dirname(resource.url) : '';

	    if (resource.isDataUrl) {
	      if (xmlUrl === '.') {
	        xmlUrl = '';
	      }

	      if (this.baseUrl && xmlUrl) {
	        // if baseurl has a trailing slash then add one to xmlUrl so the replace works below
	        if (this.baseUrl.charAt(this.baseUrl.length - 1) === '/') {
	          xmlUrl += '/';
	        }

	        // remove baseUrl from xmlUrl
	        xmlUrl = xmlUrl.replace(this.baseUrl, '');
	      }
	    }

	    // if there is an xmlUrl now, it needs a trailing slash. Ensure that it does if the string isn't empty.
	    if (xmlUrl && xmlUrl.charAt(xmlUrl.length - 1) !== '/') {
	      xmlUrl += '/';
	    }

	    var textureUrl = xmlUrl + resource.data.getElementsByTagName('page')[0].getAttribute('file');

	    if (Tiny.TextureCache[textureUrl]) {
	      // reuse existing texture
	      parse(resource, Tiny.TextureCache[textureUrl]);
	      next();
	    } else {
	      var loadOptions = {
	        crossOrigin: resource.crossOrigin,
	        loadType: Resource.LOAD_TYPE.IMAGE,
	        metadata: resource.metadata.imageMetadata,
	        parentResource: resource
	      };

	      // load the texture for the font
	      this.add(resource.name + '_image', textureUrl, loadOptions, function (res) {
	        parse(resource, res.texture);
	        next();
	      });
	    }
	  };
	};

	var _path = __webpack_require__(3);

	var path = _interopRequireWildcard(_path);

	var _BitmapText = __webpack_require__(5);

	var _BitmapText2 = _interopRequireDefault(_BitmapText);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	var Resource = Tiny.loaders.Resource;

	function parse(resource, texture) {
	  resource.bitmapFont = _BitmapText2.default.registerFont(resource.data, texture);
	}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

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
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A BitmapText object will create a line or multiple lines of text using bitmap font. To
	 * split a line you can use '\n', '\r' or '\r\n' in your string. You can generate the fnt files using:
	 * <br>
	 * <br>
	 * A BitmapText can only be created when the font is loaded
	 * <br>
	 * http://www.angelcode.com/products/bmfont/ for windows
	 * <br>
	 * http://www.bmglyph.com/ for mac.
	 *
	 * @example
	 *
	 * // in this case the font is in a file called 'desyrel.fnt'
	 * let bitmapText = new Tiny.BitmapText("text using a fancy font!", {font: "35px Desyrel", align: "right"});
	 *
	 * @extends Tiny.Container
	 */
	var BitmapText = function (_Tiny$Container) {
	  _inherits(BitmapText, _Tiny$Container);

	  /**
	   * @param {string} text - The copy that you would like the text to display
	   * @param {object} style - The style parameters
	   * @param {string|object} style.font - The font descriptor for the object, can be passed as a string of form
	   *      "24px FontName" or "FontName" or as an object with explicit name/size properties.
	   * @param {string} [style.font.name] - The bitmap font id
	   * @param {number} [style.font.size] - The size of the font in pixels, e.g. 24
	   * @param {string} [style.align='left'] - Alignment for multiline text ('left', 'center' or 'right'), does not affect
	   *      single line text
	   * @param {number} [style.tint=0xFFFFFF] - The tint color
	   */
	  function BitmapText(text) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(this, BitmapText);

	    /**
	     * Private tracker for the width of the overall text
	     *
	     * @member {number}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, (BitmapText.__proto__ || Object.getPrototypeOf(BitmapText)).call(this));

	    _this._textWidth = 0;

	    /**
	     * Private tracker for the height of the overall text
	     *
	     * @member {number}
	     * @private
	     */
	    _this._textHeight = 0;

	    /**
	     * Private tracker for the letter sprite pool.
	     *
	     * @member {Tiny.Sprite[]}
	     * @private
	     */
	    _this._glyphs = [];

	    /**
	     * Private tracker for the current style.
	     *
	     * @member {object}
	     * @private
	     */
	    _this._font = {
	      tint: style.tint !== undefined ? style.tint : 0xFFFFFF,
	      align: style.align || 'left',
	      name: null,
	      size: 0
	    };

	    /**
	     * Private tracker for the current font.
	     *
	     * @member {object}
	     * @private
	     */
	    _this.font = style.font; // run font setter

	    /**
	     * Private tracker for the current text.
	     *
	     * @member {string}
	     * @private
	     */
	    _this._text = text;

	    /**
	     * The max width of this bitmap text in pixels. If the text provided is longer than the
	     * value provided, line breaks will be automatically inserted in the last whitespace.
	     * Disable by setting value to 0
	     *
	     * @member {number}
	     */
	    _this.maxWidth = 0;

	    /**
	     * The max line height. This is useful when trying to use the total height of the Text,
	     * ie: when trying to vertically align.
	     *
	     * @member {number}
	     */
	    _this.maxLineHeight = 0;

	    /**
	     * Text anchor. read-only
	     *
	     * @member {Tiny.ObservablePoint}
	     * @private
	     */
	    _this._anchor = new Tiny.ObservablePoint(function () {
	      _this.dirty = true;
	    }, _this, 0, 0);

	    /**
	     * The dirty state of this object.
	     *
	     * @member {boolean}
	     */
	    _this.dirty = false;

	    _this.updateText();
	    return _this;
	  }

	  /**
	   * Renders text and updates it when needed
	   *
	   * @private
	   */


	  _createClass(BitmapText, [{
	    key: 'updateText',
	    value: function updateText() {
	      var data = BitmapText.fonts[this._font.name];
	      var scale = this._font.size / data.size;
	      var pos = new Tiny.Point();
	      var chars = [];
	      var lineWidths = [];

	      var prevCharCode = null;
	      var lastLineWidth = 0;
	      var maxLineWidth = 0;
	      var line = 0;
	      var lastSpace = -1;
	      var lastSpaceWidth = 0;
	      var maxLineHeight = 0;

	      for (var i = 0; i < this.text.length; i++) {
	        var charCode = this.text.charCodeAt(i);

	        if (/(\s)/.test(this.text.charAt(i))) {
	          lastSpace = i;
	          lastSpaceWidth = lastLineWidth;
	        }

	        if (/(?:\r\n|\r|\n)/.test(this.text.charAt(i))) {
	          lineWidths.push(lastLineWidth);
	          maxLineWidth = Math.max(maxLineWidth, lastLineWidth);
	          line++;

	          pos.x = 0;
	          pos.y += data.lineHeight;
	          prevCharCode = null;
	          continue;
	        }

	        if (lastSpace !== -1 && this.maxWidth > 0 && pos.x * scale > this.maxWidth) {
	          Tiny.removeItems(chars, lastSpace, i - lastSpace);
	          i = lastSpace;
	          lastSpace = -1;

	          lineWidths.push(lastSpaceWidth);
	          maxLineWidth = Math.max(maxLineWidth, lastSpaceWidth);
	          line++;

	          pos.x = 0;
	          pos.y += data.lineHeight;
	          prevCharCode = null;
	          continue;
	        }

	        var charData = data.chars[charCode];

	        if (!charData) {
	          continue;
	        }

	        if (prevCharCode && charData.kerning[prevCharCode]) {
	          pos.x += charData.kerning[prevCharCode];
	        }

	        chars.push({
	          texture: charData.texture,
	          line: line,
	          charCode: charCode,
	          position: new Tiny.Point(pos.x + charData.xOffset, pos.y + charData.yOffset)
	        });
	        lastLineWidth = pos.x + (charData.texture.width + charData.xOffset);
	        pos.x += charData.xAdvance;
	        maxLineHeight = Math.max(maxLineHeight, charData.yOffset + charData.texture.height);
	        prevCharCode = charCode;
	      }

	      lineWidths.push(lastLineWidth);
	      maxLineWidth = Math.max(maxLineWidth, lastLineWidth);

	      var lineAlignOffsets = [];

	      for (var _i = 0; _i <= line; _i++) {
	        var alignOffset = 0;

	        if (this._font.align === 'right') {
	          alignOffset = maxLineWidth - lineWidths[_i];
	        } else if (this._font.align === 'center') {
	          alignOffset = (maxLineWidth - lineWidths[_i]) / 2;
	        }

	        lineAlignOffsets.push(alignOffset);
	      }

	      var lenChars = chars.length;
	      var tint = this.tint;

	      for (var _i2 = 0; _i2 < lenChars; _i2++) {
	        var c = this._glyphs[_i2]; // get the next glyph sprite

	        if (c) {
	          c.texture = chars[_i2].texture;
	        } else {
	          c = new Tiny.Sprite(chars[_i2].texture);
	          this._glyphs.push(c);
	        }

	        c.position.x = (chars[_i2].position.x + lineAlignOffsets[chars[_i2].line]) * scale;
	        c.position.y = chars[_i2].position.y * scale;
	        c.scale.x = c.scale.y = scale;
	        c.tint = tint;

	        if (!c.parent) {
	          this.addChild(c);
	        }
	      }

	      // remove unnecessary children.
	      for (var _i3 = lenChars; _i3 < this._glyphs.length; ++_i3) {
	        this.removeChild(this._glyphs[_i3]);
	      }

	      this._textWidth = maxLineWidth * scale;
	      this._textHeight = (pos.y + data.lineHeight) * scale;

	      // apply anchor
	      if (this.anchor.x !== 0 || this.anchor.y !== 0) {
	        for (var _i4 = 0; _i4 < lenChars; _i4++) {
	          this._glyphs[_i4].x -= this._textWidth * this.anchor.x;
	          this._glyphs[_i4].y -= this._textHeight * this.anchor.y;
	        }
	      }
	      this.maxLineHeight = maxLineHeight * scale;
	    }

	    /**
	     * Updates the transform of this object
	     *
	     * @private
	     */

	  }, {
	    key: 'updateTransform',
	    value: function updateTransform() {
	      this.validate();
	      this.containerUpdateTransform();
	    }

	    /**
	     * Validates text before calling parent's getLocalBounds
	     *
	     * @return {Tiny.Rectangle} The rectangular bounding area
	     */

	  }, {
	    key: 'getLocalBounds',
	    value: function getLocalBounds() {
	      this.validate();

	      return _get(BitmapText.prototype.__proto__ || Object.getPrototypeOf(BitmapText.prototype), 'getLocalBounds', this).call(this);
	    }

	    /**
	     * Updates text when needed
	     *
	     * @private
	     */

	  }, {
	    key: 'validate',
	    value: function validate() {
	      if (this.dirty) {
	        this.updateText();
	        this.dirty = false;
	      }
	    }

	    /**
	     * The tint of the BitmapText object
	     *
	     * @member {number}
	     */

	  }, {
	    key: 'tint',
	    get: function get() {
	      return this._font.tint;
	    },
	    set: function set(value) {
	      this._font.tint = typeof value === 'number' && value >= 0 ? value : 0xFFFFFF;

	      this.dirty = true;
	    }

	    /**
	     * The alignment of the BitmapText object
	     *
	     * @member {string}
	     * @default 'left'
	     */

	  }, {
	    key: 'align',
	    get: function get() {
	      return this._font.align;
	    },
	    set: function set(value) {
	      this._font.align = value || 'left';

	      this.dirty = true;
	    }

	    /**
	     * The anchor sets the origin point of the text.
	     * The default is 0,0 this means the text's origin is the top left
	     * Setting the anchor to 0.5,0.5 means the text's origin is centered
	     * Setting the anchor to 1,1 would mean the text's origin point will be the bottom right corner
	     *
	     * @member {Tiny.Point | number}
	     */

	  }, {
	    key: 'anchor',
	    get: function get() {
	      return this._anchor;
	    },
	    set: function set(value) {
	      if (typeof value === 'number') {
	        this._anchor.set(value);
	      } else {
	        this._anchor.copy(value);
	      }
	    }

	    /**
	     * The font descriptor of the BitmapText object
	     *
	     * @member {string|object}
	     */

	  }, {
	    key: 'font',
	    get: function get() {
	      return this._font;
	    },
	    set: function set(value) {
	      if (!value) {
	        return;
	      }

	      if (typeof value === 'string') {
	        value = value.split(' ');

	        this._font.name = value.length === 1 ? value[0] : value.slice(1).join(' ');
	        this._font.size = value.length >= 2 ? parseInt(value[0], 10) : BitmapText.fonts[this._font.name].size;
	      } else {
	        this._font.name = value.name;
	        this._font.size = typeof value.size === 'number' ? value.size : parseInt(value.size, 10);
	      }

	      this.dirty = true;
	    }

	    /**
	     * The text of the BitmapText object
	     *
	     * @member {string}
	     */

	  }, {
	    key: 'text',
	    get: function get() {
	      return this._text;
	    },
	    set: function set(value) {
	      value = value.toString() || ' ';
	      if (this._text === value) {
	        return;
	      }
	      this._text = value;
	      this.dirty = true;
	    }

	    /**
	     * The width of the overall text, different from fontSize,
	     * which is defined in the style object
	     *
	     * @member {number}
	     * @readonly
	     */

	  }, {
	    key: 'textWidth',
	    get: function get() {
	      this.validate();

	      return this._textWidth;
	    }

	    /**
	     * The height of the overall text, different from fontSize,
	     * which is defined in the style object
	     *
	     * @member {number}
	     * @readonly
	     */

	  }, {
	    key: 'textHeight',
	    get: function get() {
	      this.validate();

	      return this._textHeight;
	    }

	    /**
	     * Register a bitmap font with data and a texture.
	     *
	     * @static
	     * @param {XMLDocument} xml - The XML document data.
	     * @param {Tiny.Texture} texture - Texture with all symbols.
	     * @return {Object} Result font object with font, size, lineHeight and char fields.
	     */

	  }], [{
	    key: 'registerFont',
	    value: function registerFont(xml, texture) {
	      var data = {};
	      var info = xml.getElementsByTagName('info')[0];
	      var common = xml.getElementsByTagName('common')[0];
	      var res = texture.baseTexture.resolution || Tiny.settings.RESOLUTION;

	      data.font = info.getAttribute('face');
	      data.size = parseInt(info.getAttribute('size'), 10);
	      data.lineHeight = parseInt(common.getAttribute('lineHeight'), 10) / res;
	      data.chars = {};

	      // parse letters
	      var letters = xml.getElementsByTagName('char');

	      for (var i = 0; i < letters.length; i++) {
	        var letter = letters[i];
	        var charCode = parseInt(letter.getAttribute('id'), 10);

	        var textureRect = new Tiny.Rectangle(parseInt(letter.getAttribute('x'), 10) / res + texture.frame.x / res, parseInt(letter.getAttribute('y'), 10) / res + texture.frame.y / res, parseInt(letter.getAttribute('width'), 10) / res, parseInt(letter.getAttribute('height'), 10) / res);

	        data.chars[charCode] = {
	          xOffset: parseInt(letter.getAttribute('xoffset'), 10) / res,
	          yOffset: parseInt(letter.getAttribute('yoffset'), 10) / res,
	          xAdvance: parseInt(letter.getAttribute('xadvance'), 10) / res,
	          kerning: {},
	          texture: new Tiny.Texture(texture.baseTexture, textureRect)

	        };
	      }

	      // parse kernings
	      var kernings = xml.getElementsByTagName('kerning');

	      for (var _i5 = 0; _i5 < kernings.length; _i5++) {
	        var kerning = kernings[_i5];
	        var first = parseInt(kerning.getAttribute('first'), 10) / res;
	        var second = parseInt(kerning.getAttribute('second'), 10) / res;
	        var amount = parseInt(kerning.getAttribute('amount'), 10) / res;

	        if (data.chars[second]) {
	          data.chars[second].kerning[first] = amount;
	        }
	      }

	      // I'm leaving this as a temporary fix so we can test the bitmap fonts in v3
	      // but it's very likely to change
	      BitmapText.fonts[data.font] = data;

	      return data;
	    }
	  }]);

	  return BitmapText;
	}(Tiny.Container);

	BitmapText.fonts = {};

	exports.default = BitmapText;

/***/ })
/******/ ])
});
;