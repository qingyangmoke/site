// 主场景
var Layer = function () {
  Tiny.Container.call(this);

  var sprite = Tiny.Sprite.fromImage('https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/bg/pic1.jpg');
  // 使用静态方法 fromImage 创建纹理
  var mokeyUrl = 'https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/mokey.png';
  var texture = Tiny.Texture.fromImage(mokeyUrl);
  // 使用纹理创建精灵
  var mokey = new Tiny.Sprite(texture);
  var g = null;
  var updateHandle = function (self) {
    // 使用插件 tinyjs-plugin-extract 的方法 pixels 将精灵转换成像素值
    var pixels = Tiny.app.renderer.plugins.extract.pixels(mokey);
    g = pixels2graphics(pixels, mokey.width, mokey.height);
    sprite.mask = g;

    self.addChild(g);
  };
  // 只有等图片加载完成才能获取到像素值
  texture.on('update', () => {
    updateHandle(this);
  });
  if (Tiny.TextureCache[mokeyUrl]) {
    updateHandle(this);
  }
  this.addChild(sprite);

  this.setEventEnabled(true);
  this.on('pointermove', function (data) {
    var pos = data.data.global;
    g && g.setPosition(~~(pos.x - mokey.width / 2), ~~(pos.y - mokey.height / 2));
  });
};

// constructor
Layer.prototype = Object.create(Tiny.Container.prototype);
Layer.prototype.constructor = Layer;

/**
 * 像素转化为图形
 *
 * @param {Array}   pixels  - 位图像素值
 * @param {Number}  width   - 位图真实宽度
 * @param {Number}  height  - 位图真实高度
 * @return {Tiny.Graphics}
 */
function pixels2graphics(pixels, width, height) {
  var arr = [];
  var pos = [];

  for (var i = 0; i < pixels.length; i++) {
    if (i % 4 === 0) {
      var rgba = [];
      for (var c = 0; c < 4; c++) {
        rgba.push(pixels[i + c]);
      }
      arr.push(rgba);
    }
  }
  for (var j = 0; j < arr.length; j++) {
    if (arr[j][3] !== 0) {
      pos.push([j % width, ~~(j / height)]);
    }
  }

  var g = new Tiny.Graphics();
  g.lineStyle(1, 0x000000, 1);
  pos.forEach((p) => {
    g.moveTo(p[0], p[1]);
    g.lineTo(p[0] + 1, p[1] + 1);
  });

  return g;
}
