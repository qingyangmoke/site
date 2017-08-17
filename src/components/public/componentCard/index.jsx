import React from 'react';
import { Col, Menu, Popover, Alert } from 'antd';
import { hashHistory } from 'react-router';
import mobile from 'is-mobile';
import CardDescribe from './cardDescribe.jsx';
import AwesomeCard from '@alipay/luna-awesome-card';
import './componentCard.less';

const camelCase = require('../../../common/lib/camelcase');

function firstUpperCase(str) {
  return str.toString()[0].toUpperCase() + str.toString().slice(1);
}

class ComponentCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: false,
      showActionList: false,
      qrText: '',
      showDesc: false,
    };
  }

  showActionList() {
    this.setState({ showActionList: true });
  }

  hideActionList() {
    this.setState({ showActionList: false });
  }

  activeBackground() {
    this.setState({ activeImg: true });
    if (this.video) {
      this.video.play();
    }
  }

  handClick = () => {
    this.props.onClick(this.props.component.name);
  }

  handleDocs = (e, name) => {
    if (!mobile()) {
      e.preventDefault();
      hashHistory.push(`/plugins/${name}/docs`);
    }
  }
  handleDemo = (e, name) => {
    if (!mobile()) {
      e.preventDefault();
      hashHistory.push(`/plugins/${name}/demo`);
    }
  }

  componentDidMount() {
    // AwesomeCard(this.card, {
    //   isMobile: false,
    // });
  }

  disActiveBackground() {
    this.setState({ activeImg: false });
    if (this.video) {
      this.video.pause();
    }
  }

  renderDownloadLink(card, type) {
    if (card.version === '未发布') {
      return (
        <a
          className="disabled"
        >
          {type === 'pc' ? '下载' : '引用'}
        </a>
      );
    }

    const cdn = this.props.component.cdn;
    const downloadLink = (type === 'pc') ? <a href={cdn} target="blank" download="index.js">下载</a> : <a>引用</a>;
    const downloadInstruction = (type === 'pc') ?
      (<div className="c-instruction">
        <div>点击<a href={cdn} download="index.js">下载</a>, 可以直接下载到本地</div>
      </div>) : '';

    return (
      <Popover
        content={
          <div className="c-install-info">
            <Alert message="推荐使用npm作为依赖引用:" type="warning" showIcon />
            <div className="c-instruction">
              <div className="code">{`npm install ${card.name} --save`}</div>
            </div>
            <div className="c-instruction">
              <div>也可以直接引用线上cdn地址:</div>
              <a href={cdn} target="_blank" rel="noopener noreferrer">{cdn}</a>
            </div>
            {downloadInstruction}
          </div>
        }
        title="插件引用方式"
      >
        {downloadLink}
      </Popover>
    );
  }

  render() {
    const card = this.props.component;
    const name = card.selfName || firstUpperCase(camelCase(card.name.replace('tinyjs-plugin-', '')));
    return (
      <Col
        className="component-card"
        lg={{ span: 6 }}
        md={8}
        sm={24}
        xs={24}
      >
        <div className={`c-content ${this.props.showDesc ? 'show-desc' : ''}`} ref={(ref) => { this.card = ref; }}>
          {
            card.video
              ?
              <div
                onClick={this.handClick}
                onMouseEnter={() => { this.showActionList(); this.activeBackground(); }}
                onMouseLeave={() => { this.hideActionList(); this.disActiveBackground(); }}
                className="c-background-video"
              >
                <video ref={(ref) => { this.video = ref; }} loop="true">
                  <source src={`${card.video}`} />
                </video>
              </div>
              :
              <div
                onMouseEnter={() => { this.showActionList(); this.activeBackground(); }}
                onMouseLeave={() => { this.hideActionList(); this.disActiveBackground(); }}
                onClick={this.handClick}
                className={`c-background-img ${this.state.activeImg ? 'active' : ''}`}
                style={{ backgroundImage: `url(${card.image})` }}
              />
          }
          {card.info}
        </div>
        <CardDescribe state={this.props.showDesc ? 'show' : 'hide'}>
          <div className="c-detail">
            <div className="c-name">
              {name}
            </div>
            <div className="c-des">
              {card.desc}
            </div>
          </div>
          <Menu mode="horizontal" className={'c-action-list show'}>
            <Menu.Item>
              <a onClick={(e) => { this.handleDemo(e, card.name); }} href={`${window.__DEV_ENV__ ? 'dist/' : ''}plugins/${card.name}/demo/`} target="blank">示例</a>
            </Menu.Item>
            <Menu.Item>
              <a onClick={(e) => { this.handleDocs(e, card.name); }} href={`${window.__DEV_ENV__ ? 'dist/' : ''}plugins/${card.name}/docs/`} target="blank">文档</a>
            </Menu.Item>
            <Menu.Item>
              <a href={card.git ? card.git : `https://github.com/ant-tinyjs/${card.name}`} target="blank">源码</a>
            </Menu.Item>
            <Menu.Item className="c-pc-reference">
              {this.renderDownloadLink(card, 'pc')}
            </Menu.Item>
            <Menu.Item className="c-mobile-reference">
              {this.renderDownloadLink(card, 'mobile')}
            </Menu.Item>
          </Menu>
        </CardDescribe>
      </Col>
    );
  }
}

ComponentCard.propTypes = {
  component: React.PropTypes.object,
};
ComponentCard.defaultProps = {
  component: {},
};

export default ComponentCard;
