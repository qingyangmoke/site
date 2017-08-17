import React from 'react';
import { Collapse } from 'antd';
import mobile from 'is-mobile';
import { hashHistory } from 'react-router';
import './test-list.less';


export default class TestList extends React.Component {
  onClick = (child) => {
    mobile() ? window.open(child.url, '_blank') : hashHistory.push(`/playground/${child._URL_}`); // eslint-disable-line
  }

  render() {
    const playgrounds = Object.keys(this.props.playgroundData).map(
      (k) => {
        const obj = this.props.playgroundData[k];
        if (obj.type === 'dir') {
          const childrenKeys = Object.keys(obj.children);
          const childrenWithURL = childrenKeys.map((childKey) => { //eslint-disable-line
            return ({ ...(obj.children[childKey]), _URL_: `${k}/${childKey}` });
          });
          return ({ ...obj, children: childrenWithURL });
        }
        return ({ ...obj, _URL_: k });
      } // eslint-disable-line
    );
    let content = playgrounds.map(($, k) => {
      if (!$) {
        return null;
      }
      if ($.type === 'dir') {
        const categoryName = $.name;
        const children = $.children;
        const childrenDOM = [];
        for (const child of children) {
          childrenDOM.push(
            <div key={child._URL_} className="test-list-item">
              <a
                className={child._URL_ === `${this.props.params.fatherName}/${this.props.params.sonName}` ? 'selected' : ''}
                onClick={
                  () => {
                    this.onClick(child);
                  }
                }
              >
                {child.name}{child.desc ? ' - ' + child.desc : ''}
              </a>
            </div>);
        }
        return (
          <Collapse.Panel key={k} header={categoryName}>
            {
              childrenDOM
            }
          </Collapse.Panel>
        );
      }
      return (
        <Collapse.Panel key={k} header={$.name}>
          <div>
            <a
              className={$._URL_ === `${this.props.params && this.props.params.name}` ? 'selected' : ''}
              onClick={
                () => {
                  this.onClick($);
                }
              }
            >
              {$.desc}
            </a>
          </div>
        </Collapse.Panel>
      );
    });

    const activeKeys = playgrounds.map(($, k) => `${k}`);
    content = <Collapse bordered={false} defaultActiveKey={activeKeys}>{content}</Collapse>;

    return (
      <div id="testlist">
        {content}
      </div>
    );
  }
}


TestList.propTypes = {
  playgroundData: React.PropTypes.object.isRequired,
  params: React.PropTypes.object,
};
TestList.defaultProps = {
  params: {},
};
