import React from 'react';
import {Layout} from 'antd';
import menuConfig from '../../../../config/examples.yml';
import QRCode from 'qrcode.react';

const {Content} = Layout;

class Demo extends React.Component {
  pathToURL(path) {
    const a = document.createElement('a');
    a.href = path;
    return a.href;
  }

  render() {
    const currentMenuConfig = menuConfig[this.props.params.demoName] || {};
    const defaultMenuConfig = menuConfig['_default']; //eslint-disable-line
    const frameStyle = {
      width: currentMenuConfig.width || defaultMenuConfig.width,
      height: currentMenuConfig.height || defaultMenuConfig.height,
    };
    if (currentMenuConfig.direction && currentMenuConfig.direction == 'h') { //eslint-disable-line
      var w = frameStyle.width; //eslint-disable-line
      frameStyle.width = frameStyle.height;
      frameStyle.height = w;
    }

    if (window.__DEV_ENV__ && currentMenuConfig.link.indexOf('dist') === -1) {
      currentMenuConfig.link = 'dist/' + currentMenuConfig.link;
    }

    return (
      <Layout className={'frame-container'}>
        <div>
          <div className={'qrcode-show qrcode-container'}>
            <a href={currentMenuConfig.git}
                     className="source-link-btn"
                     target="_blank">查看源码</a>
            <QRCode value={this.pathToURL(currentMenuConfig.link)}/>
          </div>
          <Content
            id="innerFrame"
            className={`p-content p-content-with-leftSider phone ${currentMenuConfig.direction || defaultMenuConfig.direction}`}
          >
            <div
              className="frame"
              style={frameStyle}
              id="frame"
            >
              <iframe ref={(e) => { this.frame = e; }}
                      src={currentMenuConfig.link}
                      className={'frame-window'}
                      frameBorder="0"
                      width="100%"
                      height="100%"
                      scrolling="no"
                      allowTransparency="yes"/>
            </div>
          </Content>
        </div>
      </Layout>
    );
  }
}

Demo.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default Demo;
