import React from 'react';
import { Layout } from 'antd';
import { TopNav } from '../../components/public/publicComponents';
import menuConfig from '../../../config/examples.yml';
import DemoList from './sider/demo-list.jsx';
import mobile from 'is-mobile';
import './index.less';


const { Header, Content } = Layout;

class ExamplesPage extends React.Component {
  pathToURL(path) {
    const a = document.createElement('a');
    a.href = path;
    return a.href;
  }

  openURL = (url) => {
    window.open(url, '_blank');
  }

  render() {
    return (
      <div id="examples-page" className="main">
        <Layout className="site-layout" style={{ height: '100vh' }}>
          <Header className="site-header">
            <TopNav active="examples" />
          </Header>
          <Content className="site-content" style={{ position: 'relative' }}>
            {
              mobile()
                ?
                  <Content className={'mobile-list'}>
                    <DemoList data={menuConfig} />
                  </Content>
                :
                  <Layout className={'page-layout ant-layout-has-sider'}>
                    {this.props.side}
                    {this.props.layout}
                  </Layout>
            }
          </Content>
        </Layout>
      </div>
    );
  }
}

ExamplesPage.propTypes = {
  side: React.PropTypes.node,
  layout: React.PropTypes.node,
};

export default ExamplesPage;
