'use strict';
const path = require('path');
const fse = require('fs-extra');

const antdPolyfill = () => {
  const filePath = path.resolve('./node_modules/antd/lib/anchor/anchorHelper.js');
  let content = fse.readFileSync(filePath);
  content = content.toString().replace('history.pushState(null, \'\', href);', '');
  fse.writeFileSync(filePath, content);
  console.log('Antd has been polyfilled.');
};

antdPolyfill();
