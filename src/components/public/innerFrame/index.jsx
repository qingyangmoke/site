import React from 'react';
import Highlight from 'react-highlight';
import ep from '../../../common/lib/ep';

import './index.less';

class InnerFrame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      frame: '',
    };
  }

  componentDidMount() {
    const {path} = this.props;
    this.getFrame(path);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPath = prevProps.path;
    const {path} = this.props;

    if (prevPath !== path) {
      this.getFrame(path);
      window.scroll(0, 0);
    }
  }

  getFrame(path) {
    const {root} = this.props;
    fetch(`./build/${root}/${path}.html`).then(res =>
      res.text()).then(frame => {
      if (~frame.indexOf('iframe')) {
        frame = frame.replace('width="1400"', `width="100%"`);
        frame = frame.replace('height="800"', `height="100%" border="0" scrolling="no" allowtransparency="yes" id="J-iframe"`);
      }

      this.setState({
        frame,
      });
      ep.emit('frame');
    });
  }

  render() {
    return (
      <Highlight innerHTML={true}>
        {this.state.frame}
      </Highlight>
    );
  }
}

export default InnerFrame;
