// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LunaDocWebpackPlugin = require('@alipay/luna-doc-webpack-plugin');
const HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = function wrap(webpackConfig) {
  webpackConfig.module.loaders.push({
    test: /\.yml$/i,
    loader: 'json!yaml',
  });
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);

  // webpackConfig.plugins.push(new webpack.ProvidePlugin({
  //   fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch',
  //   jQuery: 'imports?this=>global!exports?global.jQuery!jquery',
  // }));

  const newPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'common',
    minChunks: module => /node_modules/.test(module.resource),
  });

  const hasPlugin = webpackConfig.plugins.some((plugin, i) => {
    if (plugin.constructor.name === 'CommonsChunkPlugin') {
      webpackConfig.plugins.splice(i, 1, newPlugin);

      return true;
    }
    return false;
  });

  if (!hasPlugin) webpackConfig.plugins.push(newPlugin);

  if (process.env.NODE_ENV === 'dev') {
    webpackConfig.entry.index = './src/index.dev.jsx';
  }

  webpackConfig.plugins.push(new LunaDocWebpackPlugin({
    path: './config/wild.yml',
    root: './build/wild/',
    local: './markdown/wild/',
  }));

  webpackConfig.plugins.push(new LunaDocWebpackPlugin({
    path: './config/docs.yml',
    root: './build/docs/',
  }));

  webpackConfig.plugins.push(new LunaDocWebpackPlugin({
    path: './config/examples.yml',
    root: './build/examples/',
  }));

  webpackConfig.plugins.push(new LunaDocWebpackPlugin({
    path: './config/tools.yml',
    root: './build/tools/',
    local: './markdown/tools/',
  }));

  webpackConfig.plugins.push(new LunaDocWebpackPlugin({
    path: './config/blogs.yml',
    root: './build/blogs/',
  }));

  webpackConfig.plugins.push(new HtmlwebpackPlugin({
    filename: 'index.html',
    template: '!!html!./index.html',
    chunks: ['common', 'index'],
  }));

  const TutorialWebpackPlugin = require('./scripts/TutorialWebpackPlugin');
  webpackConfig.plugins.push(new TutorialWebpackPlugin({
    path: './config/tutorial.yml',
    root: './build/tutorial/',
  }));

  return webpackConfig;
};
