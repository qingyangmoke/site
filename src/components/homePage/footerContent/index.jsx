import React from 'react';
import './index.less';


class FooterContent extends React.Component {
  render() {
    const partenerList = this.props.parteners || [];

    const parteners = partenerList.map((item) => {
      if (item.src) {
        return ((<a href={item.src} key={item.name} className="f-partener" target="_blank"><img src={item.logo} alt={item.name} /></a>));
      }
      return (<img src={item.logo} key={item.name} className="f-partener" alt={item.name} />);
    });

    const partenerHtml = parteners.length ?
      (<div className="f-parteners">
        <h3>相关站点</h3>
        <div className="f-partener-list">
          {parteners}
        </div>
      </div>) : null;

    const signature = this.props.signature;

    const signatureHtml = signature ?
      (<div className="f-signature">
        <div className="f-signature-logo">{signature.logo}</div>
        <div className="f-signature-text">{signature.content}</div>
      </div>) : null;

    return (
      <div className="footer-content">
        {partenerHtml}
        {signatureHtml}
      </div>);
  }
}

FooterContent.propTypes = {
  parteners: React.PropTypes.array,
  signature: React.PropTypes.object,
};
FooterContent.defaultProps = {
  parteners: [],
  signature: {},
};
export default FooterContent;
