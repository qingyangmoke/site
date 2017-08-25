/*!
 * tinyjs-plugin-tiling
 * Description: A fast way of rendering a tiling image
 * Author: fangjun.yfj
 * Version: v0.0.2
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tiling"] = factory();
	else
		root["Tiny"] = root["Tiny"] || {}, root["Tiny"]["tiling"] = factory();
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

	var _TilingSprite = __webpack_require__(2);

	Object.defineProperty(exports, 'TilingSprite', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TilingSprite).default;
	  }
	});

	var _TilingSpriteRenderer = __webpack_require__(3);

	Object.defineProperty(exports, 'TilingSpriteRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_TilingSpriteRenderer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
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

	var tempPoint = new Tiny.Point();

	/**
	 * A tiling sprite is a fast way of rendering a tiling image
	 *
	 * @class
	 * @extends Tiny.Sprite
	 * @memberof Tiny.tiling
	 */

	var TilingSprite = function (_Tiny$Sprite) {
	  _inherits(TilingSprite, _Tiny$Sprite);

	  /**
	   * @param {Tiny.Texture} texture - the texture of the tiling sprite
	   * @param {number} [width=100] - the width of the tiling sprite
	   * @param {number} [height=100] - the height of the tiling sprite
	   */
	  function TilingSprite(texture) {
	    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

	    _classCallCheck(this, TilingSprite);

	    /**
	     * Tile transform
	     *
	     * @member {Tiny.TransformStatic}
	     */
	    var _this = _possibleConstructorReturn(this, (TilingSprite.__proto__ || Object.getPrototypeOf(TilingSprite)).call(this, texture));

	    _this.tileTransform = new Tiny.TransformStatic();

	    // /// private

	    /**
	     * The with of the tiling sprite
	     *
	     * @member {number}
	     * @private
	     */
	    _this._width = width;

	    /**
	     * The height of the tiling sprite
	     *
	     * @member {number}
	     * @private
	     */
	    _this._height = height;

	    /**
	     * Canvas pattern
	     *
	     * @type {CanvasPattern}
	     * @private
	     */
	    _this._canvasPattern = null;

	    /**
	     * transform that is applied to UV to get the texture coords
	     *
	     * @member {Tiny.TextureTransform}
	     */
	    _this.uvTransform = texture.transform || new Tiny.TextureTransform(texture);

	    /**
	     * Plugin that is responsible for rendering this element.
	     * Allows to customize the rendering process without overriding '_renderWebGL' method.
	     *
	     * @member {string}
	     * @default 'tilingSprite'
	     */
	    _this.pluginName = 'tilingSprite';

	    /**
	     * Whether or not anchor affects uvs
	     *
	     * @member {boolean}
	     * @default false
	     */
	    _this.uvRespectAnchor = false;
	    return _this;
	  }

	  /**
	   * Changes frame clamping in corresponding textureTransform, shortcut
	   * Change to -0.5 to add a pixel to the edge, recommended for transparent trimmed textures in atlas
	   *
	   * @default 0.5
	   * @member {number}
	   */


	  _createClass(TilingSprite, [{
	    key: '_onTextureUpdate',


	    /**
	     * @private
	     */
	    value: function _onTextureUpdate() {
	      if (this.uvTransform) {
	        this.uvTransform.texture = this._texture;
	      }
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
	      // tweak our texture temporarily..
	      var texture = this._texture;

	      if (!texture || !texture.valid) {
	        return;
	      }

	      this.tileTransform.updateLocalTransform();
	      this.uvTransform.update();

	      renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
	      renderer.plugins[this.pluginName].render(this);
	    }

	    /**
	     * Renders the object using the Canvas renderer
	     *
	     * @private
	     * @param {Tiny.CanvasRenderer} renderer - a reference to the canvas renderer
	     */

	  }, {
	    key: '_renderCanvas',
	    value: function _renderCanvas(renderer) {
	      var texture = this._texture;

	      if (!texture.baseTexture.hasLoaded) {
	        return;
	      }

	      var context = renderer.context;
	      var transform = this.worldTransform;
	      var resolution = renderer.resolution;
	      var baseTexture = texture.baseTexture;
	      var baseTextureResolution = baseTexture.resolution;
	      var modX = this.tilePosition.x / this.tileScale.x % texture._frame.width * baseTextureResolution;
	      var modY = this.tilePosition.y / this.tileScale.y % texture._frame.height * baseTextureResolution;

	      // create a nice shiny pattern!
	      // TODO this needs to be refreshed if texture changes..
	      if (!this._canvasPattern) {
	        // cut an object from a spritesheet..
	        var tempCanvas = new Tiny.CanvasRenderTarget(texture._frame.width, texture._frame.height, baseTextureResolution);

	        // Tint the tiling sprite
	        if (this.tint !== 0xFFFFFF) {
	          if (this.cachedTint !== this.tint) {
	            this.cachedTint = this.tint;

	            this.tintedTexture = Tiny.CanvasTinter.getTintedTexture(this, this.tint);
	          }
	          tempCanvas.context.drawImage(this.tintedTexture, 0, 0);
	        } else {
	          tempCanvas.context.drawImage(baseTexture.source, -texture._frame.x, -texture._frame.y);
	        }
	        this._canvasPattern = tempCanvas.context.createPattern(tempCanvas.canvas, 'repeat');
	      }

	      // set context state..
	      context.globalAlpha = this.worldAlpha;
	      context.setTransform(transform.a * resolution, transform.b * resolution, transform.c * resolution, transform.d * resolution, transform.tx * resolution, transform.ty * resolution);

	      renderer.setBlendMode(this.blendMode);

	      // fill the pattern!
	      context.fillStyle = this._canvasPattern;

	      // TODO - this should be rolled into the setTransform above..
	      context.scale(this.tileScale.x / baseTextureResolution, this.tileScale.y / baseTextureResolution);

	      var anchorX = this.anchor.x * -this._width;
	      var anchorY = this.anchor.y * -this._height;

	      if (this.uvRespectAnchor) {
	        context.translate(modX, modY);

	        context.fillRect(-modX + anchorX, -modY + anchorY, this._width / this.tileScale.x * baseTextureResolution, this._height / this.tileScale.y * baseTextureResolution);
	      } else {
	        context.translate(modX + anchorX, modY + anchorY);

	        context.fillRect(-modX, -modY, this._width / this.tileScale.x * baseTextureResolution, this._height / this.tileScale.y * baseTextureResolution);
	      }
	    }

	    /**
	     * Updates the bounds of the tiling sprite.
	     *
	     * @private
	     */

	  }, {
	    key: '_calculateBounds',
	    value: function _calculateBounds() {
	      var minX = this._width * -this._anchor._x;
	      var minY = this._height * -this._anchor._y;
	      var maxX = this._width * (1 - this._anchor._x);
	      var maxY = this._height * (1 - this._anchor._y);

	      this._bounds.addFrame(this.transform, minX, minY, maxX, maxY);
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
	        this._bounds.minX = this._width * -this._anchor._x;
	        this._bounds.minY = this._height * -this._anchor._y;
	        this._bounds.maxX = this._width * (1 - this._anchor._x);
	        this._bounds.maxY = this._height * (1 - this._anchor._x);

	        if (!rect) {
	          if (!this._localBoundsRect) {
	            this._localBoundsRect = new Tiny.Rectangle();
	          }

	          rect = this._localBoundsRect;
	        }

	        return this._bounds.getRectangle(rect);
	      }

	      return _get(TilingSprite.prototype.__proto__ || Object.getPrototypeOf(TilingSprite.prototype), 'getLocalBounds', this).call(this, rect);
	    }

	    /**
	     * Checks if a point is inside this tiling sprite.
	     *
	     * @param {Tiny.Point} point - the point to check
	     * @return {boolean} Whether or not the sprite contains the point.
	     */

	  }, {
	    key: 'containsPoint',
	    value: function containsPoint(point) {
	      this.worldTransform.applyInverse(point, tempPoint);

	      var width = this._width;
	      var height = this._height;
	      var x1 = -width * this.anchor._x;

	      if (tempPoint.x > x1 && tempPoint.x < x1 + width) {
	        var y1 = -height * this.anchor._y;

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
	      _get(TilingSprite.prototype.__proto__ || Object.getPrototypeOf(TilingSprite.prototype), 'destroy', this).call(this, options);

	      this.tileTransform = null;
	      this.uvTransform = null;
	    }

	    /**
	     * Helper function that creates a new tiling sprite based on the source you provide.
	     * The source can be - frame id, image url, video url, canvas element, video element, base texture
	     *
	     * @static
	     * @param {number|string|Tiny.BaseTexture|HTMLCanvasElement|HTMLVideoElement} source - Source to create texture from
	     * @param {number} width - the width of the tiling sprite
	     * @param {number} height - the height of the tiling sprite
	     * @return {Tiny.Texture} The newly created texture
	     */

	  }, {
	    key: 'clampMargin',
	    get: function get() {
	      return this.uvTransform.clampMargin;
	    },
	    set: function set(value) {
	      this.uvTransform.clampMargin = value;
	      this.uvTransform.update(true);
	    }

	    /**
	     * The scaling of the image that is being tiled
	     *
	     * @member {Tiny.ObservablePoint}
	     */

	  }, {
	    key: 'tileScale',
	    get: function get() {
	      return this.tileTransform.scale;
	    },
	    set: function set(value) {
	      this.tileTransform.scale.copy(value);
	    }

	    /**
	     * The offset of the image that is being tiled
	     *
	     * @member {Tiny.ObservablePoint}
	     */

	  }, {
	    key: 'tilePosition',
	    get: function get() {
	      return this.tileTransform.position;
	    },
	    set: function set(value) {
	      this.tileTransform.position.copy(value);
	    }
	  }, {
	    key: 'width',


	    /**
	     * The width of the sprite, setting this will actually modify the scale to achieve the value set
	     *
	     * @member {number}
	     */
	    get: function get() {
	      return this._width;
	    },
	    set: function set(value) {
	      this._width = value;
	    }

	    /**
	     * The height of the TilingSprite, setting this will actually modify the scale to achieve the value set
	     *
	     * @member {number}
	     */

	  }, {
	    key: 'height',
	    get: function get() {
	      return this._height;
	    },
	    set: function set(value) {
	      this._height = value;
	    }
	  }], [{
	    key: 'from',
	    value: function from(source, width, height) {
	      return new TilingSprite(Tiny.Texture.from(source), width, height);
	    }

	    /**
	     * Helper function that creates a tiling sprite that will use a texture from the TextureCache based on the frameId
	     * The frame ids are created when a Texture packer file has been loaded
	     *
	     * @static
	     * @param {string} frameId - The frame Id of the texture in the cache
	     * @param {number} width - the width of the tiling sprite
	     * @param {number} height - the height of the tiling sprite
	     * @return {Tiny.TilingSprite} A new TilingSprite using a texture from the texture cache matching the frameId
	     */

	  }, {
	    key: 'fromFrame',
	    value: function fromFrame(frameId, width, height) {
	      var texture = Tiny.TextureCache[frameId];

	      if (!texture) {
	        throw new Error('The frameId "' + frameId + '" does not exist in the texture cache ' + this);
	      }

	      return new TilingSprite(texture, width, height);
	    }

	    /**
	     * Helper function that creates a sprite that will contain a texture based on an image url
	     * If the image is not in the texture cache it will be loaded
	     *
	     * @static
	     * @param {string} imageId - The image url of the texture
	     * @param {number} width - the width of the tiling sprite
	     * @param {number} height - the height of the tiling sprite
	     * @param {boolean} [crossorigin] - if you want to specify the cross-origin parameter
	     * @param {number} [scaleMode=Tiny.SCALE_MODE] - if you want to specify the scale mode,
	     *  see {@link Tiny.SCALE_MODES} for possible values
	     * @return {Tiny.TilingSprite} A new TilingSprite using a texture from the texture cache matching the image id
	     */

	  }, {
	    key: 'fromImage',
	    value: function fromImage(imageId, width, height, crossorigin, scaleMode) {
	      return new TilingSprite(Tiny.Texture.fromImage(imageId, crossorigin, scaleMode), width, height);
	    }
	  }]);

	  return TilingSprite;
	}(Tiny.Sprite);

	exports.default = TilingSprite;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _path = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tempMat = new Tiny.Matrix();
	var tempArray = new Float32Array(4);

	/**
	 * WebGL renderer plugin for tiling sprites
	 *
	 * @class
	 * @memberof Tiny.tiling
	 * @extends Tiny.ObjectRenderer
	 */

	var TilingSpriteRenderer = function (_Tiny$ObjectRenderer) {
	  _inherits(TilingSpriteRenderer, _Tiny$ObjectRenderer);

	  /**
	   * constructor for renderer
	   *
	   * @param {WebGLRenderer} renderer The renderer this tiling awesomeness works for.
	   */
	  function TilingSpriteRenderer(renderer) {
	    _classCallCheck(this, TilingSpriteRenderer);

	    var _this = _possibleConstructorReturn(this, (TilingSpriteRenderer.__proto__ || Object.getPrototypeOf(TilingSpriteRenderer)).call(this, renderer));

	    _this.shader = null;
	    _this.simpleShader = null;
	    _this.quad = null;
	    return _this;
	  }

	  /**
	   * Sets up the renderer context and necessary buffers.
	   *
	   * @private
	   */


	  _createClass(TilingSpriteRenderer, [{
	    key: 'onContextChange',
	    value: function onContextChange() {
	      var gl = this.renderer.gl;

	      this.shader = new Tiny.Shader(gl, 'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n', 'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n\n    gl_FragColor = sample * color ;\n}\n');
	      this.simpleShader = new Tiny.Shader(gl, 'attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n', 'varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    vec4 color = vec4(uColor.rgb * uColor.a, uColor.a);\n    gl_FragColor = sample * color;\n}\n');

	      this.renderer.bindVao(null);
	      this.quad = new Tiny.Quad(gl, this.renderer.state.attribState);
	      this.quad.initVao(this.shader);
	    }

	    /**
	     *
	     * @param {Tiny.extras.TilingSprite} ts tilingSprite to be rendered
	     */

	  }, {
	    key: 'render',
	    value: function render(ts) {
	      var renderer = this.renderer;
	      var quad = this.quad;

	      renderer.bindVao(quad.vao);

	      var vertices = quad.vertices;

	      vertices[0] = vertices[6] = ts._width * -ts.anchor.x;
	      vertices[1] = vertices[3] = ts._height * -ts.anchor.y;

	      vertices[2] = vertices[4] = ts._width * (1.0 - ts.anchor.x);
	      vertices[5] = vertices[7] = ts._height * (1.0 - ts.anchor.y);

	      if (ts.uvRespectAnchor) {
	        vertices = quad.uvs;

	        vertices[0] = vertices[6] = -ts.anchor.x;
	        vertices[1] = vertices[3] = -ts.anchor.y;

	        vertices[2] = vertices[4] = 1.0 - ts.anchor.x;
	        vertices[5] = vertices[7] = 1.0 - ts.anchor.y;
	      }

	      quad.upload();

	      var tex = ts._texture;
	      var baseTex = tex.baseTexture;
	      var lt = ts.tileTransform.localTransform;
	      var uv = ts.uvTransform;
	      var isSimple = baseTex.isPowerOfTwo && tex.frame.width === baseTex.width && tex.frame.height === baseTex.height;

	      // auto, force repeat wrapMode for big tiling textures
	      if (isSimple) {
	        if (!baseTex._glTextures[renderer.CONTEXT_UID]) {
	          if (baseTex.wrapMode === Tiny.WRAP_MODES.CLAMP) {
	            baseTex.wrapMode = Tiny.WRAP_MODES.REPEAT;
	          }
	        } else {
	          isSimple = baseTex.wrapMode !== Tiny.WRAP_MODES.CLAMP;
	        }
	      }

	      var shader = isSimple ? this.simpleShader : this.shader;

	      renderer.bindShader(shader);

	      var w = tex.width;
	      var h = tex.height;
	      var W = ts._width;
	      var H = ts._height;

	      tempMat.set(lt.a * w / W, lt.b * w / H, lt.c * h / W, lt.d * h / H, lt.tx / W, lt.ty / H);

	      // that part is the same as above:
	      // tempMat.identity();
	      // tempMat.scale(tex.width, tex.height);
	      // tempMat.prepend(lt);
	      // tempMat.scale(1.0 / ts._width, 1.0 / ts._height);

	      tempMat.invert();
	      if (isSimple) {
	        tempMat.prepend(uv.mapCoord);
	      } else {
	        shader.uniforms.uMapCoord = uv.mapCoord.toArray(true);
	        shader.uniforms.uClampFrame = uv.uClampFrame;
	        shader.uniforms.uClampOffset = uv.uClampOffset;
	      }

	      shader.uniforms.uTransform = tempMat.toArray(true);

	      var color = tempArray;

	      Tiny.hex2rgb(ts.tint, color);
	      color[3] = ts.worldAlpha;
	      shader.uniforms.uColor = color;
	      shader.uniforms.translationMatrix = ts.transform.worldTransform.toArray(true);

	      shader.uniforms.uSampler = renderer.bindTexture(tex);

	      renderer.setBlendMode(ts.blendMode);

	      quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0);
	    }
	  }]);

	  return TilingSpriteRenderer;
	}(Tiny.ObjectRenderer);

	Tiny.WebGLRenderer.registerPlugin('tilingSprite', TilingSpriteRenderer);

	exports.default = TilingSpriteRenderer;

/***/ }),
/* 4 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
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

/***/ })
/******/ ])
});
;