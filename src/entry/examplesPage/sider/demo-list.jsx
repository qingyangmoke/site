import React from 'react';
import { hashHistory } from 'react-router';
import { Card } from 'antd';
import mobile from 'is-mobile';
import './democard.less';

class DemoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data;
  }
  render() {
    return (
      <Card className={'card'} title={this.state.name} onClick={() => this.props.onClick(this.state)}>
        {
          <div>
            <img src={this.state.img} alt="" />
            <p className={'desc'}>{this.state.desc}</p>
          </div>
        }
      </Card>
    );
  }
}

DemoItem.propTypes = {
  data: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func,
};

export default class DemoList extends React.Component { // eslint-disable-line
  constructor(props) {
    super(props);
    this.state = {
      data: Object.keys(this.props.data).map((k) => {
        if (k !== '_default') {
          return {
            ...props.data[k],
            _URL_: k,
          };
        }
        return null;
      }).filter($ => $ !== null),
    };
  }
  onClick = (demo) => {
    mobile() ? window.open(demo.link, '_blank') : hashHistory.push(`/examples/${demo._URL_}`);// eslint-disable-line
  }
  render() {
    const list = this.state.data.map((demo, k) => <DemoItem
      key={k}
      data={demo}
      onClick={() => { this.onClick(demo); }}
    />);
    return <div>{list}</div>;
  }
}


DemoList.propTypes = {
  data: React.PropTypes.object.isRequired,
};
