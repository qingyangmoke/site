import React from 'react';
import { Layout } from 'antd';
import { TopNav } from '../../components/public/publicComponents';
import menuConfig from '../../../config/examples.yml';
import playgroundData from '../../../config/playground.yml';
import TestList from './sider/test-list.jsx';
import mobile from 'is-mobile';
import './index.less';


const { Header, Content } = Layout;

class PlaygroundPage extends React.Component {
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
      <div id="playground-page" className="main">
        <Layout className="site-layout" style={{ height: '100vh' }}>
          <Header className="site-header">
            <TopNav active="playground" />
          </Header>
          <Content className="site-content" style={{ position: 'relative' }}>
            {
              mobile()
                ?
                  <Content className={'mobile-list'}>
                    <TestList playgroundData={playgroundData} />
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

PlaygroundPage.propTypes = {
  side: React.PropTypes.node,
  layout: React.PropTypes.node,
};

export default PlaygroundPage;
