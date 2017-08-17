import React from 'react';
import {Layout, Icon, BackTop} from 'antd';
import {TopNav, SideNav, PageAnchor} from '../../components/public/publicComponents';
import menuConfig from '../../../config/tutorial.yml';

import './index.less';

const {Header, Content} = Layout;

class Tutorial extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavVisible: false,
    };

    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.hideSideNav = this.hideSideNav.bind(this);
  }

  toggleSideNav(e) {
    e.stopPropagation();
    this.setState(
      {sideNavVisible: !this.state.sideNavVisible},
    );
  }

  hideSideNav() {
    if (this.state.sideNavVisible) {
      this.setState(
        {sideNavVisible: false},
      );
    }
  }

  render() {
    return (
      <div id="tutorial-page" className="main" onClick={this.hideSideNav}>
        <Layout className="site-layout">
          <Header className="site-header">
            <TopNav active="tutorial"/>
          </Header>
          <Content className="site-content">
            <div className="content-wrapper docs-layout">
              <div className={`p-side-navigation ${this.state.sideNavVisible ? 'show' : ''}`}
                   onClick={(e) => { e.stopPropagation(); }}>
                <SideNav path={this.props.params.splat}
                         data={menuConfig}
                         itemClick={this.hideSideNav}
                         root={'tutorial'}
                         allOpen showSideNav={this.state.floatNavVisible}
                         triggerHandler={this.toggleFloatNav}/>
              </div>
              <div id="innerDoc"
                   className="p-docs-content with-sideNav">
                {this.props.children}
              </div>
              <div className="p-docs-anchor">
                <PageAnchor />
              </div>
              <Icon className="p-sideNav-trigger"
                    type={this.state.sideNavVisible ? 'menu-fold' : 'menu-unfold'}
                    onClick={this.toggleSideNav}/>
            </div>
          </Content>
        </Layout>
        <BackTop />
      </div>
    );
  }
}

Tutorial.propTypes = {
  params: React.PropTypes.object,
  children: React.PropTypes.node,
};
export default Tutorial;
