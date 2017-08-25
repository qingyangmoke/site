/*!
 * tinyjs-plugin-audio
 * Description: Tiny.js 音效插件
 * Author: fangjun.yfj
 * Version: v0.0.4
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["audio"] = factory();
	else
		root["Tiny"] = root["Tiny"] || {}, root["Tiny"]["audio"] = factory();
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
	exports.manager = exports.com = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * @file        Tiny.js 音效插件
	                                                                                                                                                                                                                                                                               * @author      fangjun.yfj
	                                                                                                                                                                                                                                                                               */

	/**
	 * @module audio
	 */

	/**
	 * Tiny.js
	 * @external Tiny
	 * @see {@link http://tinyjs.net/}
	 */

	var _utils = __webpack_require__(2);

	var _utils2 = _interopRequireDefault(_utils);

	var _AudioManager = __webpack_require__(3);

	var _AudioManager2 = _interopRequireDefault(_AudioManager);

	var _Audio = __webpack_require__(4);

	var _Audio2 = _interopRequireDefault(_Audio);

	var _audioParser = __webpack_require__(5);

	var _AudioAnalyser = __webpack_require__(6);

	var _AudioAnalyser2 = _interopRequireDefault(_AudioAnalyser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 音效对象
	 *<br>
	 * > Tips: 通过 `audio.com` 可以获取到 `Audio`、`AudioManager` 类和音频的 `utils` 对象。
	 *
	 * @example
	 *
	 * Object {
	 *  Audio: function Audio(data, manager)
	 *  AudioManager: function AudioManager()
	 *  ..
	 *  utils: Object {
	 *    ..
	 *    globalWebAudioContext: AudioContext
	 *    isAudioSupported: true
	 *    isHTMLAudioSupported: true
	 *    isM4aSupported: true
	 *    isMp3Supported: true
	 *    isOggSupported: true
	 *    isWavSupported: true
	 *    isWebAudioSupported: true
	 *    webAudioContext: function AudioContext()
	 *  }
	 * }
	 *
	 * @name com
	 * @return {object}
	 * @static
	 */
	var com = {
	  utils: _utils2.default,
	  AudioManager: _AudioManager2.default,
	  AudioAnalyser: _AudioAnalyser2.default,
	  Audio: _Audio2.default,
	  audioParser: _audioParser.audioParser,
	  audioUrlParser: _audioParser.audioUrlParser
	};

	var loader = Tiny.loaders.Loader;
	loader.addTinyMiddleware(com.audioParser);

	var baseAdd = loader.prototype.add;
	loader.prototype.add = function (name, url, options, cb) {
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    if (Object.prototype.toString.call(name.url) === '[object Array]') {
	      name.url = com.audioUrlParser(name.url);
	    }
	  }

	  if (Object.prototype.toString.call(url) === '[object Array]') {
	    url = com.audioUrlParser(url);
	  }

	  if (Tiny.isArray(name)) {
	    name.forEach(function (item, i) {
	      var s = void 0;
	      if (item.url) {
	        s = com.audioUrlParser(item.url);
	        s && (name[i].url = s);
	      } else {
	        s = com.audioUrlParser(item);
	        s && (name[i] = s);
	      }
	    });
	  }

	  return baseAdd.call(this, name, url, options, cb);
	};

	// 覆盖 Loader
	if (Tiny.Loader) {
	  Tiny.Loader = loader ? new loader() : null; // eslint-disable-line
	}

	/**
	 * 为了方便和性能优化，Tiny 将 AudioManager 实例化出来，你可以通过 `Tiny.audio.manager` 直接使用
	 *
	 * @example
	 *
	 * var audio = Tiny.audio.manager.getAudio('...');
	 * audio.play();
	 *
	 * @name manager
	 * @type {Tiny.audio.manager}
	 * @static
	 */
	var manager = new com.AudioManager();
	exports.com = com;
	exports.manager = manager;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Resource = Tiny.loaders.Resource;

	var isHTMLAudioSupported = !!window.Audio;
	var webAudioContext = window.AudioContext || window.webkitAudioContext;
	var isWebAudioSupported = !!webAudioContext;
	var isAudioSupported = isWebAudioSupported || isHTMLAudioSupported;
	var isMp3Supported = false;
	var isOggSupported = false;
	var isWavSupported = false;
	var isM4aSupported = false;
	var createGainNode = null;
	var globalWebAudioContext = isWebAudioSupported ? new webAudioContext() : null; // eslint-disable-line

	if (isAudioSupported) {
	  var audio = document.createElement('audio');
	  isMp3Supported = audio.canPlayType('audio/mpeg;') !== '';
	  isOggSupported = audio.canPlayType('audio/ogg; codecs="vorbis"') !== '';
	  isWavSupported = audio.canPlayType('audio/wav') !== '';
	  isM4aSupported = audio.canPlayType('audio/mp4; codecs="mp4a.40.5"') !== '';

	  //Add some config to the pixi loader
	  if (isMp3Supported) _setAudioExt('mp3');
	  if (isOggSupported) _setAudioExt('ogg');
	  if (isWavSupported) _setAudioExt('wav');
	  if (isM4aSupported) _setAudioExt('m4a');

	  if (isWebAudioSupported) {
	    createGainNode = function createGainNode() {
	      return globalWebAudioContext.createGain ? globalWebAudioContext.createGain() : globalWebAudioContext.createGainNode();
	    };
	  }
	}

	function _setAudioExt(ext) {
	  if (isWebAudioSupported) {
	    // fixed
	    delete Resource._loadTypeMap['mp3'];
	    delete Resource._loadTypeMap['ogg'];
	    delete Resource._loadTypeMap['wav'];
	    Resource._xhrTypeMap['mp3'] = Resource.XHR_RESPONSE_TYPE.BUFFER;
	    Resource._xhrTypeMap['ogg'] = Resource.XHR_RESPONSE_TYPE.BUFFER;
	    Resource._xhrTypeMap['wav'] = Resource.XHR_RESPONSE_TYPE.BUFFER;
	    Resource.setExtensionXhrType(ext, Resource.XHR_RESPONSE_TYPE.BUFFER);
	  } else {
	    Resource.setExtensionLoadType(ext, Resource.LOAD_TYPE.AUDIO);
	  }
	}

	exports.default = {
	  isHTMLAudioSupported: isHTMLAudioSupported,
	  webAudioContext: webAudioContext,
	  isWebAudioSupported: isWebAudioSupported,
	  isAudioSupported: isAudioSupported,
	  isMp3Supported: isMp3Supported,
	  isOggSupported: isOggSupported,
	  isWavSupported: isWavSupported,
	  isM4aSupported: isM4aSupported,
	  globalWebAudioContext: globalWebAudioContext,
	  createGainNode: createGainNode
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(1);

	var _Audio = __webpack_require__(4);

	var _Audio2 = _interopRequireDefault(_Audio);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * 音效管理类
	 *
	 * @class
	 */
	var AudioManager = function () {
	  /**
	   *
	   */
	  function AudioManager() {
	    _classCallCheck(this, AudioManager);

	    /**
	     * 当前环境是否支持音效
	     *
	     * @member {boolean}
	     */
	    //this.enabled = utils.isAudioSupported;

	    /**
	     * 实例化之后的音效集合
	     *
	     * @member {array}
	     */
	    this.sounds = [];
	  }

	  /**
	   * 获取音效实例
	   *
	   * @param {string} name
	   * @return {Tiny.audio.com.Audio}
	   */


	  _createClass(AudioManager, [{
	    key: 'getAudio',
	    value: function getAudio(name) {
	      var audio = new _Audio2.default(AudioManager.audios[_index.com.audioUrlParser(name) || name], this);
	      this.sounds.push(audio);
	      return audio;
	    }

	    /**
	     * 从音效集合 `sounds` 中移除某个音效的实例化对象
	     *
	     * @param {Tiny.audio.com.Audio} audio
	     */

	  }, {
	    key: 'removeAudio',
	    value: function removeAudio(audio) {
	      var index = this.sounds.indexOf(audio);
	      if (index !== -1) {
	        this.sounds.splice(index, 1);
	      }
	    }

	    /**
	     * 暂停所有音效，入参是 `false` 就播放所有音效
	     * @param {boolean} value
	     */

	  }, {
	    key: 'pause',
	    value: function pause(value) {
	      value = value !== false;
	      var len = this.sounds.length;
	      if (value) {
	        for (var i = 0; i < len; i++) {
	          this.sounds[i].pause();
	        }return;
	      }

	      for (var _i = 0; _i < len; _i++) {
	        this.sounds[_i].play();
	      }
	    }

	    /**
	     * 恢复所有音效播放
	     */

	  }, {
	    key: 'resume',
	    value: function resume() {
	      return this.pause(false);
	    }
	  }]);

	  return AudioManager;
	}();

	/**
	 * 存储所有加载的音效 `AudioBuffer` 或 `HTMLAudioElement`
	 *
	 * @static
	 * @type {object}
	 */


	AudioManager.audios = {};

	exports.default = AudioManager;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * 音效类
	 *
	 * @class
	 * @extends Tiny.EventEmitter
	 */
	var Audio = function (_Tiny$EventEmitter) {
	  _inherits(Audio, _Tiny$EventEmitter);

	  /**
	   *
	   * @param {AudioBuffer|HTMLAudioElement}  data    音效数据
	   * @param {Tiny.audio.manager}       manager 音效管理对象
	   */
	  function Audio(data, manager) {
	    _classCallCheck(this, Audio);

	    /**
	     * 音效管理对象
	     *
	     * @member {Tiny.audio.manager}
	     */
	    var _this = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));

	    _this.manager = manager;

	    /**
	     * 音效数据
	     * @member {AudioBuffer|HTMLAudioElement}
	     */
	    _this.data = data;

	    if (!_utils2.default.isWebAudioSupported) {
	      _this.audio = new window.Audio();
	      _this.audio.addEventListener('ended', _this._onEnd.bind(_this));
	    } else {
	      _this.context = _utils2.default.globalWebAudioContext;
	      _this.gainNode = _utils2.default.createGainNode();
	    }

	    _this.reset();
	    return _this;
	  }

	  /**
	   * 播放音效
	   *
	   * @param {boolean}  pause  是否从暂停点播放
	   * @return {Tiny.audio.com.Audio}
	   */


	  _createClass(Audio, [{
	    key: 'play',
	    value: function play() {
	      if (this.playing) return this;
	      this.playing = true;
	      this.emit('play');

	      if (_utils2.default.isWebAudioSupported) {
	        // 创建AudioBufferNode
	        this.source = this.context.createBufferSource();

	        // 兼容浏览器处理start和stop方法
	        this.source.start = this.source.start || this.source.noteOn;
	        this.source.stop = this.source.stop || this.source.noteOff;

	        // 设置是否循环
	        this.source.loop = this.loop;

	        // 监听音频onended事件
	        this.source.onended = this._onEnd.bind(this);

	        this._startTime = this.context.currentTime;

	        // 将音频源链接到gainNode音频处理节点（gainNode接口表示音量变更，调节音量。）
	        this.source.connect(this.gainNode);

	        // 将gainNode连接到硬件设备
	        this.gainNode.connect(this.context.destination);

	        // 设置音频源buffer数据
	        this.source.buffer = this.data;

	        // 播放音频数据
	        this.source.start(0, this._paused ? this._lastPauseTime : 0);
	      } else {
	        this.audio.src = this.data.children[0].src;
	        this.audio.preload = 'auto';
	        this.audio.load();
	        this.audio.play();
	      }

	      return this;
	    }

	    /**
	     * 停止播放音效
	     *
	     * @return {Tiny.audio.com.Audio}
	     */

	  }, {
	    key: 'stop',
	    value: function stop() {
	      this.emit('stop');

	      if (_utils2.default.isWebAudioSupported) {
	        this.source.stop(0);
	        this._paused = false;
	        this._startTime = this.context.currentTime;
	      } else {
	        this.audio.pause();
	        this.audio.currentTime = 0;
	      }
	      this.playing = false;
	      this._paused = false;
	      this.reset();

	      return this;
	    }
	  }, {
	    key: 'pause',
	    value: function pause() {
	      if (!this.playing) return this;

	      this.emit('pause');
	      this._offsetTime += this.context.currentTime - this._startTime;
	      this._lastPauseTime = this._offsetTime % this.data.duration;
	      if (_utils2.default.isWebAudioSupported) {
	        this.source.stop(0);
	      } else {
	        this.audio.pause();
	      }
	      this.playing = false;
	      this._paused = true;
	    }

	    /**
	     * 重置音效
	     */

	  }, {
	    key: 'reset',
	    value: function reset() {
	      this._startTime = 0;
	      this._lastPauseTime = 0;
	      this._offsetTime = 0;
	      this.playing = false;
	      this._paused = false;
	      if (_utils2.default.isWebAudioSupported) this.audio = null;
	    }

	    /**
	     * 将自己从 `Tiny.audio.manager` 的实例对象中移除
	     */

	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.manager.removeAudio(this);
	    }
	  }, {
	    key: '_onEnd',
	    value: function _onEnd() {
	      if (!_utils2.default.isWebAudioSupported) {
	        if (this.loop) {
	          this.audio.currentTime = 0;
	          this.audio.play();
	        } else {
	          this.reset();
	          this.emit('end');
	        }
	      } else {
	        if (!this._paused) {
	          this.reset();
	          this.emit('end');
	        }
	      }
	    }

	    /**
	     * 是否被暂停了
	     *
	     * > Tips:
	     * > 如果要设置音效暂停，直接设置这个`Tiny.Audio`实例的`paused`属性，即：`music.paused = true;`。
	     * > 再播放时可以从暂停点接着播放了：`music.play(true);`
	     *
	     * @member {Tiny.audio.com.Audio}
	     * @default false
	     */
	    //get paused() {
	    //  return this._paused;
	    //}
	    //
	    //set paused(value) {
	    //  if (value === this._paused) return;
	    //  if (value) {
	    //    if (utils.isWebAudioSupported) {
	    //      this._offsetTime += this.manager.context.currentTime - this._startTime;
	    //      this._lastPauseTime = this._offsetTime % this.audio.buffer.duration;
	    //      if (this.audio) this.audio.stop(0);
	    //    } else {
	    //      if (this.audio) this.audio.pause();
	    //    }
	    //    this.emit('pause');
	    //  } else {
	    //    if (utils.isWebAudioSupported) {
	    //      this.play(true);
	    //    } else {
	    //      if (this.audio) this.audio.play();
	    //    }
	    //    this.emit('resume');
	    //  }
	    //  this._paused = value;
	    //}

	    /**
	     * 是否循环播放
	     *
	     * @member {Tiny.audio.com.Audio}
	     * @default false
	     */

	  }, {
	    key: 'loop',
	    get: function get() {
	      return this._loop;
	    },
	    set: function set(value) {
	      if (value === this._loop) return;
	      this._loop = value;
	      if (_utils2.default.isWebAudioSupported && this.audio) {
	        this.audio.loop = value;
	      }
	    }
	  }]);

	  return Audio;
	}(Tiny.EventEmitter);

	Audio.prototype._loop = false;
	Audio.prototype._paused = false;
	Audio.prototype._startTime = 0;
	Audio.prototype._lastPauseTime = 0;
	Audio.prototype._offsetTime = 0;

	/**
	 * 音效是否正在播放
	 *
	 * @member {boolean}
	 * @readonly
	 */
	Audio.prototype.playing = false;

	exports.default = Audio;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.audioParser = audioParser;
	exports.audioUrlParser = audioUrlParser;

	var _utils = __webpack_require__(2);

	var _utils2 = _interopRequireDefault(_utils);

	var _AudioManager = __webpack_require__(3);

	var _AudioManager2 = _interopRequireDefault(_AudioManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _allowedExt = ['ogg', 'mp3'];
	var _mimeTypes = {
	  mp3: 'audio/mpeg',
	  mp4: 'audio/mp4',
	  ogg: 'audio/ogg; codecs="vorbis"',
	  m4a: 'audio/x-m4a',
	  wav: 'audio/wav; codecs="1"'
	};

	function audioParser() {
	  return function (resource, next) {
	    if (!_utils2.default.isAudioSupported || !resource.data) return next();

	    var ext = _getExt(resource.url);
	    if (_allowedExt.indexOf(ext) === -1 || !_canPlay(ext)) return next();

	    var name = resource.name || resource.url;
	    if (_utils2.default.isWebAudioSupported) {
	      _utils2.default.globalWebAudioContext.decodeAudioData(resource.data, function (buffer) {
	        _AudioManager2.default.audios[name] = buffer;
	        next();
	      });
	    } else {
	      _AudioManager2.default.audios[name] = resource.data;
	      return next();
	    }
	  };
	}

	function audioUrlParser(resourceUrl) {
	  var url = void 0;
	  if (!Tiny.isArray(resourceUrl)) {
	    var arr = [];
	    arr.push(resourceUrl);
	    resourceUrl = arr;
	  }
	  for (var i = 0; i < resourceUrl.length; i++) {
	    var ext = _getExt(resourceUrl[i]);
	    if (_allowedExt.indexOf(ext) !== -1) {
	      if (_canPlay(ext)) {
	        url = resourceUrl[i];
	      } else {
	        url = resourceUrl[i].replace(/\.[^\.\/\?\\]*(\?.*)?$/, '.' + _getCanPlayExtension()); // eslint-disable-line
	      }
	    }
	  }
	  return url;
	}

	function _getExt(url) {
	  return url.split('?').shift().split('.').pop().toLowerCase();
	}

	function _canPlay(ext) {
	  var canPlay = false;
	  switch (ext) {
	    case 'm4a':
	      canPlay = _utils2.default.isM4aSupported;
	      break;
	    case 'mp3':
	      canPlay = _utils2.default.isMp3Supported;
	      break;
	    case 'ogg':
	      canPlay = _utils2.default.isOggSupported;
	      break;
	    case 'wav':
	      canPlay = _utils2.default.isWavSupported;
	      break;
	  }

	  return canPlay;
	}

	function _getCanPlayExtension() {
	  var audio = new Audio();
	  return Tiny.detect(_allowedExt, function (extension) {
	    return audio.canPlayType(_mimeTypes[extension]) ? extension : null;
	  });
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(2);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * 音频分析器
	 *
	 * @class
	 */

	var AudioAnalyser = function () {
	  function AudioAnalyser(audio, fftSize) {
	    _classCallCheck(this, AudioAnalyser);

	    this.analyser = audio.context.createAnalyser();
	    this.analyser.fftSize = fftSize || 2048;
	    this.data = new Uint8Array(this.analyser.frequencyBinCount);

	    audio.gainNode.connect(this.analyser);
	  }

	  _createClass(AudioAnalyser, [{
	    key: 'getFrequencyData',
	    value: function getFrequencyData() {
	      this.analyser.getByteFrequencyData(this.data);

	      return this.data;
	    }
	  }, {
	    key: 'getAverageFrequency',
	    value: function getAverageFrequency() {
	      var value = 0;
	      var data = this.getFrequencyData();

	      for (var i = 0; i < data.length; i++) {
	        value += data[i];
	      }

	      return value / data.length;
	    }
	  }]);

	  return AudioAnalyser;
	}();

	exports.default = AudioAnalyser;

/***/ })
/******/ ])
});
;