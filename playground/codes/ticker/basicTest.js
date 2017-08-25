// 主场景
var Layer = function () {
  Tiny.Container.call(this);

  var txt = new Tiny.Text('Hello, Tiny.js', {
    fill: 'white',
  });
  this.addChild(txt);

  var ticker = new Tiny.ticker.Ticker();
  var tickerHandler = function (time) {
    txt.position.x++;
    txt.position.y++;
  };
  ticker.add(tickerHandler);

  ticker.start();
};

// constructor
Layer.prototype = Object.create(Tiny.Container.prototype);
Layer.prototype.constructor = Layer;
