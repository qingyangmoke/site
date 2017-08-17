import { Card, Row, Col } from 'antd';
import React from 'react';
import './index.less';

class BlogListItem extends React.Component {
  constructor() {
    super();
    this._jump = this.jump.bind(this);
  }
  jump(e) {
    if (e.target.nodeName.toLowerCase() === 'a') {
      return;
    }
    e.stopPropagation();
    this.props.router.push(`/blogs/${this.props.link}`);
  }
  render() {
    return (
      <Row>
        <br />
        <Col xs={24} sm={24} md={{ span: 12, offset: 6 }}>
          <Card onClick={this._jump} title={this.props.name || 'no title set...'} className={'list-card'}>
            {
              this.props['auther-link']
              ? <a href={this.props['auther-link']}>@{this.props.auther || '红领巾'}</a>
              : <span>@{this.props.auther || '红领巾'}</span>
            }
            <span className={'card-time'}>{(new Date(this.props.time)).toLocaleDateString() || ''}</span>
            <br /><br />
            <p>{this.props.desc || 'no desc set...'}</p>
          </Card>
        </Col>
      </Row>
    );
  }
}

BlogListItem.propTypes = {
  link: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  desc: React.PropTypes.string,
  auther: React.PropTypes.string,
  time: React.PropTypes.string,
  'auther-link': React.PropTypes.string,
  router: React.PropTypes.shape({
    push: React.PropTypes.func,
  }),
};

export default BlogListItem;
