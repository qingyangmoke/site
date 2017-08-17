import React from 'react';
import { Menu, Icon, Dropdown } from 'antd';
import { Link } from 'react-router';
import siteMap from '../../../../config/sitemap';

import './index.less';

class TopNav extends React.Component {
  getCurrentPage() {
    const active = this.props.active;
    let currentPage = '';
    siteMap.some((node) => {
      if (node.id === active) {
        currentPage = node.name;
        return true;
      }
      return false;
    });
    return currentPage;
  }
  menuRender(mode) {
    const menuList = siteMap.map((node) => {
      if (node.hidden) {
        return null;
      }
      let linkElem = <Link to={node.path}>{node.name}</Link>;
      var reg = /http(s)?:\/\//ig;
      if(reg.test(node.path)){
        linkElem = <a href={node.path} target="_blank">{node.name}</a>;
      }
      return (
        <Menu.Item key={node.id} className="topNav-menu-item">
          {linkElem}
        </Menu.Item>
      );
    });

    return (
      <Menu mode={mode} className="topNav-menu" selectedKeys={[this.props.active]}>
        {menuList}
      </Menu>
    );
  }
  render() {
    return (
      <div id="top-nav">
        <div className="topNav-site-logo">
          <Link to="/">Tiny.js</Link>
          <span className="topNav-page-title">{this.getCurrentPage()}</span>
        </div>
        <div className="topNav-container">
          {/* TODO: Add search bar here */}
          {this.menuRender('horizontal')}
        </div>
        <Dropdown overlay={this.menuRender()} trigger={['click']}>
          <a className="ant-dropdown-link dropdown-trigger" href="javascript:void(0)">
            <Icon type="bars" />
          </a>
        </Dropdown>
      </div>
    );
  }
}

TopNav.propTypes = {
  active: React.PropTypes.string,
};
export default TopNav;
