# 更多姿势

## 加载器

我们了解了加载器的基本使用方法，不过，还有更多的姿势。
Tiny.js 的加载器是基于 [resource-loader](https://github.com/englercj/resource-loader)，所以你可以直接使用 resource-loader 的接口。

#### 给加载的资源设定 name

如果需要，你可以给每一个资源设置一个唯一的 name，如果不设置，默认就是资源的传入链接的字符串。

``` js
Tiny.Loader
  .add('antImage', 'images/ant.png')
  .load(function(){..});
```

这里在 `Tiny.Loader.resources` 下创建了一个叫 `antImage` 的对象，这就意味着你可以引用这个对象来创建精灵：

``` js
var antSprite = new Tiny.Sprite(Tiny.Loader.resources['antImage'].texture);
```

再强调一下，非特殊需要不要这样去用！要记的东西多了会让你耽误不必要的时间。

#### 监测加载进度

你可以通过 `resource-loader` 的 `progress` 事件来监听加载进度：

``` js
Tiny.Loader.on('progress', progressHandler);
function progressHandler(loader, resource) {
  console.log('url => ' + resource.url, 'name => ' + resource.name);
  console.log('progress => ', loader.progress + '%');
}
```

也可以使用 Tiny.js 提供的整体方案：

``` js
Tiny.Loader.run({
  resources: [..],
  // 加载进度
  onProgress: function(per, resource){
    console.log('url => ' + resource.url, 'name => ' + resource.name);
    console.log('percent => ', per + '%');
  }
});
```

> Tips
>
> - 有一些额外的属性在 `resource` 上，`resource.error` 会告诉你一些可能错误原因，`resource.data` 获取文件的二进制数据。
> - 更多的特性，比如：`add` 方法的更多入参、`reset` 方法等请移步 [resource-loader](https://github.com/englercj/resource-loader)

## 动画

Tiny.js 的动画是基于 [tween.js](https://github.com/tweenjs/tween.js)，所以你可以直接使用 `Tiny.TWEEN` 暴露出来的 tween.js 的接口，使用它创造性的做出花样来。

现在我们想要让精灵位置、缩放、旋转同时变化：

``` js
const tween = new Tiny.TWEEN.Tween({
...
}).to({
...
}, duration)
  .repeat(..)
  .delay(..)
  .easing(..)
  .yoyo(..)
  .interpolation(..)
  .onUpdate(function () {
  ...
  })
  .onComplete(function () {
  ...
  });
tween.start();
```

然后，在 `onUpdate` 加上对精灵属性的变化：

``` js
.onUpdate(function () {
  sprite.setPosition(this.x, this.y);
  sprite.setScale(this.scaleX, this.scaleY);
  sprite.setRotation(this.rotation);
  ...
})
```

#### 重复的延迟

你可以对一个重复或永久重复的动画设置一个延迟，有多种方式，我们逐个阐述一下：

1. 使用 Action 实例的 `setRepeatDelay` 方法。

``` js
var action = Tiny.RotateTo(2000, {rotation: Tiny.deg2radian(360)});
// 设置重复 3000ms 的延迟
action.setRepeatDelay(3000);
// 执行重复3次的动画
sprite.runAction(Tiny.Repeat(3, action));
```

2. 透传静态方法 `Repeat` 的第三个参数。

``` js
// 执行重复3次 3000ms 延迟的动画
sprite.runAction(Tiny.Repeat(3, action, 3000));
```

永久重复也是一样的：

``` js
action.setRepeatDelay(3000);
sprite.runAction(Tiny.RepeatForever(action));
// 或者
sprite.runAction(Tiny.RepeatForever(action, 3000));
```


#### 使用插值

使用 `setInterpolation` 方法可以设置动画的贝塞尔插值，用图形直观的解释（图中右上角的点就是插值点）：

![](https://zos.alipayobjects.com/rmsportal/NHofuDgQURNsmcSbGuXT.png)

tween.js 提供三种常用插值：`Linear`、`Bezier`、`CatmullRom`，当然，你可以使用自己的插值算法，绑定到 `Tiny.TWEEN.Interpolation` 即可。
现在我们写一个 cos 的插值算法：

``` js
var cosineFn = function(p0, p1, t) {
  var k = (1 - Math.cos(t * Math.PI)) / 2;
  return (p1 - p0) * k + p0;
};
Tiny.TWEEN.Interpolation.Cosine = function(v, k) {
  var m = v.length - 1;
  var f = m * k;
  var i = Math.floor(f);
  return cosineFn(v[i], v[i + 1 > m ? m : i + 1], f - i);
};
```

然后，使用它：

``` js
var action = Tiny.MoveTo(3000, {
  x: [260, 0, 80],
  y: [400]
});
action.setInterpolation(Tiny.TWEEN.Interpolation.CatmullRom);
```

我们再把这个插值和自带的三个进行一下对比，它们效果和运动轨迹如下：

<table>
  <thead>
    <tr>
      <th>Linear</th>
      <th>Bezier</th>
      <th>CatmullRom</th>
      <th>Cosine</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><video controls="" width="240" name="media"><source src="https://os.alipayobjects.com/rmsportal/NjYCgXCKzbEoPGjIQyQF.mp4" type="video/mp4"></video></td>
      <td><video controls="" width="240" name="media"><source src="https://os.alipayobjects.com/rmsportal/cdGJrBPcTCZzoWGOKjmy.mp4" type="video/mp4"></video></td>
      <td><video controls="" width="240" name="media"><source src="https://os.alipayobjects.com/rmsportal/drzEnlCbBmaKIWKhtsrU.mp4" type="video/mp4"></video></td>
      <td><video controls="" width="240" name="media"><source src="https://os.alipayobjects.com/rmsportal/vAEtZComMUwqDfqyyYRm.mp4" type="video/mp4"></video></td>
    </tr>
    <tr>
      <td><img width="240" src="https://zos.alipayobjects.com/rmsportal/ZYzaHsUQvaBwjUxppJeJ.png" /></td>
      <td><img width="240" src="https://zos.alipayobjects.com/rmsportal/MNxGEDjQAnonUyXFPVWr.png" /></td>
      <td><img width="240" src="https://zos.alipayobjects.com/rmsportal/yzgvXRkzujhxUznhvQdY.png" /></td>
      <td><img width="240" src="https://zos.alipayobjects.com/rmsportal/hLYRBhMCJcfZZOFPuYuS.png" /></td>
    </tr>
  </tbody>
</table>

## 相对位置

当你添加一个精灵到一个 `Container`，它的 `x`、`y` 位置是相对于这个组的左上角，这是精灵的 local position。
从下图中，你认为"支地鼠"的位置是多少？

![](https://zos.alipayobjects.com/rmsportal/JgFDhdTWWNyVMjPmVWEu.png@240w)

``` js
console.log(aliMole.getPositionX());
//=> 0
```

0？是的！因为"支地鼠"的 `x` 值是相对于组 `moles` 的左上角，0 就是精灵的 local position。

如果我们想要获取精灵相对于画布的全局位置（global position）呢？就是相对于画布的左上角的位置。
你可以使用 `toGlobal` 方法：

``` js
parentSprite.toGlobal(childSprite.position);
```

这就意味这你可以找到 moles 组里的 aliMole 的全局位置：

``` js
console.log(moles.toGlobal(aliMole.getPosition()));
//=> {x: 40, y: 165}
```

如果我不知道精灵的父容器是什么，怎么办？每一个继承于 `DisplayObject` 的显示类都有 `parent` 属性，这会返回它的父对象，上面的代码中 `aliMole` 的 parent 就是 `moles`，所以，你获取 `aliMole` 全局位置的姿势就可以是这样的：

``` js
aliMole.parent.toGlobal(aliMole.getPosition());
```

不过，你可以使用 `getGlobalPosition` 快速得到全局位置，这也是推荐的姿势：

``` js
// 支地鼠的全局位置
console.log(aliMole.getGlobalPosition());
//=> {x: 40, y: 165}

// 堵车鼠的全局位置
console.log(dcMole.getGlobalPosition());
//=> {x: 80, y: 205}

// 排队鼠的全局位置
console.log(pdMole.getGlobalPosition());
//=> {x: 120, y: 245}
```

> Tips
>
- 获取全局位置后，对于检测碰撞会有很大的帮助。

你还可以使用 `toLocal` 方法来得到两个精灵之间的相对位置：

``` js
console.log(aliMole.toLocal(aliMole.position, dcMole));
//=> {x: 40, y: 40}
```

从上面的代码片段运行的结果可以看出："支地鼠"和"堵车鼠"之间的偏移量是 {40, 40}。

## 碰撞检测

Tiny.js 提供多种 bound 检测方法，可以用来判断精灵之间的包含、碰撞情况。具体使用参看 API 文档，下面列出一些：

| 方法名 | 图解 | 描述
| --: | :--: | :--
| rectContainsRect | <img src="http://tfs.alipayobjects.com/images/rmsweb/T1hoXgXXNfXXXXXXXX.png" /> | 检测一个显示对象是否在另一个显示对象内部
| rectContainsPoint | <img src="http://tfs.alipayobjects.com/images/rmsweb/T1GENgXkRaXXXXXXXX.png" /> | 检测一个点是否在一个显示对象内部
| rectIntersectsRect | <img src="http://tfs.alipayobjects.com/images/rmsweb/T18.hgXoddXXXXXXXX.png" /> | 检测两个显示对象是否相交，一般用于检测碰撞
| rectUnion | <img src="http://tfs.alipayobjects.com/images/rmsweb/T1JD4gXhlfXXXXXXXX.png" /> | 返回两个显示对象的总区域
| isPixelCollision | ／ | 像素检测判断是否碰撞

举个栗子：

```js
var rect = new Tiny.Rectangle(10, 10, 50, 50);
var p = new Tiny.Point(49, 62);
Tiny.rectContainsPoint(rect, p);
//=> true
```

对于像素检测碰撞，使用的姿势稍微高级一点，这会涉及到很多的点，游戏 Demo 《Nohumanity》 中有使用，这里简单介绍一下。

假设 hero、bomb 已经被创建并加到了舞台场景中，那么 `isPixelCollision` 的使用姿势如下：

``` js
// 从 Application 的实例对象 app 中获取到 renderer 对象
var renderer = app.renderer;
// 通过 Tiny.extract 提供的 pixels 方法获取到 hero 的像素集
hero.data = app.renderer.plugins.extract.pixels(hero);
bomb.data = app.renderer.plugins.extract.pixels(bomb);
// 检测
var collide = Tiny.isPixelCollision(
  hero,
  hero.getPositionX(),
  hero.getPositionY(),
  true,
  bomb,
  bomb.getPositionX(),
  bomb.getPositionY(),
  false
);
if (collide) {
  // 有碰撞
} else {
  // 没碰撞
}
```

> 注意
>
> - 代码中的 `extract` 对象不包含在默认库中，需要引用/安装插件：`tinyjs-plugin-extract`；
> - 如果显示对象的透明度（Opacity）是0，那么不能通过像素检测碰撞情况的，因为 `pixels` 方法返回的数组里全是 0，所以这种情况必须要检测，建议设置透明度（setOpacity）为0.01或更低。

## 插件

撰写中..

## 公共方法

Tiny.js 暴露出很多常用的公共方法，下面列出一些：

| 方法名 | 描述
| :-- | :--
| random(min, max) | 返回入参区间内的随机整数
| randomInt | 原生的 random
| randomFloat(min, max) | 返回入参区间内的随机浮点数
| randomBool(chance) | 返回小于 chance 的布尔概率
| randomPM(chance) | 按 chance 概率随机返回 -1 或 1
| randomFromArray(arr) | 随机返回数组 arr 里的某个值
| hex2rgb(hex, out) | 转换16进制颜色值为 [R, G, B] 数组
| hex2string(hex) | 转换16进制颜色值为字符类型
| rgb2hex(rgb) | 转换 [R, G, B] 数组为16进制颜色值
| deg2radian(deg) | 角度转弧度
| removeItems(arr, startIdx, removeCount) | 移除数组中的某段范围的值
| arrayRemoveObject(arr, delObj) | 移除数组中的某个值
| detect(obj, iterator, context, arg1, arg2) | 对对象 obj 迭代 iterator

## EventEmitter

Tiny.js 使用了 [eventemitter3](https://github.com/primus/eventemitter3)，你可以通过 `Tiny.EventEmitter` 获得，举个栗子：

``` js
var EE = new Tiny.EventEmitter();
EE.on('event', () => {
  console.log('an event occurred!');
});
EE.emit('event');
//=> an event occurred!
```

## isMobile

Tiny.js 使用了 [isMobile](https://github.com/kaimallea/isMobile)，你可以通过 `Tiny.isMobile` 获得，举个栗子：

``` js
// 是否是 iPhone 设备
var isIPhone = Tiny.isMobile.apple.phone
//=> true

// 是否是 Android 设备
var isAndroid = Tiny.isMobile.android.phone
//=> false
```

## object-assign

Tiny.js 使用了 [object-assign](https://github.com/sindresorhus/object-assign)，并暴露给 `Object` 对象（如果你的浏览器不支持 `Object.assign`），所以你可以放心使用 `Object.assign`。
