import React from 'react';
import { Button, Row, Col, Input, notification, Modal, Alert } from 'antd';
import { Link } from 'react-router';
import { HighLights } from '../homePageComponents';
import Clipboard from 'clipboard';
import git from './../../../../config/git.yml';

import './index.less';

class CenterContent extends React.Component {
  state = {
    modalVisible: false,
  }
  setModalVisible = (modalVisible) => {
    this.setState({
      modalVisible,
    }, () => {
      if (modalVisible) {
        const self = this;
        const input = document.getElementById('J-input');
        const b = new Clipboard(document.getElementById('J-button'), {
          target: () => input,
        });
        b.on('success', () => self.openNotification(input.value));
        const inputDebug = document.getElementById('J-input-debug');
        const bDebug = new Clipboard(document.getElementById('J-button-debug'), {
          target: () => inputDebug,
        });
        bDebug.on('success', () => self.openNotification(inputDebug.value));
      }
    });
  }
  openNotification = (text) => {
    const args = {
      message: '复制成功',
      description: text,
      duration: 2.0,
    };
    notification.open(args);
  };

  goToGitlib = (url, e) => {
    e.preventDefault();
    window.open(url, '_blank');
  }
  render() {
    return (
      <div className="content-wrapper">
        <section className="site-slider">
          <div className="content">
            <div className="content-l1">
              一款轻量级 HTML5 2D 游戏引擎
            </div>
            <Button><Link to="/tutorial">快速开始</Link></Button>
            <br />
            <Button className="small" onClick={() => this.setModalVisible(true)}>下载Tiny</Button>
            <Button className="small"><a target="_blank" rel="noopener noreferrer" href={git.git}>访问Git</a></Button>
          </div>
          <Modal
            title="下载Tiny"
            wrapClassName="vertical-center-modal"
            visible={this.state.modalVisible}
            onOk={(e) => { this.goToGitlib(git.tiny, e); this.setModalVisible(false); }}
            onCancel={() => this.setModalVisible(false)}
            okText={'下载'}
          >
            <Row className={'cdn-row'} gutter={1} type="flex" justify="space-around" align="middle">
              <Col xs={{ span: '4', offset: '0' }} md={{ span: '4' }}>
                <span>最新版本</span>
              </Col>
              <Col xs={{ span: '18', offset: '0' }} md={{ span: '19' }}>
                <Input id="J-input" defaultValue={git.tiny} />
              </Col>
              <Col xs={{ span: '2', offset: '0' }} md={{ span: '1' }}>
                <Button id="J-button" icon="copy" />
              </Col>
            </Row>
            <br />
            <Row className={'cdn-row'} gutter={1} type="flex" justify="space-around" align="middle">
              <Col xs={{ span: '4', offset: '0' }} md={{ span: '4' }}>
                <span>debug版本</span>
              </Col>
              <Col xs={{ span: '18', offset: '0' }} md={{ span: '19' }}>
                <Input id="J-input-debug" defaultValue={git.tinyd} />
              </Col>
              <Col xs={{ span: '2', offset: '0' }} md={{ span: '1' }}>
                <Button id="J-button-debug" icon="copy" />
              </Col>
            </Row>
            <br />
            <Row className={'cdn-row'} gutter={1} type="flex" justify="space-around" align="middle">
              <Col xs={{ span: '4', offset: '0' }} md={{ span: '4' }}>
                <span>npm</span>
              </Col>
              <Col xs={{ span: '18', offset: '0' }} md={{ span: '19' }}>
                <Alert message=" Tiny.js 官方不建议使用 npm 方式安装" type="warning" />
              </Col>
              <Col xs={{ span: '2', offset: '0' }} md={{ span: '1' }} />
            </Row>
          </Modal>
        </section>
        <section className="site-highlights">
          <HighLights highlights={this.props.highlights} />
        </section>
      </div>
    );
  }
}

CenterContent.propTypes = {
  highlights: React.PropTypes.array,
};

CenterContent.defaultProps = {
  highlights: [],
};
export default CenterContent;
