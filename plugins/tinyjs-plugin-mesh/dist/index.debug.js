/*!
 * tinyjs-plugin-mesh
 * Description: The Tiny.js plugin of mesh
 * Author: fangjun.yfj
 * Version: v0.0.1
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mesh"] = factory();
	else
		root["Tiny"] = root["Tiny"] || {}, root["Tiny"]["mesh"] = factory();
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

	var _Mesh = __webpack_require__(2);

	Object.defineProperty(exports, 'Mesh', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Mesh).default;
	  }
	});

	var _MeshRenderer = __webpack_require__(3);

	Object.defineProperty(exports, 'MeshRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MeshRenderer).default;
	  }
	});

	var _CanvasMeshRenderer = __webpack_require__(4);

	Object.defineProperty(exports, 'CanvasMeshRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CanvasMeshRenderer).default;
	  }
	});

	var _Plane = __webpack_require__(5);

	Object.defineProperty(exports, 'Plane', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Plane).default;
	  }
	});

	var _NineSlicePlane = __webpack_require__(6);

	Object.defineProperty(exports, 'NineSlicePlane', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_NineSlicePlane).default;
	  }
	});

	var _Rope = __webpack_require__(7);

	Object.defineProperty(exports, 'Rope', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Rope).default;
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

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var tempPoint = new Tiny.Point();
	var tempPolygon = new Tiny.Polygon();

	/**
	 * Base mesh class
	 * @class
	 * @extends Tiny.Container
	 * @memberof Tiny.mesh
	 */

	var Mesh = function (_Tiny$Container) {
	  _inherits(Mesh, _Tiny$Container);

	  /**
	   * @param {Tiny.Texture}  texture     - The texture to use
	   * @param {Float32Array}  [vertices]  - if you want to specify the vertices
	   * @param {Float32Array}  [uvs]       - if you want to specify the uvs
	   * @param {Uint16Array}   [indices]   - if you want to specify the indices
	   * @param {number}        [drawMode]  - the drawMode, can be any of the Mesh.DRAW_MODES consts
	   */
	  function Mesh(texture, vertices, uvs, indices, drawMode) {
	    _classCallCheck(this, Mesh);

	    /**
	     * The texture of the Mesh
	     *
	     * @member {Tiny.Texture}  Tiny.mesh.Mesh#_texture
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, (Mesh.__proto__ || Object.getPrototypeOf(Mesh)).call(this));

	    _this._texture = texture;

	    /**
	     * An array of vertices
	     *
	     * @member {Float32Array} Tiny.mesh.Mesh#vertices
	     */
	    _this.vertices = vertices || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]);

	    /**
	     * The Uvs of the Mesh
	     *
	     * @member {Float32Array} Tiny.mesh.Mesh#uvs
	     */
	    _this.uvs = uvs || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);

	    /**
	     * An array containing the indices of the vertices
	     *
	     * @member {Uint16Array}  Tiny.mesh.Mesh#indices
	     */
	    _this.indices = indices || new Uint16Array([0, 1, 3, 2]);

	    /**
	     * The way the Mesh should be drawn, can be any of the {@link Tiny.mesh.Mesh.DRAW_MODES} consts
	     *
	     * @member {number} Tiny.mesh.Mesh#drawMode
	     * @see Tiny.mesh.Mesh.DRAW_MODES
	     */
	    _this.drawMode = drawMode || Mesh.DRAW_MODES.TRIANGLE_MESH;

	    /**
	     * Version of mesh uvs are dirty or not
	     *
	     * @member {number}  Tiny.mesh.Mesh#dirty
	     */
	    _this.dirty = 0;

	    /**
	     * Version of mesh indices
	     *
	     * @member {number} Tiny.mesh.Mesh#indexDirty
	     */
	    _this.indexDirty = 0;

	    /**
	     * The blend mode to be applied to the sprite. Set to `Tiny.BLEND_MODES.NORMAL` to remove
	     * any blend mode.
	     *
	     * @member {number} Tiny.mesh.Mesh#blendMode
	     * @default Tiny.BLEND_MODES.NORMAL
	     * @see Tiny.BLEND_MODES
	     */
	    _this.blendMode = Tiny.BLEND_MODES.NORMAL;

	    /**
	     * Triangles in canvas mode are automatically antialiased, use this value to force triangles
	     * to overlap a bit with each other.
	     *
	     * @member {number} Tiny.mesh.Mesh#canvasPadding
	     * @default 0
	     */
	    _this.canvasPadding = 0;

	    /**
	     * The default shader that is used if a mesh doesn't have a more specific one.
	     *
	     * @member {Tiny.Shader}  Tiny.mesh.Mesh#shader
	     */
	    _this.shader = null;

	    /**
	     * The tint applied to the mesh. This is a [r,g,b] value. A value of [1,1,1] will remove any
	     * tint effect.
	     *
	     * @member {number} Tiny.mesh.Mesh#tintRgb
	     */
	    _this.tintRgb = new Float32Array([1, 1, 1]);

	    /**
	     * A map of renderer IDs to webgl render data
	     *
	     * @member {object<number, object>} Tiny.mesh.Mesh#_glDatas
	     * @private
	     */
	    _this._glDatas = {};

	    /**
	     * transform that is applied to UV to get the texture coords
	     * its updated independently from texture uvTransform
	     * updates of uvs are tied to that thing
	     *
	     * @member {Tiny.TextureTransform}  Tiny.mesh.Mesh#_uvTransform
	     * @private
	     */
	    _this._uvTransform = new Tiny.TextureTransform(texture);

	    /**
	     * whether or not upload uvTransform to shader
	     * if its false, then uvs should be pre-multiplied
	     * if you change it for generated mesh, please call 'refresh(true)'
	     *
	     * @member {boolean}  Tiny.mesh.Mesh#uploadUvTransform
	     * @default false
	     */
	    _this.uploadUvTransform = false;

	    /**
	     * Plugin that is responsible for rendering this element.
	     * Allows to customize the rendering process without overriding '_renderWebGL' & '_renderCanvas' methods.
	     *
	     * @member {string} Tiny.mesh.Mesh#pluginName
	     * @default 'mesh'
	     */
	    _this.pluginName = 'mesh';
	    return _this;
	  }

	  /**
	   * Renders the object using the WebGL renderer
	   *
	   * @private
	   * @param {Tiny.WebGLRenderer} renderer - a reference to the WebGL renderer
	   */


	  _createClass(Mesh, [{
	    key: '_renderWebGL',
	    value: function _renderWebGL(renderer) {
	      this.refresh();
	      renderer.setObjectRenderer(renderer.plugins[this.pluginName]);
	      renderer.plugins[this.pluginName].render(this);
	    }

	    /**
	     * Renders the object using the Canvas renderer
	     *
	     * @private
	     * @param {Tiny.CanvasRenderer} renderer - The canvas renderer.
	     */

	  }, {
	    key: '_renderCanvas',
	    value: function _renderCanvas(renderer) {
	      this.refresh();
	      renderer.plugins[this.pluginName].render(this);
	    }

	    /**
	     * When the texture is updated, this event will fire to update the scale and frame
	     *
	     * @private
	     */

	  }, {
	    key: '_onTextureUpdate',
	    value: function _onTextureUpdate() {
	      this._uvTransform.texture = this._texture;
	      this.refresh();
	    }

	    /**
	     * multiplies uvs only if uploadUvTransform is false, call it after you change uvs manually, make sure that texture is valid
	     */

	  }, {
	    key: 'multiplyUvs',
	    value: function multiplyUvs() {
	      if (!this.uploadUvTransform) {
	        this._uvTransform.multiplyUvs(this.uvs);
	      }
	    }

	    /**
	     * Refreshes uvs for generated meshes (rope, plane), sometimes refreshes vertices too
	     *
	     * @param {boolean} [forceUpdate=false] if true, matrices will be updated any case
	     */

	  }, {
	    key: 'refresh',
	    value: function refresh(forceUpdate) {
	      if (this._uvTransform.update(forceUpdate)) {
	        this._refresh();
	      }
	    }

	    /**
	     * re-calculates mesh coords
	     * @protected
	     */

	  }, {
	    key: '_refresh',
	    value: function _refresh() {}
	    /* empty */


	    /**
	     * Returns the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.
	     *
	     */

	  }, {
	    key: '_calculateBounds',
	    value: function _calculateBounds() {
	      // TODO - we can cache local bounds and use them if they are dirty (like graphics)
	      this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length);
	    }

	    /**
	     * Tests if a point is inside this mesh. Works only for TRIANGLE_MESH
	     *
	     * @param {Tiny.Point} point - the point to test
	     * @return {boolean} the result of the test
	     */

	  }, {
	    key: 'containsPoint',
	    value: function containsPoint(point) {
	      if (!this.getBounds().contains(point.x, point.y)) {
	        return false;
	      }

	      this.worldTransform.applyInverse(point, tempPoint);

	      var vertices = this.vertices;
	      var points = tempPolygon.points;
	      var indices = this.indices;
	      var len = this.indices.length;
	      var step = this.drawMode === Mesh.DRAW_MODES.TRIANGLES ? 3 : 1;

	      for (var i = 0; i + 2 < len; i += step) {
	        var ind0 = indices[i] * 2;
	        var ind1 = indices[i + 1] * 2;
	        var ind2 = indices[i + 2] * 2;

	        points[0] = vertices[ind0];
	        points[1] = vertices[ind0 + 1];
	        points[2] = vertices[ind1];
	        points[3] = vertices[ind1 + 1];
	        points[4] = vertices[ind2];
	        points[5] = vertices[ind2 + 1];

	        if (tempPolygon.contains(tempPoint.x, tempPoint.y)) {
	          return true;
	        }
	      }

	      return false;
	    }

	    /**
	     * The texture that the mesh uses.
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

	      if (value) {
	        // wait for the texture to load
	        if (value.baseTexture.hasLoaded) {
	          this._onTextureUpdate();
	        } else {
	          value.once('update', this._onTextureUpdate, this);
	        }
	      }
	    }

	    /**
	     * The tint applied to the mesh. This is a hex value. A value of 0xFFFFFF will remove any tint effect.
	     *
	     * @member {number}
	     * @default 0xFFFFFF
	     */

	  }, {
	    key: 'tint',
	    get: function get() {
	      return Tiny.rgb2hex(this.tintRgb);
	    },
	    set: function set(value) {
	      this.tintRgb = Tiny.hex2rgb(value, this.tintRgb);
	    }
	  }]);

	  return Mesh;
	}(Tiny.Container);

	/**
	 * Different drawing buffer modes supported
	 *
	 * @static
	 * @constant
	 * @type {object}
	 * @property {number} TRIANGLE_MESH
	 * @property {number} TRIANGLES
	 */


	Mesh.DRAW_MODES = {
	  TRIANGLE_MESH: 0,
	  TRIANGLES: 1
	};

	exports.default = Mesh;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Mesh = __webpack_require__(2);

	var _Mesh2 = _interopRequireDefault(_Mesh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var glCore = Tiny.glCore;
	var matrixIdentity = Tiny.Matrix.IDENTITY;

	/**
	 * WebGL renderer plugin for tiling sprites
	 *
	 * @class
	 * @memberof Tiny
	 * @extends Tiny.ObjectRenderer
	 */

	var MeshRenderer = function (_Tiny$ObjectRenderer) {
	  _inherits(MeshRenderer, _Tiny$ObjectRenderer);

	  /**
	   * constructor for renderer
	   *
	   * @param {WebGLRenderer} renderer The renderer this tiling awesomeness works for.
	   */
	  function MeshRenderer(renderer) {
	    _classCallCheck(this, MeshRenderer);

	    var _this = _possibleConstructorReturn(this, (MeshRenderer.__proto__ || Object.getPrototypeOf(MeshRenderer)).call(this, renderer));

	    _this.shader = null;
	    return _this;
	  }

	  /**
	   * Sets up the renderer context and necessary buffers.
	   *
	   * @private
	   */


	  _createClass(MeshRenderer, [{
	    key: 'onContextChange',
	    value: function onContextChange() {
	      var gl = this.renderer.gl;

	      this.shader = new Tiny.Shader(gl, '\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n', '\nvarying vec2 vTextureCoord;\nuniform float alpha;\nuniform vec3 tint;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vec4(tint * alpha, alpha);\n}\n      ');
	    }

	    /**
	     * renders mesh
	     *
	     * @param {Tiny.mesh.Mesh} mesh mesh instance
	     */

	  }, {
	    key: 'render',
	    value: function render(mesh) {
	      var renderer = this.renderer;
	      var gl = renderer.gl;
	      var texture = mesh._texture;

	      if (!texture.valid) {
	        return;
	      }

	      var glData = mesh._glDatas[renderer.CONTEXT_UID];

	      if (!glData) {
	        renderer.bindVao(null);

	        glData = {
	          shader: this.shader,
	          vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, mesh.vertices, gl.STREAM_DRAW),
	          uvBuffer: glCore.GLBuffer.createVertexBuffer(gl, mesh.uvs, gl.STREAM_DRAW),
	          indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, mesh.indices, gl.STATIC_DRAW),
	          // build the vao object that will render..
	          vao: null,
	          dirty: mesh.dirty,
	          indexDirty: mesh.indexDirty
	        };

	        // build the vao object that will render..
	        glData.vao = new glCore.VertexArrayObject(gl).addIndex(glData.indexBuffer).addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0).addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl.FLOAT, false, 2 * 4, 0);

	        mesh._glDatas[renderer.CONTEXT_UID] = glData;
	      }

	      renderer.bindVao(glData.vao);

	      if (mesh.dirty !== glData.dirty) {
	        glData.dirty = mesh.dirty;
	        glData.uvBuffer.upload(mesh.uvs);
	      }

	      if (mesh.indexDirty !== glData.indexDirty) {
	        glData.indexDirty = mesh.indexDirty;
	        glData.indexBuffer.upload(mesh.indices);
	      }

	      glData.vertexBuffer.upload(mesh.vertices);

	      renderer.bindShader(glData.shader);

	      glData.shader.uniforms.uSampler = renderer.bindTexture(texture);

	      renderer.state.setBlendMode(mesh.blendMode);

	      if (glData.shader.uniforms.uTransform) {
	        if (mesh.uploadUvTransform) {
	          glData.shader.uniforms.uTransform = mesh._uvTransform.mapCoord.toArray(true);
	        } else {
	          glData.shader.uniforms.uTransform = matrixIdentity.toArray(true);
	        }
	      }
	      glData.shader.uniforms.translationMatrix = mesh.worldTransform.toArray(true);
	      glData.shader.uniforms.alpha = mesh.worldAlpha;
	      glData.shader.uniforms.tint = mesh.tintRgb;

	      var drawMode = mesh.drawMode === _Mesh2.default.DRAW_MODES.TRIANGLE_MESH ? gl.TRIANGLE_STRIP : gl.TRIANGLES;

	      glData.vao.draw(drawMode, mesh.indices.length, 0);
	    }
	  }]);

	  return MeshRenderer;
	}(Tiny.ObjectRenderer);

	Tiny.WebGLRenderer.registerPlugin('mesh', MeshRenderer);

	exports.default = MeshRenderer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Mesh = __webpack_require__(2);

	var _Mesh2 = _interopRequireDefault(_Mesh);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Renderer dedicated to meshes.
	 *
	 * @class
	 * @private
	 * @memberof Tiny
	 */
	var MeshSpriteRenderer = function () {
	  /**
	   * @param {Tiny.CanvasRenderer} renderer - The renderer this downport works for
	   */
	  function MeshSpriteRenderer(renderer) {
	    _classCallCheck(this, MeshSpriteRenderer);

	    this.renderer = renderer;
	  }

	  /**
	   * Renders the Mesh
	   *
	   * @param {Tiny.mesh.Mesh} mesh - the Mesh to render
	   */


	  _createClass(MeshSpriteRenderer, [{
	    key: 'render',
	    value: function render(mesh) {
	      var renderer = this.renderer;
	      var context = renderer.context;

	      var transform = mesh.worldTransform;
	      var res = renderer.resolution;

	      if (renderer.roundPixels) {
	        context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res | 0, transform.ty * res | 0);
	      } else {
	        context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res, transform.ty * res);
	      }

	      renderer.setBlendMode(mesh.blendMode);

	      if (mesh.drawMode === _Mesh2.default.DRAW_MODES.TRIANGLE_MESH) {
	        this._renderTriangleMesh(mesh);
	      } else {
	        this._renderTriangles(mesh);
	      }
	    }

	    /**
	     * Draws the object in Triangle Mesh mode
	     *
	     * @private
	     * @param {Tiny.mesh.Mesh} mesh - the Mesh to render
	     */

	  }, {
	    key: '_renderTriangleMesh',
	    value: function _renderTriangleMesh(mesh) {
	      // draw triangles!!
	      var length = mesh.vertices.length / 2;

	      for (var i = 0; i < length - 2; i++) {
	        // draw some triangles!
	        var index = i * 2;

	        this._renderDrawTriangle(mesh, index, index + 2, index + 4);
	      }
	    }

	    /**
	     * Draws the object in triangle mode using canvas
	     *
	     * @private
	     * @param {Tiny.mesh.Mesh} mesh - the current mesh
	     */

	  }, {
	    key: '_renderTriangles',
	    value: function _renderTriangles(mesh) {
	      // draw triangles!!
	      var indices = mesh.indices;
	      var length = indices.length;

	      for (var i = 0; i < length; i += 3) {
	        // draw some triangles!
	        var index0 = indices[i] * 2;
	        var index1 = indices[i + 1] * 2;
	        var index2 = indices[i + 2] * 2;

	        this._renderDrawTriangle(mesh, index0, index1, index2);
	      }
	    }

	    /**
	     * Draws one of the triangles that from the Mesh
	     *
	     * @private
	     * @param {Tiny.mesh.Mesh} mesh - the current mesh
	     * @param {number} index0 - the index of the first vertex
	     * @param {number} index1 - the index of the second vertex
	     * @param {number} index2 - the index of the third vertex
	     */

	  }, {
	    key: '_renderDrawTriangle',
	    value: function _renderDrawTriangle(mesh, index0, index1, index2) {
	      var context = this.renderer.context;
	      var uvs = mesh.uvs;
	      var vertices = mesh.vertices;
	      var texture = mesh._texture;

	      if (!texture.valid) {
	        return;
	      }

	      var base = texture.baseTexture;
	      var textureSource = base.source;
	      var textureWidth = base.width;
	      var textureHeight = base.height;

	      var u0 = void 0;
	      var u1 = void 0;
	      var u2 = void 0;
	      var v0 = void 0;
	      var v1 = void 0;
	      var v2 = void 0;

	      if (mesh.uploadUvTransform) {
	        var ut = mesh._uvTransform.mapCoord;

	        u0 = (uvs[index0] * ut.a + uvs[index0 + 1] * ut.c + ut.tx) * base.width;
	        u1 = (uvs[index1] * ut.a + uvs[index1 + 1] * ut.c + ut.tx) * base.width;
	        u2 = (uvs[index2] * ut.a + uvs[index2 + 1] * ut.c + ut.tx) * base.width;
	        v0 = (uvs[index0] * ut.b + uvs[index0 + 1] * ut.d + ut.ty) * base.height;
	        v1 = (uvs[index1] * ut.b + uvs[index1 + 1] * ut.d + ut.ty) * base.height;
	        v2 = (uvs[index2] * ut.b + uvs[index2 + 1] * ut.d + ut.ty) * base.height;
	      } else {
	        u0 = uvs[index0] * base.width;
	        u1 = uvs[index1] * base.width;
	        u2 = uvs[index2] * base.width;
	        v0 = uvs[index0 + 1] * base.height;
	        v1 = uvs[index1 + 1] * base.height;
	        v2 = uvs[index2 + 1] * base.height;
	      }

	      var x0 = vertices[index0];
	      var x1 = vertices[index1];
	      var x2 = vertices[index2];
	      var y0 = vertices[index0 + 1];
	      var y1 = vertices[index1 + 1];
	      var y2 = vertices[index2 + 1];

	      if (mesh.canvasPadding > 0) {
	        var paddingX = mesh.canvasPadding / mesh.worldTransform.a;
	        var paddingY = mesh.canvasPadding / mesh.worldTransform.d;
	        var centerX = (x0 + x1 + x2) / 3;
	        var centerY = (y0 + y1 + y2) / 3;

	        var normX = x0 - centerX;
	        var normY = y0 - centerY;

	        var dist = Math.sqrt(normX * normX + normY * normY);

	        x0 = centerX + normX / dist * (dist + paddingX);
	        y0 = centerY + normY / dist * (dist + paddingY);

	        //

	        normX = x1 - centerX;
	        normY = y1 - centerY;

	        dist = Math.sqrt(normX * normX + normY * normY);
	        x1 = centerX + normX / dist * (dist + paddingX);
	        y1 = centerY + normY / dist * (dist + paddingY);

	        normX = x2 - centerX;
	        normY = y2 - centerY;

	        dist = Math.sqrt(normX * normX + normY * normY);
	        x2 = centerX + normX / dist * (dist + paddingX);
	        y2 = centerY + normY / dist * (dist + paddingY);
	      }

	      context.save();
	      context.beginPath();

	      context.moveTo(x0, y0);
	      context.lineTo(x1, y1);
	      context.lineTo(x2, y2);

	      context.closePath();

	      context.clip();

	      // Compute matrix transform
	      var delta = u0 * v1 + v0 * u2 + u1 * v2 - v1 * u2 - v0 * u1 - u0 * v2;
	      var deltaA = x0 * v1 + v0 * x2 + x1 * v2 - v1 * x2 - v0 * x1 - x0 * v2;
	      var deltaB = u0 * x1 + x0 * u2 + u1 * x2 - x1 * u2 - x0 * u1 - u0 * x2;
	      var deltaC = u0 * v1 * x2 + v0 * x1 * u2 + x0 * u1 * v2 - x0 * v1 * u2 - v0 * u1 * x2 - u0 * x1 * v2;
	      var deltaD = y0 * v1 + v0 * y2 + y1 * v2 - v1 * y2 - v0 * y1 - y0 * v2;
	      var deltaE = u0 * y1 + y0 * u2 + u1 * y2 - y1 * u2 - y0 * u1 - u0 * y2;
	      var deltaF = u0 * v1 * y2 + v0 * y1 * u2 + y0 * u1 * v2 - y0 * v1 * u2 - v0 * u1 * y2 - u0 * y1 * v2;

	      context.transform(deltaA / delta, deltaD / delta, deltaB / delta, deltaE / delta, deltaC / delta, deltaF / delta);

	      context.drawImage(textureSource, 0, 0, textureWidth * base.resolution, textureHeight * base.resolution, 0, 0, textureWidth, textureHeight);

	      context.restore();
	    }

	    /**
	     * Renders a flat Mesh
	     *
	     * @private
	     * @param {Tiny.mesh.Mesh} mesh - The Mesh to render
	     */

	  }, {
	    key: 'renderMeshFlat',
	    value: function renderMeshFlat(mesh) {
	      var context = this.renderer.context;
	      var vertices = mesh.vertices;
	      var length = vertices.length / 2;

	      // this.count++;

	      context.beginPath();

	      for (var i = 1; i < length - 2; ++i) {
	        // draw some triangles!
	        var index = i * 2;

	        var x0 = vertices[index];
	        var y0 = vertices[index + 1];

	        var x1 = vertices[index + 2];
	        var y1 = vertices[index + 3];

	        var x2 = vertices[index + 4];
	        var y2 = vertices[index + 5];

	        context.moveTo(x0, y0);
	        context.lineTo(x1, y1);
	        context.lineTo(x2, y2);
	      }

	      context.fillStyle = '#FF0000';
	      context.fill();
	      context.closePath();
	    }

	    /**
	     * destroy the the renderer.
	     *
	     */

	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.renderer = null;
	    }
	  }]);

	  return MeshSpriteRenderer;
	}();

	Tiny.CanvasRenderer.registerPlugin('mesh', MeshSpriteRenderer);

	exports.default = MeshSpriteRenderer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Mesh2 = __webpack_require__(2);

	var _Mesh3 = _interopRequireDefault(_Mesh2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The Plane allows you to draw a texture across several points and them manipulate these points
	 *
	 * ```js
	 * var plane = new Tiny.mesh.Plane(Tiny.Texture.fromImage('snake.png'), 4, 4);
	 * ```
	 *
	 * @class
	 * @extends Tiny.mesh.Mesh
	 * @memberof Tiny.mesh
	 *
	 */
	var Plane = function (_Mesh) {
	  _inherits(Plane, _Mesh);

	  /**
	   * @param {Tiny.Texture}  texture   - The texture to use on the Plane.
	   * @param {number}        verticesX - The number of vertices in the x-axis
	   * @param {number}        verticesY - The number of vertices in the y-axis
	   */
	  function Plane(texture, verticesX, verticesY) {
	    _classCallCheck(this, Plane);

	    /**
	     * Tracker for if the Plane is ready to be drawn. Needed because Mesh ctor can
	     * call _onTextureUpdated which could call refresh too early.
	     *
	     * @member {boolean}
	     * @private
	     */
	    var _this = _possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this, texture));

	    _this._ready = true;

	    _this.verticesX = verticesX || 10;
	    _this.verticesY = verticesY || 10;

	    _this.drawMode = _Mesh3.default.DRAW_MODES.TRIANGLES;
	    _this.refresh();
	    return _this;
	  }

	  /**
	   * Refreshes plane coordinates
	   *
	   */


	  _createClass(Plane, [{
	    key: '_refresh',
	    value: function _refresh() {
	      var texture = this._texture;
	      var total = this.verticesX * this.verticesY;
	      var verts = [];
	      var colors = [];
	      var uvs = [];
	      var indices = [];

	      var segmentsX = this.verticesX - 1;
	      var segmentsY = this.verticesY - 1;

	      var sizeX = texture.width / segmentsX;
	      var sizeY = texture.height / segmentsY;

	      for (var i = 0; i < total; i++) {
	        var x = i % this.verticesX;
	        var y = i / this.verticesX | 0;

	        verts.push(x * sizeX, y * sizeY);

	        uvs.push(x / segmentsX, y / segmentsY);
	      }

	      //  cons
	      var totalSub = segmentsX * segmentsY;

	      for (var _i = 0; _i < totalSub; _i++) {
	        var xpos = _i % segmentsX;
	        var ypos = _i / segmentsX | 0;

	        var value = ypos * this.verticesX + xpos;
	        var value2 = ypos * this.verticesX + xpos + 1;
	        var value3 = (ypos + 1) * this.verticesX + xpos;
	        var value4 = (ypos + 1) * this.verticesX + xpos + 1;

	        indices.push(value, value2, value3);
	        indices.push(value2, value4, value3);
	      }

	      // console.log(indices)
	      this.vertices = new Float32Array(verts);
	      this.uvs = new Float32Array(uvs);
	      this.colors = new Float32Array(colors);
	      this.indices = new Uint16Array(indices);
	      this.indexDirty = true;

	      this.multiplyUvs();
	    }

	    /**
	     * Clear texture UVs when new texture is set
	     *
	     * @private
	     */

	  }, {
	    key: '_onTextureUpdate',
	    value: function _onTextureUpdate() {
	      _Mesh3.default.prototype._onTextureUpdate.call(this);

	      // wait for the Plane ctor to finish before calling refresh
	      if (this._ready) {
	        this.refresh();
	      }
	    }
	  }]);

	  return Plane;
	}(_Mesh3.default);

	exports.default = Plane;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Plane2 = __webpack_require__(5);

	var _Plane3 = _interopRequireDefault(_Plane2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DEFAULT_BORDER_SIZE = 10;

	/**
	 * The NineSlicePlane allows you to stretch a texture using 9-slice scaling. The corners will remain unscaled (useful
	 * for buttons with rounded corners for example) and the other areas will be scaled horizontally and or vertically
	 *
	 * ```js
	 * var plane9 = new Tiny.NineSlicePlane(Tiny.Texture.fromImage('BoxWithRoundedCorners.png'), 15, 15, 15, 15);
	 * ```
	 * <pre>
	 *      A                          B
	 *    +---+----------------------+---+
	 *  C | 1 |          2           | 3 |
	 *    +---+----------------------+---+
	 *    |   |                      |   |
	 *    | 4 |          5           | 6 |
	 *    |   |                      |   |
	 *    +---+----------------------+---+
	 *  D | 7 |          8           | 9 |
	 *    +---+----------------------+---+

	 *  When changing this objects width and/or height:
	 *     areas 1 3 7 and 9 will remain unscaled.
	 *     areas 2 and 8 will be stretched horizontally
	 *     areas 4 and 6 will be stretched vertically
	 *     area 5 will be stretched both horizontally and vertically
	 * </pre>
	 *
	 * @class
	 * @extends Tiny.mesh.Plane
	 * @memberof Tiny.mesh
	 *
	 */

	var NineSlicePlane = function (_Plane) {
	  _inherits(NineSlicePlane, _Plane);

	  /**
	   * @param {Tiny.Texture}  texture           - The texture to use on the NineSlicePlane.
	   * @param {int}           [leftWidth=10]    - size of the left vertical bar (A)
	   * @param {int}           [topHeight=10]    - size of the top horizontal bar (C)
	   * @param {int}           [rightWidth=10]   - size of the right vertical bar (B)
	   * @param {int}           [bottomHeight=10] - size of the bottom horizontal bar (D)
	   */
	  function NineSlicePlane(texture, leftWidth, topHeight, rightWidth, bottomHeight) {
	    _classCallCheck(this, NineSlicePlane);

	    var _this = _possibleConstructorReturn(this, (NineSlicePlane.__proto__ || Object.getPrototypeOf(NineSlicePlane)).call(this, texture, 4, 4));

	    _this._origWidth = texture.orig.width;
	    _this._origHeight = texture.orig.height;

	    /**
	     * The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
	     *
	     * @member {number}
	     * @memberof Tiny.mesh.NineSlicePlane#
	     * @override
	     */
	    _this._width = _this._origWidth;

	    /**
	     * The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
	     *
	     * @member {number}
	     * @memberof Tiny.mesh.NineSlicePlane#
	     * @override
	     */
	    _this._height = _this._origHeight;

	    /**
	     * The width of the left column (a)
	     *
	     * @member {number}
	     * @memberof Tiny.mesh.NineSlicePlane#
	     * @override
	     */
	    _this.leftWidth = typeof leftWidth !== 'undefined' ? leftWidth : DEFAULT_BORDER_SIZE;

	    /**
	     * The width of the right column (b)
	     *
	     * @member {number}
	     * @memberof Tiny.mesh.NineSlicePlane#
	     * @override
	     */
	    _this.rightWidth = typeof rightWidth !== 'undefined' ? rightWidth : DEFAULT_BORDER_SIZE;

	    /**
	     * The height of the top row (c)
	     *
	     * @member {number}
	     * @memberof Tiny.mesh.NineSlicePlane#
	     * @override
	     */
	    _this.topHeight = typeof topHeight !== 'undefined' ? topHeight : DEFAULT_BORDER_SIZE;

	    /**
	     * The height of the bottom row (d)
	     *
	     * @member {number}
	     * @memberof Tiny.mesh.NineSlicePlane#
	     * @override
	     */
	    _this.bottomHeight = typeof bottomHeight !== 'undefined' ? bottomHeight : DEFAULT_BORDER_SIZE;

	    _this.refresh(true);
	    return _this;
	  }

	  /**
	   * Updates the horizontal vertices.
	   *
	   */


	  _createClass(NineSlicePlane, [{
	    key: 'updateHorizontalVertices',
	    value: function updateHorizontalVertices() {
	      var vertices = this.vertices;

	      vertices[9] = vertices[11] = vertices[13] = vertices[15] = this._topHeight;
	      vertices[17] = vertices[19] = vertices[21] = vertices[23] = this._height - this._bottomHeight;
	      vertices[25] = vertices[27] = vertices[29] = vertices[31] = this._height;
	    }

	    /**
	     * Updates the vertical vertices.
	     *
	     */

	  }, {
	    key: 'updateVerticalVertices',
	    value: function updateVerticalVertices() {
	      var vertices = this.vertices;

	      vertices[2] = vertices[10] = vertices[18] = vertices[26] = this._leftWidth;
	      vertices[4] = vertices[12] = vertices[20] = vertices[28] = this._width - this._rightWidth;
	      vertices[6] = vertices[14] = vertices[22] = vertices[30] = this._width;
	    }

	    /**
	     * Renders the object using the Canvas renderer
	     *
	     * @private
	     * @param {Tiny.CanvasRenderer} renderer - The canvas renderer to render with.
	     */

	  }, {
	    key: '_renderCanvas',
	    value: function _renderCanvas(renderer) {
	      var context = renderer.context;

	      context.globalAlpha = this.worldAlpha;

	      var transform = this.worldTransform;
	      var res = renderer.resolution;

	      if (renderer.roundPixels) {
	        context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res | 0, transform.ty * res | 0);
	      } else {
	        context.setTransform(transform.a * res, transform.b * res, transform.c * res, transform.d * res, transform.tx * res, transform.ty * res);
	      }

	      var base = this._texture.baseTexture;
	      var textureSource = base.source;
	      var w = base.width;
	      var h = base.height;

	      this.drawSegment(context, textureSource, w, h, 0, 1, 10, 11);
	      this.drawSegment(context, textureSource, w, h, 2, 3, 12, 13);
	      this.drawSegment(context, textureSource, w, h, 4, 5, 14, 15);
	      this.drawSegment(context, textureSource, w, h, 8, 9, 18, 19);
	      this.drawSegment(context, textureSource, w, h, 10, 11, 20, 21);
	      this.drawSegment(context, textureSource, w, h, 12, 13, 22, 23);
	      this.drawSegment(context, textureSource, w, h, 16, 17, 26, 27);
	      this.drawSegment(context, textureSource, w, h, 18, 19, 28, 29);
	      this.drawSegment(context, textureSource, w, h, 20, 21, 30, 31);
	    }

	    /**
	     * Renders one segment of the plane.
	     * to mimic the exact drawing behavior of stretching the image like WebGL does, we need to make sure
	     * that the source area is at least 1 pixel in size, otherwise nothing gets drawn when a slice size of 0 is used.
	     *
	     * @private
	     * @param {CanvasRenderingContext2D} context - The context to draw with.
	     * @param {CanvasImageSource} textureSource - The source to draw.
	     * @param {number} w - width of the texture
	     * @param {number} h - height of the texture
	     * @param {number} x1 - x index 1
	     * @param {number} y1 - y index 1
	     * @param {number} x2 - x index 2
	     * @param {number} y2 - y index 2
	     */

	  }, {
	    key: 'drawSegment',
	    value: function drawSegment(context, textureSource, w, h, x1, y1, x2, y2) {
	      // otherwise you get weird results when using slices of that are 0 wide or high.
	      var uvs = this.uvs;
	      var vertices = this.vertices;

	      var sw = (uvs[x2] - uvs[x1]) * w;
	      var sh = (uvs[y2] - uvs[y1]) * h;
	      var dw = vertices[x2] - vertices[x1];
	      var dh = vertices[y2] - vertices[y1];

	      // make sure the source is at least 1 pixel wide and high, otherwise nothing will be drawn.
	      if (sw < 1) {
	        sw = 1;
	      }

	      if (sh < 1) {
	        sh = 1;
	      }

	      // make sure destination is at least 1 pixel wide and high, otherwise you get
	      // lines when rendering close to original size.
	      if (dw < 1) {
	        dw = 1;
	      }

	      if (dh < 1) {
	        dh = 1;
	      }

	      context.drawImage(textureSource, uvs[x1] * w, uvs[y1] * h, sw, sh, vertices[x1], vertices[y1], dw, dh);
	    }

	    /**
	     * The width of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
	     *
	     * @member {number}
	     */

	  }, {
	    key: '_refresh',


	    /**
	     * Refreshes NineSlicePlane coords. All of them.
	     */
	    value: function _refresh() {
	      _get(NineSlicePlane.prototype.__proto__ || Object.getPrototypeOf(NineSlicePlane.prototype), '_refresh', this).call(this);

	      var uvs = this.uvs;
	      var texture = this._texture;

	      this._origWidth = texture.orig.width;
	      this._origHeight = texture.orig.height;

	      var _uvw = 1.0 / this._origWidth;
	      var _uvh = 1.0 / this._origHeight;

	      uvs[0] = uvs[8] = uvs[16] = uvs[24] = 0;
	      uvs[1] = uvs[3] = uvs[5] = uvs[7] = 0;
	      uvs[6] = uvs[14] = uvs[22] = uvs[30] = 1;
	      uvs[25] = uvs[27] = uvs[29] = uvs[31] = 1;

	      uvs[2] = uvs[10] = uvs[18] = uvs[26] = _uvw * this._leftWidth;
	      uvs[4] = uvs[12] = uvs[20] = uvs[28] = 1 - _uvw * this._rightWidth;
	      uvs[9] = uvs[11] = uvs[13] = uvs[15] = _uvh * this._topHeight;
	      uvs[17] = uvs[19] = uvs[21] = uvs[23] = 1 - _uvh * this._bottomHeight;

	      this.updateHorizontalVertices();
	      this.updateVerticalVertices();

	      this.dirty = true;

	      this.multiplyUvs();
	    }
	  }, {
	    key: 'width',
	    get: function get() {
	      return this._width;
	    },
	    set: function set(value) {
	      this._width = value;
	      this._refresh();
	    }

	    /**
	     * The height of the NineSlicePlane, setting this will actually modify the vertices and UV's of this plane
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
	      this._refresh();
	    }

	    /**
	     * The width of the left column
	     *
	     * @member {number}
	     */

	  }, {
	    key: 'leftWidth',
	    get: function get() {
	      return this._leftWidth;
	    },
	    set: function set(value) {
	      this._leftWidth = value;
	      this._refresh();
	    }

	    /**
	     * The width of the right column
	     *
	     * @member {number}
	     */

	  }, {
	    key: 'rightWidth',
	    get: function get() {
	      return this._rightWidth;
	    },
	    set: function set(value) {
	      this._rightWidth = value;
	      this._refresh();
	    }

	    /**
	     * The height of the top row
	     *
	     * @member {number}
	     */

	  }, {
	    key: 'topHeight',
	    get: function get() {
	      return this._topHeight;
	    },
	    set: function set(value) {
	      this._topHeight = value;
	      this._refresh();
	    }

	    /**
	     * The height of the bottom row
	     *
	     * @member {number}
	     */

	  }, {
	    key: 'bottomHeight',
	    get: function get() {
	      return this._bottomHeight;
	    },
	    set: function set(value) {
	      this._bottomHeight = value;
	      this._refresh();
	    }
	  }]);

	  return NineSlicePlane;
	}(_Plane3.default);

	exports.default = NineSlicePlane;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Mesh2 = __webpack_require__(2);

	var _Mesh3 = _interopRequireDefault(_Mesh2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * The rope allows you to draw a texture across several points and them manipulate these points
	 *
	 * ```js
	 * for (let i = 0; i < 20; i++) {
	 *     points.push(new Tiny.Point(i * 50, 0));
	 * };
	 * var rope = new Tiny.mesh.Rope(Tiny.Texture.fromImage('snake.png'), points);
	 * ```
	 *
	 * @class
	 * @extends Tiny.mesh.Mesh
	 * @memberof Tiny.mesh
	 *
	 */
	var Rope = function (_Mesh) {
	  _inherits(Rope, _Mesh);

	  /**
	   * @param {Tiny.Texture} texture - The texture to use on the rope.
	   * @param {Tiny.Point[]} points - An array of {@link Tiny.Point} objects to construct this rope.
	   */
	  function Rope(texture, points) {
	    _classCallCheck(this, Rope);

	    /**
	     * An array of points that determine the rope
	     *
	     * @member {Tiny.Point[]}
	     */
	    var _this = _possibleConstructorReturn(this, (Rope.__proto__ || Object.getPrototypeOf(Rope)).call(this, texture));

	    _this.points = points;

	    /**
	     * An array of vertices used to construct this rope.
	     *
	     * @member {Float32Array}
	     */
	    _this.vertices = new Float32Array(points.length * 4);

	    /**
	     * The WebGL Uvs of the rope.
	     *
	     * @member {Float32Array}
	     */
	    _this.uvs = new Float32Array(points.length * 4);

	    /**
	     * An array containing the color components
	     *
	     * @member {Float32Array}
	     */
	    _this.colors = new Float32Array(points.length * 2);

	    /**
	     * An array containing the indices of the vertices
	     *
	     * @member {Uint16Array}
	     */
	    _this.indices = new Uint16Array(points.length * 2);

	    /**
	     * refreshes vertices on every updateTransform
	     * @member {boolean}
	     * @default true
	     */
	    _this.autoUpdate = true;

	    _this.refresh();
	    return _this;
	  }

	  /**
	   * Refreshes
	   *
	   */


	  _createClass(Rope, [{
	    key: '_refresh',
	    value: function _refresh() {
	      var points = this.points;

	      // if too little points, or texture hasn't got UVs set yet just move on.
	      if (points.length < 1 || !this._texture._uvs) {
	        return;
	      }

	      // if the number of points has changed we will need to recreate the arraybuffers
	      if (this.vertices.length / 4 !== points.length) {
	        this.vertices = new Float32Array(points.length * 4);
	        this.uvs = new Float32Array(points.length * 4);
	        this.colors = new Float32Array(points.length * 2);
	        this.indices = new Uint16Array(points.length * 2);
	      }

	      var uvs = this.uvs;

	      var indices = this.indices;
	      var colors = this.colors;

	      uvs[0] = 0;
	      uvs[1] = 0;
	      uvs[2] = 0;
	      uvs[3] = 1;

	      colors[0] = 1;
	      colors[1] = 1;

	      indices[0] = 0;
	      indices[1] = 1;

	      var total = points.length;

	      for (var i = 1; i < total; i++) {
	        // time to do some smart drawing!
	        var index = i * 4;
	        var amount = i / (total - 1);

	        uvs[index] = amount;
	        uvs[index + 1] = 0;

	        uvs[index + 2] = amount;
	        uvs[index + 3] = 1;

	        index = i * 2;
	        colors[index] = 1;
	        colors[index + 1] = 1;

	        index = i * 2;
	        indices[index] = index;
	        indices[index + 1] = index + 1;
	      }

	      // ensure that the changes are uploaded
	      this.dirty++;
	      this.indexDirty++;

	      this.multiplyUvs();
	      this.refreshVertices();
	    }

	    /**
	     * refreshes vertices of Rope mesh
	     */

	  }, {
	    key: 'refreshVertices',
	    value: function refreshVertices() {
	      var points = this.points;

	      if (points.length < 1) {
	        return;
	      }

	      var lastPoint = points[0];
	      var nextPoint = void 0;
	      var perpX = 0;
	      var perpY = 0;

	      // this.count -= 0.2;

	      var vertices = this.vertices;
	      var total = points.length;

	      for (var i = 0; i < total; i++) {
	        var point = points[i];
	        var index = i * 4;

	        if (i < points.length - 1) {
	          nextPoint = points[i + 1];
	        } else {
	          nextPoint = point;
	        }

	        perpY = -(nextPoint.x - lastPoint.x);
	        perpX = nextPoint.y - lastPoint.y;

	        var ratio = (1 - i / (total - 1)) * 10;

	        if (ratio > 1) {
	          ratio = 1;
	        }

	        var perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
	        var num = this._texture.height / 2; // (20 + Math.abs(Math.sin((i + this.count) * 0.3) * 50) )* ratio;

	        perpX /= perpLength;
	        perpY /= perpLength;

	        perpX *= num;
	        perpY *= num;

	        vertices[index] = point.x + perpX;
	        vertices[index + 1] = point.y + perpY;
	        vertices[index + 2] = point.x - perpX;
	        vertices[index + 3] = point.y - perpY;

	        lastPoint = point;
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
	      if (this.autoUpdate) {
	        this.refreshVertices();
	      }
	      this.containerUpdateTransform();
	    }
	  }]);

	  return Rope;
	}(_Mesh3.default);

	exports.default = Rope;

/***/ })
/******/ ])
});
;