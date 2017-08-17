const LunaDocWebpackPlugin = require('@alipay/luna-doc-webpack-plugin');
const YAML = require('yamljs');
const _ = require('lodash');

function TutorialWebpackPlugin(options) {
  LunaDocWebpackPlugin.call(this, options);
  return this;
}
TutorialWebpackPlugin.prototype = new LunaDocWebpackPlugin({
  path: './config/tutorial.yml',
  root: './build/tutorial/',
});
TutorialWebpackPlugin.prototype.getConfig = function () {
  const self = this;
  const config = YAML.load('./config/tutorial.yml');
  for (const name in config) {
    if (config[name].type === 'dir') {
      const nodes = config[name].nodes;
      nodes.forEach((node) => {
        config[node.path] = node;
        delete node.path;
      });
      delete config[name];
    }
  }
  for (const name in config) {
    config[name]['key'] = name;
    config[name] = _.defaults(config[name], config['_default']);
    if (config[name].type === 'node' && config[name].source === 'local') {
      config[name].link = './markdown/tutorial/' + config[name].link;
    }
  }
  delete config['_default'];
  self.config = config;
};

module.exports = TutorialWebpackPlugin;
