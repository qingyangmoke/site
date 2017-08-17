import _ from 'lodash';

const Util = {
  makeMenu(menuConfig) {
    const filterCallback = p => node => node.path === p;
    const menu = [];
    const defaults = menuConfig._default;
    let menuObj = _.omit(menuConfig, ['_style', '_default']);
    menuObj = _.omitBy(menuObj, node => node.hidden);
    _.mapValues(menuObj, (node, key) => {
      const paths = key.split('/');
      const shifted = [];
      let p = paths.shift();
      let m = menu;
      let n = null;

      while (p) {
        shifted.push(p);
        n = m.find(filterCallback(shifted.join('/')));

        if (!n) {
          n = _.assign({
            path: key,
            nodes: [],
          }, defaults, node);
          m.push(n);
        }

        p = paths.shift();
        m = n.nodes;
      }
    });

    return menu;
  },
  getOpenKey(menuConfig, path) {
    const menuObj = _.omit(menuConfig, ['_style', '_default']);
    return _.findKey(menuObj, (o, key) =>
      (o.type === 'dir' && (path.substr(0, path.indexOf('/')) === key)),
    );
  },
  isHidden(menuConfig, path) {
    const menuObj = _.omit(menuConfig, ['_style', '_default']);
    const matched = _.findKey(menuObj, (o, key) =>
      (o.hidden && path === key),
    );
    return matched;
  },
  getTutorialHome(menuConfig) {
    const menuObj = _.omit(menuConfig, ['_style', '_default']);
    return _.findKey(menuObj, o => (o.type !== 'dir'));
  },
};

export default Util;
