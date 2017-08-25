# 插件开发

## 简介

插件是 Tiny.js 能力的延伸，它们可以支撑起你天马行空的想象，让你的游戏简单实现而又丰富多彩。

你可以把你在游戏开发过程中的各种各样有意思的小功能封装成插件，贡献出来，让越来越多的人享用，多么愉快。

## 准备

Tiny.js 的插件开发很简单，首先安装 <a href="#/tools/tinyjs-cli" target="_blank">Tiny.js 本地开发工具</a>，然后使用命令初始化 Tiny.js 插件项目：

``` bash
$ tiny plugin
```

按照提示输入，生成项目目录如下：

``` bash
.
├── .editorconfig
├── .eslintrc
├── .gitignore
├── Makefile
├── README.md
├── demo                    # demo 目录
│   └── index.html
├── package.json
├── src                     # 源文件
│   └── index.js
└── webpack.config.js
```

## 命令

相关执行脚本如下：

- `npm install`：安装依赖
- `npm start`：启动本地服务，通过 `localhost:8080` 即可访问
- `npm run build`：使用 webpack 编译，最后会生成 dist 目录，包含两个文件：`index.js` 和 `index.debug.js`
- `npm run doc`：使用 jsdoc 编译成 API 文档，在当前目录下生成 docs
- `npm test`：单元测试

> 注意
>
> 在更改模块版本前（`preversion`）会执行 eslint 检验代码规范和单元测试

## 类型

我们觉得插件可以分两类，一种是`类（Class）`形式的，另一种的`模块（Module）`式的，你可以参考：

- `Class`：https://github.com/ant-tinyjs/tinyjs-plugin-dust
- `Module`：https://github.com/ant-tinyjs/tinyjs-plugin-extract

## 编译

Tiny.js 插件是使用 webpack 编译的，自动添加 `Tiny` 为命名空间，遵循 [umd 规范](https://github.com/umdjs/umd)。

## API 文档

Tiny.js 插件的 API 文档是通过 [JSDoc](http://usejsdoc.org/) 生成的，所以你在编写插件时按照 JSDoc 规则来编写注释，这样会快速产出文档。

> Tip
>
> 好的文档会给你的插件带来更多的用户，他们会感恩你的友好和专业。

## 发布

- CDN：你可以自行发布，也可以告诉我们来发布 CDN
- npm：使用 `npm publish` 发布到 npm 源

最后，别忘了告诉我们，给我们提个 [issue](https://github.com/ant-tinyjs/site/issues)，概要性的阐述下插件，附上仓库地址，我们会将友好的插件集成到 Tiny.js 主站。

### 感谢你的开放精神！

---

## 使用

插件开发完成后，用户可以通过三种方式引用，下面我们以 `Dust` 插件演示：

首先引用 Tiny.js 源码：

``` html
<!-- xxx 为版本号，请在 http://tinyjs.net 首页获取最新版本 -->
<script src="https://gw.alipayobjects.com/as/g/tiny/tiny/xxx/tiny.js"></script>
```

1. 使用 CDN 地址

    ``` html
    <script src="https://a.alipayobjects.com/g/tiny-plugins/tinyjs-plugin-dust/0.0.1/index.js"></script>
    ```

    ``` js
    console.log(Tiny.Dust);
    ```

2. require

    ``` js
    var Dust = require('tinyjs-plugin-dust');
    console.log(Dust);
    ```

3. import

    ``` js
    import Dust from 'tinyjs-plugin-dust';
    console.log(Dust);
    ```


