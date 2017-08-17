import React from 'react';
import PlaygroundData from '../../../../config/playground.yml';
import {Layout} from 'antd';

class Playground extends React.Component {
  render() {
    let data = {};
    const params = this.props.params;
    if (params.name) {
      data = PlaygroundData[params.name];
    } else {
      data = PlaygroundData[params.fatherName].children[params.sonName];
    }
    if (window.__DEV_ENV__ && data.url.indexOf('dist') === -1) {
      data.url = 'dist/' + data.url;
    }
    return (
      <Layout className={'frame-container'}>
        <iframe src={data.url} className={'frame-window'}/>
      </Layout>
    );
  }
}

Playground.propTypes = {
  params: React.PropTypes.object.isRequired,
};

export default Playground;
