import React from 'react';
import { hashHistory } from 'react-router';

import './docModal.less';

export default class DocModal extends React.Component {
  static propTypes = {
    docModalLink: React.PropTypes.string,
    docModalVisible: React.PropTypes.bool,
  }
  constructor(props) {
    super(props);
    this.state = {
      docModalVisible: false,
    };
    this.closeDocModal = this.closeDocModal.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        docModalVisible: this.props.docModalVisible,
      });
      document.body.style.overflow = 'hidden';
    });
  }
  closeDocModal() {
    this.setState({
      docModalVisible: false,
    });
    document.body.style.overflow = '';
    setTimeout(() => {
      hashHistory.push('/plugins');
    }, 300);
  }
  render() {
    return (
      <div>
        <div
          className="doc-modal"
          style={{ display: this.state.docModalVisible ? 'block' : 'none' }}
          onClick={this.closeDocModal}
        />
        <div
          className="doc-container"
          style={{
            right: (this.state.docModalVisible ? 0 : '-960px'),
          }}
        >
          <a
            href="javascript:void(0)"
            className="doc-container-close"
            onClick={this.closeDocModal}
          />
          <iframe
            src={this.props.docModalLink}
            frameBorder="0"
            width="100%"
            height="100%"
            scrolling="auto"
            allowTransparency="yes"
          />
        </div>
      </div>
    );
  }
}
