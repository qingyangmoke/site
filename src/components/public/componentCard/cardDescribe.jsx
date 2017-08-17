import React from 'react';

import './card-describe.less';

const STATE = {
  hide: 'hide',
  show: 'show',
};

class CardDescribe extends React.Component {
  show = () => {
    this.setState({ state: STATE.show });
  }
  render() {
    return (
      <div className={`card-describe ${this.props.state === STATE.show ? 'show' : 'hide'}`} style={{ }}>
        {this.props.children}
      </div>
    );
  }
}

export default CardDescribe;
