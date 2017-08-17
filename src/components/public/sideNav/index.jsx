import React from 'react';
import {Link} from 'react-router';
import {Menu} from 'antd';
import util from '../../../common/lib/util';

import './index.less';

const {SubMenu} = Menu;


class SideNav extends React.Component {

  menuItem(node) {
    const {root} = this.props;

    if (node.type === 'dir') {
      return (
        node.nodes && node.nodes.length ?
          <SubMenu key={node.path} title={<span>{node.name}</span>} className="side-nav-item">
            {node.nodes.map(subNode => this.subMenuItem(subNode, node.path))}
          </SubMenu> : ''
      );
    }

    return (
      <Menu.Item
        key={node.path}
        onClick={this.props.itemClick}
        className="side-nav-item"
      >
        <Link
          to={`/${root}/${node.path}`}
          onClick={(this.props.itemClick)}
          activeClassName="active"
        >
          {node.name}
        </Link>
      </Menu.Item>
    );
  }

  subMenuItem(node,root) {
    return (
      <Menu.Item
        key={node.path}
        onClick={this.props.itemClick}
        className="side-nav-item"
      >
        <Link
          to={`/tutorial/${node.path}`}
          onClick={(this.props.itemClick)}
          activeClassName="active"
        >
          {node.name}
        </Link>
      </Menu.Item>
    );
  }

  render() {
    const {path, data, allOpen, root} = this.props;
    let menuList = util.makeMenu(data);
    const hiddenKey = util.isHidden(data, path);
    const openKey = util.getOpenKey(data, path);

    if (hiddenKey) {
      menuList = [{
        name: data[hiddenKey].name,
        path: hiddenKey,
      }];
    }

    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={[path]}
        defaultOpenKeys={allOpen ? Object.keys(data) : [openKey]}
        className={root === 'tools' ? 'menu-with-des' : ''}
        id="side-nav"
      >
        {menuList.map(node => this.menuItem(node))}
      </Menu>);
  }
}

SideNav.propTypes = {
  path: React.PropTypes.string,
  root: React.PropTypes.string,
  data: React.PropTypes.object,
  allOpen: React.PropTypes.bool,
  itemClick: React.PropTypes.func,
};

export default SideNav;
