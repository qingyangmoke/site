import React from 'react';
import Highlight from 'react-highlight';
import ep from '../../../common/lib/ep';

import 'highlight.js/styles/monokai-sublime.css';
import mediumZoom from 'medium-zoom';
import './index.less';

class InnerDoc extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      doc: '',
    };
  }

  componentDidMount() {
    const {path} = this.props;
    this.getDoc(path);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPath = prevProps.path;
    const {path} = this.props;
    const zoom = mediumZoom('#doc img');

    if (prevPath !== path) {
      this.getDoc(path);
      window.scroll(0, 0);
    }
  }

  getDoc(path) {
    const {root} = this.props;
    fetch(`./build/${root}/${path}.html`).then(res =>
      res.text()).then(doc => {
      if (~doc.indexOf('iframe')) {
        const contentEl = document.querySelector('.site-content');
        doc = doc.replace('width="1400"', `width="100%"`);
        doc = doc.replace('height="800"', `height="${contentEl.clientHeight}" border="0" scrolling="auto" allowtransparency="yes" id="J-iframe"`);
      }

      this.setState({
        doc,
      });
      ep.emit('doc');
    });
  }

  render() {
    const markup = {
      __html: this.state.doc,
    };
    return (
      <div className="markdown" id="doc">
        <Highlight innerHTML={true}>
          {this.state.doc}
        </Highlight>
      </div>
    );
  }
}

export default InnerDoc;
