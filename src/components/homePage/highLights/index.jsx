import React from 'react';
import { Row, Col } from 'antd';

import './index.less';

class HighLight extends React.Component {
  render() {
    const highlights = this.props.highlights;
    const cardList = highlights.map((highlight, index) => (
      <Col className="hl-card" key={`card ${index}`} lg={3} md={3} sm={20} xs={20}>
        <div className="hl-card-title">{highlight.title}</div>
        <div className="hl-card-content">{highlight.content}</div>
      </Col>),
    );
    return (
      <Row type="flex" justify="space-around" className="hl-list">
        {cardList}
      </Row>
    );
  }
}

HighLight.propTypes = {
  highlights: React.PropTypes.array,
};

HighLight.defaultProps = {
  highlights: [],
};

export default HighLight;
