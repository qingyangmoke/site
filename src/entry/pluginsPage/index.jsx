import React from 'react';
import {Layout} from 'antd';
import {TopNav, CardGrid} from '../../components/public/publicComponents';
import menuConfig from '../../../config/plugins.yml';
import {Link} from 'react-router';

import './index.less';

const {Header, Content} = Layout;

let componentList = [];
for (const item in menuConfig) {
  if (menuConfig.hasOwnProperty(item) && item !== '_default') {
    let conf = menuConfig[item];
    conf.selfName = conf.name;
    conf.name = item;
    componentList.push(menuConfig[item]);
  }
}

class PluginsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      componentList,
    };
  }

  render() {
    return (
      <div id="plugins-page" className="main">
        <Layout className="site-layout">
          <Header className="site-header">
            <TopNav active="plugins"/>
          </Header>
          <Content className="site-content flexbox-v">
            <Layout className="flexbox-item">
              <div className="p-action-list">
                <Link className="p-doc-link" to="/wild/plugin-development" target="_blank">贡献一个插件？</Link>
              </div>
              <CardGrid componentList={this.state.componentList}/>
            </Layout>
            {this.props.children}
          </Content>
        </Layout>
      </div>
    )
  }
}
export default PluginsPage;
