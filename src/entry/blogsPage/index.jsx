import React from 'react';
import { Layout } from 'antd';
import { TopNav } from '../../components/public/publicComponents';
import BlogList from './blogList';
import blogsConfig from '../../../config/blogs.yml';
import './index.less';

const { Header, Content } = Layout;

class BlogsPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div id="blogs-page" className="main">
        <Layout className="site-layout">
          <Header className="site-header">
            <TopNav active="blogs" />
          </Header>
          <Content className="site-content">
            <BlogList list={blogsConfig} {...this.props} />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default BlogsPage;
