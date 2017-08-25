// 主场景
var Layer = function () {
  Tiny.Container.call(this);

  var antSprite = Tiny.Sprite.fromImage('https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/ants/ant.png');
  var einsteinSprite = Tiny.Sprite.fromImage('https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/images/ants/einstein.png');
  var action = Tiny.MoveTo(1500, Tiny.point(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2));

  this.addChild(antSprite);
  this.addChild(einsteinSprite);
  einsteinSprite.setPosition(0, 200);

  antSprite.runAction(action);
  einsteinSprite.runAction(Tiny.Action.clone(action));
};

// constructor
Layer.prototype = Object.create(Tiny.Container.prototype);
Layer.prototype.constructor = Layer;
