import React from 'react';
import { Layout } from 'antd';
import './index.less';
import { CenterContent, FooterContent } from '../../components/homePage/homePageComponents';
import { TopNav } from '../../components/public/publicComponents';

const { Header, Footer, Content } = Layout;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      signature: {
        logo: (<img src="https://zos.alipayobjects.com/rmsportal/jWPWbIfxSHRArNMupsnx.png" width="20px" />),
        content: '本站使用 luna-site 快速搭建',
      },
      highlights: [
        {
          title: '简单',
          content: '轻量级且接口友好，易于上手',
        },
        {
          title: '高效',
          content: '具备 Pixi.js 的核心渲染能力，高效而强劲',
        },
        {
          title: '稳定',
          content: '亿万玩家都玩过',
        },
      ],
      parteners: [
        {
          name: 'PixiJS',
          logo: 'https://gw.alipayobjects.com/zos/rmsportal/fDMkphnfRmnnAftZFDNO.png@24h.src',
          src: 'http://www.pixijs.com',
        },
      ],
    };
  }

  render() {
    return (
      <div id="home-page" className="main">
        <Layout className="site-layout overlay-header">
          <Header className="site-header">
            <TopNav />
          </Header>
          <Content className="site-content">
            <CenterContent highlights={this.state.highlights} />
          </Content>
          <Footer className="site-footer">
            <FooterContent parteners={this.state.parteners} signature={this.state.signature} />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
