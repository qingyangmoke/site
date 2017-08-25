/**
 * 此示例需要安装插件：tinyjs-plugin-audio
 */

// 实例化一个 Loader
var loader = new Tiny.loaders.Loader();
var music;

// 添加一个音频对象
loader.add([{
  name: 'music',
  url: 'https://gw.alipayobjects.com/as/g/tiny/resources/1.0.0/audios/greensleeves.ogg',
}]);

// 主场景
var Layer = function () {
  Tiny.Container.call(this);

  var container = new Tiny.Container();
  var startBtn = createTextButton('Play');
  var stopBtn = createTextButton('Stop', 60);

  container.addChild(startBtn);
  container.addChild(stopBtn);
  container.setPivot(container.width / 2, container.height / 2);
  container.setPosition(Tiny.WIN_SIZE.width / 2, Tiny.WIN_SIZE.height / 2);
  this.addChild(container);

  // 此处用来防止修改代码执行时之前的音频没有停止
  if (music) {
    music.stop();
  }
  // 保证音频资源加载完成后再操作
  loader.load(function () {
    // 通过音频资源名 music 来初始化一个 Audio 对象
    music = Tiny.audio.manager.getAudio('music');
    // 设置为循环播放
    music.loop = true;

    // 播放、暂停
    startBtn.on('pointerdown', function () {
      if (!music.playing) {
        music.play();
      } else {
        if (music.paused) {
          music.paused = false;
        } else {
          music.paused = true;
        }
      }
      updateButton();
    });
    // 停止播放
    stopBtn.on('pointerdown', function () {
      music.stop();
      updateButton();
    });

    // 更新播放、暂停按钮
    function updateButton() {
      if (music.paused) {
        startBtn.text = 'Play';
      } else {
        startBtn.text = 'Pause';
      }
    }
  });
};

// constructor
Layer.prototype = Object.create(Tiny.Container.prototype);
Layer.prototype.constructor = Layer;

// 创建文字按钮的简单方法
function createTextButton(title, y) {
  var btn = new Tiny.Text(title, {
    fill: '#fff',
  });
  btn.setAnchor(0.5);
  btn.setPositionY(y || 0);
  // 设置文字按钮可操作
  btn.setEventEnabled(true);

  return btn;
}
