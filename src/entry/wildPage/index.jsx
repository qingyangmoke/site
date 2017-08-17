import React from 'react';
import {Layout, BackTop} from 'antd';
import {TopNav, PageAnchor} from '../../components/public/publicComponents';

import './index.less';

const {Header, Content} = Layout;

class Wild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div id="wild-page" className="main" onClick={this.hideSideNav}>
        <Layout className="site-layout">
          <Header className="site-header">
            <TopNav active="wild"/>
          </Header>
          <Content className="site-content">
            <div className="content-wrapper docs-layout">
              <div id="innerDoc"
                   className="p-docs-content with-sideNav">
                {this.props.children}
              </div>
              <div className="p-docs-anchor">
                <PageAnchor />
              </div>
            </div>
          </Content>
        </Layout>
        <BackTop />
      </div>
    );
  }
}

Wild.propTypes = {
  params: React.PropTypes.object,
  children: React.PropTypes.node,
};
export default Wild;
