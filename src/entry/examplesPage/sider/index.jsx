import React from 'react';
import DemoList from './demo-list.jsx';
import menuConfig from '../../../../config/examples.yml';
import { Layout } from 'antd';

const { Sider } = Layout;

class SiderBar extends React.Component {
  render() {
    return (
      <Sider collapsible={false} collapsed={false} collapsedWidth={1} breakpoint={'xs'} trigger={null} className={'list-sider'} width={300}>
        <div className={'trans-container'}>
          <div className={`trans-left`}>
            <DemoList data={menuConfig} />
          </div>
        </div>
      </Sider>
    );
  }
}

SiderBar.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default SiderBar;
