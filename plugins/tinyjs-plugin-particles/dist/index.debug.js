/*!
 * tinyjs-plugin-particles
 * Description: A really fast type of the Container built solely for speed
 * Author: fangjun.yfj
 * Version: v0.0.2
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["particles"] = factory();
	else
		root["Tiny"] = root["Tiny"] || {}, root["Tiny"]["particles"] = factory();
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

	var _ParticleContainer = __webpack_require__(2);

	Object.defineProperty(exports, 'ParticleContainer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ParticleContainer).default;
	  }
	});

	var _ParticleRenderer = __webpack_require__(3);

	Object.defineProperty(exports, 'ParticleRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ParticleRenderer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The ParticleContainer class is a really fast type of the Container built solely for speed,
	 * so use when you need a lot of sprites or particles. The tradeoff of the ParticleContainer is that advanced
	 * functionality will not work. ParticleContainer implements only the basic object transform (position, scale, rotation).
	 * Any other functionality like tinting, masking, etc will not work on sprites in this batch.
	 *
	 * It's extremely easy to use :
	 *
	 * ```js
	 * let container = new Tiny.particles.ParticleContainer();
	 *
	 * for (let i = 0; i < 100; ++i)
	 * {
	 *     let sprite = new Tiny.Sprite.fromImage("myImage.png");
	 *     container.addChild(sprite);
	 * }
	 * ```
	 *
	 * And here you have a hundred sprites that will be renderer at the speed of light.
	 *
	 * @class
	 * @extends Tiny.Container
	 * @memberof Tiny.particles
	 */
	var ParticleContainer = function (_Tiny$Container) {
	  _inherits(ParticleContainer, _Tiny$Container);

	  /**
	   * @param {number} [maxSize=15000] - The maximum number of particles that can be renderer by the container.
	   * @param {object} [properties] - The properties of children that should be uploaded to the gpu and applied.
	   * @param {boolean} [properties.scale=false] - When true, scale be uploaded and applied.
	   * @param {boolean} [properties.position=true] - When true, position be uploaded and applied.
	   * @param {boolean} [properties.rotation=false] - When true, rotation be uploaded and applied.
	   * @param {boolean} [properties.uvs=false] - When true, uvs be uploaded and applied.
	   * @param {boolean} [properties.alpha=false] - When true, alpha be uploaded and applied.
	   * @param {number} [batchSize=15000] - Number of particles per batch.
	   */
	  function ParticleContainer() {
	    var maxSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1500;
	    var properties = arguments[1];
	    var batchSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 16384;

	    _classCallCheck(this, ParticleContainer);

	    // Making sure the batch size is valid
	    // 65535 is max vertex index in the index buffer (see ParticleRenderer)
	    // so max number of particles is 65536 / 4 = 16384
	    var _this = _possibleConstructorReturn(this, (ParticleContainer.__proto__ || Object.getPrototypeOf(ParticleContainer)).call(this));

	    var maxBatchSize = 16384;

	    if (batchSize > maxBatchSize) {
	      batchSize = maxBatchSize;
	    }

	    if (batchSize > maxSize) {
	      batchSize = maxSize;
	    }

	    /**
	     * Set properties to be dynamic (true) / static (false)
	     *
	     * @member {boolean[]}
	     * @private
	     */
	    _this._properties = [false, true, false, false, false];

	    /**
	     * @member {number}
	     * @private
	     */
	    _this._maxSize = maxSize;

	    /**
	     * @member {number}
	     * @private
	     */
	    _this._batchSize = batchSize;

	    /**
	     * @member {object<number, WebGLBuffer>}
	     * @private
	     */
	    _this._glBuffers = {};

	    /**
	     * @member {number}
	     * @private
	     */
	    _this._bufferToUpdate = 0;

	    /**
	     * @member {boolean}
	     *
	     */
	    _this.interactiveChildren = false;

	    /**
	     * The blend mode to be applied to the sprite. Apply a value of `Tiny.BLEND_MODES.NORMAL`
	     * to reset the blend mode.
	     *
	     * @member {number}
	     * @default Tiny.BLEND_MODES.NORMAL
	     * @see Tiny.BLEND_MODES
	     */
	    _this.blendMode = Tiny.BLEND_MODES.NORMAL;

	    /**
	     * Used for canvas renderering. If true then the elements will be positioned at the
	     * nearest pixel. This provides a nice speed boost.
	     *
	     * @member {boolean}
	     * @default true;
	     */
	    _this.roundPixels = true;

	    /**
	     * The texture used to render the children.
	     *
	     * @readonly
	     * @member {BaseTexture}
	     */
	    _this.baseTexture = null;

	    _this.setProperties(properties);

	    /**
	     * The tint applied to the container.
	     * This is a hex value. A value of 0xFFFFFF will remove any tint effect.
	     *
	     * @private
	     * @member {number}
	     * @default 0xFFFFFF
	     */
	    _this._tint = null;
	    _this._tintRGB = [];
	    _this.tint = 0xFFFFFF;
	    return _this;
	  }

	  /**
	   * Sets the private properties array to dynamic / static based on the passed properties object
	   *
	   * @param {object} properties - The properties to be uploaded
	   */


	  _createClass(ParticleContainer, [{
	    key: 'setProperties',
	    value: function setProperties(properties) {
	      if (properties) {
	        this._properties[0] = 'scale' in properties ? !!properties.scale : this._properties[0];
	        this._properties[1] = 'position' in properties ? !!properties.position : this._properties[1];
	        this._properties[2] = 'rotation' in properties ? !!properties.rotation : this._properties[2];
	        this._properties[3] = 'uvs' in properties ? !!properties.uvs : this._properties[3];
	        this._properties[4] = 'alpha' in properties ? !!properties.alpha : this._properties[4];
	      }
	    }

	    /**
	     * Updates the object transform for rendering
	     *
	     * @private
	     */

	  }, {
	    key: 'updateTransform',
	    value: function updateTransform() {
	      // TODO don't need to!
	      this.displayObjectUpdateTransform();
	      //  Tiny.Container.prototype.updateTransform.call( this );
	    }

	    /**
	     * The tint applied to the container. This is a hex value.
	     * A value of 0xFFFFFF will remove any tint effect.
	     ** IMPORTANT: This is a webGL only feature and will be ignored by the canvas renderer.
	     * @member {number}
	     * @default 0xFFFFFF
	     */

	  }, {
	    key: 'renderWebGL',


	    /**
	     * Renders the container using the WebGL renderer
	     *
	     * @private
	     * @param {Tiny.WebGLRenderer} renderer - The webgl renderer
	     */
	    value: function renderWebGL(renderer) {
	      var _this2 = this;

	      if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
	        return;
	      }

	      if (!this.baseTexture) {
	        this.baseTexture = this.children[0]._texture.baseTexture;
	        if (!this.baseTexture.hasLoaded) {
	          this.baseTexture.once('update', function () {
	            return _this2.onChildrenChange(0);
	          });
	        }
	      }

	      renderer.setObjectRenderer(renderer.plugins.particle);
	      renderer.plugins.particle.render(this);
	    }

	    /**
	     * Set the flag that static data should be updated to true
	     *
	     * @private
	     * @param {number} smallestChildIndex - The smallest child index
	     */

	  }, {
	    key: 'onChildrenChange',
	    value: function onChildrenChange(smallestChildIndex) {
	      var bufferIndex = Math.floor(smallestChildIndex / this._batchSize);

	      if (bufferIndex < this._bufferToUpdate) {
	        this._bufferToUpdate = bufferIndex;
	      }
	    }

	    /**
	     * Renders the object using the Canvas renderer
	     *
	     * @private
	     * @param {Tiny.CanvasRenderer} renderer - The canvas renderer
	     */

	  }, {
	    key: 'renderCanvas',
	    value: function renderCanvas(renderer) {
	      if (!this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable) {
	        return;
	      }

	      var context = renderer.context;
	      var transform = this.worldTransform;
	      var isRotated = true;

	      var positionX = 0;
	      var positionY = 0;

	      var finalWidth = 0;
	      var finalHeight = 0;

	      var compositeOperation = renderer.blendModes[this.blendMode];

	      if (compositeOperation !== context.globalCompositeOperation) {
	        context.globalCompositeOperation = compositeOperation;
	      }

	      context.globalAlpha = this.worldAlpha;

	      this.displayObjectUpdateTransform();

	      for (var i = 0; i < this.children.length; ++i) {
	        var child = this.children[i];

	        if (!child.visible) {
	          continue;
	        }

	        var frame = child._texture.frame;

	        context.globalAlpha = this.worldAlpha * child.alpha;

	        if (child.rotation % (Math.PI * 2) === 0) {
	          // this is the fastest  way to optimise! - if rotation is 0 then we can avoid any kind of setTransform call
	          if (isRotated) {
	            context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx * renderer.resolution, transform.ty * renderer.resolution);

	            isRotated = false;
	          }

	          positionX = child.anchor.x * (-frame.width * child.scale.x) + child.position.x + 0.5;
	          positionY = child.anchor.y * (-frame.height * child.scale.y) + child.position.y + 0.5;

	          finalWidth = frame.width * child.scale.x;
	          finalHeight = frame.height * child.scale.y;
	        } else {
	          if (!isRotated) {
	            isRotated = true;
	          }

	          child.displayObjectUpdateTransform();

	          var childTransform = child.worldTransform;

	          if (renderer.roundPixels) {
	            context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, childTransform.tx * renderer.resolution | 0, childTransform.ty * renderer.resolution | 0);
	          } else {
	            context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, childTransform.tx * renderer.resolution, childTransform.ty * renderer.resolution);
	          }

	          positionX = child.anchor.x * -frame.width + 0.5;
	          positionY = child.anchor.y * -frame.height + 0.5;

	          finalWidth = frame.width;
	          finalHeight = frame.height;
	        }

	        var resolution = child._texture.baseTexture.resolution;

	        context.drawImage(child._texture.baseTexture.source, frame.x * resolution, frame.y * resolution, frame.width * resolution, frame.height * resolution, positionX * renderer.resolution, positionY * renderer.resolution, finalWidth * renderer.resolution, finalHeight * renderer.resolution);
	      }
	    }

	    /**
	     * Retrieves the bounds of the displayObject as a rectangle object.
	     *
	     * @return {Tiny.Rectangle}  the rectangular bounding area
	     * @version 0.0.2
	     */

	  }, {
	    key: 'getBounds',
	    value: function getBounds() {
	      if (this.children.length <= 0) {
	        return;
	      }
	      var fi = this.children[0].getBounds();
	      var x = fi.left;
	      var y = fi.top;
	      var maxX = fi.right;
	      var maxY = fi.bottom;

	      this.children.forEach(function (item) {
	        var bound = item.getBounds();
	        if (bound.x < x) {
	          x = bound.left;
	        }
	        if (bound.y < y) {
	          y = bound.top;
	        }
	        if (bound.x > maxX) {
	          maxX = bound.right;
	        }
	        if (bound.y > maxY) {
	          maxY = bound.bottom;
	        }
	      });

	      return new Tiny.Rectangle(x, y, maxX - x, maxY - y);
	    }

	    /**
	     * Destroys the container
	     *
	     * @param {object|boolean} [options] - Options parameter. A boolean will act as if all options
	     *  have been set to that value
	     * @param {boolean} [options.children=false] - if set to true, all the children will have their
	     *  destroy method called as well. 'options' will be passed on to those calls.
	     * @param {boolean} [options.texture=false] - Only used for child Sprites if options.children is set to true
	     *  Should it destroy the texture of the child sprite
	     * @param {boolean} [options.baseTexture=false] - Only used for child Sprites if options.children is set to true
	     *  Should it destroy the base texture of the child sprite
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy(options) {
	      _get(ParticleContainer.prototype.__proto__ || Object.getPrototypeOf(ParticleContainer.prototype), 'destroy', this).call(this, options);

	      if (this._buffers) {
	        for (var i = 0; i < this._buffers.length; ++i) {
	          this._buffers[i].destroy();
	        }
	      }

	      this._properties = null;
	      this._buffers = null;
	    }
	  }, {
	    key: 'tint',
	    get: function get() {
	      return this._tint;
	    },
	    set: function set(value) {
	      this._tint = value;
	      Tiny.hex2rgb(value, this._tintRGB);
	    }
	  }]);

	  return ParticleContainer;
	}(Tiny.Container);

	module.exports = ParticleContainer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _ParticleShader = __webpack_require__(4);

	var _ParticleShader2 = _interopRequireDefault(_ParticleShader);

	var _ParticleBuffer = __webpack_require__(5);

	var _ParticleBuffer2 = _interopRequireDefault(_ParticleBuffer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @author Mat Groves
	 *
	 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
	 * for creating the original pixi version!
	 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now
	 * share 4 bytes on the vertex buffer
	 *
	 * Heavily inspired by LibGDX's ParticleRenderer:
	 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/ParticleRenderer.java
	 */

	/**
	 *
	 * @class
	 * @private
	 * @memberof Tiny.particles
	 */
	var ParticleRenderer = function (_Tiny$ObjectRenderer) {
	  _inherits(ParticleRenderer, _Tiny$ObjectRenderer);

	  /**
	   * @param {Tiny.WebGLRenderer} renderer - The renderer this sprite batch works for.
	   */
	  function ParticleRenderer(renderer) {
	    _classCallCheck(this, ParticleRenderer);

	    // 65535 is max vertex index in the index buffer (see ParticleRenderer)
	    // so max number of particles is 65536 / 4 = 16384
	    // and max number of element in the index buffer is 16384 * 6 = 98304
	    // Creating a full index buffer, overhead is 98304 * 2 = 196Ko
	    // let numIndices = 98304;

	    /**
	     * The default shader that is used if a sprite doesn't have a more specific one.
	     *
	     * @member {Tiny.Shader}
	     */
	    var _this = _possibleConstructorReturn(this, (ParticleRenderer.__proto__ || Object.getPrototypeOf(ParticleRenderer)).call(this, renderer));

	    _this.shader = null;

	    _this.indexBuffer = null;

	    _this.properties = null;

	    _this.tempMatrix = new Tiny.Matrix();

	    _this.CONTEXT_UID = 0;
	    return _this;
	  }

	  /**
	   * When there is a WebGL context change
	   *
	   * @private
	   */


	  _createClass(ParticleRenderer, [{
	    key: 'onContextChange',
	    value: function onContextChange() {
	      var gl = this.renderer.gl;

	      this.CONTEXT_UID = this.renderer.CONTEXT_UID;

	      // setup default shader
	      this.shader = new _ParticleShader2.default(gl);

	      this.properties = [
	      // verticesData
	      {
	        attribute: this.shader.attributes.aVertexPosition,
	        size: 2,
	        uploadFunction: this.uploadVertices,
	        offset: 0
	      },
	      // positionData
	      {
	        attribute: this.shader.attributes.aPositionCoord,
	        size: 2,
	        uploadFunction: this.uploadPosition,
	        offset: 0
	      },
	      // rotationData
	      {
	        attribute: this.shader.attributes.aRotation,
	        size: 1,
	        uploadFunction: this.uploadRotation,
	        offset: 0
	      },
	      // uvsData
	      {
	        attribute: this.shader.attributes.aTextureCoord,
	        size: 2,
	        uploadFunction: this.uploadUvs,
	        offset: 0
	      },
	      // alphaData
	      {
	        attribute: this.shader.attributes.aColor,
	        size: 1,
	        uploadFunction: this.uploadAlpha,
	        offset: 0
	      }];
	    }

	    /**
	     * Starts a new particle batch.
	     *
	     */

	  }, {
	    key: 'start',
	    value: function start() {
	      this.renderer.bindShader(this.shader);
	    }

	    /**
	     * Renders the particle container object.
	     *
	     * @param {Tiny.ParticleContainer} container - The container to render using this ParticleRenderer
	     */

	  }, {
	    key: 'render',
	    value: function render(container) {
	      var children = container.children;
	      var maxSize = container._maxSize;
	      var batchSize = container._batchSize;
	      var renderer = this.renderer;
	      var totalChildren = children.length;

	      if (totalChildren === 0) {
	        return;
	      } else if (totalChildren > maxSize) {
	        totalChildren = maxSize;
	      }

	      var buffers = container._glBuffers[renderer.CONTEXT_UID];

	      if (!buffers) {
	        buffers = container._glBuffers[renderer.CONTEXT_UID] = this.generateBuffers(container);
	      }

	      // if the uvs have not updated then no point rendering just yet!
	      this.renderer.setBlendMode(container.blendMode);

	      var gl = renderer.gl;

	      var m = container.worldTransform.copy(this.tempMatrix);

	      m.prepend(renderer._activeRenderTarget.projectionMatrix);

	      this.shader.uniforms.projectionMatrix = m.toArray(true);
	      this.shader.uniforms.uAlpha = container.worldAlpha;
	      this.shader.uniforms.tint = container._tintRGB;

	      // make sure the texture is bound..
	      var baseTexture = children[0]._texture.baseTexture;

	      this.shader.uniforms.uSampler = renderer.bindTexture(baseTexture);

	      // now lets upload and render the buffers..
	      for (var i = 0, j = 0; i < totalChildren; i += batchSize, j += 1) {
	        var amount = totalChildren - i;

	        if (amount > batchSize) {
	          amount = batchSize;
	        }

	        var buffer = buffers[j];

	        // we always upload the dynamic
	        buffer.uploadDynamic(children, i, amount);

	        // we only upload the static content when we have to!
	        if (container._bufferToUpdate === j) {
	          buffer.uploadStatic(children, i, amount);
	          container._bufferToUpdate = j + 1;
	        }

	        // bind the buffer
	        renderer.bindVao(buffer.vao);
	        buffer.vao.draw(gl.TRIANGLES, amount * 6);
	      }
	    }

	    /**
	     * Creates one particle buffer for each child in the container we want to render and updates internal properties
	     *
	     * @param {Tiny.ParticleContainer} container - The container to render using this ParticleRenderer
	     * @return {Tiny.ParticleBuffer[]} The buffers
	     */

	  }, {
	    key: 'generateBuffers',
	    value: function generateBuffers(container) {
	      var gl = this.renderer.gl;
	      var buffers = [];
	      var size = container._maxSize;
	      var batchSize = container._batchSize;
	      var dynamicPropertyFlags = container._properties;

	      for (var i = 0; i < size; i += batchSize) {
	        buffers.push(new _ParticleBuffer2.default(gl, this.properties, dynamicPropertyFlags, batchSize));
	      }

	      return buffers;
	    }

	    /**
	     * Uploads the verticies.
	     *
	     * @param {Tiny.DisplayObject[]} children - the array of display objects to render
	     * @param {number} startIndex - the index to start from in the children array
	     * @param {number} amount - the amount of children that will have their vertices uploaded
	     * @param {number[]} array - The vertices to upload.
	     * @param {number} stride - Stride to use for iteration.
	     * @param {number} offset - Offset to start at.
	     */

	  }, {
	    key: 'uploadVertices',
	    value: function uploadVertices(children, startIndex, amount, array, stride, offset) {
	      var w0 = 0;
	      var w1 = 0;
	      var h0 = 0;
	      var h1 = 0;

	      for (var i = 0; i < amount; ++i) {
	        var sprite = children[startIndex + i];
	        var texture = sprite._texture;
	        var sx = sprite.scale.x;
	        var sy = sprite.scale.y;
	        var trim = texture.trim;
	        var orig = texture.orig;

	        if (trim) {
	          // if the sprite is trimmed and is not a tilingsprite then we need to add the
	          // extra space before transforming the sprite coords..
	          w1 = trim.x - sprite.anchor.x * orig.width;
	          w0 = w1 + trim.width;

	          h1 = trim.y - sprite.anchor.y * orig.height;
	          h0 = h1 + trim.height;
	        } else {
	          w0 = orig.width * (1 - sprite.anchor.x);
	          w1 = orig.width * -sprite.anchor.x;

	          h0 = orig.height * (1 - sprite.anchor.y);
	          h1 = orig.height * -sprite.anchor.y;
	        }

	        array[offset] = w1 * sx;
	        array[offset + 1] = h1 * sy;

	        array[offset + stride] = w0 * sx;
	        array[offset + stride + 1] = h1 * sy;

	        array[offset + stride * 2] = w0 * sx;
	        array[offset + stride * 2 + 1] = h0 * sy;

	        array[offset + stride * 3] = w1 * sx;
	        array[offset + stride * 3 + 1] = h0 * sy;

	        offset += stride * 4;
	      }
	    }

	    /**
	     *
	     * @param {Tiny.DisplayObject[]} children - the array of display objects to render
	     * @param {number} startIndex - the index to start from in the children array
	     * @param {number} amount - the amount of children that will have their positions uploaded
	     * @param {number[]} array - The vertices to upload.
	     * @param {number} stride - Stride to use for iteration.
	     * @param {number} offset - Offset to start at.
	     */

	  }, {
	    key: 'uploadPosition',
	    value: function uploadPosition(children, startIndex, amount, array, stride, offset) {
	      for (var i = 0; i < amount; i++) {
	        var spritePosition = children[startIndex + i].position;

	        array[offset] = spritePosition.x;
	        array[offset + 1] = spritePosition.y;

	        array[offset + stride] = spritePosition.x;
	        array[offset + stride + 1] = spritePosition.y;

	        array[offset + stride * 2] = spritePosition.x;
	        array[offset + stride * 2 + 1] = spritePosition.y;

	        array[offset + stride * 3] = spritePosition.x;
	        array[offset + stride * 3 + 1] = spritePosition.y;

	        offset += stride * 4;
	      }
	    }

	    /**
	     *
	     * @param {Tiny.DisplayObject[]} children - the array of display objects to render
	     * @param {number} startIndex - the index to start from in the children array
	     * @param {number} amount - the amount of children that will have their rotation uploaded
	     * @param {number[]} array - The vertices to upload.
	     * @param {number} stride - Stride to use for iteration.
	     * @param {number} offset - Offset to start at.
	     */

	  }, {
	    key: 'uploadRotation',
	    value: function uploadRotation(children, startIndex, amount, array, stride, offset) {
	      for (var i = 0; i < amount; i++) {
	        var spriteRotation = children[startIndex + i].rotation;

	        array[offset] = spriteRotation;
	        array[offset + stride] = spriteRotation;
	        array[offset + stride * 2] = spriteRotation;
	        array[offset + stride * 3] = spriteRotation;

	        offset += stride * 4;
	      }
	    }

	    /**
	     *
	     * @param {Tiny.DisplayObject[]} children - the array of display objects to render
	     * @param {number} startIndex - the index to start from in the children array
	     * @param {number} amount - the amount of children that will have their rotation uploaded
	     * @param {number[]} array - The vertices to upload.
	     * @param {number} stride - Stride to use for iteration.
	     * @param {number} offset - Offset to start at.
	     */

	  }, {
	    key: 'uploadUvs',
	    value: function uploadUvs(children, startIndex, amount, array, stride, offset) {
	      for (var i = 0; i < amount; ++i) {
	        var textureUvs = children[startIndex + i]._texture._uvs;

	        if (textureUvs) {
	          array[offset] = textureUvs.x0;
	          array[offset + 1] = textureUvs.y0;

	          array[offset + stride] = textureUvs.x1;
	          array[offset + stride + 1] = textureUvs.y1;

	          array[offset + stride * 2] = textureUvs.x2;
	          array[offset + stride * 2 + 1] = textureUvs.y2;

	          array[offset + stride * 3] = textureUvs.x3;
	          array[offset + stride * 3 + 1] = textureUvs.y3;

	          offset += stride * 4;
	        } else {
	          // TODO you know this can be easier!
	          array[offset] = 0;
	          array[offset + 1] = 0;

	          array[offset + stride] = 0;
	          array[offset + stride + 1] = 0;

	          array[offset + stride * 2] = 0;
	          array[offset + stride * 2 + 1] = 0;

	          array[offset + stride * 3] = 0;
	          array[offset + stride * 3 + 1] = 0;

	          offset += stride * 4;
	        }
	      }
	    }

	    /**
	     *
	     * @param {Tiny.DisplayObject[]} children - the array of display objects to render
	     * @param {number} startIndex - the index to start from in the children array
	     * @param {number} amount - the amount of children that will have their rotation uploaded
	     * @param {number[]} array - The vertices to upload.
	     * @param {number} stride - Stride to use for iteration.
	     * @param {number} offset - Offset to start at.
	     */

	  }, {
	    key: 'uploadAlpha',
	    value: function uploadAlpha(children, startIndex, amount, array, stride, offset) {
	      for (var i = 0; i < amount; i++) {
	        var spriteAlpha = children[startIndex + i].alpha;

	        array[offset] = spriteAlpha;
	        array[offset + stride] = spriteAlpha;
	        array[offset + stride * 2] = spriteAlpha;
	        array[offset + stride * 3] = spriteAlpha;

	        offset += stride * 4;
	      }
	    }

	    /**
	     * Destroys the ParticleRenderer.
	     *
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      if (this.renderer.gl) {
	        this.renderer.gl.deleteBuffer(this.indexBuffer);
	      }

	      _get(ParticleRenderer.prototype.__proto__ || Object.getPrototypeOf(ParticleRenderer.prototype), 'destroy', this).call(this);

	      this.shader.destroy();

	      this.indices = null;
	      this.tempMatrix = null;
	    }
	  }]);

	  return ParticleRenderer;
	}(Tiny.ObjectRenderer);

	Tiny.WebGLRenderer.registerPlugin('particle', ParticleRenderer);

	exports.default = ParticleRenderer;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class
	 * @private
	 * @extends Tiny.Shader
	 */
	var ParticleShader = function (_Tiny$Shader) {
	  _inherits(ParticleShader, _Tiny$Shader);

	  /**
	   * @param {Tiny.Shader} gl - The webgl shader manager this shader works for.
	   */
	  function ParticleShader(gl) {
	    _classCallCheck(this, ParticleShader);

	    return _possibleConstructorReturn(this, (ParticleShader.__proto__ || Object.getPrototypeOf(ParticleShader)).call(this, gl,
	    // vertex shader
	    ['attribute vec2 aVertexPosition;', 'attribute vec2 aTextureCoord;', 'attribute float aColor;', 'attribute vec2 aPositionCoord;', 'attribute vec2 aScale;', 'attribute float aRotation;', 'uniform mat3 projectionMatrix;', 'varying vec2 vTextureCoord;', 'varying float vColor;', 'void main(void){', '   vec2 v = aVertexPosition;', '   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);', '   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);', '   v = v + aPositionCoord;', '   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);', '   vTextureCoord = aTextureCoord;', '   vColor = aColor;', '}'].join('\n'),
	    // hello
	    ['varying vec2 vTextureCoord;', 'varying float vColor;', 'uniform sampler2D uSampler;', 'uniform float uAlpha;', 'uniform vec3 tint;', 'void main(void){', '  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * vec4(tint * uAlpha, uAlpha);', '  if (color.a == 0.0) discard;', '  gl_FragColor = color;', '}'].join('\n')));
	  }

	  return ParticleShader;
	}(Tiny.Shader);

	exports.default = ParticleShader;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _createIndicesForQuads = __webpack_require__(6);

	var _createIndicesForQuads2 = _interopRequireDefault(_createIndicesForQuads);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @author Mat Groves
	 *
	 * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/
	 * for creating the original pixi version!
	 * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that
	 * they now share 4 bytes on the vertex buffer
	 *
	 * Heavily inspired by LibGDX's ParticleBuffer:
	 * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/ParticleBuffer.java
	 */

	/**
	 * The particle buffer manages the static and dynamic buffers for a particle container.
	 *
	 * @class
	 * @private
	 */
	var ParticleBuffer = function () {
	  /**
	   * @param {WebGLRenderingContext} gl - The rendering context.
	   * @param {object} properties - The properties to upload.
	   * @param {boolean[]} dynamicPropertyFlags - Flags for which properties are dynamic.
	   * @param {number} size - The size of the batch.
	   */
	  function ParticleBuffer(gl, properties, dynamicPropertyFlags, size) {
	    _classCallCheck(this, ParticleBuffer);

	    /**
	     * The current WebGL drawing context.
	     *
	     * @member {WebGLRenderingContext}
	     */
	    this.gl = gl;

	    /**
	     * Size of a single vertex.
	     *
	     * @member {number}
	     */
	    this.vertSize = 2;

	    /**
	     * Size of a single vertex in bytes.
	     *
	     * @member {number}
	     */
	    this.vertByteSize = this.vertSize * 4;

	    /**
	     * The number of particles the buffer can hold
	     *
	     * @member {number}
	     */
	    this.size = size;

	    /**
	     * A list of the properties that are dynamic.
	     *
	     * @member {object[]}
	     */
	    this.dynamicProperties = [];

	    /**
	     * A list of the properties that are static.
	     *
	     * @member {object[]}
	     */
	    this.staticProperties = [];

	    for (var i = 0; i < properties.length; ++i) {
	      var property = properties[i];

	      // Make copy of properties object so that when we edit the offset it doesn't
	      // change all other instances of the object literal
	      property = {
	        attribute: property.attribute,
	        size: property.size,
	        uploadFunction: property.uploadFunction,
	        offset: property.offset
	      };

	      if (dynamicPropertyFlags[i]) {
	        this.dynamicProperties.push(property);
	      } else {
	        this.staticProperties.push(property);
	      }
	    }

	    this.staticStride = 0;
	    this.staticBuffer = null;
	    this.staticData = null;

	    this.dynamicStride = 0;
	    this.dynamicBuffer = null;
	    this.dynamicData = null;

	    this.initBuffers();
	  }

	  /**
	   * Sets up the renderer context and necessary buffers.
	   *
	   * @private
	   */


	  _createClass(ParticleBuffer, [{
	    key: 'initBuffers',
	    value: function initBuffers() {
	      var gl = this.gl;
	      var dynamicOffset = 0;

	      /**
	       * Holds the indices of the geometry (quads) to draw
	       *
	       * @member {Uint16Array}
	       */
	      this.indices = (0, _createIndicesForQuads2.default)(this.size);
	      this.indexBuffer = Tiny.glCore.GLBuffer.createIndexBuffer(gl, this.indices, gl.STATIC_DRAW);

	      this.dynamicStride = 0;

	      for (var i = 0; i < this.dynamicProperties.length; ++i) {
	        var property = this.dynamicProperties[i];

	        property.offset = dynamicOffset;
	        dynamicOffset += property.size;
	        this.dynamicStride += property.size;
	      }

	      this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4);
	      this.dynamicBuffer = Tiny.glCore.GLBuffer.createVertexBuffer(gl, this.dynamicData, gl.STREAM_DRAW);

	      // static //
	      var staticOffset = 0;

	      this.staticStride = 0;

	      for (var _i = 0; _i < this.staticProperties.length; ++_i) {
	        var _property = this.staticProperties[_i];

	        _property.offset = staticOffset;
	        staticOffset += _property.size;
	        this.staticStride += _property.size;
	      }

	      this.staticData = new Float32Array(this.size * this.staticStride * 4);
	      this.staticBuffer = Tiny.glCore.GLBuffer.createVertexBuffer(gl, this.staticData, gl.STATIC_DRAW);

	      this.vao = new Tiny.glCore.VertexArrayObject(gl).addIndex(this.indexBuffer);

	      for (var _i2 = 0; _i2 < this.dynamicProperties.length; ++_i2) {
	        var _property2 = this.dynamicProperties[_i2];

	        this.vao.addAttribute(this.dynamicBuffer, _property2.attribute, gl.FLOAT, false, this.dynamicStride * 4, _property2.offset * 4);
	      }

	      for (var _i3 = 0; _i3 < this.staticProperties.length; ++_i3) {
	        var _property3 = this.staticProperties[_i3];

	        this.vao.addAttribute(this.staticBuffer, _property3.attribute, gl.FLOAT, false, this.staticStride * 4, _property3.offset * 4);
	      }
	    }

	    /**
	     * Uploads the dynamic properties.
	     *
	     * @param {Tiny.DisplayObject[]} children - The children to upload.
	     * @param {number} startIndex - The index to start at.
	     * @param {number} amount - The number to upload.
	     */

	  }, {
	    key: 'uploadDynamic',
	    value: function uploadDynamic(children, startIndex, amount) {
	      for (var i = 0; i < this.dynamicProperties.length; i++) {
	        var property = this.dynamicProperties[i];

	        property.uploadFunction(children, startIndex, amount, this.dynamicData, this.dynamicStride, property.offset);
	      }

	      this.dynamicBuffer.upload();
	    }

	    /**
	     * Uploads the static properties.
	     *
	     * @param {Tiny.DisplayObject[]} children - The children to upload.
	     * @param {number} startIndex - The index to start at.
	     * @param {number} amount - The number to upload.
	     */

	  }, {
	    key: 'uploadStatic',
	    value: function uploadStatic(children, startIndex, amount) {
	      for (var i = 0; i < this.staticProperties.length; i++) {
	        var property = this.staticProperties[i];

	        property.uploadFunction(children, startIndex, amount, this.staticData, this.staticStride, property.offset);
	      }

	      this.staticBuffer.upload();
	    }

	    /**
	     * Destroys the ParticleBuffer.
	     *
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.dynamicProperties = null;
	      this.dynamicData = null;
	      this.dynamicBuffer.destroy();

	      this.staticProperties = null;
	      this.staticData = null;
	      this.staticBuffer.destroy();
	    }
	  }]);

	  return ParticleBuffer;
	}();

	exports.default = ParticleBuffer;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ])
});
;