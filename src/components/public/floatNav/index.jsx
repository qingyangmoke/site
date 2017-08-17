import React from 'react';
import { Icon } from 'antd';
import './floatNav.less';


class FloatNav extends React.Component {

  render() {
    return (
      <div className="p-float-menu-button">
        <Icon
          type={this.props.showSideNav ? 'menu-fold' : 'menu-unfold'}
          onClick={this.props.clickHandler}
        />
      </div>
    );
  }
}

FloatNav.propTypes = {
  clickHandler: React.PropTypes.func,
  showSideNav: React.PropTypes.bool,
};
export default FloatNav;
