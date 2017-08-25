// 实例化一个 Loader
var loader = new Tiny.loaders.Loader();
// 添加一个图片资源
loader.add([{
  name: 'ant',
  url: 'https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/ants/einstein.png',
}]);

// 主场景
var Layer = function () {
  Tiny.Container.call(this);

  var pContainer = new Tiny.particles.ParticleContainer();

  this.addChild(pContainer);

  loader.load(() => {
    var texture = Tiny.TextureCache['ant'];
    // 创建 5 个随机大小、位置的精灵，并把它们放到 ParticleContainer 中
    for (var i = 0; i < 5; i++) {
      var ant = new Tiny.Sprite(texture);

      ant.setAnchor(0.5);
      ant.setScale(0.5 + Math.random() * 0.3);
      ant.setPosition(Math.random() * Tiny.WIN_SIZE.width, Math.random() * Tiny.WIN_SIZE.height);
      pContainer.addChild(ant);
    }

    // 使用实例化对象的方法 getBounds 获取到 bound
    var bound = pContainer.getBounds();
    // 为直观感受，给容器加上边框
    var rectangle = new Tiny.Graphics();
    rectangle.lineStyle(1, 0xFF3300, 1);
    rectangle.drawRect(bound.x, bound.y, bound.width, bound.height);
    rectangle.endFill();
    this.addChild(rectangle);
  });
};

// constructor
Layer.prototype = Object.create(Tiny.Container.prototype);
Layer.prototype.constructor = Layer;
