import React from 'react';
import BlogListItem from './blogListItem';
import { Alert, Row, Col, Pagination } from 'antd';


class BlogList extends React.Component {
  constructor() {
    super();
    this.state = {
      pageNumber: 1,
      pageSize: 5,
    };
    this._onPageChange = this.onPageChange.bind(this);
  }
  onPageChange(pageNumber) {
    this.setState({ pageNumber });
  }
  render() {
    const lists = this.props.list;
    const keys = lists && Object.keys(lists);
    if (lists == null || keys.length === 0) {
      return (
        <Row>
          <br />
          <Col
            md={{ span: 12, offset: 6 }}
            sm={{ span: 24 }}
          >
            <Alert message="暂无文章，敬请期待..." type="warning" />
          </Col>
        </Row>);
    }
    const showList = {};
    for (let i = (this.state.pageNumber - 1) * this.state.pageSize;
      i < this.state.pageNumber * this.state.pageSize && i < keys.length;
      i++) {
      showList[keys[i]] = lists[keys[i]];
    }
    /* eslint-disable */
    let { list, ...otherprops } = this.props;
    const map = [];
    for (const k in showList) {
      if ({}.hasOwnProperty.call(showList, k)) {
        showList[k].link = k;
        map.push(<BlogListItem {...showList[k]} {...otherprops} key={k} />);
      }
    }
    return (
      <div>
        {map}
        <Row>
          <br />
          <Col md={{ span: 12, offset: 6 }}
            className={'page-container'}
            sm={{ span: 24 }}>
            <Pagination showQuickJumper
              defaultCurrent={this.state.pageNumber}
              current={this.state.pageNumber}
              pageSize={this.state.pageSize}
              total={Object.keys(lists).length}
              onChange={this._onPageChange} />
          </Col>
        </Row>
      </div>
    );
  }
}

BlogList.propTypes = {
  list: React.PropTypes.object.isRequired,
};

export default BlogList;
