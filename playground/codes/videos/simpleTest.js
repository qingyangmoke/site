// 主场景
var Layer = function () {
  Tiny.Container.call(this);

  var container = new Tiny.Container();
  var texture = Tiny.Texture.fromVideo('https://os.alipayobjects.com/rmsportal/QSOJoFHAtLqVHppcEKHj.mp4');
  var sprite = new Tiny.Sprite(texture);
  var tips = createTips('播放中...');

  this.addChild(container);
  this.addChild(tips);
  container.addChild(sprite);

  this.setEventEnabled(true);
  this.hitArea = new Tiny.Rectangle(0, 0, Tiny.WIN_SIZE.width, Tiny.WIN_SIZE.height);
  this.on('pointerdown', function () {
    var video = texture.baseTexture.source;
    if (video.paused) {
      video.play();
      tips.text = '播放中...';
    } else {
      video.pause();
      tips.text = '暂停中...';
    }
  });
};

// constructor
Layer.prototype = Object.create(Tiny.Container.prototype);
Layer.prototype.constructor = Layer;

function createTips(tip) {
  var style = {
    fontSize: 26,
    fontFamily: 'Arial',
    fill: '#ffffff',
    strokeThickness: 5,
  };
  var txt = new Tiny.Text(tip, style);
  txt.setPosition(0, 0);

  return txt;
}
