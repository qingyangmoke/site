import React from 'react';
import {Layout} from 'antd';
import {TopNav, CardGrid} from '../../components/public/publicComponents';
import './index.less';

const {Header, Content} = Layout;

class DocsPage extends React.Component {
  constructor(props) {
    super(props);

    // var timer = setInterval(function () {
    //   var iframe = document.getElementById('J-iframe');
    //   var hideFn = function () {
    //     clearInterval(timer);
    //     iframe.contentDocument.querySelector('.applicationName').style.display = 'none';
    //   };
    //   if (iframe) {
    //     if (!/*@cc_on!@*/0) { //if not IE
    //       iframe.onload = function () {
    //         hideFn();
    //       };
    //     } else {
    //       iframe.onreadystatechange = function () {
    //         if (iframe.readyState == "complete") {
    //           hideFn();
    //         }
    //       };
    //     }
    //   }
    // }, 16);
  }

  render() {
    return (
      <div id="docs-page" className="main">
        <Layout className="site-layout">
          <Header className="site-header">
            <TopNav active="docs"/>
          </Header>
          <Content id="innerDoc" className="site-content">
            {this.props.children}
          </Content>
        </Layout>
      </div>
    )
  }
}

DocsPage.propTypes = {
  params: React.PropTypes.object,
  children: React.PropTypes.node,
};

export default DocsPage;
