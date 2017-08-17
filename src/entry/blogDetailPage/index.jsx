import React from 'react';
import { Layout, Breadcrumb, Alert } from 'antd';
import { TopNav } from '../../components/public/publicComponents';
import { Link } from 'react-router';
import blogs from '../../../config/blogs.yml';
import './index.less';

const { Header, Content } = Layout;

class BlogDetailPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    try {
      /* eslint-disable no-new */
      new AntSay(this.commentContainer, { appId: 'c6b89d7e-f2bf-4897-a76a-9572e0beb4e9', key: this.props.params && this.props.params.splat });
    } catch (e) {
      /* eslint-disable no-console */
      console.log(e.message);
    }
  }
  render() {
    const key = this.props.params && this.props.params.splat;
    if (!key) {
      return (<Alert message="没有这篇文章..." type="error" />);
    }
    const name = blogs[key] && blogs[key].name;
    if (!name) {
      return (<Alert message="没有这篇文章..." type="error" />);
    }
    return (
      <div id="blog-detail-page" className="main">
        <Layout className="site-layout">
          <Header className="site-header">
            <TopNav active="blogs" />
          </Header>
          <Content className="site-content">
            <div className="content-wrapper docs-layout">
              <div id="innerDoc" className="p-docs-content">
                <Breadcrumb>
                  <Breadcrumb.Item><Link to={'/blogs'}>博客</Link></Breadcrumb.Item>
                  <Breadcrumb.Item>{name}</Breadcrumb.Item>
                </Breadcrumb>
                {this.props.children}
                <div className="comment-cell" ref={(c) => { this.commentContainer = c; }} />
              </div>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

BlogDetailPage.propTypes = {
  children: React.PropTypes.node,
  params: React.PropTypes.shape({ splat: React.PropTypes.string.isRequired }),
};

export default BlogDetailPage;
